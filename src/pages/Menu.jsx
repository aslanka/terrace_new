// Menu.js
import React from "react";
import "./Menu.css";

const menuData = {
  breakfast: {
    title: "Breakfast Menu (7:00AM – 3:00PM)",
    sections: [
      {
        name: "Skillets",
        items: [
          { name: "Duke", desc: "Diced potatoes, onions, peppers, tomato, mushrooms, eggs", price: "$14.95" },
          { name: "Knight", desc: "Diced potatoes, ham, turkey, bacon, onions, peppers, tomato, eggs", price: "$15.95" }
        ]
      },
      {
        name: "Bowls",
        items: [
          { name: "Catracho", desc: "Rice & beans, steak, pico, avocado, Honduran sour cream, eggs", price: "$16.95" },
          { name: "The Maple", desc: "Greek yogurt, bananas, blueberries, strawberries, granola, honey", price: "$11.95" }
        ]
      },
      {
        name: "Egg Plates",
        items: [
          { name: "Steak", desc: "Ribeye with eggs, toast/biscuit, homefries & fruit", price: "$12.95" },
          { name: "Bacon or Turkey Sausage", desc: "Served with eggs, toast/biscuit, homefries & fruit", price: "$10.95" }
        ]
      },
      {
        name: "Omlettes",
        items: [
          { name: "Meat Lovers", desc: "Bacon, Sausage, Ham, Onions, Cheese", price: "$15.95" },
          { name: "Veggie Omelette", desc: "Bell Pepper, Onion, Mushroom, Spinach, Tomatoes, Cheese", price: "$13.95" },
          { name: "Western", desc: "Bell Pepper, Onion, Ham, Cheese", price: "$14.00" }
        ],
        footer: "Choice of toast, biscuits, homefries or fresh"
      },
      {
        name: "Breakfast Sandwiches",
        items: [
          { name: "Egg & Cheese", desc: "On toast or biscuit", price: "$4.95" },
          { name: "Egg, Cheese & Bacon/Turkey Sausage", desc: "On toast or biscuit", price: "$7.95" }
        ]
      },
      {
        name: "Breakfast Sides",
        items: [
          { name: "Bacon or Turkey Sausage", price: "$3.95" },
          { name: "Avocado Toast", price: "$5.35" },
          { name: "Grits or Fruit or Home Fries", price: "$3.55" },
          { name: "Toast or Biscuit", price: "$3.45" },
          { name: "Pancakes (2)", price: "$7.95" },
          { name: "2 Eggs", desc: "Cooked any style", price: "$3.50" }
        ]
      },
      {
        name: "Smoothies",
        items: [
          { name: "Berry Blast", desc: "Strawberry, blueberry, banana", price: "$6.50" },
          { name: "Tropical Sunrise", desc: "Mango, pineapple, banana", price: "$6.50" },
          { name: "Green Glow", desc: "Spinach, kale, pineapple, banana", price: "$6.50" },
          { name: "Blue Heaven", desc: "Blueberry, flax seed", price: "$6.25" }
        ]
      }
    ]
  },
  lunch: {
    title: "Lunch Menu (11:00AM – 3:00PM)",
    sections: [
      {
        name: "Salads",
        items: [
          { name: "Greek", desc: "Cucumber, tomato, Kalamata olives, feta, red onion, grilled chicken", price: "$17.95" },
          { name: "Chef", desc: "Cucumber, tomato, red onion, egg, ham, turkey", price: "$14.95" },
          { name: "Caesar", desc: "Homemade croutons, parmesan cheese", price: "$13.95" }
        ]
      },
      {
        name: "Sandwiches",
        items: [
          { name: "Grilled Cheese", desc: "White/wheat bread, cheddar, provolone", price: "$8.95" },
          { name: "Rueben", desc: "Pastrami, provolone, sauerkraut, Russian dressing, grilled rye", price: "$14.95" },
          { name: "House Burger", desc: "Angus patty, bacon, lettuce, tomato, mayo, brioche", price: "$15.95" },
          { name: "Patty Melt", desc: "Ground beef, cheddar, grilled onions, grilled rye", price: "$11.95" },
          { name: "Chicken Melt", desc: "Grilled chicken, provolone, lettuce, tomato, onions, spicy mayo, ciabatta", price: "$12.95" },
          { name: "Club Croissant", desc: "Ham, turkey, bacon, lettuce, tomato, provolone, mayo, croissant", price: "$15.95" },
          { name: "Elena Wrap", desc: "Chicken, lettuce, tomato, feta, red onion, chipotle mayo, flour tortilla", price: "$14.95" },
          { name: "BLT", desc: "Bacon, lettuce, tomato, mayo, sourdough", price: "$11.95" }
        ]
      },
      {
        name: "Lunch Sides",
        items: [
          { name: "Cole Slaw or French Fries", price: "$3.95" },
          { name: "Onion Rings", price: "$5.95" }
        ]
      },
      {
        name: "Dessert",
        items: [
          { name: "Bread Pudding w/ Ice Cream", price: "$7.95" },
          { name: "Homemade Cheescake", price: "$11.50" }
        ]
      },
      {
        name: "Drinks",
        items: [
          { name: "Iced Tea or Lemonade", price: "$2.45" },
          { name: "Soft Drinks, Milk", price: "$2.95" }
        ]
      }
    ]
  },
  coffee: {
    title: "Coffee or Tea",
    sections: [
      {
        name: "Hot Coffees",
        items: [
          { name: "Drip Coffee", price: "$3.20" },
          { name: "Espresso", price: "$1.50" },
          { name: "Americano", price: "$4.30" },
          { name: "Cappuccino", price: "$4.60" },
          { name: "Latte", desc: "vanilla, caramel, hazelnut, mocha", price: "$4.70" },
          { name: "Matcha", price: "$5.00" },
          { name: "Chai", price: "$3.60" },
          { name: "Hot Chocolate", price: "$3.60" }
        ]
      },
      {
        name: "Iced Coffee",
        items: [
          { name: "Drip Coffee", price: "$4.00" },
          { name: "Americano", price: "$4.60" },
          { name: "Cappuccino", price: "$5.10" },
          { name: "Latte", desc: "vanilla, caramel, hazelnut, mocha", price: "$5.20" },
          { name: "Matcha", price: "$5.40" },
          { name: "Chai", price: "$5.40" }
        ]
      }
    ]
  }
};

function Menu() {
  return (
    <main className="menu-page">
      {Object.values(menuData).map((menu, idx) => (
        <section key={idx} className="menu-section">
          <h2>{menu.title}</h2>
          {menu.sections.map((section, i) => (
            <div key={i} className="menu-category">
              <h3>{section.name}</h3>
              {section.footer && <p className="menu-footer">{section.footer}</p>}
              <ul>
                {section.items.map((item, j) => (
                  <li key={j} className="menu-item">
                    <div className="menu-text">
                      <strong>{item.name}</strong>{" "}
                      {item.desc && <span>– {item.desc}</span>}
                    </div>
                    <span className="menu-price">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      ))}
    </main>
  );
}

export default Menu;
