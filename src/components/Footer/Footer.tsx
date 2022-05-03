import React from 'react'

const Footer = () => {
  return (
    <div>{/* < !--Start Footer Area-- > */}
    <div className="copy-right-one ptb--20 bg-color--1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="copyright-left">
              <span>©2022 Nuron, Inc. All rights reserved.</span>
              <ul className="privacy">
                <li><a href="terms-condition.html">Terms</a></li>
                <li><a href="privacy-policy.html">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="copyright-right">
              <ul className="social-copyright">
                <li><a href="#"><i data-feather="facebook"></i></a></li>
                <li><a href="#"><i data-feather="twitter"></i></a></li>
                <li><a href="#"><i data-feather="instagram"></i></a></li>
                <li><a href="#"><i data-feather="linkedin"></i></a></li>
                <li><a href="#"><i data-feather="mail"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!--End Footer Area-- > */}
    <div className="mouse-cursor cursor-outer"></div>
    <div className="mouse-cursor cursor-inner"></div>
    {/* <!--Start Top To Bottom Area-- > */}
    <div className="rn-progress-parent">
      <svg className="rn-back-circle svg-inner" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div></div>
  )
}

export default Footer