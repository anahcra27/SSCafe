
import React, { useEffect, useState } from 'react';

const reviews = [
  {
    id: 1,
    image: 'https://erickdc7.github.io/coffee-shop-website-design/image/pic-3.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores aliquam hic quis! Eligendi, aliquam.',
    name: 'John Deo',
    role: 'Satisfied Client'
  },
  {
    id: 2,
    image: 'https://erickdc7.github.io/coffee-shop-website-design/image/pic-4.png',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi modi perspiciatis distinctio velit aliquid a.',
    name: 'John Deo',
    role: 'Satisfied Client'
  },
  {
    id: 3,
    image: 'https://erickdc7.github.io/coffee-shop-website-design/image/pic-1.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, earum quis dolorem quaerat tenetur illum.',
    name: 'John Deo',
    role: 'Satisfied Client'
  },
  {
    id: 4,
    image: 'https://erickdc7.github.io/coffee-shop-website-design/image/pic-2.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum optio quasi ut, illo ipsam assumenda.',
    name: 'John Deo',
    role: 'Satisfied Client'
  },
  {
    id: 5,
    image: 'https://erickdc7.github.io/coffee-shop-website-design/image/pic-3.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores aliquam hic quis! Eligendi, aliquam.',
    name: 'John Deo',
    role: 'Satisfied Client'
  },
  {
    id: 6,
    image: 'https://erickdc7.github.io/coffee-shop-website-design/image/pic-4.png',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi modi perspiciatis distinctio velit aliquid a.',
    name: 'John Deo',
    role: 'Satisfied Client'
  },
  {
    id: 7,
    image: 'https://erickdc7.github.io/coffee-shop-website-design/image/pic-1.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, earum quis dolorem quaerat tenetur illum.',
    name: 'John Deo',
    role: 'Satisfied Client'
  },
  {
    id: 8,
    image: 'https://erickdc7.github.io/coffee-shop-website-design/image/pic-2.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum optio quasi ut, illo ipsam assumenda.',
    name: 'John Deo',
    role: 'Satisfied Client'
  }
];

const Review: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length]
  ];

  return (
    <section className="review" id="review">
      <h1 className="heading">
        Reviews
        <span>What People Says</span>
      </h1>

      <div className="review-container">
        {visibleReviews.map((review) => (
          <div className="review-card" key={review.id}>
            <i className="fas fa-quote-left quote-left"></i>
            <i className="fas fa-quote-right quote-right"></i>

            <img
              src={review.image}
              alt={review.name}
              className="review-image"
            />

            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <i className="fas fa-star" key={star}></i>
              ))}
            </div>

            <p>{review.description}</p>
            <h3>{review.name}</h3>
            <span>{review.role}</span>
          </div>
        ))}
      </div>

      <div className="review-dots">
        {Array.from({ length: 4 }).map((_, index) => (
          <button
            key={index}
            className={currentIndex / 2 === index ? 'active' : ''}
            onClick={() => setCurrentIndex(index * 2)}
            aria-label={`Show review group ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Review;
