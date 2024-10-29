import React from 'react';
import './about.css';
import Slide1 from '../../assets/Image/Ozairsir.jpg';
import Slide2 from '../../assets/Image/Ramsir.jpg';
import Slide3 from '../../assets/Image/nafissir.jpg';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 

const expertTeachers = [
  {
    name: 'Ozair Sir',
    role: 'Motivator & Director',
    photo: Slide1,
    social: {
      facebook: 'https://facebook.com/ozair',
      twitter: 'https://twitter.com/ozair',
      instagram: 'https://instagram.com/ozair',
    },
  },
  {
    name: 'Ram Kishor Sir',
    role: 'Motivator & Director',
    photo: Slide2,
    social: {
      facebook: 'https://facebook.com/ramkishor',
      twitter: 'https://twitter.com/ramkishor',
      instagram: 'https://instagram.com/ramkishor',
    },
  },
  {
    name: 'Nafis Sir',
    role: 'Management',
    photo: Slide3,
    social: {
      facebook: 'https://facebook.com/nafis',
      twitter: 'https://twitter.com/nafis',
      instagram: 'https://instagram.com/nafis',
    },
  },
];

const teamMembers = [
  {
    name: 'Ozair Sir',
    role: 'Math & Science',
    photo: Slide1,
    social: {
      facebook: 'https://facebook.com/osaid',
      twitter: 'https://twitter.com/osaid',
      instagram: 'https://instagram.com/osaid',
    },
  },
  {
    name: 'Ram Kishor Sir',
    role: 'All Arts',
    photo: Slide1,
    social: {
      facebook: 'https://facebook.com/khatibsir',
      twitter: 'https://twitter.com/khatibsir',
      instagram: 'https://instagram.com/khatibsir',
    },
  },
  {
    name: 'Osaid Sir',
    role: 'Math, Science & Chemistry',
    photo: Slide1,
    social: {
      facebook: 'https://facebook.com/akmalsir',
      twitter: 'https://twitter.com/akmalsir',
      instagram: 'https://instagram.com/akmalsir',
    },
  },
  {
    name: 'Akmal Sir',
    role: 'Chemistry',
    photo: Slide1,
    social: {
      facebook: 'https://facebook.com/zahirsir',
      twitter: 'https://twitter.com/zahirsir',
      instagram: 'https://instagram.com/zahirsir',
    },
    
  },
  {
    name: 'Khatib Sir',
    role: 'English',
    photo: Slide1,
    social: {
      facebook: 'https://facebook.com/zahirsir',
      twitter: 'https://twitter.com/zahirsir',
      instagram: 'https://instagram.com/zahirsir',
    },
    
  },
  {
    name: 'Zahir Sir',
    role: 'Urdu',
    photo: Slide1,
    social: {
      facebook: 'https://facebook.com/zahirsir',
      twitter: 'https://twitter.com/zahirsir',
      instagram: 'https://instagram.com/zahirsir',
    },
    
  },
];

const Team = () => {
  return (
    <div className="team-container">
      <h1>Meet Our Team</h1>
      <div className="expert-teachers">
        {expertTeachers.map((teacher, index) => (
          <div className="team-member" key={index}>
            <img src={teacher.photo} alt={`Photo of ${teacher.name}`} />
            <div className="member-info">
              <h2>{teacher.name}</h2>
              <p>{teacher.role}</p>
              <div className="social-links">
                <a href={teacher.social.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href={teacher.social.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href={teacher.social.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1>Our Expert Teachers</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.photo} alt={`Photo of ${member.name}`} />
            <div className="member-info">
              <h2>{member.name}</h2>
              <p>{member.role}</p>
              <div className="social-links">
                <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
