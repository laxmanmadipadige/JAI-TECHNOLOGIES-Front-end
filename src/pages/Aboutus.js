// ✅ Import React library
import React from 'react';

// ✅ Import CSS file for styling
import '../assets/styles/AboutUs.css';

// ✅ Import Components
import ComprehensiveIT from '../Components/ComprehensiveIT';
import Footer from '../Components/Footer';

// ✅ Import Images for timeline and sections
import Meeting from '../assets/Images/photography-group-marketing-experts-background.jpg';
import one from '../assets/Images/AboutUs/A1.jpg';
import two from '../assets/Images/AboutUs/A2.jpg';
import three from '../assets/Images/AboutUs/A3.jpeg';

const AboutUs = () => {
  
  // ✅ Timeline Data - Contains company milestones
  const timelineData = [
    {
      title: "The Beginning",
      description: "The Jai Technologies journey began in 2020.",
      image: one, // Image for timeline event
      side: "right",
    },
    {
      title: "Mission",
      description:
        "At Jai Technologies, we’re on a mission to bring together the personal service of local IT providers with the power of a national network.",
      image: two, // Image for timeline event
      side: "right",
    },
    {
      title: "We Are Global",
      description:
        "Our offices offer high-touch IT services that clients love from highly experienced local team members.",
      image: three, // Image for timeline event
      side: "right",
    },
  ];

  return (
    <>    
      {/* ✅ Header Section */}
      <div className='head'>
        <button>About</button>
        <h1>Dedicated to delivering excellence</h1>
        <h3>Everyone has a story. Here is ours.</h3>
      </div>

      {/* ✅ Timeline Section */}
      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            key={index}
          >
            <div className="timeline-content">
              {/* 🔹 Display timeline image and description */}
              <img src={item.image} alt={item.title} className="timeline-image" />
              <div className="timeline-text">
                <h3 className="timeline-title">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
            <div className="timeline-marker"></div> {/* 🔹 Timeline marker for visual connection */}
          </div>
        ))}
      </div>

      {/* ✅ Why Us Section */}
      <div className='head'>
        <button>WHY US</button>
        <h4>
          We understand that business can be chaotic. That’s where we come in. We’re focused on adding some much-needed balance to the mix. 
          We accomplish that by forging real partnerships with our clients. When you work with us, you’re working with a team who understands 
          your pain points and your goals. We’ll help you find order in the midst of the chaos.
        </h4>
      </div>

      {/* ✅ Core Values Section */}
      <div className="aboutUs">
        <button>Learn more</button>
        <br />
        <button>OUR CORE VALUES</button>
        <h1>Our culture is built around five key attributes that differentiate us from our competition.</h1>
      </div>

      {/* ✅ Features Grid - Displays company values */}
      <div className="features-grid" style={{color:"black"}}>
        <div className="feature">
          <img src="path/to/icon-innovation.png" alt="Innovative Technology" />
          <h3>Passionate</h3>
          <p>We are intensely enthusiastic about providing a superior experience.</p>
        </div>
        <div className="feature">
          <img src="path/to/icon-expertise.png" alt="Industry Expertise" />
          <h3>Respectful</h3>
          <p>We are polite and kind to one another, even when it gets tough.</p>
        </div>
        <div className="feature">
          <img src="path/to/icon-scalability.png" alt="Scalability" />
          <h3>Ownership</h3>
          <p>We are empowered to do our jobs and work towards a common goal.</p>
        </div>
        <div className="feature">
          <img src="path/to/icon-cost.png" alt="Cost-effectiveness" />
          <h3>Unified</h3>
          <p>We work as a team and trust each other to create a seamless experience.</p>
        </div>
      </div>

      {/* ✅ Better Together Section */}
      <div className="better-together">
        {/* 🔹 Left Content */}
        <div className="content">
          <h2>Better Together</h2>
          <h4>
            We know that work is important, but so is play! We respect all of our partnerships, and we make every effort to engage in fun ways 
            that solve critical problems and leave a smile on your face at the same time.
            <br /><br />
            We love our job and love helping our clients. Life is just too short to not enjoy every minute!
          </h4>
          <button>Get in touch</button>
        </div>

        {/* 🔹 Right Image */}
        <div className="image-container">
          <img src={Meeting} alt="Alt description" />
        </div>
      </div>

      {/* ✅ Contact Form Section */}
      <ComprehensiveIT />

      {/* ✅ Footer Section */}
      <Footer />
    </>
  )
}

export default AboutUs;
