import React, { useState } from "react";
import { useAppMenu } from "$lib/menuContext";
import styles from "../../styles/Admin/MenuCalculator.module.scss";

const MenuCalculator = () => {
  const {
    menu,
    cuisines,
    allMenus,
    cities,
    occasions,
    PreSelectMenuNinjaBox,
    ZipCodes,
  } = useAppMenu();

  const menuItems = allMenus;
  const [veg, setVeg] = useState(0);
  const [nonVeg, setNonVeg] = useState(0);
  const [selectedItem, setSelectedItem] = useState(menuItems[0]);
  const [quantity, setQuantity] = useState(1);

  const handleItemChange = (event) => {
    const itemId = parseInt(event.target.value);
    const item = menuItems.find((item) => item.id === itemId);
    setSelectedItem(item);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  const handleVegNonVegGuest = (name, value) => {
    if (value < 0 || !value) {
      name === "veg" ? setVeg(0) : setNonVeg(0);
    } else if (value < 5) {
      alert("Minimum " + name + " guest count should be 5");
      name === "veg" ? setVeg(5) : setNonVeg(5);
    } else {
      name === "veg" ? setVeg(value) : setNonVeg(value);
    }

  };

 
  const calculateTotalPrice = () => {
    if (!selectedItem) {
      return 0;
    }

    return Math.round(selectedItem.selling_price/12) * quantity;
  };

  return (
    <div className={styles.menuCalculator}>
      <h2>Menu Calculator</h2>
      <div className="row mt-3">
        <div className="col-md-6" >
          <p>Veg Guest</p>
          <input
            type="number"
            onBlur={(e) =>
              handleVegNonVegGuest("veg", parseInt(e.target.value))
            }
            min="0"
            defaultValue={veg}
          />
        </div>
      
        <div className="col-md-6" >
          <p>Non Veg Guest</p>
          <input
            type="number"
            onBlur={(e) =>
              handleVegNonVegGuest("nonVeg", parseInt(e.target.value))
            }
            min="0"
            defaultValue={veg}
          />
        </div>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="item">Select Item:</label>
        <select className="form-control" id="item" onChange={handleItemChange}>
          {menuItems.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <div className={styles.summary}>
        <ul>
          <li>Selected Item: {selectedItem ? selectedItem.name : "None"}</li>
          <li>Price: {selectedItem ? selectedItem.price : 0}</li>
          <li>Quantity: {quantity}</li>
          <li>Total Price: {calculateTotalPrice()}</li>
        </ul>
      </div>
    </div>
  );
};
export default MenuCalculator;
