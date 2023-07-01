import React, { useState } from 'react';

const Menu = () => {
  const [items] = useState([
    { id: 1, name: 'Chicken Biryani', category: 'nonveg', type: 'fried', price: 250 },
    { id: 2, name: 'Paneer Tikka', category: 'veg', type: 'grilled', price: 180 },
    { id: 3, name: 'Veg Fried Rice', category: 'veg', type: 'fried', price: 220 },
    { id: 4, name: 'Fish Curry', category: 'nonveg', type: 'curry', price: 300 },
    { id: 5, name: 'Chilli Chicken', category: 'nonveg', type: 'fried', price: 180 },
    { id: 6, name: 'Gobi Manchurian', category: 'veg', type: 'dry', price: 150 },
  ]);

  const [filters, setFilters] = useState({
    veg: false,
    fried: false,
    price: false,
  });

  const handleFilterChange = (filter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  const filteredItems = items.filter((item) => {
    if (filters.veg && item.category !== 'veg') {
      return false;
    }
    if (filters.fried && item.type !== 'fried') {
      return false;
    }
    if (filters.price && item.price <= 200) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={filters.veg}
            onChange={() => handleFilterChange('veg')}
          />
          Veg
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.fried}
            onChange={() => handleFilterChange('fried')}
          />
          Fried
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.price}
            onChange={() => handleFilterChange('price')}
          />
          Price 200
        </label>
      </div>
      <div>
        <h2>Menu</h2>
        <ul>
          {filteredItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
