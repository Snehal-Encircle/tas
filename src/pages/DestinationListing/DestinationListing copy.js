import React, { useEffect, useState } from 'react';
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

function DestinationListing() {
    const [curentSlide, setCurentSlide] = useState(0);
    const [pinStyle, setPinStyle] = useState([]);

    useEffect(() => {
        document.body.classList.remove("menu-open");
        gsap.registerPlugin(ScrollTrigger);

        if (window.innerWidth > 1440) {
            setPinStyle([{
                title: "Nambia",
                position: {
                    top: '200px',
                    left: '200px',
                    right: '0px'
                }

            },{
                title: "Unaganda",
                position: {
                    top: '300px',
                    left: '300px',
                    right: '0px'
                }

            }])
        }

        if (window.innerWidth >= 1367 && window.innerWidth <= 1440) {
            setPinStyle([{
                title: "Nambia",
                position: {
                    top: '100px',
                    left: '100px',
                    right: '0px'
                }

            },{
                title: "Unaganda",
                position: {
                    top: '150px',
                    left: '150px',
                    right: '0px'
                }

            }])
        }


        if (window.innerWidth >= 1200 && window.innerWidth <= 1366) {
            setPinStyle([{
                title: "Nambia",
                position: {
                    top: '200px',
                    left: '200px',
                    right: '0px'
                }

            }])
        }



    }, []);

    const pleft = 200;
    const ptop = 200;


    const [tabOption, setTabOption] = useState('all-destinations');

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

            <section className='banner innerpage-banner h-screen relative'>
                <div className='banner-img h-full flex items-end justify-start'>
                    <div className='img'>
                        <img src="../images/destinationlisting-banner.jpg" alt="Banner" />
                    </div>
                    <div className='banner-second-img absolute bottom-0 left-0'>
                        <img src="../images/TA-Elephant-white-1.png" className='w-[400px] object-contain' alt="TA-Elephant" />
                    </div>
                    {/* <div className='video absolute w-full h-full'>
                        <video autoPlay muted loop >
                            <source src="../images/private-house.mp4" type="video/mp4"/>
                        </video>
                    </div> */}
                    <div className='banner-info px-15 text-left z-9 relative lg:pl-70 pb-100 max-w-[850px] mdscreen:pb-50'>
                        <h1 className='lg:text-55 lg:leading-60 xlscreen:text-[45px] xlscreen:leading-45 lgscreen:text-35 mdscreen:text-26 mdscreen:leading-27 lgscreen:mb-5 text-white uppercase'>destinationlisting</h1>
                        <p>Lorem ipsum cupidatat non provident, sunt in culpa qui officia deserunt sunt in mollit anim id est laborum.</p>
                        <div className='banner-video py-10'>
                            <button onClick={() => { openModalVideo(); }} className='flex justify-start items-center'>
                                <div className='video-icon w-20 relative top-[-2px]'>
                                    <img src="../images/play.png" className='m-auto' alt="Play" />
                                </div>
                                <span className='text-white font-secondary text-17 ml-10'>Watch Video</span>
                            </button>
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

            <section className='map-zigzag bg-pattern lg:py-120 py-60'>
                <div className='container-fluid-xl'>
                    <div className='flex items-center'>
                        <div className='lg:w-6/12 w-full'>
                            <div className='map-zigzag-content'>
                                <div className='elephant-img'>
                                    <img src="../images/Elephant-group.png" alt="Elephant" />
                                </div>
                                <div className='title-black'>
                                    <h3>Discover the most incredible places across Africa</h3>
                                </div>
                                <div className='content'>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                                    </p>
                                </div>
                                <div className="btn-custom flex flex-wrap items-center space-x-8 mt-30">
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
                        </div>
                        <div className='lg:w-6/12 w-full'>
                            <div className='map-with-content relative lg:pl-100' id="image-map">
                                <div className='img static'>
                                    <img src="../images/Africa-map.png" alt="Map" />
                                    {pinStyle.map((item) => {
                                       return <div className='map-pin country1' data-xpos={pleft} data-ypos={ptop} style={{ left: item.position.left, top: item.position.top }}>
                                            <Tooltip placement="top" trigger={['hover']} overlay={<span>Solo Traveller</span>}>
                                                <img src="../images/marker.png" className='max-w-25' alt="" />
                                            </Tooltip>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='tabs-with-grid lg:py-60 py-30'>
                <div className='container-fluid'>
                    <div className='section-title'>
                        <div className='title-black'>
                            <h3>Explore our most popular Destinations</h3>
                        </div>
                        <div className='content'>
                            <p>Excepteur sint occaecat cupidatat non provident, sunt in culpa qui officia deserunt.</p>
                        </div>
                    </div>
                    <div className='tabs-content pt-30'>
                        <ul className='tabs'>
                            <li onClick={() => { setTabOption('all-destinations') }} className={`tab-link cursor-pointer ${(tabOption == 'all-destinations') ? 'tab-current' : ''}`}>All Destinations</li>
                            <li onClick={() => { setTabOption('southern-africa') }} className={`tab-link cursor-pointer ${(tabOption == 'southern-africa') ? 'tab-current' : ''}`}>southern Africa</li>
                            <li onClick={() => { setTabOption('central-africa') }} className={`tab-link cursor-pointer ${(tabOption == 'central-africa') ? 'tab-current' : ''}`}>central africa</li>
                            <li onClick={() => { setTabOption('east-africa') }} className={`tab-link cursor-pointer ${(tabOption == 'east-africa') ? 'tab-current' : ''}`}>East Africa</li>
                        </ul>
                    </div>
                    <div className='tabs-container mt-50'>
                        {tabOption == 'all-destinations' && <div id="all-destinations" class="tab-content global-list">
                            <div className='flex flex-wrap lg:mx-minus-15 mx-0 gap-y-10'>
                                <div className='lg:w-6/12 w-full lg:px-15 px-0'>
                                    <div className='grid-bx'>
                                        <div className='img gatsby-image-wrapper'>
                                            <img src="../images/Botswana2.jpg" alt="Botswana" />
                                        </div>
                                        <div className='grid-bx-content'>
                                            <div className='title-black'>
                                                <h5>Botswana</h5>
                                            </div>
                                            <div className='content'>
                                                <ul>
                                                    <li>central Kalahari</li>
                                                    <li>Chobe</li>
                                                    <li>linyanti savuti</li>
                                                    <li>makgadikgadi</li>
                                                    <li>Okavango Delta</li>
                                                </ul>
                                            </div>
                                            <div className='btn-custom flex flex-wrap items-center space-x-8 mt-20'>
                                                <Link to="/" className='button btn-red-border'>Explore Destination </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:w-6/12 w-full lg:px-15 px-0'>
                                    <div className='grid-bx'>
                                        <div className='img gatsby-image-wrapper'>
                                            <img src="../images/ZAMBIA.jpg" alt="ZAMBIA" />
                                        </div>
                                        <div className='grid-bx-content'>
                                            <div className='title-black'>
                                                <h5>ZAMBIA</h5>
                                            </div>
                                            <div className='content'>
                                                <ul>
                                                    <li>LOWER ZAMBEZI</li>
                                                    <li>LUANGWA VALLEY</li>
                                                    <li>KAFUE NATIONAL PARK</li>
                                                    <li>Victoria Falls</li>
                                                </ul>
                                            </div>
                                            <div className='btn-custom flex flex-wrap items-center space-x-8 mt-20'>
                                                <Link to="/" className='button btn-red-border'>Explore Destination </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:w-6/12 w-full lg:px-15 px-0'>
                                    <div className='grid-bx'>
                                        <div className='img gatsby-image-wrapper'>
                                            <img src="../images/KENYA2.jpg" alt="KENYA" />
                                        </div>
                                        <div className='grid-bx-content'>
                                            <div className='title-black'>
                                                <h5>KENYA</h5>
                                            </div>
                                            <div className='content'>
                                                <ul>
                                                    <li>NAIROBI</li>
                                                    <li>Lamu Island</li>
                                                    <li>Masai mara</li>
                                                </ul>
                                            </div>
                                            <div className='btn-custom flex flex-wrap items-center space-x-8 mt-20'>
                                                <Link to="/" className='button btn-red-border'>Explore Destination </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:w-6/12 w-full lg:px-15 px-0'>
                                    <div className='grid-bx'>
                                        <div className='img gatsby-image-wrapper'>
                                            <img src="../images/ZIMBABWE.jpg" alt="ZIMBABWE" />
                                        </div>
                                        <div className='grid-bx-content'>
                                            <div className='title-black'>
                                                <h5>ZIMBABWE</h5>
                                            </div>
                                            <div className='content'>
                                                <ul>
                                                    <li>Victoria Falls</li>
                                                    <li>HWANGE</li>
                                                    <li>MALILANGWE WILDLIFE RESERVE</li>
                                                    <li>Mana pools</li>
                                                </ul>
                                            </div>
                                            <div className='btn-custom flex flex-wrap items-center space-x-8 mt-20'>
                                                <Link to="/" className='button btn-red-border'>Explore Destination </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:w-6/12 w-full lg:px-15 px-0'>
                                    <div className='grid-bx'>
                                        <div className='img gatsby-image-wrapper'>
                                            <img src="../images/Rwanda.jpg" alt="Rwanda" />
                                        </div>
                                        <div className='grid-bx-content'>
                                            <div className='title-black'>
                                                <h5>Rwanda</h5>
                                            </div>
                                            <div className='content'>
                                                <ul>
                                                    <li>Kigali</li>
                                                    <li>Volcanoes National Park</li>
                                                    <li>Nyungwe Forest National Park</li>
                                                </ul>
                                            </div>
                                            <div className='btn-custom flex flex-wrap items-center space-x-8 mt-20'>
                                                <Link to="/" className='button btn-red-border'>Explore Destination </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:w-6/12 w-full lg:px-15 px-0'>
                                    <div className='grid-bx'>
                                        <div className='img gatsby-image-wrapper'>
                                            <img src="../images/MOZAMBIQUE.jpg" alt="MOZAMBIQUE" />
                                        </div>
                                        <div className='grid-bx-content'>
                                            <div className='title-black'>
                                                <h5>MOZAMBIQUE</h5>
                                            </div>
                                            <div className='content'>
                                                <ul>
                                                    <li>QUIRIMBAS</li>
                                                    <li>MAPUTO</li>
                                                    <li>BAZARUTO</li>
                                                </ul>
                                            </div>
                                            <div className='btn-custom flex flex-wrap items-center space-x-8 mt-20'>
                                                <Link to="/" className='button btn-red-border'>Explore Destination </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='btn-custom flex flex-wrap items-center justify-center space-x-8 mt-50'>
                                <Link to="/" className='button btn-border'><span>Load More Destinations</span>
                                    <img src="../images/btn-red-bg.png" alt="" />
                                </Link>
                            </div>
                        </div>}
                    </div>
                </div>
            </section>

            <section className='trip-slider lg:py-60 py-30 bg-pattern bg-pattern-spacing'>
                <div className='md:w-8/12 w-full m-auto'>
                    <div className='trip-slider-top text-center px-20'>
                        <div className='title-black'>
                            <h3>REAL TRIPS, REAL PEOPLE, REAL MEMORIES</h3>
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

            <section className='bg-img-content relative'>
                <div className='img gatsby-image-wrapper'>
                    <img src="../images/Start-creating-memories.jpg" alt="Start creating memories" />
                </div>
                <div className='absolute bottom-70 left-70 z-9 mdscreen:left-30 mdscreen:bottom-30'>
                    <div className='title-white'>
                        <h2>Start creating memories</h2>
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

            <section className='discover-ex-slider lg:py-120 py-60'>
                <div className='container-fluid pr-0'>
                    <div className='flex flex-wrap justify-between pr-70'>
                        <div className='section-title'>
                            <div className='title-black'>
                                <h3>Experience the unforgettable</h3>
                            </div>
                            <div className='content'>
                                <p>
                                    Excepteur sint occaecat cupidatat non provident, sunt in culpa qui officia deserunt.
                                </p>
                            </div>
                        </div>
                        <div className='btn-custom flex flex-wrap items-center justify-center space-x-8 lg:mt-0 mt-15'>
                            <Link to="/" className='button btn-border'><span>Discover All Experiences</span>
                                <img src="../images/btn-red-bg.png" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className='discover-ex-slider-main lg:mt-50 mt-25'>
                        <Swiper
                            spaceBetween={20}
                            loop={true}
                            slidesPerView={2.5}
                            centeredSlides={false}
                            allowTouchMove={true}
                            grabCursor={true}
                            speed={900}
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
                                    <img src="../images/Adventure.jpg" alt="Adventure" />
                                </div>
                                <div className='discover-ex-slider-content pr-20 pt-30'>
                                    <div className='title-black'>
                                        <h6>Adventure</h6>
                                    </div>
                                    <div className='content'>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  sunt in culpa qui officia deserunt mollit anim id est laborum. incididunt.
                                        </p>
                                    </div>
                                    <div className='btn-custom flex flex-wrap items-center space-x-8 mt-20'>
                                        <Link to="/" className='button btn-red-border'>Explore Experiences</Link>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='gatsby-image-wrapper'>
                                    <img src="../images/Safari.jpg" alt="Safari" />
                                </div>
                                <div className='discover-ex-slider-content pr-20 pt-30'>
                                    <div className='title-black'>
                                        <h6>Safari</h6>
                                    </div>
                                    <div className='content'>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  sunt in culpa qui officia deserunt mollit anim id est laborum. incididunt.
                                        </p>
                                    </div>
                                    <div className='btn-custom flex flex-wrap items-center space-x-8 mt-20'>
                                        <Link to="/" className='button btn-red-border'>Explore Experiences</Link>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='gatsby-image-wrapper'>
                                    <img src="../images/Relaxation.jpg" alt="Relaxation" />
                                </div>
                                <div className='discover-ex-slider-content pr-20 pt-30'>
                                    <div className='title-black'>
                                        <h6>Relaxation</h6>
                                    </div>
                                    <div className='content'>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  sunt in culpa qui officia deserunt mollit anim id est laborum. incididunt.
                                        </p>
                                    </div>
                                    <div className='btn-custom flex flex-wrap items-center space-x-8 mt-20'>
                                        <Link to="/" className='button btn-red-border'>Explore Experiences</Link>
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

export default DestinationListing;
