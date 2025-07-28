import React from 'react';
import './About.css';
import { GiSpiralArrow, GiStoneBlock, GiSpellBook, GiStarMedal } from 'react-icons/gi';
import { MdGroups, MdOutlineAutoAwesome } from 'react-icons/md';

function About() {
  return (
    <div className="about-screen">
      /* Hero Section */  
        <div className="container-fluid py-5 d-flex align-items-center min-vh-100">
          <div className="container">
            <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 order-lg-1 order-2">
            <div className="content-wrapper">
              <h1 className="font-big text-red slide-in-top delay-1">
            About 
            <span className="animate-charcter"> STEPHANIE SUNRISE</span>
              </h1>
              <div className="gold-bar mb-4 slide-in-bottom fade-in-up delay-2"></div>
              <p className='lead-text slide-in-bottom delay-3'>
              Gender: Female<br />
              Bust: B Cup<br />
              Hair Color: Crimson Red<br />
              Height: 4 foot 9 inches, 144.78 cm"<br />
              Eyes: Crystal Blue Eyes<br />
              Species: Immortal Fairy
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 order-lg-2 order-1 mb-5 mb-lg-0">
            <img 
              className="img-fluid floating-animation" 
              src="../images/mario66.png" 
              alt="World Building Illustration" 
            />
          </div>
            </div>
          </div>
        </div>


<div className='pillars1-section'>
      <div className="container-fluid pillars1-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5 slide-in-bottom">STEPHANIE SUNRISE</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="pillar1-card slide-in-bottom">
                <GiSpiralArrow className="pillar1-icon" />
                <h3>Hi....
                </h3>
                <p>Stephanie is a determined fighter when she needs to be. When she is not fighting she is flirting with everyone she sees. She can often be seen wearing a typical fairy dress and 12 inch stilettos. Stephanie used to wear gauntlets when she served the Almighty Priestess that housed a binding spell to control the darkness that all immortal fairies suffer. Like all immortal fairies Stephanie does suffer from manic depression if not worse stemming from almost losing her mother at birth. The only way to save her mother was to sacrifice the child which the 3 Legendary Goddesses and the Great Fairy saved from an untimely death turning the child into an immortal fairy. Since Stephanie’s parents are both human it makes Stephanie a non pure immortal fairy. Through her many years serving the Almighty Priestess she was given a gift from the goddesses allowing her to retain the power she possessed when she served the Almighty Priestess. Today Stephanie rules the Underworld as their Great Fairy and sits on the council that governs all mystical creatures protected under The Fairy Proclamation.
                </p>
                {/* Add image here */}
            <img
              src={`${process.env.PUBLIC_URL}/images/mario4.png`}  // <-- Your image path
              alt="Stephanie"
              className="img-fluid mt-3"
              style={{ borderRadius: '12px' }}
            />
              </div>
            </div>

            
          </div>
        </div>
        </div>
        </div>

        {/* Core Pillars Section */}
     <div className='pillars-section'>  
      </div>
      {/* Semi Core Pillars Section */}
      <div className='pillars-section'>  
      <div className="container-fluid pillars-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5 slide-in-bottom">STORIES</h2>
          <div className="row g-4">
                     


            {/* Item 2*/}
                  <div className="container-fluid origin-section py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="story-card slide-in-bottom">
                
                <div className="timeline-year">About Immortal Fairy</div>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-content">Immortal fairies do not have wings they use telepathy to fly.<br/> The stilettos help with the extra lift they need to carry themselves<br/> into the air. Immortal fairies also have fangs using them for basic<br/> survival rather than a need for thirst, though blood does give<br/> them extra strength. They also have claws that can be extended<br/> and retracted for protection.  All immortal fairies are tamed using<br/> binding gauntlets to control their darkness. There are two types<br/> of immortal fairies: Pure Breeds and Non Pure Breeds. 
Pure Breeds<br/> have immortal fairy parents and can be distinguished with marks<br/> under their eyes. 
</div>
                  <div className="timeline1-image">
        <img src="/images/mario110.png" alt="Stephanie" />
      </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                        <div className="container-fluid origin-section py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="story-card slide-in-bottom">
                
                <div className="timeline-year">The Fairy Proclamation</div>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-content">This is a documentation of legal guidelines that <br/> Fairies and Mystical Creatures are governed by <br/> that dates back during Stephanie's mentor,  <br/>Concrietta’s time. It has been recently amended <br/> to prevent immortal fairies from abusing the system <br/> as rogue immortal fairies have used this to get away <br/> with murder. </div>
                  <div className="timeline1-image">
        <img src="/images/mario33.png" alt="Stephanie" />
      </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

          </div>
        </div>
      </div>
      </div> 

      {/* Origin Story */}
      <div className="container-fluid origin-section py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="story-card slide-in-bottom">
                {/*<GiSpellBook className="story-icon" />*/}
                <h2 className="mb-4">
                </h2>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-content">Stephanie’s dress design is not finalized.<br /> Recreations of the design are from other artists'<br /> interpretations and limitations of character<br /> builder programs that I have used. On the outside<br /> Stephanie seems to be strong and well put together.<br /> She’s usually cheerful to everyone she meets.<br /> On the inside she struggles to keep things together</div>
                  <div className="timeline-image">
        <img src="/images/mario11.png" alt="Stephanie" />
      </div>
                  </div>{/*
                  <div className="timeline-item">
                    <div className="timeline-year">2018</div>
                    <div className="timeline-content">The Birth of a Myth: Kara’s world took form, its lore deepening, its legends taking root.</div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-year">2022</div>
                    <div className="timeline-content">The Realm Awakens: A growing community stepped into the story, turning myth into movement.

The journey is far from over. The legend is still being written. Will you be part of it?</div>
                  </div>*/}

                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img 
                //className="img-fluid rounded-3" 
                //src="../images/characters/creation-process.jpg" 
                //alt="Creative Process" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
{/* Values Section */}
<div className="container-fluid values-section py-5">
  <div className="custom-container">
    <div className="row g-4">
      <div className="col-12 text-center mb-5">
        <h2 className="slide-in-bottom">Reference Sheet Of Stephanie Sunrise</h2>
      </div>
      <div className="col-12">
        <div className="value-card slide-in-bottom d-flex align-items-center">
          <img
            src="/images/mario77.png"
            alt="Value"
            className="value-image"
          />
        </div>
      </div>
    </div>
  </div>
</div>



    </div>
  );
}

export default About;