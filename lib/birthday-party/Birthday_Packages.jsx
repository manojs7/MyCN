import React, { useState, useRef, useEffect } from 'react';
import styles from '/styles/BirthdayParty.module.scss';

const items = [
    { name: 'Item 1', price: 10 },
    { name: 'Item 2', price: 20 },
    { name: 'Item 3', price: 30 },
    { name: 'Item 4', price: 40 },
    { name: 'Item 5', price: 50 },
    { name: 'Item 6', price: 60 },
    { name: 'Item 7', price: 70 },
    { name: 'Item 8', price: 80 },
  ];
  
  function Item({ name, price }) {
    return (
      <div className="item">
        <h3>{name}</h3>
        <p>Price: {price}</p>
      </div>
    );
  }

const Birthday_Packages = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const options = [
        { id: 'option-1', label: 'Option 1' },
        { id: 'option-2', label: 'Option 2' },
        { id: 'option-3', label: 'Option 3' },
        { id: 'option-4', label: 'Option 4' },
        { id: 'option-5', label: 'Option 5' },
        { id: 'option-6', label: 'Option 6' },
    ];

    const handleOptionSelect = (optionId) => {
        if (selectedOptions.indexOf(optionId) === -1 && selectedOptions.length < 4) {
            setSelectedOptions([...selectedOptions, optionId]);
        } else if (selectedOptions.indexOf(optionId) !== -1) {
            setSelectedOptions(selectedOptions.filter((id) => id !== optionId));
        } else {
            alert('You can only select up to 4 options');
        }
    };

    //Starter selector
    const [showDiv, setShowDiv] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setShowDiv(false);
        }
    };

    const handleHover = () => {
        setShowDiv(true);
    };


    return (
        <div className={styles.mainBody}>
            <div className={styles.header}>
                <h2>BIRTHDAY <span>PARTY</span></h2>
                <div className={styles.btmContent}>
                    <h6>Outdoor Catering</h6>
                    <p>veg <span>Non-Veg</span></p>
                </div>
            </div>
            <div className={styles.pkgContainer}>
                <h3>-Packages-</h3>
                <div className={styles.pkgCards}>
                    <div className={styles.pkg1}>
                        <h5>GOLD</h5>
                        <div className={styles.cardBg}>
                            <h4>Rs.550/-</h4>
                            <div>
                                <div className='d-flex'>
                                    <p>Veg Snack-</p>
                                    <button onMouseEnter={handleHover}>Any 4</button>
                                    {showDiv && (<div className={styles.vegSnackOptions} ref={ref}>
                                        <ul>
                                            {options.map((option) => (
                                                <li key={option.id}>
                                                    <p>{option.label}</p>
                                                    <input htmlFor={option.id}
                                                        type="checkbox"
                                                        id={option.id}
                                                        checked={selectedOptions.indexOf(option.id) !== -1}
                                                        onChange={() => handleOptionSelect(option.id)}
                                                        disabled={selectedOptions.indexOf(option.id) === -1 && selectedOptions.length >= 4}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>)}
                                </div>
                                <div className='d-flex'>
                                    <p>Veg Snack-</p>
                                    <button>Any 3</button>
                                </div>
                                <div className='d-flex'>
                                    <p>Veg Snack-</p>
                                    <button>Any 2</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.pkg1}>
                        <h5>SILVER</h5>
                        <h4>Rs.450/-</h4>
                        <div>
                            <div className='d-flex'>
                                <p>Veg Snack-</p>
                                <button>View</button>
                            </div>
                            <div className='d-flex'>
                                <p>Veg Snack-</p>
                                <button>View</button>
                            </div>
                            <div className='d-flex'>
                                <p>Veg Snack-</p>
                                <button>View</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p>Selected options:</p>
                <ul>
                    {selectedOptions.map((optionId) => {
                        const option = options.find((opt) => opt.id === optionId);
                        return <li key={optionId}>{option.label}</li>;
                    })}
                </ul>
            </div>
            <div>
                <div className={styles.slidercontainer}>
                    <div className={styles.slider}>
                        {items.map((item, index) => (
                            <Item key={index} name={item.name} price={item.price} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Birthday_Packages