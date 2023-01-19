
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import React, { useEffect, useState } from "react";

const Specials = () => {

  const [isSmall, setIsSmall] = useState(false);

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
    setIsSmall(window.innerWidth <= 939);
    window.addEventListener("resize", () =>
      setIsSmall(window.innerWidth <= 939)
    );
    // setIsLoading(false);
  }, []);

  return (
    <div>
      {!isSmall && (<section className="ninjabox-Special">
        <div className="">
          <div className="special-title">
            <h2>What Makes Snack<span>Box</span> Special?</h2>
          </div>
          <div className="ninjaBox-Specials-LG mt-5">
            <div className="d-flex justify-content-evenly">
              {/* card 1 */}
              <div className="What-Make-Us-Special-container-card ">
                <div className="">
                  <div className="What-Make-Us-Special-container-card-font">
                    <div className="what-makes-ninjabox-special-logo">
                      <img src="HomeCard1.png" alt="" style={{ width: "33px" }} />
                    </div>
                    <p id="cardHeadTitle">Portable Bulk<br/>Food Packaging</p>
                  </div>
                </div>
                <div className="">
                  <div className="What-Make-Us-Special-container-card-back reveal">
                    <p id="wmusDescription" className="mt-2 p-2 w-100">
                      ✅ Trendy Bulk Packaging <br />
                      ✅ Premium BioFriendly Disposable<br />
                      ✅ No Utensile - Direct To Table
                    </p>
                  </div>
                </div>
              </div>

              {/* card 2*/}
              <div className="What-Make-Us-Special-container-card ">
                <div className="What-Make-Us-Special-hover">
                  <div className="What-Make-Us-Special-container-card-font">
                    <div className="what-makes-ninjabox-special-logo">
                      <img src="HomeCard2.png" alt="" style={{ width: "45px" }} />
                    </div>
                    <p id="cardHeadTitle">Complete Party<br/>Solution</p>
                  </div>
                </div>
                <div className="What-Make-Us-Special-hover">
                  <div className="What-Make-Us-Special-container-card-back reveal">
                    <p id="wmusDescription" className="mt-2 p-2 w-100">
                      ✅ Large Cuisine Variety <br />
                      ✅ Custom Choice Menu<br />
                      ✅ Great Value for Money
                    </p>
                  </div>
                </div>
              </div>

              {/* card 3 */}

              <div className="What-Make-Us-Special-container-card ">
                <div className="What-Make-Us-Special-hover">
                  <div className="What-Make-Us-Special-container-card-font">
                    <div className="what-makes-ninjabox-special-logo">
                      <img src="HomeCard3.png" alt="" style={{ width: "64px" }} />
                    </div>
                    <p id="cardHeadTitle">Prepared with<br/>care and Hygiene</p>
                  </div>
                </div>
                <div className="What-Make-Us-Special-hover">
                  <div className="What-Make-Us-Special-container-card-back reveal">
                    <p id="wmusDescription" className="mt-2 p-2 w-100">
                      ✅ Strict NinjaKitchen Protocols <br />
                      ✅ Highest Safety Standards<br />
                      ✅ Trained Chef & Delivery Ninja
                    </p>
                  </div>
                </div>
              </div>

              {/* card 4 */}

              <div className="What-Make-Us-Special-container-card ">
                <div className="What-Make-Us-Special-hover">
                  <div className="What-Make-Us-Special-container-card-font">
                    <div className="what-makes-ninjabox-special-logo">
                      <img src="HomeCard4.png" alt="" style={{ width: "35px" }} />
                    </div>
                    <p id="cardHeadTitle">Hassle Free<br/>Solution</p>
                  </div>
                </div>
                <div className="What-Make-Us-Special-hover">
                  <div className="What-Make-Us-Special-container-card-back reveal">
                    <p id="wmusDescription" className="mt-2 p-2 w-100">
                      ✅ Convenient Ordering <br />
                      ✅ Professional Support<br />
                      ✅ On Time Delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row special-scroller">
          <div className="col-lg-3 col-md-6 mb-lg-0 mb-4">
            <div className="specials-item">
              <div className="item-image">
                <img src="../ninja-box/specials-1.png" alt="" className="img-fluid hoverZoom" />
              </div>
              <div className="item-title">Portable Bulk Food packaging</div>
              <ul className="mx-auto">
                <li>Trendy Bulk Packaging</li>
                <li>Premium BioFriendly Disposable</li>
                <li>No Utensils &minus; Direct To Table</li> 
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-lg-0 mb-4">
            <div className="specials-item">
              <div className="item-image">
                <img src="../ninja-box/specials-2.png" alt="" className="img-fluid hoverZoom" />
              </div>
              <div className="item-title">Prepared with care and Hygiene</div>
              <ul className="mx-auto">
                <li>Strict NinjaKitchen Protocols</li>
                <li>Highest Safety Standards</li>
                <li>Trained Chef &amp; Delivery Ninja</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-lg-0 mb-4">
            <div className="specials-item">
              <div className="item-image">
                <img src="../ninja-box/specials-2.png" alt="" className="img-fluid hoverZoom" />
              </div>
              <div className="item-title">Complete Party Solution</div>
              <ul className="mx-auto">
                <li>Large Cuisine Variety</li>
                <li>Custom Choice Menu</li>
                <li>Great Value for Money</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-lg-0 mb-4">
            <div className="specials-item">
              <div className="item-image">
                <img src="../ninja-box/specials-4.png" alt="" className="img-fluid hoverZoom" />
              </div>
              <div className="item-title">Hassle Free Solution</div>
              <ul className="mx-auto">
                <li>Convenient Ordering</li>
                <li>Professional Support</li>
                <li>On Time Delivery</li>
              </ul>
            </div>
          </div>
        </div> */}
        </div>
      </section>)}
      {isSmall && (<div>
        <div className="smd-section-title text-center">
          <h2 style={{fontFamily: "'Montserrat', sans-serif"}}>What Makes<br />Snack<span>Box</span> Special?</h2>
        </div>
        {/* <Carousel >
        <div className="specials-item me-2 pt-5">
          <div className="item-image">
            <img src="../ninja-box/specials-1.png" alt="" style={{width: "290px", height: "230px"}} />
          </div>
          <div className="item-title">Portable Bulk Food packaging</div>
          <ul className="pb-4">
            <li>Trendy Bulk Packaging</li>
            <li>Premium BioFriendly Disposable</li>
            <li>No Utensils &minus; Direct To Table</li>
          </ul>
        </div>
        <div className="specials-item me-2 pt-5">
          <div className="item-image">
            <img src="../ninja-box/specials-2.png" alt="" style={{width: "200px", height: "230px"}} />
          </div>
          <div className="item-title">Prepared with care and Hygiene</div>
          <ul className="pb-4">
            <li>Strict NinjaKitchen Protocols</li>
            <li>Highest Safety Standards</li>
            <li>Trained Chef &amp; Delivery Ninja</li>
          </ul>
        </div>
        <div className="specials-item me-2 pt-5">
          <div className="item-image">
            <img src="../ninja-box/specials-2.png" alt="" style={{width: "200px", height: "230px"}}/>
          </div>
          <div className="item-title">Complete Party Solution</div>
          <ul className="pb-4">
            <li>Large Cuisine Variety</li>
            <li>Custom Choice Menu</li>
            <li>Great Value for Money</li>
          </ul>
        </div>
        <div className="specials-item pt-5">
          <div className="item-image">
            <img src="../ninja-box/specials-4.png" alt="" style={{width: "290px", height: "230px"}}/>
          </div>
          <div className="item-title">Hassle Free Solution</div>
          <ul className="pb-4">
            <li>Convenient Ordering</li>
            <li>Professional Support</li>
            <li>On Time Delivery</li>
          </ul>
        </div>
      </Carousel> */}
        <div className="What-Make-Us-Special-card-container">
          {/* card 1 */}
          <div className="What-Make-Us-Special-container-card ">
            <div className="">
              <div className="What-Make-Us-Special-container-card-font">
                <div className="what-makes-ninjabox-special-logo">
                  <img src="HomeCard1.png" alt="" style={{ width: "23px" }} />
                </div>
                <p>Portable Bulk Food Packaging</p>
              </div>
            </div>
            <div className="">
              <div className="What-Make-Us-Special-container-card-back reveal">
                <p className="mt-2 p-2 w-100" style={{ fontFamily: "'Montserrat', sans-serif", fontStyle: "italic", fontSize: "7.13px", fontWeight: "700", backgroundColor: "#F1D07C", borderRadius: "4.34368px", margin: "3px", marginBottom: "15px", fontSize: "7px", lineHeight: "12px" }}>
                  ✅ Trendy Bulk Packaging <br />
                  ✅ BioFriendly Disposable<br />
                  ✅ No Utensile - Direct To Tablestyle
                </p>
              </div>
            </div>
          </div>

          {/* card 2*/}
          <div className="What-Make-Us-Special-container-card ">
            <div className="What-Make-Us-Special-hover">
              <div className="What-Make-Us-Special-container-card-font">
                <div className="What-Make-Us-Special-icon">
                  <img src="HomeCard2.png" alt="" style={{ width: "35px" }} />
                </div>
                <p>Complete Party Solution</p>
              </div>
            </div>
            <div className="What-Make-Us-Special-hover">
              <div className="What-Make-Us-Special-container-card-back reveal">
                <p className="mt-2 p-2 w-100" style={{ fontFamily: "'Montserrat', sans-serif", fontStyle: "italic", fontSize: "7.13px", fontWeight: "700", backgroundColor: "#F1D07C", borderRadius: "4.34368px", margin: "3px", marginBottom: "15px", fontSize: "7.13px", lineHeight: "12px" }}>
                  ✅ Large Cuisine Variety <br />
                  ✅ Custom Choice Menu<br />
                  ✅ Great Value for Money
                </p>
              </div>
            </div>
          </div>

          {/* card 3 */}

          <div className="What-Make-Us-Special-container-card ">
            <div className="What-Make-Us-Special-hover">
              <div className="What-Make-Us-Special-container-card-font">
                <div className="What-Make-Us-Special-icon">
                  <img src="HomeCard3.png" alt="" style={{ width: "44px" }} />
                </div>
                <p>Prepared with care and Hygiene</p>
              </div>
            </div>
            <div className="What-Make-Us-Special-hover">
              <div className="What-Make-Us-Special-container-card-back reveal">
                <p className="mt-2 p-2 w-100" style={{ fontFamily: "'Montserrat', sans-serif", fontStyle: "italic", fontSize: "7.13px", fontWeight: "700", backgroundColor: "#F1D07C", borderRadius: "4.34368px", margin: "3px", marginBottom: "15px", fontSize: "7.13px", lineHeight: "12px" }}>
                  ✅ Strict NinjaKitchen Protocols <br />
                  ✅ Highest Safety Standards<br />
                  ✅ Trained Chef & Delivery Ninja
                </p>
              </div>
            </div>
          </div>

          {/* card 4 */}

          <div className="What-Make-Us-Special-container-card ">
            <div className="What-Make-Us-Special-hover">
              <div className="What-Make-Us-Special-container-card-font">
                <div className="What-Make-Us-Special-icon">
                  <img src="HomeCard4.png" alt="" style={{ width: "28px" }} />
                </div>
                <p>Hassle Free<br/>Solution</p>
              </div>
            </div>
            <div className="What-Make-Us-Special-hover">
              <div className="What-Make-Us-Special-container-card-back reveal">
                <p className="mt-2 p-2 w-100" style={{ fontFamily: "'Montserrat', sans-serif", fontStyle: "italic", fontSize: "7.13px", fontWeight: "700", backgroundColor: "#F1D07C", borderRadius: "4.34368px", margin: "3px", marginBottom: "15px", fontSize: "7.13px", lineHeight: "12px" }}>
                  ✅ Convenient Ordering <br />
                  ✅ Professional Support<br />
                  ✅ On Time Delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>)}
    </div>
  );
};

export default Specials;
