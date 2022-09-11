import React from 'react';
import styles from './Menu.module.scss';

import FoodBlock from '../FoodBlock/FoodBlock';
import foodFirstPath from '../../images/food-sketch-1.svg';
import foodSecondPath from '../../images/food-sketch-2.svg';
import foodThirdPath from '../../images/food-sketch-3.svg';

import CoffeeBlock from '../CoffeeBlock/CoffeeBlock';
import coffeeFirstPath from '../../images/double-espresso.svg';
import coffeeSecondPath from '../../images/caramel-frappe.svg';
import coffeeThirdPath from '../../images/iced-coffee.svg';

const foodList = [
  {
    title: 'Our Catering',
    description: 'Alowishus Catering, delicious drop off Catering',
    imageSrc: foodFirstPath,
    buttonText: 'Order Cathering',
    imageAlt: 'plate',
  },
  {
    title: 'The Food',
    description: 'Our entire menu is available as dine in or takeaway.',
    imageSrc: foodSecondPath,
    buttonText: 'Food Menu',
    imageAlt: 'food',
  },
  {
    title: 'The Gelato',
    description: 'Life is like GELATO, enjoy it before it melts.',
    imageSrc: foodThirdPath,
    buttonText: 'Discover More',
    imageAlt: 'ice cream',
  },
];

const coffeeList = [
  {
    name: 'Double Espresso',
    rank: 1,
    description:
      'Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.',
    imageSrc: coffeeFirstPath,
    imageAlt: 'double espresso',
    price: 59.99,
  },
  {
    name: 'Caramel Frappe',
    rank: 2,
    description:
      'Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.',
    imageSrc: coffeeSecondPath,
    imageAlt: 'caramel frappe',
    price: 49.99,
  },
  {
    name: 'Iced Coffee',
    rank: 3,
    description:
      'Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.',
    imageSrc: coffeeThirdPath,
    imageAlt: 'iced coffee',
    price: 47.1,
  },
];

const Menu = ({ type = 'food' }) => {
  let ordinaryClass = `${type === 'food' ? '' : styles.coffee}`;

  return (
    <div className={`${styles.Menu} ${ordinaryClass}`} data-testid='Menu'>
      {type === 'food'
        ? foodList.map((el, i) => {
            return (
              <FoodBlock
                title={el.title}
                description={el.description}
                imageSrc={el.imageSrc}
                buttonText={el.buttonText}
                imageAlt={el.imageAlt}
                key={`food_${i}`}
              />
            );
          })
        : coffeeList.map((el, i) => {
            return (
              <CoffeeBlock
                name={el.name}
                rank={el.rank}
                description={el.description}
                imageSrc={el.imageSrc}
                imageAlt={el.imageAlt}
                price={el.price}
                key={`coffee_${i}`}
              />
            );
          })}
    </div>
  );
};

export default Menu;
