import YouTube from "react-youtube";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function NinjaBox_Video() {

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
                <YouTube videoId="IVKx2SDeuSM" opts={optsm}/>
            </div> : ""}
            { !isSmall ?<div className="ninjaBoxVideoLg my-5">
                <YouTube videoId="IVKx2SDeuSM" opts={opts}/>
            </div> : ""}
        </div>
    );
}

// const NinjaBox_Video = ({ embedId }) => (
//   <div className="video-responsive">
//     <iframe
//       width="853"
//       height="480"
//       src={`https://www.youtube.com/embed/${embedId}`}
//       frameBorder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//       allowFullScreen
//       title="Embedded youtube"
//     />
//   </div>
// );

// NinjaBox_Video.propTypes = {
//   embedId: PropTypes.string.isRequired
// };

// export default NinjaBox_Video;
