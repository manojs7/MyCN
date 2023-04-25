import React, { useEffect } from "react";

export default function WhatMakeUsSpecial() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", reveal);
  }, []);
  return (
    <div className="What-Make-Us-Special">
      <div className="container">
        <h3 className="What-Make-Us-Special-card-title">
          What Makes Us Special?
        </h3>
        <div className="What-Make-Us-Special-card-container">
          {/* card 1 */}
          <div className="What-Make-Us-Special-container-card">
            <div className="">
              <div className="What-Make-Us-Special-container-card-font">
                <div className="What-Make-Us-Special-icon">
                  <img src="wmus-iocn1.png" alt="" />
                </div>
                <p>Easy Online<br/>Ordering</p>
              </div>
            </div>
            <div className="What-Make-Us-Special-hover">
              <div className="What-Make-Us-Special-container-card-back reveal">
                <p style={{ fontFamily: "'Montserrat', sans-seraf", fontWeight: "600", fontSize: "8.20308px", marginLeft: "16px", paddingBottom: "4px"}}>
                  Catering Experts Available Online For You, <span>Call / Whatsapp</span> Us,
                  We Would Be Happy To Help You!
                </p>

                <div>
                  <img style={{width: "30.47px", height: "55.68px", marginRight: "16px", marginTop: "6px"}} src="/specials/HomeCard1.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* card 2*/}
          <div className="What-Make-Us-Special-container-card ">
            <div className="What-Make-Us-Special-hover">
              <div className="What-Make-Us-Special-container-card-font">
                <div className="What-Make-Us-Special-icon">
                  <img src="wmus-iocn2.png" alt="" />
                </div>
                <p>Select menu and<br/>Get price</p>
              </div>
            </div>
            <div className="What-Make-Us-Special-container-card-back reveal">
              <p style={{fontWeight: "600", fontSize: "8.20308px", marginLeft: "16px"}}>
                Select Your Own Menu and Get <span>Instant Price</span> or <span>Live Chat</span> to Get
                Fixed Menu Packages
              </p>
              <div>
                <img style={{width: "43.43px", height: "55.08px", marginRight: "16px", marginTop: "6px"}} src="/specials/HomeCard2.png" alt="" />
              </div>
            </div>
          </div>

          {/* card 3 */}

          <div className="What-Make-Us-Special-container-card mt-3">
            <div className="What-Make-Us-Special-hover">
              <div className="What-Make-Us-Special-container-card-font">
                <div className="What-Make-Us-Special-icon">
                  <img src="wmus-iocn3.png" alt="" />
                </div>
                <p>Multiple Quotation Instantly</p>
              </div>
            </div>
            <div className="What-Make-Us-Special-container-card-back reveal">
              <p style={{fontWeight: "600", fontSize: "8.20308px", marginLeft: "16px"}}>
                <span>Compare</span> Various Menu And <span>Prices</span> Without Speaking to Anyone. Your
                <span>Search Ends Here!</span>
              </p>

              <div className="What-Make-Us-Special-container-card-back-img">
                <img style={{width: "55.01px", height: "52.16px", marginRight: "0px", marginTop: "6px"}} src="/specials/HomeCard3.png" alt="" />
              </div>
            </div>
          </div>

          {/* card 4 */}

          <div className="What-Make-Us-Special-container-card mt-3">
            <div className="What-Make-Us-Special-hover">
              <div className="What-Make-Us-Special-container-card-font">
                <div className="What-Make-Us-Special-icon">
                  <img src="wmus-iocn4.png" alt="" />
                </div>
                <p>Guaranteed Best Price</p>
              </div>
            </div>
            <div className="What-Make-Us-Special-container-card-back reveal">
              <p style={{fontWeight: "600", fontSize: "8.20308px", marginLeft: "16px"}}>
                Pre-Negotiated Prices For <span>Bulk Order</span>, Premium Restaurant Quality
                Food at <span>50% Discounted Rates!</span>
              </p>

              <div>
                <img style={{width: "36.36px", height: "63.42px", marginRight: "16px", marginTop: "6px"}} src="/specials/HomeCard4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
