import React from 'react'
import './footer.css';
import { FaFacebook ,FaTwitter ,FaInstagramSquare} from "react-icons/fa";
const Footer = () => {
  return (
   <footer>
    <div className="footer-content">
        <p>
            &copy; 2024 Your Neha Challenge Coaching.All right reserved.<br/>
            Made with ❤️<a href="">By Md Afzal</a>

        </p>
        <div className="social-links">
            <a href="https://www.facebook.com/share/1AU4u74dAm/"><FaFacebook/></a>
            <a href="https://x.com/AfzalKhan149343"><FaTwitter /></a>
            <a href="https://www.instagram.com/guru_afzal0786?utm_source=qr&igsh=dXE1eHQwZWF4YXln"><FaInstagramSquare/></a>
        </div>
    </div>
   </footer>
  )
}

export default Footer
