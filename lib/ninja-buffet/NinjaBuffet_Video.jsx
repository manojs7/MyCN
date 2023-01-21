
import YouTube from "react-youtube";
import React, { useState, useEffect } from "react";

export default function NinjaBuffet_Video() {

    const [isSmall, setIsSmall] = useState(false);

    const opts = {
        height: "390",
        width: "640",
        playerVars: {
          autoplay: 0,
        },
      }

      const optsm = {
        height: "190",
        width: "340",
        playerVars: {
          autoplay: 0,
        },
      }

      useEffect(() => {
        setIsSmall(window.innerWidth <= 939);
        window.addEventListener("resize", () =>
          setIsSmall(window.innerWidth <= 939)
        );
      }, []);
    return (
        <div className="container text-center">
            { isSmall ? <div className="ninjaBoxVideoSm">
                <YouTube videoId="z_ZpvGxe5Xk" opts={optsm}/>
            </div> : ""}
            { !isSmall ?<div className="ninjaBoxVideoLg my-5">
                <YouTube videoId="z_ZpvGxe5Xk" opts={opts} />
            </div> : ""}
        </div>

        
    );
    
}
