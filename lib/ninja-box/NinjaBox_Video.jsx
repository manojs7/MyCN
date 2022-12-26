
import YouTube from "react-youtube";
import React, { useState, useEffect } from "react";

export default function NinjaBox_Video() {

    const [isSmall, setIsSmall] = useState(false);

    const opts = {
        height: "390",
        width: "640",
        playerVars: {
          autoplay: 1,
        },
      }

      const optsm = {
        height: "190",
        width: "340",
        playerVars: {
          autoplay: 1,
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
                <YouTube videoId="0blepk5hx5I" opts={optsm}/>
            </div> : ""}
            { !isSmall ?<div className="ninjaBoxVideoLg my-5">
                <YouTube videoId="0blepk5hx5I" opts={opts} />
            </div> : ""}
        </div>

        
    );
    
}
