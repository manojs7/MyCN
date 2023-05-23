import React from "react";
import { useEffect, useState, useRef } from "react";
import styles from "/styles/ViewPackage.module.scss";
import "bootstrap/dist/css/bootstrap.css";
import styles2 from "/styles/NewCustomizePkg.module.scss";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useAppMenu } from "$lib/menuContext";
import styles3 from "/styles/Custom_Package.module.scss";

const NinjaBoxViewPkg = () => {
  //DIY Logic by Manoj


  //DIY Logic by Manoj

  const { menu, cuisines, allMenus, cities, occasions, PreSelectMenuNinjaBox, ZipCodes } =
    useAppMenu();
  const [veg, setVeg] = useState(10);
  const [nonVeg, setNonVeg] = useState(10);
  const [people, setPeople] = useState(20);
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
  const [extraAdd, setExtraAdd] = useState(500);
  const [startersData, setStartersData] = useState([]);
  const [startersData2, setStartersData2] = useState([]);
  const [mainData, setMainData] = useState([]);
  const [mainData2, setMainData2] = useState([]);
  const [dessertData, setDessertData] = useState([]);
  const [dessertData2, setDessertData2] = useState([]);
  const [breadRiceData, setBreadRiceData] = useState([]);
  const [breadRiceData2, setBreadRiceData2] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState('')


  //code already done by sourav


  const [showDiv, setShowDiv] = useState(false);
  const [datas, setDatas] = useState()
  const [EmailedToParser, setEmailedToParser] = useState(false)


  const [city, setCity] = useState("");
  const [occasion, setOccasion] = useState("");
  const [itemSelected, setItemSelected] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [vegCount, setVegCount] = useState();
  const [nonVegCount, setNonVegCount] = useState();
  const [details, setDetails] = useState();
  const [packagePrice, setPackagePrice] = useState();
  const [image, setImage] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [ID, setId] = useState(4);
  const [mealType, setMealType] = useState('')

  //PLACE ORDER SUBMIT FORM
  const [name, setName] = useState("");
  const [packageName, setPackageName] = useState("");

  const [mobileno, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [zipcodeError, setZipcodeError] = useState("");

  //DATE LOGIC
  // const minDate = new Date();
  // minDate.setDate(minDate.getDate() + 2);
  // const minDateISO = minDate.toISOString().split('T')[0];

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



  useEffect(() => {
    let dataSelected = JSON.parse(sessionStorage.getItem("dataSelected"));
    console.log('dataselected', dataSelected)
    // sessionStorage.removeItem("dataSelected")
    if (dataSelected) {
      setCity(dataSelected["city"]);
      setVeg(dataSelected["vcount"]);
      setNonVeg(dataSelected["nvcount"]);
      setStartDate(dataSelected["selectedDate"]);
      setOccasion(dataSelected["occasion"]);
      setPackageName(dataSelected.itemSelected["name"]);
      setDetails(dataSelected.itemSelected["details"]);
      setPackagePrice(dataSelected.itemSelected["price"]);
      setImage(dataSelected.itemSelected["img"]);
      setId(dataSelected.itemSelected["id"]);
      setStartTime(dataSelected['startTime'])
      setMealType(dataSelected["mealType"])

    }

  }, []);

  // useEffect(()=>{
  //   let itemSelected=sessionStorage.getItem("dataSelected").itemSelected
  //   let dataSelected = { city: city, occasion: occasion, selectedDate: startDate, vcount: veg, nvcount: nonVeg, itemSelected: itemSelected, mealType: mealType, startTime:startTime }
  //     sessionStorage.setItem("dataSelected", JSON.stringify(dataSelected))
  // },[startDate])

  //by Manoj
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

    const result = allMenus?.reduce((finalArray, current) => {
      let obj = finalArray?.find((item) => item.name === current.name);

      // console.log('duplicate',result)
      if (obj) {
        return finalArray;
      }
      return finalArray.concat([current]);
    }, []);

    let url_value = sessionStorage.getItem("first_url2");
    // setRefURL(url_value);
    setStartersData(result.filter((d) => d.mealType === "Starter"));
    setStartersData2(result.filter((d) => d.mealType === "Starter"));
    setMainData(result.filter((d) => d.mealType === "Main course"));
    setMainData2(result.filter((d) => d.mealType === "Main course"));
    setDessertData(result.filter((d) => d.mealType === "Dessert"));
    setDessertData2(result.filter((d) => d.mealType === "Dessert"));
    setBreadRiceData(result.filter((d) => d.mealType === "Bread+Rice"));
    setBreadRiceData2(result.filter((d) => d.mealType === "Bread+Rice"));
  }, []);

  useEffect(()=>{
    preselection()
  },[ID])

  //Adding menu items to preselection

  const preselection =  () => {
    let dataSelected = JSON.parse(sessionStorage.getItem("dataSelected"));
    let ID2=dataSelected.itemSelected["id"];
    let mealType2=dataSelected["mealType"]
    
    let itemData;
    console.log('mtype', mealType2, ID2)
    if (ID2) {
        PreSelectMenuNinjaBox[mealType2].filter((d) => d.id === ID2)[0].items.forEach(
        (item) => {  
          itemData = allMenus.filter((d) => d.name === item);
         
          if (itemData.length > 0) {
            console.log("itemdata", itemData[0].name) 
            if (itemData[0].mealType === "Starter") {
              handleStatersAdd(itemData[0].name);
            } else if (itemData[0].mealType === "Main course") {
              handleMainAdd(itemData[0].name);
            } else if (itemData[0].mealType === "Bread+Rice") {
               handleBreadRiceAdd(itemData[0].name);
            } else if (itemData[0].mealType === "Dessert") {
              handleDesertsAdd(itemData[0].name);
            }
            else {
              console.log("suspect", item)
            }
          }

        }
      );
    } else {
    }
    setId(dataSelected.itemSelected["id"])
    
  };

  const handleStatersAdd = async(item_name, id) => {
    // setIsStarterChange(!isStarterChange);
    if (veg === 0 && nonVeg === 0) return;

    let temp = [...starters];
    const starter = allMenus.find((item) => item.name === item_name);
    // console.log("starterdata", starter);
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
      Images: starter.Images,
      selling_price: starter.selling_price,
      // description: starter.description,
    });
    setStarters(temp);

    console.log("starters", starters);
  };
  const handleMainAdd = async(item_name, id) => {
    // setIsMainChange(!isMainChange);
    if (veg === 0 && nonVeg === 0) return;
    let temp = [...mains];

    const main = allMenus.find((item) => item.name === item_name);
    let quantity;
    if (temp.find((item) => item.name === item_name)) {
      return;
    }
    let nonVegPastaMainCount = 0;
    let nonVegMainsGravyMainCount = 0;
    let nonVegMainThaiMainCount = 0;
    if (
      temp.find((item) => item.menu_label === "Pasta" && item.veg === false)
    ) {
      nonVegPastaMainCount += 1;
    } else if (
      temp.find(
        (item) => item.menu_label === "Mains-Gravy" && item.veg === false
      )
    ) {
      nonVegMainsGravyMainCount += 1;
    } else if (
      temp.find(
        (item) => item.menu_label === "Mains-Thai" && item.veg === false
      )
    ) {
      nonVegMainThaiMainCount += 1;
    }

    if ((nonVeg === 0 && veg > 0) || (veg === 0 && nonVeg > 0)) {
      // if not rice , bred, noodles
      console.log("not rice , bred, noodles1");
      if (main.Qtype === "pcs") {
        quantity = (veg > 0 ? veg : nonVeg) * 1;
      } else if (main.name === highestPrice.name) {
        quantity = ((veg > 0 ? veg : nonVeg) * 0.15).toFixed(1);
      } else {
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
            quantity = HandleCeilFloorValue(
              (veg * 0.1 + nonVeg * 0.1).toFixed(1)
            );
          }
        }
        //Pasta mains handelling
        //check whether non veg pasta is selected, if non veg pasta selected then veg pasta quantity =veg*100g only else veg*100+nonVeg*100g
        else if (main.menu_label === "Pasta") {
          if (nonVegPastaMainCount > 0) {
            quantity = HandleCeilFloorValue((veg * 0.1).toFixed(1));
          } else {
            quantity = HandleCeilFloorValue(
              (veg * 0.1 + nonVeg * 0.1).toFixed(1)
            );
          }
        }
        //Mains-gravy : same logic as above
        else if (main.menu_label === "Mains-Gravy") {
          if (nonVegMainsGravyMainCount > 0) {
            quantity = HandleCeilFloorValue((veg * 0.1).toFixed(1));
          } else {
            quantity = HandleCeilFloorValue(
              (veg * 0.1 + nonVeg * 0.1).toFixed(1)
            );
          }
        }
        //Main -Thai : same logic as above
        else if (main.menu_label === "Mains-Thai") {
          if (nonVegMainThaiMainCount > 0) {
            quantity = HandleCeilFloorValue((veg * 0.1).toFixed(1));
          } else {
            quantity = HandleCeilFloorValue(
              (veg * 0.1 + nonVeg * 0.1).toFixed(1)
            );
          }
        }
        //Mains-dry : veg quantity= veg*100+ nonveg*100  else non-veg quantity=non veg*100
        else if (main.menu_label === "Mains-dry") {
          quantity = (veg * 0.1 + nonVeg * 0.1).toFixed(1);
        } else {
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
        } else if (main.name === highestPrice.name) {
          quantity = (nonVeg * 0.15).toFixed(1);
        } else {
          quantity = HandleCeilFloorValue((nonVeg * 0.1).toFixed(1));
        }
      }
    }

    await temp.forEach((item) => {
      if (item.veg) {
        if (
          item.menu_label === "Mains-dry" ||
          item.menu_label === "Mains-dal"
        ) {
          item.quantity = HandleCeilFloorValue(veg * 0.1 + nonVeg * 0.1);
        } else if (item.menu_label === "Pasta") {
          if (nonVegPastaMainCount > 0) {
            item.quantity = HandleCeilFloorValue((veg * 0.1).toFixed(1));
          } else {
            item.quantity = HandleCeilFloorValue(
              (veg * 0.1 + nonVeg * 0.1).toFixed(1)
            );
          }
        }
        //Mains-gravy : same logic as above
        else if (item.menu_label === "Mains-Gravy") {
          if (nonVegMainsGravyMainCount > 0) {
            item.quantity = HandleCeilFloorValue((veg * 0.1).toFixed(1));
          } else {
            item.quantity = HandleCeilFloorValue(
              (veg * 0.1 + nonVeg * 0.1).toFixed(1)
            );
          }
        }
        //Main -Thai : same logic as above
        else if (item.menu_label === "Mains-Thai") {
          if (nonVegMainThaiMainCount > 0) {
            item.quantity = HandleCeilFloorValue((veg * 0.1).toFixed(1));
          } else {
            item.quantity = HandleCeilFloorValue(
              (veg * 0.1 + nonVeg * 0.1).toFixed(1)
            );
          }
        }
      } else {
        if (item.Qtype === "pcs") {
          item.quantity = nonVeg * 1;
        } else if (item.name === highestPrice.name) {
          item.quantity = HandleCeilFloorValue((nonVeg * 0.15).toFixed(1));
        } else {
          item.quantity = HandleCeilFloorValue((nonVeg * 0.1).toFixed(1));
        }
      }
    });

    await temp.push({
      // isRice: main.isRice,
      menu_label: main.menu_label,
      name: main.name,
      quantity: quantity,
      Qtype: main.Qtype, 
      veg: main.veg,
      Images: main.Images,
      selling_price: main.selling_price,
      // description: main.description,
    });

    setMains(temp);
    // handleAfterItemSelection(temp);
    // setMainData((prev) => prev.filter((d) => d.name !== item_name));
  };

  const handleBreadRiceAdd = (item_name, id) => {

    // setIsBreadChange(!isBreadChange);
    if (veg === 0 && nonVeg === 0) return;
    let temp = [...breadRice];
    const filterBreadRice = breadRiceData.find(
      (item) => item.name === item_name
    );
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
        ? (quantity = Math.round((veg + nonVeg) * 3))
        : (quantity = Math.round((veg + nonVeg) * 2));
      if (bread === 1) {
        quantity = Math.round((veg + nonVeg) * 3);
      } else {
        // temp.forEach((item) => {
        //   item.name === "Pooris" && item.menu_label === "Breads"
        //     ? (item.quantity = Math.round((veg + nonVeg) * 2))
        //     : (item.quantity = Math.round((veg + nonVeg) * 0).2);
        // });
        quantity = Math.round((veg + nonVeg) * 2);
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
        quantity = Math.round((veg + nonVeg) * 1.5);
      } else {
        // temp.forEach((item) => {
        //   item.name === "Pooris" && item.menu_label === "Breads"
        //     ? (item.quantity = Math.round((veg + nonVeg) * 2))
        //     : (item.quantity = Math.round((veg + nonVeg) * 0).2);

        // });
        quantity = Math.round((veg + nonVeg) * 1);
      }
    }
    //Noodles
    else if (filterBreadRice?.menu_label === "Noodle") {
      let nonVegNoodleCount = 0;

      temp.forEach((item) => {
        if (item.menu_label === "Noodle" && item.veg === false) {
          nonVegNoodleCount += 1;
        }
      });
      // console.log("naan");
      filterBreadRice.veg === true &&
        filterBreadRice.menu_label === "Noodle" &&
        nonVegNoodleCount > 0
        ? (quantity = HandleCeilFloorValue(veg * 0.2))
        : (quantity = HandleCeilFloorValue((veg + nonVeg) * 0.1));
      filterBreadRice.veg === false &&
        filterBreadRice.menu_label === "Noodle" &&
        nonVegNoodleCount > 0
        ? (quantity = HandleCeilFloorValue(nonVeg * 0.15))
        : (quantity = HandleCeilFloorValue(nonVeg * 0.2));

      // temp.forEach((item) => {
      //   item.veg === true &&
      //   item.menu_label === "Noodle" &&
      //   nonVegNoodleCount > 0
      //     ? (item.quantity = veg * 0.2)
      //     : (item.quantity = (veg + nonVeg) * 0.1);
      //   item.veg === false &&
      //   item.menu_label === "Noodle" &&
      //   nonVegNoodleCount > 0
      //     ? (item.quantity = nonVeg * 0.15)
      //     : (item.quantity = nonVeg * 0.2);
      // });
    } else if (filterBreadRice?.menu_label === "Rice") {
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
        if (mains.length === 0 && count === 1) {
          quantity = HandleCeilFloorValue(guests * 0.3);
        } else if (mains.length > 0 && count === 1) {
          quantity = HandleCeilFloorValue(guests * 0.2);
        } else if (count >= 3) {
          quantity = HandleCeilFloorValue(guests * 0.1);
        } else {
          quantity = HandleCeilFloorValue(guests * 0.15);
        }
        temp.forEach((item) => {
          if (item.menu_label === "Rice") {
            if (count >= 3) {
              item.quantity = HandleCeilFloorValue(guests * 0.1);
            } else {
              item.quantity = HandleCeilFloorValue(guests * 0.15);
            }
            // item.quantity = 0.15 * guests;
          }
        });

        // if (count >= 1) {
        //   console.log("count2");
        //   quantity = 0.30 * guests;
        //   temp.forEach((item) => {
        //     if (item.menu_label === "Rice") {
        //       item.quantity = 0.15 * guests;
        //     }
        //   });
        // } else if (mains.length > 0 && count === 1) {
        //   console.log("count1");

        //   quantity = 0.15 * guests;
        // } else if (mains.length === 0 && count === 1) {
        //   console.log("count1");
        //   quantity = 0.3 * guests;
        // }
      } else if (veg > 0 && nonVeg > 0) {
        let guests = veg + nonVeg;

        if (filterBreadRice.veg) {
          if (mains.length === 0 && count === 1) {
            quantity = HandleCeilFloorValue(guests * 0.3);
          } else if (mains.length > 0 && count === 1) {
            quantity = HandleCeilFloorValue(guests * 0.2);
          } else if (count >= 3) {
            quantity = HandleCeilFloorValue(veg * 0.1);
          } else {
            quantity = HandleCeilFloorValue(veg * 0.15);
          }
        } else {
          //non veg rice handelling

          if (mains.length === 0 && count === 1) {
            quantity = HandleCeilFloorValue(nonVeg * 0.3);
          } else if (mains.length > 0 && count === 1) {
            quantity = HandleCeilFloorValue(nonVeg * 0.2);
          } else if (count >= 3) {
            quantity = HandleCeilFloorValue(nonVeg * 0.1);
          } else {
            quantity = HandleCeilFloorValue(nonVeg * 0.15);
          }
        }
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
              item.quantity = Math.round((veg + nonVeg) * 3);
            } else {
              item.quantity = Math.round((veg + nonVeg) * 2);
            }
          } else if (item?.menu_label === "Breads" && item.name !== "Pooris") {
            if (bread === 1) {
              item.quantity = Math.round((veg + nonVeg) * 2);
            } else {
              item.quantity = Math.round((veg + nonVeg) * 1);
            }
          } else if (item?.menu_label === "Rice") {
            console.log("rice", count);
            if ((veg === 0 && nonVeg > 0) || (veg > 0 && nonVeg === 0)) {
              let guests = veg > 0 ? veg : nonVeg;
              if (count >= 2) {
                console.log("count2");
                item.quantity = HandleCeilFloorValue(0.15 * guests);
              } else if (mains.length > 0 && count === 1) {
                console.log("count1");

                item.quantity = HandleCeilFloorValue(0.2 * guests);
              } else if (mains.length === 0 && count === 1) {
                console.log("count1");
                item.quantity = HandleCeilFloorValue(0.3 * guests);
              }
            } else if (veg > 0 && nonVeg > 0) {
              let guests = veg + nonVeg;
              if (count >= 2) {
                item.quantity = HandleCeilFloorValue(0.15 * guests);
              } else if (
                count === 1 &&
                mains.length === 0 &&
                starters.length >= 2
              ) {
                if (item.veg === true) {
                  item.quantity = HandleCeilFloorValue(0.25 * veg);
                } else {
                  item.quantity = HandleCeilFloorValue(0.25 * nonVeg);
                }
              } else if (
                count === 1 &&
                mains.length === 0 &&
                starters.length <= 1
              ) {
                if (item.veg === true) {
                  item.quantity = HandleCeilFloorValue(0.3 * veg);
                } else {
                  item.quantity = HandleCeilFloorValue(0.3 * nonVeg);
                }
              } else if (
                count >= 1 &&
                mains.length === 0 &&
                starters.length <= 1
              ) {
                if (item.veg === true) {
                  item.quantity = HandleCeilFloorValue(0.25 * veg);
                } else {
                  item.quantity = HandleCeilFloorValue(0.25 * nonVeg);
                }
              } else if (
                count >= 1 &&
                mains.length === 0 &&
                starters.length >= 2
              ) {
                if (item.veg === true) {
                  item.quantity = HandleCeilFloorValue(0.2 * veg);
                } else {
                  item.quantity = HandleCeilFloorValue(0.2 * nonVeg);
                }
              } else if (count === 1 && mains.length >= 1) {
                item.quantity = HandleCeilFloorValue(0.2 * guests);
              } else {
                if (item.veg === true) {
                  item.quantity = HandleCeilFloorValue(0.15 * veg);
                } else {
                  item.quantity = HandleCeilFloorValue(0.15 * nonVeg);
                }
              }
            }
          }
        });

        // temp.forEach((item) => {
        //   if (count >= 3) {
        //     if (item.menu_label === "Rice" && item.veg === true) {
        //       item.quantity = 0.1 * veg;
        //     }
        //     if (item.menu_label === "Rice" && item.veg === false) {
        //       item.quantity = 0.1 * nonVeg;
        //     }
        //   } else {
        //     if (item.menu_label === "Rice" && item.veg === true) {
        //       item.quantity = 0.15 * veg;
        //     }
        //     if (item.menu_label === "Rice" && item.veg === false) {
        //       item.quantity = 0.15 * nonVeg;
        //     }
        //   }
        // });

        // if (count >= 2) {
        //   quantity = 0.15 * guests;
        //   temp.forEach((item) => {
        //     if (item.menu_label === "Rice" && item.veg === true) {
        //       item.quantity = 0.15 * guests;
        //     }
        //     if (item.menu_label === "Rice" && item.veg === false) {
        //       item.quantity = 0.15 * nonVeg;
        //     }
        //   });
        // }
      }
      console.log("rice", count);
    }
    temp.push({
      // isRice: main.isRice,
      menu_label: filterBreadRice?.menu_label,
      name: filterBreadRice?.name,
      quantity: quantity,
      Images: filterBreadRice?.Images,
      Qtype: filterBreadRice?.Qtype,
      veg: filterBreadRice?.veg,
      selling_price: filterBreadRice?.selling_price,
      // description: main.description,
    });
    setBreadRice(temp);
    // setBreadRiceData((prev) => prev.filter((d) => d.name !== item_name));
  };
  const handleDesertsAdd = (item_name, id) => {
    // setIsDessertChange(!isDessertChange);
    let temp = [...desserts];
    if (veg === 0 && nonVeg === 0) return;
    if (temp.find((item) => item.name === item_name)) {
      return;
    }

    const dessert = allMenus.find((item) => item.name === item_name);
    let quantity;
    if (temp.find((item) => item.name === item_name)) {
      return;
    }
    if (dessert.Qtype === "pcs") {
      // expensive desserts should go 1 piece
      if (dessert.cuisine === "Continental") {
        quantity = Math.round(veg + nonVeg);
      } else {
        if (dessert.name === "Angoori Gulab Jamun") {
          quantity = Math.round((veg + nonVeg) * 3);
        } else {
          quantity = Math.round((veg + nonVeg) * 1.5);
        }
      }
    } else {
      quantity = Math.round((veg + nonVeg) * 0.05).toFixed(1);
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
      Images: dessert.Images,
      quantity: quantity,
      Qtype: dessert.Qtype,
      veg: dessert.veg,
      selling_price: dessert.selling_price,
    });
    setDesserts(temp);

    // setDessertData((prev) => prev.filter((d) => d.id !== item_name));
  };

  function HandleCeilFloorValue(x) {
    var decimals = (x - Math.floor(x)).toFixed(1);
    if (decimals <= 0.4) {
      x = Math.floor(x);
    } else if (decimals >= 0.6) {
      x = Math.floor(x);
    }
    return x;
  }
  useEffect(() => {
    preselection()

    let starterPrice = 0;
    let mainPrice = 0;
    let dessertPrice = 0;
    let bredRicePrice = 0;

    starters.map((d) => {
      if (d.Qtype === "pcs") {
        starterPrice += d.quantity * parseInt(d.selling_price / 12);
      } else {
        starterPrice += d.quantity * parseInt(d.selling_price);
      }
    });
    console.log("startersPrice", starterPrice);
    mains.map((d) => {
      if (d.Qtype === "pcs") {
        mainPrice += d.quantity * parseInt(d.selling_price / 12);
      } else {
        mainPrice += d.quantity * parseInt(d.selling_price);
      }
    });
    console.log("mainprice", mainPrice);
    desserts.map((d) => {
      if (d.Qtype === "pcs") {
        // expensive desserts should go 1 piece
        if (d.cuisine === "Continental") {
          dessertPrice += d.quantity * (parseInt(d.selling_price) / 12);
        } else {
          dessertPrice += d.quantity * (parseInt(d.selling_price) / 12);
        }
      } else {
        dessertPrice += d.quantity * parseInt(d.selling_price);
      }
    });
    console.log("dessertprice", dessertPrice);
    breadRice.map((d) => {
      if (d.Qtype === "pcs") {
        bredRicePrice += d.quantity * parseInt(d.selling_price / 12);
      } else {
        bredRicePrice += d.quantity * parseInt(d.selling_price);
      }
    });
    console.log("breadriceprice", bredRicePrice);
    people = veg + nonVeg;
    setPeople(people);
    setTotalPrice(
      parseInt(
        starterPrice + mainPrice + dessertPrice + bredRicePrice + extraAdd
      )
    );
    setGST(getGst());
    setgrandTotal(
      parseInt(
        starterPrice + mainPrice + dessertPrice + bredRicePrice + extraAdd
      ) +
      parseInt(getGst())
    );




  }, [starters, mains, desserts, breadRice, veg, nonVeg, buffet]);

  //details submissions here

  //checking Zipcode
  useEffect(() => {
    if (zipcode.length > 5) {
      if (ZipCodes.includes(zipcode)) {
        setZipcodeError("")
      }
      else {
        setZipcodeError("Sorry, we are not servicable at provided PinCode Area.");
      }
    }

  }, [zipcode])

  const submitUserData = async (e) => {
    e.preventDefault();
    let url_value = sessionStorage.getItem("first_url2");

    if(zipcodeError){
      alert("ZipCode is not servicable by us!")
      return 
    }

    if (!name || !mobileno || !email || !address || !zipcode) {
      alert('Please fill in all fields');
      return;
    } else {

      var final_gst = getGst();
      var final_grandtotal =
        parseInt(totalPrice) +
        // parseInt(buffet) +
        // parseInt(deliveryCharge) +
        getGst();
      setgrandTotal(
        parseInt(totalPrice) +
        // parseInt(buffet) +
        // parseInt(deliveryCharge) +
        getGst()
      );

      // yaha par user data set kardo aur payment ka popup daal do
      let datas = {
        name: name,
        email: email,
        mobileno: mobileno,
        city: city,
        occasion: occasion,
        veg_c: veg,
        nonveg_c: nonVeg,
        people: people,
        date: startDate,
        time: startTime,
        url: url_value,
        meal: mealType,
        cuisine: "All",
        preference: "preference",
        mealtype: mealType,
        boolean: true,
        appetizer: starters,
        mainCourse: mains,
        dessert: desserts,
        breadRice: breadRice,
        grandTotal: final_grandtotal,
        buffet: buffet,
        dessertClassname: "caterNinja_add_dessert_button",
        totalPrice: totalPrice,
        GST: final_gst,
        showDessert: false,
        emailedtoparser: EmailedToParser,
        address: address,
        zipcode: zipcode,
        packageName: packageName,
        packagePrice: packagePrice
      };

      setDatas(datas);
      console.log("datas", datas)

      await payumoney(e)
    }
  };

  function getGst() {
    return parseInt(
      ((parseInt(totalPrice) + parseInt(buffet) + parseInt(deliveryCharge)) *
        5) /
      100
    );

  }



  //Payment Part starts here
  const interakt = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Basic dkVfdTBDWUZzV3lPTE8yUlE2MHBleXIwRVZWUzN6OFJncGxJYl9aejZZUTo=");

    var raw = { "phoneNumber": datas.mobileno, "event": "Test", "traits": { "orderID": "{order_id}", "doe": "{doe}", "toe": "{time_of_ev}", "value": "{selling_pr}", "ninja": "{ninja}" } }
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(raw),
      redirect: 'follow'
    };

    await fetch("https://api.interakt.ai/v1/public/track/events/", requestOptions)
      .then(response => console.log("resot", response.json()))
  }

  const EmailOrderConfirmation = async (datas) => {

    //post api for email
    await fetch("/api/EmailOrderConfirmation", {
      method: "POST",
      body: JSON.stringify(datas),
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    }).then((res) => {
      alert("Hurray! Your Order has been placed successfully, Our Ninja will connect you shortly for confirmation.");

      if (res.success) {
        alert("Hurray! Your Order has been placed successfully, Our Ninja will connect you shortly for confirmation.");
        //show pop up here
      }
      else if (res.message === "Parameter missing") {
        alert("Email or Name is Missing");


      }
      else {
        console.log("Failed to send message");
      }
    });
  }

  // const selectedItems = filteredData.filter(item => item.checked);
  // const unselectedItems = filteredData.filter(item => !item.checked);

  // selectedItems.sort((a, b) => a.name.localeCompare(b.name));

  // const sortedData = selectedItems.concat(unselectedItems);

  const redirectToPayU = async (pd) => {
    console.log("pd", pd);
    //use window.bolt.launch if you face an error in bolt.launch

    bolt.launch(pd, {
      responseHandler: function (response) {
        // your payment response Code goes here
        fetch("/api/payResponse", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(response.response),
        })
          .then(function (a) {

            return a.json();
          })
          //Storing the payment details
          .then(async function (json) {

            json.datas = datas,
              json.createdAt = new Date()


            //API call for saving all the payment response whether it is success or failure
            fetch("/api/RawPaymentAllDetails", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(json),
            })

            // if payment gets successful

            if (json.status.status === "success") {

              // let payData={
              datas.txnid = json.status.txnid,
                datas.phone = json.status.phone,
                datas.productinfo = json.status.productinfo,
                datas.amount = json.status.amount,
                datas.status = json.status,
                datas.email = json.status.email,
                datas.bank_ref_num = json.status.bank_ref_num,
                datas.OrderStatus = ""
              datas.createdAt = new Date()
              // datas.name=json.status.field4

              // }
              // let userData= JSON.stringify(datas)+JSON.stringify(payData);

              fetch("/api/saveCompletedOrderDetails", {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(datas),
              }).then((res) => console.log("successful"),

                //Email the Order Confirmation
                await EmailOrderConfirmation(datas),

                //Interakt Api message to hit my number with details
                await interakt()


              );
            }
            else {

              alert("Payment Failed! Please try again.");
            }
          });

      },

      // catchException: function (response) {
      //   // the code you use to handle the integration errors goes here
      //   // Make any UI changes to convey the error to the user
      // },
    });
  };

  const payumoney = async (e) => {
    e.preventDefault();

    if (totalPrice < 2999) {
      alert("Order value must be greater than 3000");
      return;
    }
    //Create a Data object that is to be passed to LAUNCH method of Bolt
    let oid = "CaterNinja" + Math.floor(Math.random(6) * 1000000);
    if (datas) {
      var pd = {
        key: "VKy9EEvW",
        txnid: oid,
        amount: datas.grandTotal,
        firstname: datas.name,
        email: datas.email,
        phone: datas.mobileno,
        productinfo: "test",
        surl: "https://new.caterninja.com",
        furl: "https://new.caterninja.com",
        hash: "",
      };

    }
    else {
      return
    }

    // Data to be Sent to API to generate hash.
    let data = {
      txnid: pd.txnid,
      email: pd.email,
      amount: pd.amount,
      productinfo: pd.productinfo,
      firstname: pd.firstname,
    };
    let self = this;
    // API call to get the Hash value
    fetch("/api/paynow", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(function (a) {
        return a.json();
      })
      .then(function (json) {
        pd.hash = json["hash"];
        //  With the hash value in response, we are ready to launch the bolt overlay.
        //Function to launch BOLT
        redirectToPayU(pd);
      });
  };

  const confirmPkg = async (e) => {
    e.preventDefault();
    setGST(getGst())
    setgrandTotal(
      parseInt(
        totalPrice
      ) +
      parseInt(getGst())
    );

    if (
      name.length == "" ||
      mobileno.length == "" ||
      !/^\d{10}$/.test(mobileno) ||
      email.length == "" ||
      !/\S+@\S+\.\S+/.test(email)
    ) {
      if (name.length == "") {
        Swal.fire({
          text: "Please enter your Name",
          icon: "warning",
          confirmButtonText: "OK",
        });
        //alert("Fill the name please");
      } else if (mobileno.length == "") {
        Swal.fire({
          text: "Please enter your mob.no.",
          icon: "warning",
          confirmButtonText: "OK",
        });
        //alert("Fill the Mobile No please");
      } else if (!/^\d{10}$/.test(mobileno)) {
        Swal.fire({
          text: "Please enter a valid phone number",
          icon: "warning",
          confirmButtonText: "OK",
        });
        //alert("Fill the Mobile No please");
      } else if (email.length == "") {
        Swal.fire({
          text: "Please enter your Email",
          icon: "warning",
          confirmButtonText: "OK",
        });
        //alert("Fill the Email please");
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        Swal.fire({
          text: "Please enter valid Email",
          icon: "warning",
          confirmButtonText: "OK",
        });
        //alert("Fill the Email please");
      }
      return false;
    }
    setShowDiv(true);
    let url_value = sessionStorage.getItem("first_url2");
    var final_gst = getGst();
    var final_grandtotal =
      parseInt(totalPrice) +
      getGst();
    setgrandTotal(
      parseInt(totalPrice) +
      parseInt(buffet) +
      // parseInt(deliveryCharge) +
      getGst()
    );


    let datas = {
      name: name,
      email: email,
      mobileno: mobileno,
      city: city,
      occasion: occasion,
      veg_c: veg,
      nonveg_c: nonVeg,
      people: people,
      date: startDate,
      time: startTime,
      url: url_value,
      meal: mealType,
      cuisine: "All",
      preference: "preference",
      mealtype: mealType,
      boolean: true,
      appetizer: starters,
      mainCourse: mains,
      dessert: desserts,
      breadRice: breadRice,
      grandTotal: final_grandtotal,
      buffet: buffet,
      dessertClassname: "caterNinja_add_dessert_button",
      totalPrice: totalPrice,
      GST: final_gst,
      showDessert: false,
      emailedtoparser: EmailedToParser,
      address: address,
      zipcode: zipcode,
      packageName: packageName,
      packagePrice: packagePrice
    };

    setDatas(datas);
    let data = "";
    try {
      data = JSON.stringify(datas);
    } catch (e) {
      console.log(e);
    }

    await fetch("/api/forma", {
      method: "POST",
      body: data,
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    }).then((res) => {
      console.log(res.success);
      setEmailedToParser(true)
      if (res.success) {
        console.log("message sent");
      } else {
        console.log("Failed to send message");
      }
    });

  };


  const placeOrderBtn = () => {
    setShowPopup(true);
  }
  const closePopup = () => {
    setShowPopup(false);
  }


  return (
    <div className={styles.customizeMainContainer}>
      <div className={styles.customizeMainContainer}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <img id={styles.ninjaLogo} src='/CustomizeImg/CaterNinjaLogo.png' width="91.6px" height="19.49px" />
            <div className={styles.textLogo}>
              <div>
                <h3>View your</h3>
                <h2 id={styles.ninjaBoxTitle}>Ninja<span>Box</span></h2>
                <h5>You can also customise your<br />package below!</h5>
              </div>
              <div>
                <img id={styles.ninja} src='/CustomizeImg/Group 267 (1).png' width="102.33px" height="132.73px" />
              </div>
              <div className={styles.LgHeaderImg} style={{ marginLeft: "120px", marginTop: "10px" }}>
                <img src="Group 1016.png" width="300px" height="280px" />
              </div>
            </div>
          </div>
          {/* <div className={styles.pkgCardHeader}>
                        <div>
                            <h3>PACKAGE NAME</h3>
                            <img src='555.png' />
                            <h5>X Starters + X Mains + X Desserts</h5>
                            <h4> XXXX</h4>
                            <p>(For 20 Guests)</p>
                        </div>
                    </div> */}
        </div>
        {showPopup && <div className={styles.popupCnfrmPkg}>
          <h4>Details</h4>
          <div className={styles.scrldetails}>
            <div className={styles.formDetails}>
              <div className='d-flex justify-content-between'>
                <p>Name:</p>
                <input type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}></input>
              </div>
              <div className='d-flex justify-content-between'>
                <p>Phone:</p>
                <input type="text"
                  value={mobileno}
                  onChange={(e) => setPhone(e.target.value)}></input>
              </div>
              <div className='d-flex justify-content-between'>
                <p>Email:</p>
                <input type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}></input>
              </div>
              <div className='d-flex justify-content-between'>
                <p>Address:</p>
                <input type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}></input>
              </div>
              <div className='d-flex justify-content-between'>
                <p>ZipCode:</p>
                <input type="number"
                  maxLength={6}
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}></input>
              </div>
              <p>{zipcodeError}</p>
            </div>
            <hr />
            <div className={styles.selectedDetails}>
              <div className={styles.data}>
                <div>
                  <h6>City:</h6>
                  <h6>Date:</h6>
                  <h6>Time:</h6>
                  <h6>Veg Guest:</h6>
                  <h6>Non-veg Guest:</h6>
                  <h6>Occassion:</h6>
                </div>
                <div>
                  <h6>{city}</h6>
                  <h6>{startDate}</h6>
                  <h6>{startTime}</h6>
                  <h6>{veg}</h6>
                  <h6>{nonVeg}</h6>
                  <h6>{occasion}</h6>
                </div>
              </div>
              <hr />
              <div className={styles.selectedItems}>
                <div>
                  <h4>- Starters -</h4>
                  {starters.map((item, index) => (
                    <p className="col-10">{item.name} ({item.quantity} {item.Qtype})</p>
                  ))
                  }
                </div>
                <div>
                  <h4>- Mains -</h4>
                  {mains.map((item, index) => (
                    <p className="col-10">{item.name} ({item.quantity} {item.Qtype})</p>
                  ))
                  }
                  {breadRice.map((item, index) => (
                    <p className="col-10">{item.name} ({item.quantity} {item.Qtype})</p>
                  ))
                  }
                </div>
                <div>
                  <h4>- Desserts -</h4>
                  {desserts.map((item, index) => (
                    <p>{item.name} ({item.quantity} {item.Qtype})</p>
                  ))
                  }
                </div>
              </div>
            </div>
          </div>
          <div>
            <hr />
            <div className={styles.priceing}>
              <h6>GRAND TOTAL :</h6>
              <h6>₹ {grandTotal}</h6>
            </div>
            <div className={styles.cnfmBtn}>
              <button onClick={closePopup} id={styles.cancelBtn}>Go Back</button>
              <button onClick={submitUserData} id={styles.viewBtn}>Payment</button>
            </div>
          </div>
        </div>}
        <div className={styles.redBg}>

          <div className={styles.redContent}>
            <div className={styles.cityDateContainer}>
              <div>
                <p>City</p>
                <div>
                  <select
                    name="city"
                    aria-label="Default select example"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  >
                    <option value="" selected>
                      Select City
                    </option>
                    {cities.map((item, index) => {
                      return (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div>
                <p>Date</p>
                <div>
                  {/* <input type="date" onChange={(event) => setStartDate(event.target.value)} value={startDate} min={minDateISO}></input> */}
                  <select id="dateSelect" onChange={(event) => setStartDate(event.target.value)} value={startDate}>
                    <option value="">Select a date</option>
                    {generateDateOptions()}
                  </select>
                </div>
              </div>
            </div>
            <div className={styles.guestCountContainer}>
              <div>
                <p>Veg Count</p>
                <div>
                  <input value={veg}></input>
                </div>
              </div>
              <div>
                <p>N-Veg Count</p>
                <div>
                  <input value={nonVeg}></input>
                </div>
              </div>
            </div>
            <div className={styles.cityDateContainer}>
              <div>
                <p>Occasion</p>
                <div>
                  <select
                    name="occasion"
                    aria-label="Default select example"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                  >
                    <option value="" selected>
                      Select Occasion
                    </option>
                    {occasions.map((item, index) => {
                      return (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div>
                <p>Delivery Time</p>
                <div>
                  <select className="mx-auto" value={startTime} onChange={(e) => setStartTime(e.target.value)}>
                    <option value="11:00 am">11:00 am</option>
                    <option value="11:30 am">11:30 am</option>
                    <option value="12:00 pm">12:00 pm</option>
                    <option value="12:30 pm">12:30 pm</option>
                    <option value="1:00 pm">1:00 pm</option>
                    <option value="1:30 pm">1:30 pm</option>
                    <option value="2:00 pm">2:00 pm</option>
                    <option value="2:00 pm">2:00 pm</option>
                    <option value="2:30 pm">2:30 pm</option>
                    <option value="3:00 pm">3:00 pm</option>
                    <option value="5:00 pm">5:00 pm</option>
                    <option value="5:30 pm">5:30 pm</option>
                    <option value="6:00 pm">6:00 pm</option>
                    <option value="6:30 pm">6:30 pm</option>
                    <option value="7:00 pm">7:00 pm</option>
                    <option value="7:30 pm">7:30 pm</option>
                    <option value="8:00 pm">8:00 pm</option>
                    <option value="8:30 pm">8:30 pm</option>
                    <option value="9:00 pm">9:30 pm</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.whiteBg}>
            <div className={styles.packageName}>
              <h3>{packageName}</h3>
              <img src={image} height="150px" width="274.5px" />
              <h6>{details}</h6>
              {/* <div>
                                <p id={styles.vegGuest}>Veg Guests<span>: 10</span></p>
                                <p id={styles.nonVeg}>Non Veg Guests<span>: 10</span></p>
                            </div> */}
              {/* <h5>₹ {price}</h5> */}
            </div>
            <div className={styles.pkgDetails}>
              <div>
                {/* <h3>{ID? PreSelectMenuNinjaBox[mealType].filter((d)=>d.id===ID)[0].name:''}</h3> */}
                <h3>{packageName}</h3>
                <h5>{starters?.length} Starters + {mains?.length} Mains + {desserts?.length} Desserts</h5>
                <div>
                  <p id={styles.vegGuest}>Veg Guests<span>: {veg}</span></p>
                  <p id={styles.nonVegGuest}>Non Veg Guests<span>: {nonVeg}</span></p>
                </div>
                {/* <div>
                  <h6>₹ {packagePrice }</h6>
                </div> */}
                {/* <div>
                                    <h6>₹ {price}</h6>
                                </div> */}
              </div>
              <div>
                <img id={styles.pkgImg} src={image} width="366px" height="200px" />
              </div>
            </div>
            <div>
              <div className={styles.menuContainer}>
                <div className={styles.startersContainer}>
                  <h5>Starters</h5>
                  <div className={styles.starterItems}>
                    {starters.map((item, index) => (
                      <div className={styles.fstItem}>
                        {item.Images ? (
                          <img
                            className={styles.itemImage}
                            src={item.Images}
                            width="30.05px"
                            height="26.54px"
                          />
                        ) : (
                          <img
                            className={styles.itemImage}
                            src="https://ik.imagekit.io/ws3brr13khq/ninjabox_uqYIfAoGr.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677930049169"
                            width="30.05px"
                            height="26.54px"
                          />
                        )}
                        <div className={styles.itemDetailsContainer}>
                          {item.veg === true ? (
                            <img
                              className={styles.vegLogo}
                              src="/diy images/vegLogo.png"
                            />
                          ) : (
                            <img
                              className={styles.vegLogo}
                              src="/diy images/Group 962.png"
                            />
                          )}
                          <div>
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                          </div>
                          <div className={styles.pcs}>
                            <p>{item.quantity}{item.Qtype}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <hr className={styles2.MenuHr} />
                <div className={styles2.imgDesc} id="d2">
                  <p>*Images are for representation purpose only</p>
                </div>
                <div className={styles.startersContainer}>
                  <h5 className='mt-5'>Mains</h5>
                  <div className={styles.starterItems}>
                    {mains.map((item, index) => (
                      <div className={styles.fstItem}>
                        {item.Images ? (
                          <img
                            className={styles.itemImage}
                            src={item.Images}
                            width="30.05px"
                            height="26.54px"
                          />
                        ) : (
                          <img
                            className={styles.itemImage}
                            src="https://ik.imagekit.io/ws3brr13khq/ninjabox_uqYIfAoGr.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677930049169"
                            width="30.05px"
                            height="26.54px"
                          />
                        )}
                        <div className={styles.itemDetailsContainer}>
                          {item.veg === true ? (
                            <img
                              className={styles.vegLogo}
                              src="/diy images/vegLogo.png"
                            />
                          ) : (
                            <img
                              className={styles.vegLogo}
                              src="/diy images/Group 962.png"
                            />
                          )}
                          <div>
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                          </div>
                          <div className={styles.pcs}>
                            <p>{item.quantity}{item.Qtype}</p>
                          </div>
                        </div>
                      </div>

                    ))}

                  </div>
                </div>

                <div className={styles.startersContainer}>
                  <h5 className='mt-5'>Bread, Rice and Noodles</h5>
                  <div className={styles.starterItems}>
                    {breadRice.map((item, index) => (
                      <div className={styles.fstItem}>
                        {item.Images ? (
                          <img
                            className={styles.itemImage}
                            src={item.Images}
                            width="30.05px"
                            height="26.54px"
                          />
                        ) : (
                          <img
                            className={styles.itemImage}
                            src="https://ik.imagekit.io/ws3brr13khq/ninjabox_uqYIfAoGr.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677930049169"
                            width="30.05px"
                            height="26.54px"
                          />
                        )}
                        <div className={styles.itemDetailsContainer}>
                          {item.veg === true ? (
                            <img
                              className={styles.vegLogo}
                              src="/diy images/vegLogo.png"
                            />
                          ) : (
                            <img
                              className={styles.vegLogo}
                              src="/diy images/Group 962.png"
                            />
                          )}
                          <div>
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                          </div>
                          <div className={styles.pcs}>
                            <p>{item.quantity}{item.Qtype}</p>
                          </div>
                        </div>
                      </div>

                    ))}

                  </div>
                </div>
                <hr className={styles2.MenuHr} />
                <div className={styles2.imgDesc} id="d2">
                  <p>*Images are for representation purpose only</p>
                </div>
                <div className={styles.startersContainer}>
                  <h5 className='mt-5'>Desserts</h5>
                  <div className={styles.starterItems}>
                    {desserts.map((item, index) => (
                      <div className={styles.fstItem}>
                        {item.Images ? (
                          <img
                            className={styles.itemImage}
                            src={item.Images}
                            width="30.05px"
                            height="26.54px"
                          />
                        ) : (
                          <img
                            className={styles.itemImage}
                            src="https://ik.imagekit.io/ws3brr13khq/ninjabox_uqYIfAoGr.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677930049169"
                            width="30.05px"
                            height="26.54px"
                          />
                        )}
                        <div className={styles.itemDetailsContainer}>
                          {item.veg === true ? (
                            <img
                              className={styles.vegLogo}
                              src="/diy images/vegLogo.png"
                            />
                          ) : (
                            <img
                              className={styles.vegLogo}
                              src="/diy images/Group 962.png"
                            />
                          )}
                          <div>
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                          </div>
                          <div className={styles.pcs}>
                            <p>{item.quantity}{item.Qtype}</p>
                          </div>
                        </div>
                      </div>

                    ))}

                  </div>
                </div>
                <hr className={styles2.MenuHr} />
                <div className={styles2.imgDesc} id="d2">
                  <p>*Images are for representation purpose only</p>
                </div>
              </div>
            </div>
            {/* <div className='mt-5'>
                            <div className={styles.userInput}>
                                <h4>Details*</h4>
                                <div className={styles.detailsInputLg}>
                                    <input placeholder='Name' />
                                    <input placeholder='Number' />
                                    <input placeholder='E-Mail' />
                                </div>
                            </div>
                        </div> */}
            <div className="mt-5">
              <div className={styles2.userInput}>
                <h4>Details*</h4>
                <form className={styles2.detailsInputLg}>
                  <input
                    placeholder="Name"
                    onInput={(e) => setName(e.target.value)}
                    required
                  />
                  <input
                    placeholder="Phone No."
                    name="mobileno"
                    onInput={(e) => setPhone(e.target.value)}
                    maxLength="10"
                    required
                  />
                  <input
                    placeholder="Email"
                    name="email"
                    onInput={(e) => setEmail(e.target.value)}
                    required
                  />
                </form>
              </div>
            </div>
            {/* <div className={styles.chefNote}>
                            <input placeholder='Special Restriction? Chef Note?' type="text" />
                        </div> */}
            <div className={styles.btnContnr}>
              <div>
                <button onClick={confirmPkg} id={styles.cnfrmPkg}>Check Price</button>
              </div>
              <div>
                <a href="/customiseNinjaBox"><button id={styles.custmPkg}>Customise Package</button></a>
              </div>
            </div>
            <div className={styles.createNewPkg}>
              {/* <button onClick={() => window.open('/checkprice', '_blank')}>Create New Package</button> */}
            </div>
            {/* <div style={{marginBottom: "10px"}} className={styles.instantQuoteBtn}>
                            <button>Get Instant Quote</button>
                        </div> */}
            {/* <div className={styles.applyCoupon}>
                            <input type="text" placeholder='Enter Coupon Code' />
                            <button>Apply</button>
                        </div> */}
            {showDiv && (<div className={styles.pricing}>
              <div>
                <div className={styles.pricingTitle1}>
                  <div>
                    <h4>Items Total</h4>
                  </div>
                  <div>
                    <p>₹{totalPrice}</p>
                  </div>
                </div>
                {/* <div className={styles.pricingTitle11}>
                                    <div>
                                        <h4>Buffet Service</h4>
                                    </div>
                                    <div>
                                        <p>₹0000</p>
                                    </div>
                                </div> */}
                {/* <div className={styles.pricingTitle2}>
                                    <div>
                                        <h4>Delivery Charges <span>(Free Upto 10 Km)</span></h4>
                                    </div>
                                    <div>
                                        <p>₹0000</p>
                                    </div>
                                </div> */}
                <hr className={styles.hr1} />
                {/* <div className={styles.pricingTitle3}>
                                    <div>
                                        <h4>Coupon Value</h4>
                                    </div>
                                    <div>
                                        <p>₹0000</p>
                                    </div>
                                </div> */}
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
                  <p>₹{grandTotal}</p>
                </div>
              </div>
              <div className={styles2.dlvryChrg}>
                <p>*Delivery charges as per actual</p>
              </div>
              <div className={styles.orderBtn}>
                <button onClick={() => placeOrderBtn()}>Place Order</button>
              </div>
              <div className={styles.orderBtn}>
                <a href="https://api.whatsapp.com/send?phone=917738096313&text=Hey!%20Need%20help%20booking%20a%20Package%20Menu" target="_blank"><button style={{ backgroundColor: "white" }}>Get Booking Help</button></a>
              </div>
            </div>)}
          </div>
        </div>
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
                                        {item.veg === true ? (
                                <img
                                  className={styles.vegLogo}
                                  src="/diy images/vegLogo.png"
                                />
                              ) : (
                                <img
                                  className={styles.vegLogo}
                                  src="/diy images/Group 962.png"
                                />
                              )}
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

export default NinjaBoxViewPkg;
