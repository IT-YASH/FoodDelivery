import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header className="main_menu home_menu container-fluid bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 ">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <Link className="navbar-brand logo" to="/"> <img src="img/logo.png" alt="logo" style={{ height: "30px", width: "180px  " }} /> </Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse main-menu-item justify-content-end"
                                    id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="home">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="menu">Menu</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="chefs">Chefs</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="singleblog">Single blog</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="contact">Contact</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="about">About</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="menu_btn">
                                    <Link to="#" className="btn_1 d-none d-sm-block">book a tabel</Link>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Navbar;