import React from "react";

export default function WhatMakeUsSpecial() {
  return (
    <div className="What-Make-Us-Special">
      <div className="container">
        <h3 className="What-Make-Us-Special-card-title">
          What Makes Us Special?
        </h3>
        <div className="What-Make-Us-Special-card-container ">
          {/* card 1 */}
          <div className="What-Make-Us-Special-container-card ">
            <div className="">
              <div className="What-Make-Us-Special-container-card-font">
                <div className="What-Make-Us-Special-icon">
                  <img src="wmus-iocn1.png" alt="" />
                </div>
                <p>Easy Online Ordering</p>
              </div>
            </div>
            <div className="What-Make-Us-Special-hover">
              <div className="What-Make-Us-Special-container-card-back">
                <p>
                  Catering Experts Available Online For You, Call / Whatsapp Us,
                  We Would Be Happy To Help You!
                </p>

                <div>
                  <img src="wmus1.png" alt="" />
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
                <p>Select menu and Get price</p>
              </div>
            </div>
            <div className="What-Make-Us-Special-container-card-back">
              <p>
                Select Your Own Menu and Get Instant Price or Live Chat to Get
                Fixed Menu Packages
              </p>

              <div>
                <img src="wmus2.png" alt="" />
              </div>
            </div>
          </div>

          {/* card 3 */}

          <div className="What-Make-Us-Special-container-card ">
            <div className="What-Make-Us-Special-hover">
              <div className="What-Make-Us-Special-container-card-font">
                <div className="What-Make-Us-Special-icon">
                  <img src="wmus-iocn3.png" alt="" />
                </div>
                <p>Multiple Quotation Instantly</p>
              </div>
            </div>
            <div className="What-Make-Us-Special-container-card-back">
              <p>
                Compare Various Menu And Prices Without Speaking to Anyone. Your
                Search Ends Here!
              </p>

              <div className="What-Make-Us-Special-container-card-back-img">
                <img src="wmus3.png" alt="" />
              </div>
            </div>
          </div>

          {/* card 4 */}

          <div className="What-Make-Us-Special-container-card ">
            <div className="What-Make-Us-Special-hover">
              <div className="What-Make-Us-Special-container-card-font">
                <div className="What-Make-Us-Special-icon">
                  <img src="wmus-iocn4.png" alt="" />
                </div>
                <p>Guaranteed Best Price</p>
              </div>
            </div>
            <div className="What-Make-Us-Special-container-card-back">
              <p>
                Pre-Negotiated Prices For Bulk Order, Premium Restaurant Quality
                Food at 50% Discounted Rates!
              </p>

              <div>
                <img src="wmus4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
