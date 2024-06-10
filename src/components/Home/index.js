import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import './index.css';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/learn-more');
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Search query:', searchQuery);
  };

  return (
    <div>
      <Navbar />
      <div className="blog-header" style={{display:'flex', justifyContent:'space-between', marginLeft:'30px', marginRight:'30px'}}>
        <h1>BLOG</h1>
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input style={{height: '32px', marginRight:'5px'}}
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>
      <div className="blog-content" style={{display:'flex', height:'fit-content'}}>
        <div className="desc-card" style={{padding:'30px', paddingLeft:'45px'}}>
          <img src="https://content.app-sources.com/s/4683207833314399/thumbnails/640x480/Images/galeria_5e7ce0fff01b3_36_2-8158330.jpeg" alt="img" style={{width: '400px', height:'300px'}}/>
          <p>BEST FULL-BODY HOME GYM MACHINES</p>
          <button onClick={handleLearnMoreClick}>Learn More</button>
        </div>
        <div className="info-card" style={{padding:'30px', paddingLeft:'45px'}}>
          <h1>READY, SET, GO! HOW TO START RUNNING TO STAY FIT</h1>
          <p>Walking is recognized as a safe and effective mode of exercise when the goal is to improve fitness, health, or both. Something as simple as a daily walk can improve</p>
          <a href="https://www.everydayhealth.com/fitness/everything-you-need-to-know-about-how-to-make-walking-a-workout/" target="_blank" rel="noopener noreferrer"> More </a>
        </div>
        <div className="img-card" style={{padding:'30px', paddingLeft:'45px'}}>
          <a href='https://www.everydayhealth.com/fitness/everything-you-need-to-know-about-how-to-make-walking-a-workout/' target='_blank' rel="noopener noreferrer">
            <img src="https://i.pinimg.com/736x/21/c3/c8/21c3c8990cb255082741a9974fbae7e5.jpg" alt="img"  style={{height:'300px'}}/>
          </a>
          <p>Click on the above image to know more about Why to start walking today</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
