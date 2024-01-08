import { Link, useLocation } from "react-router-dom";

const Pageitem = (number) => {
    const location = useLocation()
    return (
        <li className={'page-item p-2' + number.active}>
            <Link class="page-link" to={location.pathname + "?page="+number.page}>{number.number}</Link>
        </li>
    )
}   

export default Pageitem