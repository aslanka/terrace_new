import React from "react";
import "./DrinksMenu.css";
import headerImage from "../assets/TK-PNG.png"; // if you want to use a header image

const drinks = {
  cocktails: [
    { name: "Blue Lemondrop", price: "14.00", desc: "Champagne, Smirnoff, blueberry, lemonade" },
    { name: "Tequila Sunrise", price: "14.00", desc: "Champagne, tequila, and orange juice" },
    { name: "Creamsicle", price: "14.00", desc: "Champagne, vanilla vodka, orange syrup, OJ" },
    { name: "Irish Coffee", price: "8.00", desc: "Coffee, Baileys" },
    { name: "Cinnamon Toast", price: "13.00", desc: "Rumchata, fireball whiskey, vanilla vodka, cinnamon sugar rim" },
    { name: "Espresso martini", price: "14.00", desc: "Espresso vodka, Kahlua, Irish cream, cold brew" },
    { name: "Girl Scout cookies", price: "13.00", desc: "Irish cream, peppermint schnapps, Baileys, Kahlua, and a chocolate chaser" },
    { name: "Chicken and Waffles", price: "12.00", desc: "Crown Royal, Butterscotch liquor, bourbon syrup, and a piece of fried chicken as a chaser" },
    { name: "Blood Mary", price: "13.00", desc: "Spicy vodka cocktail with tomato juice" },
    { name: "Mimosas", price: "10.00", desc: "Light, bubbly mix of champagne and orange" },
  ],
  mocktails: [
    { name: "Dirty Coconut", price: "8.00", desc: "Coconut milk and cream mix effortlessly with lime juice and cola" },
    { name: "Espresso Mocha Crunch Mocktail", price: "9.00", desc: "An espresso base and a creamy foam top sprinkled with a layer of oreo crunch" },
    { name: "Triple Berry sparklers", price: "8.00", desc: "Blueberries, raspberries, and strawberries in sparkling water" },
  ],
  softDrinks: [
    "Pepsi", "Dr. Pepper", "Jarritos", "Cranberry Juice", "Diet Pepsi",
    "Sunkist", "Ginger ale", "Starry", "Iced Tea", "Milk",
    "Chocolate Milk", "Orange Juice", "Apple Juice"
  ]
};

const DrinksMenu = () => {
  return (
    <div>
      <div className="menu-header">
        {/* <img src={headerImage} alt="Terrace Kitchen" className="header-image" /> */}
        <h1 className="header-title">Welcome to Terrace Kitchen</h1>
        <p className="header-subtext">Enjoy our signature cocktails, mocktails, and refreshing beverages.</p>
      </div>

      <div className="drinks-container">
        <div className="drinks-box cocktails">
          <h2>Cocktails</h2>
          <ul>
            {drinks.cocktails.map((item, idx) => (
              <li key={idx}>
                <strong>{item.name}</strong> ~ ${item.price}
                <br />
                <span className="desc">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="drinks-box mocktails">
          <h2>Mocktails</h2>
          <ul>
            {drinks.mocktails.map((item, idx) => (
              <li key={idx}>
                <strong>{item.name}</strong> ~ ${item.price}
                <br />
                <span className="desc">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="drinks-box softdrinks">
          <h2>Soft Drinks 3.99</h2>
          <ul>
            {drinks.softDrinks.map((drink, idx) => (
              <li key={idx}>{drink}</li>
            ))}
          </ul>
        </div>

        <p className="disclaimer">
          *These items may be served raw or undercooked. Consuming raw or undercooked seafood may increase your risk of foodborne illness, especially if you have certain medical conditions. Please inform your server of any allergies or concerns.
        </p>
      </div>
    </div>
  );
};

export default DrinksMenu;
