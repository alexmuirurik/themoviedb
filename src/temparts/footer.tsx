import React from "react"
import { Link } from "react-router-dom"

const Footer =   ()  =>  {
    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item">
                            <Link to="#" className="nav-link px-2">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link px-2">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link px-2">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-2">FAQs</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-2">About</a>
                        </li>
                    </ul>
                    <p className="text-center">© 2023 Company, Inc</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer