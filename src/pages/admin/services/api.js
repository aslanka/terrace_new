// services/api.js (mocked)

let menu = {
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
  
  let moreMenu = {
    salads: [
      { name: "House Salad", price: "15.00", desc: "Mixed greens, tomato, cucumber, red onion, carrots, dressing of your choice with grilled chicken" },
      { name: "Caesar Salad", price: "14.00", desc: "Traditional Caesar, Homemade croutons, shaved pecorino with grilled chicken" },
      { name: "Fall Salad", price: "15.00", desc: "Toasted almonds, cranberry, goat cheese, tangerine house dressing with grilled chicken" },
      { name: "Greek Salad *", price: "Choice of Chicken (17), Steak (19), or Fish (19)", desc: "Greek salad, tomato, cucumber, feta cheese, kalamata olive, red onion, your choice of meat" },
    ],
    chickenWaffles: [
      { name: "Sliders", price: "14.00" },
      { name: "Hot honey chicken and waffles", price: "15.00" },
      { name: "Cajun Chicken and Waffles", price: "15.00" },
    ],
    croissants: [
      { name: "Double Trouble", price: "17.00", desc: "Marinated chicken breast grilled and served with ranch dressing, jalapeños, lettuce, tomato, bacon, and provolone in a grilled soft kaiser" },
      { name: "Club Croissant", price: "9.00", desc: "Smoked turkey, shaved ham, bacon, provolone, lettuce, tomato in a warm, flaky croissant" },
      { name: "Turkey Croissant *", price: "Chicken (15), Steak (19), Fish (17)", desc: "Croissant with smoked turkey, cheddar-jack, lettuce, and tomato" },
    ],
    skillets: [
      { name: "Duke", price: "15.00", desc: "Broccoli, mushrooms, bell peppers, tomatoes, caramelized onions, and cheddar-jack" },
      { name: "Knight", price: "15.00", desc: "Smoked ham, smoked turkey, bacon, tomatoes, caramelized onions, and cheddar-jack" },
      { name: "Marquis", price: "16.00", desc: "Buffalo diced chicken, bacon, bleu cheese or ranch, cheddar-jack" },
    ],
    sides: [
      "Maple Pepper Bacon", "Fruit cup", "Sausage (pork or turkey)", "Breakfast Taters",
      "2 eggs (fried or scrambled)", "Stone ground cheddar grits", "Hash brown",
      "Waffle/Pancake", "French Toast", "Fries", "Toast/Bagel/Croissant", "Salad (5.99)",
    ],
    specialties: [
      { name: "Chicken Biscuit Supreme", price: "14.00", desc: "Biscuit with two fried chicken breasts, eggs, and sausage gravy" },
      { name: "Notorious BLT", price: "14.00", desc: "Bacon, lettuce, tomato on toast + choice of fries, hash brown, or fruit cup" },
      { name: "Breakfast Taco", price: "12.00", desc: "Two tacos with bacon, egg and cheese. Topped with guacamole & pico. Side of fries, hash brown, or fruit cup" },
      { name: "Carolina Kick", price: "9.00", desc: "Biscuit with hot honey fried chicken, cheese, and eggs" },
      { name: "Cajun Shrimp & Grits", price: "14.00", desc: "Shrimp over buttery grits topped with lobster cream sauce" },
      { name: "Steak and Eggs *", price: "15.00", desc: "Two eggs, 6 oz sirloin steak, grilled tomato, garlic toast, with home fries or grits" },
    ],
    kids: [
      "Mac and Cheese", "Grilled Cheese", "Pancake or Waffles", "Chicken Tender with fries"
    ]
  };
  
  let drinks = {
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
    ],
  };
  
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  
  // Set 1
  export const fetchSet1 = async () => { await delay(100); return structuredClone(menu); };
  export const updateSet1Section = async (key, newItems) => { await delay(100); menu[key] = newItems; return structuredClone(menu); };
  
  // Set 2
  export const fetchSet2 = async () => { await delay(100); return structuredClone(moreMenu); };
  export const updateSet2Section = async (key, newItems) => { await delay(100); moreMenu[key] = newItems; return structuredClone(moreMenu); };
  
  // Set 3
  export const fetchSet3 = async () => { await delay(100); return structuredClone(drinks); };
  export const updateSet3Section = async (key, newItems) => { await delay(100); drinks[key] = newItems; return structuredClone(drinks); };
  