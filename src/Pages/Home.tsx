import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Modal from '../components/Modal/Modal'

const Home = () => {
  return (

    <div>
      <Header />

      {/* <!-- start banner area --> */}
      <div className="banner-area banner_xii  bg_image--24 bg_image with-down-shadow">
        <div className="container">
          <div className="row g-5 d-flex align-items-center flex-wrap">
            {/* <!-- bannerleft --> */}
            <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12">
              <div className="left-thumbnail-image tilt">
                <img src="assets/images/banner/banner-05.jpg" alt="" />
              </div>
            </div>
            {/* <!-- banner left end --> */}

            {/* <!-- banner right --> */}
            <div className="col-xxl-5 col-xl-6 col-lg-12 col-md-12">
              <h1 className="title mb--30">Ocean Hero Sell For All NFT's Artist.</h1>
              <div className="place-bet-area into-banner mt_md--30 mt_sm--30">
                <div className="rn-bet-create">
                  <div className="bid-list winning-bid">
                    <h6 className="title">Winning bit</h6>
                    <div className="top-seller-inner-one">
                      <div className="top-seller-wrapper">
                        <div className="thumbnail">
                          <a href="author.html"><img src="assets/images/client/client-7.png" alt="Nft_Profile" /></a>
                        </div>
                        <div className="top-seller-content">
                          <span className="heighest-bid">Heighest bid <a href="author.html">Atif
                            aslam</a></span>
                          <span className="count-number">
                            0.115wETH
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bid-list left-bid">
                    <h6 className="title">Auction has ended</h6>
                    <div className="countdown mt--15" data-date="2025-12-09">
                      <div className="countdown-container days">
                        <span className="countdown-value days-bottom">1445</span>
                        <span className="countdown-heading days-top">Day</span>
                      </div>
                      <div className="countdown-container hours"><span
                        className="countdown-value hours-bottom">00</span><span
                          className="countdown-heading hours-top">Hr's</span></div>
                      <div className="countdown-container minutes"><span
                        className="countdown-value minutes-bottom">34</span><span
                          className="countdown-heading minutes-top">Min's</span></div>
                      <div className="countdown-container seconds"><span
                        className="countdown-value seconds-bottom">56</span><span
                          className="countdown-heading seconds-top">Sec</span></div>
                    </div>
                  </div>
                </div>
                <button type="button" className="btn btn-primary mt--30" data-bs-toggle="modal" data-bs-target="#placebidModal">Place a Bid</button>
              </div>
              <div className="property-wrapper-flex d-flex">
                <div className="rn-pd-sm-property-wrapper into-banner">
                  <h6 className="pd-property-title">
                    Catagory
                  </h6>
                  <div className="catagory-wrapper">
                    {/* <!-- single property --> */}
                    <div className="pd-property-inner">
                      <span className="color-body type">ZARY</span>
                      <span className="color-white value">APP</span>
                    </div>
                    {/* <!-- single property End --> */}
                    {/* <!-- single property --> */}
                    <div className="pd-property-inner">
                      <span className="color-body type">SOMALIAN</span>
                      <span className="color-white value">TRIBUTE</span>
                    </div>
                    {/* <!-- single property End --> */}
                    {/* <!-- single property --> */}
                    <div className="pd-property-inner">
                      <span className="color-body type">TUNA</span>
                      <span className="color-white value">PIPE</span>
                    </div>
                    {/* <!-- single property End --> */}
                  </div>
                </div>
                <div className="rn-pd-sm-property-wrapper into-banner ml--30">
                  <h6 className="pd-property-title">
                    Property
                  </h6>
                  <div className="property-wrapper">
                    {/* <!-- single property --> */}
                    <div className="pd-property-inner">
                      <span className="color-body type">HYPE TYPE</span>
                      <span className="color-white value">CALM AF</span>
                    </div>
                    {/* <!-- single property End --> */}
                    {/* <!-- single property --> */}
                    <div className="pd-property-inner">
                      <span className="color-body type">BASTARDNESS</span>
                      <span className="color-white value">C00LIO BASTARD</span>
                    </div>
                    {/* <!-- single property End --> */}
                    {/* <!-- single property End --> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- banner right end --> */}
          </div>
        </div>
      </div>
      {/* <!-- End banner area --> */}



      {/* <!-- Explore Style Carousel --> */}
      <div className="rn-live-bidding-area rn-section-gapTop">
        <div className="container">
          <div className="row mb--50">
            <div className="col-lg-12">
              <div className="section-title">
                <h3 className="title mb--0 live-bidding-title" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">Live Bidding</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              {/* <div className="banner-one-slick slick-activation-03 slick-arrow-style-one rn-slick-dot-style slick-gutter-15"> */}
              {/* <!-- start single product --> */}
              <div className="single-slide-product">
                <div className="product-style-one">
                  <div className="card-thumbnail">
                    <a href="product-details.html"><img src="assets/images/portfolio/portfolio-07.jpg" alt="NFT_portfolio" /></a>
                    <div className="countdown" data-date="2022-11-09">
                      <div className="countdown-container days">
                        <span className="countdown-value">87</span>
                        <span className="countdown-heading">D's</span>
                      </div>
                      <div className="countdown-container hours">
                        <span className="countdown-value">23</span>
                        <span className="countdown-heading">H's</span>
                      </div>
                      <div className="countdown-container minutes">
                        <span className="countdown-value">38</span>
                        <span className="countdown-heading">Min's</span>
                      </div>
                      <div className="countdown-container seconds">
                        <span className="countdown-value">27</span>
                        <span className="countdown-heading">Sec</span>
                      </div>
                    </div>
                  </div>
                  <div className="product-share-wrapper">
                    <div className="profile-share">
                      <a href="author.html" className="avatar" data-tooltip="Mark JOrdan"><img src="assets/images/client/client-2.png" alt="Nft_Profile" /></a>
                      <a href="author.html" className="avatar" data-tooltip="Mark"><img src="assets/images/client/client-3.png" alt="Nft_Profile" /></a>
                      <a href="author.html" className="avatar" data-tooltip="Jordan"><img src="assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                      <a className="more-author-text" href="#">20+ Place Bit.</a>
                    </div>
                    <div className="share-btn share-btn-activation dropdown">
                      <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt">
                          <path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                        </svg>
                      </button>

                      <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                          Share
                        </button>
                        <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                          Report
                        </button>
                      </div>

                    </div>

                  </div>
                  <a href="product-details.html"><span className="product-name">Preatent</span></a>
                  <span className="latest-bid">Highest bid 1/20</span>
                  <div className="bid-react-area">
                    <div className="last-bid">0.244wETH</div>
                    <div className="react-area">
                      <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                        <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth="2"></path>
                      </svg>
                      <span className="number">322</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product --> */}
            </div>
            <div className="col-lg-4">

              {/* <!-- start single product --> */}
              <div className="single-slide-product">
                <div className="product-style-one">
                  <div className="card-thumbnail">
                    <a href="product-details.html"><img src="assets/images/portfolio/portfolio-10.jpg" alt="NFT_portfolio" /></a>
                    <div className="countdown" data-date="2022-10-09">
                      <div className="countdown-container days">
                        <span className="countdown-value">87</span>
                        <span className="countdown-heading">D's</span>
                      </div>
                      <div className="countdown-container hours">
                        <span className="countdown-value">23</span>
                        <span className="countdown-heading">H's</span>
                      </div>
                      <div className="countdown-container minutes">
                        <span className="countdown-value">38</span>
                        <span className="countdown-heading">Min's</span>
                      </div>
                      <div className="countdown-container seconds">
                        <span className="countdown-value">27</span>
                        <span className="countdown-heading">Sec</span>
                      </div>
                    </div>
                  </div>
                  <div className="product-share-wrapper">
                    <div className="profile-share">
                      <a href="author.html" className="avatar" data-tooltip="Farik Shaikh"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                      <a href="author.html" className="avatar" data-tooltip="Shaikh"><img src="assets/images/client/client-6.png" alt="Nft_Profile" /></a>
                      <a href="author.html" className="avatar" data-tooltip="Farik"><img src="assets/images/client/client-8.png" alt="Nft_Profile" /></a>
                      <a className="more-author-text" href="#">15+ Place Bit.</a>
                    </div>

                    <div className="share-btn share-btn-activation dropdown">
                      <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt">
                          <path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                        </svg>
                      </button>

                      <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                          Share
                        </button>
                        <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                          Report
                        </button>
                      </div>

                    </div>

                  </div>
                  <a href="product-details.html"><span className="product-name">#21 The Wonder</span></a>
                  <span className="latest-bid">Highest bid 1/20</span>
                  <div className="bid-react-area">
                    <div className="last-bid">0.244wETH</div>
                    <div className="react-area">
                      <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                        <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth="2"></path>
                      </svg>
                      <span className="number">322</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product --> */}
            </div>
            <div className="col-lg-4">

              {/* <!-- start single product --> */}
              <div className="single-slide-product">
                <div className="product-style-one">
                  <div className="card-thumbnail">
                    <a href="product-details.html"><img src="assets/images/portfolio/portfolio-03.jpg" alt="NFT_portfolio" /></a>
                    <div className="countdown" data-date="2023-12-09">
                      <div className="countdown-container days">
                        <span className="countdown-value">87</span>
                        <span className="countdown-heading">D's</span>
                      </div>
                      <div className="countdown-container hours">
                        <span className="countdown-value">23</span>
                        <span className="countdown-heading">H's</span>
                      </div>
                      <div className="countdown-container minutes">
                        <span className="countdown-value">38</span>
                        <span className="countdown-heading">Min's</span>
                      </div>
                      <div className="countdown-container seconds">
                        <span className="countdown-value">27</span>
                        <span className="countdown-heading">Sec</span>
                      </div>
                    </div>
                  </div>
                  <div className="product-share-wrapper">
                    <div className="profile-share">
                      <a href="author.html" className="avatar" data-tooltip="Mona Lisa"><img src="assets/images/client/client-8.png" alt="Nft_Profile" /></a>
                      <a href="author.html" className="avatar" data-tooltip="Lisa"><img src="assets/images/client/client-4.png" alt="Nft_Profile" /></a>
                      <a href="author.html" className="avatar" data-tooltip="Mona"><img src="assets/images/client/client-9.png" alt="Nft_Profile" /></a>
                      <a className="more-author-text" href="#">12+ Place Bit.</a>
                    </div>
                    <div className="share-btn share-btn-activation dropdown">
                      <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt">
                          <path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                        </svg>
                      </button>

                      <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                          Share
                        </button>
                        <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                          Report
                        </button>
                      </div>

                    </div>
                  </div>
                  <a href="product-details.html"><span className="product-name">OrBid6</span></a>
                  <span className="latest-bid">Highest bid 2/31</span>
                  <div className="bid-react-area">
                    <div className="last-bid">0.2128wETH</div>
                    <div className="react-area">
                      <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                        <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth="2"></path>
                      </svg>
                      <span className="number">12</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product --> */}
            </div>
            <div className="col-lg-4">

              {/* <!-- start single product --> */}
              <div className="single-slide-product">
                <div className="product-style-one">
                  <div className="card-thumbnail">
                    <a href="product-details.html"><img src="assets/images/portfolio/portfolio-04.jpg" alt="NFT_portfolio" /></a>
                    <div className="countdown" data-date="2024-10-08">
                      <div className="countdown-container days">
                        <span className="countdown-value">87</span>
                        <span className="countdown-heading">D's</span>
                      </div>
                      <div className="countdown-container hours">
                        <span className="countdown-value">23</span>
                        <span className="countdown-heading">H's</span>
                      </div>
                      <div className="countdown-container minutes">
                        <span className="countdown-value">38</span>
                        <span className="countdown-heading">Min's</span>
                      </div>
                      <div className="countdown-container seconds">
                        <span className="countdown-value">27</span>
                        <span className="countdown-heading">Sec</span>
                      </div>
                    </div>
                  </div>
                  <div className="product-share-wrapper">
                    <div className="profile-share">
                      <a href="author.html" className="avatar" data-tooltip="Falak Sabbir"><img src="assets/images/client/client-2.png" alt="Nft_Profile" /></a>
                      <a href="author.html" className="avatar" data-tooltip="Sabbir"><img src="assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                      <a href="author.html" className="avatar" data-tooltip="Falak"><img src="assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                      <a className="more-author-text" href="#">16+ Place Bit.</a>
                    </div>
                    <div className="share-btn share-btn-activation dropdown">
                      <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt">
                          <path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                        </svg>
                      </button>

                      <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                          Share
                        </button>
                        <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                          Report
                        </button>
                      </div>

                    </div>
                  </div>
                  <a href="product-details.html"><span className="product-name">Morgan11</span></a>
                  <span className="latest-bid">Highest bid 3/16</span>
                  <div className="bid-react-area">
                    <div className="last-bid">0.265wETH</div>
                    <div className="react-area">
                      <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                        <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" strokeWidth="2"></path>
                      </svg>
                      <span className="number">20</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product --> */}
            </div>

            {/* </div> */}
          </div>
        </div>
      </div>
      {/* <!-- Explore Style Carousel End--> */}
      <Modal />
      <Footer />

    </div>

  )
}

export default Home