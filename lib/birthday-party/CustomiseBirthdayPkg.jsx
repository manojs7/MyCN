import React, { useRef, useState, useEffect } from 'react'
import styles from '/styles/BirthdayParty.module.scss';
import styles2 from '/styles/NewDiy.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faArrowLeftLong, faMagnifyingGlass, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const CustomiseBirthdayPkg = () => {

    const [selectedOptions, setSelectedOptions] = useState();
    const [isDisabled, setIsDisabled] = useState(true);
    const [isDisabledStarter, setIsDisabledStarter] = useState(true);
    const [showDropdown, setShowDropdown] = useState(true)
    const [showDropdown2, setShowDropdown2] = useState(true)
    const [showDropdown3, setShowDropdown3] = useState(true)
    const [showDropdown4, setShowDropdown4] = useState(true)
    const [isShown, setIsShown] = useState(false);
    const [data, setData] = useState([])
    const [data2, setData2] = useState([])
    const [data3, setData3] = useState([])
    const [data4, setData4] = useState([])

    const [packageName, setPackageName] = useState();
    const [packagePrice, setPackagePrice] = useState();
    const [itemsTypeName, setItemsTypeName] = useState([]);
    const [itemQuantity, setItemQuantity] = useState([]);

    const [city, setCity] = useState();
    const [selectedDate, setSelectedDate] = useState();
    const [vegCount, setVegCount] = useState();
    const [nvCount, setNvCount] = useState();

    const [vegSnackQnty, setVegSnackQnty] = useState();
    const [nvegSnackQnty, setNvegSnackQnty] = useState();
    const [vegHeavySnackQnty, setVegHeavySnackQnty] = useState();
    const [nonVegHeavySnackQnty, setNonVegHeavySnackQnty] = useState();
    const [dessertQnty, setDessertQnty] = useState();

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
                setVegSnackQnty(data.vegSnackQnty);
                setNvegSnackQnty(data.nonVegSnackQnty);
                setVegHeavySnackQnty(data.vegHeavySnackQnty);
                setNonVegHeavySnackQnty(data.nonVegHeavySnackQnty);
            }
        };

        fetchPackageData();
    }, []);

    const [state, setState] = useState({
        showDiv1: true,
        showDiv2: false
    });

    //VEG SNACK SELECTION
    const selectVegSnack = () => {
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

    //VEG HEAVY SNACK SELECTION
    const selectVegHeavySnack = () => {
        setShowSelectedMenu2(true);
        setShowDropdown2(false)
        setSearchValue2("")

        setState({
            showDiv1: false,
            showDiv2: true
        });

        const results = vegHeavySnackData.filter(({ id: id1 }) => !checkedValues2.some(({ id: id2 }) => id2 === id1));

        let selectedIds = [];
        for (let i = 0; i < results.length; i++) {
            selectedIds.push(results[i].id);
        }
        for (let j = 0; j < vegHeavySnackData.length; j++) {
            if (!(selectedIds.includes(vegHeavySnackData[j].id))) {
                vegHeavySnackData[j].checked = 'checked';
            }
        }
    };

    //NON VEG SNACK SELECTION
    const selectNonVegSnack = () => {
        setShowSelectedMenu3(true);
        setShowDropdown3(false)
        setSearchValue3("")

        setState({
            showDiv1: false,
            showDiv2: true
        });

        const results = nonVegSnackData.filter(({ id: id1 }) => !checkedValues3.some(({ id: id2 }) => id2 === id1));

        let selectedIds = [];
        for (let i = 0; i < results.length; i++) {
            selectedIds.push(results[i].id);
        }
        for (let j = 0; j < nonVegSnackData.length; j++) {
            if (!(selectedIds.includes(nonVegSnackData[j].id))) {
                nonVegSnackData[j].checked = 'checked';
            }
        }
    };

    //NON VEG HEAVY SNACK SELECTION
    const selectNonVegHeavySnack = () => {
        setShowSelectedMenu4(true);
        setShowDropdown4(false)
        setSearchValue4("")

        setState({
            showDiv1: false,
            showDiv2: true
        });

        const results = nonVegHeavySnackData.filter(({ id: id1 }) => !checkedValues4.some(({ id: id2 }) => id2 === id1));

        let selectedIds = [];
        for (let i = 0; i < results.length; i++) {
            selectedIds.push(results[i].id);
        }
        for (let j = 0; j < nonVegHeavySnackData.length; j++) {
            if (!(selectedIds.includes(nonVegHeavySnackData[j].id))) {
                nonVegHeavySnackData[j].checked = 'checked';
            }
        }
    };

    const handleCancelClick = () => {

        setShowSelectedMenu(false);
        setShowSelectedMenu2(false);
        setShowSelectedMenu3(false);
        setShowSelectedMenu4(false);
        setShowDropdown(true);
        setShowDropdown2(true);
        setShowDropdown3(true);
        setShowDropdown4(true);
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

    const deletVegHeavySnack = (e, item) => {
        const value = item;
        if (e.target.checked) {
            value.checked = '';
            setCheckedValues2([...checkedValues2, value]);
        } else {
            value.checked = '';
            setCheckedValues2(checkedValues2.filter(v => v.id !== value.id));
        }
        // setCheckedValues(checkedValues.filter(v => v.id !== item.id));
    }

    const deleteNonVegSnack = (e, item) => {
        const value = item;
        if (e.target.checked) {
            value.checked = '';
            setCheckedValues3([...checkedValues3, value]);
        } else {
            value.checked = '';
            setCheckedValues3(checkedValues3.filter(v => v.id !== value.id));
        }
        // setCheckedValues(checkedValues.filter(v => v.id !== item.id));
    }

    const deleteNonVegHeavySnack = (e, item) => {
        const value = item;
        if (e.target.checked) {
            value.checked = '';
            setCheckedValues4([...checkedValues4, value]);
        } else {
            value.checked = '';
            setCheckedValues4(checkedValues4.filter(v => v.id !== value.id));
        }
        // setCheckedValues(checkedValues.filter(v => v.id !== item.id));
    }

    //veg snack data
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
            veg: true
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
            veg: true
        },
        {
            id: 5,
            image: '/diy images/starter/image 23.png',
            name: 'Veg Ball Manchurian',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true
        },
        {
            id: 6,
            image: '/diy images/starter/image 23.png',
            name: 'Crispy Fried Corn',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true
        },
        {
            id: 7,
            image: '/diy images/starter/image 23.png',
            name: 'Cottage Cheese Finger',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true
        },
        {
            id: 8,
            image: '/diy images/starter/image 23.png',
            name: 'Cocktail Samosa',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true
        },
    ]

    //veg heavy snack data
    const vegHeavySnackDataList = [
        {
            id: 1,
            image: '/diy images/starter/image 23.png',
            name: 'Veg Sandwich',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: true
        },
        {
            id: 2,
            image: '/diy images/starter/image 23.png',
            name: 'Pv Bhaji / Vada Pav',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true
        },
        {
            id: 3,
            image: '/diy images/starter/image 23.png',
            name: 'Noodles & Manchurian',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: true
        },
        {
            id: 4,
            image: '/diy images/starter/image 23.png',
            name: 'Mini Sliders / Veg Burger',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true
        },
        {
            id: 5,
            image: '/diy images/starter/image 23.png',
            name: 'Hot Dog Paneer',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true
        },
        {
            id: 6,
            image: '/diy images/starter/image 23.png',
            name: 'Soya Kheema Pav',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true
        },
        {
            id: 7,
            image: '/diy images/starter/image 23.png',
            name: 'Pasta-White/Tomato Sauce',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true
        },
        {
            id: 8,
            image: '/diy images/starter/image 23.png',
            name: 'Noodles',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true
        },
        {
            id: 9,
            image: '/diy images/starter/image 23.png',
            name: 'Fried Rice',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true
        },
    ]

    //non veg snack data
    const nonVegSnackDataList = [
        {
            id: 1,
            image: '/diy images/starter/image 23.png',
            name: 'Chicken Tikka',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: false
        },
        {
            id: 2,
            image: '/diy images/starter/image 23.png',
            name: 'Chicken Nuggets',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false
        },
        {
            id: 3,
            image: '/diy images/starter/image 23.png',
            name: 'Chicken Manchurian',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: false
        },
        {
            id: 4,
            image: '/diy images/starter/image 23.png',
            name: 'Crispy Fried Chicken',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false
        },
        {
            id: 5,
            image: '/diy images/starter/image 23.png',
            name: 'Fish Finger',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false
        },
        {
            id: 6,
            image: '/diy images/starter/image 23.png',
            name: 'Fish 65',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false
        },
        {
            id: 7,
            image: '/diy images/starter/image 23.png',
            name: 'Chicken Tikka',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false
        },
        {
            id: 8,
            image: '/diy images/starter/image 23.png',
            name: 'Chicken Spring Roll',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false
        }
    ]

    //non veg heavy snack data
    const nonVegHeavySnackDataList = [
        {
            id: 1,
            image: '/diy images/starter/image 23.png',
            name: 'Hot Dog Chicken',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: false
        },
        {
            id: 2,
            image: '/diy images/starter/image 23.png',
            name: 'Chicken Sandwiches',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false
        },
        {
            id: 3,
            image: '/diy images/starter/image 23.png',
            name: 'Chicken Kheema Pav',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: false
        },
        {
            id: 4,
            image: '/diy images/starter/image 23.png',
            name: 'Chicken Burger',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false
        },
        {
            id: 5,
            image: '/diy images/starter/image 23.png',
            name: 'Chicken White Sauce Pasta',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false
        },
        {
            id: 6,
            image: '/diy images/starter/image 23.png',
            name: 'Chicken Red Sauce Pasta',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false
        },
        {
            id: 7,
            image: '/diy images/starter/image 23.png',
            name: 'Chicken Noodles',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false
        },
        {
            id: 8,
            image: '/diy images/starter/image 23.png',
            name: 'Chicken Fried Rice',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false
        }
    ]

    const [searchValue, setSearchValue] = React.useState('');
    const [searchValue2, setSearchValue2] = React.useState('');
    const [searchValue3, setSearchValue3] = React.useState('');
    const [searchValue4, setSearchValue4] = React.useState('');
    const [showSelectedMenu, setShowSelectedMenu] = useState(false);
    const [showSelectedMenu2, setShowSelectedMenu2] = useState(false);
    const [showSelectedMenu3, setShowSelectedMenu3] = useState(false);
    const [showSelectedMenu4, setShowSelectedMenu4] = useState(false);

    const searchStarter = (e) => {
        setSearchValue(e.target.value);
    };

    const searchStarter2 = (e) => {
        setSearchValue2(e.target.value);
    };

    const searchStarter3 = (e) => {
        setSearchValue3(e.target.value);
    };

    const searchStarter4 = (e) => {
        setSearchValue4(e.target.value);
    };

    const filteredData = data.filter((temp) =>
        temp.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    const vegHeavySnackData = data2.filter((temp) =>
        temp.name.toLowerCase().includes(searchValue2.toLowerCase())
    );
    const nonVegSnackData = data3.filter((temp) =>
        temp.name.toLowerCase().includes(searchValue3.toLowerCase())
    );
    const nonVegHeavySnackData = data4.filter((temp) =>
        temp.name.toLowerCase().includes(searchValue4.toLowerCase())
    );

    const [checkedValues, setCheckedValues] = React.useState([]);
    const [checkedValues2, setCheckedValues2] = React.useState([]);
    const [checkedValues3, setCheckedValues3] = React.useState([]);
    const [checkedValues4, setCheckedValues4] = React.useState([]);

    const [alertShown, setAlertShown] = useState(false);
    const [alertShown2, setAlertShown2] = useState(false);
    const [alertShown3, setAlertShown3] = useState(false);
    const [alertShown4, setAlertShown4] = useState(false);

    const handleCheckboxChange = (e, item) => {
        const value = item;
        if (e.target.checked) {
            if (checkedValues.length >= vegSnackQnty && !alertShown) {
                Swal.fire({
                    title: "Reminder",
                    text: "Respective Charges will be applied to extra selected items in final quote.",
                    icon: "warning",
                    confirmButtonText: "OK",
                });
                setAlertShown(true);
            }
            value.checked = 'checked';
            setCheckedValues([...checkedValues, value]);
        } else {
            value.checked = '';
            setCheckedValues(checkedValues.filter((v) => v.id !== value.id));
        }
    };

    const handleCheckboxChange2 = (e, item) => {
        const value = item;
        if (e.target.checked) {
            if (checkedValues2.length >= vegHeavySnackQnty && !alertShown2) {
                Swal.fire({
                    title: "Reminder",
                    text: "Respective Charges will be applied to extra selected items in final quote.",
                    icon: "warning",
                    confirmButtonText: "OK",
                });
                setAlertShown2(true);
            }
            value.checked = 'checked';
            setCheckedValues2([...checkedValues2, value]);
        } else {
            value.checked = '';
            setCheckedValues2(checkedValues2.filter((v) => v.id !== value.id));
        }
    };

    const handleCheckboxChange3 = (e, item) => {
        const value = item;
        if (e.target.checked) {
            if (checkedValues3.length >= nvegSnackQnty && !alertShown3) {
                Swal.fire({
                    title: "Reminder",
                    text: "Respective Charges will be applied to extra selected items in final quote.",
                    icon: "warning",
                    confirmButtonText: "OK",
                });
                setAlertShown3(true);
            }
            value.checked = 'checked';
            setCheckedValues3([...checkedValues3, value]);
        } else {
            value.checked = '';
            setCheckedValues3(checkedValues3.filter((v) => v.id !== value.id));
        }
    };

    const handleCheckboxChange4 = (e, item) => {
        const value = item;
        if (e.target.checked) {
            if (checkedValues4.length >= nonVegHeavySnackQnty && !alertShown4) {
                Swal.fire({
                    title: "Reminder",
                    text: "Respective Charges will be applied to extra selected items in final quote.",
                    icon: "warning",
                    confirmButtonText: "OK",
                });
                setAlertShown4(true);
            }
            value.checked = 'checked';
            setCheckedValues4([...checkedValues4, value]);
        } else {
            value.checked = '';
            setCheckedValues4(checkedValues4.filter((v) => v.id !== value.id));
        }
    };

    const outerDivRef = useRef(null);

    useEffect(() => {
        setData(itemList)
        setData2(vegHeavySnackDataList)
        setData3(nonVegSnackDataList)
        setData4(nonVegHeavySnackDataList)
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
        backgroundImage: 'url("/birthdayParty/customisePkgnamecard.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: "27px"
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
                <div className={styles.pkgCard}  >
                    <div className={styles.blackbg}>
                        <div style={titlebg} id={styles.titlebg}>
                            <h4>{packageName}</h4>
                        </div>
                        <div className={styles.cardinsideContent}>
                            {/* <div className='text-center'>
                                <h4>₹ {packagePrice}</h4>
                                <p>Per Person</p>
                            </div> */}
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

            {/* VEG SNACKS SELECTION */}

            <div className={styles.itemsSelectionContainer}>
                <div className={styles.vegSnackContainer}>
                    <h3>Veg Snack</h3>
                    {showDropdown && (<div onClick={selectVegSnack} className={styles.selectItemSearchBox} id="srchbr">
                        <h6><FontAwesomeIcon icon={faMagnifyingGlass} /> Select a Snack</h6>
                        <h6><FontAwesomeIcon icon={faAngleDown} /> Click here to select</h6>
                    </div>)}
                </div>
                {/* {showDropdown && (<div onClick={selectVegSnack} className={styles2.starterSearchBtn} id="srchbr">
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
                                {/* OLD CODE <ul>
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
                                </ul> */}
                                <ul>
                                    {filteredData
                                        .sort((a, b) => (a.checked === b.checked ? 0 : a.checked ? -1 : 1))
                                        .map((item, index) => (
                                            <li key={item.id}>
                                                <div className='d-flex justify-content-between'>
                                                    <div id={styles2.insideDivLi}>
                                                        <img src={item.image} width="30.05px" height="26.54px" />
                                                        {item.veg === true ? (
                                                            <img className={styles2.vegLogo} src='/diy images/vegLogo.png' />
                                                        ) : (
                                                            <img className={styles2.vegLogo} src='/diy images/Group 962.png' />
                                                        )}
                                                        <p>
                                                            {item.name}
                                                            <br />
                                                            <span>{item.description}</span>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <input
                                                            id={item.id}
                                                            type="checkbox"
                                                            checked={item.checked}
                                                            value={item.id}
                                                            onChange={(e) => handleCheckboxChange(e, item)}
                                                        />
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
                    <button onClick={selectVegSnack}>+ Add {vegSnackQnty} items</button>
                </div>
            </div>

            {/* VEG HEAVY SNACK */}

            <div className={styles.itemsSelectionContainer}>
                <div className={styles.vegSnackContainer}>
                    <h3>Veg Heavy Snack</h3>
                    {showDropdown2 && (<div onClick={selectVegHeavySnack} className={styles.selectItemSearchBox} id="srchbr">
                        <h6><FontAwesomeIcon icon={faMagnifyingGlass} /> Select a Snack</h6>
                        <h6><FontAwesomeIcon icon={faAngleDown} /> Click here to select</h6>
                    </div>)}
                </div>
                <div className={styles2.selectedStarterContainer} style={{ marginTop: "10px" }}>
                    {!showSelectedMenu2 && checkedValues2.map((item, index) => (<div className={styles2.fstItem} key={index}>
                        <img className={styles2.itemImage} src="/diy images/starter/image 23.png" />
                        <div className={styles2.itemDetailsContainer}>
                            {item.veg === true ? <img className={styles2.vegLogo} src='/diy images/vegLogo.png' /> : <img className={styles2.vegLogo} src='/diy images/Group 962.png' />}
                            <div>
                                <h4>{item.name}</h4>
                                <p>{item.description}</p>
                            </div>
                            <div>
                                <img className={styles2.trassLogo} src="/diy images/trash-alt.png" onClick={(e) => deletVegHeavySnack(e, item)} />
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                {showSelectedMenu2 && (<div ref={outerDivRef} className={styles2.starterMenuContainer}>
                    <div id={styles2.starterSearchContent}>
                        <div>
                            <input type="text"
                                value={searchValue2}
                                onChange={searchStarter2}
                                placeholder="Search Starter" />
                            <div id={styles2.starterList}>
                                <ul>
                                    {vegHeavySnackData
                                        .sort((a, b) => (a.checked === b.checked ? 0 : a.checked ? -1 : 1))
                                        .map((item, index) => (
                                            <li key={item.id}>
                                                <div className='d-flex justify-content-between'>
                                                    <div id={styles2.insideDivLi}>
                                                        <img src={item.image} width="30.05px" height="26.54px" />
                                                        {item.veg === true ? (
                                                            <img className={styles2.vegLogo} src='/diy images/vegLogo.png' />
                                                        ) : (
                                                            <img className={styles2.vegLogo} src='/diy images/Group 962.png' />
                                                        )}
                                                        <p>
                                                            {item.name}
                                                            <br />
                                                            <span>{item.description}</span>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <input
                                                            id={item.id}
                                                            type="checkbox"
                                                            checked={item.checked}
                                                            value={item.id}
                                                            onChange={(e) => handleCheckboxChange2(e, item)}
                                                        />
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
                    <button onClick={selectVegHeavySnack}>+ Add {vegHeavySnackQnty} Items</button>
                </div>
            </div>

            {/* NON VEG SNACK */}

            {nvCount >= 1 ?<div className={styles.itemsSelectionContainer}>
                <div className={styles.vegSnackContainer}>
                    <h3>Non Veg Snack</h3>
                    {showDropdown3 && (<div onClick={selectNonVegSnack} className={styles.selectItemSearchBox} id="srchbr">
                        <h6><FontAwesomeIcon icon={faMagnifyingGlass} /> Select a Snack</h6>
                        <h6><FontAwesomeIcon icon={faAngleDown} /> Click here to select</h6>
                    </div>)}
                </div>
                <div className={styles2.selectedStarterContainer} style={{ marginTop: "10px" }}>
                    {!showSelectedMenu3 && checkedValues3.map((item, index) => (<div className={styles2.fstItem} key={index}>
                        <img className={styles2.itemImage} src="/diy images/starter/image 23.png" />
                        <div className={styles2.itemDetailsContainer}>
                            {item.veg === true ? <img className={styles2.vegLogo} src='/diy images/vegLogo.png' /> : <img className={styles2.vegLogo} src='/diy images/Group 962.png' />}
                            <div>
                                <h4>{item.name}</h4>
                                <p>{item.description}</p>
                            </div>
                            <div>
                                <img className={styles2.trassLogo} src="/diy images/trash-alt.png" onClick={(e) => deleteNonVegSnack(e, item)} />
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                {showSelectedMenu3 && (<div ref={outerDivRef} className={styles2.starterMenuContainer}>
                    <div id={styles2.starterSearchContent}>
                        <div>
                            <input type="text"
                                value={searchValue3}
                                onChange={searchStarter3}
                                placeholder="Search Starter" />
                            <div id={styles2.starterList}>
                                <ul>
                                    {nonVegSnackData
                                        .sort((a, b) => (a.checked === b.checked ? 0 : a.checked ? -1 : 1))
                                        .map((item, index) => (
                                            <li key={item.id}>
                                                <div className='d-flex justify-content-between'>
                                                    <div id={styles2.insideDivLi}>
                                                        <img src={item.image} width="30.05px" height="26.54px" />
                                                        {item.veg === true ? (
                                                            <img className={styles2.vegLogo} src='/diy images/vegLogo.png' />
                                                        ) : (
                                                            <img className={styles2.vegLogo} src='/diy images/Group 962.png' />
                                                        )}
                                                        <p>
                                                            {item.name}
                                                            <br />
                                                            <span>{item.description}</span>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <input
                                                            id={item.id}
                                                            type="checkbox"
                                                            checked={item.checked}
                                                            value={item.id}
                                                            onChange={(e) => handleCheckboxChange3(e, item)}
                                                        />
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
                    <button onClick={selectNonVegSnack}>+ Add {nvegSnackQnty} items</button>
                </div>
            </div> : "" }
            {/* NON VEG HEAVY SNACK */}

            {nvCount >= 1 ?<div className={styles.itemsSelectionContainer}>
                <div className={styles.vegSnackContainer}>
                    <h3>Non Veg Heavy Snack</h3>
                    {showDropdown4 && (<div onClick={selectNonVegHeavySnack} className={styles.selectItemSearchBox} id="srchbr">
                        <h6><FontAwesomeIcon icon={faMagnifyingGlass} /> Select a Snack</h6>
                        <h6><FontAwesomeIcon icon={faAngleDown} /> Click here to select</h6>
                    </div>)}
                </div>
                <div className={styles2.selectedStarterContainer} style={{ marginTop: "10px" }}>
                    {!showSelectedMenu4 && checkedValues4.map((item, index) => (<div className={styles2.fstItem} key={index}>
                        <img className={styles2.itemImage} src="/diy images/starter/image 23.png" />
                        <div className={styles2.itemDetailsContainer}>
                            {item.veg === true ? <img className={styles2.vegLogo} src='/diy images/vegLogo.png' /> : <img className={styles2.vegLogo} src='/diy images/Group 962.png' />}
                            <div>
                                <h4>{item.name}</h4>
                                <p>{item.description}</p>
                            </div>
                            <div>
                                <img className={styles2.trassLogo} src="/diy images/trash-alt.png" onClick={(e) => deleteNonVegHeavySnack(e, item)} />
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                {showSelectedMenu4 && (<div ref={outerDivRef} className={styles2.starterMenuContainer}>
                    <div id={styles2.starterSearchContent}>
                        <div>
                            <input type="text"
                                value={searchValue4}
                                onChange={searchStarter4}
                                placeholder="Search Starter" />
                            <div id={styles2.starterList}>
                                <ul>
                                    {nonVegHeavySnackData
                                        .sort((a, b) => (a.checked === b.checked ? 0 : a.checked ? -1 : 1))
                                        .map((item, index) => (
                                            <li key={item.id}>
                                                <div className='d-flex justify-content-between'>
                                                    <div id={styles2.insideDivLi}>
                                                        <img src={item.image} width="30.05px" height="26.54px" />
                                                        {item.veg === true ? (
                                                            <img className={styles2.vegLogo} src='/diy images/vegLogo.png' />
                                                        ) : (
                                                            <img className={styles2.vegLogo} src='/diy images/Group 962.png' />
                                                        )}
                                                        <p>
                                                            {item.name}
                                                            <br />
                                                            <span>{item.description}</span>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <input
                                                            id={item.id}
                                                            type="checkbox"
                                                            checked={item.checked}
                                                            value={item.id}
                                                            onChange={(e) => handleCheckboxChange4(e, item)}
                                                        />
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
                    <button onClick={selectNonVegHeavySnack}>+ Add {nonVegHeavySnackQnty} items</button>
                </div>
            </div> : "" }
            <div className={styles.addonsbtn}>
                <button onClick={(()=>{window.open('/birthdayAddOns')})}>Add Ons</button>
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