
import React, { useState } from 'react';

import homeBg from '../assets/home-bg.jpg';
import coffee1 from '../assets/home-img-1.png';
import coffee2 from '../assets/home-img-2.png';
import coffee3 from '../assets/home-img-3.png';

const coffeeImages = [
  coffee1,
  coffee2,
  coffee3
];

const Home: React.FC = () => {

  const [selectedImage, setSelectedImage] = useState(coffee1);

  return (
    <section
      className="home"
      id="home"
      style={{ backgroundImage: `url(${homeBg})` }}
    >

      <div className="home-row">

        {/* Home Content */}

        <div className="home-content">

          <h3>Fresh Coffee In The Morning</h3>

          <div className="coffee-divider">
            <span></span>
            <i className="fas fa-coffee"></i>
            <span></span>
          </div>

          <p>
            Start your day with the perfect cup of coffee.
            Enjoy freshly brewed coffee made with love,
            quality beans and rich flavours.
          </p>

          <a href="#menu" className="btn">
            Buy One Now
          </a>

        </div>

        {/* Coffee Image */}

        <div className="home-image">

          <img
            src={selectedImage}
            alt="Fresh coffee"
            className="main-coffee"
          />

        </div>

      </div>

      {/* Coffee Image Slider */}

      <div className="image-slider">

        {coffeeImages.map((image, index) => (

          <img
            key={index}
            src={image}
            alt={`Coffee ${index + 1}`}
            className={
              selectedImage === image ? 'active' : ''
            }
            onClick={() => setSelectedImage(image)}
          />

        ))}

      </div>

    </section>
  );
};

export default Home;
