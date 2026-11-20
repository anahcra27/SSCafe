
import React from 'react';

const About: React.FC = () => {
    return (
        <section className="about" id="about">

            <h1 className="heading">
               
                <span>Why Choose Us</span>
            </h1>

            <div className="row">

                {/* About Image */}
                <div className="image">
                    <img
                        src="https://erickdc7.github.io/coffee-shop-website-design/image/about-img.png"
                        alt="Coffee preparation"
                    />
                </div>

                {/* About Content */}
                <div className="content">

                    <h3 className="title">
                        What's Make Our Coffee Special!
                    </h3>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vel rerum laboriosam reprehenderit ipsa id repellat odio
                        illum, voluptas, necessitatibus assumenda adipisci.
                        Hic, maiores iste? Excepturi illo dolore mollitia qui quia.
                    </p>

                    <a href="#" className="btn">
                        Read More
                    </a>

                    {/* About Features */}
                    <div className="icons-container">

                        <div className="icons">
                            <img
                                src="https://erickdc7.github.io/coffee-shop-website-design/image/about-icon-1.png"
                                alt="Quality coffee"
                            />
                            <h3>Quality Coffee</h3>
                        </div>

                        <div className="icons">
                            <img
                                src="https://erickdc7.github.io/coffee-shop-website-design/image/about-icon-2.png"
                                alt="Our branches"
                            />
                            <h3>Our Branches</h3>
                        </div>

                        <div className="icons">
                            <img
                                src="https://erickdc7.github.io/coffee-shop-website-design/image/about-icon-3.png"
                                alt="Free delivery"
                            />
                            <h3>Free Delivery</h3>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default About;
