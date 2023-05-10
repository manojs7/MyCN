import React, { useState } from 'react'
import styles from '/styles/BirthdayParty.module.scss';

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
                                    <button>Any 4</button>
                                    <div className={styles.vegSnackOptions}>
                                        <ul>
                                            {options.map((option) => (
                                                <li key={option.id}>
                                                        <input htmlFor={option.id}
                                                            type="checkbox"
                                                            id={option.id}
                                                            checked={selectedOptions.indexOf(option.id) !== -1}
                                                            onChange={() => handleOptionSelect(option.id)}
                                                            disabled={selectedOptions.indexOf(option.id) === -1 && selectedOptions.length >= 4}
                                                        />
                                                    <p>{option.label}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
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
        </div>
    )
}

export default Birthday_Packages