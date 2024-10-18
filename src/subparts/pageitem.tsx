import React from "react";
import { Link, useLocation } from "react-router-dom";

const Pageitem = (number:any) => {
    const location = useLocation()
    return (
        <li className={'page-item p-2' + number.active}>
            <Link className="page-link text-dark" to={location.pathname + "?page="+number.page}>
                {number.number}
            </Link>
        </li>
    )
}   

export default Pageitem