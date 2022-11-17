import React from "react";

const Specials = () => {
  return (
    <section className="specials">
      <div className="container">
        <div className="section-title">
          <h2>What Makes NinjaBox Special</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-lg-0 mb-4">
            <div className="specials-item">
              <div className="item-image">
                <img src="../ninja-box/specials-1.png" alt="" className="img-fluid hoverZoom" />
              </div>
              <div className="item-title">Portable Bulk Food packaging</div>
              <ul>
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
              <ul>
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
              <ul>
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
              <ul>
                <li>Convenient Ordering</li>
                <li>Professional Support</li>
                <li>On Time Delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specials;
