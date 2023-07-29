
import React, { useRef, useState, useEffect } from 'react'
import styles3 from '/styles/AllOccasionCatering.module.scss';
import styles from '/styles/BirthdayParty.module.scss';
import styles2 from '/styles/NewDiy.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlus, faArrowLeft, faMagnifyingGlass, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { useAppMenu } from "$lib/menuContext";

const CustomizeAocPkg = () => {

    const { cities } = useAppMenu();

    const [selectedOptions, setSelectedOptions] = useState();
    const [isDisabled, setIsDisabled] = useState(true);
    const [isDisabledStarter, setIsDisabledStarter] = useState(true);
    const [showDropdown, setShowDropdown] = useState(true)
    const [showDropdown2, setShowDropdown2] = useState(true)
    const [showDropdown3, setShowDropdown3] = useState(true)
    const [showDropdown4, setShowDropdown4] = useState(true)
    const [showDropdown5, setShowDropdown5] = useState(true)
    const [showDropdown6, setShowDropdown6] = useState(true)
    const [showDropdown7, setShowDropdown7] = useState(true)
    const [showDropdown8, setShowDropdown8] = useState(true)
    const [showDropdown9, setShowDropdown9] = useState(true)
    const [showDropdown10, setShowDropdown10] = useState(true)
    const [showDropdown11, setShowDropdown11] = useState(true)
    const [showDropdown12, setShowDropdown12] = useState(true)
    const [showDropdown13, setShowDropdown13] = useState(true)
    const [isShown, setIsShown] = useState(false);
    const [data, setData] = useState([])
    const [data2, setData2] = useState([])
    const [data3, setData3] = useState([])
    const [data4, setData4] = useState([])
    const [data5, setData5] = useState([])
    const [data6, setData6] = useState([])
    const [data7, setData7] = useState([])
    const [data8, setData8] = useState([])
    const [data9, setData9] = useState([])
    const [data10, setData10] = useState([])
    const [data11, setData11] = useState([])
    const [data12, setData12] = useState([])
    const [data13, setData13] = useState([])

    const [packageName, setPackageName] = useState();
    const [packagePrice, setPackagePrice] = useState();
    const [itemsData, setItemsData] = useState([]);
    const [itemQuantity, setItemQuantity] = useState([]);
    const [isVeg, setIsVeg] = useState();

    const [city, setCity] = useState();
    const [selectedDate, setSelectedDate] = useState();
    const [vegCount, setVegCount] = useState();
    const [nvCount, setNvCount] = useState();

    //Items Qnty
    const [vegStarterQnty, setVegStarterQnty] = useState();
    const [nvStarterQnty, setNvStarterQnty] = useState();
    const [saladQnty, setSaladQnty] = useState();
    const [breadQnty, setBreadQnty] = useState();
    const [dalQnty, setDalQnty] = useState();
    const [vegGravyQnty, setVegGravyQnty] = useState();
    const [vegDryQnty, setVegDryQnty] = useState();
    const [nvGravyQnty, setNvGravyQnty] = useState();
    const [riceQnty, setRiceQnty] = useState();
    const [dessertQnty, setDessertQnty] = useState();
    const [koftaQnty, setKoftaQnty] = useState();

    const [isFormValid, setIsFormValid] = useState(false);

    const [showPopup, setShowPopup] = useState(false);

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');

    const goBackBtn = () => {
        setShowPopup(!showPopup);
    }

    const handleSubmit = () => {
        const totalGuestCount = Number(vegCount) + Number(nvCount);
        if (city !== 'Bangalore') {
            Swal.fire({
                text: "This Service is available only in Bangalore",
                icon: "warning",
                confirmButtonText: "OK",
            });
        }
        else if (!selectedDate) {
            Swal.fire({
                text: "please select date",
                icon: "warning",
                confirmButtonText: "OK",
            });
        }
        else if (totalGuestCount < 50) {
            alert("Please select minimu 50 guest count")
            //setShowPopup(!showPopup);
        } else if (isFormValid) {
            const selectedBirthdayPkg = {
                city,
                selectedDate,
                vegCount,
                nvCount,
                totalGuestCount
            }
            setIsFormValid(false);
            // let selectedBirthdayPkg = { city: city, selectedDate: selectedDate, vegCount: vegCount, nvCount: nvCount }
            sessionStorage.setItem("selectedBirthdayPkg", JSON.stringify(selectedBirthdayPkg))
        }
    }

    //submit user details
    const submitDetails = (event) => {
        event.preventDefault();

        if (!name || !number || !email) {
            alert("Please fill the all field")
        } else {
            const birthdayPartyUserDetails = {
                name: name,
                number: number,
                email: email
            };
            sessionStorage.setItem('birthdayPartyUserDetails', JSON.stringify(birthdayPartyUserDetails));
            Swal.fire({
                title: "Items Added",
                icon: "success",
                confirmButtonText: "OK",
            });
            setShowPopup(!showPopup);
            window.open("/allOccasionCateringCheckprice", '_self');
        }
    }

    const handleCity = (city) => {
        if (city !== 'Bangalore') {
            alert('This service is not available in your city');
        }
        setCity(city);
        checkFormValidity();
    }

    //select date logic
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
        checkFormValidity();
    };

    const generateDateOptions = () => {
        const options = [];
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const twoDaysFromNow = new Date();
        twoDaysFromNow.setDate(currentDate.getDate() + 2);

        for (
            let date = twoDaysFromNow;
            date.getFullYear() === currentYear;
            date.setDate(date.getDate() + 1)
        ) {
            const optionValue = date.toISOString().slice(0, 10);
            const optionLabel = date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            });

            options.push(
                <option key={optionValue} value={optionValue}>
                    {optionLabel}
                </option>
            );
        }

        return options;
    };

    const handleInput1Change = (event) => {
        setVegCount(event.target.value);
        checkFormValidity();
    };

    const handleInput2Change = (event) => {
        setNvCount(event.target.value);
        checkFormValidity();
    };

    const checkFormValidity = () => {
        if (city && selectedDate) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };

    //checkprice
    const checkprice = () => {
        handleSubmit();
        const sum =
            checkedValues.length +
            checkedValues2.length +
            checkedValues3.length +
            checkedValues4.length +
            checkedValues5.length +
            checkedValues6.length +
            checkedValues7.length +
            checkedValues8.length +
            checkedValues9.length +
            checkedValues10.length +
            checkedValues11.length +
            checkedValues12.length +
            checkedValues13.length;
        if (sum > 0) {
            sessionStorage.setItem('aocVegGravy', JSON.stringify(checkedValues));
            sessionStorage.setItem('aocVegStarter', JSON.stringify(checkedValues2));
            sessionStorage.setItem('aocVegDry', JSON.stringify(checkedValues3));
            sessionStorage.setItem('aocDal', JSON.stringify(checkedValues4));
            sessionStorage.setItem('aocRice', JSON.stringify(checkedValues5));
            sessionStorage.setItem('aocSalad', JSON.stringify(checkedValues6));
            sessionStorage.setItem('aocBread', JSON.stringify(checkedValues7));
            sessionStorage.setItem('aocKofta', JSON.stringify(checkedValues8));
            sessionStorage.setItem('aocDessert', JSON.stringify(checkedValues9));
            sessionStorage.setItem('aocChickenStarter', JSON.stringify(checkedValues10));
            sessionStorage.setItem('aocFishStarter', JSON.stringify(checkedValues11));
            sessionStorage.setItem('aocChickenGravy', JSON.stringify(checkedValues12));
            sessionStorage.setItem('aocFishGravy', JSON.stringify(checkedValues13));
            setShowPopup(!showPopup);
        } else {
            alert('Please Selecty any Snack');
        }
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
        const fetchPackageData = () => {
            // Retrieve the packageOne data from session storage
            const packageOneData = sessionStorage.getItem('aocNvPackageOne');
            if (packageOneData) {
                const data = JSON.parse(packageOneData);
                setPackageName(data.name);
                setPackagePrice(data.price);
                setIsVeg(data.veg);
                setItemsData(data.items);
                setVegStarterQnty(data.vegStarterQnty);
                setNvStarterQnty(data.nvStarterQnty);
                setSaladQnty(data.saladQnty);
                setBreadQnty(data.breadQnty);
                setDessertQnty(data.dessertQnty);
                setDalQnty(data.dalQnty);
                setNvGravyQnty(data.nonVegGravyQnty);
                setRiceQnty(data.riceQnty);
                setVegDryQnty(data.vegDryQnty);
                setVegGravyQnty(data.vegGravyQnty);
                setKoftaQnty(data.koftaQnty);
            };
        }
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

    //RICE SELECTION
    const selectRice = () => {
        setShowSelectedMenu5(true);
        setShowDropdown5(false)
        setSearchValue5("")

        setState({
            showDiv1: false,
            showDiv2: true
        });

        const results = riceData.filter(({ id: id1 }) => !checkedValues5.some(({ id: id2 }) => id2 === id1));

        let selectedIds = [];
        for (let i = 0; i < results.length; i++) {
            selectedIds.push(results[i].id);
        }
        for (let j = 0; j < riceData.length; j++) {
            if (!(selectedIds.includes(riceData[j].id))) {
                riceData[j].checked = 'checked';
            }
        }
    };

    //SALAD SELECTION
    const selectSalad = () => {
        setShowSelectedMenu6(true);
        setShowDropdown6(false)
        setSearchValue6("")

        setState({
            showDiv1: false,
            showDiv2: true
        });

        const results = saladData.filter(({ id: id1 }) => !checkedValues6.some(({ id: id2 }) => id2 === id1));

        let selectedIds = [];
        for (let i = 0; i < results.length; i++) {
            selectedIds.push(results[i].id);
        }
        for (let j = 0; j < saladData.length; j++) {
            if (!(selectedIds.includes(saladData[j].id))) {
                saladData[j].checked = 'checked';
            }
        }
    };

    //BREAD SELECTION
    const selectBread = () => {
        setShowSelectedMenu7(true);
        setShowDropdown7(false)
        setSearchValue7("")

        setState({
            showDiv1: false,
            showDiv2: true
        });

        const results = breadData.filter(({ id: id1 }) => !checkedValues7.some(({ id: id2 }) => id2 === id1));

        let selectedIds = [];
        for (let i = 0; i < results.length; i++) {
            selectedIds.push(results[i].id);
        }
        for (let j = 0; j < breadData.length; j++) {
            if (!(selectedIds.includes(breadData[j].id))) {
                breadData[j].checked = 'checked';
            }
        }
    };

    //KOFTA SELECTION
    const selectKofta = () => {
        setShowSelectedMenu8(true);
        setShowDropdown8(false)
        setSearchValue8("")

        setState({
            showDiv1: false,
            showDiv2: true
        });

        const results = koftaData.filter(({ id: id1 }) => !checkedValues8.some(({ id: id2 }) => id2 === id1));

        let selectedIds = [];
        for (let i = 0; i < results.length; i++) {
            selectedIds.push(results[i].id);
        }
        for (let j = 0; j < koftaData.length; j++) {
            if (!(selectedIds.includes(koftaData[j].id))) {
                koftaData[j].checked = 'checked';
            }
        }
    };

    //DESSERT SELECTION
    const selectDessert = () => {
        setShowSelectedMenu9(true);
        setShowDropdown9(false)
        setSearchValue9("")

        setState({
            showDiv1: false,
            showDiv2: true
        });

        const results = dessertData.filter(({ id: id1 }) => !checkedValues9.some(({ id: id2 }) => id2 === id1));

        let selectedIds = [];
        for (let i = 0; i < results.length; i++) {
            selectedIds.push(results[i].id);
        }
        for (let j = 0; j < dessertData.length; j++) {
            if (!(selectedIds.includes(dessertData[j].id))) {
                dessertData[j].checked = 'checked';
            }
        }
    };

    //CHICKEN STARTER SELECTION
    const selectChickenStarter = () => {
        setShowSelectedMenu10(true);
        setShowDropdown10(false)
        setSearchValue10("")

        setState({
            showDiv1: false,
            showDiv2: true
        });

        const results = chickenStarterData.filter(({ id: id1 }) => !checkedValues10.some(({ id: id2 }) => id2 === id1));

        let selectedIds = [];
        for (let i = 0; i < results.length; i++) {
            selectedIds.push(results[i].id);
        }
        for (let j = 0; j < chickenStarterData.length; j++) {
            if (!(selectedIds.includes(chickenStarterData[j].id))) {
                chickenStarterData[j].checked = 'checked';
            }
        }
    };

    //FISH STARTER SELECTION
    const selectFishStarter = () => {
        setShowSelectedMenu11(true);
        setShowDropdown11(false)
        setSearchValue11("")

        setState({
            showDiv1: false,
            showDiv2: true
        });

        const results = fishStarterData.filter(({ id: id1 }) => !checkedValues11.some(({ id: id2 }) => id2 === id1));

        let selectedIds = [];
        for (let i = 0; i < results.length; i++) {
            selectedIds.push(results[i].id);
        }
        for (let j = 0; j < fishStarterData.length; j++) {
            if (!(selectedIds.includes(fishStarterData[j].id))) {
                fishStarterData[j].checked = 'checked';
            }
        }
    };

    //CHCIKEN GRAVY SELECTION
    const selectChickenGravy = () => {
        setShowSelectedMenu12(true);
        setShowDropdown12(false)
        setSearchValue12("")

        setState({
            showDiv1: false,
            showDiv2: true
        });

        const results = chickenGravyData.filter(({ id: id1 }) => !checkedValues12.some(({ id: id2 }) => id2 === id1));

        let selectedIds = [];
        for (let i = 0; i < results.length; i++) {
            selectedIds.push(results[i].id);
        }
        for (let j = 0; j < chickenGravyData.length; j++) {
            if (!(selectedIds.includes(chickenGravyData[j].id))) {
                chickenGravyData[j].checked = 'checked';
            }
        }
    };

    //FISH GRAVY SELECTION
    const selectFishGravy = () => {
        setShowSelectedMenu13(true);
        setShowDropdown13(false)
        setSearchValue13("")

        setState({
            showDiv1: false,
            showDiv2: true
        });

        const results = fishGravyData.filter(({ id: id1 }) => !checkedValues13.some(({ id: id2 }) => id2 === id1));

        let selectedIds = [];
        for (let i = 0; i < results.length; i++) {
            selectedIds.push(results[i].id);
        }
        for (let j = 0; j < fishGravyData.length; j++) {
            if (!(selectedIds.includes(fishGravyData[j].id))) {
                fishGravyData[j].checked = 'checked';
            }
        }
    };

    const handleCancelClick = () => {

        setShowSelectedMenu(false);
        setShowSelectedMenu2(false);
        setShowSelectedMenu3(false);
        setShowSelectedMenu4(false);
        setShowSelectedMenu5(false);
        setShowSelectedMenu6(false);
        setShowSelectedMenu7(false);
        setShowSelectedMenu8(false);
        setShowSelectedMenu9(false);
        setShowSelectedMenu10(false);
        setShowSelectedMenu11(false);
        setShowSelectedMenu12(false);
        setShowSelectedMenu13(false);
        setShowDropdown(true);
        setShowDropdown2(true);
        setShowDropdown3(true);
        setShowDropdown4(true);
        setShowDropdown5(true);
        setShowDropdown6(true);
        setShowDropdown7(true);
        setShowDropdown8(true);
        setShowDropdown9(true);
        setShowDropdown10(true);
        setShowDropdown11(true);
        setShowDropdown12(true);
        setShowDropdown13(true);
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

    const deleteRice = (e, item) => {
        const value = item;
        if (e.target.checked) {
            value.checked = '';
            setCheckedValues5([...checkedValues5, value]);
        } else {
            value.checked = '';
            setCheckedValues5(checkedValues5.filter(v => v.id !== value.id));
        }
        // setCheckedValues(checkedValues.filter(v => v.id !== item.id));
    }

    const deleteSalad = (e, item) => {
        const value = item;
        if (e.target.checked) {
            value.checked = '';
            setCheckedValues6([...checkedValues6, value]);
        } else {
            value.checked = '';
            setCheckedValues6(checkedValues6.filter(v => v.id !== value.id));
        }
        // setCheckedValues(checkedValues.filter(v => v.id !== item.id));
    }

    const deleteBread = (e, item) => {
        const value = item;
        if (e.target.checked) {
            value.checked = '';
            setCheckedValues7([...checkedValues7, value]);
        } else {
            value.checked = '';
            setCheckedValues7(checkedValues7.filter(v => v.id !== value.id));
        }
    }

    const deleteKofta = (e, item) => {
        const value = item;
        if (e.target.checked) {
            value.checked = '';
            setCheckedValues8([...checkedValues8, value]);
        } else {
            value.checked = '';
            setCheckedValues8(checkedValues8.filter(v => v.id !== value.id));
        }
    }

    const deleteDessert = (e, item) => {
        const value = item;
        if (e.target.checked) {
            value.checked = '';
            setCheckedValues9([...checkedValues9, value]);
        } else {
            value.checked = '';
            setCheckedValues9(checkedValues9.filter(v => v.id !== value.id));
        }
    }

    const deleteChickenStarter = (e, item) => {
        const value = item;
        if (e.target.checked) {
            value.checked = '';
            setCheckedValues10([...checkedValues10, value]);
        } else {
            value.checked = '';
            setCheckedValues10(checkedValues10.filter(v => v.id !== value.id));
        }
    }

    const deleteFishStarter = (e, item) => {
        const value = item;
        if (e.target.checked) {
            value.checked = '';
            setCheckedValues11([...checkedValues11, value]);
        } else {
            value.checked = '';
            setCheckedValues11(checkedValues11.filter(v => v.id !== value.id));
        }
    }

    const deleteChickenGravy = (e, item) => {
        const value = item;
        if (e.target.checked) {
            value.checked = '';
            setCheckedValues12([...checkedValues12, value]);
        } else {
            value.checked = '';
            setCheckedValues12(checkedValues12.filter(v => v.id !== value.id));
        }
    }

    const deleteFishGravy = (e, item) => {
        const value = item;
        if (e.target.checked) {
            value.checked = '';
            setCheckedValues13([...checkedValues13, value]);
        } else {
            value.checked = '';
            setCheckedValues13(checkedValues13.filter(v => v.id !== value.id));
        }
    }

    //veg Gravy data
    const vegGravyList = [
        {
            id: 1,
            image: '/diy images/starter/image 23.png',
            name: 'Kadai Veg',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 50,
        },
        {
            id: 2,
            image: 'https://caterninjacdn.s3.amazonaws.com/DIY Image/DIY+Starters/French+Fries.jpg',
            name: 'Veg Kolhapuri',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 50,
        },
        {
            id: 3,
            image: 'https://caterninjacdn.s3.amazonaws.com/DIY Image/DIY+Starters/Honey+Chilli+Baby+Potato.jpg',
            name: 'Dum Aloo Banarasi',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 50,
        },
        {
            id: 4,
            image: '/diy images/starter/image 23.png',
            name: 'Nanhi Sabjiyo ka Meal',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 50,
        },
        {
            id: 5,
            image: 'https://caterninjacdn.s3.amazonaws.com/DIY Image/DIY+Starters/Veg+Manchurian+Dry.jpg',
            name: 'Veg Do Pyaza',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 50,
        },
        {
            id: 6,
            image: 'https://caterninjacdn.s3.amazonaws.com/DIY Image/DIY+Starters/Crispy+Corn.jpg',
            name: 'Mutter Paneer',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 50,
        },
        {
            id: 7,
            image: '/diy images/starter/image 23.png',
            name: 'Kadai Paneer',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 50,
        }
    ]

    //veg Starters data
    const vegStartersList = [
        {
            id: 1,
            image: '/diy images/starter/image 23.png',
            name: 'Gobi Manchurian',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 70,
        },
        {
            id: 2,
            image: 'https://caterninjacdn.s3.amazonaws.com/DIY Image/DIY+Heavy+Snacks/Pav+Bhaji.jpg',
            name: 'Paneer Manchurian',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 70,
        },
        {
            id: 3,
            image: 'https://caterninjacdn.s3.amazonaws.com/DIY Image/DIY+Noodles/Veg-Hakka-Noodles.jpg',
            name: 'Chilly Paneer',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 70,
        },
        {
            id: 4,
            image: '/diy images/starter/image 23.png',
            name: 'Dahi ke Kebab',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 70,
        },
        {
            id: 5,
            image: '/diy images/starter/image 23.png',
            name: 'Marrakesh Roll',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 70,
        },
        {
            id: 6,
            image: '/diy images/starter/image 23.png',
            name: 'Hara Bhara Kebab',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 70,
        },
        {
            id: 7,
            image: 'https://caterninjacdn.s3.amazonaws.com/DIY Image/DIY+Pasta/Pasta+Alfredo.jpg',
            name: 'Crispy Fried Corn',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 70,
        },
        {
            id: 8,
            image: '/diy images/starter/image 23.png',
            name: 'Cajun Spice Baby Potato',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 70,
        },
        {
            id: 9,
            image: 'https://caterninjacdn.s3.amazonaws.com/DIY Image/DIY+Rice/Veg+Fried+Rice.jpg',
            name: 'Paneer 65',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 70,
        },
    ]

    //veg dry data
    const vegDryList = [
        {
            id: 1,
            image: 'https://caterninjacdn.s3.amazonaws.com/DIY Image/DIY+Starters/Chicken+Tikka+_+Drumstick+Platter.jpg',
            name: 'Carrot & Beans Palya',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 100,
        },
        {
            id: 2,
            image: '/diy images/starter/image 23.png',
            name: 'Mix Veg Dry',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 100,
        },
        {
            id: 3,
            image: 'https://caterninjacdn.s3.amazonaws.com/DIY Image/DIY+Mains-Gravy/Chicken+manchurian+Gravy.jpg',
            name: 'Aloo Mutter',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 100,
        },
        {
            id: 4,
            image: '/diy images/starter/image 23.png',
            name: 'Aloo Gobi Adraki',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 100,
        },
        {
            id: 5,
            image: '/diy images/starter/image 23.png',
            name: 'Lasooni Aloo',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 100,
        },
        {
            id: 6,
            image: '/diy images/starter/image 23.png',
            name: 'Bhindi',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 100,
        },
        {
            id: 7,
            image: 'https://caterninjacdn.s3.amazonaws.com/DIY Image/DIY+Starters/Kalmi+Chicken+Tikka.jpg',
            name: 'Pindi Chole',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 100,
        }
    ]

    //dal data
    const dalList = [
        {
            id: 1,
            image: '/diy images/starter/image 23.png',
            name: 'Dal Tadka',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 150,
        },
        {
            id: 2,
            image: '/diy images/starter/image 23.png',
            name: 'Dal-e-Dum',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 150,
        },
        {
            id: 3,
            image: '/diy images/starter/image 23.png',
            name: 'Dal Makhni',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 150,
        },
        {
            id: 4,
            image: '/diy images/starter/image 23.png',
            name: 'Dal Amritsari',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 150,
        },
        {
            id: 5,
            image: 'https://caterninjacdn.s3.amazonaws.com/DIY Image/DIY+Pasta/Pasta+Alfredo-+Chicken.jpg',
            name: 'Sambar With Rasam',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 150,
        }
    ]

    //Rice data
    const riceList = [
        {
            id: 1,
            image: '/diy images/starter/image 23.png',
            name: 'Veg Pulav',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 40,
        },
        {
            id: 2,
            image: '/diy images/starter/image 23.png',
            name: 'Jeera Pulav',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 40,
        },
        {
            id: 3,
            image: '/diy images/starter/image 23.png',
            name: 'Mutter Pulav',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 40,
        },
        {
            id: 4,
            image: '/diy images/starter/image 23.png',
            name: 'Ghee Rice',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 40,
        },
        {
            id: 5,
            image: '/diy images/starter/image 23.png',
            name: 'Plain Rice',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 40,
        }
    ]

    //Salad data
    const saladList = [
        {
            id: 1,
            image: '/diy images/starter/image 23.png',
            name: 'Salad Kosambari',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 40,
        },
        {
            id: 2,
            image: '/diy images/starter/image 23.png',
            name: 'Green Salad',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 40,
        },
        {
            id: 3,
            image: '/diy images/starter/image 23.png',
            name: 'Russian Salad',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 40,
        },
        {
            id: 4,
            image: '/diy images/starter/image 23.png',
            name: 'Corn Mutter Salad',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 40,
        },
        {
            id: 5,
            image: '/diy images/starter/image 23.png',
            name: 'Bean Sprouts',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 40,
        }
    ]

    //Breads data
    const breadList = [
        {
            id: 1,
            image: '/diy images/starter/image 23.png',
            name: 'Tawa Paratha',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 40,
        },
        {
            id: 2,
            image: '/diy images/starter/image 23.png',
            name: 'Laccha Paratha',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 40,
        }
    ]

    //Kofta data
    const koftaList = [
        {
            id: 1,
            image: '/diy images/starter/image 23.png',
            name: 'Mix Veg Kofta Curry',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 40,
        },
        {
            id: 2,
            image: '/diy images/starter/image 23.png',
            name: 'Banana Kofta Curry',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 40,
        },
        {
            id: 3,
            image: '/diy images/starter/image 23.png',
            name: 'Paneer Kofta Curry',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 40,
        }
    ]

    //Dessert data
    const dessertList = [
        {
            id: 1,
            image: '/diy images/starter/image 23.png',
            name: 'Semiya Payasam',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 40,
        },
        {
            id: 2,
            image: '/diy images/starter/image 23.png',
            name: 'Sheer Korma',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 40,
        },
        {
            id: 3,
            image: '/diy images/starter/image 23.png',
            name: 'Rice Kheer',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 40,
        },
        {
            id: 4,
            image: '/diy images/starter/image 23.png',
            name: 'Phirni',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 40,
        },
        {
            id: 5,
            image: '/diy images/starter/image 23.png',
            name: 'Fresh Fruit Custard',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 40,
        }
        ,
        {
            id: 6,
            image: '/diy images/starter/image 23.png',
            name: 'Gulab Jammun',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: true,
            price: 40,
        }
    ]

    //Chicken Starters data
    const chickenStartersList = [
        {
            id: 1,
            image: '/diy images/starter/image 23.png',
            name: 'Papper Chicken',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: false,
            price: 40,
        },
        {
            id: 2,
            image: '/diy images/starter/image 23.png',
            name: 'Chilly Chicken',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false,
            price: 40,
        },
        {
            id: 3,
            image: '/diy images/starter/image 23.png',
            name: 'Chicken Manchurian',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: false,
            price: 40,
        },
        {
            id: 4,
            image: '/diy images/starter/image 23.png',
            name: 'Chicken Kebab',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false,
            price: 40,
        },
        {
            id: 5,
            image: '/diy images/starter/image 23.png',
            name: 'Crispy Fried Chicken',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false,
            price: 40,
        },
        {
            id: 6,
            image: '/diy images/starter/image 23.png',
            name: 'Peri Peri Chicken Wings',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false,
            price: 40,
        }
        ,
        {
            id: 7,
            image: '/diy images/starter/image 23.png',
            name: 'Ajwaini Chicken',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false,
            price: 40,
        }
        ,
        {
            id: 8,
            image: '/diy images/starter/image 23.png',
            name: 'Chicken 65',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false,
            price: 40,
        }
    ]


    //Fish Starters data
    const fishStartersList = [
        {
            id: 1,
            image: '/diy images/starter/image 23.png',
            name: 'Amritsari Fish Fry',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: false,
            price: 40,
        },
        {
            id: 2,
            image: '/diy images/starter/image 23.png',
            name: 'Fish 65',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false,
            price: 40,
        },
        {
            id: 3,
            image: '/diy images/starter/image 23.png',
            name: 'Chilly Fish',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: false,
            price: 40,
        },
        {
            id: 4,
            image: '/diy images/starter/image 23.png',
            name: 'Fish Manchurian',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false,
            price: 40,
        }
    ]

    //Chicken Gravy data
    const chickenGravyList = [
        {
            id: 1,
            image: '/diy images/starter/image 23.png',
            name: 'Kadai Chicken',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: false,
            price: 40,
        },
        {
            id: 2,
            image: '/diy images/starter/image 23.png',
            name: 'Murgh Rogan Josh',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false,
            price: 40,
        },
        {
            id: 3,
            image: '/diy images/starter/image 23.png',
            name: 'Murgh Makhni',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: false,
            price: 40,
        },
        {
            id: 4,
            image: '/diy images/starter/image 23.png',
            name: 'Dhaniya Murgh',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false,
            price: 40,
        },
        {
            id: 5,
            image: '/diy images/starter/image 23.png',
            name: 'Murgh Patyala',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false,
            price: 40,
        },
        {
            id: 6,
            image: '/diy images/starter/image 23.png',
            name: 'Chilly Chicken',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false,
            price: 40,
        }
        ,
        {
            id: 7,
            image: '/diy images/starter/image 23.png',
            name: 'Chicken Manchurian',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false,
            price: 40,
        }
        ,
        {
            id: 8,
            image: '/diy images/starter/image 23.png',
            name: 'Chicken Chatpata',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false,
            price: 40,
        }
    ]

    //Fish Gravy data
    const fishGravyList = [
        {
            id: 1,
            image: '/diy images/starter/image 23.png',
            name: 'Mangalorean style fish curry',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: false,
            price: 40,
        },
        {
            id: 2,
            image: '/diy images/starter/image 23.png',
            name: 'Fish Masala',
            description: "Creamy, buttery Smooth chicken in a delicious thick gravy",
            checked: '',
            veg: false,
            price: 40,
        },
        {
            id: 3,
            image: '/diy images/starter/image 23.png',
            name: 'Dhaba Style Fish Curry',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: '',
            veg: false,
            price: 40,
        }
    ]


    const [searchValue, setSearchValue] = React.useState('');
    const [searchValue2, setSearchValue2] = React.useState('');
    const [searchValue3, setSearchValue3] = React.useState('');
    const [searchValue4, setSearchValue4] = React.useState('');
    const [searchValue5, setSearchValue5] = React.useState('');
    const [searchValue6, setSearchValue6] = React.useState('');
    const [searchValue7, setSearchValue7] = React.useState('');
    const [searchValue8, setSearchValue8] = React.useState('');
    const [searchValue9, setSearchValue9] = React.useState('');
    const [searchValue10, setSearchValue10] = React.useState('');
    const [searchValue11, setSearchValue11] = React.useState('');
    const [searchValue12, setSearchValue12] = React.useState('');
    const [searchValue13, setSearchValue13] = React.useState('');
    const [showSelectedMenu, setShowSelectedMenu] = useState(false);
    const [showSelectedMenu2, setShowSelectedMenu2] = useState(false);
    const [showSelectedMenu3, setShowSelectedMenu3] = useState(false);
    const [showSelectedMenu4, setShowSelectedMenu4] = useState(false);
    const [showSelectedMenu5, setShowSelectedMenu5] = useState(false);
    const [showSelectedMenu6, setShowSelectedMenu6] = useState(false);
    const [showSelectedMenu7, setShowSelectedMenu7] = useState(false);
    const [showSelectedMenu8, setShowSelectedMenu8] = useState(false);
    const [showSelectedMenu9, setShowSelectedMenu9] = useState(false);
    const [showSelectedMenu10, setShowSelectedMenu10] = useState(false);
    const [showSelectedMenu11, setShowSelectedMenu11] = useState(false);
    const [showSelectedMenu12, setShowSelectedMenu12] = useState(false);
    const [showSelectedMenu13, setShowSelectedMenu13] = useState(false);

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

    const searchStarter5 = (e) => {
        setSearchValue5(e.target.value);
    };

    const searchStarter6 = (e) => {
        setSearchValue6(e.target.value);
    };

    const searchStarter7 = (e) => {
        setSearchValue7(e.target.value);
    };

    const searchStarter8 = (e) => {
        setSearchValue8(e.target.value);
    };

    const searchStarter9 = (e) => {
        setSearchValue9(e.target.value);
    };

    const searchStarter10 = (e) => {
        setSearchValue10(e.target.value);
    };

    const searchStarter11 = (e) => {
        setSearchValue11(e.target.value);
    };

    const searchStarter12 = (e) => {
        setSearchValue12(e.target.value);
    };

    const searchStarter13 = (e) => {
        setSearchValue13(e.target.value);
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
    const riceData = data5.filter((temp) =>
        temp.name.toLowerCase().includes(searchValue5.toLowerCase())
    );
    const saladData = data6.filter((temp) =>
        temp.name.toLowerCase().includes(searchValue6.toLowerCase())
    );
    const breadData = data7.filter((temp) =>
        temp.name.toLowerCase().includes(searchValue7.toLowerCase())
    );
    const koftaData = data8.filter((temp) =>
        temp.name.toLowerCase().includes(searchValue8.toLowerCase())
    );
    const dessertData = data9.filter((temp) =>
        temp.name.toLowerCase().includes(searchValue9.toLowerCase())
    );
    const chickenStarterData = data10.filter((temp) =>
        temp.name.toLowerCase().includes(searchValue10.toLowerCase())
    );
    const fishStarterData = data11.filter((temp) =>
        temp.name.toLowerCase().includes(searchValue11.toLowerCase())
    );
    const chickenGravyData = data12.filter((temp) =>
        temp.name.toLowerCase().includes(searchValue12.toLowerCase())
    );
    const fishGravyData = data13.filter((temp) =>
        temp.name.toLowerCase().includes(searchValue13.toLowerCase())
    );

    const [checkedValues, setCheckedValues] = React.useState([]);
    const [checkedValues2, setCheckedValues2] = React.useState([]);
    const [checkedValues3, setCheckedValues3] = React.useState([]);
    const [checkedValues4, setCheckedValues4] = React.useState([]);
    const [checkedValues5, setCheckedValues5] = React.useState([]);
    const [checkedValues6, setCheckedValues6] = React.useState([]);
    const [checkedValues7, setCheckedValues7] = React.useState([]);
    const [checkedValues8, setCheckedValues8] = React.useState([]);
    const [checkedValues9, setCheckedValues9] = React.useState([]);
    const [checkedValues10, setCheckedValues10] = React.useState([]);
    const [checkedValues11, setCheckedValues11] = React.useState([]);
    const [checkedValues12, setCheckedValues12] = React.useState([]);
    const [checkedValues13, setCheckedValues13] = React.useState([]);

    // const handleCheckboxChange = (e, item) => {
    //     const value = item;
    //     if (e.target.checked) {
    //         if (checkedValues.length + 1 === vegSnackQnty) {
    //             Swal.fire({
    //                 title: "Reminder",
    //                 text: "Respective Charges will be applied to extra selected items in final quote.",
    //                 icon: "warning",
    //                 confirmButtonText: "OK",
    //             });
    //             //setAlertShown(true);
    //         }
    //         value.checked = 'checked';
    //         setCheckedValues([...checkedValues, value]);
    //     } else {
    //         value.checked = '';
    //         setCheckedValues(checkedValues.filter((v) => v.id !== value.id));
    //     }
    // };

    const [reminder, setReminder] = useState(false);
    const [reminderName, setReminderName] = useState("");

    const handleCheckboxChange = (e, item) => {
        const value = item;
        if (e.target.checked) {
            if (checkedValues.length + checkedValues3.length === vegDryQnty) {
                setReminder(true);
                setReminderName("Veg Gravy/Dry")
                return;
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
            if (checkedValues2.length === vegStarterQnty) {
                setReminder(true);
                setReminderName("Veg Starter")
                return;
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
            if (checkedValues.length + checkedValues3.length === vegDryQnty) {
                setReminder(true);
                setReminderName("Veg Dry/Gravy")
                return;
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
            if (checkedValues4.length === dalQnty) {
                setReminder(true);
                setReminderName("Dal")
                return;
            }
            value.checked = 'checked';
            setCheckedValues4([...checkedValues4, value]);
        } else {
            value.checked = '';
            setCheckedValues4(checkedValues4.filter((v) => v.id !== value.id));
        }
    };

    const handleCheckboxChange5 = (e, item) => {
        const value = item;
        if (e.target.checked) {
            if (checkedValues5.length === riceQnty) {
                setReminder(true);
                setReminderName("Rice")
                return;
            }
            value.checked = 'checked';
            setCheckedValues5([...checkedValues5, value]);
        } else {
            value.checked = '';
            setCheckedValues5(checkedValues5.filter((v) => v.id !== value.id));
        }
    };

    const handleCheckboxChange6 = (e, item) => {
        const value = item;
        if (e.target.checked) {
            if (checkedValues6.length === saladQnty) {
                setReminder(true);
                setReminderName("Salad")
                return;
            }
            value.checked = 'checked';
            setCheckedValues6([...checkedValues6, value]);
        } else {
            value.checked = '';
            setCheckedValues6(checkedValues6.filter((v) => v.id !== value.id));
        }
    };

    const handleCheckboxChange7 = (e, item) => {
        const value = item;
        if (e.target.checked) {
            if (checkedValues7.length === breadQnty) {
                setReminder(true);
                setReminderName("Bread")
                return;
            }
            value.checked = 'checked';
            setCheckedValues7([...checkedValues7, value]);
        } else {
            value.checked = '';
            setCheckedValues7(checkedValues7.filter((v) => v.id !== value.id));
        }
    };

    const handleCheckboxChange8 = (e, item) => {
        const value = item;
        if (e.target.checked) {
            if (checkedValues8.length === koftaQnty) {
                setReminder(true);
                setReminderName("Kofta")
                return;
            }
            value.checked = 'checked';
            setCheckedValues8([...checkedValues8, value]);
        } else {
            value.checked = '';
            setCheckedValues8(checkedValues8.filter((v) => v.id !== value.id));
        }
    };

    const handleCheckboxChange9 = (e, item) => {
        const value = item;
        if (e.target.checked) {
            if (checkedValues9.length === dessertQnty) {
                setReminder(true);
                setReminderName("Dessert")
                return;
            }
            value.checked = 'checked';
            setCheckedValues9([...checkedValues9, value]);
        } else {
            value.checked = '';
            setCheckedValues9(checkedValues9.filter((v) => v.id !== value.id));
        }
    };

    const handleCheckboxChange10 = (e, item) => {
        const value = item;
        if (e.target.checked) {
            if (checkedValues11.length + checkedValues10.length === nvStarterQnty) {
                setReminder(true);
                setReminderName("NonVeg Starter")
                return;
            }
            value.checked = 'checked';
            setCheckedValues10([...checkedValues10, value]);
        } else {
            value.checked = '';
            setCheckedValues10(checkedValues10.filter((v) => v.id !== value.id));
        }
    };

    const handleCheckboxChange11 = (e, item) => {
        const value = item;
        if (e.target.checked) {
            if (checkedValues11.length + checkedValues10.length === nvStarterQnty) {
                setReminder(true);
                setReminderName("NonVeg Starter")
                return;
            }
            value.checked = 'checked';
            setCheckedValues11([...checkedValues11, value]);
        } else {
            value.checked = '';
            setCheckedValues11(checkedValues11.filter((v) => v.id !== value.id));
        }
    };

    const handleCheckboxChange12 = (e, item) => {
        const value = item;
        if (e.target.checked) {
            if (checkedValues12.length + checkedValues13.length === nvGravyQnty) {
                setReminder(true);
                setReminderName("NonVeg Gravy")
                return;
            }
            value.checked = 'checked';
            setCheckedValues12([...checkedValues12, value]);
        } else {
            value.checked = '';
            setCheckedValues12(checkedValues12.filter((v) => v.id !== value.id));
        }
    };

    const handleCheckboxChange13 = (e, item) => {
        const value = item;
        if (e.target.checked) {
            if (checkedValues12.length + checkedValues13.length === nvGravyQnty) {
                setReminder(true);
                setReminderName("NonVeg Gravy")
                return;
            }
            value.checked = 'checked';
            setCheckedValues13([...checkedValues13, value]);
        } else {
            value.checked = '';
            setCheckedValues13(checkedValues13.filter((v) => v.id !== value.id));
        }
    };

    //Reminder
    const closeReminder = () => {
        setReminder(false);
    }

    //SAVE THE ALL SNACKS DATA
    const addAlldata = () => {
        sessionStorage.removeItem('addedItems');
        sessionStorage.removeItem('addedMainCourse');
        sessionStorage.removeItem('addedFunEatables');
        const sum =
            checkedValues.length +
            checkedValues2.length +
            checkedValues3.length +
            checkedValues4.length +
            checkedValues5.length +
            checkedValues6.length +
            checkedValues7.length +
            checkedValues8.length +
            checkedValues9.length +
            checkedValues10.length +
            checkedValues11.length +
            checkedValues12.length +
            checkedValues13.length;
        if (sum > 0) {
            sessionStorage.setItem('checkedValues', JSON.stringify(checkedValues));
            sessionStorage.setItem('checkedValues2', JSON.stringify(checkedValues2));
            sessionStorage.setItem('checkedValues3', JSON.stringify(checkedValues3));
            sessionStorage.setItem('checkedValues4', JSON.stringify(checkedValues4));
            sessionStorage.setItem('checkedValues5', JSON.stringify(checkedValues5));
            sessionStorage.setItem('checkedValues6', JSON.stringify(checkedValues6));
            sessionStorage.setItem('checkedValues7', JSON.stringify(checkedValues7));
            sessionStorage.setItem('checkedValues8', JSON.stringify(checkedValues8));
            sessionStorage.setItem('checkedValues9', JSON.stringify(checkedValues9));
            sessionStorage.setItem('checkedValues10', JSON.stringify(checkedValues10));
            sessionStorage.setItem('checkedValues11', JSON.stringify(checkedValues11));
            sessionStorage.setItem('checkedValues12', JSON.stringify(checkedValues12));
            sessionStorage.setItem('checkedValues13', JSON.stringify(checkedValues13));
            window.open('/birthdayAddOns', '_self')
        } else {
            alert('Please Selecty any Snack');
        }
    };

    const outerDivRef = useRef(null);

    useEffect(() => {
        setData(vegGravyList)
        setData2(vegStartersList)
        setData3(vegDryList)
        setData4(dalList)
        setData5(riceList)
        setData6(saladList)
        setData7(breadList)
        setData8(koftaList)
        setData9(dessertList)
        setData10(chickenStartersList)
        setData11(fishStartersList)
        setData12(chickenGravyList)
        setData13(fishGravyList)
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
        backgroundImage: 'url("/ODC/odcbg.png")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover'
    };

    //vegtag bg
    const vegtag = {
        backgroundImage: 'url("/ODC/vegtag.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    return (
        <div>
            <div style={backgroundStyle} className={styles3.mainBody}>
                <div className={styles3.headerSectn}>
                    <div className={styles3.logo}>
                        <Image src="/ODC/odctop.png" width="129.07px" height="92.06px" />
                    </div>
                    <div className={styles3.headerDetails}>
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
                    <h3>Customize Your Package</h3>
                    <hr />
                </div>
                {isVeg === true ? <div className={styles3.card} style={{ border: "1px solid green", margin: "auto", marginTop: "30px" }}>
                    <div style={vegtag} className={styles3.nvtag}>
                        <h4>{packageName}</h4>
                    </div>
                    <div className={styles3.blackCard}>
                        {itemsData.map((item, index) => (<h5 key={index}>{item.name}<span>{item.desc}</span></h5>))}
                    </div>
                </div>: "" }
                {isVeg !== true ? <div className={styles3.card} style={{ margin: "auto", marginTop: "30px" }}>
                    <div style={vegtag} className={styles3.nvtag}>
                        <h4>{packageName}</h4>
                    </div>
                    <div className={styles3.blackCard}>
                        {itemsData.map((item, index) => (<h5 style={{lineHeight: "85%"}} key={index}>{item.name}<span>{item.desc}</span></h5>))}
                    </div>
                </div> : ""}

                {/* VEG STARTERS */}

                { vegStarterQnty > 0 ? <div className={styles.itemsSelectionContainer}>
                    <div className={styles.vegSnackContainer}>
                        <h3>Veg Starters</h3>
                        {showDropdown2 && (<div onClick={selectVegHeavySnack} className={styles.selectItemSearchBox} id="srchbr">
                            <h6><FontAwesomeIcon icon={faMagnifyingGlass} /> Select {vegStarterQnty} Starter</h6>
                            <h6><FontAwesomeIcon icon={faAngleDown} /> Click here to select</h6>
                        </div>)}
                    </div>
                    <div className={styles2.selectedStarterContainer} style={{ marginTop: "10px" }}>
                        {!showSelectedMenu2 && checkedValues2.map((item, index) => (<div className={styles2.fstItem} key={index}>
                            <img className={styles2.itemImage} src={item.image} />
                            <div className={styles2.itemDetailsContainer}>
                                {item.veg === true ? <img className={styles2.vegLogo} src='/birthdayParty/vegLogo.png' /> : <img className={styles2.vegLogo} src='/birthdayParty/nvlogo.png' />}
                                <div style={{ width: "238px" }}>
                                    <h4>{item.name}</h4>
                                    {/* <p>{item.description}</p> */}
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
                                    placeholder="Search Veg Starter" />
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
                                                                <img className={styles2.vegLogo} src='/birthdayParty/vegLogo.png' />
                                                            ) : (
                                                                <img className={styles2.vegLogo} src='/birthdayParty/nvlogo.png' />
                                                            )}
                                                            <p onClick={() => document.getElementById(item.id).click()}>
                                                                {item.name}
                                                                <br />
                                                                {/* <span>{item.description}</span> */}
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
                    {checkedValues2.length !== vegStarterQnty ? <div className={styles2.addMoreBtn}>
                        <button onClick={selectVegHeavySnack}>+ Add {checkedValues2.length === 0 ? " Starter" : "More"}</button>
                    </div> : ""}
                </div>: ""}

                {/* CHICKEN STARTER */}

                {isVeg !== true ?<div className={styles.itemsSelectionContainer}>
                    <div className={styles.vegSnackContainer}>
                        <h3>Chicken Starters</h3>
                        {showDropdown10 && (<div onClick={selectChickenStarter} className={styles.selectItemSearchBox} id="srchbr">
                            <h6><FontAwesomeIcon icon={faMagnifyingGlass} /> Select {nvStarterQnty} Chicken Starter</h6>
                            <h6><FontAwesomeIcon icon={faAngleDown} /> Click here to select</h6>
                        </div>)}
                    </div>
                    <div className={styles2.selectedStarterContainer} style={{ marginTop: "10px" }}>
                        {!showSelectedMenu10 && checkedValues10.map((item, index) => (<div className={styles2.fstItem} key={index}>
                            <img className={styles2.itemImage} src={item.image} />
                            <div className={styles2.itemDetailsContainer}>
                                {item.veg === true ? <img className={styles2.vegLogo} src='/birthdayParty/vegLogo.png' /> : <img className={styles2.vegLogo} src='/birthdayParty/nvlogo.png' />}
                                <div style={{ width: "238px" }}>
                                    <h4>{item.name}</h4>
                                    {/* <p>{item.description}</p> */}
                                </div>
                                <div>
                                    <img className={styles2.trassLogo} src="/diy images/trash-alt.png" onClick={(e) => deleteChickenStarter(e, item)} />
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    {showSelectedMenu10 && (<div ref={outerDivRef} className={styles2.starterMenuContainer}>
                        <div id={styles2.starterSearchContent}>
                            <div>
                                <input type="text"
                                    value={searchValue10}
                                    onChange={searchStarter10}
                                    placeholder="Search Chicken Starter" />
                                <div id={styles2.starterList}>
                                    <ul>
                                        {chickenStarterData
                                            .sort((a, b) => (a.checked === b.checked ? 0 : a.checked ? -1 : 1))
                                            .map((item, index) => (
                                                <li key={item.id}>
                                                    <div className='d-flex justify-content-between'>
                                                        <div id={styles2.insideDivLi}>
                                                            <img src={item.image} width="30.05px" height="26.54px" />
                                                            {item.veg === true ? (
                                                                <img className={styles2.vegLogo} src='/birthdayParty/vegLogo.png' />
                                                            ) : (
                                                                <img className={styles2.vegLogo} src='/birthdayParty/nvlogo.png' />
                                                            )}
                                                            <p onClick={() => document.getElementById(item.id).click()}>
                                                                {item.name}
                                                                <br />
                                                                {/* <span>{item.description}</span> */}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <input
                                                                id={item.id}
                                                                type="checkbox"
                                                                checked={item.checked}
                                                                value={item.id}
                                                                onChange={(e) => handleCheckboxChange10(e, item)}
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
                    {checkedValues10.length + checkedValues11.length !== nvStarterQnty ? <div className={styles2.addMoreBtn}>
                        <button onClick={selectChickenStarter}>+ Add {checkedValues10.length === 0 ? "Starter" : "More"}</button>
                    </div> : ""}
                </div>:""}

                {/* FISH STARTER */}

                {isVeg !== true ?<div className={styles.itemsSelectionContainer}>
                    <div className={styles.vegSnackContainer}>
                        <h3>Fish Starters</h3>
                        {showDropdown11 && (<div onClick={selectFishStarter} className={styles.selectItemSearchBox} id="srchbr">
                            <h6><FontAwesomeIcon icon={faMagnifyingGlass} /> Select {nvStarterQnty} Fish Starter</h6>
                            <h6><FontAwesomeIcon icon={faAngleDown} /> Click here to select</h6>
                        </div>)}
                    </div>
                    <div className={styles2.selectedStarterContainer} style={{ marginTop: "10px" }}>
                        {!showSelectedMenu11 && checkedValues11.map((item, index) => (<div className={styles2.fstItem} key={index}>
                            <img className={styles2.itemImage} src={item.image} />
                            <div className={styles2.itemDetailsContainer}>
                                {item.veg === true ? <img className={styles2.vegLogo} src='/birthdayParty/vegLogo.png' /> : <img className={styles2.vegLogo} src='/birthdayParty/nvlogo.png' />}
                                <div style={{ width: "238px" }}>
                                    <h4>{item.name}</h4>
                                    {/* <p>{item.description}</p> */}
                                </div>
                                <div>
                                    <img className={styles2.trassLogo} src="/diy images/trash-alt.png" onClick={(e) => deleteFishStarter(e, item)} />
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    {showSelectedMenu11 && (<div ref={outerDivRef} className={styles2.starterMenuContainer}>
                        <div id={styles2.starterSearchContent}>
                            <div>
                                <input type="text"
                                    value={searchValue11}
                                    onChange={searchStarter11}
                                    placeholder="Search Fish Starter" />
                                <div id={styles2.starterList}>
                                    <ul>
                                        {fishStarterData
                                            .sort((a, b) => (a.checked === b.checked ? 0 : a.checked ? -1 : 1))
                                            .map((item, index) => (
                                                <li key={item.id}>
                                                    <div className='d-flex justify-content-between'>
                                                        <div id={styles2.insideDivLi}>
                                                            <img src={item.image} width="30.05px" height="26.54px" />
                                                            {item.veg === true ? (
                                                                <img className={styles2.vegLogo} src='/birthdayParty/vegLogo.png' />
                                                            ) : (
                                                                <img className={styles2.vegLogo} src='/birthdayParty/nvlogo.png' />
                                                            )}
                                                            <p onClick={() => document.getElementById(item.id).click()}>
                                                                {item.name}
                                                                <br />
                                                                {/* <span>{item.description}</span> */}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <input
                                                                id={item.id}
                                                                type="checkbox"
                                                                checked={item.checked}
                                                                value={item.id}
                                                                onChange={(e) => handleCheckboxChange11(e, item)}
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
                    {checkedValues10.length + checkedValues11.length !== nvStarterQnty ? <div className={styles2.addMoreBtn}>
                        <button onClick={selectFishStarter}>+ Add {checkedValues11.length === 0 ? "Starter" : "More"}</button>
                    </div> : ""}
                </div>: ""}

                {/* SALAD */}

                <div className={styles.itemsSelectionContainer}>
                    <div className={styles.vegSnackContainer}>
                        <h3>Salad</h3>
                        {showDropdown6 && (<div onClick={selectSalad} className={styles.selectItemSearchBox} id="srchbr">
                            <h6><FontAwesomeIcon icon={faMagnifyingGlass} /> Select {saladQnty} Salad</h6>
                            <h6><FontAwesomeIcon icon={faAngleDown} /> Click here to select</h6>
                        </div>)}
                    </div>
                    <div className={styles2.selectedStarterContainer} style={{ marginTop: "10px" }}>
                        {!showSelectedMenu6 && checkedValues6.map((item, index) => (<div className={styles2.fstItem} key={index}>
                            <img className={styles2.itemImage} src={item.image} />
                            <div className={styles2.itemDetailsContainer}>
                                {item.veg === true ? <img className={styles2.vegLogo} src='/birthdayParty/vegLogo.png' /> : <img className={styles2.vegLogo} src='/birthdayParty/nvlogo.png' />}
                                <div style={{ width: "238px" }}>
                                    <h4>{item.name}</h4>
                                    {/* <p>{item.description}</p> */}
                                </div>
                                <div>
                                    <img className={styles2.trassLogo} src="/diy images/trash-alt.png" onClick={(e) => deleteSalad(e, item)} />
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    {showSelectedMenu6 && (<div ref={outerDivRef} className={styles2.starterMenuContainer}>
                        <div id={styles2.starterSearchContent}>
                            <div>
                                <input type="text"
                                    value={searchValue6}
                                    onChange={searchStarter6}
                                    placeholder="Search Salad" />
                                <div id={styles2.starterList}>
                                    <ul>
                                        {saladData
                                            .sort((a, b) => (a.checked === b.checked ? 0 : a.checked ? -1 : 1))
                                            .map((item, index) => (
                                                <li key={item.id}>
                                                    <div className='d-flex justify-content-between'>
                                                        <div id={styles2.insideDivLi}>
                                                            <img src={item.image} width="30.05px" height="26.54px" />
                                                            {item.veg === true ? (
                                                                <img className={styles2.vegLogo} src='/birthdayParty/vegLogo.png' />
                                                            ) : (
                                                                <img className={styles2.vegLogo} src='/birthdayParty/nvlogo.png' />
                                                            )}
                                                            <p onClick={() => document.getElementById(item.id).click()}>
                                                                {item.name}
                                                                <br />
                                                                {/* <span>{item.description}</span> */}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <input
                                                                id={item.id}
                                                                type="checkbox"
                                                                checked={item.checked}
                                                                value={item.id}
                                                                onChange={(e) => handleCheckboxChange6(e, item)}
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
                    {checkedValues6.length !== saladQnty ? <div className={styles2.addMoreBtn}>
                        <button onClick={selectSalad}>+ Add {checkedValues6.length === 0 ? "Salad" : "More"}</button>
                    </div> : ""}
                </div>

                {/* BREAD */}

                <div className={styles.itemsSelectionContainer}>
                    <div className={styles.vegSnackContainer}>
                        <h3>Bread</h3>
                        {showDropdown7 && (<div onClick={selectBread} className={styles.selectItemSearchBox} id="srchbr">
                            <h6><FontAwesomeIcon icon={faMagnifyingGlass} /> Select {breadQnty} Bread</h6>
                            <h6><FontAwesomeIcon icon={faAngleDown} /> Click here to select</h6>
                        </div>)}
                    </div>
                    <div className={styles2.selectedStarterContainer} style={{ marginTop: "10px" }}>
                        {!showSelectedMenu7 && checkedValues7.map((item, index) => (<div className={styles2.fstItem} key={index}>
                            <img className={styles2.itemImage} src={item.image} />
                            <div className={styles2.itemDetailsContainer}>
                                {item.veg === true ? <img className={styles2.vegLogo} src='/birthdayParty/vegLogo.png' /> : <img className={styles2.vegLogo} src='/birthdayParty/nvlogo.png' />}
                                <div style={{ width: "238px" }}>
                                    <h4>{item.name}</h4>
                                    {/* <p>{item.description}</p> */}
                                </div>
                                <div>
                                    <img className={styles2.trassLogo} src="/diy images/trash-alt.png" onClick={(e) => deleteBread(e, item)} />
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    {showSelectedMenu7 && (<div ref={outerDivRef} className={styles2.starterMenuContainer}>
                        <div id={styles2.starterSearchContent}>
                            <div>
                                <input type="text"
                                    value={searchValue7}
                                    onChange={searchStarter7}
                                    placeholder="Search Bread" />
                                <div id={styles2.starterList}>
                                    <ul>
                                        {breadData
                                            .sort((a, b) => (a.checked === b.checked ? 0 : a.checked ? -1 : 1))
                                            .map((item, index) => (
                                                <li key={item.id}>
                                                    <div className='d-flex justify-content-between'>
                                                        <div id={styles2.insideDivLi}>
                                                            <img src={item.image} width="30.05px" height="26.54px" />
                                                            {item.veg === true ? (
                                                                <img className={styles2.vegLogo} src='/birthdayParty/vegLogo.png' />
                                                            ) : (
                                                                <img className={styles2.vegLogo} src='/birthdayParty/nvlogo.png' />
                                                            )}
                                                            <p onClick={() => document.getElementById(item.id).click()}>
                                                                {item.name}
                                                                <br />
                                                                {/* <span>{item.description}</span> */}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <input
                                                                id={item.id}
                                                                type="checkbox"
                                                                checked={item.checked}
                                                                value={item.id}
                                                                onChange={(e) => handleCheckboxChange7(e, item)}
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
                    {checkedValues7.length !== breadQnty ? <div className={styles2.addMoreBtn}>
                        <button onClick={selectBread}>+ Add {checkedValues7.length === 0 ? "Bread" : "More"}</button>
                    </div> : ""}
                </div>

                {/* RICE */}

                <div className={styles.itemsSelectionContainer}>
                    <div className={styles.vegSnackContainer}>
                        <h3>Rice</h3>
                        {showDropdown5 && (<div onClick={selectRice} className={styles.selectItemSearchBox} id="srchbr">
                            <h6><FontAwesomeIcon icon={faMagnifyingGlass} /> Select {riceQnty} Rice</h6>
                            <h6><FontAwesomeIcon icon={faAngleDown} /> Click here to select</h6>
                        </div>)}
                    </div>
                    <div className={styles2.selectedStarterContainer} style={{ marginTop: "10px" }}>
                        {!showSelectedMenu5 && checkedValues5.map((item, index) => (<div className={styles2.fstItem} key={index}>
                            <img className={styles2.itemImage} src={item.image} />
                            <div className={styles2.itemDetailsContainer}>
                                {item.veg === true ? <img className={styles2.vegLogo} src='/birthdayParty/vegLogo.png' /> : <img className={styles2.vegLogo} src='/birthdayParty/nvlogo.png' />}
                                <div style={{ width: "238px" }}>
                                    <h4>{item.name}</h4>
                                    {/* <p>{item.description}</p> */}
                                </div>
                                <div>
                                    <img className={styles2.trassLogo} src="/diy images/trash-alt.png" onClick={(e) => deleteRice(e, item)} />
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    {showSelectedMenu5 && (<div ref={outerDivRef} className={styles2.starterMenuContainer}>
                        <div id={styles2.starterSearchContent}>
                            <div>
                                <input type="text"
                                    value={searchValue5}
                                    onChange={searchStarter5}
                                    placeholder="Search Rice" />
                                <div id={styles2.starterList}>
                                    <ul>
                                        {riceData
                                            .sort((a, b) => (a.checked === b.checked ? 0 : a.checked ? -1 : 1))
                                            .map((item, index) => (
                                                <li key={item.id}>
                                                    <div className='d-flex justify-content-between'>
                                                        <div id={styles2.insideDivLi}>
                                                            <img src={item.image} width="30.05px" height="26.54px" />
                                                            {item.veg === true ? (
                                                                <img className={styles2.vegLogo} src='/birthdayParty/vegLogo.png' />
                                                            ) : (
                                                                <img className={styles2.vegLogo} src='/birthdayParty/nvlogo.png' />
                                                            )}
                                                            <p onClick={() => document.getElementById(item.id).click()}>
                                                                {item.name}
                                                                <br />
                                                                {/* <span>{item.description}</span> */}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <input
                                                                id={item.id}
                                                                type="checkbox"
                                                                checked={item.checked}
                                                                value={item.id}
                                                                onChange={(e) => handleCheckboxChange5(e, item)}
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
                    {checkedValues5.length !== riceQnty ? <div className={styles2.addMoreBtn}>
                        <button onClick={selectRice}>+ Add {checkedValues5.length === 0 ? "Rice" : "More"}</button>
                    </div> : ""}
                </div>

                {/* VEG DRY */}

                <div className={styles.itemsSelectionContainer}>
                        <div className={styles.vegSnackContainer}>
                            <h3>Veg Dry</h3>
                            {showDropdown3 && (<div onClick={selectNonVegSnack} className={styles.selectItemSearchBox} id="srchbr">
                                <h6><FontAwesomeIcon icon={faMagnifyingGlass} /> Select {vegDryQnty} Veg Dry</h6>
                                <h6><FontAwesomeIcon icon={faAngleDown} /> Click here to select</h6>
                            </div>)}
                        </div>
                        <div className={styles2.selectedStarterContainer} style={{ marginTop: "10px" }}>
                            {!showSelectedMenu3 && checkedValues3.map((item, index) => (<div className={styles2.fstItem} key={index}>
                                <img className={styles2.itemImage} src={item.image} />
                                <div className={styles2.itemDetailsContainer}>
                                    {item.veg === true ? <img className={styles2.vegLogo} src='/birthdayParty/vegLogo.png' /> : <img className={styles2.vegLogo} src='/birthdayParty/nvlogo.png' />}
                                    <div style={{ width: "238px" }}>
                                        <h4>{item.name}</h4>
                                        {/* <p>{item.description}</p> */}
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
                                        placeholder="Search Veg Dry" />
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
                                                                    <img className={styles2.vegLogo} src='/birthdayParty/vegLogo.png' />
                                                                ) : (
                                                                    <img className={styles2.vegLogo} src='/birthdayParty/nvlogo.png' />
                                                                )}
                                                                <p onClick={() => document.getElementById(item.id).click()}>
                                                                    {item.name}
                                                                    <br />
                                                                    {/* <span>{item.description}</span> */}
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
                        {checkedValues3.length + checkedValues.length !== vegDryQnty ? <div className={styles2.addMoreBtn}>
                            <button onClick={selectNonVegSnack}>+ Add {checkedValues3.length === 0 ? "veg Dry" : "More"}</button>
                        </div> : ""}
                    </div>

                {/* VEG GRAVY SELECTION */}

                <div className={styles.itemsSelectionContainer}>
                    <div className={styles.vegSnackContainer}>
                        <h3>Veg Gravy</h3>
                        {showDropdown && (<div onClick={selectVegSnack} className={styles.selectItemSearchBox} id="srchbr">
                            <h6><FontAwesomeIcon icon={faMagnifyingGlass} /> Select {vegGravyQnty} Gravy</h6>
                            <h6><FontAwesomeIcon icon={faAngleDown} /> Click here to select</h6>
                        </div>)}
                    </div>
                    <div className={styles2.selectedStarterContainer} style={{ marginTop: "10px" }}>
                        {!showSelectedMenu && checkedValues.map((item, index) => (<div className={styles2.fstItem} key={index}>
                            <img className={styles2.itemImage} src={item.image} />
                            <div className={styles2.itemDetailsContainer}>
                                {item.veg === true ? <img className={styles2.vegLogo} src='/birthdayParty/vegLogo.png' /> : <img className={styles2.vegLogo} src='/birthdayParty/nvlogo.png' />}
                                <div style={{ width: "238px" }}>
                                    <h4>{item.name}</h4>
                                    {/* <p>{item.description}</p> */}
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
                                    placeholder="Search Veg Gravy" />
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
                                                                <img className={styles2.vegLogo} src='/birthdayParty/vegLogo.png' />
                                                            ) : (
                                                                <img className={styles2.vegLogo} src='/birthdayParty/nvlogo.png' />
                                                            )}
                                                            <p onClick={() => document.getElementById(item.id).click()} >
                                                                {item.name}
                                                                < br />
                                                                {/* <span>{item.description}</span> */}
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
                    {checkedValues3.length + checkedValues.length !== vegDryQnty ? <div className={styles2.addMoreBtn}>
                        <button onClick={selectVegSnack}>+ Add {checkedValues.length === 0 ? "Gravy" : "More"}</button>
                    </div> : ""}
                </div>

                {/* DAL */}

                <div className={styles.itemsSelectionContainer}>
                        <div className={styles.vegSnackContainer}>
                            <h3>Dal</h3>
                            {showDropdown4 && (<div onClick={selectNonVegHeavySnack} className={styles.selectItemSearchBox} id="srchbr">
                                <h6><FontAwesomeIcon icon={faMagnifyingGlass} /> Select {dalQnty} Dal</h6>
                                <h6><FontAwesomeIcon icon={faAngleDown} /> Click here to select</h6>
                            </div>)}
                        </div>
                        <div className={styles2.selectedStarterContainer} style={{ marginTop: "10px" }}>
                            {!showSelectedMenu4 && checkedValues4.map((item, index) => (<div className={styles2.fstItem} key={index}>
                                <img className={styles2.itemImage} src={item.image} />
                                <div className={styles2.itemDetailsContainer}>
                                    {item.veg === true ? <img className={styles2.vegLogo} src='/birthdayParty/vegLogo.png' /> : <img className={styles2.vegLogo} src='/birthdayParty/nvlogo.png' />}
                                    <div style={{ width: "238px" }}>
                                        <h4>{item.name}</h4>
                                        {/* <p>{item.description}</p> */}
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
                                        placeholder="Search Dal" />
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
                                                                    <img className={styles2.vegLogo} src='/birthdayParty/vegLogo.png' />
                                                                ) : (
                                                                    <img className={styles2.vegLogo} src='/birthdayParty/nvlogo.png' />
                                                                )}
                                                                <p onClick={() => document.getElementById(item.id).click()}>
                                                                    {item.name}
                                                                    <br />
                                                                    {/* <span>{item.description}</span> */}
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
                        {checkedValues4.length !== dalQnty ? <div className={styles2.addMoreBtn}>
                            <button onClick={selectNonVegHeavySnack}>+ Add {checkedValues4.length === 0 ? "Dal" : "More"}</button>
                        </div> : ""}
                    </div>

                {/* KOFTA */}

                {koftaQnty > 0 ? <div className={styles.itemsSelectionContainer}>
                    <div className={styles.vegSnackContainer}>
                        <h3>Kofta</h3>
                        {showDropdown8 && (<div onClick={selectKofta} className={styles.selectItemSearchBox} id="srchbr">
                            <h6><FontAwesomeIcon icon={faMagnifyingGlass} /> Select {koftaQnty} Kofta</h6>
                            <h6><FontAwesomeIcon icon={faAngleDown} /> Click here to select</h6>
                        </div>)}
                    </div>
                    <div className={styles2.selectedStarterContainer} style={{ marginTop: "10px" }}>
                        {!showSelectedMenu8 && checkedValues8.map((item, index) => (<div className={styles2.fstItem} key={index}>
                            <img className={styles2.itemImage} src={item.image} />
                            <div className={styles2.itemDetailsContainer}>
                                {item.veg === true ? <img className={styles2.vegLogo} src='/birthdayParty/vegLogo.png' /> : <img className={styles2.vegLogo} src='/birthdayParty/nvlogo.png' />}
                                <div style={{ width: "238px" }}>
                                    <h4>{item.name}</h4>
                                    {/* <p>{item.description}</p> */}
                                </div>
                                <div>
                                    <img className={styles2.trassLogo} src="/diy images/trash-alt.png" onClick={(e) => deleteKofta(e, item)} />
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    {showSelectedMenu8 && (<div ref={outerDivRef} className={styles2.starterMenuContainer}>
                        <div id={styles2.starterSearchContent}>
                            <div>
                                <input type="text"
                                    value={searchValue8}
                                    onChange={searchStarter8}
                                    placeholder="Search Kofta" />
                                <div id={styles2.starterList}>
                                    <ul>
                                        {koftaData
                                            .sort((a, b) => (a.checked === b.checked ? 0 : a.checked ? -1 : 1))
                                            .map((item, index) => (
                                                <li key={item.id}>
                                                    <div className='d-flex justify-content-between'>
                                                        <div id={styles2.insideDivLi}>
                                                            <img src={item.image} width="30.05px" height="26.54px" />
                                                            {item.veg === true ? (
                                                                <img className={styles2.vegLogo} src='/birthdayParty/vegLogo.png' />
                                                            ) : (
                                                                <img className={styles2.vegLogo} src='/birthdayParty/nvlogo.png' />
                                                            )}
                                                            <p onClick={() => document.getElementById(item.id).click()}>
                                                                {item.name}
                                                                <br />
                                                                {/* <span>{item.description}</span> */}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <input
                                                                id={item.id}
                                                                type="checkbox"
                                                                checked={item.checked}
                                                                value={item.id}
                                                                onChange={(e) => handleCheckboxChange8(e, item)}
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
                    {checkedValues8.length !== koftaQnty ? <div className={styles2.addMoreBtn}>
                        <button onClick={selectKofta}>+ Add {checkedValues8.length === 0 ? "Kofta" : "More"}</button>
                    </div> : ""}
                </div> : ""}

                {/* CHICKEN GRAVY */}

                {isVeg !== true ?<div className={styles.itemsSelectionContainer}>
                    <div className={styles.vegSnackContainer}>
                        <h3>Chicken Gravy</h3>
                        {showDropdown12 && (<div onClick={selectChickenGravy} className={styles.selectItemSearchBox} id="srchbr">
                            <h6><FontAwesomeIcon icon={faMagnifyingGlass} /> Select {nvGravyQnty} Chicken Gravy</h6>
                            <h6><FontAwesomeIcon icon={faAngleDown} /> Click here to select</h6>
                        </div>)}
                    </div>
                    <div className={styles2.selectedStarterContainer} style={{ marginTop: "10px" }}>
                        {!showSelectedMenu12 && checkedValues12.map((item, index) => (<div className={styles2.fstItem} key={index}>
                            <img className={styles2.itemImage} src={item.image} />
                            <div className={styles2.itemDetailsContainer}>
                                {item.veg === true ? <img className={styles2.vegLogo} src='/birthdayParty/vegLogo.png' /> : <img className={styles2.vegLogo} src='/birthdayParty/nvlogo.png' />}
                                <div style={{ width: "238px" }}>
                                    <h4>{item.name}</h4>
                                    {/* <p>{item.description}</p> */}
                                </div>
                                <div>
                                    <img className={styles2.trassLogo} src="/diy images/trash-alt.png" onClick={(e) => deleteChickenGravy(e, item)} />
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    {showSelectedMenu12 && (<div ref={outerDivRef} className={styles2.starterMenuContainer}>
                        <div id={styles2.starterSearchContent}>
                            <div>
                                <input type="text"
                                    value={searchValue12}
                                    onChange={searchStarter12}
                                    placeholder="Search Chicken Gravy" />
                                <div id={styles2.starterList}>
                                    <ul>
                                        {chickenGravyData
                                            .sort((a, b) => (a.checked === b.checked ? 0 : a.checked ? -1 : 1))
                                            .map((item, index) => (
                                                <li key={item.id}>
                                                    <div className='d-flex justify-content-between'>
                                                        <div id={styles2.insideDivLi}>
                                                            <img src={item.image} width="30.05px" height="26.54px" />
                                                            {item.veg === true ? (
                                                                <img className={styles2.vegLogo} src='/birthdayParty/vegLogo.png' />
                                                            ) : (
                                                                <img className={styles2.vegLogo} src='/birthdayParty/nvlogo.png' />
                                                            )}
                                                            <p onClick={() => document.getElementById(item.id).click()}>
                                                                {item.name}
                                                                <br />
                                                                {/* <span>{item.description}</span> */}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <input
                                                                id={item.id}
                                                                type="checkbox"
                                                                checked={item.checked}
                                                                value={item.id}
                                                                onChange={(e) => handleCheckboxChange12(e, item)}
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
                    {checkedValues12.length + checkedValues13.length !== nvGravyQnty ? <div className={styles2.addMoreBtn}>
                        <button onClick={selectChickenGravy}>+ Add {checkedValues12.length === 0 ? "Gravy" : "More"}</button>
                    </div>:""}
                </div>: ""}
                {/* FISH GRAVY */}

                {isVeg !== true ?<div className={styles.itemsSelectionContainer}>
                    <div className={styles.vegSnackContainer}>
                        <h3>Fish Gravy</h3>
                        {showDropdown13 && (<div onClick={selectFishGravy} className={styles.selectItemSearchBox} id="srchbr">
                            <h6><FontAwesomeIcon icon={faMagnifyingGlass} /> Select {nvGravyQnty} Fish Gravy</h6>
                            <h6><FontAwesomeIcon icon={faAngleDown} /> Click here to select</h6>
                        </div>)}
                    </div>
                    <div className={styles2.selectedStarterContainer} style={{ marginTop: "10px" }}>
                        {!showSelectedMenu13 && checkedValues13.map((item, index) => (<div className={styles2.fstItem} key={index}>
                            <img className={styles2.itemImage} src={item.image} />
                            <div className={styles2.itemDetailsContainer}>
                                {item.veg === true ? <img className={styles2.vegLogo} src='/birthdayParty/vegLogo.png' /> : <img className={styles2.vegLogo} src='/birthdayParty/nvlogo.png' />}
                                <div style={{ width: "238px" }}>
                                    <h4>{item.name}</h4>
                                    {/* <p>{item.description}</p> */}
                                </div>
                                <div>
                                    <img className={styles2.trassLogo} src="/diy images/trash-alt.png" onClick={(e) => deleteFishGravy(e, item)} />
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    {showSelectedMenu13 && (<div ref={outerDivRef} className={styles2.starterMenuContainer}>
                        <div id={styles2.starterSearchContent}>
                            <div>
                                <input type="text"
                                    value={searchValue13}
                                    onChange={searchStarter13}
                                    placeholder="Search Fish Gravy" />
                                <div id={styles2.starterList}>
                                    <ul>
                                        {fishGravyData
                                            .sort((a, b) => (a.checked === b.checked ? 0 : a.checked ? -1 : 1))
                                            .map((item, index) => (
                                                <li key={item.id}>
                                                    <div className='d-flex justify-content-between'>
                                                        <div id={styles2.insideDivLi}>
                                                            <img src={item.image} width="30.05px" height="26.54px" />
                                                            {item.veg === true ? (
                                                                <img className={styles2.vegLogo} src='/birthdayParty/vegLogo.png' />
                                                            ) : (
                                                                <img className={styles2.vegLogo} src='/birthdayParty/nvlogo.png' />
                                                            )}
                                                            <p onClick={() => document.getElementById(item.id).click()}>
                                                                {item.name}
                                                                <br />
                                                                {/* <span>{item.description}</span> */}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <input
                                                                id={item.id}
                                                                type="checkbox"
                                                                checked={item.checked}
                                                                value={item.id}
                                                                onChange={(e) => handleCheckboxChange13(e, item)}
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
                    {checkedValues12.length + checkedValues13.length !== nvGravyQnty ? <div className={styles2.addMoreBtn}>
                        <button onClick={selectFishGravy}>+ Add {checkedValues13.length === 0 ? "Gravy" : "More"}</button>
                    </div>:""}
                </div>: ""}

                {/* DESSERT */}

                <div className={styles.itemsSelectionContainer}>
                    <div className={styles.vegSnackContainer}>
                        <h3>Dessert</h3>
                        {showDropdown9 && (<div onClick={selectDessert} className={styles.selectItemSearchBox} id="srchbr">
                            <h6><FontAwesomeIcon icon={faMagnifyingGlass} /> Select {dessertQnty} Dessert</h6>
                            <h6><FontAwesomeIcon icon={faAngleDown} /> Click here to select</h6>
                        </div>)}
                    </div>
                    <div className={styles2.selectedStarterContainer} style={{ marginTop: "10px" }}>
                        {!showSelectedMenu9 && checkedValues9.map((item, index) => (<div className={styles2.fstItem} key={index}>
                            <img className={styles2.itemImage} src={item.image} />
                            <div className={styles2.itemDetailsContainer}>
                                {item.veg === true ? <img className={styles2.vegLogo} src='/birthdayParty/vegLogo.png' /> : <img className={styles2.vegLogo} src='/birthdayParty/nvlogo.png' />}
                                <div style={{ width: "238px" }}>
                                    <h4>{item.name}</h4>
                                    {/* <p>{item.description}</p> */}
                                </div>
                                <div>
                                    <img className={styles2.trassLogo} src="/diy images/trash-alt.png" onClick={(e) => deleteDessert(e, item)} />
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    {showSelectedMenu9 && (<div ref={outerDivRef} className={styles2.starterMenuContainer}>
                        <div id={styles2.starterSearchContent}>
                            <div>
                                <input type="text"
                                    value={searchValue9}
                                    onChange={searchStarter9}
                                    placeholder="Search Dessert" />
                                <div id={styles2.starterList}>
                                    <ul>
                                        {dessertData
                                            .sort((a, b) => (a.checked === b.checked ? 0 : a.checked ? -1 : 1))
                                            .map((item, index) => (
                                                <li key={item.id}>
                                                    <div className='d-flex justify-content-between'>
                                                        <div id={styles2.insideDivLi}>
                                                            <img src={item.image} width="30.05px" height="26.54px" />
                                                            {item.veg === true ? (
                                                                <img className={styles2.vegLogo} src='/birthdayParty/vegLogo.png' />
                                                            ) : (
                                                                <img className={styles2.vegLogo} src='/birthdayParty/nvlogo.png' />
                                                            )}
                                                            <p onClick={() => document.getElementById(item.id).click()}>
                                                                {item.name}
                                                                <br />
                                                                {/* <span>{item.description}</span> */}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <input
                                                                id={item.id}
                                                                type="checkbox"
                                                                checked={item.checked}
                                                                value={item.id}
                                                                onChange={(e) => handleCheckboxChange9(e, item)}
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
                    {checkedValues9.length != dessertQnty ?<div className={styles2.addMoreBtn}>
                        <button onClick={selectDessert}>+ Add {checkedValues9.length === 0 ? "Dessert" : "More"}</button>
                    </div>:""}
                </div>

                <div className='d-flex justify-content-around'>
                    <div className={styles.checkpriceBtn}>
                        <button onClick={checkprice}>Check Price</button>
                    </div>
                    {/* <div className={styles.addonsbtn}>
                        <button onClick={addAlldata}>Add Ons</button>
                    </div> */}
                </div>
                {reminder && (<div className={styles.reminderPopup}>
                    <div className={styles.reminder}>
                        <h3>Reminder</h3>
                        <h5>You Have Reached Maximum Number Of Selections For<br /><span>{reminderName}</span></h5>
                    </div>
                    <div>
                        <button onClick={closeReminder}>Got It!</button>
                    </div>
                </div>)}
                {showPopup && (<form className={styles.detailsPopup}>
                    <div className={styles.inputfield}>
                        <h5>*<span>Details</span>*</h5>
                        <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
                        <input type='number' placeholder='WhatsApp No.' value={number} onChange={(e) => setNumber(e.target.value)} required />
                        <input type='email' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div style={{ textAlign: "center", marginTop: "25px" }}>
                        <button onClick={submitDetails} type='submit' id={styles.instantQuoteBtn}>Get Instant Quote!</button>
                        <button onClick={goBackBtn} id={styles.backBtn}><FontAwesomeIcon icon={faArrowLeft} />  Go Back To Menu</button>
                    </div>
                </form>)}
            </div >
        </div>
    )
}

export default CustomizeAocPkg