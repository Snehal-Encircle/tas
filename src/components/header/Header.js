import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";

const Header = (data) => {
  const menuElement = useRef();
  const menuElementBooking = useRef();

  const [menuOpenStatus, setMenuOpenStatus] = useState("");
  const [menuOpenType, setMenuOpenType] = useState();

  const [searchMenu, setSearchMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpenBooking, setMenuOpenBooking] = useState(false);
  useEffect(() => {
    document.body.classList.remove("menu-open");
  }, []);

  useEffect(() => {
    document.body.classList.remove("menu-open");
  }, [menuOpenType]);

  useEffect(() => {
    window.addEventListener("resize", handleChangeView);
    return () => window.removeEventListener("resize", handleChangeView);
  }, []);

  const handleChangeView = () => {
    setMenuOpenStatus("");
  };
  // Sticky Header
  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      document.body.classList.add("header-sticky");
    }
    if (window.pageYOffset <= 100) {
      document.body.classList.remove("header-sticky");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="header absolute z-999 w-full">
        <div className="container-fluid relative z-9">
          <nav className="navbar relative flex items-center justify-between">
            <div className="header-left flex">
              <Link className="navbar-brand normal-logo" to="/">
                <img
                  src="../images/logo.png"
                  className="max-w-[156px] laptop:max-w-[156px] laptopmini:max-w-[125px]  mdscreen:max-w-[150px] smscreen2:max-w-[100px]"
                  alt="Logo"
                />
              </Link>
              <div className="header-menu justify-end flex items-center xlscreen:hidden ">
                <ul className="header-menu-top flex lgscreen:hidden lg:pl-50 laptop:pl-20 ">
                  <li
                    id="destinations"
                    onMouseEnter={(e) => {
                      document.body.classList.add("mega-menu-open");
                      const para = document.getElementById("destinations");
                      para.classList.add("menuHoveractive");
                    }}
                    onMouseLeave={(e) => {
                      document.body.classList.remove("mega-menu-open");
                      const para = document.getElementById("destinations");
                      para.classList.remove("menuHoveractive");
                    }}
                    className="hoverable "
                  >
                    <Link to="/destinations">
                      Destinations{" "}
                      <span>
                        <i class="far fa-angle-down"></i>
                      </span>
                    </Link>
                    {/* Mega Menu */}
                    <div className="p-6 mega-menu mb-16 sm:mb-0 bg-teal-700">
                      <div className="mega-menu-grid flex space-x-10">
                        <div className="mega-menu-content">
                          <h6>Southern Africa</h6>
                          <ul>
                            <li>
                              <Link to="/">Botswana</Link>
                            </li>
                            <li>
                              <Link to="/">Mozambique</Link>
                            </li>
                            <li>
                              <Link to="/">Namibia</Link>
                            </li>
                            <li>
                              <Link to="/">South Africa</Link>
                            </li>
                            <li>
                              <Link to="/">Zambia</Link>
                            </li>
                            <li>
                              <Link to="/">Zimbabwe</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="mega-menu-content">
                          <h6>East Africa</h6>
                          <ul>
                            <li>
                              <Link to="/">Rwanda</Link>
                            </li>
                            <li>
                              <Link to="/">Kenya</Link>
                            </li>
                            <li>
                              <Link to="/">Tanzania</Link>
                            </li>
                            <li>
                              <Link to="/">Uganda</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="mega-menu-content">
                          <h6>Indian Ocean Islands</h6>
                          <ul>
                            <li>
                              <Link to="/">Madagascar</Link>
                            </li>
                            <li>
                              <Link to="/">Mauritius</Link>
                            </li>
                            <li>
                              <Link to="/">Seychelles</Link>
                            </li>
                            <li>
                              <Link to="/">Zanzibar</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="mega-menu-content">
                          <h6>Central Africa</h6>
                          <ul>
                            <li>
                              <Link to="/">Republic of Congo</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to="/trip-inspiration">Trip Inspiration</Link>
                  </li>
                  <li>
                    <Link to="/experiences">Experiences</Link>
                  </li>
                  <li
                    id="travel-styles"
                    onMouseEnter={(e) => {
                      document.body.classList.add("mega-menu-open");
                      const para = document.getElementById("travel-styles");
                      para.classList.add("menuHoveractive");
                    }}
                    onMouseLeave={(e) => {
                      document.body.classList.remove("mega-menu-open");
                      const para = document.getElementById("travel-styles");
                      para.classList.remove("menuHoveractive");
                    }}
                    className="hoverable "
                  >
                    <Link to="/travel-styles">
                      Travel Styles{" "}
                      <span>
                        <i class="far fa-angle-down"></i>
                      </span>
                    </Link>
                    <div className="p-6 mega-menu mb-16 sm:mb-0 bg-teal-700">
                      <div className="mega-menu-grid flex space-x-10">
                        <div className="mega-menu-content">
                          <ul>
                            <li>
                              <Link to="/">Family Travel</Link>
                            </li>
                            <li>
                              <Link to="/">Romance</Link>
                            </li>
                            <li>
                              <Link to="/">impact</Link>
                            </li>
                          </ul>
                        </div>

                        <div className="mega-menu-content">
                          <ul>
                            <li>
                              <Link to="/">Luxe</Link>
                            </li>
                            <li>
                              <Link to="/">Wellness</Link>
                            </li>
                            <li>
                              <Link to="/">Lifestyle</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-right flex items-center">
              <div className="search w-[160px] smscreen:w-[130px] text-right relative mdscreen:mr-15">
                <div
                  className={`search-input absolute w-full right-20 mdscreen:right-30 top-minus-10  ${
                    searchMenu ? "searchOpen" : ""
                  }`}
                >
                  <form>
                    <input type="text" />
                  </form>
                </div>
                <button
                  className="relative z-99 mdscreen:top-[2px]"
                  id="mobileSearchIcon"
                  onClick={() => {
                    setSearchMenu(!searchMenu);
                    document
                      .querySelectorAll(".mobile-search .searchFocus")[0]
                      .focus();
                  }}
                >
                  <img
                    src="../images/search.png"
                    className="max-w-[17px]"
                    alt="Search"
                  />
                </button>
              </div>
              <div className="btn-custom mx-30 mdscreen:hidden">
                <Link to="/" className="button btn-red">
                  <span>Let’s Start Planning</span>
                  <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M209.393 45.1014C207.183 45.4293 205.365 44.5163 203.377 44.99L203.632 45.2303C202.186 45.3995 203.335 44.6216 201.832 44.9492C201.241 45.154 201.986 45.2536 201.707 45.2716C198.608 45.2007 195.415 45.4414 192.511 44.8792C191.798 45.4115 189.201 44.9048 188.063 45.4404C187.265 45.2411 186.469 45.3 186.16 44.9284C175.382 45.291 164.362 44.8706 153.316 44.9983C148.138 44.027 141.961 45.2864 135.825 44.9915C135.781 45.0287 135.79 45.0707 135.826 45.0968C133.396 44.8413 130.956 44.7793 128.521 44.911L126.495 44.5001C112.141 45.4961 117.978 44.8346 103.39 45.3216C86.8136 45.7027 72.2994 46.5526 56.1433 45.345C56.1442 45.445 56.034 45.4986 56.4504 45.5375C51.7928 45.3681 47.5518 45.7697 43.1731 45.5929L43.1739 45.6929C33.657 45.0344 12.2689 45.8374 0.0106835 45.5003L0.000919772 44.3521C1.77153 44.3805 3.48506 44.4621 5.18629 44.6596L5.14909 44.4492C13.98 45.113 38.009 44.1421 47.1535 44.2135C50.95 44.0999 53.519 44.3276 57.3339 44.3086L57.4247 44.0498C63.8547 44.985 70.9152 43.0498 77.6249 44.083L77.1793 43.7335C78.2238 44.2522 81.2315 43.5072 80.8412 44.4532L82.0249 44.1596C86.585 45.3621 90.3004 43.5213 95.8879 44.2787L95.5187 44.0603C96.95 44.2699 98.3956 44.2941 99.8302 44.1323C99.6617 44.0967 99.7408 44.0329 99.3862 43.9777C99.7353 43.9065 99.9694 43.8521 100.111 43.8036C101.071 43.7961 102.009 43.7889 102.855 43.8455L102.668 43.6521L104.245 43.9138L104.282 43.5184C108.336 43.487 112.153 43.7683 116.106 43.7851L115.899 43.4285C119.582 44.0321 123.728 43.3679 127.625 43.6011L127.358 43.4767C137.235 43.2633 146.348 43.7827 156.131 43.9756C155.98 43.9399 155.926 43.835 155.767 43.7941C156.264 43.9738 156.778 44.0778 157.296 44.1036C157.437 44.0235 157.149 43.9362 156.976 43.9059C159.042 43.2999 163.06 44.2275 164.348 43.7645C164.928 43.8232 165.187 44.0635 164.866 44.2557C172.537 44.3438 180.743 44.3909 188.558 44.7886C188.933 44.7014 188.998 44.5429 188.895 44.3383C195.581 45.24 202.575 44.8065 209.407 44.5956C209.674 44.8359 208.718 44.8433 209.393 45.1014Z"
                      fill="#821608"
                    />
                    <path
                      d="M0.0677397 2.39725C2.27674 2.73156 4.09795 1.82383 6.08389 2.30327L5.82871 2.54285C7.27394 2.71627 6.12817 1.93498 7.62901 2.26702C8.21963 2.47349 7.47487 2.57094 7.75348 2.58971C10.8525 2.52788 14.0451 2.77784 16.9508 2.22406C17.6614 2.7584 20.2611 2.2593 21.3965 2.79817C22.1956 2.60123 22.9915 2.66238 23.3014 2.29167C34.0786 2.6856 45.0997 2.29721 56.1452 2.45695C61.3264 1.5007 67.4987 2.77802 73.6365 2.50096C73.6803 2.5383 73.671 2.58031 73.6352 2.60627C76.0653 2.35785 78.5058 2.3029 80.9402 2.44175L82.9678 2.03665C97.3179 3.07441 91.4837 2.39595 106.07 2.92525C122.645 3.35457 137.156 4.24656 153.316 3.08587C153.315 3.18594 153.425 3.23979 153.009 3.2775C157.667 3.12165 161.906 3.53551 166.286 3.37142L166.284 3.4715C175.804 2.84063 197.189 3.7057 209.448 3.40426L209.462 2.25604C207.691 2.27933 205.978 2.35589 204.276 2.54848L204.314 2.3382C195.48 2.97637 171.455 1.93569 162.31 1.98056C158.514 1.85586 155.944 2.07609 152.129 2.04601L152.04 1.78694C145.606 2.70352 138.553 0.747832 131.839 1.76152L132.286 1.41334C131.24 1.92898 128.235 1.17529 128.622 2.12234L127.439 1.8253C122.875 3.01463 119.166 1.16304 113.576 1.90422L113.946 1.68689C112.514 1.89233 111.068 1.91227 109.634 1.74635C109.803 1.71127 109.724 1.64722 110.078 1.59305C109.73 1.52086 109.496 1.46569 109.355 1.41678C108.394 1.40655 107.456 1.39656 106.61 1.45077L106.798 1.25787L105.22 1.51499L105.184 1.11954C101.131 1.07638 97.3122 1.34652 93.3597 1.35185L93.5676 0.995859C89.8823 1.58875 85.7389 0.912512 81.8412 1.1344L82.1083 1.01083C72.2323 0.768721 63.1175 1.26167 53.3339 1.42616C53.4848 1.3909 53.5391 1.2861 53.699 1.24566C53.2013 1.42397 52.687 1.52649 52.1683 1.55072C52.0276 1.47021 52.3164 1.38373 52.4894 1.35396C50.4254 0.741999 46.4043 1.6579 45.1175 1.19118C44.537 1.24821 44.2774 1.48776 44.5982 1.68082C36.927 1.74664 28.7208 1.76989 20.9043 2.14497C20.5291 2.05669 20.4646 1.89799 20.5689 1.69365C13.8793 2.5759 6.8872 2.12217 0.0561323 1.89141C-0.212312 2.13087 0.743596 2.14105 0.0677397 2.39725Z"
                      fill="#821608"
                    />
                    <path
                      d="M206.901 46.0844C206.57 45.6091 207.557 45.2203 207.069 44.7926L206.811 44.8468C206.643 44.5359 207.462 44.784 207.125 44.4609C206.912 44.3335 206.8 44.4932 206.783 44.4333C206.884 43.7679 206.654 43.0816 207.277 42.459C206.716 42.305 207.277 41.748 206.716 41.5027C206.935 41.3316 206.879 41.1605 207.277 41.095C206.98 38.7794 207.518 36.4135 207.473 34.0409C208.55 32.9307 207.26 31.6018 207.625 30.2843C207.585 30.2748 207.541 30.2767 207.513 30.2843C207.805 29.7631 207.891 29.2391 207.771 28.7159L208.225 28.2815C207.283 25.197 207.939 26.4517 207.541 23.3177C207.271 19.757 206.486 16.6382 207.905 13.1706C207.799 13.1706 207.743 13.1468 207.698 13.2362C207.916 12.2362 207.524 11.3246 207.748 10.3845L207.642 10.3845C208.421 8.34179 207.743 3.74682 208.203 1.11475L209.426 1.11475C209.381 1.49497 209.28 1.86283 209.055 2.22784L209.28 2.22024C208.5 4.11564 209.336 9.27808 209.184 11.2419C209.274 12.0575 209.01 12.6088 208.999 13.4282L209.274 13.4482C208.225 14.8274 210.228 16.3473 209.072 17.7865L209.448 17.6914C208.887 17.9148 209.656 18.5621 208.651 18.4766L208.954 18.7313C207.636 19.7085 209.566 20.5098 208.713 21.7084L208.949 21.6296C208.714 21.9366 208.676 22.247 208.837 22.5554C208.876 22.5193 208.943 22.5364 209.005 22.4603C209.078 22.5354 209.134 22.5858 209.184 22.6162C209.184 22.8225 209.184 23.024 209.117 23.2056L209.325 23.1656L209.033 23.504L209.454 23.5126C209.454 24.3833 209.123 25.2027 209.072 26.0515L209.454 26.0078C208.78 26.7977 209.454 27.6893 209.173 28.5258L209.308 28.4688C209.454 30.5904 208.825 32.5466 208.539 34.6474C208.578 34.615 208.691 34.6036 208.736 34.5694C208.54 34.6758 208.425 34.786 208.393 34.8974C208.478 34.9278 208.573 34.866 208.607 34.8289C209.235 35.2738 208.214 36.135 208.696 36.4125C208.629 36.5371 208.371 36.5922 208.169 36.5228C208.012 38.1701 207.894 39.9324 207.406 41.6101C207.496 41.6909 207.664 41.7052 207.883 41.6833C206.867 43.1177 207.271 44.6205 207.44 46.0882C207.182 46.1452 207.182 45.9399 206.901 46.0844Z"
                      fill="#821608"
                    />
                    <path
                      d="M2.56154 1.12898C2.89255 1.60426 1.90513 1.99303 2.39323 2.42078L2.65129 2.3666C2.8196 2.67743 2.00049 2.42934 2.33711 2.75253C2.5503 2.8799 2.66253 2.72021 2.67937 2.78009C2.57838 3.44548 2.8084 4.13177 2.18565 4.75439C2.74669 4.90837 2.18565 5.4654 2.74669 5.71064C2.52788 5.88174 2.58399 6.05284 2.18565 6.11843C2.483 8.43397 1.94439 10.7999 1.98927 13.1725C0.91209 14.2827 2.20249 15.6116 1.83782 16.9291C1.87709 16.9386 1.92194 16.9367 1.95 16.9291C1.65786 17.4503 1.57167 17.9743 1.69194 18.4975L1.23751 18.9319C2.18004 22.0164 1.52362 20.7617 1.92195 23.8956C2.19125 27.4564 2.97671 30.5752 1.5573 34.0428C1.6639 34.0428 1.72 34.0665 1.76488 33.9772C1.54608 34.9772 1.93879 35.8888 1.71437 36.8289L1.82097 36.8289C1.04113 38.8716 1.71998 43.4666 1.25994 46.0986L0.0368907 46.0986C0.0817733 45.7184 0.182744 45.3505 0.407157 44.9855L0.182765 44.9931C0.9626 43.0977 0.126651 37.9353 0.27813 35.9715C0.188365 35.1559 0.45206 34.6046 0.463281 33.7852L0.18838 33.7652C1.23751 32.386 -0.765384 30.866 0.390343 29.4269L0.014461 29.522C0.575494 29.2986 -0.193131 28.6513 0.811118 28.7368L0.508172 28.4821C1.8266 27.5049 -0.103358 26.7036 0.749412 25.5049L0.513754 25.5838C0.748794 25.2768 0.786423 24.9664 0.625967 24.658C0.586695 24.6941 0.519378 24.677 0.457664 24.753C0.38473 24.678 0.328623 24.6276 0.27813 24.5972C0.27813 24.3909 0.278127 24.1894 0.345451 24.0078L0.137871 24.0477L0.429619 23.7093L0.00884476 23.7008C0.00884472 22.8301 0.33985 22.0107 0.390343 21.1619L0.00884465 21.2056C0.682084 20.4157 0.00884457 19.5241 0.289361 18.6876L0.154719 18.7446C0.00884992 16.623 0.637204 14.6667 0.923331 12.566C0.884058 12.5983 0.771831 12.6097 0.726949 12.644C0.922498 12.5375 1.03752 12.4274 1.0692 12.316C0.98505 12.2856 0.889671 12.3474 0.856009 12.3845C0.227653 11.9396 1.24871 11.0784 0.766225 10.8008C0.833549 10.6763 1.09163 10.6212 1.2936 10.6906C1.45069 9.04327 1.56849 7.28095 2.05659 5.60323C1.96683 5.52243 1.79853 5.50817 1.57973 5.53004C2.5952 4.09565 2.19124 2.59283 2.02293 1.12518C2.28101 1.06815 2.28102 1.27347 2.56154 1.12898Z"
                      fill="#821608"
                    />
                    <path
                      d="M2.05461 2L209.145 2.57333L207.564 44.4267L1.00072 45L2.05461 2Z"
                      fill="#821608"
                    />
                  </svg>
                </Link>
              </div>
              <div
                onClick={() => {
                  document.body.classList.toggle("nav-menu-open");
                  setMenuOpen(!menuOpen);
                }}
                className={`navbar-icon flex flex-wrap lgscreen:mr-0 items-center cursor-pointer justify-end hamburger menu-open-test ${
                  menuOpen ? "active" : ""
                }`}
              >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className="main-nav nav-container">
        <div className="mainNavimg relative mdscreen:hidden">
          <img src="../images/menu-img.jpg" className="mainNavbgImg" alt="" />
        </div>

        <div className="mainNav__wrap relative m-auto p-menu_mobile z-99 h-full">
          <div className="container-fluid h-full">
            <div className="navbarMoile w-full h-full">
              <div className="flex flex-wrap items-end justify-between min-h-full mobile-menu pb-200 lgscreen:items-start lgscreen:pb-0 lgscreen:pt-100 mdscreen:pb-0 mdscreen:items-center mdscreen:flex-col mdscreen:pt-0 mdscreen:justify-center mdscreen:inline-block">
                <div className="btn-custom mx-0 mt-60 mb-20 hidden mdscreen:block">
                  <Link to="/" className="button btn-red">
                    <span>Let’s Start Planning</span>
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M209.393 45.1014C207.183 45.4293 205.365 44.5163 203.377 44.99L203.632 45.2303C202.186 45.3995 203.335 44.6216 201.832 44.9492C201.241 45.154 201.986 45.2536 201.707 45.2716C198.608 45.2007 195.415 45.4414 192.511 44.8792C191.798 45.4115 189.201 44.9048 188.063 45.4404C187.265 45.2411 186.469 45.3 186.16 44.9284C175.382 45.291 164.362 44.8706 153.316 44.9983C148.138 44.027 141.961 45.2864 135.825 44.9915C135.781 45.0287 135.79 45.0707 135.826 45.0968C133.396 44.8413 130.956 44.7793 128.521 44.911L126.495 44.5001C112.141 45.4961 117.978 44.8346 103.39 45.3216C86.8136 45.7027 72.2994 46.5526 56.1433 45.345C56.1442 45.445 56.034 45.4986 56.4504 45.5375C51.7928 45.3681 47.5518 45.7697 43.1731 45.5929L43.1739 45.6929C33.657 45.0344 12.2689 45.8374 0.0106835 45.5003L0.000919772 44.3521C1.77153 44.3805 3.48506 44.4621 5.18629 44.6596L5.14909 44.4492C13.98 45.113 38.009 44.1421 47.1535 44.2135C50.95 44.0999 53.519 44.3276 57.3339 44.3086L57.4247 44.0498C63.8547 44.985 70.9152 43.0498 77.6249 44.083L77.1793 43.7335C78.2238 44.2522 81.2315 43.5072 80.8412 44.4532L82.0249 44.1596C86.585 45.3621 90.3004 43.5213 95.8879 44.2787L95.5187 44.0603C96.95 44.2699 98.3956 44.2941 99.8302 44.1323C99.6617 44.0967 99.7408 44.0329 99.3862 43.9777C99.7353 43.9065 99.9694 43.8521 100.111 43.8036C101.071 43.7961 102.009 43.7889 102.855 43.8455L102.668 43.6521L104.245 43.9138L104.282 43.5184C108.336 43.487 112.153 43.7683 116.106 43.7851L115.899 43.4285C119.582 44.0321 123.728 43.3679 127.625 43.6011L127.358 43.4767C137.235 43.2633 146.348 43.7827 156.131 43.9756C155.98 43.9399 155.926 43.835 155.767 43.7941C156.264 43.9738 156.778 44.0778 157.296 44.1036C157.437 44.0235 157.149 43.9362 156.976 43.9059C159.042 43.2999 163.06 44.2275 164.348 43.7645C164.928 43.8232 165.187 44.0635 164.866 44.2557C172.537 44.3438 180.743 44.3909 188.558 44.7886C188.933 44.7014 188.998 44.5429 188.895 44.3383C195.581 45.24 202.575 44.8065 209.407 44.5956C209.674 44.8359 208.718 44.8433 209.393 45.1014Z"
                        fill="#821608"
                      />
                      <path
                        d="M0.0677397 2.39725C2.27674 2.73156 4.09795 1.82383 6.08389 2.30327L5.82871 2.54285C7.27394 2.71627 6.12817 1.93498 7.62901 2.26702C8.21963 2.47349 7.47487 2.57094 7.75348 2.58971C10.8525 2.52788 14.0451 2.77784 16.9508 2.22406C17.6614 2.7584 20.2611 2.2593 21.3965 2.79817C22.1956 2.60123 22.9915 2.66238 23.3014 2.29167C34.0786 2.6856 45.0997 2.29721 56.1452 2.45695C61.3264 1.5007 67.4987 2.77802 73.6365 2.50096C73.6803 2.5383 73.671 2.58031 73.6352 2.60627C76.0653 2.35785 78.5058 2.3029 80.9402 2.44175L82.9678 2.03665C97.3179 3.07441 91.4837 2.39595 106.07 2.92525C122.645 3.35457 137.156 4.24656 153.316 3.08587C153.315 3.18594 153.425 3.23979 153.009 3.2775C157.667 3.12165 161.906 3.53551 166.286 3.37142L166.284 3.4715C175.804 2.84063 197.189 3.7057 209.448 3.40426L209.462 2.25604C207.691 2.27933 205.978 2.35589 204.276 2.54848L204.314 2.3382C195.48 2.97637 171.455 1.93569 162.31 1.98056C158.514 1.85586 155.944 2.07609 152.129 2.04601L152.04 1.78694C145.606 2.70352 138.553 0.747832 131.839 1.76152L132.286 1.41334C131.24 1.92898 128.235 1.17529 128.622 2.12234L127.439 1.8253C122.875 3.01463 119.166 1.16304 113.576 1.90422L113.946 1.68689C112.514 1.89233 111.068 1.91227 109.634 1.74635C109.803 1.71127 109.724 1.64722 110.078 1.59305C109.73 1.52086 109.496 1.46569 109.355 1.41678C108.394 1.40655 107.456 1.39656 106.61 1.45077L106.798 1.25787L105.22 1.51499L105.184 1.11954C101.131 1.07638 97.3122 1.34652 93.3597 1.35185L93.5676 0.995859C89.8823 1.58875 85.7389 0.912512 81.8412 1.1344L82.1083 1.01083C72.2323 0.768721 63.1175 1.26167 53.3339 1.42616C53.4848 1.3909 53.5391 1.2861 53.699 1.24566C53.2013 1.42397 52.687 1.52649 52.1683 1.55072C52.0276 1.47021 52.3164 1.38373 52.4894 1.35396C50.4254 0.741999 46.4043 1.6579 45.1175 1.19118C44.537 1.24821 44.2774 1.48776 44.5982 1.68082C36.927 1.74664 28.7208 1.76989 20.9043 2.14497C20.5291 2.05669 20.4646 1.89799 20.5689 1.69365C13.8793 2.5759 6.8872 2.12217 0.0561323 1.89141C-0.212312 2.13087 0.743596 2.14105 0.0677397 2.39725Z"
                        fill="#821608"
                      />
                      <path
                        d="M206.901 46.0844C206.57 45.6091 207.557 45.2203 207.069 44.7926L206.811 44.8468C206.643 44.5359 207.462 44.784 207.125 44.4609C206.912 44.3335 206.8 44.4932 206.783 44.4333C206.884 43.7679 206.654 43.0816 207.277 42.459C206.716 42.305 207.277 41.748 206.716 41.5027C206.935 41.3316 206.879 41.1605 207.277 41.095C206.98 38.7794 207.518 36.4135 207.473 34.0409C208.55 32.9307 207.26 31.6018 207.625 30.2843C207.585 30.2748 207.541 30.2767 207.513 30.2843C207.805 29.7631 207.891 29.2391 207.771 28.7159L208.225 28.2815C207.283 25.197 207.939 26.4517 207.541 23.3177C207.271 19.757 206.486 16.6382 207.905 13.1706C207.799 13.1706 207.743 13.1468 207.698 13.2362C207.916 12.2362 207.524 11.3246 207.748 10.3845L207.642 10.3845C208.421 8.34179 207.743 3.74682 208.203 1.11475L209.426 1.11475C209.381 1.49497 209.28 1.86283 209.055 2.22784L209.28 2.22024C208.5 4.11564 209.336 9.27808 209.184 11.2419C209.274 12.0575 209.01 12.6088 208.999 13.4282L209.274 13.4482C208.225 14.8274 210.228 16.3473 209.072 17.7865L209.448 17.6914C208.887 17.9148 209.656 18.5621 208.651 18.4766L208.954 18.7313C207.636 19.7085 209.566 20.5098 208.713 21.7084L208.949 21.6296C208.714 21.9366 208.676 22.247 208.837 22.5554C208.876 22.5193 208.943 22.5364 209.005 22.4603C209.078 22.5354 209.134 22.5858 209.184 22.6162C209.184 22.8225 209.184 23.024 209.117 23.2056L209.325 23.1656L209.033 23.504L209.454 23.5126C209.454 24.3833 209.123 25.2027 209.072 26.0515L209.454 26.0078C208.78 26.7977 209.454 27.6893 209.173 28.5258L209.308 28.4688C209.454 30.5904 208.825 32.5466 208.539 34.6474C208.578 34.615 208.691 34.6036 208.736 34.5694C208.54 34.6758 208.425 34.786 208.393 34.8974C208.478 34.9278 208.573 34.866 208.607 34.8289C209.235 35.2738 208.214 36.135 208.696 36.4125C208.629 36.5371 208.371 36.5922 208.169 36.5228C208.012 38.1701 207.894 39.9324 207.406 41.6101C207.496 41.6909 207.664 41.7052 207.883 41.6833C206.867 43.1177 207.271 44.6205 207.44 46.0882C207.182 46.1452 207.182 45.9399 206.901 46.0844Z"
                        fill="#821608"
                      />
                      <path
                        d="M2.56154 1.12898C2.89255 1.60426 1.90513 1.99303 2.39323 2.42078L2.65129 2.3666C2.8196 2.67743 2.00049 2.42934 2.33711 2.75253C2.5503 2.8799 2.66253 2.72021 2.67937 2.78009C2.57838 3.44548 2.8084 4.13177 2.18565 4.75439C2.74669 4.90837 2.18565 5.4654 2.74669 5.71064C2.52788 5.88174 2.58399 6.05284 2.18565 6.11843C2.483 8.43397 1.94439 10.7999 1.98927 13.1725C0.91209 14.2827 2.20249 15.6116 1.83782 16.9291C1.87709 16.9386 1.92194 16.9367 1.95 16.9291C1.65786 17.4503 1.57167 17.9743 1.69194 18.4975L1.23751 18.9319C2.18004 22.0164 1.52362 20.7617 1.92195 23.8956C2.19125 27.4564 2.97671 30.5752 1.5573 34.0428C1.6639 34.0428 1.72 34.0665 1.76488 33.9772C1.54608 34.9772 1.93879 35.8888 1.71437 36.8289L1.82097 36.8289C1.04113 38.8716 1.71998 43.4666 1.25994 46.0986L0.0368907 46.0986C0.0817733 45.7184 0.182744 45.3505 0.407157 44.9855L0.182765 44.9931C0.9626 43.0977 0.126651 37.9353 0.27813 35.9715C0.188365 35.1559 0.45206 34.6046 0.463281 33.7852L0.18838 33.7652C1.23751 32.386 -0.765384 30.866 0.390343 29.4269L0.014461 29.522C0.575494 29.2986 -0.193131 28.6513 0.811118 28.7368L0.508172 28.4821C1.8266 27.5049 -0.103358 26.7036 0.749412 25.5049L0.513754 25.5838C0.748794 25.2768 0.786423 24.9664 0.625967 24.658C0.586695 24.6941 0.519378 24.677 0.457664 24.753C0.38473 24.678 0.328623 24.6276 0.27813 24.5972C0.27813 24.3909 0.278127 24.1894 0.345451 24.0078L0.137871 24.0477L0.429619 23.7093L0.00884476 23.7008C0.00884472 22.8301 0.33985 22.0107 0.390343 21.1619L0.00884465 21.2056C0.682084 20.4157 0.00884457 19.5241 0.289361 18.6876L0.154719 18.7446C0.00884992 16.623 0.637204 14.6667 0.923331 12.566C0.884058 12.5983 0.771831 12.6097 0.726949 12.644C0.922498 12.5375 1.03752 12.4274 1.0692 12.316C0.98505 12.2856 0.889671 12.3474 0.856009 12.3845C0.227653 11.9396 1.24871 11.0784 0.766225 10.8008C0.833549 10.6763 1.09163 10.6212 1.2936 10.6906C1.45069 9.04327 1.56849 7.28095 2.05659 5.60323C1.96683 5.52243 1.79853 5.50817 1.57973 5.53004C2.5952 4.09565 2.19124 2.59283 2.02293 1.12518C2.28101 1.06815 2.28102 1.27347 2.56154 1.12898Z"
                        fill="#821608"
                      />
                      <path
                        d="M2.05461 2L209.145 2.57333L207.564 44.4267L1.00072 45L2.05461 2Z"
                        fill="#821608"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="md:w-5/12 mdscreen:w-full desktop2:w-[50%]">
                  <div className="mainNavGrid">
                    <div className="mainNav__col navMenu text-left mdscreen:text-left relative mainNav__col--left flex flex-col items-start mdscreen:items-start pr-60 mdscreen:pr-0">
                      <ul className="navMenuLeft topMenu visible list-none m-0 p-0 space-y-3 w-full">
                        <li key={1}
                          className="sideMenuhoverable w-full"
                        >
                          <Link
                            to="/destinationslisting"
                            onMouseEnter={() => {
                              setMenuOpenStatus("Destinations");
                            }}                            
                          >
                            Destinations
                          </Link>
                          <span
                            className={`pl-40 master-menu  ${
                              menuOpenStatus === "Destinations"
                                ? "menu_open_arrow"
                                : ""
                            }`}
                            onClick={() => {
                              setMenuOpenStatus((menuOpenStatus) =>
                                menuOpenStatus === "Destinations"
                                  ? ""
                                  : "Destinations"
                              );                              
                            }}
                          >
                            <i class="far fa-angle-right"></i>
                          </span>
                          {menuOpenStatus == "Destinations" && (
                            <div
                              id="destination"
                              className="p-6 mega-menu mb-16 sm:mb-0 bg-teal-700"
                            >
                              <div className="mega-menu-grid flex flex-col">
                                <ul className="space-y-2">
                                  <li>
                                    <Link to="/">Southern Africa</Link>
                                  </li>
                                  <li>
                                    <Link to="/">Central Africa</Link>
                                  </li>
                                  <li>
                                    <Link to="/">East Africa</Link>
                                  </li>
                                  <li>
                                    <Link to="/">Indian Ocean Islands</Link>
                                  </li>
                                </ul>
                                <div className="btn-custom flex flex-wrap items-center justify-center space-x-8 mt-30 lgscreen:justify-start lgscreen:mt-15 lgscreen:mb-10">
                                  <Link to="/" className="button btn-border">
                                    <span>View All Destinations</span>
                                    <img
                                      src="../images/btn-red-bg.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          )}
                        </li>
                        <li>
                          <Link to="/trip-ideas">Trip Ideas</Link>
                        </li>
                        <li>
                          <Link to="/experiences">Experiences</Link>
                        </li>
                        <li
                          key={2}
                          className="sideMenuhoverable w-full"
                          id="destination-menu"
                        >
                          <Link
                            to="/destinationslisting"
                            onMouseEnter={() => {
                              setMenuOpenStatus("Travel Styles");
                            }}                            
                          >
                            Travel Styles
                          </Link>
                          <span
                            className={`px-40 master-menu2 dasdsadaasa relative z-9  ${
                              menuOpenStatus === "Travel Styles"
                                ? "menu_open_arrow"
                                : ""
                            }`}
                            onClick={() => {
                              setMenuOpenStatus((menuOpenStatus) =>
                                menuOpenStatus === "Travel Styles"
                                  ? ""
                                  : "Travel Styles"
                              );                              
                            }}
                          >
                            <i class="far fa-angle-right"></i>
                          </span>
                          {menuOpenStatus == "Travel Styles" && (
                            <div
                              
                              className="p-6 mega-menu mb-16 sm:mb-0 bg-teal-700"
                            >
                              <div className="mega-menu-grid flex flex-col">
                                <ul className="space-y-2">
                                  <li>
                                    <Link to="/">Family Travel</Link>
                                  </li>
                                  <li>
                                    <Link to="/">Romance</Link>
                                  </li>
                                  <li>
                                    <Link to="/">impact</Link>
                                  </li>
                                  <li>
                                    <Link to="/">Luxe</Link>
                                  </li>
                                  <li>
                                    <Link to="/">Wellness</Link>
                                  </li>
                                  <li>
                                    <Link to="/">Lifestyle</Link>
                                  </li>
                                </ul>
                                <div className="btn-custom flex flex-wrap items-center justify-center space-x-8 mt-30 lgscreen:justify-start lgscreen:mt-15 lgscreen:mb-10">
                                  <Link to="/" className="button btn-border">
                                    <span>View All Destinations</span>
                                    <img
                                      src="../images/btn-red-bg.png"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          )}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="md:w-5/12 w-full justify-center">
                  <div className="flex justify-center gap-x-20 ipad:gap-x-6 lgscreen:gap-x-10 mdscreen:justify-start mdscreen:pt-50 mdscreen:flex-col mdscreen:gap-y-8 mdscreen:pl-5">
                    <div className="mainNav__col--right">
                      <h6 className="uppercase text-19 text-black-400 pb-10 mdscreen:pb-0">
                        About Us
                      </h6>
                      <ul>
                        <li>
                          <Link to="/">Why book with us</Link>
                        </li>
                        <li>
                          <Link to="/">Meet the Team</Link>
                        </li>
                        <li>
                          <Link to="/">Conservation & Community</Link>
                        </li>
                        <li>
                          <Link to="/">Natural Events</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="mainNav__col--right">
                      <h6 className="uppercase text-19 text-black-400 pb-10 mdscreen:pb-0">
                        Contact Us
                      </h6>
                      <div className="content">
                        <p>
                          <a href="tel:+27 21 461 9001">
                            T: +27 21 461 9001
                          </a>
                        </p>
                        <p>
                          <a href="mailto:info@tasafaris.com">
                            E: info@tasafaris.com
                          </a>
                        </p>
                      </div>
                      <div className="sicon">
                        <ul className="flex mt-15 space-x-5">
                          <li>
                            <Link to="/">
                              <img
                                src="../images/instagram-red.png"
                                alt="instagram"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <img
                                src="../images/facebook-red.png"
                                alt="facebook"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <img
                                src="../images/youtube-red.png"
                                alt="youtube"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <img
                                src="../images/twitter-red.png"
                                alt="twitter"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
