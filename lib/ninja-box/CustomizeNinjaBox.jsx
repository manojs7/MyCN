import React from 'react'
import { useEffect, useState } from "react";
// import styles from "$styles/Customize.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faArrowLeftLong, faMagnifyingGlass, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import styles from '/styles/NewCustomizePkg.module.scss';
import styles2 from '/styles/NewDiy.module.scss';

import 'bootstrap/dist/css/bootstrap.css';
import { useRouter } from "next/router";
import { useAppMenu } from "$lib/menuContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Slider from "react-slick/lib/slider";
import Swal from 'sweetalert2'




const CustomizeNinjaBox = () => {


  const { menu, cuisines, allMenus, cities } = useAppMenu();
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const router = useRouter();
  const [veg, setVeg] = useState(10);
  const [nonVeg, setNonVeg] = useState(10);
  const [people, setPeople] = useState(20);

  const [cuisine, setCuisine] = useState('All');
  const [knowMore, setKnowMore] = useState([]);
  const [isSmall, setIsSmall] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileno, setPhone] = useState("");
  const [city, setCity] = useState("");


  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setstartTime] = useState();

  const [selectedOptions, setSelectedOptions] = useState();
  const [data, setData] = useState([])
  const [datas, setDatas] = useState([])

  const [isDisabled, setIsDisabled] = useState(true);
  const [isDisabledStarter, setIsDisabledStarter] = useState(true);
  const [isDisabledMains, setIsDisabledMains] = useState(true);
  const [isDisabledBread, setIsDisabledBread] = useState(true);
  const [isDisabledRice, setIsDisabledRice] = useState(true);
  const [showDropdown, setShowDropdown] = useState(true)
  const [showDropdown2, setShowDropdown2] = useState(true)
  const [showDropdown3, setShowDropdown3] = useState(true)
  const [showDropdown4, setShowDropdown4] = useState(true)
  const [refURL, setRefURL] = useState();

  const [isShown, setIsShown] = useState(false);
  const [hideRecommenedQnty, setHideRecommenedQnty] = useState(false);
  const [hideMainsRecommenedQnty, setHideMainsRecommenedQnty] = useState(false);
  const [hideBreadRecommenedQnty, setHideBreadRecommenedQnty] = useState(false);
  const [hideDessertRecommenedQnty, setHideDessertRecommenedQnty] = useState(false);

  const [state, setState] = useState({
    showDiv1: true,
    showDiv2: false
  });
  const [startersData, setStartersData] = useState([]);
  const [startersData2, setStartersData2] = useState([]);
  const [mainData, setMainData] = useState([]);
  const [mainData2, setMainData2] = useState([]);
  const [dessertData, setDessertData] = useState([]);
  const [dessertData2, setDessertData2] = useState([]);
  const [breadRiceData, setBreadRiceData] = useState([]);
  const [breadRiceData2, setBreadRiceData2] = useState([]);

  const [starters, setStarters] = useState([]);
  const [mains, setMains] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [breadRice, setBreadRice] = useState([]);
  const [highestPrice, setHighestPrice] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [grandTotal, setgrandTotal] = useState(0);
  const [buffet, setbuffet] = useState(0);
  const [GST, setGST] = useState(0);

  const [isStarterChange, setIsStarterChange] = useState(false);
  const [isMainChange, setIsMainChange] = useState(false);
  const [isBreadChange, setIsBreadChange] = useState(false);
  const [isDessertChange, setIsDessertChange] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const [showPriceList, setShowPriceList] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    allMenus.sort(function (a, b) {
      const nameA = a.name.split(" ")[0].toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.split(" ")[0].toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });

    // reference url
    if (sessionStorage.getItem("first_url") === null) {
      const catch_url = sessionStorage.setItem("first_url", "x");
    } else {
      let ref_url = sessionStorage.getItem("first_url");
      setRefURL(ref_url);
    }

    // removing duplicate
    const result = allMenus?.reduce((finalArray, current) => {
      let obj = finalArray?.find((item) => item.name === current.name);

      // console.log('duplicate',result)
      if (obj) {
        return finalArray;
      }
      return finalArray.concat([current]);
    }, [])


    setStartersData(result.filter((d) => d.mealType === "Starter"));
    setStartersData2(result.filter((d) => d.mealType === "Starter"));
    setMainData(result.filter((d) => d.mealType === "Main course"));
    setMainData2(result.filter((d) => d.mealType === "Main course"));
    setDessertData(result.filter((d) => d.mealType === "Dessert"));
    setDessertData2(result.filter((d) => d.mealType === "Dessert"));
    setBreadRiceData(result.filter((d) => d.mealType === "Bread+Rice"));
    setBreadRiceData2(result.filter((d) => d.mealType === "Bread+Rice"));

    const newMainData = allMenus.filter((d) => d.mealType === "Main course");

    newMainData.sort(function (a, b) {
      return parseInt(b.selling_price) - parseInt(a.selling_price);
    });
    setHighestPrice(newMainData[0]);
  }, []);



  // filtering data according to cuisine
  const handleCuisine = (index) => {
    setCuisine(index);
    if (index === "All") {
      setStartersData(startersData2);
      setMainData(mainData2);
      setBreadRiceData(breadRiceData2);
      setDessertData(dessertData2);
    } else {
      const filterStarter = startersData2.filter(
        (d) => d.cuisine === index
      );
      setStartersData(filterStarter);

      const filterMain = mainData2.filter((d) => d.cuisine === index);
      setMainData(filterMain);

      const filterBreadData = breadRiceData2.filter(
        (d) => d.cuisine === index
      );
      setBreadRiceData(filterBreadData);

      const filterDessertData = dessertData2.filter(
        (d) => d.cuisine === index
      );
      setDessertData(filterDessertData);
    }
  };

  const handleCity = (city) => {
    setCity(city);

    const filterStarter = startersData2.filter(
      (d) => d.city === city
    );
    setStartersData(filterStarter);

    const filterMain = mainData2.filter((d) => d.city === city);
    setMainData(filterMain);

    const filterBreadData = breadRiceData2.filter(
      (d) => d.city === city
    );
    setBreadRiceData(filterBreadData);

    const filterDessertData = dessertData2.filter(
      (d) => d.city === city
    );
    setDessertData(filterDessertData);

  };

  const handleVegNonVegGuest = (name, value) => {
    if (value < 0 || !value) {
      name === "veg" ? setVeg(0) : setNonVeg(0);
    } else {

    }
    name === "veg" ? setVeg(value) : setNonVeg(value);
    console.log("guest", veg, nonVeg);
    people = veg + nonVeg;
    setPeople(people);

    if (veg > 0 && nonVeg === 0) {
      // showing only veg

      setStartersData((prev) => prev.filter((d) => d.veg === true));
      setMainData((prev) => prev.filter((d) => d.veg === true));
      setBreadRiceData((prev) => prev.filter((d) => d.veg === true));
    }
    else {
      setStartersData(startersData2);
      setMainData(mainData2);
      setBreadRiceData(breadRiceData2);

    }


    // setStarters([]);
    // setMains([]);
    // setDesserts([]);
    // setBreadRice([]);
  };

  const [searchValue, setSearchValue] = React.useState('');
  const [searchMainsValue, setSearchMainsValue] = React.useState('');
  const [searchBreadValue, setSearchBreadValue] = React.useState('');
  const [searchDessertValue, setSearchDessertValue] = React.useState('');
  const [showSelectedMenu, setShowSelectedMenu] = useState(false);
  const [showSelectedMenu2, setShowSelectedMenu2] = useState(false);
  const [showSelectedMenu3, setShowSelectedMenu3] = useState(false);
  const [showSelectedMenu4, setShowSelectedMenu4] = useState(false);

  //search Starter
  const searchStarter = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredData = startersData.filter((temp) =>
    temp.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  //search Mains
  const searchMains = (e) => {
    setSearchMainsValue(e.target.value);
  };

  const filteredMainsData = mainData.filter((temp) =>
    temp.name.toLowerCase().includes(searchMainsValue.toLowerCase())
  );

  //search Bread
  const searchBread = (e) => {
    setSearchBreadValue(e.target.value);
  };

  const filteredBreadData = breadRiceData.filter((temp) =>
    temp.name.toLowerCase().includes(searchBreadValue.toLowerCase())
  );

  //search Dessert
  const searchDessert = (e) => {
    setSearchDessertValue(e.target.value);
  };

  const filteredDessertData = dessertData.filter((temp) =>
    temp.name.toLowerCase().includes(searchDessertValue.toLowerCase())
  );


  const handleDiv1Click = () => {
    if (!checkFirstValidation()) {
      return false;
    }
    setShowSelectedMenu(true);
    setShowDropdown(false)

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
  const handleDiv2Click = () => {

    if (!checkFirstValidation()) {
      return false;
    }

    setShowSelectedMenu2(true);
    setShowDropdown2(false)

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
  const handleDiv3Click = () => {

    if (!checkFirstValidation()) {
      return false;
    }

    setShowSelectedMenu3(true);
    setShowDropdown3(false)

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
  const handleDiv4Click = () => {

    if (!checkFirstValidation()) {
      return false;
    }

    setShowSelectedMenu4(true);
    setShowDropdown4(false)

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
    setShowSelectedMenu2(false);
    setShowDropdown2(true);
    setShowSelectedMenu3(false);
    setShowDropdown3(true);
    setShowSelectedMenu4(false);
    setShowDropdown4(true);
    setState({
      showDiv1: true,
      showDiv2: false
    });
  };

  const deleteMenu = (item) => {
    setCheckedValues(checkedValues.filter(v => v.name !== item.name));
  }

  const [checkedValues, setCheckedValues] = React.useState([]);

  const handleCheckboxChange = (e, index, item, type) => {
    if (type === "starters") {
      handleStatersAdd(item.name, item.id)
    }
    if (type === "mains") {
      handleMainAdd(item.name, item.id)
    }
    if (type === "desserts") {
      handleDesertsAdd(item.name, item.id)
    }
    if (type === "Bread+Rice") {
      handleBreadRiceAdd(item.name, item.id)
    }

    const value = item;
    if (e.target.checked) {
      value.checked = 'checked';
      setCheckedValues([...checkedValues, value]);
    } else {
      value.checked = '';
      setCheckedValues(checkedValues.filter(v => v.id !== value.id));
      handleDelete(index, type)
    }

  }
  useEffect(() => {


    // sendRequest();

    // starter value change after veg and non-veg guest change
    if (veg === 0 && nonVeg === 0) return;
    let temp = [...starters];
    if (veg > 0 && nonVeg === 0) {
      // showing only veg
      setStartersData((prev) => prev.filter((d) => d.veg === true));
    }
    else {
      setStartersData((prev) => prev.filter((d) => d.veg === true || d.veg === false));
    }

    temp.map((data) => {
      if ((nonVeg === 0 && veg > 0) || (veg === 0 && nonVeg > 0)) {
        data.quantity = 12;
        if (data.Qtype === "pcs") {
          data.quantity = (veg > 0 ? veg : nonVeg) * 2;
          if (data.quantity < 12) {
            data.quantity = 12;
          }
        } else {
          data.quantity = ((veg > 0 ? veg : nonVeg) * 0.1).toFixed(1);
        }
      } else {
        // if both guest is available

        if (data.veg) {
          if (data.Qtype === "pcs") {
            data.quantity = Math.round((veg * 2 + nonVeg * (1)));
            if (data.quantity < 12) {
              data.quantity = 12;
            }
          } else {
            data.quantity = (veg * 0.1 + nonVeg * 0.05).toFixed(1);
          }
        } else {
          if (data.Qtype === "pcs") {
            data.quantity = nonVeg * 2;
            if (data.quantity < 12) {
              data.quantity = 12;
            }
          } else {
            data.quantity = HandleCeilFloorValue((nonVeg * 0.1).toFixed(1));
          }
        }
      }
      setStarters(temp);
    });

    // main value change after veg anf=d non-veg guest change
    let tempMain = [...mains];
    let nonVegPastaMainCount = 0
    let nonVegMainsGravyMainCount = 0
    let nonVegMainThaiMainCount = 0
    if (tempMain.find((item) => item.menu_label === "Pasta" && item.veg === false)) {
      nonVegPastaMainCount += 1;
    }
    else if (tempMain.find((item) => item.menu_label === "Mains-Gravy" && item.veg === false)) {
      nonVegMainsGravyMainCount += 1;
    }
    else if (tempMain.find((item) => item.menu_label === "Mains-Thai" && item.veg === false)) {
      nonVegMainThaiMainCount += 1;
    }
    tempMain.map((data) => {

      if ((nonVeg === 0 && veg > 0) || (veg === 0 && nonVeg > 0)) {
        // if not rice , bred, noodles
        console.log("not rice , bred, noodles1");
        if (data.Qtype === "pcs") {
          data.quantity = (veg > 0 ? veg : nonVeg) * 1;
        } else if (data.name === highestPrice.name) {
          data.quantity = ((veg > 0 ? veg : nonVeg) * 0.15).toFixed(1);
        } else {
          data.quantity = ((veg > 0 ? veg : nonVeg) * 0.1).toFixed(1);
        }
      } else {
        if (data.veg) {

          //Heavy SNack
          if (data.menu_label === "Heavy Snack") {
            if (data.Qtype === "pcs") {
              data.quantity = veg * 1;
            } else {
              data.quantity = HandleCeilFloorValue((veg * 0.1 + nonVeg * 0.1).toFixed(1));
            }

          }
          //Pasta mains handelling
          //check whether non veg pasta is selected, if non veg pasta selected then veg pasta data.quantity =veg*100g only else veg*100+nonVeg*100g

          else if (data.menu_label === "Pasta") {
            if (nonVegPastaMainCount > 0) {
              data.quantity = HandleCeilFloorValue((veg * 0.1).toFixed(1))
            }
            else {
              data.quantity = HandleCeilFloorValue((veg * 0.1 + nonVeg * 0.1).toFixed(1));
            }

          }
          //Mains-gravy : same logic as above 
          else if (data.menu_label === "Main-Gravy") {
            if (nonVegMainsGravyMainCount > 0) {
              data.quantity = HandleCeilFloorValue((veg * 0.1).toFixed(1))
            }
            else {
              data.quantity = HandleCeilFloorValue((veg * 0.1 + nonVeg * 0.1).toFixed(1));
            }

          }
          //Main -Thai : same logic as above
          else if (data.menu_label === "Main-Thai") {

            if (nonVegMainThaiMainCount > 0) {
              data.quantity = HandleCeilFloorValue((veg * 0.1).toFixed(1))
            }
            else {
              data.quantity = HandleCeilFloorValue((veg * 0.1 + nonVeg * 0.1).toFixed(1));
            }
          }
          //Mains-dry : veg data.quantity= veg*100+ nonveg*100  else non-veg data.quantity=non veg*100
          else if (data.menu_label === "Main-dry") {


            data.quantity = HandleCeilFloorValue((veg * 0.1).toFixed(1))


          }
          else {
            //manins dal same as mains dry
            //for daal and rest
            if (data.Qtype === "pcs") {
              data.quantity = veg * 1;
            } else {
              data.quantity = (veg * 0.1 + nonVeg * 0.1).toFixed(1);
            }
          }



        }
        else {
          console.log("not rice , bred, noodles3");
          if (data.Qtype === "pcs") {
            data.quantity = nonVeg * 1;
          } else if (data.name === highestPrice.name) {
            data.quantity = (nonVeg * 0.15).toFixed(1);
          } else {
            data.quantity = HandleCeilFloorValue((nonVeg * 0.1).toFixed(1));
          }
        }
      }
    });

    setMains(tempMain);

    //  dessert value change after veg anf=d non-veg guest change

    let tempDessert = [...desserts];

    tempDessert.map((data) => {
      if (data.Qtype === "pcs") {
        if (data.cuisine === 'Continental') {
          data.quantity = Math.round((veg + nonVeg));
        }
        else {
          data.quantity = Math.round((veg + nonVeg) * 1.5);
        }
      } else {
        data.quantity = (Math.round(veg + nonVeg) * 0.075).toFixed(1);
      }
    });

    setDesserts(tempDessert);
  }, [veg, nonVeg]);
  function HandleCeilFloorValue(x) {
    var decimals = (x - Math.floor(x)).toFixed(1);
    if (decimals <= 0.4) {
      x = Math.floor(x);
    }
    else if (decimals >= 0.6) {
      x = Math.floor(x);
    }
    return x;
  }
  useEffect(() => {
    if (veg < 0) {
      setVeg(0);
    } else if (nonVeg < 0) {
      setNonVeg(0);
    } else if (typeof veg === NaN) {
      setVeg(0);
    } else if (typeof nonVeg === NaN) {
      setNonVeg(0);
    }
  }, [veg, nonVeg]);

  useEffect(() => {
    if (cuisine === 0) {
    }
  }, [cuisine, veg, nonVeg]);

  function _isContains(json, keyname, value) {

    return Object.keys(json).some(key => {
      return typeof json[key] === 'object' ?
        _isContains(json[key], keyname, value) : key === keyname && json[key] === value;
    });
  }
  // adding starters

  const handleStatersAdd = (item_name, id) => {
    setIsStarterChange(!isStarterChange);
    if (veg === 0 && nonVeg === 0) return;

    let temp = [...starters];
    const starter = startersData.find((item) => item.name === item_name);
    // removing selected item
    // setStartersData((prev) => prev.filter((d) => d.name !== item_name));

    let quantity;
    if (temp.find((item) => item.name === item_name)) {
      return;
    }

    // if only  veg or non veg guest is available

    if ((nonVeg === 0 && veg > 0) || (veg === 0 && nonVeg > 0)) {
      if (starter.Qtype === "pcs") {
        quantity = (veg > 0 ? veg : nonVeg) * 2;
        if (quantity < 12) {
          quantity = 12;
        }
      } else {
        quantity = ((veg > 0 ? veg : nonVeg) * 0.1).toFixed(1);
      }
    } else {
      // if both guest is available

      if (starter.veg) {
        if (starter.Qtype === "pcs") {
          quantity = Math.round((veg + nonVeg) * 1.5);
          if (quantity < 12) {
            quantity = 12;
          }
        } else {
          quantity = (veg * 0.05 + nonVeg * 0.05).toFixed(1);
        }
      } else {
        if (starter.Qtype === "pcs") {
          quantity = nonVeg * 2;
          if (quantity < 12) {
            quantity = 12;
          }
        } else {
          quantity = HandleCeilFloorValue((nonVeg * 0.1).toFixed(1));
        }
      }
    }
    temp.push({
      id: starter.id,
      city: starter.city,
      cuisine: starter.cuisine,
      menu_label: starter.menu_label,
      name: starter.name,
      quantity: quantity,
      Qtype: starter.Qtype,
      veg: starter.veg,
      selling_price: starter.selling_price,
      // description: starter.description,
    });
    setStarters(temp);

    console.log("starters", starters);
  };
  const handleMainAdd = (item_name, id) => {

    setIsMainChange(!isMainChange);
    if (veg === 0 && nonVeg === 0) return;
    let temp = [...mains];

    const main = mainData.find((item) => item.name === item_name);
    let quantity;
    if (temp.find((item) => item.name === item_name)) {
      return;
    }
    let nonVegPastaMainCount = 0
    let nonVegMainsGravyMainCount = 0
    let nonVegMainThaiMainCount = 0
    if (temp.find((item) => item.menu_label === "Pasta" && item.veg === false)) {
      nonVegPastaMainCount += 1;
    }
    else if (temp.find((item) => item.menu_label === "Mains-Gravy" && item.veg === false)) {
      nonVegMainsGravyMainCount += 1;
    }
    else if (temp.find((item) => item.menu_label === "Mains-Thai" && item.veg === false)) {
      nonVegMainThaiMainCount += 1;
    }

    if ((nonVeg === 0 && veg > 0) || (veg === 0 && nonVeg > 0)) {
      // if not rice , bred, noodles
      console.log("not rice , bred, noodles1");
      if (main.Qtype === "pcs") {
        quantity = (veg > 0 ? veg : nonVeg) * 1;
      }
      else if (main.name === highestPrice.name) {
        quantity = ((veg > 0 ? veg : nonVeg) * 0.15).toFixed(1);
      }
      else {
        quantity = ((veg > 0 ? veg : nonVeg) * 0.1).toFixed(1);
      }
    } else {
      // if both are present
      if (main.veg) {

        //Heavy SNack
        // alert(main.menu_label)
        if (main.menu_label === "Heavy Snack") {
          if (main.Qtype === "pcs") {
            quantity = veg * 1;
          } else {
            quantity = HandleCeilFloorValue((veg * 0.1 + nonVeg * 0.1).toFixed(1));
          }

        }
        //Pasta mains handelling
        //check whether non veg pasta is selected, if non veg pasta selected then veg pasta quantity =veg*100g only else veg*100+nonVeg*100g

        else if (main.menu_label === "Pasta") {
          if (nonVegPastaMainCount > 0) {
            quantity = HandleCeilFloorValue((veg * 0.1).toFixed(1))
          }
          else {
            quantity = HandleCeilFloorValue((veg * 0.1 + nonVeg * 0.1).toFixed(1));
          }

        }
        //Mains-gravy : same logic as above 
        else if (main.menu_label === "Mains-Gravy") {
          if (nonVegMainsGravyMainCount > 0) {
            quantity = HandleCeilFloorValue((veg * 0.1).toFixed(1))
          }
          else {
            quantity = HandleCeilFloorValue((veg * 0.1 + nonVeg * 0.1).toFixed(1));
          }

        }
        //Main -Thai : same logic as above
        else if (main.menu_label === "Mains-Thai") {

          if (nonVegMainThaiMainCount > 0) {
            quantity = HandleCeilFloorValue((veg * 0.1).toFixed(1))
          }
          else {
            quantity = HandleCeilFloorValue((veg * 0.1 + nonVeg * 0.1).toFixed(1));
          }
        }
        //Mains-dry : veg quantity= veg*100+ nonveg*100  else non-veg quantity=non veg*100
        else if (main.menu_label === "Mains-dry") {


          quantity = (veg * 0.1 + nonVeg * 0.1).toFixed(1);


        }
        else {
          //manins dal same as mains dry
          //for daal and rest
          if (main.Qtype === "pcs") {
            quantity = veg * 1;
          } else {
            quantity = (veg * 0.1 + nonVeg * 0.1).toFixed(1);
          }
        }


      }
      //Non-Veg Mains Handelling
      else {
        if (main.Qtype === "pcs") {
          quantity = nonVeg * 1;
        }
        else if (main.name === highestPrice.name) {
          quantity = (nonVeg * 0.15).toFixed(1);
        }
        else {
          quantity = HandleCeilFloorValue((nonVeg * 0.1).toFixed(1));
        }
      }
    }

    temp.push({
      // isRice: main.isRice,
      menu_label: main.menu_label,
      name: main.name,
      quantity: quantity,
      Qtype: main.Qtype,
      veg: main.veg,
      selling_price: main.selling_price,
      // description: main.description,
    });

    setMains(temp);
    // handleAfterItemSelection(temp);
    // setMainData((prev) => prev.filter((d) => d.name !== item_name));
  };

  function increment(value, index, type, item) {
    setHideRecommenedQnty(true);
    setHideMainsRecommenedQnty(true);
    setHideBreadRecommenedQnty(true);
    setHideDessertRecommenedQnty(true);
    if (item.Qtype === 'pcs') {
      value += 6;
    }
    else {
      value = parseFloat(value) + 0.5
    }
    handleChange(value, index, type);
  }
  function decrement(value, index, type, item) {
    setHideRecommenedQnty(true);
    setHideMainsRecommenedQnty(true);
    setHideBreadRecommenedQnty(true);
    setHideDessertRecommenedQnty(true);
    if (item.Qtype === 'pcs') {
      if (value < 12) {
        value = 12
        handleChange(value, index, type);
        // return false;
      }
      else {
        value = parseInt(value) - 6;
      }

    }
    else {
      if (value < 1) {
        value = 1
        handleChange(value, index, type);
        // return false;
      }
      else {
        value = parseFloat(value) - 0.5;
      }

    }
    handleChange(value, index, type);
  }
  function checkFirstValidation() {
    if (!city || !startTime) {
      if (!city) {
        Swal.fire({
          text: 'Please select your City',
          icon: 'warning',
          confirmButtonText: 'OK'
        })
        // alert("Fill the City please");
      }
      else if (!startTime) {
        Swal.fire({
          text: 'Please fill the delivery time',
          icon: 'warning',
          confirmButtonText: 'OK'
        })
        //alert("Fill the Event time please");
      }
      return false;
    }
    else {
      return true;
    }

  };
  function getDeliveryCharge(people) {
    if (city === 'mumbai' || city === 'banglore') {
      if (people <= 25) {
        setDeliveryCharge(0);
      }
      else if (people > 25 && people <= 40) {
        setDeliveryCharge(0);
      }
      else if (people >= 41 && people <= 60) {
        setDeliveryCharge(1499);
      }
      else if (people >= 61 && people <= 99) {
        setDeliveryCharge(1999);
      }
    }
    else if (city === 'delhi' || city === 'gurgaon') {
      if (people <= 25) {
        setDeliveryCharge(0);
      }
      else if (people > 25 && people <= 40) {
        setDeliveryCharge(999);
      }
      else if (people >= 41 && people <= 60) {
        setDeliveryCharge(1499);
      }
      else if (people >= 61 && people <= 99) {
        setDeliveryCharge(1999);
      }
    }
  }
  function handleChange(value, index, type) {
    if (type === "starters") {
      let newStarters = [...starters];
      newStarters[index].quantity = value;
      setStarters(newStarters);
    }
    if (type === "mains") {
      let newMains = [...mains];
      newMains[index].quantity = value;
      setMains(newMains);
    }
    if (type === "desserts") {
      let newDesserts = [...desserts];
      newDesserts[index].quantity = value;
      setDesserts(newDesserts);
    }
    if (type === "Bread+Rice") {
      let newDesserts = [...breadRice];
      newDesserts[index].quantity = value;
      setBreadRice(newDesserts);
    }

  }
  function handleDelete(index, type) {
    setIsDelete(!isDelete);
    if (type === "starters") {
      let temp = [...starters];
      temp.splice(index, 1);

      setStarters(temp);
    } else if (type === "mains") {
      let temp = [...mains];
      temp.splice(index, 1);
      setMains(temp);
    } else if (type === "desserts") {
      let temp = [...desserts];
      temp.splice(index, 1);
      setDesserts(temp);
    } else if (type === "Bread+Rice") {
      let temp = [...breadRice];
      temp.splice(index, 1);
      // changing the value after deleting
      let bread = 0;
      let count = 0;
      let isVeg = false;

      temp.map((item) => {
        item.menu_label === "Breads" ? (bread += 1) : bread;
        item.menu_label === "Rice" ? (count += 1) : count;
        item.veg ? (isVeg = true) : (isVeg = false);
      });
      temp.map((item) => {
        if (item?.menu_label === "Breads" && item.name === "Pooris") {
          if (bread === 1) {
            item.quantity = (veg + nonVeg) * 3;
          } else {
            item.quantity = (veg + nonVeg) * 2;
          }
        } else if (item?.menu_label === "Breads" && item.name !== "Pooris") {
          if (bread === 1) {
            item.quantity = (veg + nonVeg) * 2;
          } else {
            item.quantity = (veg + nonVeg) * 1;
          }
        } else if (item?.menu_label === "Rice") {
          console.log("rice", count);
          if ((veg === 0 && nonVeg > 0) || (veg > 0 && nonVeg === 0)) {
            let guests = veg > 0 ? veg : nonVeg;
            if (count >= 2) {
              console.log("count2");
              item.quantity = 0.15 * guests;
            } else if (mains.length > 0 && count === 1) {
              console.log("count1");

              item.quantity = 0.2 * guests;
            } else if (mains.length === 0 && count === 1) {
              console.log("count1");
              item.quantity = 0.3 * guests;
            }
          } else if (veg > 0 && nonVeg > 0) {
            let guests = veg + nonVeg;
            if (count >= 2) {
              item.quantity = 0.15 * guests;
            } else if (count === 1) {
              item.quantity = 0.2 * guests;
            }
          }
        }
      });

      console.log(bread);

      setBreadRice(temp);
    }
  }
  const handleBreadRiceAdd = (item_name, id) => {


    setIsBreadChange(!isBreadChange);
    console.log(item_name);
    if (veg === 0 && nonVeg === 0) return;
    let temp = [...breadRice];
    const filterBreadRice = breadRiceData.find((item) => item.name === item_name);
    let quantity;
    if (temp.find((item) => item.name === item_name)) {
      return;
    }

    // Rice + Noodles + Breads


    //Breads Pooris
    if (
      filterBreadRice?.menu_label === "Breads" &&
      filterBreadRice.name === "Pooris"
    ) {
      let bread = 1;

      temp.map((item) => {
        item.menu_label === "Breads" ? (bread += 1) : bread;
      });
      bread === 1
        ? (quantity = (veg + nonVeg) * 3)
        : (quantity = (veg + nonVeg) * 2);
      if (bread === 1) {
        quantity = (veg + nonVeg) * 3;
      } else {
        temp.forEach((item) => {
          item.name === "Pooris"
            ? (item.quantity = (veg + nonVeg) * 2)
            : (item.quantity = (veg + nonVeg) * 1);

        });
        quantity = (veg + nonVeg) * 2;
      }
      // checking for bread
    }

    //Breads but not Pooris
    else if (
      filterBreadRice?.menu_label === "Breads" &&
      filterBreadRice?.name !== "Pooris"
    ) {
      let bread = 1;

      temp.map((item) => {
        item.menu_label === "Breads" ? (bread += 1) : bread;
      });
      // console.log("naan");
      if (bread === 1) {
        quantity = (veg + nonVeg) * 2;
      } else {
        temp.forEach((item) => {
          item.name === "Pooris"
            ? (item.quantity = (veg + nonVeg) * 2)
            : (item.quantity = (veg + nonVeg) * 1);
        });
        quantity = (veg + nonVeg) * 1;
      }
    }
    //Noodles
    else if (filterBreadRice?.menu_label === "Noodle") {
      let nonVegNoodleCount = 0

      temp.forEach((item) => {
        if (item.menu_label === "Noodle" && item.veg === false) {
          nonVegNoodleCount += 1;
        }
      })
      // console.log("naan");
      filterBreadRice.veg === true && filterBreadRice.menu_label === "Noodle" && nonVegNoodleCount > 0
        ? (quantity = veg * 0.2)
        : (quantity = (veg + nonVeg) * 0.1);
      filterBreadRice.veg === false && filterBreadRice.menu_label === "Noodle" && nonVegNoodleCount > 0
        ? (quantity = nonVeg * 0.15)
        : (quantity = nonVeg * 0.2);

      temp.forEach((item) => {
        item.veg === true && item.menu_label === "Noodle" && nonVegNoodleCount > 0
          ? (item.quantity = veg * 0.2)
          : (item.quantity = (veg + nonVeg) * 0.1);
        item.veg === false && item.menu_label === "Noodle" && nonVegNoodleCount > 0
          ? (item.quantity = nonVeg * 0.15)
          : (item.quantity = nonVeg * 0.2);
      });


    }
    else if (filterBreadRice?.menu_label === "Rice") {
      let count = 1;
      let isVeg = false;
      let isNonVeg = false;

      temp.map((item) => {
        item.menu_label === "Rice" ? (count += 1) : count;
        item.veg ? (isVeg = true) : (isNonVeg = true);
      });
      console.log("rice", count);
      if ((veg === 0 && nonVeg > 0) || (veg > 0 && nonVeg === 0)) {
        let guests = veg > 0 ? veg : nonVeg;
        if (count >= 1) {
          console.log("count2");
          quantity = 0.15 * guests;
          temp.forEach((item) => {
            if (item.menu_label === "Rice") {
              item.quantity = 0.15 * guests;
            }
          });
        } else if (mains.length > 0 && count === 1) {
          console.log("count1");

          quantity = 0.2 * guests;
        } else if (mains.length === 0 && count === 1) {
          console.log("count1");
          quantity = 0.3 * guests;
        }
      }
      else if (veg > 0 && nonVeg > 0) {
        let guests = veg + nonVeg;
        if (count >= 2) {
          quantity = 0.15 * guests;
          temp.forEach((item) => {
            if (item.menu_label === "Rice" && item.veg === true) {
              item.quantity = 0.15 * guests;
            }
            if (item.menu_label === "Rice" && item.veg === false) {
              item.quantity = 0.15 * nonVeg;
            }
          });
        } else if (count === 1) {
          !filterBreadRice?.veg
            ? (quantity = nonVeg * 0.2)
            : (quantity = 0.2 * guests);
        }
      }
      console.log("rice", count);
    }
    temp.push({
      // isRice: main.isRice,
      menu_label: filterBreadRice?.menu_label,
      name: filterBreadRice?.name,
      quantity: quantity,
      Qtype: filterBreadRice?.Qtype,
      veg: filterBreadRice?.veg,
      selling_price: filterBreadRice.selling_price,
      // description: main.description,
    });
    setBreadRice(temp);
    // setBreadRiceData((prev) => prev.filter((d) => d.name !== item_name));
  };
  const handleDesertsAdd = (item_name, id) => {
    setIsDessertChange(!isDessertChange);
    let temp = [...desserts];
    if (veg === 0 && nonVeg === 0) return;
    if (temp.find((item) => item.name === item_name)) {
      return;
    }

    const dessert = dessertData.find((item) => item.name === item_name);
    let quantity;
    if (temp.find((item) => item.name === item_name)) {
      return;
    }
    if (dessert.Qtype === "pcs") {
      // expensive desserts should go 1 piece
      if (dessert.cuisine === 'Continental') {
        quantity = Math.round((veg + nonVeg));
      }
      else {
        quantity = Math.round((veg + nonVeg) * 1.5);
      }
    } else {
      quantity = Math.round((veg + nonVeg) * 0.075).toFixed(1);
    }
    temp.push({
      // name: dessert.name,
      // quantity: quantity,
      // Qtype: dessert.Qtype,
      // veg: dessert.veg,
      // description: dessert.description,
      id: dessert.id,
      city: dessert.city,
      cuisine: dessert.cuisine,
      menu_label: dessert.menu_label,
      name: dessert.name,
      quantity: quantity,
      Qtype: dessert.Qtype,
      veg: dessert.veg,
      selling_price: dessert.selling_price,
    });
    setDesserts(temp);
    // setDessertData((prev) => prev.filter((d) => d.id !== item_name));
  };
  console.log("desert", desserts);
  // cost calculation
  useEffect(() => {

    // if(setShowPriceList){
    //   setShowPriceList(!showPriceList)

    // }

    let starterPrice = 0;
    let mainPrice = 0;
    let dessertPrice = 0;
    let bredRicePrice = 0;

    starters.map((d) => {
      if (d.Qtype === 'pcs') {
        bredRicePrice += parseInt(d.quantity) * parseInt((d.selling_price) / 12);
      }
      else {
        starterPrice += parseInt(d.quantity) * parseInt((d.selling_price));
      }
    });
    mains.map((d) => {
      if (d.Qtype === 'pcs') {
        mainPrice += parseInt(d.quantity) * parseInt((d.selling_price) / 12);
      }
      else {
        mainPrice += parseInt(d.quantity) * parseInt(d.selling_price);
      }
    });
    desserts.map((d) => {
      if (d.Qtype === 'pcs') {
        dessertPrice += parseInt(d.quantity) * (parseInt(d.selling_price) / 12);
      }
      else {
        dessertPrice += parseInt(d.quantity) * parseInt(d.selling_price);
      }
    });
    console.log(dessertPrice)
    breadRice.map((d) => {
      if (d.Qtype === 'pcs') {
        bredRicePrice += parseInt(d.quantity) * parseInt((d.selling_price) / 12);
      }
      else {
        bredRicePrice += parseInt(d.quantity) * parseInt((d.selling_price));
      }
    });

    setTotalPrice(parseInt(starterPrice + mainPrice + dessertPrice + bredRicePrice));
    getDeliveryCharge(people);
    setGST(getGst());
    setgrandTotal(parseInt(totalPrice) + parseInt(buffet) + parseInt(deliveryCharge) + parseInt(GST));
    //setShowPriceList(false)
  }, [starters, mains, desserts, breadRice, veg, nonVeg, isDelete, buffet]);

  function getGst() {
    return parseInt((parseInt(totalPrice) + parseInt(buffet) + parseInt(deliveryCharge)) * 5 / 100)
  }
  function handleBuffet(value) {

    setbuffet(value);
    setGST(getGst());
    setgrandTotal(parseInt(totalPrice) + parseInt(buffet) + parseInt(deliveryCharge) + parseInt(GST));

  }

  const formSubmit = (e) => {
    e.preventDefault();
    if (!checkFirstValidation()) {
      return false;
    }


    if (name.length == '' || email.length == '' || mobileno.length == '') {
      if (name.length == '') {
        Swal.fire({
          text: 'Please enter your Name',
          icon: 'warning',
          confirmButtonText: 'OK'
        })
        //alert("Fill the name please");
      }
      else if (email.length == '') {
        Swal.fire({
          text: 'Please enter your Email',
          icon: 'warning',
          confirmButtonText: 'OK'
        })
        //alert("Fill the Email please");
      }
      else if (mobileno.length == '') {
        Swal.fire({
          text: 'Please enter your mob. no.',
          icon: 'warning',
          confirmButtonText: 'OK'
        })
        //alert("Fill the Mobile No please");
      }
      return false;
    }
    getDeliveryCharge(people);
    // setGST((parseInt(totalPrice) + parseInt(buffet) + parseInt(deliveryCharge)) * (5/100));
    setGST(getGst())
    setgrandTotal(parseInt(totalPrice) + parseInt(buffet) + parseInt(deliveryCharge) + parseInt(GST));
    setShowPriceList(!showPriceList)


    // e.preventDefault();

    let datas = {

      name: name,
      email: email,
      mobileno: mobileno,
      city: city,
      occasion: 'occasion',
      people: people,
      date: startDate,
      // time : startTime,
      url: refURL,
      meal: 'meal',
      cuisine: cuisine,
      preference: 'preference',
      mealtype: 'mealtype',
      boolean: true,
      appetizer: starters,
      mainCourse: mains,
      dessert: desserts,
      breadRice: breadRice,
      grandTotal: grandTotal,
      buffet: buffet,
      dessertClassname: "caterNinja_add_dessert_button",
      showDessert: false
    };
    console.log(datas)

    setDatas(datas)
    // console.log(data);
    // axios
    //   .post("/api/forma", data)
    //   .then((res) => {
    //     this.setState(
    //       {
    //         sent: true,
    //       },
    //       this.resetForm(),
    //       console.log("sent")
    //     );
    //   })
    //   .catch((error) => {
    //     console.log("message not sent");
    //     console.log(error);
    //   }); 
    let data = "";
    try {
      data = JSON.stringify(datas);
    } catch (e) {
      console.log(e);
    }
    fetch("/api/forma", {
      method: "POST",
      body: data,
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    }).then((res) => {
      console.log(res)
      if (res.success) {
        console.log("message sent");
      }
      else {
        console.log("Failed to send message");
      }
    });
  }



  return (
    <div className={styles.customizeMainContainer}>
      <div className={styles.customizeMainContainer}>
        <Slider {...settings}>
          <div className={styles.header}>
            <div className={styles.headerContent}>
              <img id={styles.ninjaLogo} src='/CustomizeImg/CaterNinjaLogo.png' width="91.6px" height="19.49px" />
              <div className={styles.textLogo}>
                <div>
                  <h3>Customize your</h3>
                  <h2 id={styles.ninjaBoxTitle}>Ninja<span>Box</span></h2>
                  <h5>Get instant quote in just few<br />easy steps!</h5>
                </div>
                <div>
                  <img id={styles.ninja} src='/CustomizeImg/Group 267 (1).png' width="102.33px" height="132.73px" />
                </div>
                <div className={styles.ninjaboxLg}>
                  <img src='Group 1016.png' width="281.81px" height="218px" />
                </div>
              </div>
            </div>
            <div className={styles.ninjabox}>
              <img src='Group 1016.png' width="281.81px" height="218px" />
            </div>
          </div>
          <div className={styles.header}>
            <div className={styles.headerContent}>
              <img id={styles.ninjaLogo} src='/CustomizeImg/CaterNinjaLogo.png' width="91.6px" height="19.49px" />
              <div className={styles.textLogo}>
                <div>
                  <h3>Customize your</h3>
                  <h2 id={styles.ninjaBuffyTitle}>Ninja<span>Buffet</span></h2>
                  <h5>Get instant quote in just few<br />easy steps!</h5>
                </div>
                <div>
                  <img id={styles.ninjaB} src='/CustomizeImg/NinjaBuffy.png' width="83.41px" height="132.73px" />
                </div>
                <div className={styles.ninjaboxLg}>
                  <img src='Group 1247.png' width="256px" height="225.57px" />
                </div>
              </div>
            </div>
            <div className={styles.ninjabuffy}>
              <img src='Group 1247.png' width="256px" height="225.57px" />
            </div>
          </div>
        </Slider>
        <form onSubmit={(e) => formSubmit()}>
          <div className={styles.redBg}>

            {/* <div className={styles2.eventDate}>
            <h3>Event Date &amp; Time</h3>
            <hr />
            <div className={styles2.datePicker}>
                <DatePicker name='event_date' selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            <div className={styles2.datePicker}>
                <input type="time" name='event_time'></input>
            </div>
            
        </div> */}
            <div className={styles.inputDetails}>
              <div>
                <div className={styles.cityContent}>
                  <p>City</p>

                  <select className="form-select" name='city' aria-label="Default select example" value={city} onChange={e => handleCity(e.target.value)} required>
                    <option value='' selected>Select City</option>
                    {cities.map((item, index) => {
                      return (
                        <option key={index} value={item} >{item}</option>
                      )
                    })}
                  </select>
                </div>

                <div className={styles.eventDate}>
                  <p>Event Date</p>
                  <DatePicker name='event_date' selected={startDate} onChange={(date) => setStartDate(date)} required />
                </div>
                <div style={{ marginBottom: "40px" }}>
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

              </div>
              <div>
                <div style={{ marginBottom: "40px" }}>
                  <p>Cuisine</p>
                  <select className="form-select" name='cuisine' aria-label="Default select example" value={cuisine} onChange={e => handleCuisine(e.target.value)} required>
                    {cuisines.map((item, index) => {
                      return (
                        <option key={index} value={item}>{item}</option>
                      )
                    })}
                  </select>
                </div>
                <div>
                  <p>Delivery Time</p>
                  <input type="time" name='event_time' onChange={(time) => setstartTime(time)} required></input>
                </div>
                <div style={{ marginTop: "40px" }}>
                  <p>Non Veg Guest</p>
                  <input
                    type="number"
                    onBlur={(e) =>
                      handleVegNonVegGuest("nonVeg", parseInt(e.target.value))
                    }
                    min="0"
                    defaultValue={nonVeg}
                  />
                </div>
              </div>
            </div>


            {/* Display Starters, mains etc count */}
            <div className={styles.whiteBg}>
              {/* MANOJ <div className={styles.packageName}>
                                <h3>PACKAGE NAME</h3>
                                <img src='555.png' height="150px" width="274.5px" />
                                <h6>{starters?.length} Starters + {mains?.length} Mains + {desserts?.length} Desserts</h6>
                            </div> */}
              <div className={styles.selfService}>
                {<Slider {...settings}>
                  <div>
                    <h3>SELF - SERVICE<br />NINJA<span>BOX</span></h3>
                    <img src='555.png' height="150px" width="274.5px" />
                  </div>
                  <div>
                    <h3>SETUP + SERVICE<br />NINJA<span>BUFFET</span></h3>
                    <img src='Frame 769.png' height="150px" width="274.5px" />
                  </div>
                  <div>
                    <h3>PREMIUM BUFFET<br />NINJA<span>CLASSIC</span></h3>
                    <img src='Group 1254.png' height="150px" width="274.5px" />
                  </div>
                </Slider>}
              </div>
              <div className={styles.pkgSliderContainerLG}>
                {<Slider {...settings}>
                  <div className={styles.pkgSlider}>
                    <h3>SELF - SERVICE<br />NINJA<span>BOX</span></h3>
                    <img src='555.png' />
                  </div>
                  <div className={styles.pkgSlider}>
                    <h3>SELF - SERVICE<br />NINJA<span>BUFFET</span></h3>
                    <img src='Frame 769.png' />
                  </div>
                  <div className={styles.pkgSlider}>
                    <h3>PREMIUM BUFFET<br />NINJA<span>CLASSIC</span></h3>
                    <img src='Group 1254.png' />
                  </div>
                </Slider>}
              </div>
              {/* <div className={styles.pkgDetails}>
                <div>
                  <h3>PACKAGE NAME</h3>
                  <h5>{starters?.length} Starters + {mains?.length} Mains + {desserts?.length} Desserts</h5>

                </div>
                <div>
                  <img id={styles.pkgImg} src='555.png' width="366px" height="200px" />
                </div>
              </div> */}
              <div>


                <div className={styles.menuContainer}>
                  <div className={styles.createYourMenuHead}>
                    <h3>Create Your Menu</h3>
                    <hr style={{ border: "0.4px dashed #42484E", margin: "auto", width: "196px", backgroundColor: "white" }} />
                  </div>

                  {/* starters add */}
                  <div className={styles.startersContainer}>
                    <h5>Starters</h5>
                    <div className={styles.selectedStarterContainer}>
                      {!showSelectedMenu && starters.map((item, index) => (<div className={styles.fstItem} key={index}>
                        <img className={styles.itemImage} src="https://ik.imagekit.io/ws3brr13khq/ninjabox_uqYIfAoGr.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677930049169" />
                        <div className={styles.itemDetailsContainer}>
                          {item.veg === true ? <img className={styles.vegLogo} src="/diy images/vegLogo.png" /> :
                            <img className={styles.vegLogo} src="/diy images/Group 962.png" />}
                          <div>
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                          </div>
                          <div>
                            <div className={styles.quantityBtn}>
                              <button type='button' onClick={(e) =>
                                decrement(item.quantity, index, "starters", item)
                              }>-</button>
                              <h6>{item.quantity}{item.Qtype}</h6>
                              <button type='button' onClick={(e) =>
                                increment(item.quantity, index, "starters", item)
                              }>+</button>

                            </div>
                            {!hideRecommenedQnty && <div className={styles.recQnty}>
                              <p>Recommended Qt.</p>
                            </div>}
                          </div>
                          <div>
                            <img className={styles.trassLogo} src="/diy images/trash-alt.png" onClick={() => handleDelete(index, "starters")} />
                          </div>
                        </div>
                      </div>))}
                    </div>
                    {showDropdown && (<div onClick={handleDiv1Click} className={styles.starterSearchBtn} id="srchbr">
                      <p><FontAwesomeIcon icon={faMagnifyingGlass} />  Select Starter</p>
                      <span><FontAwesomeIcon icon={faAngleDown} />  Click here to select</span>
                    </div>
                    )}
                    {showSelectedMenu && (<div className={styles2.starterMenuContainer}>
                      <div id={styles.starterSearchContent}>
                        <div>
                          <input type="text"
                            value={searchValue}
                            onChange={searchStarter}
                            placeholder="Search Starter" />
                          <div id={styles.starterList}>
                            <ul>
                              {filteredData.map((item, index) => (
                                <li key={item.id}>
                                  <div className='d-flex justify-content-between'>
                                    <div id={styles.insideDivLi}>
                                      {/* <img src={item.img} width="30.05px" height="26.54px" /> */}
                                      <p style={{ marginTop: "12.5px" }} onClick={() => document.getElementById(item.id).click()}>{item.name}<br /><span>{item.description}</span></p>
                                    </div>
                                    <div>
                                      <input id={item.id} type="checkbox" checked={item.checked} value={item.id} onChange={(e) => handleCheckboxChange(e, index, item, "starters")} />
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div id={styles.listInsideBtn}>
                            <button onClick={handleCancelClick}>Done</button>
                          </div>
                        </div>
                      </div>
                    </div>)}
                  </div>
                  <hr className={styles.MenuHr} />
                  {/* mains add */}
                  <div className={styles.mainsContainer}>
                    <h5>Mains</h5>
                    <div className={styles.selectedMainsContainer}>
                      {!showSelectedMenu2 && mains.map((item, index) => (<div className={styles.fstItem} key={index}>
                        <img className={styles.itemImage} src="https://ik.imagekit.io/ws3brr13khq/ninjabox_uqYIfAoGr.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677930049169" />
                        <div className={styles.itemDetailsContainer}>
                          {item.veg === true ? <img className={styles.vegLogo} src="/diy images/vegLogo.png" /> :
                            <img className={styles.vegLogo} src="/diy images/Group 962.png" />}
                          <div>
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                          </div>
                          <div>
                            <div className={styles.quantityBtn}>
                              <button type='button' onClick={(e) =>
                                decrement(item.quantity, index, "mains", item)
                              }>-</button>
                              <h6>{item.quantity}{item.Qtype}</h6>
                              <button type='button' onClick={(e) =>
                                increment(item.quantity, index, "mains", item)
                              }>+</button>
                            </div>
                            {!hideMainsRecommenedQnty && <div className={styles.recQnty}>
                              <p>Recommended Qt.</p>
                            </div>}
                          </div>
                          <div>
                            <img className={styles.trassLogo} src="/diy images/trash-alt.png" onClick={() => handleDelete(index, "mains")} />
                          </div>
                        </div>
                      </div>))}
                    </div>
                    {showDropdown2 && (<div onClick={handleDiv2Click} className={styles.starterSearchBtn} id="srchbr2">
                      <p><FontAwesomeIcon icon={faMagnifyingGlass} />  Select Mains</p>
                      <span><FontAwesomeIcon icon={faAngleDown} />  Click here to select</span>
                    </div>
                    )}
                    {showSelectedMenu2 && (<div className={styles2.starterMenuContainer}>
                      <div id={styles.starterSearchContent}>
                        <div>
                          <input type="text"
                            value={searchMainsValue}
                            onChange={searchMains}
                            placeholder="Search Mains" />
                          <div id={styles.starterList}>
                            <ul>
                              {filteredMainsData.map((item, index) => (
                                <li key={item.id}>
                                  <div className='d-flex justify-content-between'>
                                    <div id={styles2.insideDivLi}>
                                      {/* <img src={item.image} width="30.05px" height="26.54px" /> */}
                                      <p style={{ marginTop: "12.5px" }} onClick={() => document.getElementById(item.id).click()}>{item.name}<br /><span>{item.description}</span></p>
                                    </div>
                                    <div>
                                      <input id={item.id} type="checkbox" checked={item.checked} value={item.id} onChange={(e) => handleCheckboxChange(e, index, item, "mains")} />
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div id={styles.listInsideBtn}>
                            <button onClick={handleCancelClick}>Done</button>
                          </div>
                        </div>
                      </div>
                    </div>)}
                  </div>

                  <hr className={styles.MenuHr} />
                  {/* Bread rice noodles */}
                  <div className={styles.mainsContainer}>
                    <h5>Bread Rice and Noodles</h5>
                    <div className={styles.selectedMainsContainer}>
                      {!showSelectedMenu3 && breadRice.map((item, index) => (<div className={styles.fstItem} key={index}>
                        <img className={styles.itemImage} src="https://ik.imagekit.io/ws3brr13khq/ninjabox_uqYIfAoGr.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677930049169" />
                        <div className={styles.itemDetailsContainer}>
                          {item.veg === true ? <img className={styles.vegLogo} src="/diy images/vegLogo.png" /> :
                            <img className={styles.vegLogo} src="/diy images/Group 962.png" />}
                          <div>
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                          </div>
                          <div>
                            <div className={styles.quantityBtn}>
                              <button type='button' onClick={(e) =>
                                decrement(item.quantity, index, "Bread+Rice", item)
                              }>-</button>
                              <h6>{item.quantity}{item.Qtype}</h6>
                              <button type='button' onClick={(e) =>
                                increment(item.quantity, index, "Bread+Rice", item)
                              }>+</button>

                            </div>
                            {!hideBreadRecommenedQnty && <div className={styles.recQnty}>
                              <p>Recommended Qt.</p>
                            </div>}
                          </div>
                          <div>
                            <img className={styles.trassLogo} src="/diy images/trash-alt.png" onClick={() => handleDelete(index, "Bread+Rice")} />
                          </div>
                        </div>
                      </div>))}
                    </div>
                    {showDropdown3 && (<div onClick={handleDiv3Click} className={styles.starterSearchBtn} id="srchbr2">
                      <p><FontAwesomeIcon icon={faMagnifyingGlass} />  Select Breads Rice </p>
                      <span><FontAwesomeIcon icon={faAngleDown} />  Click here to select</span>
                    </div>
                    )}
                    {showSelectedMenu3 && (<div className={styles2.starterMenuContainer}>
                      <div id={styles.starterSearchContent}>
                        <div>
                          <input type="text"
                            value={searchBreadValue}
                            onChange={searchBread}
                            placeholder="Search Bread Rice Noodles" />
                          <div id={styles.starterList}>
                            <ul>
                              {filteredBreadData.map((item, index) => (
                                <li key={item.id}>
                                  <div className='d-flex justify-content-between'>
                                    <div id={styles2.insideDivLi}>
                                      {/* <img src={item.image} width="30.05px" height="26.54px" /> */}
                                      <p style={{ marginTop: "12.5px" }} onClick={() => document.getElementById(item.id).click()}>{item.name}<br /><span>{item.description}</span></p>
                                    </div>
                                    <div>
                                      <input id={item.id} type="checkbox" checked={item.checked} value={item.id} onChange={(e) => handleCheckboxChange(e, index, item, "Bread+Rice")} />
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div id={styles.listInsideBtn}>
                            <button onClick={handleCancelClick}>Done</button>
                          </div>
                        </div>
                      </div>
                    </div>)}
                  </div>
                  <hr className={styles.MenuHr} />
                  {/* dessert add */}
                  <div className={styles.mainsContainer}>
                    <h5>Desserts</h5>
                    <div className={styles.selectedMainsContainer}>
                      {!showSelectedMenu4 && desserts.map((item, index) => (<div className={styles.fstItem} key={index}>
                        <img className={styles.itemImage} src="https://ik.imagekit.io/ws3brr13khq/ninjabox_uqYIfAoGr.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677930049169" />
                        <div className={styles.itemDetailsContainer}>
                          {item.veg === true ? <img className={styles.vegLogo} src="/diy images/vegLogo.png" /> :
                            <img className={styles.vegLogo} src="/diy images/Group 962.png" />}
                          <div>
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                          </div>
                          <div>
                            <div className={styles.quantityBtn}>
                              <button type='button' onClick={(e) =>
                                decrement(item.quantity, index, "desserts", item)
                              }>-</button>
                              <h6>{item.quantity}{item.Qtype}</h6>
                              <button type='button' onClick={(e) =>
                                increment(item.quantity, index, "desserts", item)
                              }>+</button>

                            </div>
                            {!hideDessertRecommenedQnty && <div className={styles.recQnty}>
                              <p>Recommended Qt.</p>
                            </div>}
                          </div>
                          <div>
                            <img className={styles.trassLogo} src="/diy images/trash-alt.png" onClick={() => handleDelete(index, "desserts")} />
                          </div>
                        </div>
                      </div>))}
                    </div>
                    {showDropdown4 && (<div onClick={handleDiv4Click} className={styles.starterSearchBtn} id="srchbr2">
                      <p><FontAwesomeIcon icon={faMagnifyingGlass} />  Select Desserts </p>
                      <span><FontAwesomeIcon icon={faAngleDown} />  Click here to select</span>
                    </div>
                    )}
                    {showSelectedMenu4 && (<div className={styles2.starterMenuContainer}>
                      <div id={styles.starterSearchContent}>
                        <div>
                          <input type="text"
                            value={searchDessertValue}
                            onChange={searchDessert}
                            placeholder="Search Desserts" />
                          <div id={styles.starterList}>
                            <ul>
                              {filteredDessertData.map((item, index) => (
                                <li key={item.id}>
                                  <div className='d-flex justify-content-between'>
                                    <div id={styles2.insideDivLi}>
                                      {/* <img src={item.image} width="30.05px" height="26.54px" /> */}
                                      <p style={{ marginTop: "12.5px" }} onClick={() => document.getElementById(item.id).click()}>{item.name}<br /><span>{item.description}</span></p>
                                    </div>
                                    <div>
                                      <input id={item.id} type="checkbox" checked={item.checked} value={item.id} onChange={(e) => handleCheckboxChange(e, index, item, "desserts")} />
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div id={styles.listInsideBtn}>
                            <button onClick={handleCancelClick}>Done</button>
                          </div>
                        </div>
                      </div>
                    </div>)}
                  </div>
                </div>
              </div>
              <hr className={styles.MenuHr} />
              <div className='text-center mt-3' id={styles.itemsQnty}>
                <h6>{starters?.length} Starters + {mains?.length + breadRice.length} Mains + {desserts?.length} Desserts</h6>
              </div>
              <div className='mt-5'>
                <div className={styles.userInput}>
                  <h4>Details*</h4>
                  <div className={styles.detailsInputLg}>
                    <input placeholder='Name' onInput={(e) => setName(e.target.value)} required />
                    <input placeholder='Phone No.' name='mobileno' onInput={(e) => setPhone(e.target.value)} maxLength='10' required />
                    <input placeholder='Email' name='email' onInput={(e) => setEmail(e.target.value)} required />
                  </div>
                </div>
              </div>

              <div className={styles.chefNote}>
                <p>Special Restriction? Chef Note?</p>
                <input type="text" />
              </div>
              <div className={styles.instantQuoteBtn}>
                <button onClick={formSubmit}>Get Instant Quote</button>
              </div>
              <div className={styles.applyCoupon}>
                <input type="text" placeholder='Enter Coupon Code' />
                <button>Apply</button>
              </div>
              <div className={styles.finalPriceSection}>
                <div className="d-flex justify-content-between">
                  {/* <select className="form-select" aria-label="Default select example" value={buffet} onChange={e => handleBuffet(e.target.value)}>
                    <option value="" selected>Ninjabox - Delivery (Free)</option>
                    <option value="3500">Buffet setup + 1 waiter (+ ₹ 3,500.00)</option>
                    <option value="4500">Buffet setup + 2 waiter (+ ₹ 4,500.00)</option>
                  </select> */}
                  <select
                    aria-label="Default select example"
                    className="form-select"
                    id="fontR"
                    name="buffet"
                    value={buffet}
                    onChange={e => handleBuffet(e.target.value)}
                  >
                    {(city === "mumbai" ||
                      city === "bangalore") &&
                      people < 26 ? (
                      <>
                        <option value="0" defaultValue>
                          Ninjabox - Delivery (Free)
                        </option>
                        <option value="3500">
                          Buffet setup + 1 waiter (+ ₹ 3,500.00)
                        </option>
                      </>
                    ) : (city === "mumbai" ||
                      city === "bangalore") &&
                      people > 25 &&
                      people < 41 ? (
                      <>
                        <option value="0" defaultValue>
                          Ninjabox - Delivery (Free)
                        </option>
                        <option value="4500">
                          Buffet setup + 2 waiter (+ ₹ 4,500.00)
                        </option>
                      </>
                    ) : (city === "mumbai" ||
                      city === "bangalore") &&
                      people > 40 &&
                      people < 61 ? (
                      <>
                        <option value="0" defaultValue>
                          Ninjabox - Delivery Only
                        </option>
                        <option value="6000">
                          Buffet setup + Service (+ ₹ 6,000.00)
                        </option>
                      </>
                    ) : (city === "mumbai" ||
                      city === "bangalore") &&
                      people > 60 &&
                      people < 100 ? (
                      <>
                        <option value="0" defaultValue>
                          Ninjabox - Delivery Only
                        </option>
                        <option value="7500">
                          Buffet setup + Service (+ ₹ 7,500.00)
                        </option>
                      </>
                    ) : null}

                    {/* ------------------------------------- */}

                    {(city === "delhi" ||
                      city === "gurgaon") &&
                      people < 26 ? (
                      <>
                        <option value="0" defaultValue>
                          Ninjabox - Bulk Food Delivery
                        </option>
                        <option value="3500">
                          Buffet setup + 1 waiter (+ ₹ 3,500.00)
                        </option>
                      </>
                    ) : (city === "delhi" ||
                      city === "gurgaon") &&
                      people > 25 &&
                      people < 41 ? (
                      <>
                        <option value="0" defaultValue>
                          Ninjabox - Bulk Food Delivery
                        </option>
                        <option value="4500">
                          Buffet setup + 2 waiter (+ ₹ 4,500.00)
                        </option>
                      </>
                    ) : (city === "delhi" ||
                      city === "gurgaon") &&
                      people > 40 &&
                      people < 61 ? (
                      <>
                        <option value="0" defaultValue>
                          Ninjabox -Bulk Food Delivery
                        </option>
                        <option value="6000">
                          Buffet setup + Service (+ ₹ 6,000.00)
                        </option>
                      </>
                    ) : (city === "delhi" ||
                      city === "gurgaon") &&
                      people > 60 &&
                      people < 100 ? (
                      <>
                        <option value="0" defaultValue>
                          Ninjabox -Bulk Food Delivery
                        </option>
                        <option value="7500">
                          Buffet setup + Service (+ ₹ 7,500.00)
                        </option>
                      </>
                    ) : null}
                  </select>

                  <p>₹{buffet}</p>
                </div>
              </div>
              {showPriceList && <div className={styles.pricing}>
                <div>
                  <div className={styles.pricingTitle1}>
                    <div>
                      <h4>Items Total</h4>
                    </div>
                    <div>
                      <p>₹{totalPrice.toLocaleString('en-US')}</p>
                    </div>
                  </div>
                  <div className={styles.pricingTitle11}>
                    <div>
                      <h4>NinjaBox Service</h4>
                    </div>
                    <div>
                      <p>₹0000</p>
                    </div>
                  </div>
                  <div className={styles.pricingTitle2}>
                    <div>
                      <h4>Delivery Charges <span></span></h4>
                    </div>
                    <div>
                      <p>₹{deliveryCharge}</p>
                    </div>

                  </div>
                  <hr className={styles.hr1} />
                  <div className={styles.pricingTitle3}>
                    <div>
                      <h4>Coupon Value</h4>
                    </div>
                    <div>
                      <p>₹0000</p>
                    </div>
                  </div>
                  <div className={styles.pricingTitle4}>
                    <div>
                      <h4>GST</h4>
                    </div>
                    <div>
                      <p>₹{GST}</p>
                    </div>
                  </div>
                  <hr id={styles.hr2} />
                </div>
                <div className={styles.grandTotal}>
                  <div>
                    <h4>Grand Total</h4>
                  </div>
                  <div>
                    <p>{grandTotal.toLocaleString('en-US')}</p>
                  </div>
                </div>
                <div className={styles.orderBtn}>
                  <button>Place Order</button>
                </div>
              </div>}
            </div>

          </div>
        </form>
        <div className={styles.createYourOwnPkg}>
          <div>
            <img src='Group 803.png' />
          </div>
          <div className='text-center mt-3'>
            <p>Not Happy with the Package?</p>
            <h2>Create Your<span>Own</span></h2>
            <h6>Curate your own flavour of party<br />from variety of cuisines</h6>
            <button>Create Your Own Package</button>
          </div>
        </div>
      </div>
      {/* <div className={styles.header}>
                <div className={styles.headerContent}>
                    <div>
                        <img id={styles.ninjaLogo} src='/CustomizeImg/CaterNinjaLogo.png' width="186.97px" height="39.79px" />
                        <h2>Customise Your</h2>
                        <h1>Ninja<span>Box</span></h1>
                        <p>Get instant quote in just few<br />easy steps!</p>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <img id={styles.ninja} src='/CustomizeImg/Group 267.png' width="208.89px" height="270.92px" />
                        </div>
                        <div>
                            <img id={styles.pkgImg} src='NB.png' width="376.91px" height="291.56px" />
                        </div>
                    </div>
                </div>
            </div> */}
      {/* <div className={styles.packageContainer}>
                <div className={styles.page}>
                    <div className={styles.cityContent}>
                        <div>
                            <h3>City</h3>
                        </div>
                        <div>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Mumbai</option>
                                <option value="1">Bangalore</option>
                                <option value="2">Delhi</option>
                                <option value="3">Gurgaon</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.bgWhiteClr}>
                        <div className={styles.pkgDetails}>
                            <div>
                                <h3>PACKAGE NAME</h3>
                                <h5>X Starters + X Mains + X Desserts</h5>
                                <div>
                                    <p id={styles.vegGuest}>Veg Guests<span>: 10</span></p>
                                    <p id={styles.nonVegGuest}>Non Veg Guests<span>: 10</span></p>
                                </div>
                            </div>
                            <div>
                                <img id={styles.pkgImg} src='555.png' width="366px" height="200px" />
                            </div>
                        </div>
                        <div className={styles.startersContainer}>
                            <h5>Starters</h5>
                            <div className={styles.starterItems}>
                                <div className={styles.fstItem}>
                                    <img className={styles.itemImage} src="/diy images/starter/image 23.png" />
                                    <div className={styles.itemDetailsContainer}>
                                        <img className={styles.vegLogo} src="/diy images/vegLogo.png" />
                                        <div>
                                            <h4>Paneer Butter<br />Masala</h4>
                                            <p>Classic Choice For Mains</p>
                                        </div>
                                        <div>
                                            <img className={styles.downarrowLogo} src="/diy images/Polygon 9.png" />
                                        </div>
                                        <div>
                                            <div className={styles.quantityBtn}>
                                                <button>-</button>
                                                <h6>5.5 Kg</h6>
                                                <button>+</button>
                                            </div>
                                            <p className={styles.recQnty}>Recommended Qt.</p>
                                        </div>
                                        <div>
                                            <img className={styles.trassLogo} src="/diy images/trash-alt.png" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className={styles.fstItem}>
                                        <img className={styles.itemImage} src="/diy images/starter/Mask group.png" />
                                        <div className={styles.itemDetailsContainer}>
                                            <img className={styles.vegLogo} src="/diy images/Group 962.png" />
                                            <div>
                                                <h4>Chicken<br />Tandoori</h4>
                                                <p>Classic Choice For Mains</p>
                                            </div>
                                            <div>
                                                <img className={styles.downarrowLogo} src="/diy images/Polygon 9.png" />
                                            </div>
                                            <div>
                                                <div className={styles.quantityBtn}>
                                                    <button>-</button>
                                                    <h6>50 Pcs</h6>
                                                    <button>+</button>
                                                </div>
                                                <p className={styles.recQnty}>Recommended Qt.</p>
                                            </div>
                                            <div>
                                                <img className={styles.trassLogo} src="/diy images/trash-alt.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.addStarterBtnContnr}>
                                    <button className={styles.addStarterBtn}>+ Add Starter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
    </div>
  )
}

export default CustomizeNinjaBox