import React from 'react';
import "./Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='home__child'>
          <div className='option__one'>
          <span className='home__optionLineone'>
                  <button className="home__button1"></button> 

                  </span>
                  <span className='button__name'>
                      Mobile
                  </span>

          </div>
          <div className='option__one'>
          <span className='home__optionLineone'>
                  <button className="home__button2"></button>     
                  </span>

                  <span className='button__name'>
                      Fashion
                  </span>


          </div>
          <div className='option__one'>
          <span className='home__optionLineone'>
                  <button className="home__button3"></button>
                      
                  </span>
                  <span className='button__name'>
                      Electronics
                  </span>

          </div>
          <div className='option__one'>
          <span className='home__optionLineone'>
                  <button className="home__button4"></button>
                      
                  </span>
                  <span className='button__name'>
                      Home
                  </span>

          </div>
          <div className='option__one'>
          <span className='home__optionLineone'>
                  <button className="home__button5"></button>
                      
                  </span>
                  <span className='button__name'>
                      Travel
                  </span>

          </div>
          <div className='option__one'>
          <span className='home__optionLineone'>
                  <button className="home__button6"></button>
                      
                  </span>
                  <span className='button__name'>
                      Appliances
                  </span>

          </div>
          <div className='option__one'>
          <span className='home__optionLineone'>
                  <button className="home__button7"></button>
                      
                  </span>
                  <span className='button__name'>
                      Furnituer
                  </span>

          </div>
          <div className='option__one'>
          <span className='home__optionLineone'>
                  <button className="home__button8"></button>
                      
                  </span>
                  <span className='button__name'>
                      Don't know
                  </span>

          </div>
          <div className='option__one'>
          <span className='home__optionLineone'>
                  <button className="home__button9"></button>
                      
                  </span>
                  <span className='button__name'>
                      Beauty,Toys & More
                  </span>

          </div>
          
      </div>

      <div className='img__slider'>
       <img class="imgs__" srcset="https://rukminim1.flixcart.com/flap/3376/560/image/2a21c58f3d2e1704.jpg?q=50 2x, 
        https://rukminim1.flixcart.com/flap/1688/280/image/2a21c58f3d2e1704.jpg?q=50 1x" 
         src="https://rukminim1.flixcart.com/flap/1688/280/image/2a21c58f3d2e1704.jpg?q=50" />

          
     </div> 

  </div>
  );
}

export default Home;
