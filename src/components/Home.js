import React from 'react';
import './Home.css';
import { GiSpinningSword, GiRank3, GiTrophy } from 'react-icons/gi';
import { FaYoutube, FaTwitch, FaTwitter, FaKickstarter, FaRedditAlien, FaDiscord, FaFacebook } from "react-icons/fa";
import { MdOutlineUpdate, MdGroups } from 'react-icons/md';
import { PiButterflyFill } from "react-icons/pi";

function Home() {
  const heroStyle = {
    background: `url(${process.env.PUBLIC_URL}/images/mario8.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    color: '#fff',
    padding: '50px 0'
  };

  return (
    <div className="home-screen">
      {/* Main Hero Section */}
      <div className="container-fluid hero-section" style={heroStyle}>
        <div className="row min-vh-100 align-items-center">
          <div className="col-12 text-content">
            <div className="content-wrapper">
              <h1 className="font-big1 slide-in-left">This Is Where</h1>
<h1 className="font-big2 animate-charcter slide-in-right">Mario's Story Starts</h1>
<p className="lead-text fade-in-up delay-1">
  Mario is the Content Creator <br />
</p>

<div className="d-flex gap-3 mt-4 fade-in-up delay-2">
  <button className="btn btn-primary explore-btn">
    Contact Me
  </button>
  <button className="btn btn-outline-primary explore-btn">
    More stories to come!
  </button>
</div>

<div className="countdown-box mt-4 fade-in-up delay-3">
  <h5 className="mb-2">Summary</h5>
  <div className="d-flex gap-2">
    <div className="countdown-item">
      <div>∞</div>
      <small>Stories</small>
    </div>
    <div className="countdown-item">
      <div>∞</div>
      <small>Abilities</small>
    </div>
    <div className="countdown-item">
      <div>∞</div>
      <small>Creative Possibilities</small>
    </div>
  </div>
</div>


            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container-fluid features-section py-5">
        <div className="container">

        <div className="feature-slider">
  <div className="feature-card">
    <FaYoutube className="feature-icon" />
    <h4>Acme Studios</h4>
    <a href="https://www.youtube.com/@AcmeStudios26">Visit My Youtube Channel</a>
  </div>

  <div className="feature-card">
    <FaTwitch className="feature-icon" />
    <h4>acme_studios</h4>
    <a href="https://www.twitch.tv/acme_studios">Visit My Twitch CAccount</a>
  </div>

    <div className="feature-card">
    <FaTwitter className="feature-icon" />
    <h4>@studios_acme</h4>
    <a href="https://x.com/studios_acme">Visit My Twitter Account</a>
  </div>

    <div className="feature-card">
    <FaKickstarter className="feature-icon" />
    <h4>Acme_Studios</h4>
    <a href="https://kick.com/acme-studios">Visit My Kick Account</a>
  </div>

  <div className="feature-card">
    <FaRedditAlien className="feature-icon" />
    <h4>u/Acme_Studios</h4>
    <a href="https://www.reddit.com/user/Acme_Studios/">Ask Me On Reddit</a>
  </div>

  <div className="feature-card">
    <FaDiscord className="feature-icon" />
    <h4>Acme Studio Fan Page</h4>
    <a href="https://discord.com/invite/54ABvfy98q">Join My Community</a>
  </div>

  <div className="feature-card">
    <FaDiscord className="feature-icon" />
    <h4>Acme CourtHouse</h4>
    <a href="https://discord.com/invite/2NtrCaYwzf">Join My CourtHouse</a>
  </div>

  <div className="feature-card">
    <FaFacebook className="feature-icon" />
    <h4>Acme Computers & Repairs</h4>
    <a href="https://discord.com/invite/2NtrCaYwzf">Visit My Facebook Page</a>
  </div>

    <div className="feature-card">
    <PiButterflyFill className="feature-icon" />
    <h4>@acmestudios.bsky.social</h4>
    <a href="https://bsky.app/profile/acmestudios.bsky.social">Join The Conversation</a>
  </div>


</div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container-fluid newsletter-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <MdOutlineUpdate className="newsletter-icon mb-3" />
              <h2>Follow the creative journey</h2>
              <p className="sub-text">Get updates on new characters, work-in-progress, and exclusive reveals</p>
              
              <div className="newsletter-form mt-4">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Enter your email for art updates"
                />
                <button className="btn btn-primary mt-3">
                  Join the Adventure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      {/* Additional Section */}{/*
      <div className="additional-section py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 text-center">
              <h2>Weapons</h2>
              <p className="sub-text">Weapons owned by Kara</p>
            </div>
            
            <div className="col-md-4">
              <div className="stats-card">
                <div className="stats-number">Armor</div>
                <div className="stats-label">Twin daggers forged from an ancient asteroid’s metal</div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="stats-card">
                <div className="stats-number">01</div>
                <div className="stats-label">Handcrafted by the Valkyries, said to be impenetrable</div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="stats-card">
                <div className="stats-number">Magic & Affinities</div>
                <div className="stats-label">Norse God mythology grants her vast magical abilities</div>
              </div>
            </div>
          </div>
        </div>
      </div>*/}
    </div>
  );
}

export default Home;