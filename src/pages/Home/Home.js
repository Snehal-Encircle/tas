import React, { useEffect, useState } from 'react';
import './Home.css';
import Header from '../../components/header/Header';
import Footer from '../../components/Footer/Footer';
import { Swiper, SwiperSlide } from "swiper/react";

import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap_white.css";



import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'

import { Autoplay, Pagination, EffectFade, Navigation, Scrollbar, EffectCoverflow } from "swiper";
import 'swiper/css';

import Modal from "react-modal";
import ReactPlayer from "react-player";
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function Home() {
    const [curentSlide, setCurentSlide] = useState(0);
    useEffect(() => {
        document.body.classList.remove("menu-open");
        gsap.registerPlugin(ScrollTrigger);



    }, []);

    const [modalIsOpenVideo, setIsOpenVideo] = React.useState(false);

    function openModalVideo() {
        document.body.classList.add("video-modal-open");
        setIsOpenVideo(true);
    }
    function closeModalVideo() {
        document.body.classList.remove("video-modal-open");
        setIsOpenVideo(false);
    }

    const handleNextClickStay = () => {
        const swiper = document.querySelector(".our-partners .swiper").swiper;
        swiper.slideNext();
    };
    const handlePrevClickStay = () => {
        const swiper = document.querySelector(".our-partners .swiper").swiper;
        swiper.slidePrev();
    };

    const customStylesVideo = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'transparent',
            border: '0',
            borderRadius: '0',
            padding: '0',
            width: '100%',
            height: '100%',
            zindex: '999',
        },
    };

    const handleSlideChange = (() => {
        const swiper = document.querySelector(".trip-slider .swiper").swiper
        console.log(swiper)
    })
    return (
        <React.Fragment>

            <Header></Header>

            <section className='banner h-screen relative'>
                <div className='banner-img h-full flex items-end justify-start'>
                    <div className='img'>
                        <img src="../images/banner-bg.jpg" alt="" />
                    </div>
                    {/* <div className='video absolute w-full h-full'>
                        <video autoPlay muted loop >
                            <source src="../images/private-house.mp4" type="video/mp4"/>
                        </video>
                    </div> */}
                    <div className='banner-info px-15 text-left z-9 relative lg:pl-70 pb-100 max-w-[850px] mdscreen:pb-50'>
                        <div className='banner-video py-10'>
                            <button onClick={() => { openModalVideo(); }} className='flex justify-start items-center'>
                                <div className='video-icon w-20 relative top-[-2px]'>
                                    <img src="../images/play.png" className='m-auto' alt="Play" />
                                </div>
                                <span className='text-white font-secondary text-17 ml-10'>Watch Video</span>
                            </button>
                        </div>
                        <h1 className='lg:text-55 lg:leading-60 xlscreen:text-[45px] xlscreen:leading-45 lgscreen:text-35 mdscreen:text-26 mdscreen:leading-27 lgscreen:mb-5 text-white uppercase'>your personal connection in Africa</h1>
                        <div className='banner-form mt-20'>
                            <form>
                                <div className='flex flex-wrap lg:mx-minus-20 mx-minus-10'>

                                    <div className='form-group lg:px-20 px-10'>
                                        <select>
                                            <option>Where would you like to go?</option>
                                            <option>Africa</option>
                                            <option>East Africa</option>
                                            <option>Indian Ocean Islands</option>
                                        </select>
                                    </div>


                                    <div className='form-group lg:px-20 px-10'>
                                        <select>
                                            <option>Where would you like to go?</option>
                                            <option>Africa</option>
                                            <option>East Africa</option>
                                            <option>Indian Ocean Islands</option>
                                        </select>
                                    </div>


                                    <div className='btn-custom'>
                                        <Link to="/" className='button btn-transparent'><span>Search</span>
                                            <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.58228 2L116 2.50667L115.127 39.4933L1 40L1.58228 2Z" fill="white" />
                                                <path d="M115.962 39.4319C114.738 39.7185 113.731 38.9203 112.63 39.3344L112.771 39.5445C111.97 39.6925 112.606 39.0123 111.775 39.2988C111.447 39.4778 111.859 39.5649 111.705 39.5806C109.989 39.5187 108.22 39.7291 106.612 39.2375C106.218 39.7029 104.779 39.2599 104.149 39.7281C103.707 39.5539 103.266 39.6054 103.095 39.2805C97.1261 39.5975 91.0234 39.2299 84.9061 39.3414C82.0387 38.4922 78.618 39.5932 75.2195 39.3354C75.1951 39.3679 75.2002 39.4047 75.22 39.4275C73.8747 39.2041 72.5233 39.1499 71.1748 39.2651L70.0527 38.9057C62.1037 39.7765 65.336 39.1982 57.2571 39.6239C48.0772 39.957 40.0393 40.7 31.0921 39.6441C31.0925 39.7316 31.0315 39.7784 31.2621 39.8124C28.6828 39.6643 26.3341 40.0153 23.9091 39.8608L23.9096 39.9482C18.6392 39.3725 6.79448 40.0744 0.00588123 39.7797L0.000470314 38.7758C0.981032 38.8006 1.92998 38.8719 2.87212 39.0446L2.85152 38.8607C7.74208 39.4411 21.0493 38.5924 26.1135 38.6549C28.216 38.5555 29.6387 38.7546 31.7514 38.738L31.8017 38.5117C35.3626 39.3294 39.2727 37.6376 42.9885 38.5409L42.7418 38.2353C43.3202 38.6888 44.9859 38.0375 44.7697 38.8645L45.4252 38.6078C47.9506 39.6592 50.0082 38.0499 53.1025 38.7121L52.8981 38.5212C53.6907 38.7044 54.4913 38.7255 55.2858 38.5841C55.1925 38.553 55.2363 38.4972 55.0399 38.449C55.2332 38.3867 55.3629 38.3391 55.4411 38.2967C55.9729 38.2902 56.4925 38.2838 56.9609 38.3334L56.8571 38.1643L57.7309 38.3931L57.7511 38.0474C59.9961 38.02 62.1103 38.2659 64.2992 38.2806L64.1847 37.9688C66.2244 38.4966 68.5204 37.9159 70.6784 38.1198L70.5308 38.0111C76.0006 37.8245 81.0473 38.2787 86.4651 38.4474C86.3816 38.4162 86.3517 38.3244 86.2632 38.2887C86.5385 38.4458 86.8231 38.5368 87.1103 38.5593C87.1884 38.4892 87.0286 38.4129 86.9329 38.3864C88.0771 37.8567 90.3022 38.6676 91.0157 38.2629C91.3371 38.3142 91.4804 38.5243 91.3024 38.6923C95.5505 38.7693 100.095 38.8105 104.423 39.1583C104.631 39.0821 104.667 38.9435 104.61 38.7646C108.313 39.5529 112.186 39.174 115.969 38.9897C116.117 39.1997 115.588 39.2062 115.962 39.4319Z" fill="white" />
                                                <path d="M0.0374227 2.09583C1.26076 2.38811 2.26935 1.59451 3.36916 2.01367L3.22784 2.22313C4.0282 2.37474 3.39368 1.69168 4.22485 1.98198C4.55192 2.16249 4.13948 2.24768 4.29378 2.26409C6.01 2.21004 7.77805 2.42858 9.38726 1.94442C9.78077 2.41158 11.2205 1.97523 11.8493 2.44634C12.2918 2.27417 12.7326 2.32763 12.9042 2.00353C18.8726 2.34793 24.9761 2.00837 31.0931 2.14802C33.9624 1.312 37.3806 2.42873 40.7797 2.1865C40.804 2.21915 40.7988 2.25588 40.779 2.27858C42.1248 2.06139 43.4763 2.01335 44.8245 2.13474L45.9474 1.78057C53.8944 2.68785 50.6634 2.0947 58.7413 2.55745C67.9205 2.93279 75.9567 3.71263 84.9063 2.69787C84.9056 2.78537 84.9665 2.83244 84.7359 2.86541C87.3155 2.72915 89.6634 3.09098 92.0887 2.94753L92.088 3.03502C97.3598 2.48347 109.203 3.23977 115.992 2.97624L116 1.97238C115.019 1.99274 114.07 2.05968 113.127 2.22805L113.149 2.04421C108.257 2.60214 94.9514 1.6923 89.8871 1.73153C87.7848 1.62251 86.3617 1.81506 84.249 1.78876L84.1992 1.56226C80.6365 2.3636 76.7302 0.653794 73.0124 1.54003L73.2598 1.23563C72.6803 1.68644 71.0161 1.02751 71.2304 1.85549L70.5755 1.5958C68.0478 2.63559 65.9938 1.0168 62.898 1.66479L63.1029 1.47479C62.3098 1.6544 61.5092 1.67183 60.7151 1.52677C60.8084 1.4961 60.7647 1.4401 60.9612 1.39275C60.768 1.32963 60.6385 1.28139 60.5604 1.23863C60.0285 1.22969 59.509 1.22096 59.0404 1.26835L59.1447 1.0997L58.2703 1.3245L58.2509 0.978765C56.006 0.941033 53.8913 1.17721 51.7024 1.18187L51.8175 0.870637C49.7766 1.38899 47.482 0.797769 45.3235 0.991763L45.4714 0.883722C40.002 0.672057 34.9543 1.10303 29.5361 1.24684C29.6197 1.21601 29.6498 1.12439 29.7383 1.08903C29.4627 1.24492 29.1779 1.33456 28.8906 1.35574C28.8128 1.28535 28.9726 1.20974 29.0684 1.18372C27.9254 0.648695 25.6985 1.44944 24.9859 1.0414C24.6644 1.09126 24.5207 1.30069 24.6983 1.46948C20.45 1.52703 15.9054 1.54735 11.5767 1.87527C11.3689 1.79809 11.3332 1.65934 11.3909 1.4807C7.68625 2.25202 3.81403 1.85534 0.0310007 1.65359C-0.11767 1.86294 0.411711 1.87185 0.0374227 2.09583Z" fill="white" />
                                                <path d="M114.581 40.2903C114.398 39.8748 114.945 39.5349 114.675 39.1609L114.532 39.2083C114.439 38.9365 114.892 39.1534 114.706 38.8709C114.588 38.7595 114.526 38.8991 114.516 38.8468C114.572 38.2651 114.445 37.665 114.79 37.1207C114.479 36.9861 114.79 36.4991 114.479 36.2847C114.6 36.1351 114.569 35.9855 114.79 35.9282C114.625 33.9038 114.923 31.8353 114.898 29.761C115.495 28.7904 114.78 27.6286 114.982 26.4767C114.96 26.4684 114.936 26.4701 114.92 26.4767C115.082 26.021 115.13 25.5629 115.063 25.1055L115.315 24.7257C114.793 22.029 115.156 23.126 114.936 20.3861C114.787 17.273 114.352 14.5463 115.138 11.5147C115.079 11.5147 115.047 11.4939 115.023 11.572C115.144 10.6978 114.926 9.90082 115.051 9.07892L114.992 9.07892C115.423 7.29301 115.047 3.27576 115.302 0.974609L115.98 0.974609C115.955 1.30703 115.899 1.62864 115.775 1.94776L115.899 1.94111C115.467 3.5982 115.93 8.11159 115.846 9.82852C115.896 10.5415 115.75 11.0236 115.743 11.7399L115.896 11.7574C115.315 12.9632 116.424 14.292 115.784 15.5502L115.992 15.4671C115.681 15.6624 116.107 16.2284 115.551 16.1536L115.719 16.3763C114.988 17.2306 116.057 17.9312 115.585 18.9791L115.716 18.9101C115.585 19.1785 115.565 19.4499 115.653 19.7196C115.675 19.688 115.712 19.7029 115.747 19.6365C115.787 19.7021 115.818 19.7462 115.846 19.7727C115.846 19.9531 115.846 20.1293 115.809 20.288L115.924 20.2531L115.762 20.5489L115.995 20.5564C115.995 21.3177 115.812 22.034 115.784 22.7761L115.995 22.7379C115.622 23.4285 115.995 24.208 115.84 24.9393L115.914 24.8895C115.995 26.7443 115.647 28.4546 115.489 30.2912C115.51 30.263 115.573 30.253 115.597 30.2231C115.489 30.3161 115.425 30.4125 115.408 30.5098C115.455 30.5364 115.507 30.4824 115.526 30.45C115.874 30.8389 115.308 31.5918 115.576 31.8345C115.538 31.9433 115.395 31.9915 115.284 31.9309C115.197 33.3711 115.131 34.9118 114.861 36.3786C114.911 36.4492 115.004 36.4617 115.125 36.4426C114.563 37.6966 114.787 39.0105 114.88 40.2936C114.737 40.3435 114.737 40.164 114.581 40.2903Z" fill="white" />
                                                <path d="M1.41855 0.987039C1.60186 1.40256 1.05504 1.74245 1.32534 2.11642L1.46825 2.06905C1.56146 2.3408 1.10784 2.1239 1.29426 2.40645C1.41233 2.51781 1.47448 2.3782 1.4838 2.43056C1.42788 3.01228 1.55526 3.61229 1.21039 4.15663C1.52109 4.29125 1.21039 4.77824 1.52109 4.99265C1.39991 5.14224 1.43098 5.29183 1.21039 5.34917C1.37506 7.37358 1.07678 9.44204 1.10163 11.5163C0.505089 12.487 1.21971 13.6488 1.01776 14.8006C1.0395 14.8089 1.06435 14.8072 1.07988 14.8006C0.918097 15.2563 0.870362 15.7144 0.936971 16.1718L0.685305 16.5516C1.20728 19.2483 0.843753 18.1513 1.06435 20.8913C1.21349 24.0044 1.64848 26.731 0.862407 29.7626C0.921439 29.7626 0.952508 29.7834 0.977364 29.7053C0.856191 30.5796 1.07367 31.3765 0.949393 32.1984L1.00843 32.1984C0.576554 33.9843 0.9525 38.0016 0.697727 40.3027L0.0204052 40.3027C0.0452612 39.9703 0.101179 39.6487 0.225458 39.3296L0.10119 39.3362C0.533062 37.6791 0.0701146 33.1658 0.154003 31.4488C0.104291 30.7358 0.250325 30.2538 0.256539 29.5374L0.1043 29.52C0.685307 28.3141 -0.423893 26.9853 0.216147 25.7271L0.00798366 25.8102C0.318683 25.6149 -0.10698 25.049 0.449171 25.1238L0.2814 24.9011C1.01154 24.0468 -0.057264 23.3462 0.414999 22.2982L0.284491 22.3672C0.414656 22.0988 0.435495 21.8274 0.346635 21.5578C0.324886 21.5894 0.287606 21.5744 0.253429 21.6409C0.213038 21.5752 0.181966 21.5312 0.154003 21.5046C0.154003 21.3243 0.154002 21.1481 0.191285 20.9894L0.0763282 21.0243L0.237898 20.7284L0.00487348 20.7209C0.00487346 19.9597 0.188184 19.2433 0.216147 18.5012L0.00487342 18.5394C0.377712 17.8489 0.00487337 17.0693 0.160223 16.338L0.0856582 16.3879C0.00487634 14.533 0.352858 12.8227 0.511314 10.9861C0.489565 11.0144 0.427414 11.0243 0.402558 11.0543C0.510853 10.9612 0.574553 10.8649 0.592099 10.7676C0.545494 10.741 0.492674 10.795 0.474032 10.8274C0.126049 10.4385 0.691511 9.68554 0.424309 9.44288C0.461593 9.33401 0.604516 9.28581 0.716367 9.34648C0.803363 7.90628 0.868605 6.36553 1.13891 4.89875C1.0892 4.82811 0.996 4.81564 0.874827 4.83476C1.43719 3.58072 1.21348 2.26684 1.12027 0.983714C1.26319 0.933852 1.2632 1.11336 1.41855 0.987039Z" fill="white" />
                                            </svg>

                                        </Link>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <React.Fragment>
                <Modal
                    isOpen={modalIsOpenVideo}
                    onRequestClose={closeModalVideo}
                    style={customStylesVideo}
                >
                    <div className="video-modal-popup h-full">
                        <button onClick={closeModalVideo} className="absolute right-30 top-30 w-50 h-50 bg-white rounded-999 inline-block">
                            <img src="../images/modal-close.png" className='m-auto w-20 h-20' alt="Close" />
                        </button>
                        <div className="modal-video h-full">
                            <ReactPlayer
                                className="modal-banner-video"
                                loop={true}
                                playing={true}
                                controls={true}
                                muted={true}
                                url={"https://www.youtube.com/watch?v=3GX7hYl9w_o&ab_channel=Ken%27sMoneyMatters"}

                            />
                        </div>
                    </div>
                </Modal>
            </React.Fragment>

            <section className='zigzag-author bg-black-400 py-90'>
                <div className='container-fluid'>
                    <div className='flex flex-wrap'>
                        <div className='lg:w-5/12 w-full'>
                            <div className='zigzag-author-slider'>
                                <Swiper
                                    spaceBetween={0}
                                    loop={false}
                                    slidesPerView={1}
                                    speed={900}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={false}
                                    modules={[Autoplay]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className='img gatsby-image-wrapper'>
                                            <img src="../images/author-img.jpg" alt="Author" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='img gatsby-image-wrapper'>
                                            <img src="../images/author-img.jpg" alt="Author" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='img gatsby-image-wrapper'>
                                            <img src="../images/author-img.jpg" alt="Author" />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div className='lg:w-7/12 w-full'>
                            <div className='zigzag-author-content md:px-130 laptop:px-80 lgscreen:px-30 h-full flex flex-col items-center justify-center lgscreen:py-30'>
                                <div className='relative z-9'>
                                    <div className='title-black'>
                                        <h3>decades of Heritage and inspiration</h3>
                                    </div>
                                    <div className='content'>
                                        <p>
                                            Timeless Africa Safaris was inspired by my own unbounded love of travel and Africa. Over the past nineteen years, I have gathered an incredible team of travel specialists who all share my dedication and passion. In showcasing the natural wealth and incredible beauty of Southern and East Africa, we pride ourselves on tailoring bespoke luxury experiences.
                                        </p>
                                    </div>
                                    <div className='author-content flex flex-wrap items-center mt-30'>
                                        <div className='img pr-15'>
                                            <img src="../images/marco.png" alt="Author" />
                                        </div>
                                        <div className='author-info'>
                                            <img src="../images/sign.png" className='max-w-[220px]' alt="Sign" />
                                            <span className='text-12 text-black-500'>Chairman of Timeless Africa Safaris</span>
                                        </div>
                                    </div>
                                    <div className='btn-custom flex flex-wrap items-center space-x-8 mt-30'>
                                        <Link to="/" className='button btn-red-border'>Discover Our Story </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='icon-with-content lg:py-50 py-25 lg:mb-0 mb-0'>
                <div className='container-fluid-xl'>
                    <div className='flex flex-wrap lg:mx-minus-20 lgscreen:gap-y-5 mx-0'>
                        <div className='md:w-3/12 lgscreen:w-50-per smscreen:w-full w-full md:px-20 px-0'>
                            <div className='icon-grid flex items-center'>
                                <div className='icon pr-15'>
                                    <img src="../images/Most-incredible-locations.png" className='max-w-[40px]' alt="Most incredible locations" />
                                </div>
                                <span className='uppercase text-black-200 font-heading text-15 mdscreen:text-12'>Most incredible locations</span>
                            </div>
                        </div>
                        <div className='md:w-3/12 lgscreen:w-50-per smscreen:w-full w-full md:px-20 px-0'>
                            <div className='icon-grid flex items-center'>
                                <div className='icon pr-15'>
                                    <img src="../images/Make-Memories-of-lifetime.png" className='max-w-[40px]' alt="Make Memories of a lifetime" />
                                </div>
                                <span className='uppercase text-black-200 font-heading text-15 mdscreen:text-12'>Make Memories of a lifetime</span>
                            </div>
                        </div>
                        <div className='md:w-3/12 lgscreen:w-50-per smscreen:w-full w-full md:px-20 px-0'>
                            <div className='icon-grid flex items-center'>
                                <div className='icon pr-15'>
                                    <img src="../images/Make-Memories-of-lifetime2.png" className='max-w-[40px]' alt="Make Memories of a lifetime" />
                                </div>
                                <span className='uppercase text-black-200 font-heading text-15 mdscreen:text-12'>Make Memories of a lifetime</span>
                            </div>
                        </div>
                        <div className='md:w-3/12 lgscreen:w-50-per smscreen:w-full w-full md:px-20 px-0'>
                            <div className='icon-grid flex items-center'>
                                <div className='icon pr-15'>
                                    <img src="../images/Experiencee Ultimate-personal-service.png" className='max-w-[40px]' alt="Experiencee Ultimate personal service" />
                                </div>
                                <span className='uppercase text-black-200 font-heading text-15 mdscreen:text-12'>Experiencee Ultimate personal service</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='trip-slider lg:py-120 py-30'>
                <div className='md:w-8/12 w-full m-auto'>
                    <div className='trip-slider-top text-center px-20'>
                        <div className='title-black'>
                            <h3>REAL TRIPS, REAL PEOPLE, REAL MEMORIES</h3>
                        </div>
                        <div className='content w-[474px] smscreen2:w-full smscreen2:px-20 m-auto'>
                            <p>
                                Trips taken by real people cupidatat non proident, sunt in culpa qui officia deserunt sunt in mollit anim id est laborum.
                            </p>
                        </div>
                        <div className='btn-custom flex flex-wrap items-center justify-center space-x-8 mt-30 lg:mb-90 mb-0'>
                            <Link to="/" className='button btn-border'><span>Discover All Trip Inspiration</span>
                                <img src="../images/btn-red-bg.png" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='trip-slider-grid mt-30'>
                    <Swiper
                        spaceBetween={20}
                        loop={false}
                        slidesPerView={2.5}
                        centeredSlides={true}
                        allowTouchMove={true}
                        grabCursor={true}
                        speed={900}
                        scrollbar={{
                            hide: false
                        }}
                        navigation={false}
                        modules={[Autoplay, Pagination, Scrollbar]}
                        className="trip-slider"
                        breakpoints={{
                            100: {
                                slidesPerView: 1.3,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2.5,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 2.5,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className='gatsby-image-wrapper'>
                                <img src="../images/Ladies-Safari-Okavango-Delta.jpg" alt="Gorillas, Chimps and Big Five" />
                            </div>
                            <div className='trip-slider-content pt-30 lg:px-10 px-10'>
                                <div className='trip-top-info flex items-center justify-between mb-10'>
                                    <h5>7 Nights From<span>$19 595 per person</span></h5>
                                    <h6>Curated by <span>Belinda</span></h6>
                                </div>
                                <div className='trip-slider-content-inner flex flex-wrap mdscreen:flex-col'>
                                    <div className='md:w-10/12 w-full lgscreen:w-[75%] mdscreen:w-full mdscreen:order-2'>
                                        <div className='title-black'>
                                            <h5>Ladies Safari to Okavango Delta</h5>
                                        </div>
                                        <div className='content flex mt-5'>
                                            <i class="fas fa-map-marker-alt text-red-300"></i>
                                            <p>
                                                Kigali - Volcanoes National Park - Nyungwe Forest National Park - Sabi Sand Private Game Reserve
                                            </p>
                                        </div>
                                        <div className='btn-custom flex flex-wrap items-start justify-start space-x-8 mt-20'>
                                            <Link to="/" className='button btn-red-border'>Explore Trip Inspiration</Link>
                                        </div>
                                    </div>
                                    <div className='md:w-2/12 w-full lgscreen:w-[25%] mdscreen:w-full mdscreen:order-1'>
                                        <div className='tooltip-grid text-center relative flex justify-end space-x-3 mdscreen:text-left mdscreen:justify-start mdscreen:mb-10'>
                                            <Tooltip placement="top" trigger={['hover']} overlay={<span>Solo Traveller</span>}>
                                                <a href="#">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.89772 6.89774C8.52633 6.89774 9.84659 5.57748 9.84659 3.94887C9.84659 2.32025 8.52633 1 6.89772 1C5.26911 1 3.94885 2.32025 3.94885 3.94887C3.94885 5.57748 5.26911 6.89774 6.89772 6.89774Z" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M12.7955 16.7273H1V15.4167C1 13.8525 1.62137 12.3524 2.72741 11.2464C3.83345 10.1403 5.33356 9.51897 6.89774 9.51897C8.46191 9.51897 9.96202 10.1403 11.0681 11.2464C12.1741 12.3524 12.7955 13.8525 12.7955 15.4167V16.7273Z" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M10.6112 1C11.3933 1 12.1434 1.31068 12.6964 1.8637C13.2494 2.41672 13.5601 3.16678 13.5601 3.94887C13.5601 4.73096 13.2494 5.48101 12.6964 6.03403C12.1434 6.58705 11.3933 6.89774 10.6112 6.89774" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M12.7081 9.76794C13.8245 10.1926 14.7856 10.9463 15.4643 11.9293C16.143 12.9122 16.5073 14.078 16.5088 15.2725V16.7273H14.5429" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </a>
                                            </Tooltip>
                                            <Tooltip placement="top" trigger={['hover']} overlay={<span>tooltip</span>}>
                                                <a href="#">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.07971 16.6802C5.74506 16.6802 7.0951 15.3302 7.0951 13.6648C7.0951 11.9995 5.74506 10.6494 4.07971 10.6494C2.41436 10.6494 1.06433 11.9995 1.06433 13.6648C1.06433 15.3302 2.41436 16.6802 4.07971 16.6802Z" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M7.09509 4.01555V2.20632C7.09509 1.88643 6.96802 1.57964 6.74182 1.35344C6.51562 1.12725 6.20883 1.00017 5.88894 1.00017H4.46568C4.1818 0.995006 3.9052 1.09015 3.68457 1.26886C3.46394 1.44757 3.31342 1.69839 3.25953 1.97715L1.12463 13.0617" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M5.88898 7.0309H11.9197" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M7.09509 10.0463V13.6648" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M13.7289 16.6802C15.3943 16.6802 16.7443 15.3302 16.7443 13.6648C16.7443 11.9995 15.3943 10.6494 13.7289 10.6494C12.0636 10.6494 10.7135 11.9995 10.7135 13.6648C10.7135 15.3302 12.0636 16.6802 13.7289 16.6802Z" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M10.7135 4.01555V2.20632C10.7135 1.88643 10.8406 1.57964 11.0668 1.35344C11.293 1.12725 11.5998 1.00017 11.9197 1.00017H13.3429C13.6268 0.995006 13.9034 1.09015 14.1241 1.26886C14.3447 1.44757 14.4952 1.69839 14.5491 1.97715L16.7081 13.0617" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M10.7135 10.0463V13.6648" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </a>
                                            </Tooltip>
                                            <Tooltip placement="top" trigger={['hover']} overlay={<span>tooltip</span>}>
                                                <a href="#">
                                                    <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.1024 14.0799H17.4471C16.7519 14.0799 16.0851 13.8038 15.5936 13.3122C15.102 12.8206 14.8258 12.1539 14.8258 11.4587C14.8258 12.1539 14.5497 12.8206 14.0581 13.3122C13.5665 13.8038 12.8998 14.0799 12.2046 14.0799C11.5094 14.0799 10.8427 13.8038 10.3511 13.3122C9.85957 12.8206 9.5834 12.1539 9.5834 11.4587C9.5834 12.1539 9.30724 12.8206 8.81567 13.3122C8.32409 13.8038 7.65738 14.0799 6.96219 14.0799C6.267 14.0799 5.60028 13.8038 5.10871 13.3122C4.61714 12.8206 4.34097 12.1539 4.34097 11.4587C4.34097 12.1539 4.06481 12.8206 3.57324 13.3122C3.08166 13.8038 2.41495 14.0799 1.71976 14.0799H1.06445" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M18.2116 8.97284H17.5563C16.8611 8.97284 16.1944 8.69668 15.7028 8.2051C15.2113 7.71353 14.9351 7.04681 14.9351 6.35162C14.9351 7.04681 14.6589 7.71353 14.1674 8.2051C13.6758 8.69668 13.0091 8.97284 12.3139 8.97284C11.6187 8.97284 10.952 8.69668 10.4604 8.2051C9.96882 7.71353 9.69266 7.04681 9.69266 6.35162C9.69266 7.04681 9.41649 7.71353 8.92492 8.2051C8.43335 8.69668 7.76663 8.97284 7.07144 8.97284C6.37625 8.97284 5.70953 8.69668 5.21796 8.2051C4.72639 7.71353 4.45023 7.04681 4.45023 6.35162C4.45023 7.04681 4.17406 7.71353 3.68249 8.2051C3.19092 8.69668 2.5242 8.97284 1.82901 8.97284H1.17371" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M18.2116 3.62122H17.5563C16.8611 3.62122 16.1944 3.34505 15.7028 2.85348C15.2113 2.36191 14.9351 1.69519 14.9351 1C14.9351 1.69519 14.6589 2.36191 14.1674 2.85348C13.6758 3.34505 13.0091 3.62122 12.3139 3.62122C11.6187 3.62122 10.952 3.34505 10.4604 2.85348C9.96882 2.36191 9.69266 1.69519 9.69266 1C9.69266 1.69519 9.41649 2.36191 8.92492 2.85348C8.43335 3.34505 7.76663 3.62122 7.07144 3.62122C6.37625 3.62122 5.70953 3.34505 5.21796 2.85348C4.72639 2.36191 4.45023 1.69519 4.45023 1C4.45023 1.69519 4.17406 2.36191 3.68249 2.85348C3.19092 3.34505 2.5242 3.62122 1.82901 3.62122H1.17371" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </a>
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='gatsby-image-wrapper'>
                                <img src="../images/Gorillas-Chimps-and-Big-Five.jpg" alt="Author" />
                            </div>
                            <div className='trip-slider-content pt-30 lg:px-10 px-10'>
                                <div className='trip-top-info flex items-center justify-between mb-10'>
                                    <h5>7 Nights From<span>$19 595 per person</span></h5>
                                    <h6>Curated by <span>Belinda</span></h6>
                                </div>
                                <div className='trip-slider-content-inner flex flex-wrap'>
                                    <div className='md:w-10/12 w-full lgscreen:w-[75%] mdscreen:w-full mdscreen:order-2'>
                                        <div className='title-black'>
                                            <h5>Gorillas, Chimps and Big Five</h5>
                                        </div>
                                        <div className='content flex mt-5'>
                                            <i class="fas fa-map-marker-alt text-red-300"></i>
                                            <p>
                                                Kigali - Volcanoes National Park - Nyungwe Forest National Park - Sabi Sand Private Game Reserve
                                            </p>
                                        </div>
                                        <div className='btn-custom flex flex-wrap items-start justify-start space-x-8 mt-20'>
                                            <Link to="/" className='button btn-red-border'>Explore Trip Inspiration</Link>
                                        </div>
                                    </div>
                                    <div className='md:w-2/12 w-full lgscreen:w-[25%] mdscreen:w-full mdscreen:order-1'>
                                        <div className='tooltip-grid text-center relative flex justify-end space-x-3 mdscreen:text-left mdscreen:justify-start mdscreen:mb-10'>
                                            <Tooltip placement="top" trigger={['hover']} overlay={<span>Solo Traveller</span>}>
                                                <a href="#">
                                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.29928 5.49187H3.24593L1 3.24593L3.24593 1H8.29928" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M8.29929 8.86072H13.3526L15.5986 6.61478L13.3526 4.36885H8.29929" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M8.29928 12.2297H3.24593L1 9.98376L3.24593 7.73782H8.29928" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M8.29929 1V15.5986" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>


                                                </a>
                                            </Tooltip>
                                            <Tooltip placement="top" trigger={['hover']} overlay={<span>tooltip</span>}>
                                                <a href="#">
                                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.89663 8.25402C9.89978 8.25402 11.5236 6.63015 11.5236 4.62701C11.5236 2.62387 9.89978 1 7.89663 1C5.89349 1 4.26962 2.62387 4.26962 4.62701C4.26962 6.63015 5.89349 8.25402 7.89663 8.25402Z" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M14.7936 15.508C14.3251 14.047 13.4047 12.7725 12.1652 11.8683C10.9257 10.9641 9.431 10.4769 7.89672 10.4769C6.36243 10.4769 4.86778 10.9641 3.62825 11.8683C2.38871 12.7725 1.46834 14.047 0.999817 15.508H14.7936Z" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>


                                                </a>
                                            </Tooltip>
                                            <Tooltip placement="top" trigger={['hover']} overlay={<span>tooltip</span>}>
                                                <a href="#">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.07971 16.6802C5.74506 16.6802 7.0951 15.3302 7.0951 13.6648C7.0951 11.9995 5.74506 10.6494 4.07971 10.6494C2.41436 10.6494 1.06433 11.9995 1.06433 13.6648C1.06433 15.3302 2.41436 16.6802 4.07971 16.6802Z" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M7.09509 4.01555V2.20632C7.09509 1.88643 6.96802 1.57964 6.74182 1.35344C6.51562 1.12725 6.20883 1.00017 5.88894 1.00017H4.46568C4.1818 0.995006 3.9052 1.09015 3.68457 1.26886C3.46394 1.44757 3.31342 1.69839 3.25953 1.97715L1.12463 13.0617" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M5.88898 7.0309H11.9197" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M7.09509 10.0463V13.6648" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M13.7289 16.6802C15.3943 16.6802 16.7443 15.3302 16.7443 13.6648C16.7443 11.9995 15.3943 10.6494 13.7289 10.6494C12.0636 10.6494 10.7135 11.9995 10.7135 13.6648C10.7135 15.3302 12.0636 16.6802 13.7289 16.6802Z" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M10.7135 4.01555V2.20632C10.7135 1.88643 10.8406 1.57964 11.0668 1.35344C11.293 1.12725 11.5998 1.00017 11.9197 1.00017H13.3429C13.6268 0.995006 13.9034 1.09015 14.1241 1.26886C14.3447 1.44757 14.4952 1.69839 14.5491 1.97715L16.7081 13.0617" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M10.7135 10.0463V13.6648" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </a>
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='gatsby-image-wrapper'>
                                <img src="../images/Explore-Cape-Town-and-Sabi.jpg" alt="Explore Cape Town and Sabi " />
                            </div>
                            <div className='trip-slider-content pt-30 lg:px-10 px-10'>
                                <div className='trip-top-info flex items-center justify-between mb-10'>
                                    <h5>7 Nights From<span>$19 595 per person</span></h5>
                                    <h6>Curated by <span>Belinda</span></h6>
                                </div>
                                <div className='trip-slider-content-inner flex flex-wrap'>
                                    <div className='md:w-10/12 w-full lgscreen:w-[75%] mdscreen:w-full mdscreen:order-2'>
                                        <div className='title-black'>
                                            <h5>Explore Cape Town and Sabi </h5>
                                        </div>
                                        <div className='content flex mt-5'>
                                            <i class="fas fa-map-marker-alt text-red-300"></i>
                                            <p>
                                                Kigali - Volcanoes National Park - Nyungwe Forest National Park - Sabi Sand Private Game Reserve
                                            </p>
                                        </div>
                                        <div className='btn-custom flex flex-wrap items-start justify-start space-x-8 mt-20'>
                                            <Link to="/" className='button btn-red-border'>Explore Trip Inspiration</Link>
                                        </div>
                                    </div>
                                    <div className='md:w-2/12 w-full lgscreen:w-[25%] mdscreen:w-full mdscreen:order-1'>
                                        <div className='tooltip-grid text-center relative flex justify-end space-x-3 mdscreen:text-left mdscreen:justify-start mdscreen:mb-10'>
                                            <Tooltip placement="top" trigger={['hover']} overlay={<span>Solo Traveller</span>}>
                                                <a href="#">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.89772 6.89774C8.52633 6.89774 9.84659 5.57748 9.84659 3.94887C9.84659 2.32025 8.52633 1 6.89772 1C5.26911 1 3.94885 2.32025 3.94885 3.94887C3.94885 5.57748 5.26911 6.89774 6.89772 6.89774Z" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M12.7955 16.7273H1V15.4167C1 13.8525 1.62137 12.3524 2.72741 11.2464C3.83345 10.1403 5.33356 9.51897 6.89774 9.51897C8.46191 9.51897 9.96202 10.1403 11.0681 11.2464C12.1741 12.3524 12.7955 13.8525 12.7955 15.4167V16.7273Z" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M10.6112 1C11.3933 1 12.1434 1.31068 12.6964 1.8637C13.2494 2.41672 13.5601 3.16678 13.5601 3.94887C13.5601 4.73096 13.2494 5.48101 12.6964 6.03403C12.1434 6.58705 11.3933 6.89774 10.6112 6.89774" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M12.7081 9.76794C13.8245 10.1926 14.7856 10.9463 15.4643 11.9293C16.143 12.9122 16.5073 14.078 16.5088 15.2725V16.7273H14.5429" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </a>
                                            </Tooltip>
                                            <Tooltip placement="top" trigger={['hover']} overlay={<span>tooltip</span>}>
                                                <a href="#">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.07971 16.6802C5.74506 16.6802 7.0951 15.3302 7.0951 13.6648C7.0951 11.9995 5.74506 10.6494 4.07971 10.6494C2.41436 10.6494 1.06433 11.9995 1.06433 13.6648C1.06433 15.3302 2.41436 16.6802 4.07971 16.6802Z" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M7.09509 4.01555V2.20632C7.09509 1.88643 6.96802 1.57964 6.74182 1.35344C6.51562 1.12725 6.20883 1.00017 5.88894 1.00017H4.46568C4.1818 0.995006 3.9052 1.09015 3.68457 1.26886C3.46394 1.44757 3.31342 1.69839 3.25953 1.97715L1.12463 13.0617" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M5.88898 7.0309H11.9197" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M7.09509 10.0463V13.6648" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M13.7289 16.6802C15.3943 16.6802 16.7443 15.3302 16.7443 13.6648C16.7443 11.9995 15.3943 10.6494 13.7289 10.6494C12.0636 10.6494 10.7135 11.9995 10.7135 13.6648C10.7135 15.3302 12.0636 16.6802 13.7289 16.6802Z" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M10.7135 4.01555V2.20632C10.7135 1.88643 10.8406 1.57964 11.0668 1.35344C11.293 1.12725 11.5998 1.00017 11.9197 1.00017H13.3429C13.6268 0.995006 13.9034 1.09015 14.1241 1.26886C14.3447 1.44757 14.4952 1.69839 14.5491 1.97715L16.7081 13.0617" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M10.7135 10.0463V13.6648" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </a>
                                            </Tooltip>
                                            <Tooltip placement="top" trigger={['hover']} overlay={<span>tooltip</span>}>
                                                <a href="#">
                                                    <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.1024 14.0799H17.4471C16.7519 14.0799 16.0851 13.8038 15.5936 13.3122C15.102 12.8206 14.8258 12.1539 14.8258 11.4587C14.8258 12.1539 14.5497 12.8206 14.0581 13.3122C13.5665 13.8038 12.8998 14.0799 12.2046 14.0799C11.5094 14.0799 10.8427 13.8038 10.3511 13.3122C9.85957 12.8206 9.5834 12.1539 9.5834 11.4587C9.5834 12.1539 9.30724 12.8206 8.81567 13.3122C8.32409 13.8038 7.65738 14.0799 6.96219 14.0799C6.267 14.0799 5.60028 13.8038 5.10871 13.3122C4.61714 12.8206 4.34097 12.1539 4.34097 11.4587C4.34097 12.1539 4.06481 12.8206 3.57324 13.3122C3.08166 13.8038 2.41495 14.0799 1.71976 14.0799H1.06445" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M18.2116 8.97284H17.5563C16.8611 8.97284 16.1944 8.69668 15.7028 8.2051C15.2113 7.71353 14.9351 7.04681 14.9351 6.35162C14.9351 7.04681 14.6589 7.71353 14.1674 8.2051C13.6758 8.69668 13.0091 8.97284 12.3139 8.97284C11.6187 8.97284 10.952 8.69668 10.4604 8.2051C9.96882 7.71353 9.69266 7.04681 9.69266 6.35162C9.69266 7.04681 9.41649 7.71353 8.92492 8.2051C8.43335 8.69668 7.76663 8.97284 7.07144 8.97284C6.37625 8.97284 5.70953 8.69668 5.21796 8.2051C4.72639 7.71353 4.45023 7.04681 4.45023 6.35162C4.45023 7.04681 4.17406 7.71353 3.68249 8.2051C3.19092 8.69668 2.5242 8.97284 1.82901 8.97284H1.17371" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M18.2116 3.62122H17.5563C16.8611 3.62122 16.1944 3.34505 15.7028 2.85348C15.2113 2.36191 14.9351 1.69519 14.9351 1C14.9351 1.69519 14.6589 2.36191 14.1674 2.85348C13.6758 3.34505 13.0091 3.62122 12.3139 3.62122C11.6187 3.62122 10.952 3.34505 10.4604 2.85348C9.96882 2.36191 9.69266 1.69519 9.69266 1C9.69266 1.69519 9.41649 2.36191 8.92492 2.85348C8.43335 3.34505 7.76663 3.62122 7.07144 3.62122C6.37625 3.62122 5.70953 3.34505 5.21796 2.85348C4.72639 2.36191 4.45023 1.69519 4.45023 1C4.45023 1.69519 4.17406 2.36191 3.68249 2.85348C3.19092 3.34505 2.5242 3.62122 1.82901 3.62122H1.17371" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </a>
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='gatsby-image-wrapper'>
                                <img src="../images/Gorillas-Chimps-and-Big-Five.jpg" alt="Author" />
                            </div>
                            <div className='trip-slider-content pt-30 lg:px-20 px-10'>
                                <div className='trip-top-info flex items-center justify-between mb-10'>
                                    <h5>7 Nights From<span>$19 595 per person</span></h5>
                                    <h6>Curated by <span>Belinda</span></h6>
                                </div>
                                <div className='trip-slider-content-inner flex flex-wrap'>
                                    <div className='md:w-10/12 w-full lgscreen:w-[75%] mdscreen:w-full mdscreen:order-2'>
                                        <div className='title-black'>
                                            <h5>Gorillas, Chimps and Big Five</h5>
                                        </div>
                                        <div className='content flex mt-5'>
                                            <i class="fas fa-map-marker-alt text-red-300"></i>
                                            <p>
                                                Kigali - Volcanoes National Park - Nyungwe Forest National Park - Sabi Sand Private Game Reserve
                                            </p>
                                        </div>
                                        <div className='btn-custom flex flex-wrap items-start justify-start space-x-8 mt-20'>
                                            <Link to="/" className='button btn-red-border'>Explore Trip Inspiration</Link>
                                        </div>
                                    </div>
                                    <div className='md:w-2/12 w-full lgscreen:w-[25%] mdscreen:w-full mdscreen:order-1'>
                                        <div className='tooltip-grid text-center relative flex justify-end space-x-3 mdscreen:text-left mdscreen:justify-start mdscreen:mb-10'>
                                            <Tooltip placement="top" trigger={['hover']} overlay={<span>Solo Traveller</span>}>
                                                <a href="#">
                                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.29928 5.49187H3.24593L1 3.24593L3.24593 1H8.29928" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M8.29929 8.86072H13.3526L15.5986 6.61478L13.3526 4.36885H8.29929" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M8.29928 12.2297H3.24593L1 9.98376L3.24593 7.73782H8.29928" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M8.29929 1V15.5986" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>


                                                </a>
                                            </Tooltip>
                                            <Tooltip placement="top" trigger={['hover']} overlay={<span>tooltip</span>}>
                                                <a href="#">
                                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.89663 8.25402C9.89978 8.25402 11.5236 6.63015 11.5236 4.62701C11.5236 2.62387 9.89978 1 7.89663 1C5.89349 1 4.26962 2.62387 4.26962 4.62701C4.26962 6.63015 5.89349 8.25402 7.89663 8.25402Z" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M14.7936 15.508C14.3251 14.047 13.4047 12.7725 12.1652 11.8683C10.9257 10.9641 9.431 10.4769 7.89672 10.4769C6.36243 10.4769 4.86778 10.9641 3.62825 11.8683C2.38871 12.7725 1.46834 14.047 0.999817 15.508H14.7936Z" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>


                                                </a>
                                            </Tooltip>
                                            <Tooltip placement="top" trigger={['hover']} overlay={<span>tooltip</span>}>
                                                <a href="#">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.07971 16.6802C5.74506 16.6802 7.0951 15.3302 7.0951 13.6648C7.0951 11.9995 5.74506 10.6494 4.07971 10.6494C2.41436 10.6494 1.06433 11.9995 1.06433 13.6648C1.06433 15.3302 2.41436 16.6802 4.07971 16.6802Z" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M7.09509 4.01555V2.20632C7.09509 1.88643 6.96802 1.57964 6.74182 1.35344C6.51562 1.12725 6.20883 1.00017 5.88894 1.00017H4.46568C4.1818 0.995006 3.9052 1.09015 3.68457 1.26886C3.46394 1.44757 3.31342 1.69839 3.25953 1.97715L1.12463 13.0617" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M5.88898 7.0309H11.9197" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M7.09509 10.0463V13.6648" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M13.7289 16.6802C15.3943 16.6802 16.7443 15.3302 16.7443 13.6648C16.7443 11.9995 15.3943 10.6494 13.7289 10.6494C12.0636 10.6494 10.7135 11.9995 10.7135 13.6648C10.7135 15.3302 12.0636 16.6802 13.7289 16.6802Z" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M10.7135 4.01555V2.20632C10.7135 1.88643 10.8406 1.57964 11.0668 1.35344C11.293 1.12725 11.5998 1.00017 11.9197 1.00017H13.3429C13.6268 0.995006 13.9034 1.09015 14.1241 1.26886C14.3447 1.44757 14.4952 1.69839 14.5491 1.97715L16.7081 13.0617" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M10.7135 10.0463V13.6648" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </a>
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='gatsby-image-wrapper'>
                                <img src="../images/Explore-Cape-Town-and-Sabi.jpg" alt="Explore Cape Town and Sabi " />
                            </div>
                            <div className='trip-slider-content pt-30 lg:px-10 px-10'>
                                <div className='trip-top-info flex items-center justify-between mb-10'>
                                    <h5>7 Nights From<span>$19 595 per person</span></h5>
                                    <h6>Curated by <span>Belinda</span></h6>
                                </div>
                                <div className='trip-slider-content-inner flex flex-wrap'>
                                    <div className='md:w-10/12 w-full lgscreen:w-[75%] mdscreen:w-full mdscreen:order-2'>
                                        <div className='title-black'>
                                            <h5>Explore Cape Town and Sabi </h5>
                                        </div>
                                        <div className='content flex mt-5'>
                                            <i class="fas fa-map-marker-alt text-red-300"></i>
                                            <p>
                                                Kigali - Volcanoes National Park - Nyungwe Forest National Park - Sabi Sand Private Game Reserve
                                            </p>
                                        </div>
                                        <div className='btn-custom flex flex-wrap items-start justify-start space-x-8 mt-20'>
                                            <Link to="/" className='button btn-red-border'>Explore Trip Inspiration</Link>
                                        </div>
                                    </div>
                                    <div className='md:w-2/12 w-full lgscreen:w-[25%] mdscreen:w-full mdscreen:order-1'>
                                        <div className='tooltip-grid text-center relative flex justify-end space-x-3 mdscreen:text-left mdscreen:justify-start mdscreen:mb-10'>
                                            <Tooltip placement="top" trigger={['hover']} overlay={<span>Solo Traveller</span>}>
                                                <a href="#">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.89772 6.89774C8.52633 6.89774 9.84659 5.57748 9.84659 3.94887C9.84659 2.32025 8.52633 1 6.89772 1C5.26911 1 3.94885 2.32025 3.94885 3.94887C3.94885 5.57748 5.26911 6.89774 6.89772 6.89774Z" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M12.7955 16.7273H1V15.4167C1 13.8525 1.62137 12.3524 2.72741 11.2464C3.83345 10.1403 5.33356 9.51897 6.89774 9.51897C8.46191 9.51897 9.96202 10.1403 11.0681 11.2464C12.1741 12.3524 12.7955 13.8525 12.7955 15.4167V16.7273Z" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M10.6112 1C11.3933 1 12.1434 1.31068 12.6964 1.8637C13.2494 2.41672 13.5601 3.16678 13.5601 3.94887C13.5601 4.73096 13.2494 5.48101 12.6964 6.03403C12.1434 6.58705 11.3933 6.89774 10.6112 6.89774" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M12.7081 9.76794C13.8245 10.1926 14.7856 10.9463 15.4643 11.9293C16.143 12.9122 16.5073 14.078 16.5088 15.2725V16.7273H14.5429" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </a>
                                            </Tooltip>
                                            <Tooltip placement="top" trigger={['hover']} overlay={<span>tooltip</span>}>
                                                <a href="#">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.07971 16.6802C5.74506 16.6802 7.0951 15.3302 7.0951 13.6648C7.0951 11.9995 5.74506 10.6494 4.07971 10.6494C2.41436 10.6494 1.06433 11.9995 1.06433 13.6648C1.06433 15.3302 2.41436 16.6802 4.07971 16.6802Z" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M7.09509 4.01555V2.20632C7.09509 1.88643 6.96802 1.57964 6.74182 1.35344C6.51562 1.12725 6.20883 1.00017 5.88894 1.00017H4.46568C4.1818 0.995006 3.9052 1.09015 3.68457 1.26886C3.46394 1.44757 3.31342 1.69839 3.25953 1.97715L1.12463 13.0617" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M5.88898 7.0309H11.9197" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M7.09509 10.0463V13.6648" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M13.7289 16.6802C15.3943 16.6802 16.7443 15.3302 16.7443 13.6648C16.7443 11.9995 15.3943 10.6494 13.7289 10.6494C12.0636 10.6494 10.7135 11.9995 10.7135 13.6648C10.7135 15.3302 12.0636 16.6802 13.7289 16.6802Z" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M10.7135 4.01555V2.20632C10.7135 1.88643 10.8406 1.57964 11.0668 1.35344C11.293 1.12725 11.5998 1.00017 11.9197 1.00017H13.3429C13.6268 0.995006 13.9034 1.09015 14.1241 1.26886C14.3447 1.44757 14.4952 1.69839 14.5491 1.97715L16.7081 13.0617" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M10.7135 10.0463V13.6648" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </a>
                                            </Tooltip>
                                            <Tooltip placement="top" trigger={['hover']} overlay={<span>tooltip</span>}>
                                                <a href="#">
                                                    <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.1024 14.0799H17.4471C16.7519 14.0799 16.0851 13.8038 15.5936 13.3122C15.102 12.8206 14.8258 12.1539 14.8258 11.4587C14.8258 12.1539 14.5497 12.8206 14.0581 13.3122C13.5665 13.8038 12.8998 14.0799 12.2046 14.0799C11.5094 14.0799 10.8427 13.8038 10.3511 13.3122C9.85957 12.8206 9.5834 12.1539 9.5834 11.4587C9.5834 12.1539 9.30724 12.8206 8.81567 13.3122C8.32409 13.8038 7.65738 14.0799 6.96219 14.0799C6.267 14.0799 5.60028 13.8038 5.10871 13.3122C4.61714 12.8206 4.34097 12.1539 4.34097 11.4587C4.34097 12.1539 4.06481 12.8206 3.57324 13.3122C3.08166 13.8038 2.41495 14.0799 1.71976 14.0799H1.06445" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M18.2116 8.97284H17.5563C16.8611 8.97284 16.1944 8.69668 15.7028 8.2051C15.2113 7.71353 14.9351 7.04681 14.9351 6.35162C14.9351 7.04681 14.6589 7.71353 14.1674 8.2051C13.6758 8.69668 13.0091 8.97284 12.3139 8.97284C11.6187 8.97284 10.952 8.69668 10.4604 8.2051C9.96882 7.71353 9.69266 7.04681 9.69266 6.35162C9.69266 7.04681 9.41649 7.71353 8.92492 8.2051C8.43335 8.69668 7.76663 8.97284 7.07144 8.97284C6.37625 8.97284 5.70953 8.69668 5.21796 8.2051C4.72639 7.71353 4.45023 7.04681 4.45023 6.35162C4.45023 7.04681 4.17406 7.71353 3.68249 8.2051C3.19092 8.69668 2.5242 8.97284 1.82901 8.97284H1.17371" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M18.2116 3.62122H17.5563C16.8611 3.62122 16.1944 3.34505 15.7028 2.85348C15.2113 2.36191 14.9351 1.69519 14.9351 1C14.9351 1.69519 14.6589 2.36191 14.1674 2.85348C13.6758 3.34505 13.0091 3.62122 12.3139 3.62122C11.6187 3.62122 10.952 3.34505 10.4604 2.85348C9.96882 2.36191 9.69266 1.69519 9.69266 1C9.69266 1.69519 9.41649 2.36191 8.92492 2.85348C8.43335 3.34505 7.76663 3.62122 7.07144 3.62122C6.37625 3.62122 5.70953 3.34505 5.21796 2.85348C4.72639 2.36191 4.45023 1.69519 4.45023 1C4.45023 1.69519 4.17406 2.36191 3.68249 2.85348C3.19092 3.34505 2.5242 3.62122 1.82901 3.62122H1.17371" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </a>
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='gatsby-image-wrapper'>
                                <img src="../images/Explore-Cape-Town-and-Sabi.jpg" alt="Explore Cape Town and Sabi " />
                            </div>
                            <div className='trip-slider-content pt-30 lg:px-10 px-10'>
                                <div className='trip-top-info flex items-center justify-between mb-10'>
                                    <h5>7 Nights From<span>$19 595 per person</span></h5>
                                    <h6>Curated by <span>Belinda</span></h6>
                                </div>
                                <div className='trip-slider-content-inner flex flex-wrap'>
                                    <div className='md:w-10/12 w-full lgscreen:w-[75%] mdscreen:w-full mdscreen:order-2'>
                                        <div className='title-black'>
                                            <h5>Explore Cape Town and Sabi </h5>
                                        </div>
                                        <div className='content flex mt-5'>
                                            <i class="fas fa-map-marker-alt text-red-300"></i>
                                            <p>
                                                Kigali - Volcanoes National Park - Nyungwe Forest National Park - Sabi Sand Private Game Reserve
                                            </p>
                                        </div>
                                        <div className='btn-custom flex flex-wrap items-start justify-start space-x-8 mt-20'>
                                            <Link to="/" className='button btn-red-border'>Explore Trip Inspiration</Link>
                                        </div>
                                    </div>
                                    <div className='md:w-2/12 w-full lgscreen:w-[25%] mdscreen:w-full mdscreen:order-1'>
                                        <div className='tooltip-grid text-center relative flex justify-end space-x-3 mdscreen:text-left mdscreen:justify-start mdscreen:mb-10'>
                                            <Tooltip placement="top" trigger={['hover']} overlay={<span>Solo Traveller</span>}>
                                                <a href="#">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.89772 6.89774C8.52633 6.89774 9.84659 5.57748 9.84659 3.94887C9.84659 2.32025 8.52633 1 6.89772 1C5.26911 1 3.94885 2.32025 3.94885 3.94887C3.94885 5.57748 5.26911 6.89774 6.89772 6.89774Z" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M12.7955 16.7273H1V15.4167C1 13.8525 1.62137 12.3524 2.72741 11.2464C3.83345 10.1403 5.33356 9.51897 6.89774 9.51897C8.46191 9.51897 9.96202 10.1403 11.0681 11.2464C12.1741 12.3524 12.7955 13.8525 12.7955 15.4167V16.7273Z" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M10.6112 1C11.3933 1 12.1434 1.31068 12.6964 1.8637C13.2494 2.41672 13.5601 3.16678 13.5601 3.94887C13.5601 4.73096 13.2494 5.48101 12.6964 6.03403C12.1434 6.58705 11.3933 6.89774 10.6112 6.89774" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M12.7081 9.76794C13.8245 10.1926 14.7856 10.9463 15.4643 11.9293C16.143 12.9122 16.5073 14.078 16.5088 15.2725V16.7273H14.5429" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </a>
                                            </Tooltip>
                                            <Tooltip placement="top" trigger={['hover']} overlay={<span>tooltip</span>}>
                                                <a href="#">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.07971 16.6802C5.74506 16.6802 7.0951 15.3302 7.0951 13.6648C7.0951 11.9995 5.74506 10.6494 4.07971 10.6494C2.41436 10.6494 1.06433 11.9995 1.06433 13.6648C1.06433 15.3302 2.41436 16.6802 4.07971 16.6802Z" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M7.09509 4.01555V2.20632C7.09509 1.88643 6.96802 1.57964 6.74182 1.35344C6.51562 1.12725 6.20883 1.00017 5.88894 1.00017H4.46568C4.1818 0.995006 3.9052 1.09015 3.68457 1.26886C3.46394 1.44757 3.31342 1.69839 3.25953 1.97715L1.12463 13.0617" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M5.88898 7.0309H11.9197" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M7.09509 10.0463V13.6648" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M13.7289 16.6802C15.3943 16.6802 16.7443 15.3302 16.7443 13.6648C16.7443 11.9995 15.3943 10.6494 13.7289 10.6494C12.0636 10.6494 10.7135 11.9995 10.7135 13.6648C10.7135 15.3302 12.0636 16.6802 13.7289 16.6802Z" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M10.7135 4.01555V2.20632C10.7135 1.88643 10.8406 1.57964 11.0668 1.35344C11.293 1.12725 11.5998 1.00017 11.9197 1.00017H13.3429C13.6268 0.995006 13.9034 1.09015 14.1241 1.26886C14.3447 1.44757 14.4952 1.69839 14.5491 1.97715L16.7081 13.0617" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M10.7135 10.0463V13.6648" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </a>
                                            </Tooltip>
                                            <Tooltip placement="top" trigger={['hover']} overlay={<span>tooltip</span>}>
                                                <a href="#">
                                                    <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.1024 14.0799H17.4471C16.7519 14.0799 16.0851 13.8038 15.5936 13.3122C15.102 12.8206 14.8258 12.1539 14.8258 11.4587C14.8258 12.1539 14.5497 12.8206 14.0581 13.3122C13.5665 13.8038 12.8998 14.0799 12.2046 14.0799C11.5094 14.0799 10.8427 13.8038 10.3511 13.3122C9.85957 12.8206 9.5834 12.1539 9.5834 11.4587C9.5834 12.1539 9.30724 12.8206 8.81567 13.3122C8.32409 13.8038 7.65738 14.0799 6.96219 14.0799C6.267 14.0799 5.60028 13.8038 5.10871 13.3122C4.61714 12.8206 4.34097 12.1539 4.34097 11.4587C4.34097 12.1539 4.06481 12.8206 3.57324 13.3122C3.08166 13.8038 2.41495 14.0799 1.71976 14.0799H1.06445" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M18.2116 8.97284H17.5563C16.8611 8.97284 16.1944 8.69668 15.7028 8.2051C15.2113 7.71353 14.9351 7.04681 14.9351 6.35162C14.9351 7.04681 14.6589 7.71353 14.1674 8.2051C13.6758 8.69668 13.0091 8.97284 12.3139 8.97284C11.6187 8.97284 10.952 8.69668 10.4604 8.2051C9.96882 7.71353 9.69266 7.04681 9.69266 6.35162C9.69266 7.04681 9.41649 7.71353 8.92492 8.2051C8.43335 8.69668 7.76663 8.97284 7.07144 8.97284C6.37625 8.97284 5.70953 8.69668 5.21796 8.2051C4.72639 7.71353 4.45023 7.04681 4.45023 6.35162C4.45023 7.04681 4.17406 7.71353 3.68249 8.2051C3.19092 8.69668 2.5242 8.97284 1.82901 8.97284H1.17371" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M18.2116 3.62122H17.5563C16.8611 3.62122 16.1944 3.34505 15.7028 2.85348C15.2113 2.36191 14.9351 1.69519 14.9351 1C14.9351 1.69519 14.6589 2.36191 14.1674 2.85348C13.6758 3.34505 13.0091 3.62122 12.3139 3.62122C11.6187 3.62122 10.952 3.34505 10.4604 2.85348C9.96882 2.36191 9.69266 1.69519 9.69266 1C9.69266 1.69519 9.41649 2.36191 8.92492 2.85348C8.43335 3.34505 7.76663 3.62122 7.07144 3.62122C6.37625 3.62122 5.70953 3.34505 5.21796 2.85348C4.72639 2.36191 4.45023 1.69519 4.45023 1C4.45023 1.69519 4.17406 2.36191 3.68249 2.85348C3.19092 3.34505 2.5242 3.62122 1.82901 3.62122H1.17371" stroke="#7C7D7F" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </a>
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </section>

            <section className='destinations-slider bg-pattern lg:py-120 py-60'>
                <div className='container-fluid pr-0'>
                    <div className='section-title'>
                        <div className='title-black'>
                            <h3>Uncover our most popular Destinations</h3>
                        </div>
                        <div className='content'>
                            <p>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
                            </p>
                        </div>
                    </div>
                    <div className='destinations-slider-row lg:mt-50 mt-25'>
                        <Swiper
                            spaceBetween={20}
                            loop={false}
                            slidesPerView={2.7}
                            centeredSlides={true}
                            allowTouchMove={true}
                            grabCursor={true}
                            scrollbar={{
                                hide: false
                            }}
                            speed={900}
                            onSlideChange={(swiperCore) => {
                                const { activeIndex } = swiperCore;
                                setCurentSlide(activeIndex)
                            }}
                            navigation={false}
                            modules={[Autoplay, Pagination, Scrollbar]}
                            className=""
                            breakpoints={{
                                100: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2.7,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 2.7,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className='ds-slider-content relative'>
                                    <div className='gatsby-image-wrapper'>
                                        <img src="../images/Kenya.jpg" alt="Kenya" />
                                    </div>
                                    <div className='ds-content absolute bottom-50 w-full text-center text-white z-9'>
                                        <h3 className='lg:text-50 xlscreen:text-40 xlscreen:leading-40 lgscreen:text-30 mdscreen:text-21 mdscreen:leading-[26px] text-white uppercase'>Kenya</h3>
                                        <ul className='flex flex-wrap justify-center pt-10'>
                                            <li>NAIROBI</li>
                                            <li>Lamu Island</li>
                                            <li>Masai mara</li>
                                        </ul>
                                        <div className='btn-custom flex flex-wrap items-start justify-center space-x-8 mt-20'>
                                            <Link to="/" className='button btn-transparent'><span>Explore</span>
                                                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.58228 2L116 2.50667L115.127 39.4933L1 40L1.58228 2Z" fill="white" />
                                                    <path d="M115.962 39.4319C114.738 39.7185 113.731 38.9203 112.63 39.3344L112.771 39.5445C111.97 39.6925 112.606 39.0123 111.775 39.2988C111.447 39.4778 111.859 39.5649 111.705 39.5806C109.989 39.5187 108.22 39.7291 106.612 39.2375C106.218 39.7029 104.779 39.2599 104.149 39.7281C103.707 39.5539 103.266 39.6054 103.095 39.2805C97.1261 39.5975 91.0234 39.2299 84.9061 39.3414C82.0387 38.4922 78.618 39.5932 75.2195 39.3354C75.1951 39.3679 75.2002 39.4047 75.22 39.4275C73.8747 39.2041 72.5233 39.1499 71.1748 39.2651L70.0527 38.9057C62.1037 39.7765 65.336 39.1982 57.2571 39.6239C48.0772 39.957 40.0393 40.7 31.0921 39.6441C31.0925 39.7316 31.0315 39.7784 31.2621 39.8124C28.6828 39.6643 26.3341 40.0153 23.9091 39.8608L23.9096 39.9482C18.6392 39.3725 6.79448 40.0744 0.00588123 39.7797L0.000470314 38.7758C0.981032 38.8006 1.92998 38.8719 2.87212 39.0446L2.85152 38.8607C7.74208 39.4411 21.0493 38.5924 26.1135 38.6549C28.216 38.5555 29.6387 38.7546 31.7514 38.738L31.8017 38.5117C35.3626 39.3294 39.2727 37.6376 42.9885 38.5409L42.7418 38.2353C43.3202 38.6888 44.9859 38.0375 44.7697 38.8645L45.4252 38.6078C47.9506 39.6592 50.0082 38.0499 53.1025 38.7121L52.8981 38.5212C53.6907 38.7044 54.4913 38.7255 55.2858 38.5841C55.1925 38.553 55.2363 38.4972 55.0399 38.449C55.2332 38.3867 55.3629 38.3391 55.4411 38.2967C55.9729 38.2902 56.4925 38.2838 56.9609 38.3334L56.8571 38.1643L57.7309 38.3931L57.7511 38.0474C59.9961 38.02 62.1103 38.2659 64.2992 38.2806L64.1847 37.9688C66.2244 38.4966 68.5204 37.9159 70.6784 38.1198L70.5308 38.0111C76.0006 37.8245 81.0473 38.2787 86.4651 38.4474C86.3816 38.4162 86.3517 38.3244 86.2632 38.2887C86.5385 38.4458 86.8231 38.5368 87.1103 38.5593C87.1884 38.4892 87.0286 38.4129 86.9329 38.3864C88.0771 37.8567 90.3022 38.6676 91.0157 38.2629C91.3371 38.3142 91.4804 38.5243 91.3024 38.6923C95.5505 38.7693 100.095 38.8105 104.423 39.1583C104.631 39.0821 104.667 38.9435 104.61 38.7646C108.313 39.5529 112.186 39.174 115.969 38.9897C116.117 39.1997 115.588 39.2062 115.962 39.4319Z" fill="white" />
                                                    <path d="M0.0374227 2.09583C1.26076 2.38811 2.26935 1.59451 3.36916 2.01367L3.22784 2.22313C4.0282 2.37474 3.39368 1.69168 4.22485 1.98198C4.55192 2.16249 4.13948 2.24768 4.29378 2.26409C6.01 2.21004 7.77805 2.42858 9.38726 1.94442C9.78077 2.41158 11.2205 1.97523 11.8493 2.44634C12.2918 2.27417 12.7326 2.32763 12.9042 2.00353C18.8726 2.34793 24.9761 2.00837 31.0931 2.14802C33.9624 1.312 37.3806 2.42873 40.7797 2.1865C40.804 2.21915 40.7988 2.25588 40.779 2.27858C42.1248 2.06139 43.4763 2.01335 44.8245 2.13474L45.9474 1.78057C53.8944 2.68785 50.6634 2.0947 58.7413 2.55745C67.9205 2.93279 75.9567 3.71263 84.9063 2.69787C84.9056 2.78537 84.9665 2.83244 84.7359 2.86541C87.3155 2.72915 89.6634 3.09098 92.0887 2.94753L92.088 3.03502C97.3598 2.48347 109.203 3.23977 115.992 2.97624L116 1.97238C115.019 1.99274 114.07 2.05968 113.127 2.22805L113.149 2.04421C108.257 2.60214 94.9514 1.6923 89.8871 1.73153C87.7848 1.62251 86.3617 1.81506 84.249 1.78876L84.1992 1.56226C80.6365 2.3636 76.7302 0.653794 73.0124 1.54003L73.2598 1.23563C72.6803 1.68644 71.0161 1.02751 71.2304 1.85549L70.5755 1.5958C68.0478 2.63559 65.9938 1.0168 62.898 1.66479L63.1029 1.47479C62.3098 1.6544 61.5092 1.67183 60.7151 1.52677C60.8084 1.4961 60.7647 1.4401 60.9612 1.39275C60.768 1.32963 60.6385 1.28139 60.5604 1.23863C60.0285 1.22969 59.509 1.22096 59.0404 1.26835L59.1447 1.0997L58.2703 1.3245L58.2509 0.978765C56.006 0.941033 53.8913 1.17721 51.7024 1.18187L51.8175 0.870637C49.7766 1.38899 47.482 0.797769 45.3235 0.991763L45.4714 0.883722C40.002 0.672057 34.9543 1.10303 29.5361 1.24684C29.6197 1.21601 29.6498 1.12439 29.7383 1.08903C29.4627 1.24492 29.1779 1.33456 28.8906 1.35574C28.8128 1.28535 28.9726 1.20974 29.0684 1.18372C27.9254 0.648695 25.6985 1.44944 24.9859 1.0414C24.6644 1.09126 24.5207 1.30069 24.6983 1.46948C20.45 1.52703 15.9054 1.54735 11.5767 1.87527C11.3689 1.79809 11.3332 1.65934 11.3909 1.4807C7.68625 2.25202 3.81403 1.85534 0.0310007 1.65359C-0.11767 1.86294 0.411711 1.87185 0.0374227 2.09583Z" fill="white" />
                                                    <path d="M114.581 40.2903C114.398 39.8748 114.945 39.5349 114.675 39.1609L114.532 39.2083C114.439 38.9365 114.892 39.1534 114.706 38.8709C114.588 38.7595 114.526 38.8991 114.516 38.8468C114.572 38.2651 114.445 37.665 114.79 37.1207C114.479 36.9861 114.79 36.4991 114.479 36.2847C114.6 36.1351 114.569 35.9855 114.79 35.9282C114.625 33.9038 114.923 31.8353 114.898 29.761C115.495 28.7904 114.78 27.6286 114.982 26.4767C114.96 26.4684 114.936 26.4701 114.92 26.4767C115.082 26.021 115.13 25.5629 115.063 25.1055L115.315 24.7257C114.793 22.029 115.156 23.126 114.936 20.3861C114.787 17.273 114.352 14.5463 115.138 11.5147C115.079 11.5147 115.047 11.4939 115.023 11.572C115.144 10.6978 114.926 9.90082 115.051 9.07892L114.992 9.07892C115.423 7.29301 115.047 3.27576 115.302 0.974609L115.98 0.974609C115.955 1.30703 115.899 1.62864 115.775 1.94776L115.899 1.94111C115.467 3.5982 115.93 8.11159 115.846 9.82852C115.896 10.5415 115.75 11.0236 115.743 11.7399L115.896 11.7574C115.315 12.9632 116.424 14.292 115.784 15.5502L115.992 15.4671C115.681 15.6624 116.107 16.2284 115.551 16.1536L115.719 16.3763C114.988 17.2306 116.057 17.9312 115.585 18.9791L115.716 18.9101C115.585 19.1785 115.565 19.4499 115.653 19.7196C115.675 19.688 115.712 19.7029 115.747 19.6365C115.787 19.7021 115.818 19.7462 115.846 19.7727C115.846 19.9531 115.846 20.1293 115.809 20.288L115.924 20.2531L115.762 20.5489L115.995 20.5564C115.995 21.3177 115.812 22.034 115.784 22.7761L115.995 22.7379C115.622 23.4285 115.995 24.208 115.84 24.9393L115.914 24.8895C115.995 26.7443 115.647 28.4546 115.489 30.2912C115.51 30.263 115.573 30.253 115.597 30.2231C115.489 30.3161 115.425 30.4125 115.408 30.5098C115.455 30.5364 115.507 30.4824 115.526 30.45C115.874 30.8389 115.308 31.5918 115.576 31.8345C115.538 31.9433 115.395 31.9915 115.284 31.9309C115.197 33.3711 115.131 34.9118 114.861 36.3786C114.911 36.4492 115.004 36.4617 115.125 36.4426C114.563 37.6966 114.787 39.0105 114.88 40.2936C114.737 40.3435 114.737 40.164 114.581 40.2903Z" fill="white" />
                                                    <path d="M1.41855 0.987039C1.60186 1.40256 1.05504 1.74245 1.32534 2.11642L1.46825 2.06905C1.56146 2.3408 1.10784 2.1239 1.29426 2.40645C1.41233 2.51781 1.47448 2.3782 1.4838 2.43056C1.42788 3.01228 1.55526 3.61229 1.21039 4.15663C1.52109 4.29125 1.21039 4.77824 1.52109 4.99265C1.39991 5.14224 1.43098 5.29183 1.21039 5.34917C1.37506 7.37358 1.07678 9.44204 1.10163 11.5163C0.505089 12.487 1.21971 13.6488 1.01776 14.8006C1.0395 14.8089 1.06435 14.8072 1.07988 14.8006C0.918097 15.2563 0.870362 15.7144 0.936971 16.1718L0.685305 16.5516C1.20728 19.2483 0.843753 18.1513 1.06435 20.8913C1.21349 24.0044 1.64848 26.731 0.862407 29.7626C0.921439 29.7626 0.952508 29.7834 0.977364 29.7053C0.856191 30.5796 1.07367 31.3765 0.949393 32.1984L1.00843 32.1984C0.576554 33.9843 0.9525 38.0016 0.697727 40.3027L0.0204052 40.3027C0.0452612 39.9703 0.101179 39.6487 0.225458 39.3296L0.10119 39.3362C0.533062 37.6791 0.0701146 33.1658 0.154003 31.4488C0.104291 30.7358 0.250325 30.2538 0.256539 29.5374L0.1043 29.52C0.685307 28.3141 -0.423893 26.9853 0.216147 25.7271L0.00798366 25.8102C0.318683 25.6149 -0.10698 25.049 0.449171 25.1238L0.2814 24.9011C1.01154 24.0468 -0.057264 23.3462 0.414999 22.2982L0.284491 22.3672C0.414656 22.0988 0.435495 21.8274 0.346635 21.5578C0.324886 21.5894 0.287606 21.5744 0.253429 21.6409C0.213038 21.5752 0.181966 21.5312 0.154003 21.5046C0.154003 21.3243 0.154002 21.1481 0.191285 20.9894L0.0763282 21.0243L0.237898 20.7284L0.00487348 20.7209C0.00487346 19.9597 0.188184 19.2433 0.216147 18.5012L0.00487342 18.5394C0.377712 17.8489 0.00487337 17.0693 0.160223 16.338L0.0856582 16.3879C0.00487634 14.533 0.352858 12.8227 0.511314 10.9861C0.489565 11.0144 0.427414 11.0243 0.402558 11.0543C0.510853 10.9612 0.574553 10.8649 0.592099 10.7676C0.545494 10.741 0.492674 10.795 0.474032 10.8274C0.126049 10.4385 0.691511 9.68554 0.424309 9.44288C0.461593 9.33401 0.604516 9.28581 0.716367 9.34648C0.803363 7.90628 0.868605 6.36553 1.13891 4.89875C1.0892 4.82811 0.996 4.81564 0.874827 4.83476C1.43719 3.58072 1.21348 2.26684 1.12027 0.983714C1.26319 0.933852 1.2632 1.11336 1.41855 0.987039Z" fill="white" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='ds-slider-content relative'>
                                    <div className='gatsby-image-wrapper'>
                                        <img src="../images/Botswana.jpg" alt="Botswana" />
                                    </div>
                                    <div className='ds-content absolute bottom-50 w-full text-center text-white z-9'>
                                        <h3 className='lg:text-50 xlscreen:text-40 xlscreen:leading-40 lgscreen:text-30 mdscreen:text-21 mdscreen:leading-[26px] text-white uppercase'>Botswana</h3>
                                        <ul className='flex flex-wrap justify-center pt-10'>
                                            <li>central Kalahari</li>
                                            <li>Chobe</li>
                                            <li>linyanti savuti makgadikgadi</li>
                                            <li>Okavango Delta</li>
                                        </ul>
                                        <div className='btn-custom flex flex-wrap items-start justify-center space-x-8 mt-20'>
                                            <Link to="/" className='button btn-transparent'><span>Explore</span>
                                                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.58228 2L116 2.50667L115.127 39.4933L1 40L1.58228 2Z" fill="white" />
                                                    <path d="M115.962 39.4319C114.738 39.7185 113.731 38.9203 112.63 39.3344L112.771 39.5445C111.97 39.6925 112.606 39.0123 111.775 39.2988C111.447 39.4778 111.859 39.5649 111.705 39.5806C109.989 39.5187 108.22 39.7291 106.612 39.2375C106.218 39.7029 104.779 39.2599 104.149 39.7281C103.707 39.5539 103.266 39.6054 103.095 39.2805C97.1261 39.5975 91.0234 39.2299 84.9061 39.3414C82.0387 38.4922 78.618 39.5932 75.2195 39.3354C75.1951 39.3679 75.2002 39.4047 75.22 39.4275C73.8747 39.2041 72.5233 39.1499 71.1748 39.2651L70.0527 38.9057C62.1037 39.7765 65.336 39.1982 57.2571 39.6239C48.0772 39.957 40.0393 40.7 31.0921 39.6441C31.0925 39.7316 31.0315 39.7784 31.2621 39.8124C28.6828 39.6643 26.3341 40.0153 23.9091 39.8608L23.9096 39.9482C18.6392 39.3725 6.79448 40.0744 0.00588123 39.7797L0.000470314 38.7758C0.981032 38.8006 1.92998 38.8719 2.87212 39.0446L2.85152 38.8607C7.74208 39.4411 21.0493 38.5924 26.1135 38.6549C28.216 38.5555 29.6387 38.7546 31.7514 38.738L31.8017 38.5117C35.3626 39.3294 39.2727 37.6376 42.9885 38.5409L42.7418 38.2353C43.3202 38.6888 44.9859 38.0375 44.7697 38.8645L45.4252 38.6078C47.9506 39.6592 50.0082 38.0499 53.1025 38.7121L52.8981 38.5212C53.6907 38.7044 54.4913 38.7255 55.2858 38.5841C55.1925 38.553 55.2363 38.4972 55.0399 38.449C55.2332 38.3867 55.3629 38.3391 55.4411 38.2967C55.9729 38.2902 56.4925 38.2838 56.9609 38.3334L56.8571 38.1643L57.7309 38.3931L57.7511 38.0474C59.9961 38.02 62.1103 38.2659 64.2992 38.2806L64.1847 37.9688C66.2244 38.4966 68.5204 37.9159 70.6784 38.1198L70.5308 38.0111C76.0006 37.8245 81.0473 38.2787 86.4651 38.4474C86.3816 38.4162 86.3517 38.3244 86.2632 38.2887C86.5385 38.4458 86.8231 38.5368 87.1103 38.5593C87.1884 38.4892 87.0286 38.4129 86.9329 38.3864C88.0771 37.8567 90.3022 38.6676 91.0157 38.2629C91.3371 38.3142 91.4804 38.5243 91.3024 38.6923C95.5505 38.7693 100.095 38.8105 104.423 39.1583C104.631 39.0821 104.667 38.9435 104.61 38.7646C108.313 39.5529 112.186 39.174 115.969 38.9897C116.117 39.1997 115.588 39.2062 115.962 39.4319Z" fill="white" />
                                                    <path d="M0.0374227 2.09583C1.26076 2.38811 2.26935 1.59451 3.36916 2.01367L3.22784 2.22313C4.0282 2.37474 3.39368 1.69168 4.22485 1.98198C4.55192 2.16249 4.13948 2.24768 4.29378 2.26409C6.01 2.21004 7.77805 2.42858 9.38726 1.94442C9.78077 2.41158 11.2205 1.97523 11.8493 2.44634C12.2918 2.27417 12.7326 2.32763 12.9042 2.00353C18.8726 2.34793 24.9761 2.00837 31.0931 2.14802C33.9624 1.312 37.3806 2.42873 40.7797 2.1865C40.804 2.21915 40.7988 2.25588 40.779 2.27858C42.1248 2.06139 43.4763 2.01335 44.8245 2.13474L45.9474 1.78057C53.8944 2.68785 50.6634 2.0947 58.7413 2.55745C67.9205 2.93279 75.9567 3.71263 84.9063 2.69787C84.9056 2.78537 84.9665 2.83244 84.7359 2.86541C87.3155 2.72915 89.6634 3.09098 92.0887 2.94753L92.088 3.03502C97.3598 2.48347 109.203 3.23977 115.992 2.97624L116 1.97238C115.019 1.99274 114.07 2.05968 113.127 2.22805L113.149 2.04421C108.257 2.60214 94.9514 1.6923 89.8871 1.73153C87.7848 1.62251 86.3617 1.81506 84.249 1.78876L84.1992 1.56226C80.6365 2.3636 76.7302 0.653794 73.0124 1.54003L73.2598 1.23563C72.6803 1.68644 71.0161 1.02751 71.2304 1.85549L70.5755 1.5958C68.0478 2.63559 65.9938 1.0168 62.898 1.66479L63.1029 1.47479C62.3098 1.6544 61.5092 1.67183 60.7151 1.52677C60.8084 1.4961 60.7647 1.4401 60.9612 1.39275C60.768 1.32963 60.6385 1.28139 60.5604 1.23863C60.0285 1.22969 59.509 1.22096 59.0404 1.26835L59.1447 1.0997L58.2703 1.3245L58.2509 0.978765C56.006 0.941033 53.8913 1.17721 51.7024 1.18187L51.8175 0.870637C49.7766 1.38899 47.482 0.797769 45.3235 0.991763L45.4714 0.883722C40.002 0.672057 34.9543 1.10303 29.5361 1.24684C29.6197 1.21601 29.6498 1.12439 29.7383 1.08903C29.4627 1.24492 29.1779 1.33456 28.8906 1.35574C28.8128 1.28535 28.9726 1.20974 29.0684 1.18372C27.9254 0.648695 25.6985 1.44944 24.9859 1.0414C24.6644 1.09126 24.5207 1.30069 24.6983 1.46948C20.45 1.52703 15.9054 1.54735 11.5767 1.87527C11.3689 1.79809 11.3332 1.65934 11.3909 1.4807C7.68625 2.25202 3.81403 1.85534 0.0310007 1.65359C-0.11767 1.86294 0.411711 1.87185 0.0374227 2.09583Z" fill="white" />
                                                    <path d="M114.581 40.2903C114.398 39.8748 114.945 39.5349 114.675 39.1609L114.532 39.2083C114.439 38.9365 114.892 39.1534 114.706 38.8709C114.588 38.7595 114.526 38.8991 114.516 38.8468C114.572 38.2651 114.445 37.665 114.79 37.1207C114.479 36.9861 114.79 36.4991 114.479 36.2847C114.6 36.1351 114.569 35.9855 114.79 35.9282C114.625 33.9038 114.923 31.8353 114.898 29.761C115.495 28.7904 114.78 27.6286 114.982 26.4767C114.96 26.4684 114.936 26.4701 114.92 26.4767C115.082 26.021 115.13 25.5629 115.063 25.1055L115.315 24.7257C114.793 22.029 115.156 23.126 114.936 20.3861C114.787 17.273 114.352 14.5463 115.138 11.5147C115.079 11.5147 115.047 11.4939 115.023 11.572C115.144 10.6978 114.926 9.90082 115.051 9.07892L114.992 9.07892C115.423 7.29301 115.047 3.27576 115.302 0.974609L115.98 0.974609C115.955 1.30703 115.899 1.62864 115.775 1.94776L115.899 1.94111C115.467 3.5982 115.93 8.11159 115.846 9.82852C115.896 10.5415 115.75 11.0236 115.743 11.7399L115.896 11.7574C115.315 12.9632 116.424 14.292 115.784 15.5502L115.992 15.4671C115.681 15.6624 116.107 16.2284 115.551 16.1536L115.719 16.3763C114.988 17.2306 116.057 17.9312 115.585 18.9791L115.716 18.9101C115.585 19.1785 115.565 19.4499 115.653 19.7196C115.675 19.688 115.712 19.7029 115.747 19.6365C115.787 19.7021 115.818 19.7462 115.846 19.7727C115.846 19.9531 115.846 20.1293 115.809 20.288L115.924 20.2531L115.762 20.5489L115.995 20.5564C115.995 21.3177 115.812 22.034 115.784 22.7761L115.995 22.7379C115.622 23.4285 115.995 24.208 115.84 24.9393L115.914 24.8895C115.995 26.7443 115.647 28.4546 115.489 30.2912C115.51 30.263 115.573 30.253 115.597 30.2231C115.489 30.3161 115.425 30.4125 115.408 30.5098C115.455 30.5364 115.507 30.4824 115.526 30.45C115.874 30.8389 115.308 31.5918 115.576 31.8345C115.538 31.9433 115.395 31.9915 115.284 31.9309C115.197 33.3711 115.131 34.9118 114.861 36.3786C114.911 36.4492 115.004 36.4617 115.125 36.4426C114.563 37.6966 114.787 39.0105 114.88 40.2936C114.737 40.3435 114.737 40.164 114.581 40.2903Z" fill="white" />
                                                    <path d="M1.41855 0.987039C1.60186 1.40256 1.05504 1.74245 1.32534 2.11642L1.46825 2.06905C1.56146 2.3408 1.10784 2.1239 1.29426 2.40645C1.41233 2.51781 1.47448 2.3782 1.4838 2.43056C1.42788 3.01228 1.55526 3.61229 1.21039 4.15663C1.52109 4.29125 1.21039 4.77824 1.52109 4.99265C1.39991 5.14224 1.43098 5.29183 1.21039 5.34917C1.37506 7.37358 1.07678 9.44204 1.10163 11.5163C0.505089 12.487 1.21971 13.6488 1.01776 14.8006C1.0395 14.8089 1.06435 14.8072 1.07988 14.8006C0.918097 15.2563 0.870362 15.7144 0.936971 16.1718L0.685305 16.5516C1.20728 19.2483 0.843753 18.1513 1.06435 20.8913C1.21349 24.0044 1.64848 26.731 0.862407 29.7626C0.921439 29.7626 0.952508 29.7834 0.977364 29.7053C0.856191 30.5796 1.07367 31.3765 0.949393 32.1984L1.00843 32.1984C0.576554 33.9843 0.9525 38.0016 0.697727 40.3027L0.0204052 40.3027C0.0452612 39.9703 0.101179 39.6487 0.225458 39.3296L0.10119 39.3362C0.533062 37.6791 0.0701146 33.1658 0.154003 31.4488C0.104291 30.7358 0.250325 30.2538 0.256539 29.5374L0.1043 29.52C0.685307 28.3141 -0.423893 26.9853 0.216147 25.7271L0.00798366 25.8102C0.318683 25.6149 -0.10698 25.049 0.449171 25.1238L0.2814 24.9011C1.01154 24.0468 -0.057264 23.3462 0.414999 22.2982L0.284491 22.3672C0.414656 22.0988 0.435495 21.8274 0.346635 21.5578C0.324886 21.5894 0.287606 21.5744 0.253429 21.6409C0.213038 21.5752 0.181966 21.5312 0.154003 21.5046C0.154003 21.3243 0.154002 21.1481 0.191285 20.9894L0.0763282 21.0243L0.237898 20.7284L0.00487348 20.7209C0.00487346 19.9597 0.188184 19.2433 0.216147 18.5012L0.00487342 18.5394C0.377712 17.8489 0.00487337 17.0693 0.160223 16.338L0.0856582 16.3879C0.00487634 14.533 0.352858 12.8227 0.511314 10.9861C0.489565 11.0144 0.427414 11.0243 0.402558 11.0543C0.510853 10.9612 0.574553 10.8649 0.592099 10.7676C0.545494 10.741 0.492674 10.795 0.474032 10.8274C0.126049 10.4385 0.691511 9.68554 0.424309 9.44288C0.461593 9.33401 0.604516 9.28581 0.716367 9.34648C0.803363 7.90628 0.868605 6.36553 1.13891 4.89875C1.0892 4.82811 0.996 4.81564 0.874827 4.83476C1.43719 3.58072 1.21348 2.26684 1.12027 0.983714C1.26319 0.933852 1.2632 1.11336 1.41855 0.987039Z" fill="white" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='ds-slider-content relative'>
                                    <div className='gatsby-image-wrapper'>
                                        <img src="../images/Indian-Ocean-Islands.jpg" alt="Indian Ocean Islands" />
                                    </div>
                                    <div className='ds-content absolute bottom-50 w-full text-center text-white z-9'>
                                        <h3 className='lg:text-50 xlscreen:text-40 xlscreen:leading-40 lgscreen:text-30 mdscreen:text-21 mdscreen:leading-[26px] text-white uppercase'>Indian Ocean Islands</h3>
                                        <ul className='flex flex-wrap justify-center pt-10'>
                                            <li>Madagascar</li>
                                            <li>Mauritius</li>
                                            <li>Seychelles</li>
                                        </ul>
                                        <div className='btn-custom flex flex-wrap items-start justify-center space-x-8 mt-20'>
                                            <Link to="/" className='button btn-transparent'><span>Explore</span>
                                                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.58228 2L116 2.50667L115.127 39.4933L1 40L1.58228 2Z" fill="white" />
                                                    <path d="M115.962 39.4319C114.738 39.7185 113.731 38.9203 112.63 39.3344L112.771 39.5445C111.97 39.6925 112.606 39.0123 111.775 39.2988C111.447 39.4778 111.859 39.5649 111.705 39.5806C109.989 39.5187 108.22 39.7291 106.612 39.2375C106.218 39.7029 104.779 39.2599 104.149 39.7281C103.707 39.5539 103.266 39.6054 103.095 39.2805C97.1261 39.5975 91.0234 39.2299 84.9061 39.3414C82.0387 38.4922 78.618 39.5932 75.2195 39.3354C75.1951 39.3679 75.2002 39.4047 75.22 39.4275C73.8747 39.2041 72.5233 39.1499 71.1748 39.2651L70.0527 38.9057C62.1037 39.7765 65.336 39.1982 57.2571 39.6239C48.0772 39.957 40.0393 40.7 31.0921 39.6441C31.0925 39.7316 31.0315 39.7784 31.2621 39.8124C28.6828 39.6643 26.3341 40.0153 23.9091 39.8608L23.9096 39.9482C18.6392 39.3725 6.79448 40.0744 0.00588123 39.7797L0.000470314 38.7758C0.981032 38.8006 1.92998 38.8719 2.87212 39.0446L2.85152 38.8607C7.74208 39.4411 21.0493 38.5924 26.1135 38.6549C28.216 38.5555 29.6387 38.7546 31.7514 38.738L31.8017 38.5117C35.3626 39.3294 39.2727 37.6376 42.9885 38.5409L42.7418 38.2353C43.3202 38.6888 44.9859 38.0375 44.7697 38.8645L45.4252 38.6078C47.9506 39.6592 50.0082 38.0499 53.1025 38.7121L52.8981 38.5212C53.6907 38.7044 54.4913 38.7255 55.2858 38.5841C55.1925 38.553 55.2363 38.4972 55.0399 38.449C55.2332 38.3867 55.3629 38.3391 55.4411 38.2967C55.9729 38.2902 56.4925 38.2838 56.9609 38.3334L56.8571 38.1643L57.7309 38.3931L57.7511 38.0474C59.9961 38.02 62.1103 38.2659 64.2992 38.2806L64.1847 37.9688C66.2244 38.4966 68.5204 37.9159 70.6784 38.1198L70.5308 38.0111C76.0006 37.8245 81.0473 38.2787 86.4651 38.4474C86.3816 38.4162 86.3517 38.3244 86.2632 38.2887C86.5385 38.4458 86.8231 38.5368 87.1103 38.5593C87.1884 38.4892 87.0286 38.4129 86.9329 38.3864C88.0771 37.8567 90.3022 38.6676 91.0157 38.2629C91.3371 38.3142 91.4804 38.5243 91.3024 38.6923C95.5505 38.7693 100.095 38.8105 104.423 39.1583C104.631 39.0821 104.667 38.9435 104.61 38.7646C108.313 39.5529 112.186 39.174 115.969 38.9897C116.117 39.1997 115.588 39.2062 115.962 39.4319Z" fill="white" />
                                                    <path d="M0.0374227 2.09583C1.26076 2.38811 2.26935 1.59451 3.36916 2.01367L3.22784 2.22313C4.0282 2.37474 3.39368 1.69168 4.22485 1.98198C4.55192 2.16249 4.13948 2.24768 4.29378 2.26409C6.01 2.21004 7.77805 2.42858 9.38726 1.94442C9.78077 2.41158 11.2205 1.97523 11.8493 2.44634C12.2918 2.27417 12.7326 2.32763 12.9042 2.00353C18.8726 2.34793 24.9761 2.00837 31.0931 2.14802C33.9624 1.312 37.3806 2.42873 40.7797 2.1865C40.804 2.21915 40.7988 2.25588 40.779 2.27858C42.1248 2.06139 43.4763 2.01335 44.8245 2.13474L45.9474 1.78057C53.8944 2.68785 50.6634 2.0947 58.7413 2.55745C67.9205 2.93279 75.9567 3.71263 84.9063 2.69787C84.9056 2.78537 84.9665 2.83244 84.7359 2.86541C87.3155 2.72915 89.6634 3.09098 92.0887 2.94753L92.088 3.03502C97.3598 2.48347 109.203 3.23977 115.992 2.97624L116 1.97238C115.019 1.99274 114.07 2.05968 113.127 2.22805L113.149 2.04421C108.257 2.60214 94.9514 1.6923 89.8871 1.73153C87.7848 1.62251 86.3617 1.81506 84.249 1.78876L84.1992 1.56226C80.6365 2.3636 76.7302 0.653794 73.0124 1.54003L73.2598 1.23563C72.6803 1.68644 71.0161 1.02751 71.2304 1.85549L70.5755 1.5958C68.0478 2.63559 65.9938 1.0168 62.898 1.66479L63.1029 1.47479C62.3098 1.6544 61.5092 1.67183 60.7151 1.52677C60.8084 1.4961 60.7647 1.4401 60.9612 1.39275C60.768 1.32963 60.6385 1.28139 60.5604 1.23863C60.0285 1.22969 59.509 1.22096 59.0404 1.26835L59.1447 1.0997L58.2703 1.3245L58.2509 0.978765C56.006 0.941033 53.8913 1.17721 51.7024 1.18187L51.8175 0.870637C49.7766 1.38899 47.482 0.797769 45.3235 0.991763L45.4714 0.883722C40.002 0.672057 34.9543 1.10303 29.5361 1.24684C29.6197 1.21601 29.6498 1.12439 29.7383 1.08903C29.4627 1.24492 29.1779 1.33456 28.8906 1.35574C28.8128 1.28535 28.9726 1.20974 29.0684 1.18372C27.9254 0.648695 25.6985 1.44944 24.9859 1.0414C24.6644 1.09126 24.5207 1.30069 24.6983 1.46948C20.45 1.52703 15.9054 1.54735 11.5767 1.87527C11.3689 1.79809 11.3332 1.65934 11.3909 1.4807C7.68625 2.25202 3.81403 1.85534 0.0310007 1.65359C-0.11767 1.86294 0.411711 1.87185 0.0374227 2.09583Z" fill="white" />
                                                    <path d="M114.581 40.2903C114.398 39.8748 114.945 39.5349 114.675 39.1609L114.532 39.2083C114.439 38.9365 114.892 39.1534 114.706 38.8709C114.588 38.7595 114.526 38.8991 114.516 38.8468C114.572 38.2651 114.445 37.665 114.79 37.1207C114.479 36.9861 114.79 36.4991 114.479 36.2847C114.6 36.1351 114.569 35.9855 114.79 35.9282C114.625 33.9038 114.923 31.8353 114.898 29.761C115.495 28.7904 114.78 27.6286 114.982 26.4767C114.96 26.4684 114.936 26.4701 114.92 26.4767C115.082 26.021 115.13 25.5629 115.063 25.1055L115.315 24.7257C114.793 22.029 115.156 23.126 114.936 20.3861C114.787 17.273 114.352 14.5463 115.138 11.5147C115.079 11.5147 115.047 11.4939 115.023 11.572C115.144 10.6978 114.926 9.90082 115.051 9.07892L114.992 9.07892C115.423 7.29301 115.047 3.27576 115.302 0.974609L115.98 0.974609C115.955 1.30703 115.899 1.62864 115.775 1.94776L115.899 1.94111C115.467 3.5982 115.93 8.11159 115.846 9.82852C115.896 10.5415 115.75 11.0236 115.743 11.7399L115.896 11.7574C115.315 12.9632 116.424 14.292 115.784 15.5502L115.992 15.4671C115.681 15.6624 116.107 16.2284 115.551 16.1536L115.719 16.3763C114.988 17.2306 116.057 17.9312 115.585 18.9791L115.716 18.9101C115.585 19.1785 115.565 19.4499 115.653 19.7196C115.675 19.688 115.712 19.7029 115.747 19.6365C115.787 19.7021 115.818 19.7462 115.846 19.7727C115.846 19.9531 115.846 20.1293 115.809 20.288L115.924 20.2531L115.762 20.5489L115.995 20.5564C115.995 21.3177 115.812 22.034 115.784 22.7761L115.995 22.7379C115.622 23.4285 115.995 24.208 115.84 24.9393L115.914 24.8895C115.995 26.7443 115.647 28.4546 115.489 30.2912C115.51 30.263 115.573 30.253 115.597 30.2231C115.489 30.3161 115.425 30.4125 115.408 30.5098C115.455 30.5364 115.507 30.4824 115.526 30.45C115.874 30.8389 115.308 31.5918 115.576 31.8345C115.538 31.9433 115.395 31.9915 115.284 31.9309C115.197 33.3711 115.131 34.9118 114.861 36.3786C114.911 36.4492 115.004 36.4617 115.125 36.4426C114.563 37.6966 114.787 39.0105 114.88 40.2936C114.737 40.3435 114.737 40.164 114.581 40.2903Z" fill="white" />
                                                    <path d="M1.41855 0.987039C1.60186 1.40256 1.05504 1.74245 1.32534 2.11642L1.46825 2.06905C1.56146 2.3408 1.10784 2.1239 1.29426 2.40645C1.41233 2.51781 1.47448 2.3782 1.4838 2.43056C1.42788 3.01228 1.55526 3.61229 1.21039 4.15663C1.52109 4.29125 1.21039 4.77824 1.52109 4.99265C1.39991 5.14224 1.43098 5.29183 1.21039 5.34917C1.37506 7.37358 1.07678 9.44204 1.10163 11.5163C0.505089 12.487 1.21971 13.6488 1.01776 14.8006C1.0395 14.8089 1.06435 14.8072 1.07988 14.8006C0.918097 15.2563 0.870362 15.7144 0.936971 16.1718L0.685305 16.5516C1.20728 19.2483 0.843753 18.1513 1.06435 20.8913C1.21349 24.0044 1.64848 26.731 0.862407 29.7626C0.921439 29.7626 0.952508 29.7834 0.977364 29.7053C0.856191 30.5796 1.07367 31.3765 0.949393 32.1984L1.00843 32.1984C0.576554 33.9843 0.9525 38.0016 0.697727 40.3027L0.0204052 40.3027C0.0452612 39.9703 0.101179 39.6487 0.225458 39.3296L0.10119 39.3362C0.533062 37.6791 0.0701146 33.1658 0.154003 31.4488C0.104291 30.7358 0.250325 30.2538 0.256539 29.5374L0.1043 29.52C0.685307 28.3141 -0.423893 26.9853 0.216147 25.7271L0.00798366 25.8102C0.318683 25.6149 -0.10698 25.049 0.449171 25.1238L0.2814 24.9011C1.01154 24.0468 -0.057264 23.3462 0.414999 22.2982L0.284491 22.3672C0.414656 22.0988 0.435495 21.8274 0.346635 21.5578C0.324886 21.5894 0.287606 21.5744 0.253429 21.6409C0.213038 21.5752 0.181966 21.5312 0.154003 21.5046C0.154003 21.3243 0.154002 21.1481 0.191285 20.9894L0.0763282 21.0243L0.237898 20.7284L0.00487348 20.7209C0.00487346 19.9597 0.188184 19.2433 0.216147 18.5012L0.00487342 18.5394C0.377712 17.8489 0.00487337 17.0693 0.160223 16.338L0.0856582 16.3879C0.00487634 14.533 0.352858 12.8227 0.511314 10.9861C0.489565 11.0144 0.427414 11.0243 0.402558 11.0543C0.510853 10.9612 0.574553 10.8649 0.592099 10.7676C0.545494 10.741 0.492674 10.795 0.474032 10.8274C0.126049 10.4385 0.691511 9.68554 0.424309 9.44288C0.461593 9.33401 0.604516 9.28581 0.716367 9.34648C0.803363 7.90628 0.868605 6.36553 1.13891 4.89875C1.0892 4.82811 0.996 4.81564 0.874827 4.83476C1.43719 3.58072 1.21348 2.26684 1.12027 0.983714C1.26319 0.933852 1.2632 1.11336 1.41855 0.987039Z" fill="white" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </section>

            <section className='bg-img-content relative'>
                <div className='img gatsby-image-wrapper'>
                    <img src="../images/African-journey-begin.jpg" alt="let your African journey begin" />
                </div>
                <div className='absolute bottom-70 left-70 z-9 mdscreen:left-30 mdscreen:bottom-30'>
                    <div className='title-white'>
                        <h2>let your African journey begin</h2>
                    </div>
                    <div className='content white text20'>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.
                        </p>
                    </div>
                    <div className="btn-custom mt-30">
                        <Link to="/" className="button btn-red"><span>Let’s Start Planning</span>
                            <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M209.393 45.1014C207.183 45.4293 205.365 44.5163 203.377 44.99L203.632 45.2303C202.186 45.3995 203.335 44.6216 201.832 44.9492C201.241 45.154 201.986 45.2536 201.707 45.2716C198.608 45.2007 195.415 45.4414 192.511 44.8792C191.798 45.4115 189.201 44.9048 188.063 45.4404C187.265 45.2411 186.469 45.3 186.16 44.9284C175.382 45.291 164.362 44.8706 153.316 44.9983C148.138 44.027 141.961 45.2864 135.825 44.9915C135.781 45.0287 135.79 45.0707 135.826 45.0968C133.396 44.8413 130.956 44.7793 128.521 44.911L126.495 44.5001C112.141 45.4961 117.978 44.8346 103.39 45.3216C86.8136 45.7027 72.2994 46.5526 56.1433 45.345C56.1442 45.445 56.034 45.4986 56.4504 45.5375C51.7928 45.3681 47.5518 45.7697 43.1731 45.5929L43.1739 45.6929C33.657 45.0344 12.2689 45.8374 0.0106835 45.5003L0.000919772 44.3521C1.77153 44.3805 3.48506 44.4621 5.18629 44.6596L5.14909 44.4492C13.98 45.113 38.009 44.1421 47.1535 44.2135C50.95 44.0999 53.519 44.3276 57.3339 44.3086L57.4247 44.0498C63.8547 44.985 70.9152 43.0498 77.6249 44.083L77.1793 43.7335C78.2238 44.2522 81.2315 43.5072 80.8412 44.4532L82.0249 44.1596C86.585 45.3621 90.3004 43.5213 95.8879 44.2787L95.5187 44.0603C96.95 44.2699 98.3956 44.2941 99.8302 44.1323C99.6617 44.0967 99.7408 44.0329 99.3862 43.9777C99.7353 43.9065 99.9694 43.8521 100.111 43.8036C101.071 43.7961 102.009 43.7889 102.855 43.8455L102.668 43.6521L104.245 43.9138L104.282 43.5184C108.336 43.487 112.153 43.7683 116.106 43.7851L115.899 43.4285C119.582 44.0321 123.728 43.3679 127.625 43.6011L127.358 43.4767C137.235 43.2633 146.348 43.7827 156.131 43.9756C155.98 43.9399 155.926 43.835 155.767 43.7941C156.264 43.9738 156.778 44.0778 157.296 44.1036C157.437 44.0235 157.149 43.9362 156.976 43.9059C159.042 43.2999 163.06 44.2275 164.348 43.7645C164.928 43.8232 165.187 44.0635 164.866 44.2557C172.537 44.3438 180.743 44.3909 188.558 44.7886C188.933 44.7014 188.998 44.5429 188.895 44.3383C195.581 45.24 202.575 44.8065 209.407 44.5956C209.674 44.8359 208.718 44.8433 209.393 45.1014Z" fill="#821608" />
                                <path d="M0.0677397 2.39725C2.27674 2.73156 4.09795 1.82383 6.08389 2.30327L5.82871 2.54285C7.27394 2.71627 6.12817 1.93498 7.62901 2.26702C8.21963 2.47349 7.47487 2.57094 7.75348 2.58971C10.8525 2.52788 14.0451 2.77784 16.9508 2.22406C17.6614 2.7584 20.2611 2.2593 21.3965 2.79817C22.1956 2.60123 22.9915 2.66238 23.3014 2.29167C34.0786 2.6856 45.0997 2.29721 56.1452 2.45695C61.3264 1.5007 67.4987 2.77802 73.6365 2.50096C73.6803 2.5383 73.671 2.58031 73.6352 2.60627C76.0653 2.35785 78.5058 2.3029 80.9402 2.44175L82.9678 2.03665C97.3179 3.07441 91.4837 2.39595 106.07 2.92525C122.645 3.35457 137.156 4.24656 153.316 3.08587C153.315 3.18594 153.425 3.23979 153.009 3.2775C157.667 3.12165 161.906 3.53551 166.286 3.37142L166.284 3.4715C175.804 2.84063 197.189 3.7057 209.448 3.40426L209.462 2.25604C207.691 2.27933 205.978 2.35589 204.276 2.54848L204.314 2.3382C195.48 2.97637 171.455 1.93569 162.31 1.98056C158.514 1.85586 155.944 2.07609 152.129 2.04601L152.04 1.78694C145.606 2.70352 138.553 0.747832 131.839 1.76152L132.286 1.41334C131.24 1.92898 128.235 1.17529 128.622 2.12234L127.439 1.8253C122.875 3.01463 119.166 1.16304 113.576 1.90422L113.946 1.68689C112.514 1.89233 111.068 1.91227 109.634 1.74635C109.803 1.71127 109.724 1.64722 110.078 1.59305C109.73 1.52086 109.496 1.46569 109.355 1.41678C108.394 1.40655 107.456 1.39656 106.61 1.45077L106.798 1.25787L105.22 1.51499L105.184 1.11954C101.131 1.07638 97.3122 1.34652 93.3597 1.35185L93.5676 0.995859C89.8823 1.58875 85.7389 0.912512 81.8412 1.1344L82.1083 1.01083C72.2323 0.768721 63.1175 1.26167 53.3339 1.42616C53.4848 1.3909 53.5391 1.2861 53.699 1.24566C53.2013 1.42397 52.687 1.52649 52.1683 1.55072C52.0276 1.47021 52.3164 1.38373 52.4894 1.35396C50.4254 0.741999 46.4043 1.6579 45.1175 1.19118C44.537 1.24821 44.2774 1.48776 44.5982 1.68082C36.927 1.74664 28.7208 1.76989 20.9043 2.14497C20.5291 2.05669 20.4646 1.89799 20.5689 1.69365C13.8793 2.5759 6.8872 2.12217 0.0561323 1.89141C-0.212312 2.13087 0.743596 2.14105 0.0677397 2.39725Z" fill="#821608" />
                                <path d="M206.901 46.0844C206.57 45.6091 207.557 45.2203 207.069 44.7926L206.811 44.8468C206.643 44.5359 207.462 44.784 207.125 44.4609C206.912 44.3335 206.8 44.4932 206.783 44.4333C206.884 43.7679 206.654 43.0816 207.277 42.459C206.716 42.305 207.277 41.748 206.716 41.5027C206.935 41.3316 206.879 41.1605 207.277 41.095C206.98 38.7794 207.518 36.4135 207.473 34.0409C208.55 32.9307 207.26 31.6018 207.625 30.2843C207.585 30.2748 207.541 30.2767 207.513 30.2843C207.805 29.7631 207.891 29.2391 207.771 28.7159L208.225 28.2815C207.283 25.197 207.939 26.4517 207.541 23.3177C207.271 19.757 206.486 16.6382 207.905 13.1706C207.799 13.1706 207.743 13.1468 207.698 13.2362C207.916 12.2362 207.524 11.3246 207.748 10.3845L207.642 10.3845C208.421 8.34179 207.743 3.74682 208.203 1.11475L209.426 1.11475C209.381 1.49497 209.28 1.86283 209.055 2.22784L209.28 2.22024C208.5 4.11564 209.336 9.27808 209.184 11.2419C209.274 12.0575 209.01 12.6088 208.999 13.4282L209.274 13.4482C208.225 14.8274 210.228 16.3473 209.072 17.7865L209.448 17.6914C208.887 17.9148 209.656 18.5621 208.651 18.4766L208.954 18.7313C207.636 19.7085 209.566 20.5098 208.713 21.7084L208.949 21.6296C208.714 21.9366 208.676 22.247 208.837 22.5554C208.876 22.5193 208.943 22.5364 209.005 22.4603C209.078 22.5354 209.134 22.5858 209.184 22.6162C209.184 22.8225 209.184 23.024 209.117 23.2056L209.325 23.1656L209.033 23.504L209.454 23.5126C209.454 24.3833 209.123 25.2027 209.072 26.0515L209.454 26.0078C208.78 26.7977 209.454 27.6893 209.173 28.5258L209.308 28.4688C209.454 30.5904 208.825 32.5466 208.539 34.6474C208.578 34.615 208.691 34.6036 208.736 34.5694C208.54 34.6758 208.425 34.786 208.393 34.8974C208.478 34.9278 208.573 34.866 208.607 34.8289C209.235 35.2738 208.214 36.135 208.696 36.4125C208.629 36.5371 208.371 36.5922 208.169 36.5228C208.012 38.1701 207.894 39.9324 207.406 41.6101C207.496 41.6909 207.664 41.7052 207.883 41.6833C206.867 43.1177 207.271 44.6205 207.44 46.0882C207.182 46.1452 207.182 45.9399 206.901 46.0844Z" fill="#821608" />
                                <path d="M2.56154 1.12898C2.89255 1.60426 1.90513 1.99303 2.39323 2.42078L2.65129 2.3666C2.8196 2.67743 2.00049 2.42934 2.33711 2.75253C2.5503 2.8799 2.66253 2.72021 2.67937 2.78009C2.57838 3.44548 2.8084 4.13177 2.18565 4.75439C2.74669 4.90837 2.18565 5.4654 2.74669 5.71064C2.52788 5.88174 2.58399 6.05284 2.18565 6.11843C2.483 8.43397 1.94439 10.7999 1.98927 13.1725C0.91209 14.2827 2.20249 15.6116 1.83782 16.9291C1.87709 16.9386 1.92194 16.9367 1.95 16.9291C1.65786 17.4503 1.57167 17.9743 1.69194 18.4975L1.23751 18.9319C2.18004 22.0164 1.52362 20.7617 1.92195 23.8956C2.19125 27.4564 2.97671 30.5752 1.5573 34.0428C1.6639 34.0428 1.72 34.0665 1.76488 33.9772C1.54608 34.9772 1.93879 35.8888 1.71437 36.8289L1.82097 36.8289C1.04113 38.8716 1.71998 43.4666 1.25994 46.0986L0.0368907 46.0986C0.0817733 45.7184 0.182744 45.3505 0.407157 44.9855L0.182765 44.9931C0.9626 43.0977 0.126651 37.9353 0.27813 35.9715C0.188365 35.1559 0.45206 34.6046 0.463281 33.7852L0.18838 33.7652C1.23751 32.386 -0.765384 30.866 0.390343 29.4269L0.014461 29.522C0.575494 29.2986 -0.193131 28.6513 0.811118 28.7368L0.508172 28.4821C1.8266 27.5049 -0.103358 26.7036 0.749412 25.5049L0.513754 25.5838C0.748794 25.2768 0.786423 24.9664 0.625967 24.658C0.586695 24.6941 0.519378 24.677 0.457664 24.753C0.38473 24.678 0.328623 24.6276 0.27813 24.5972C0.27813 24.3909 0.278127 24.1894 0.345451 24.0078L0.137871 24.0477L0.429619 23.7093L0.00884476 23.7008C0.00884472 22.8301 0.33985 22.0107 0.390343 21.1619L0.00884465 21.2056C0.682084 20.4157 0.00884457 19.5241 0.289361 18.6876L0.154719 18.7446C0.00884992 16.623 0.637204 14.6667 0.923331 12.566C0.884058 12.5983 0.771831 12.6097 0.726949 12.644C0.922498 12.5375 1.03752 12.4274 1.0692 12.316C0.98505 12.2856 0.889671 12.3474 0.856009 12.3845C0.227653 11.9396 1.24871 11.0784 0.766225 10.8008C0.833549 10.6763 1.09163 10.6212 1.2936 10.6906C1.45069 9.04327 1.56849 7.28095 2.05659 5.60323C1.96683 5.52243 1.79853 5.50817 1.57973 5.53004C2.5952 4.09565 2.19124 2.59283 2.02293 1.12518C2.28101 1.06815 2.28102 1.27347 2.56154 1.12898Z" fill="#821608" />
                                <path d="M2.05461 2L209.145 2.57333L207.564 44.4267L1.00072 45L2.05461 2Z" fill="#821608" />
                            </svg>

                        </Link>
                    </div>
                </div>
            </section>

            <section className='our-partners lg:pt-120 pt-60 bg-pattern'>
                <div className='container-fluid-xl'>
                    <div className='section-title text-center'>
                        <div className='title-black'>
                            <h3>Our partners</h3>
                        </div>
                        <div className='content'>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.
                            </p>
                        </div>
                    </div>
                    <div className='our-partners-slider relative lg:mt-50 mt-25'>
                        <Swiper
                            spaceBetween={10}
                            loop={true}
                            slidesPerView={7}
                            allowTouchMove={true}
                            grabCursor={true}
                            speed={900}
                            navigation={false}
                            modules={[Pagination, Navigation]}
                            className=""
                            breakpoints={{
                                100: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                640: {
                                    slidesPerView: 5,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 10,
                                },
                                1024: {
                                    slidesPerView: 7,
                                    spaceBetween: 10,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className='img'>
                                    <img src="../images/angama.png" alt="angama" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='img'>
                                    <img src="../images/beyond.png" alt="beyond" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='img'>
                                    <img src="../images/one-only.png" alt="One&Only" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='img'>
                                    <img src="../images/sanctuary.png" alt="sanctuary" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='img'>
                                    <img src="../images/Singita.png" alt="Singita" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='img'>
                                    <img src="../images/LONDOLOZI.png" alt="LONDOLOZI" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='img'>
                                    <img src="../images/family-collection.png" alt="Family Collection" />
                                </div>
                            </SwiperSlide>

                        </Swiper>
                        <div className="swiper-arrow">
                            <a
                                className="button-prev cursor-pointer"
                                onClick={handlePrevClickStay}
                            ><img src="../images/black-arrow.png" className='scale-x-[-1]' alt="" /></a>
                            <a
                                className="button-next cursor-pointer"
                                onClick={handleNextClickStay}
                            ><img src="../images/black-arrow.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </section>

            <section className='guest-feedback bg-pattern lg:py-120 py-60'>
                <div className='container-fluid pr-0'>
                    <Swiper
                        spaceBetween={30}
                        loop={true}
                        slidesPerView={1.1}
                        allowTouchMove={true}
                        grabCursor={true}
                        speed={900}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className=""
                    >
                        <SwiperSlide>
                            <div className='guest-feedback-slider'>
                                <div className='flex flex-wrap'>
                                    <div className='lg:w-5/12 w-full'>
                                        <div className='img gatsby-image-wrapper'>
                                            <img src="../images/Guest-Feedback-img1.jpg" alt="Image" />
                                        </div>
                                    </div>
                                    <div className='lg:w-7/12 w-full'>
                                        <div className='bg-white p-100 lgscreen:p-50 mdscreen:p-20 h-full flex flex-wrap items-center'>
                                            <span className='font-heading text-black-500 uppercase text-16'>Guest Feedback</span>
                                            <div className='gf-slider-content content'>
                                                <h6 className='font-secondary text-26  xlscreen:text-20 mdscreen:text-18 xlscreen:leading-20 text-black-500 leading-34'>
                                                    “I had the best time, probably my favourite trip ever. Thank you for curating such a perfect experience.  Everything was just amazing.”
                                                </h6>
                                                <p>
                                                    Molly, USA | Gorillas, chimps & big  5
                                                </p>
                                            </div>
                                            <div className='btn-custom flex flex-wrap items-center space-x-8 mt-0'>
                                                <Link to="/" className='button btn-red-border'>Explore Trip Inspiration</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='guest-feedback-slider'>
                                <div className='flex flex-wrap'>
                                    <div className='lg:w-5/12 w-full'>
                                        <div className='img gatsby-image-wrapper'>
                                            <img src="../images/Guest-Feedback-img2.jpg" alt="Image" />
                                        </div>
                                    </div>
                                    <div className='lg:w-7/12 w-full'>
                                        <div className='bg-white p-100 lgscreen:p-50 mdscreen:p-20 h-full flex flex-wrap items-center'>
                                            <span className='font-heading text-black-500 uppercase text-16'>Guest Feedback</span>
                                            <div className='gf-slider-content content'>
                                                <h6 className='font-secondary text-26 xlscreen:text-20 mdscreen:text-18 xlscreen:leading-20 text-black-500 leading-34'>
                                                    “I had the best time, probably my favourite trip ever. Thank you for curating such a perfect experience.  Everything was just amazing.”
                                                </h6>
                                                <p>
                                                    Molly, USA | Gorillas, chimps & big  5
                                                </p>
                                            </div>
                                            <div className='btn-custom flex flex-wrap items-center space-x-8 mt-0'>
                                                <Link to="/" className='button btn-red-border'>Explore Trip Inspiration</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </section>

            <section className='experiences-slider lg:py-120 py-60'>
                <div className='container-fluid'>
                    <div className='section-title text-center'>
                        <div className='title-black'>
                            <h3>Experiences of a lifetime</h3>
                        </div>
                        <div className='content'>
                            <p>
                                Lorem ipsum cupidatat non proident, sunt in culpa qui officia deserunt sunt in mollit anim id est laborum.
                            </p>
                        </div>
                        <div className='btn-custom flex flex-wrap items-center justify-center space-x-8 mt-30'>
                            <Link to="/" className='button btn-border'><span>Discover All Trip Inspiration</span>
                                <img src="../images/btn-red-bg.png" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className='experiences-slider-grid mt-70'>
                        <Swiper
                            effect={"coverflow"}
                            grabCursor={true}
                            centeredSlides={true}
                            loop={false}
                            slidesPerView={"3"}
                            scrollbar={{
                                hide: false
                            }}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: false
                            }}
                            pagination={false}
                            modules={[EffectCoverflow, Pagination, Scrollbar]}
                            className="mySwiper"
                            breakpoints={{
                                100: {
                                  slidesPerView: 1.2,
                                  spaceBetween: 0,
                                },
                                768: {
                                  slidesPerView: 2,
                                  spaceBetween: 0,
                                },
                                1024: {
                                  slidesPerView: 3,
                                  spaceBetween: 0,
                                },
                              }}
                        >
                            <SwiperSlide>
                                <div className='img gatsby-image-wrapper'>
                                    <img src="../images/experiences-ifetime-img1.jpg" alt="experiences"/>
                                </div>
                                <div className='ex-slider-content text-center px-20 py-20'>
                                    <div className='title-black'>
                                        <h6>The great migration </h6>
                                    </div>
                                    <div className='content'>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                        </p>
                                    </div>
                                    <div className='btn-custom flex flex-wrap items-center space-x-8 mt-15 justify-center'>
                                            <Link to="/" className='button btn-red-border'>Explore Experience</Link>
                                        </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='img gatsby-image-wrapper'>
                                    <img src="../images/experiences-ifetime-img2.jpg" alt="experiences"/>
                                </div>
                                <div className='ex-slider-content text-center px-20 py-20'>
                                    <div className='title-black'>
                                        <h6>The great migration </h6>
                                    </div>
                                    <div className='content'>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                        </p>
                                    </div>
                                    <div className='btn-custom flex flex-wrap items-center space-x-8 mt-15 justify-center'>
                                            <Link to="/" className='button btn-red-border'>Explore Experience</Link>
                                        </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='img gatsby-image-wrapper'>
                                    <img src="../images/experiences-ifetime-img3.jpg" alt="experiences"/>
                                </div>
                                <div className='ex-slider-content text-center px-20 py-20'>
                                    <div className='title-black'>
                                        <h6>The great migration </h6>
                                    </div>
                                    <div className='content'>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                        </p>
                                    </div>
                                    <div className='btn-custom flex flex-wrap items-center space-x-8 mt-15 justify-center'>
                                            <Link to="/" className='button btn-red-border'>Explore Experience</Link>
                                        </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='img gatsby-image-wrapper'>
                                    <img src="../images/experiences-ifetime-img4.jpg" alt="experiences"/>
                                </div>
                                <div className='ex-slider-content text-center px-20 py-20'>
                                    <div className='title-black'>
                                        <h6>The great migration </h6>
                                    </div>
                                    <div className='content'>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                        </p>
                                    </div>
                                    <div className='btn-custom flex flex-wrap items-center space-x-8 mt-15 justify-center'>
                                            <Link to="/" className='button btn-red-border'>Explore Experience</Link>
                                        </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='img gatsby-image-wrapper'>
                                    <img src="../images/experiences-ifetime-img5.jpg" alt="experiences"/>
                                </div>
                                <div className='ex-slider-content text-center px-20 py-20'>
                                    <div className='title-black'>
                                        <h6>The great migration </h6>
                                    </div>
                                    <div className='content'>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                        </p>
                                    </div>
                                    <div className='btn-custom flex flex-wrap items-center space-x-8 mt-15 justify-center'>
                                            <Link to="/" className='button btn-red-border'>Explore Experience</Link>
                                        </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='img gatsby-image-wrapper'>
                                    <img src="../images/experiences-ifetime-img6.jpg" alt="experiences"/>
                                </div>
                                <div className='ex-slider-content text-center px-20 py-20'>
                                    <div className='title-black'>
                                        <h6>The great migration </h6>
                                    </div>
                                    <div className='content'>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                        </p>
                                    </div>
                                    <div className='btn-custom flex flex-wrap items-center space-x-8 mt-15 justify-center'>
                                            <Link to="/" className='button btn-red-border'>Explore Experience</Link>
                                        </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='img gatsby-image-wrapper'>
                                    <img src="../images/experiences-ifetime-img7.jpg" alt="experiences"/>
                                </div>
                                <div className='ex-slider-content text-center px-20 py-20'>
                                    <div className='title-black'>
                                        <h6>The great migration </h6>
                                    </div>
                                    <div className='content'>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                        </p>
                                    </div>
                                    <div className='btn-custom flex flex-wrap items-center space-x-8 mt-15 justify-center'>
                                            <Link to="/" className='button btn-red-border'>Explore Experience</Link>
                                        </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='img gatsby-image-wrapper'>
                                    <img src="../images/experiences-ifetime-img1.jpg" alt="experiences"/>
                                </div>
                                <div className='ex-slider-content text-center px-20 py-20'>
                                    <div className='title-black'>
                                        <h6>The great migration </h6>
                                    </div>
                                    <div className='content'>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                        </p>
                                    </div>
                                    <div className='btn-custom flex flex-wrap items-center space-x-8 mt-15 justify-center'>
                                            <Link to="/" className='button btn-red-border'>Explore Experience</Link>
                                        </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='img gatsby-image-wrapper'>
                                    <img src="../images/experiences-ifetime-img2.jpg" alt="experiences"/>
                                </div>
                                <div className='ex-slider-content text-center px-20 py-20'>
                                    <div className='title-black'>
                                        <h6>The great migration </h6>
                                    </div>
                                    <div className='content'>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                        </p>
                                    </div>
                                    <div className='btn-custom flex flex-wrap items-center space-x-8 mt-15 justify-center'>
                                            <Link to="/" className='button btn-red-border'>Explore Experience</Link>
                                        </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>

            <section className='discover-blog lg:py-120 py-60 bg-pattern'>
                <div className='container-fluid pr-0'>
                    <div className='section-title'>
                        <div className='title-black'>
                            <h3>Discover stories from our travel blog</h3>
                        </div>
                        <div className='content'>
                            <p>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
                            </p>
                        </div>
                    </div>
                    <div className='discover-blog-slider lg:mt-40 mt-20'>
                        <Swiper
                            spaceBetween={20}
                            loop={true}
                            slidesPerView={3.5}
                            allowTouchMove={true}
                            grabCursor={true}
                            speed={900}
                            navigation={false}
                            modules={[Pagination, Navigation]}
                            className=""
                            breakpoints={{
                                100: {
                                    slidesPerView: 1.2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3.5,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3.5,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className='db-bx bg-white'>
                                    <div className='img gatsby-image-wrapper'>
                                        <img src="../images/blog-img1.jpg" alt="Blog" />
                                    </div>
                                    <div className='db-content lg:py-30 py-15 lg:px-20 px-10'>
                                        <div className='content'>
                                            <h6 className='uppercase text-19 mdscreen:text-16 mdscreen:leading-[20px] text-black-500'>new Blog Post Title</h6>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                            </p>
                                        </div>
                                        <div className='btn-custom flex flex-wrap items-center space-x-8 mt-15'>
                                            <Link to="/" className='button btn-red-border'>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='db-bx bg-white'>
                                    <div className='img gatsby-image-wrapper'>
                                        <img src="../images/blog-img2.jpg" alt="Blog" />
                                    </div>
                                    <div className='db-content lg:py-30 py-15 lg:px-20 px-10'>
                                        <div className='content'>
                                            <h6 className='uppercase text-19 mdscreen:text-16 mdscreen:leading-[20px] text-black-500'>new Blog Post Title</h6>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                            </p>
                                        </div>
                                        <div className='btn-custom flex flex-wrap items-center space-x-8 mt-15'>
                                            <Link to="/" className='button btn-red-border'>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='db-bx bg-white'>
                                    <div className='img gatsby-image-wrapper'>
                                        <img src="../images/blog-img3.jpg" alt="Blog" />
                                    </div>
                                    <div className='db-content lg:py-30 py-15 lg:px-20 px-10'>
                                        <div className='content'>
                                            <h6 className='uppercase text-19 mdscreen:text-16 mdscreen:leading-[20px] text-black-500'>new Blog Post Title</h6>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                            </p>
                                        </div>
                                        <div className='btn-custom flex flex-wrap items-center space-x-8 mt-15'>
                                            <Link to="/" className='button btn-red-border'>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='db-bx bg-white'>
                                    <div className='img gatsby-image-wrapper'>
                                        <img src="../images/blog-img4.jpg" alt="Blog" />
                                    </div>
                                    <div className='db-content lg:py-30 py-15 lg:px-20 px-10'>
                                        <div className='content'>
                                            <h6 className='uppercase text-19 mdscreen:text-16 mdscreen:leading-[20px] text-black-500'>new Blog Post Title</h6>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                            </p>
                                        </div>
                                        <div className='btn-custom flex flex-wrap items-center space-x-8 mt-15'>
                                            <Link to="/" className='button btn-red-border'>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </section>

            <Footer></Footer>

        </React.Fragment>

    );
}

export default Home;
