import React from "react";
import "./Menu.css"; // You can style as needed
import headerImage from "../assets/TK-PNG.png";
const menu = {
  breakfastPlates: [
    { name: "Classic *", price: "11.50", desc: "Two eggs, any style, served with bacon or sausage (pork or turkey), taters, grits or fruit, & a choice of biscuit or toast" },
    { name: "Sunrise *", price: "9.50", desc: "Two eggs, any style, served with bacon or sausage, taters, grits, or fruit, and a buttermilk flapjack" },
    { name: "Buttermilk", price: "9.50", desc: "A stack of three pancakes served with butter & maple syrup" },
    { name: "Belgian Waffle *", price: "9.50", desc: "Classic fluffy Belgian Waffle (add fruits +1.50)" },
    { name: "French Toast *", price: "9.50", desc: "Classic French toast (add fruits +1.50)" },
    { name: "Toppings", price: "1.50/each", desc: "Blueberry, Raspberry, Strawberry, Banana, Pecans, Chocolate Chips" },
  ],
  sandwiches: [
    { name: "Standard", price: "5.50", desc: "House-made buttermilk biscuit w/strawberry preserves" },
    { name: "Chicken Biscuit", price: "7.50", desc: "Crunchy chicken breast, maple pepper bacon, and honey-butter drizzle on a buttermilk biscuit" },
    { name: "Route 66 *", price: "9.60", desc: "Holiday roasted ham, fried egg, melted sharp cheddar cheese, and honey mustard on soft kaiser bread" },
    { name: "Maple Tree *", price: "9.00", desc: "Fried or scrambled eggs, maple pepper bacon or sausage topped with cheddar cheese on our buttermilk biscuit" },
    { name: "Toastella *", price: "8.00", desc: "Peanut butter, Nutella, strawberry, blueberries, banana on a sourdough bread" },
    { name: "Biscuit & Gravy *", price: "7.50", desc: "House-made buttermilk biscuit drizzled with pork sausage gravy" },
    { name: "Havana Sandwich", price: "12.00", desc: "Pulled pork, ham, pickles, lettuce, swiss cheese, mustard, and mayonnaise on bread" },
    { name: "Chicken Club *", price: "12.00", desc: "Chicken, tomato, lettuce, guacamole, bacon, buttermilk biscuit and boom boom sauce" },
    { name: "Avocado Toast *", price: "8.99", desc: "Guacamole on sourdough bread (Add egg or bacon +1.50)" },
  ],
  lunchCrafts: [
    { name: "Flounder *", price: "15.00", desc: "Our caper aioli, lettuce, tomato, onion (option: grilled or fried)" },
    { name: "Chicken Melt *", price: "14.00", desc: "Grilled Chicken breast with munster cheese, lettuce, tomato, grilled onion, garlic aioli" },
    { name: "House Burger *", price: "14.00", desc: "Angus beef patty, bacon, lettuce, tomato, onion, munster cheese, garlic aioli" },
    { name: "Chorizo Burger *", price: "15.00", desc: "Angus beef patty, queso fresco, grilled onions on a brioche bun" },
    { name: "Shrimp Po Boy *", price: "16.00", desc: "Southern style with Louisiana Flavors" },
    { name: "Classic Mama Meatball *", price: "14.00", desc: "Meatball sandwich with San Marzano sauce & provolone" },
    { name: "Veggie Sandwich *", price: "14.00", desc: "Potato patty with onions and peppers, provolone, tomato, dijon-chipotle mayo" },
    { name: "Elena wrap *", price: "12.00", desc: "Chicken chipotle wrap, tomato, cheddar cheese, chipotle ranch" },
  ],
  bowls: [
    { name: "Loaded Home Fry Bowl *", price: "14.00", desc: "Fries topped with onions, peppers, cheddar cheese, two eggs, and bacon or sausage" },
    { name: "Catracho Bowl *", price: "15.00", desc: "Eggs/meat, beans, pico de gallo, avocado, Honduran sour cream, rice *vegetarian available" },
    { name: "Veggie Bowl *", price: "13.00", desc: "Spinach, tomatoes, mushrooms, onions, bell peppers, melted cheese" },
    { name: "Turkey End", price: "13.00", desc: "Stoneground cheddar grits, red pepper sauce, turkey sausage, sunny egg, green onions (contains nuts)" },
    { name: "Parfait *", price: "9.00", desc: "Yogurt, bananas, blueberries, strawberries, honey nut granola" },
    { name: "Quaker Hot Oats *", price: "9.00", desc: "Hot oatmeal with fruit & toast" },
  ],
};


const Menu = () => {
  const renderSection = (title, items) => (
    <div className="menu-section">
      <h2>{title}</h2>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            <strong>{item.name}</strong> – ${item.price}
            <br />
            <span className="desc">{item.desc}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div>
      <div className="menu-header">
        {/* <img src={headerImage} alt="Terrace Kitchen" className="header-image" /> */}
        <h1 className="header-title">Welcome to Terrace Kitchen</h1>
        <p className="header-subtext">Freshly made breakfast, sandwiches, and bowls served all day.</p>
      </div>

      <div className="menu">
        {renderSection("Breakfast Plates", menu.breakfastPlates)}
        {renderSection("Sandwiches / Biscuit", menu.sandwiches)}
        {renderSection("Lunch Crafts", menu.lunchCrafts)}
        {renderSection("Bowls", menu.bowls)}
      </div>
    </div>
  );
};

export default Menu;