
import React, { useState } from 'react';

const Book: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        guests: '2',
        date: '',
        time: ''
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Your table reservation request has been submitted!');
        setFormData({
            name: '',
            email: '',
            phone: '',
            guests: '2',
            date: '',
            time: ''
        });
    };

    return (
        <section className="book" id="book">

            <h1 className="heading">
                Book Now
                <span>Reserve A Table</span>
            </h1>

            <div className="book-container">

                <div className="book-image">
                    <img
                        src="https://erickdc7.github.io/coffee-shop-website-design/image/book-img.svg"
                        alt="Coffee table reservation"
                    />
                </div>

                <form onSubmit={handleSubmit}>

                    <h3>Book Your Table</h3>

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="book-input"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="book-input"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone Number"
                        className="book-input"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />

                    <select
                        name="guests"
                        className="book-input"
                        value={formData.guests}
                        onChange={handleChange}
                    >
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="3">3 Persons</option>
                        <option value="4">4 Persons</option>
                        <option value="5">5 Persons</option>
                        <option value="6">6 Persons</option>
                        <option value="7">7 Persons</option>
                        <option value="8">8 Persons</option>
                    </select>

                    <input
                        type="date"
                        name="date"
                        className="book-input"
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        required
                    />

                    <input
                        type="time"
                        name="time"
                        className="book-input"
                        value={formData.time}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="submit"
                        value="Book Now"
                        className="btn book-submit"
                    />

                </form>
            </div>
        </section>
    );
};

export default Book;
