import React, { useState, useRef, useEffect } from 'react';
import styles from '/styles/BirthdayParty.module.scss';
import Image from 'next/image';

const Birthday_Packages = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [extraStarter, setExtraStarter] = useState([]);
    const [goldPackage, setGoldPackage] = useState([]);
    const [silverPackage, setSilverPackage] = useState([]);
    const [nvGoldPackage, setNvGoldPackage] = useState([]);
    const [nvSilverPackage, setNvSilverPackage] = useState([]);

    const [city, setCity] = useState();
    const [selectedDate, setSelectedDate] = useState();
    const [vegCount, setVegCount] = useState();
    const [nvCount, setNvCount] = useState();

    //packages
        const vegPackages = {
            goldPackage: {
                name: "GOLD",
                veg: true,
                price: "550",
                items: ["Veg Snack", "Veg Heavy Snack", "Dessert"],
                quantity: ["Any 4", "Any 3", "Any 2"],
                vegSnackQnty: 4,
                vegHeavySnackQnty: 3,
                dessertQnty: 2
            },
            silverPackage: {
                name: "SILVER",
                veg: true,
                price: "550",
                items: ["Veg Snack", "Veg Heavy Snack", "Dessert"],
                quantity: ["Any 3", "Any 3", "Any 2"],
                vegSnackQnty: 3,
                vegHeavySnackQnty: 3,
                dessertQnty: 2
            },
            nvGoldPackage: {
                name: "GOLD NV",
                veg: false,
                price: "650",
                items: ["Veg Snack", "Non Veg Snack", "Veg Heavy Snack", "NV Heavy Snack", "Dessert"],
                quantity: ["Any 2", "Any 3", "Any 2", "Any 1", "Any 2"],
                vegSnackQnty: 2,
                nonVegSnackQnty: 3,
                vegHeavySnackQnty: 2,
                nonVegHeavySnackQnty: 1,
                dessertQnty: 2
            },
            nvSilverPackage: {
                name: "SILVER NV",
                veg: false,
                price: "570",
                items: ["Veg Snack", "Non Veg Snack", "Veg Heavy Snack", "NV Heavy Snack", "Dessert"],
                quantity: ["Any 2", "Any 3", "Any 2", "Any 1", "Any 2"],
                vegSnackQnty: 2,
                nonVegSnackQnty: 3,
                vegHeavySnackQnty: 2,
                nonVegHeavySnackQnty: 1,
                dessertQnty: 2
            }
        }
        

        const selectPackageOne = () => {
            // Save packageOne data in session storage
            sessionStorage.setItem('packageOne', JSON.stringify(vegPackages.goldPackage));
        
            // Set the packageData state to trigger a re-render
            setGoldPackage(vegPackages.goldPackage);
        
            // Open new page to show the data
            window.open('/customiseBirthdayPkg', '_self');
            // return () => {
            //     sessionStorage.removeItem('packageOne' && 'packageTwo');
            //   };
          };

          const selectPackageTwo = () => {
            // Save packageOne data in session storage
            sessionStorage.setItem('packageOne', JSON.stringify(vegPackages.silverPackage));
        
            // Set the packageData state to trigger a re-render
            setSilverPackage(vegPackages.silverPackage);
        
            // Open new page to show the data
            window.open('/customiseBirthdayPkg', '_self');
            // return () => {
            //     sessionStorage.removeItem('packageOne' && 'packageTwo');
            //   };
          };

          const selectPackageThree = () => {
            // Save packageOne data in session storage
            sessionStorage.setItem('packageOne', JSON.stringify(vegPackages.nvGoldPackage));
        
            // Set the packageData state to trigger a re-render
            setNvGoldPackage(vegPackages.nvGoldPackage);
        
            // Open new page to show the data
            window.open('/customiseBirthdayPkg', '_self');
            // return () => {
            //     sessionStorage.removeItem('packageOne' && 'packageTwo');
            //   };
          };

          const selectPackageFour = () => {
            // Save packageOne data in session storage
            sessionStorage.setItem('packageOne', JSON.stringify(vegPackages.nvSilverPackage));
        
            // Set the packageData state to trigger a re-render
            setNvSilverPackage(vegPackages.nvSilverPackage);
        
            // Open new page to show the data
            window.open('/customiseBirthdayPkg', '_self');
            // return () => {
            //     sessionStorage.removeItem('packageOne' && 'packageTwo');
            //   };
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

    //background image
    const backgroundStyle = {
        backgroundImage: 'url("/birthdayParty/birthdayBg.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    //small png bg
    const smallPng = {
        backgroundImage: 'url("/birthdayParty/doodle 3.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    //bottom png bg
    const btmPng = {
        backgroundImage: 'url("/birthdayParty/bottomPng.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    //bottom png card bg
    const btmPngCard = {
        backgroundImage: 'url("/birthdayParty/Vector3.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    useEffect(() => {
        let selectedBirthdayPkg = JSON.parse(sessionStorage.getItem("selectedBirthdayPkg"));
        console.log('selectedBirthdayPkg', selectedBirthdayPkg)
        // sessionStorage.removeItem("dataSelected")
        if (selectedBirthdayPkg) {
          setCity(selectedBirthdayPkg["city"]);
          setSelectedDate(selectedBirthdayPkg["selectedDate"]);
          setVegCount(selectedBirthdayPkg["vegCount"]);
          setNvCount(selectedBirthdayPkg["nvCount"]);
    
        }
      }, []);

    return (
        <div style={backgroundStyle} className={styles.mainBody}>
            <div className={styles.headerSectn}>
                <div className={styles.logo}>
                    <Image src="/birthdayParty/birthdayPartyLogo.png" width="91px" height="74px"/>
                </div>
                <div className={styles.headerDetails}>
                    <div>
                        <h6>City: <span>{city}</span></h6>
                        <h6>Veg Count: <span>{vegCount}</span></h6>
                    </div>
                    <div>
                        <h6>Date: <span>{selectedDate}</span></h6>
                        <h6>NV Count: <span>{nvCount}</span></h6>
                    </div>
                </div>
            </div>
            <div className={styles.packagesContainer}>
                <h3>Select Your package</h3>
                <hr />
                <h4 id={styles.custTitle}>Customization Available</h4>
                <div className={styles.packages}>
                    <div className={styles.firstRow}>
                        <div className={styles.goldPkg}>
                            <div className={styles.blackbg}>
                                <div>
                                    <div id={styles.vector}>
                                        <Image src="/birthdayParty/Vectorr.png" height="24.6px" width="108.53px" />
                                    </div>
                                    <p>GOLD</p>
                                </div>
                                <div className={styles.insideContent}>
                                    <h4>₹ 550/-</h4>
                                    <p>Per Person</p>
                                    <div className={styles.btns}>
                                        <div id={styles.btnName}>
                                            <h6>Veg Snack</h6>
                                            <h6>Veg Heavy Snack</h6>
                                            <h6>Dessert</h6>
                                        </div>
                                        <div id={styles.greenBtn}>
                                            <h6>Any 4</h6>
                                            <h6>Any 3</h6>
                                            <h6>Any 2</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.goldPkg}>
                            <div className={styles.blackbg}>
                                <div>
                                    <div id={styles.vector}>
                                        <Image src="/birthdayParty/Vector2.png" height="24.6px" width="108.53px" />
                                    </div>
                                    <p style={{ marginLeft: "50px" }}>SILVER</p>
                                </div>
                                <div className={styles.insideContent}>
                                    <h4>₹ 450/-</h4>
                                    <p>Per Person</p>
                                    <div className={styles.btns}>
                                        <div id={styles.btnName}>
                                            <h6>Veg Snack</h6>
                                            <h6>Veg Heavy Snack</h6>
                                            <h6>Dessert</h6>
                                        </div>
                                        <div id={styles.greenBtn}>
                                            <h6>Any 3</h6>
                                            <h6>Any 2</h6>
                                            <h6>Any 1</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.selectBtn}>
                        <button onClick={selectPackageOne}>Select This Package</button>
                        <button onClick={selectPackageTwo}>Select This Package</button>
                    </div>
                    {nvCount >= 1 ? <div className={styles.secondRow}>
                        <div className={styles.nvGoldPkg}>
                            <div className={styles.blackbg}>
                                <div>
                                    <div id={styles.vector}>
                                        <Image src="/birthdayParty/Vectorr.png" height="24.6px" width="108.53px" />
                                    </div>
                                    <p style={{ marginLeft: "40px" }}>GOLD NV</p>
                                </div>
                                <div className={styles.insideContent}>
                                    <h4>₹ 650/-</h4>
                                    <p>Per Person</p>
                                    <div className={styles.btns}>
                                        <div id={styles.btnName}>
                                            <h6>Veg Snack</h6>
                                            <h6>Non Veg Snack</h6>
                                            <h6>Veg Heavy Snack</h6>
                                            <h6>NV Heavy Snack</h6>
                                            <h6>Dessert</h6>
                                        </div>
                                        <div id={styles.greenBtn}>
                                            <h6>Any 2</h6>
                                            <h6 style={{backgroundColor: "#BC0A01"}}>Any 3</h6>
                                            <h6>Any 2</h6>
                                            <h6 style={{backgroundColor: "#BC0A01"}}>Any 1</h6>
                                            <h6>Any 2</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.nvGoldPkg}>
                            <div className={styles.blackbg}>
                                <div>
                                    <div id={styles.vector}>
                                        <Image src="/birthdayParty/Vector2.png" height="24.6px" width="108.53px" />
                                    </div>
                                    <p style={{ marginLeft: "33px" }}>SILVER NV</p>
                                </div>
                                <div className={styles.insideContent}>
                                    <h4>₹ 570/-</h4>
                                    <p>Per Person</p>
                                    <div className={styles.btns}>
                                        <div id={styles.btnName}>
                                            <h6>Veg Snack</h6>
                                            <h6>Non Veg Snack</h6>
                                            <h6>Veg Heavy Snack</h6>
                                            <h6>NV Heavy Snack</h6>
                                            <h6>Dessert</h6>
                                        </div>
                                        <div id={styles.greenBtn}>
                                            <h6>Any 2</h6>
                                            <h6 style={{backgroundColor: "#BC0A01"}}>Any 2</h6>
                                            <h6>Any 1</h6>
                                            <h6 style={{backgroundColor: "#BC0A01"}}>Any 1</h6>
                                            <h6>Any 1</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : ""}
                    {nvCount >= 1 ?<div className={styles.selectBtn}>
                        <button onClick={selectPackageThree}>Select This Package</button>
                        <button onClick={selectPackageFour}>Select This Package</button>
                    </div> : "" }
                </div>
            </div>
            <div className={styles.bottomSectn} style={btmPng}>
                <div className={styles.top} style={btmPngCard}>
                    <h6>Fun Eatables, Live Counters<br />Main Course Add On's</h6>
                    <button>On Next Page</button>
                </div>
            </div>
            {/* <div className={styles.pkgContainer}>
                <h3>-Packages-</h3>
                <div className={styles.pkgCards}>
                    <div className={styles.pkg1}>
                        <h5>GOLD</h5>
                        <div className={styles.cardBg}>
                            <h4>Rs.550/-</h4>
                            <div>
                                <div className='d-flex justify-content-between'>
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
                                        <hr />
                                        <ul>
                                            {extraOptions.map((option) => (
                                                <li key={option.id} onClick={() => handleLiClick(option.id)}>
                                                    <p>{option.label}{!extraStarter.includes(option.id) && extraStarter.length >= 2 && <span>Ex</span>}</p>
                                                    <input htmlFor={option.id}
                                                        type="checkbox"
                                                        id={option.id}
                                                        checked={extraStarter.includes(option.id)}
                                                        onChange={() => handleCheckboxChange(option.id)}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>)}
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p style={{ textAlign: "start" }}>Veg Heavy Snack-</p>
                                    <button>Any 3</button>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p>Dessert-</p>
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
                                <button>Any 3</button>
                                <div className={styles.silverVegSnackContainer}>
                                        <ul>
                                            <li>
                                                <p>title</p>
                                                <input type="checkbox" />
                                            </li>
                                        </ul>
                                    </div>
                            </div>
                            <div className='d-flex'>
                                <p>Veg Heavy Snack-</p>
                                <button>Any 2</button>
                            </div>
                            <div className='d-flex'>
                                <p>Dessert-</p>
                                <button>Any 1</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div>
                <p>Selected options:</p>
                <ul>
                    {selectedOptions.map((optionId) => {
                        const option = options.find((opt) => opt.id === optionId);
                        return <li key={optionId}>{option.label}</li>;
                    })}
                </ul>
            </div>
            <div>
                <p>Extra items:</p>
                <ul>
                    {extraStarter.map((optionId) => {
                        const extraStarter = extraOptions.find((option) => option.id === optionId);
                        return <li key={extraStarter.id}>{extraStarter.label}</li>;
                    })}
                </ul>
            </div> */}
            {/* <div>
                <div className={styles.slidercontainer}>
                    <div className={styles.slider}>
                        {items.map((item, index) => (
                            <Item key={index} name={item.name} price={item.price} />
                        ))}
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Birthday_Packages