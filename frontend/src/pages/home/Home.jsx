// import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './home.css';  // Import your custom CSS file
import { useNavigate } from 'react-router-dom';
import './home.css';
import Testimonials from '../../components/testimonials/Testimonials'
import About from '../../pages/about/About';
import Slider from "react-slick"; // Import the Slider component
import Slide1 from '../../assets/Image/slider4.jpg';
import Slide2 from '../../assets/Image/slider5.jpg';
import Slide3 from '../../assets/Image/slider6.jpg';
import Courses from '../courses/courses';
// import Link from "../../components/Links/Link";
// import Products from '../products/Products';




const Home = () => {
  const navigate = useNavigate();

  // Settings for the Slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // 3 seconds
    arrows: true, // Arrows for navigation
  };

  return (
    <div>
      <div className="home">
        {/* Slider section */}
        <Slider {...settings} className="slider">
          <div>
          <img src={Slide1} alt="Slide 1" className="slide-image" />
          </div>
          <div>
            <img src={Slide2} alt="Slide 2" className="slide-image" />
          </div>
          <div>
            <img src={Slide3} alt="Slide 3" className="slide-image" />
          </div>
          
        </Slider>

        {/* Home Content */}
        <div className="home-content">
          <h1>Hello Students, How are you, Welcome to Neha Challenge Coaching</h1>
          <p>Keep it up....👍</p>
          <button onClick={() => navigate("/courses")} className="common-btn">
            Get Started
          </button>
        </div>
      </div>

      {/* Testimonials section */}
      

      <Courses/>
      {/* <Products/> */}
      
      <Testimonials />
      
      {/* <CourseCard/> */}
        
      <About/>
        
    </div>
  );
};

export default Home;
