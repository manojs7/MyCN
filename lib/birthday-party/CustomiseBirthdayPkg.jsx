import React, { useRef, useState, useEffect } from 'react'
import styles from '/styles/BirthdayParty.module.scss';
import styles2 from '/styles/NewDiy.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faArrowLeftLong, faMagnifyingGlass, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const CustomiseBirthdayPkg = () => {

    const [selectedOptions, setSelectedOptions] = useState();
    const [isDisabled, setIsDisabled] = useState(true);
    const [isDisabledStarter, setIsDisabledStarter] = useState(true);
    const [showDropdown, setShowDropdown] = useState(true)
    const [isShown, setIsShown] = useState(false);
    const [data, setData] = useState([])

    const [packageName, setPackageName] = useState();
    const [packagePrice, setPackagePrice] = useState();
    const [itemsTypeName, setItemsTypeName] = useState([]);
    const [itemQuantity, setItemQuantity] = useState([]);

    const [city, setCity] = useState();
    const [selectedDate, setSelectedDate] = useState();
    const [vegCount, setVegCount] = useState();
    const [nvCount, setNvCount] = useState();

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
        const fetchPackageData = () => {
            // Retrieve the packageOne data from session storage
            const packageOneData = sessionStorage.getItem('packageOne');
            if (packageOneData) {
                const data = JSON.parse(packageOneData);
                setPackageName(data.name);
                setPackagePrice(data.price);
                setItemsTypeName(data.items);
                setItemQuantity(data.quantity);
            }
        };

        fetchPackageData();
    }, []);

    const [state, setState] = useState({
        showDiv1: true,
        showDiv2: false
    });

    //STARTER
    const handleDiv1Click = () => {
        setShowSelectedMenu(true);
        setShowDropdown(false)
        setSearchValue("")

        setState({
            showDiv1: false,
            showDiv2: true
        });

        const results = filteredData.filter(({ id: id1 }) => !checkedValues.some(({ id: id2 }) => id2 === id1));

        let selectedIds = [];
        for (let i = 0; i < results.length; i++) {
            selectedIds.push(results[i].id);
        }
        for (let j = 0; j < filteredData.length; j++) {
            if (!(selectedIds.includes(filteredData[j].id))) {
                filteredData[j].checked = 'checked';
            }
        }
    };

    const handleCancelClick = () => {

        setShowSelectedMenu(false);
        setShowDropdown(true);
        setState({
            showDiv1: true,
            showDiv2: false
        });
    };

    const deleteMenu = (e, item) => {
        const value = item;
        if (e.target.checked) {
            value.checked = '';
            setCheckedValues([...checkedValues, value]);
        } else {
            value.checked = '';
            setCheckedValues(checkedValues.filter(v => v.id !== value.id));
        }
        // setCheckedValues(checkedValues.filter(v => v.id !== item.id));
    }

    const itemList = [
        {
            id: 1,
            image: '/diy images/starter/image 23.png',
            name: 'Cheese Balls',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: true
        },
        {
            id: 2,
            image: '/diy images/starter/image 23.png',
            name: 'French Fries',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false
        },
        {
            id: 3,
            image: '/diy images/starter/image 23.png',
            name: 'Honey Chilly Potato',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: true
        },
        {
            id: 4,
            image: '/diy images/starter/image 23.png',
            name: 'Spring Roll',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false
        },
        {
            id: 5,
            image: '/diy images/starter/image 23.png',
            name: 'Veg Ball Manchurian',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false
        },
        {
            id: 6,
            image: '/diy images/starter/image 23.png',
            name: 'Crispy Fried Corn',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false
        },
        {
            id: 7,
            image: '/diy images/starter/image 23.png',
            name: 'Cottage Cheese Finger',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false
        },
        {
            id: 8,
            image: '/diy images/starter/image 23.png',
            name: 'Cocktail Samosa',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false
        },
    ]

    const [searchValue, setSearchValue] = React.useState('');
    const [showSelectedMenu, setShowSelectedMenu] = useState(false);

    const searchStarter = (e) => {
        setSearchValue(e.target.value);
    };

    const filteredData = data.filter((temp) =>
        temp.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    const [checkedValues, setCheckedValues] = React.useState([]);

    const [alertShown, setAlertShown] = useState(false);

    const handleCheckboxChange = (e, item) => {
        const value = item;
        if (e.target.checked) {
            if (checkedValues.length >= 3 && !alertShown) {
                alert("If you choose more items, there will be additional charges.");
                setAlertShown(true);
            }
            value.checked = 'checked';
            setCheckedValues([...checkedValues, value]);
        } else {
            value.checked = '';
            setCheckedValues(checkedValues.filter((v) => v.id !== value.id));
        }
    };

    const outerDivRef = useRef(null);

    useEffect(() => {
        setData(itemList)
        function handleClickOutside(event) {
            if (outerDivRef.current && !outerDivRef.current.contains(event.target)) {
                handleCancelClick();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


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

    //pkg card
    const titlebg = {
        backgroundImage: 'url("/birthdayParty/Vectorr.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    return (
        <div style={backgroundStyle} className={styles.mainBody}>
            {/* <div style={smallPng}>
                <div className={styles.header}>
                    <div className='pt-5 text-center'>
                        <Image src="/caterNinja logo/caterninja.webp" height="22.03px" width="114.16px" />
                    </div>
                    <h2>BIRTHDAY <span>PARTY</span></h2>
                    <div className={styles.btmContent}>
                        <h6>Outdoor Catering</h6>
                        <p>VEG <span> NON-VEG</span></p>
                    </div>
                </div>
            </div> */}
            <div className={styles.headerSectn}>
                <div className={styles.logo}>
                    <Image src="/birthdayParty/birthdayPartyLogo.png" width="91px" height="74px" />
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
            <div className={styles.customisePkgContainer}>
                <h3>Customise Your package</h3>
                <hr />
                <div className={styles.pkgCard}>
                    <div className={styles.blackbg}>
                        <div style={titlebg} id={styles.titlebg}>
                            <h4>{packageName}</h4>
                        </div>
                        <div className={styles.cardinsideContent}>
                            <div className='text-center'>
                                <h4>₹ {packagePrice}</h4>
                                <p>Per Person</p>
                            </div>
                            <div className={styles.btns}>
                                <div id={styles.btnName}>
                                    {itemsTypeName.map((iname, index) => (<h6 key={index}>{iname}</h6>))}
                                </div>
                                <div id={styles.greenBtn}>
                                    {itemQuantity.map((iqtnty, index) => (<h6 key={index}>{iqtnty}</h6>))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.itemsSelectionContainer}>
                <div className={styles.vegSnackContainer}>
                    <h3>Veg Snack</h3>
                    {showDropdown && (<div onClick={handleDiv1Click} className={styles.selectItemSearchBox} id="srchbr">
                        <h6><FontAwesomeIcon icon={faMagnifyingGlass} /> Select a Snack</h6>
                        <h6><FontAwesomeIcon icon={faAngleDown} /> Click here to select</h6>
                    </div>)}
                </div>
                {/* {showDropdown && (<div onClick={handleDiv1Click} className={styles2.starterSearchBtn} id="srchbr">
                    <p><FontAwesomeIcon icon={faMagnifyingGlass} />  Select Starter</p>
                    <span><FontAwesomeIcon icon={faAngleDown} />  Click here to select</span>
                </div>
                )} */}
                <div className={styles2.selectedStarterContainer} style={{ marginTop: "10px" }}>
                    {!showSelectedMenu && checkedValues.map((item, index) => (<div className={styles2.fstItem} key={index}>
                        <img className={styles2.itemImage} src="/diy images/starter/image 23.png" />
                        <div className={styles2.itemDetailsContainer}>
                            {item.veg === true ? <img className={styles2.vegLogo} src='/diy images/vegLogo.png' /> : <img className={styles2.vegLogo} src='/diy images/Group 962.png' />}
                            <div>
                                <h4>{item.name}</h4>
                                <p>{item.description}</p>
                            </div>
                            {/* <div>
                                <div className={styles2.quantityBtn}>
                                    <button>-</button>
                                    <h6>00pcs</h6>
                                    <button>+</button>
                                </div>
                                <div className={styles2.recQnty}>
                                    <p>Recommended Qt.</p>
                                </div>
                            </div> */}
                            <div>
                                <img className={styles2.trassLogo} src="/diy images/trash-alt.png" onClick={(e) => deleteMenu(e, item)} />
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                {showSelectedMenu && (<div ref={outerDivRef} className={styles2.starterMenuContainer}>
                    <div id={styles2.starterSearchContent}>
                        <div>
                            <input type="text"
                                value={searchValue}
                                onChange={searchStarter}
                                placeholder="Search Starter" />
                            <div id={styles2.starterList}>
                                <ul>
                                    {filteredData.map((item, index) => (
                                        <li key={item.id}>
                                            <div className='d-flex justify-content-between'>
                                                <div id={styles2.insideDivLi}>
                                                    <img src={item.image} width="30.05px" height="26.54px" />
                                                    {item.veg === true ? <img className={styles2.vegLogo} src='/diy images/vegLogo.png' /> : <img className={styles2.vegLogo} src='/diy images/Group 962.png' />}
                                                    <p>{item.name}<br /><span>{item.description}</span></p>
                                                </div>
                                                <div>
                                                    <input id={item.id} type="checkbox" checked={item.checked} value={item.id} onChange={(e) => handleCheckboxChange(e, item)} />
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div id={styles2.listInsideBtn}>
                                <button onClick={handleCancelClick}>Done</button>
                            </div>
                        </div>
                    </div>
                </div>)}
                <div className={styles2.starterBtmLine}>
                    <hr />
                </div>
                <div className={styles2.addMoreBtn}>
                    <button onClick={handleDiv1Click}>+ Add More</button>
                </div>
            </div>
            <div className={styles.bottomSectn} style={btmPng}>
                <div className={styles.top} style={btmPngCard}>
                    <h6>Fun Eatables, Live Counters<br />Main Course Add On's</h6>
                    <button>On <span>Next</span> Page</button>
                </div>
            </div>
        </div>
    )
}

export default CustomiseBirthdayPkg