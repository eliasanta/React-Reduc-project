import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

function LoadingLottie() {
    const container = useRef(null);

    useEffect(() => {
        const animation = lottie.loadAnimation({
            container: container.current,
            render: "svg",
            loop: true,
            autoplay: true,
            animationData: require("./animation_lnrnttc3.json"),
        });

        // Pulisci l'animazione quando il componente viene smontato
        return () => {
            animation.destroy();
        };
    }, []);
    return (
        <div>
            <div
                style={{ maxWidth: "300px", margin: "0 auto" }}
                className="container"
                ref={container}
            ></div>
        </div>
    );
}

export default LoadingLottie;
