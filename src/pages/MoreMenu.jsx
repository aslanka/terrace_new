import React from "react";
import "./MoreMenu.css";
import headerImage from "../assets/TK-PNG.png"; // Optional

const moreMenu = {
  salads: [
    { name: "Caesar Salad", price: "14.00", desc: "Traditional Caesar, Homemade croutons, shaved pecorino with grilled chicken" },
    { name: "Greek Salad *", price: "Choice of Chicken (17), Steak (19), or Fish (19)", desc: "Greek salad, tomato, cucumber, feta cheese, kalamata olive, red onion, your choice of meat" }
  ],
  chickenWaffles: [
    { name: "Sliders", price: "14.00" },
    { name: "Hot honey chicken and waffles", price: "15.00" },
    { name: "Cajun Chicken and Waffles", price: "15.00" }
  ],
  croissants: [
    { name: "Double Trouble", price: "16.50", desc: "Marinated chicken breast grilled and served with ranch dressing, jalapeños, lettuce, tomato, bacon, and provolone in a grilled soft kaiser" },
    { name: "Club Croissant", price: "17.50", desc: "Smoked turkey, shaved ham, bacon, provolone, lettuce, tomato in a warm, flaky croissant" },
    { name: "Protein Croissant *", price: "Chicken (15), Steak (19), Fish (17)", desc: "Croissant with smoked turkey, cheddar-jack, lettuce, and tomato" }
  ],
  skillets: [
    { name: "Duke", price: "16.50", desc: "Broccoli, mushrooms, bell peppers, tomatoes, caramelized onions, and cheddar-jack" },
    { name: "Knight", price: "16.50", desc: "Smoked ham, smoked turkey, bacon, tomatoes, caramelized onions, and cheddar-jack" },
    { name: "Marquis", price: "16.50", desc: "Buffalo diced chicken, bacon, bleu cheese or ranch, cheddar-jack" }
  ],
  sides: [
    "Maple Pepper Bacon", "Fruit cup", "Sausage (pork or turkey)", "Breakfast Taters",
    "2 eggs (fried or scrambled)", "Stone ground cheddar grits", "Hash brown",
    "Waffle/Pancake", "French Toast", "Fries", "Toast/Bagel/Croissant", "Salad (5.99)"
  ],
  specialties: [
    { name: "Chicken Biscuit Supreme", price: "15.50", desc: "Biscuit with two fried chicken breasts, eggs, and sausage gravy" },
    { name: "Notorious BLT", price: "14.00", desc: "Bacon, lettuce, tomato on toast + choice of fries, hash brown, or fruit cup" },
    { name: "Breakfast Taco", price: "15.00", desc: "Two tacos with bacon, egg and cheese. Topped with guacamole & pico. Side of fries, hash brown, or fruit cup" },
    { name: "Carolina Kick", price: "10.00", desc: "Biscuit with hot honey fried chicken, cheese, and eggs" },
    { name: "Cajun Shrimp & Grits", price: "17.50", desc: "Shrimp over buttery grits topped with lobster cream sauce" },
    { name: "Steak and Eggs *", price: "16.50", desc: "Two eggs, 6 oz sirloin steak, grilled tomato, garlic toast, with home fries or grits" }
  ],
  kids: [
    "Mac and Cheese", "Grilled Cheese", "Pancake or Waffles", "Chicken Tender with fries"
  ]
};

const MoreMenu = () => {
  const renderList = (title, items, id = "") => (
    <div className="more-box" id={id}>
      <h2>{title}</h2>
      <ul>
        {items.map((item, idx) =>
          typeof item === "string" ? (
            <li key={idx}>{item}</li>
          ) : (
            <li key={idx}>
              <strong>{item.name}</strong> ~ ${item.price}
              {item.desc && (
                <>
                  <br />
                  <span className="desc">{item.desc}</span>
                </>
              )}
            </li>
          )
        )}
      </ul>
    </div>
  );

  return (
    <div>
      <div className="menu-header">
        <h1 className="header-title">Welcome to Terrace Kitchen</h1>
        <p className="header-subtext">Explore our delicious salads, skillets, croissants, and more.</p>
      </div>

      <div className="more-menu-container">
        {renderList("Salads", moreMenu.salads, "salads")}
        {renderList("Chicken and Waffles", moreMenu.chickenWaffles, "waffles")}
        {renderList("Croissants", moreMenu.croissants, "croissants")}
        {renderList("Skillets", moreMenu.skillets, "skillets")}
        {renderList("Sides ~ 4.99", moreMenu.sides, "sides")}
        {renderList("Specialties", moreMenu.specialties, "specialties")}
        <div className="more-box kids">
          <h2>Kid’s Choice</h2>
          <p>Pick 2 options...</p>
          <ul>
            {moreMenu.kids.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MoreMenu;
