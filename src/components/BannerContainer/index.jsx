import React from "react";

const BannerContainer = ({size}) => {
    const st = {
        // padding: size ? "54px 84px" : "54px 42px"
        display: "grid",
        gridTemplateColums: `repeat(${size}, 1fr)`,
        gap: "16px"
    }
    return (
        <div style={st}></div>
    )
}

export default BannerContainer;