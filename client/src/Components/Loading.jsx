import React from "react";

const Loading = () => {
    return (
        <>
            <div className="mainLoader">
                <div className="subLoader">
                    <div style={{fontFamily:"'Mulish', sans-serif"}} className="loaderText">V</div>
                </div>
                <div className="animatorDiv"></div>
            </div>
        </>
    )
}

export default Loading;