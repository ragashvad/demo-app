import React from 'react';
import { Link } from 'react-router-dom';
// import { FaShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FontAwesome from 'react-icons/fa'

import '../components/style/header.css';
const Header = () => {
	return (
		<nav>
			<div className="container-fluid">
				<div className="navigation-header">
					<div className="navbar-header">
						<Link to="/" className="navbar-brand-logo">
							<img
								className="udemy-logo"
								src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
								alt="Udemy"
								style={{ height: 32, width: 110 }}
							/>
						</Link>
					</div>
					<div className="header-left">
						<div class="navbar-brand-category">
							<Link to="/">
                            {/* <FontAwesomeIcon icon={FaShoppingCart} /> */}
                            <span className="fontawesome">  <FontAwesome.FaTh/></span>
								<span>Categories</span>
							</Link>
						</div>
						{/* <div className="navbar-brand-search" /> */}
					</div>
                    <div className="header-right" >
                        <div className="navbar-brand-udemy-business">
                        <Link to="/" className="udemy">
                        Udemy for Business
                        </Link></div>
                        <div class="navbar-brand-udemy-business">
                            <Link className="udemy">Teach on Udemy </Link>
                        </div>
                        <div className="divide">
                        </div>
                        <div className="cart">
                            <div className="cart-font">
                            <FontAwesome.FaShoppingCart className="font" />
                            </div>
                        </div>
                        <div className="login">
                        <button type="button" class="btn btn-quaternary">Log In</button>
                        </div>
                        <div className="signup">
                        <button type="button" class="btn btn-primary">Sign Up</button>
                        </div>
                    </div>
                </div>	
			</div>
		</nav>
	);
};

export default Header;
