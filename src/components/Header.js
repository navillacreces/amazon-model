import React from 'react';
import '../css/Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
    return (
        <nav className="header">
            <Link to="/">
                <img 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                    alt="AmazonLogo"
                    className="header__logo" />
            </Link>
           
                
                <div className="header__search">
                    <input className="header__searchInput"></input>
                        
                            <SearchIcon className="header__searchIcon"/>
                       
                </div>


                <div className="header__nav">
                    <Link to="/login" className="header__link">
                        <div className="header__option">
                            <span className="header__option_line1">
                                Hello Nick
                            </span>
                            <span className="header__option_line2">
                                Sign in
                            </span>
                        </div>
                    </Link>

                    <Link to="/" className="header__link">
                        <div className="header__option">
                            <span className="header__option_line1">
                                Returns
                            </span>
                            <span className="header__option_line2">
                                & Orders
                            </span>
                        </div>
                    </Link>
                    <Link to="/" className="header__link">
                        <div className="header__option">
                            <span className="header__option_line1">
                                Your
                            </span>
                            <span className="header__option_line2">
                                Prime
                            </span>
                        </div>
                    </Link>

                    <Link to="/checkout" className="header__link">
                        <div className="header__optionBasket">
                            {/* */}
                            <ShoppingBasketIcon className=""/>
                            {/* */}
                            <span className="header__option_line2 header__basketCount">
                                0
                            </span>
                        </div>
                    </Link>
                </div>
        </nav>
    )
}


export default Header;
