import React from 'react';
import'./Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
  <div className='header'>
      <img 
          className="header__logo" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"/>
          <input  type="text" className="header__search" />
          <SearchIcon className='header__searchIcon'/>

          <div className="header__nav">
              <div classNmae="header_option">
                  <span className='header__optionLineone'>
                  <button className="header__button">Login</button>
                      
                  </span>

              </div>
              <div className='header_option'>
              <span className='header__optionLinetwo'>
                      More
                  </span>  
              </div>
              <div className='header_option'>
              <span className='header__optionLinethree'>
                     <ShoppingCartIcon className='cartIcon'/>
                      Cart
                      
                  </span>  
              </div>
          </div>
  </div>
  )
}

export default Header;
