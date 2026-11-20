
import React from 'react';

const menuItems = [
    {
        id: 1,
        image: 'https://erickdc7.github.io/coffee-shop-website-design/image/menu-1.png',
        name: 'Our Special Coffee',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, sed.',
        price: '$8.99'
    },
    {
        id: 2,
        image: 'https://erickdc7.github.io/coffee-shop-website-design/image/menu-2.png',
        name: 'Our Special Coffee',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, fugit.',
        price: '$8.99'
    },
    {
        id: 3,
        image: 'https://erickdc7.github.io/coffee-shop-website-design/image/menu-3.png',
        name: 'Our Special Coffee',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, recusandae.',
        price: '$8.99'
    },
    {
        id: 4,
        image: 'https://erickdc7.github.io/coffee-shop-website-design/image/menu-4.png',
        name: 'Our Special Coffee',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, quas.',
        price: '$8.99'
    },
    {
        id: 5,
        image: 'https://erickdc7.github.io/coffee-shop-website-design/image/menu-5.png',
        name: 'Our Special Coffee',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, vitae.',
        price: '$8.99'
    },
    {
        id: 6,
        image: 'https://erickdc7.github.io/coffee-shop-website-design/image/menu-6.png',
        name: 'Our Special Coffee',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, expedita!',
        price: '$8.99'
    }
];

const Menu: React.FC = () => {
    return (
        <section className="menu" id="menu">

            <h1 className="heading">
                Our Menu
                <span>Popular Menu</span>
            </h1>

            <div className="box-container">

                {menuItems.map((item) => (
                    <div className="box" key={item.id}>

                        <img src={item.image} alt={item.name} />

                        <div className="content">
                            <h3>{item.name}</h3>

                            <p>{item.description}</p>

                            <span>{item.price}</span>
                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
};

export default Menu;
