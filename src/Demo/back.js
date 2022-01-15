import React from "react";
import {AiOutlineLeft} from "react-icons/all";
import {Link} from "react-router-dom";


const Back = () => {

    return (
        <>
            <Link to="/service" className="d-flex justify-content-end back">
                <AiOutlineLeft title="Назад" style={{color: 'rgba(0,0,0,.7)', height: 40, width: 40, cursor: "pointer"}}/>
            </Link>
        </>
    )
}

export default Back;
