import React from 'react';
import './navbar.css'
const Navbar = () => {
    return (
        <div>

            <nav className='nav'>
                <div className='dropdown'  id='dropdon'>
                    <div className='dropdown-toggle'>Categories (see all)</div>
                    <div>
                    <div  id='item'>
                        <div><a className='item' href="#">Computer & Accessories</a></div>
                        <div><a className='item' href="#">Cell phones & tabs</a></div>
                        <div><a className='item' href="#">Fridges</a></div>
                        <div><a className='item' href="#">Washing Machine</a></div>
                    </div>
                    </div>
                </div>
                <div className='scrollmenu'>
                    <a href='#'>Home</a>
                    <a href="#">Flash Sale</a>
                    <a href="#">Blogs</a>
                    <a href="#">All Brands</a>
                    <a href="#">All Categories</a>
                    <a href="#">All Sellers</a>
                    <a href="#">Coupons</a>
                    <a href="#">Todays Deals</a>
                </div>
                <div className='cart'>$0.000 (see all)</div>
            </nav>
            {/* <div id='navbar'>
                <nav className="navbar navbar-expand-lg " id='nav'>
                    <div className="nav-item dropdown" id='drop'>
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categories (see all)
                        </a>
                        <div className="dropdown-menu">
                            <div><a className="dropdown-item" href="#">Action</a></div>
                            <div><a className="dropdown-item" href="#">Another action</a></div>
                            <div><hr className="dropdown-divider" /></div>
                            <div><a className="dropdown-item" href="#">Something else here</a></div>
                        </div>
                    </div>
                    <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="navbar-nav me-auto mb-2 mb-lg-0">
                        <div className='scrollmenu'>

                                <a className="nav-link" aria-current="page" href="#">Home</a>

                                <a className="nav-link" href="#">Flash Sale</a>

                                <a className="nav-link" href="#">Blogs</a>

                                <a className="nav-link" href="#">All Brands</a>

                                <a className="nav-link" href="#">All Categories</a>

                                <a className="nav-link" href="#">All Sellers</a>

                                <a className="nav-link" href="#">Coupons</a>

                                <a className="nav-link" href="#">Todays Deals</a>
                                </div>
                                <div className='nav-item cart'>
                                    $0.000 (see all)
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div> */}
        </div>
    );
}

export default Navbar;
