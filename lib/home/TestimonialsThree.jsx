import React from "react";

export default function TestimonialsThree() {
    return (
        <div>
            <div className="container mb-5 pb-5" style={{ backgroundColor: "#2eb82e" }}>
                <h2 className="text-center" style={{ borderBottom: "3px solid #ffb800", color: "white", paddingBottom: "5px", paddingTop: "25px" }}>Testimonials</h2>
                <div className="testimonials-content mb-5 mt-4">
                    <div className="d-flex justify-content-between" style={{backgroundColor: "#2eb82e"}}>
                        <div style={{ border: "1px solid #ffb800", height: "90px", width: "500px", backgroundColor: "#ffb800", borderRadius: "15px" }}>
                            <div className="d-flex">
                            <div style={{ border: "1px solid white", height: "60px", width: "60px", margin: "10px", backgroundColor: "white", borderRadius: "15px" }}></div>
                            <div>
                            <h6 className="mt-3">LOREM IPSUM</h6>
                            <p style={{fontSize: "10px" }}>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            </div>
                        </div>
                        <div style={{ border: "1px solid #ffb800", height: "90px", width: "500px", backgroundColor: "#ffb800", borderRadius: "15px" }}>
                        <div className="d-flex">
                            <div style={{ border: "1px solid white", height: "60px", width: "60px", margin: "10px", backgroundColor: "white", borderRadius: "15px" }}></div>
                            <div>
                            <h6 className="mt-3">LOREM IPSUM</h6>
                            <p style={{fontSize: "10px" }}>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}