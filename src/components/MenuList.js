import Salami from "../assets/pepperoni.jpg";
import Margherita from "../assets/margherita.jpg";
import Housespecial from "../assets/housespecial.jpg";
import Vegan from "../assets/vegan.jpg";
import Rucola from "../assets/rucola.jpg";
import Expensive from "../assets/expensive.jpg";
import Olive from "../assets/olive.jpg";
import HotSalami from "../assets/HotSalami.jpg"
import Diavola from "../assets/DiavolaPizza.jpg"
import Marinara from "../assets/marinara.jpeg"
import Spinach from "../assets/spinach.jpg"
import Tomatoes from "../assets/tomatoes.jpg"
import Mozzarella from "../assets/mozzarella.jpg"
import Mushroom from "../assets/funghi.jpg"
import Cheese from "../assets/4cheese.jpg"
/*import Ham from "../assets/ham.png"*/

export const MenuList = [
  {
    id: 1,
    name: "Salami Pizza",
    image: Salami,
    price: 10.99,
    description: "ingredients: tomato sauce, salami, mozzarella cheese",
    extras: [
      { name: "Cheese", price: 1.5 },
      { name: "Salami", price: 2.0 },
      { name: "Mushrooms", price: 1.2 },
      { name: "Olives", price: 1.0 },
      { name: "Ham", price: 2.5 },
      { name: "Mozzarella", price: 1.8 },
    ]
  },
  { 
    id: 2,
    name: "Margherita Pizza",
    image: Margherita,
    price: 11.99,
    description: "ingredients: tomato sauce, mozzarella cheese, basil",
    extras: [
      { name: "Cheese", price: 1.5 },
      { name: "Salami", price: 2.0 },
      { name: "Mushrooms", price: 1.2 },
      { name: "Olives", price: 1.0 },
      { name: "Ham", price: 2.5 },
      { name: "Mozzarella", price: 1.8 },
     
    ]
  },
  {
    id: 3,
    name: "House Special Pizza",
    image: Housespecial,
    price: 15.50,
    description: "ingredients: tomato sauce, cheese, oregano",
    extras: [
      { name: "Cheese", price: 1.5 },
      { name: "Salami", price: 2.0 },
      { name: "Mushrooms", price: 1.2 },
      { name: "Olives", price: 1.0 },
      { name: "Ham", price: 2.5 },
      { name: "Mozzarella", price: 1.8 },
    ]
  },
  {
    id: 4,
    name: "Vegan Pizza",
    image: Vegan,
    price: 12.99,
    description: "ingredients: tomato sauce, mozzarella cheese, corn, basil, fresh tomatoes, balsamic vinegar",
    extras: [
      { name: "Cheese", price: 1.5 },
      { name: "Salami", price: 2.0 },
      { name: "Mushrooms", price: 1.2 },
      { name: "Olives", price: 1.0 },
      { name: "Ham", price: 2.5 },
      { name: "Mozzarella", price: 1.8 },
    ]

  },
  {
    id: 5,
    name: "Rucola Pizza",
    image: Rucola,
    price: 11.99,
    description: "ingredients: tomato sauce, mozzarella cheese, rucola",
    extras: [
      { name: "Cheese", price: 1.5 },
      { name: "Salami", price: 2.0 },
      { name: "Mushrooms", price: 1.2 },
      { name: "Olives", price: 1.0 },
      { name: "Ham", price: 2.5 },
      { name: "Mozzarella", price: 1.8 },
    ]

  },
  {
    id: 6,
    name: "Salmon & Caviar Pizza",
    image: Expensive,
    price: 22.99,
    description: "ingredients: tomato sauce, mozzarella cheese, smoked salmon, caviar",
    extras: [
      { name: "Cheese", price: 1.5 },
      { name: "Salami", price: 2.0 },
      { name: "Mushrooms", price: 1.2 },
      { name: "Olives", price: 1.0 },
      { name: "Ham", price: 2.5 },
      { name: "Mozzarella", price: 1.8 },
    ]
  },
  {
    id: 7,
    name: "Tomatoes and Olives Pizza",
    image: Olive,
    price: 10.99,
    description: "ingredients: tomato sauce, mozzarella cheese, fresh tomatoes, green olives",
    extras: [
      { name: "Cheese", price: 1.5 },
      { name: "Salami", price: 2.0 },
      { name: "Mushrooms", price: 1.2 },
      { name: "Olives", price: 1.0 },
      { name: "Ham", price: 2.5 },
      { name: "Mozzarella", price: 1.8 },
    ]
  },
  {
    id: 8,
    name: "Hot Salami Pizza",
    image: HotSalami,
    price: 11.99,
    description: "ingredients: tomato sauce, mozzarella cheese, salami, black olives",
    extras: [
      { name: "Cheese", price: 1.5 },
      { name: "Salami", price: 2.0 },
      { name: "Mushrooms", price: 1.2 },
      { name: "Olives", price: 1.0 },
      { name: "Ham", price: 2.5 },
      { name: "Mozzarella", price: 1.8 },
    ]
  },
  {
    id: 9, 
    name: "Diavola Pizza",
    image: Diavola,
    price: 10.53,
    description: "ingredients: tomato sauce, mozzarella cheese, hot salami, capers",
    extras: [
      { name: "Cheese", price: 1.5 },
      { name: "Salami", price: 2.0 },
      { name: "Mushrooms", price: 1.2 },
      { name: "Olives", price: 1.0 },
      { name: "Ham", price: 2.5 },
      { name: "Mozzarella", price: 1.8 },
    ]
  },
  {
    id: 10,
    name: "Marinara Pizza",
    image: Marinara,
    price: 9.99,
    description: "ingredients: tomato sauce, oregano",
    extras: [
      { name: "Cheese", price: 1.5 },
      { name: "Salami", price: 2.0 },
      { name: "Mushrooms", price: 1.2 },
      { name: "Olives", price: 1.0 },
      { name: "Ham", price: 2.5 },
      { name: "Mozzarella", price: 1.8 },
    ]
  },
  {
    id: 11,
    name: "Spinach and Mozzarella Pizza",
    image: Spinach,
    price: 11.99,
    description: "ingredients: tomato sauce, oregano, spinach, fresh mozzarella cheese",
    extras: [
      { name: "Cheese", price: 1.5 },
      { name: "Salami", price: 2.0 },
      { name: "Mushrooms", price: 1.2 },
      { name: "Olives", price: 1.0 },
      { name: "Ham", price: 2.5 },
      { name: "Mozzarella", price: 1.8 },
    ]
  },
  {
    id: 12,
    name: "Fresh Tomatoes Pizza",
    image: Tomatoes,
    price: 10.99,
    description: "ingredients: basil, fresh tomatoes, fresh mozzarella cheese",
    extras: [
      { name: "Cheese", price: 1.5 },
      { name: "Salami", price: 2.0 },
      { name: "Mushrooms", price: 1.2 },
      { name: "Olives", price: 1.0 },
      { name: "Ham", price: 2.5 },
      { name: "Mozzarella", price: 1.8 },
    ]
  },
  {
    id: 13,
    name: "Buffalo Pizza",
    image: Mozzarella,
    price: 11.99,
    description: "ingredients: basil, tomato sauce, fresh mozzarella cheese",
    extras: [
      { name: "Cheese", price: 1.5 },
      { name: "Salami", price: 2.0 },
      { name: "Mushrooms", price: 1.2 },
      { name: "Olives", price: 1.0 },
      { name: "Ham", price: 2.5 },
      { name: "Mozzarella", price: 1.8 },
    ]
  },
  {
    id: 14,
    name: "Mushroom Pizza",
    image: Mushroom,
    price: 10.99,
    description: "ingredients: basil, tomato sauce, mozzarella cheese, mushrooms",
    extras: [
      { name: "Cheese", price: 1.5 },
      { name: "Salami", price: 2.0 },
      { name: "Mushrooms", price: 1.2 },
      { name: "Olives", price: 1.0 },
      { name: "Ham", price: 2.5 },
      { name: "Mozzarella", price: 1.8 },
    ]
  },
  {
    id: 15,
    name: "4 Cheese Pizza",
    image: Cheese,
    price: 11.99,
    description: "ingredients: basil, tomato sauce, mozzarella cheese, Parmesan cheese, Gorgonzola cheese, Fontina cheese",
    extras: [
      { name: "Cheese", price: 1.5 },
      { name: "Salami", price: 2.0 },
      { name: "Mushrooms", price: 1.2 },
      { name: "Olives", price: 1.0 },
      { name: "Ham", price: 2.5 },
      { name: "Mozzarella", price: 1.8 },
    ]
  },
 /* {
    id: 16,
    name: "Ham Pizza",
    image: Ham,
    price: 11.99,
    description: "ingredients: tomato sauce, mozzarella cheese, ham, mushrooms",
    extras: [
      { name: "Cheese", price: 1.5 },
      { name: "Salami", price: 2.0 },
      { name: "Mushrooms", price: 1.2 },
      { name: "Olives", price: 1.0 },
      { name: "Ham", price: 2.5 },
      { name: "Mozzarella", price: 1.8 },
    ]
  },*/
];