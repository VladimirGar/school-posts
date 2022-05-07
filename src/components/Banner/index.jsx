import React from "react";
import Banner from "../Banner";

const Banner = () => {
    const st = {
        // padding: size ? "54px 84px" : "54px 42px"
        backgroundColor: "forestgreen"
    }
    return (
        <div style={st}>
            <Banner/>
        </div>
    )
}

export default Banner;