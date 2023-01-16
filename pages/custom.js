import { useEffect, useState } from "react";
import styles from "$styles/Customize.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCircleCheck,
  faDeleteLeft,
  faDumpster,
  faFish,
  faListAlt,
  faRemove,
  faSeedling,
  faTimes,
  faTrash,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useAppMenu } from "$lib/menuContext";
import Navbar from "$lib/Navbar";
import Footer from "$lib/Footer";
import { Modal } from "react-bootstrap";
import { NameNumberModal } from "$lib/custom/NameNumberModal";
import AutoSearch from "$lib/custom/AutoSearch";

export default function Custom() {
  const { menu, cuisines, allMenus } = useAppMenu();
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const router = useRouter();
  const [veg, setVeg] = useState(10);
  const [nonVeg, setNonVeg] = useState(10);
  const [cuisine, setCuisine] = useState(0);
  const [knowMore, setKnowMore] = useState([]);
  const [isSmall, setIsSmall] = useState(false);
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  // menu according to  starter,main, dessert
  const [startersData, setStartersData] = useState([]);
  const [startersData2, setStartersData2] = useState([]);
  const [mainData, setMainData] = useState([]);
  const [mainData2, setMainData2] = useState([]);
  const [dessertData, setDessertData] = useState([]);
  const [dessertData2, setDessertData2] = useState([]);
  const [breadRiceData, setBreadRiceData] = useState([]);
  const [breadRiceData2, setBreadRiceData2] = useState([]);

  const [highestPrice, setHighestPrice] = useState({});
  const [totalPrice, setTotalPrice] = useState({});

  const [isStarterChange, setIsStarterChange] = useState(false);
  const [isMainChange, setIsMainChange] = useState(false);
  const [isBreadChange, setIsBreadChange] = useState(false);
  const [isDessertChange, setIsDessertChange] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  // useEffect(() => {
  //   allMenus.sort(function (a, b) {
  //     const nameA = a.name.split(" ")[0].toUpperCase(); // ignore upper and lowercase
  //     const nameB = b.name.split(" ")[0].toUpperCase(); // ignore upper and lowercase
  //     if (nameA < nameB) {
  //       return -1;
  //     }
  //     if (nameA > nameB) {
  //       return 1;
  //     }

  //     // names must be equal
  //     return 0;
  //   });

  //   // removing duplicate
  //   const result =allMenus?.reduce((finalArray, current) => {
  //     let obj = finalArray?.find((item) => item.name === current.name);
  
  //     console.log('duplicate',result)
  //     if (obj) {
  //       return finalArray;
  //     }
  //     return finalArray.concat([current]);
  //   },[])

  //   setStartersData(result.filter((d) => d.mealType === "Starter"));
  //   setStartersData2(result.filter((d) => d.mealType === "Starter"));
  //   setMainData(result.filter((d) => d.mealType === "Main course"));
  //   setMainData2(result.filter((d) => d.mealType === "Main course"));
  //   setDessertData(result.filter((d) => d.mealType === "Dessert"));
  //   setDessertData2(result.filter((d) => d.mealType === "Dessert"));
  //   setBreadRiceData(result.filter((d) => d.mealType === "Bread+Rice"));
  //   setBreadRiceData2(result.filter((d) => d.mealType === "Bread+Rice"));

  //   const newMainData = allMenus.filter((d) => d.mealType === "Main course");
  //   newMainData.sort(function (a, b) {
  //     return parseInt(b.selling_price) - parseInt(a.selling_price);
  //   });
  //   setHighestPrice(newMainData[0]);
  // }, []);
  // console.log("main", mainData, highestPrice);

  // // console.log(startersData, mainData, dessertData);

  // // filtering data according to cuisine
  // const handleCuisine = (index) => {
  //   setCuisine(index);
  //   if (cuisines[index] === "All") {
  //     setStartersData(startersData2);
  //     setMainData(mainData2);
  //     setBreadRiceData(breadRiceData2);
  //     setDessertData(dessertData2);
  //   } else {
  //     const filterStarter = startersData2.filter(
  //       (d) => d.cuisine === cuisines[index]
  //     );
  //     setStartersData(filterStarter);

  //     const filterMain = mainData2.filter((d) => d.cuisine === cuisines[index]);
  //     setMainData(filterMain);

  //     const filterBreadData = breadRiceData2.filter(
  //       (d) => d.cuisine === cuisines[index]
  //     );
  //     setBreadRiceData(filterBreadData);

  //     const filterDessertData = dessertData2.filter(
  //       (d) => d.cuisine === cuisines[index]
  //     );
  //     setDessertData(filterDessertData);
  //   }
  // };

  useEffect(() => {
    setIsSmall(window.innerWidth < 939);
    window.addEventListener("resize", () =>
      setIsSmall(window.innerWidth < 939)
    );

    // if there is previous data
    // if (router.query.data) {
    //   console.log(router.query.data);
    //   const data = JSON.parse(router.query.data);
    //   setVeg(data.veg);
    //   setNonVeg(data.nonVeg);
    //   var tempStarters = [];
    //   var tempMain = [];
    //   var tempDesserts = [];
    //   data.starters.forEach((starter) => {
    //     var obj = menu.starters.find((x) => x.name === starter.name);
    //     tempStarters.push({
    //       ...obj,
    //       quantity: starter.quantity,
    //     });
    //   });
    //   data.mains.forEach((main) => {
    //     var obj = menu.mains.find((x) => x.name === main.name);
    //     tempMain.push({
    //       ...obj,
    //       quantity: main.quantity,
    //     });
    //   });
    //   data.desserts.forEach((dessert) => {
    //     var obj = menu.desserts.find((x) => x.name === dessert.name);
    //     tempDesserts.push({
    //       ...obj,
    //       quantity: dessert.quantity,
    //     });
    //   });
    //   setStarters(tempStarters);
    //   setMains(tempMain);
    //   setDesserts(tempDesserts);
    //   console.log("stater", router.query.data, starters);
    // }
  }, []);

  // useEffect(() => {
  //   if (knowMore[2] === "mobile") {
  //     if (knowMore[1] === "starters") {
  //       setModalTitle(starters[knowMore[0]].name);
  //       setModalContent(starters[knowMore[0]].description);
  //     } else if (knowMore[1] === "mains") {
  //       setModalTitle(mains[knowMore[0]].name);
  //       setModalContent(mains[knowMore[0]].description);
  //     } else if (knowMore[1] === "desserts") {
  //       setModalTitle(desserts[knowMore[0]].name);
  //       setModalContent(desserts[knowMore[0]].description);
  //     }
  //     setShow(true);
  //   }
  // }, [knowMore]);

  // customer selected starter main, dessert

  const [starters, setStarters] = useState([]);
  const [mains, setMains] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [breadRice, setBreadRice] = useState([]);

  const handleVegNonVegGuest = (name, value) => {
    // if(value<0 || !value){
    //   name === "veg" ? setVeg(0) : setNonVeg(0);
    // }else{

    // }
    name === "veg" ? setVeg(value) : setNonVeg(value);
    console.log("guest", veg, nonVeg, value);

    // setStarters([]);
    // setMains([]);
    // setDesserts([]);
    setBreadRice([]);
  };

  // useEffect(() => {
  //   // starter value change after veg and non-veg guest change
  //   if (veg === 0 && nonVeg === 0) return;
  //   let temp = [...starters];
  //   temp.map((data) => {
  //     if ((nonVeg === 0 && veg > 0) || (veg === 0 && nonVeg > 0)) {
  //       if (data.Qtype === "pcs") {
  //         data.quantity = (veg > 0 ? veg : nonVeg) * 2;
  //       } else {
  //         data.quantity = ((veg > 0 ? veg : nonVeg) * 0.1).toFixed(3);
  //       }
  //     } else {
  //       // if both guest is available

  //       if (data.veg) {
  //         if (data.Qtype === "pcs") {
  //           data.quantity = (veg + nonVeg) * 1.5;
  //         } else {
  //           data.quantity = (veg * 0.1 + nonVeg * 0.05).toFixed(3);
  //         }
  //       } else {
  //         if (data.Qtype === "pcs") {
  //           data.quantity = nonVeg * 2;
  //         } else {
  //           data.quantity = (nonVeg * 0.1).toFixed(3);
  //         }
  //       }
  //     }
  //     setStarters(temp);
  //   });

  //   // main value change after veg anf=d non-veg guest change
  //   let tempMain = [...mains];

  //   tempMain.map((data) => {
  //     if ((nonVeg === 0 && veg > 0) || (veg === 0 && nonVeg > 0)) {
  //       // if not rice , bred, noodles
  //       console.log("not rice , bred, noodles1");
  //       if (data.Qtype === "pcs") {
  //         data.quantity = (veg > 0 ? veg : nonVeg) * 1;
  //       } else if (data.name === highestPrice.name) {
  //         data.quantity = ((veg > 0 ? veg : nonVeg) * 0.15).toFixed(3);
  //       } else {
  //         data.quantity = ((veg > 0 ? veg : nonVeg) * 0.1).toFixed(3);
  //       }
  //     } else {
  //       console.log("not rice , bred, noodles2");
  //       if (data.veg) {
  //         if (data.Qtype === "pcs") {
  //           data.quantity = veg * 1;
  //         } else {
  //           data.quantity = (veg * 0.1 + nonVeg * 0.05).toFixed(3);
  //         }
  //       } else {
  //         console.log("not rice , bred, noodles3");
  //         if (data.Qtype === "pcs") {
  //           data.quantity = nonVeg * 1;
  //         } else if (data.name === highestPrice.name) {
  //           data.quantity = (nonVeg * 0.15).toFixed(3);
  //         } else {
  //           data.quantity = (nonVeg * 0.1).toFixed(3);
  //         }
  //       }
  //     }
  //   });

  //   setMains(tempMain);

  //   //  dessert value change after veg anf=d non-veg guest change

  //   let tempDessert = [...desserts];

  //   tempDessert.map((data) => {
  //     if (data.Qtype === "pcs") {
  //       data.quantity = (veg + nonVeg) * 1.5;
  //     } else {
  //       data.quantity = ((veg + nonVeg) * 0.075).toFixed(3);
  //     }
  //   });

  //   setDesserts(tempDessert);
  // }, [veg, nonVeg]);

  // useEffect(() => {
  //   if (veg < 0) {
  //     setVeg(0);
  //   } else if (nonVeg < 0) {
  //     setNonVeg(0);
  //   } else if (typeof veg === NaN) {
  //     setVeg(0);
  //   } else if (typeof nonVeg === NaN) {
  //     setNonVeg(0);
  //   }
  // }, [veg, nonVeg]);

  // useEffect(() => {
  //   if (cuisine === 0) {
  //   }
  // }, [cuisine, veg, nonVeg]);

  function handleClose() {
    setShow(false);
    setModalTitle("");
    setModalContent("");
    setKnowMore([]);
  }

  function handleChange(value, index, type) {
    console.log();
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

  // handle delete

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
  console.log("stater", starters, mains);

  // adding

  const handleStatersAdd = (item_name, id) => {
    setIsStarterChange(!isStarterChange);
    if (veg === 0 && nonVeg === 0) return;
    let temp = [...starters];
    const starter = startersData.find((item) => item.id === item_name);
    // removing selected item
    setStartersData((prev) => prev.filter((d) => d.id !== item_name));

    let quantity;
    if (temp.find((item) => item.id === item_name)) {
      return;
    }

    // if only  veg or non veg guest is available

    if ((nonVeg === 0 && veg > 0) || (veg === 0 && nonVeg > 0)) {
      if (starter.Qtype === "pcs") {
        quantity = (veg > 0 ? veg : nonVeg) * 2;
      } else {
        quantity = ((veg > 0 ? veg : nonVeg) * 0.1).toFixed(3);
      }
    } else {
      // if both guest is available

      if (starter.veg) {
        if (starter.Qtype === "pcs") {
          quantity = (veg + nonVeg) * 1.5;
        } else {
          quantity = (veg * 0.1 + nonVeg * 0.05).toFixed(3);
        }
      } else {
        if (starter.Qtype === "pcs") {
          quantity = nonVeg * 2;
        } else {
          quantity = (nonVeg * 0.1).toFixed(3);
        }
      }
    }
    temp.push({
      id:starter.id,
      city:starter.city,
      cuisine:starter.cuisine,
      menu_label:starter.menu_label,
      name: starter.name,
      quantity: quantity,
      Qtype: starter.Qtype,
      veg: starter.veg,
      selling_price: starter.selling_price,
      // description: starter.description,
    });
    setStarters(temp);

    console.log(item_name, starters);
  };

  // handle add main

  const handleMainAdd = (item_name, id) => {
    setIsMainChange(!isMainChange);
    if (veg === 0 && nonVeg === 0) return;
    let temp = [...mains];
    const main = mainData.find((item) => item.id === item_name);
    let quantity;
    if (temp.find((item) => item.id === item_name)) {
      return;
    }

    if ((nonVeg === 0 && veg > 0) || (veg === 0 && nonVeg > 0)) {
      // if not rice , bred, noodles
      console.log("not rice , bred, noodles1");
      if (main.Qtype === "pcs") {
        quantity = (veg > 0 ? veg : nonVeg) * 1;
      } else if (main.name === highestPrice.name) {
        quantity = ((veg > 0 ? veg : nonVeg) * 0.15).toFixed(3);
      } else {
        quantity = ((veg > 0 ? veg : nonVeg) * 0.1).toFixed(3);
      }
    } else {
      console.log("not rice , bred, noodles2");
      if (main.veg) {
        if (main.Qtype === "pcs") {
          quantity = veg * 1;
        } else {
          quantity = (veg * 0.1 + nonVeg * 0.05).toFixed(3);
        }
      } else {
        console.log("not rice , bred, noodles3");
        if (main.Qtype === "pcs") {
          quantity = nonVeg * 1;
        } else if (main.name === highestPrice.name) {
          quantity = (nonVeg * 0.15).toFixed(3);
        } else {
          quantity = (nonVeg * 0.1).toFixed(3);
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
    setMainData((prev) => prev.filter((d) => d.id !== item_name));
  };
  console.log("main", mains);

  const handleBreadRiceAdd = (item_name, id) => {
    setIsBreadChange(!isBreadChange);
    console.log(item_name);
    if (veg === 0 && nonVeg === 0) return;
    let temp = [...breadRice];
    const filterBreadRice = breadRiceData.find((item) => item.id === item_name);
    let quantity;
    if (temp.find((item) => item.id === item_name)) {
      return;
    }

    // Rice + Noodles + Breads
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
    } else if (
      filterBreadRice?.menu_label === "Breads" &&
      filterBreadRice?.name !== "Pooris"
    ) {
      let bread = 1;

      temp.map((item) => {
        item.menu_label === "Breads" ? (bread += 1) : bread;
      });
      console.log("naan");
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
    } else if (filterBreadRice?.menu_label === "Noodle") {
      console.log("naan");
      veg > 0 && nonVeg === 0
        ? (quantity = veg)
        : veg === 0 && nonVeg > 0
        ? (quantity = nonVeg)
        : (quantity = veg + nonVeg);
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
        if (count >= 2) {
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
      } else if (veg > 0 && nonVeg > 0) {
        let guests = veg + nonVeg;
        if (count >= 2) {
          quantity = 0.15 * guests;
          temp.forEach((item) => {
            if (item.menu_label === "Rice") {
              item.quantity = 0.15 * guests;
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
      veg: filterBreadRice.veg,
      selling_price: filterBreadRice.selling_price,
      // description: main.description,
    });
    setBreadRice(temp);
    setBreadRiceData((prev) => prev.filter((d) => d.id !== item_name));
  };

  // function handleAdd(item_name, type, isChanged, index) {
  //   console.log(item_name, type);
  //   if (veg === 0 && nonVeg === 0) return;
  //   // checking is the
  //   let temp = [...mains];
  //   const main = menu.mains.find((item) => item.name === item_name);
  //   console.log(main);
  //   let quantity;
  //   if (temp.find((item) => item.name === item_name)) {
  //     return;
  //   }
  //   if (main.isPoori) {
  //     quantity = (veg + nonVeg) * 3;

  //     // checking for bread
  //   } else if (!main.isPoori && main.isBread) {
  //     console.log("naan");
  //     quantity = (veg + nonVeg) * 2;
  //   } else if (main.isRice) {
  //     let count = 0;
  //     console.log(count);
  //     temp.forEach((item) => {
  //       if (item.isRice) {
  //         count++;
  //       }
  //     });

  //     //
  //     if ((veg === 0 && nonVeg > 0) || (veg > 0 && nonVeg === 0)) {
  //       let guests = veg > 0 ? veg : nonVeg;
  //       if (mains.length > 0) {
  //         if (count >= 1) {
  //           quantity = 0.15 * guests;
  //           temp.forEach((item) => {
  //             if (item.isRice) {
  //               item.quantity = 0.15 * guests;
  //             }
  //           });
  //         } else {
  //           quantity = 0.2 * guests;
  //         }
  //       } else {
  //         if (count >= 1) {
  //           quantity = 0.15;
  //           temp.forEach((item) => {
  //             if (item.isRice) {
  //               item.quantity = 0.15 * guests;
  //             }
  //           });
  //         } else {
  //           quantity = 0.3 * guests;
  //         }
  //       }
  //     } else {
  //       if (main.veg) {
  //         if (mains.length > 0) {
  //           if (count >= 1) {
  //             quantity = 0.15 * (veg + nonVeg);
  //             temp.forEach((item) => {
  //               if (item.isRice) {
  //                 item.quantity = 0.15 * (veg + nonVeg);
  //               }
  //             });
  //           } else {
  //             quantity = 0.2 * (veg + nonVeg);
  //           }
  //         } else {
  //           if (count >= 1) {
  //             quantity = 0.15 * (veg + nonVeg);
  //             temp.forEach((item) => {
  //               if (item.isRice) {
  //                 item.quantity = 0.15 * (veg + nonVeg);
  //               }
  //             });
  //           } else {
  //             quantity = 0.3 * (veg + nonVeg);
  //           }
  //         }
  //       } else {
  //         if (mains.length > 0) {
  //           if (count >= 1) {
  //             quantity = 0.15 * nonVeg;
  //             temp.forEach((item) => {
  //               if (item.isRice) {
  //                 item.quantity = 0.15 * nonVeg;
  //               }
  //             });
  //           } else {
  //             quantity = 0.2 * nonVeg;
  //           }
  //         } else {
  //           if (count >= 1) {
  //             quantity = 0.15 * nonVeg;
  //             temp.forEach((item) => {
  //               if (item.isRice) {
  //                 item.quantity = 0.15 * nonVeg;
  //               }
  //             });
  //           } else {
  //             quantity = 0.3 * nonVeg;
  //           }
  //         }
  //       }
  //     }
  //   } else if ((nonVeg === 0 && veg > 0) || (veg === 0 && nonVeg > 0)) {
  //     // if not rice , bred, noodles
  //     console.log("not rice , bred, noodles");
  //     if (main.Qtype === "pcs") {
  //       quantity = (veg > 0 ? veg : nonVeg) * 1;
  //     } else {
  //       quantity = ((veg > 0 ? veg : nonVeg) * 0.1).toFixed(3);
  //     }
  //   } else {
  //     if (main.veg) {
  //       if (main.Qtype === "pcs") {
  //         quantity = veg * 1;
  //       } else {
  //         quantity = (veg * 0.1 + nonVeg * 0.05).toFixed(3);
  //       }
  //     } else {
  //       if (main.Qtype === "pcs") {
  //         quantity = nonVeg * 1;
  //       } else {
  //         quantity = (nonVeg * 0.1).toFixed(3);
  //       }
  //     }
  //   }
  //   temp.push({
  //     name: main.name,
  //     quantity: quantity,
  //     Qtype: main.Qtype,
  //     veg: main.veg,
  //     description: main.description,
  //   });
  //   setMains(temp);
  // }
  // handle desert add

  const handleDesertsAdd = (item_name, id) => {
    setIsDessertChange(!isDessertChange);
    let temp = [...desserts];
    if (veg === 0 && nonVeg === 0) return;
    if (temp.find((item) => item.id === item_name)) {
      return;
    }

    const dessert = dessertData.find((item) => item.id === item_name);
    let quantity;
    if (temp.find((item) => item.name === item_name)) {
      return;
    }
    if (dessert.Qtype === "pcs") {
      quantity = (veg + nonVeg) * 1.5;
    } else {
      quantity = ((veg + nonVeg) * 0.075).toFixed(3);
    }
    temp.push({
      name: dessert.name,
      quantity: quantity,
      Qtype: dessert.Qtype,
      veg: dessert.veg,
      description: dessert.description,
    });
    setDesserts(temp);
    setDessertData((prev) => prev.filter((d) => d.id !== item_name));
  };
  console.log("desert", desserts);
  // cost calculation
  // useEffect(() => {
  //   let starterPrice = 0;
  //   let mainPrice = 0;
  //   let dessertPrice = 0;
  //   let bredRicePrice = 0;

  //   starters.map((d) => {
  //     starterPrice += parseInt(d.quantity) * parseInt(d.selling_price);
  //   });

  //   mains.map((d) => {
  //     mainPrice += parseInt(d.quantity) * parseInt(d.selling_price);
  //   });
  //   desserts.map((d) => {
  //     dessertPrice += parseInt(d.quantity) * parseInt(d.selling_price);
  //   });
  //   breadRice.map((d) => {
  //     bredRicePrice += parseInt(d.quantity) * parseInt(d.selling_price);
  //   });

  //   setTotalPrice(starterPrice + mainPrice + dessertPrice + bredRicePrice);
  // }, [starters, mains, desserts, breadRice, veg, nonVeg, isDelete]);
  // console.log("total price", totalPrice);

  const mobile = (
    <div className={styles.package}>
      <div className={styles.package_header}>
        <div className={styles.package_header_title}>Package Name</div>
        <div className={styles.right}></div>
        <div className={styles.left}>
          <div className={styles.wrapper}></div>
          <div className={styles.wrapper1}>
            {starters.length} Starters + {mains.length} Mains +{" "}
            {desserts.length} Desserts
          </div>
          {/* No. of Guests */}
          <div className={styles.wrapper}>
            <div className={styles.guests}>
              No. of Guests:{" "}
              <span style={{ color: "#455C24" }}>
                Veg&nbsp;
                <FontAwesomeIcon icon={faSeedling} />
              </span>
            </div>
            <div className={styles.price}>
              <input
                type="number"
                onBlur={(e) =>
                  handleVegNonVegGuest("veg", parseInt(e.target.value))
                }
                min="0"
                defaultValue={veg}
              />
              {/* <button className={styles.math} onClick={() => setVeg(veg - 1)}>-</button>{veg} */}
              {/* <button className={styles.math} onClick={() => setVeg(veg + 1)}>+</button> */}
            </div>
          </div>

          {/* No. of Guests: Non-Veg */}
          <div className={styles.wrapper}>
            <div className={styles.guests}>
              No. of Guests:{" "}
              <span style={{ color: "#841F1F" }}>
                Non-Veg&nbsp;
                <FontAwesomeIcon icon={faFish} />
              </span>
            </div>
            <div className={styles.price}>
              <input
                type="number"
                onBlur={(e) =>
                  handleVegNonVegGuest("nonVeg", parseInt(e.target.value))
                }
                min="0"
                defaultValue={nonVeg}
              />
              {/* <button className={styles.math} onClick={() => setNonVeg(nonVeg - 1)}>-</button> */}
              {/* {nonVeg} */}
              {/* <button className={styles.math} onClick={() => setNonVeg(nonVeg + 1)}>+</button> */}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cuisine}>
        <h1>Select Cuisine</h1>
        <div className={styles.cuisine_list}>
          {cuisines.map((item, index) => {
            return (
              <div
                style={{ display: "inline-flex", flexDirection: "column" }}
                key={index}
              >
                <div
                  key={index}
                  onClick={() => handleCuisine(index)}
                  className={
                    styles.cuisine_item +
                    " " +
                    `${cuisine === index ? styles.selected : null}`
                  }
                >
                  {index === 0 && (
                    <img
                      src="../flags/all.png"
                      alt=""
                      height="100%"
                      width="100%"
                    />
                  )}
                  {index === 1 && (
                    <img
                      src="../flags/india.png"
                      alt=""
                      height="100%"
                      width="100%"
                    />
                  )}
                  {index === 2 && (
                    <img
                      src="../flags/chienese.jpg"
                      alt=""
                      height="100%"
                      width="100%"
                    />
                  )}
                  {index === 3 && (
                    <img
                      src="../flags/french.png"
                      alt=""
                      height="100%"
                      width="100%"
                    />
                  )}
                  {index === 4 && (
                    <img
                      src="../flags/japan.png"
                      alt=""
                      height="100%"
                      width="100%"
                    />
                  )}
                  <span
                    className={`${
                      cuisine === index ? styles.tickMark : styles.tickMarkTwo
                    }`}
                  >
                    <FontAwesomeIcon className={styles.tick} icon={faCheck} />
                  </span>
                </div>
                <p style={{ textAlign: "center" }}>{item}</p>
              </div>
            );
          })}
        </div>
        <hr />
      </div>

      <div className={styles.content}>
        {/* starter */}
        <div className={styles.subsection}>
          <h1>Starters</h1>
          <div className={styles.wrapper}>
            {starters.map((item, index) => {
              return (
                <div className={styles.item} key={index}>
                  <div className={styles.img}></div>
                  <div className={styles.title}>
                    <h2>{item.name}</h2>
                    <p>
                      {item.Qtype === "pcs" ? (
                        <input
                          className={styles.quantity}
                          type="number"
                          onChange={(e) =>
                            handleChange(e.target.value, index, "starters")
                          }
                          value={item.quantity}
                        />
                      ) : (
                        <input
                          className={styles.quantity}
                          type="number"
                          onChange={(e) =>
                            handleChange(e.target.value, index, "starters")
                          }
                          step="0.5"
                          value={item.quantity}
                        />
                      )}{" "}
                      {item.Qtype}
                    </p>
                  </div>
                  <div className={styles.description}>
                    <button onClick={() => handleDelete(index, "starters")}>
                      <FontAwesomeIcon
                        style={{ color: "#CB4C39" }}
                        icon={faTrashAlt}
                      ></FontAwesomeIcon>
                      Delete
                    </button>
                    <button
                      onClick={() => setKnowMore([index, "starters", "mobile"])}
                    >
                      <FontAwesomeIcon
                        style={{ color: "#CB4C39" }}
                        icon={faListAlt}
                      ></FontAwesomeIcon>
                      <span>Know More</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.add}>
            <span>Add Starter:</span>

            {/* STARTER SeLECT  */}
            {!isStarterChange && (
              <AutoSearch
                value={startersData}
                handleAdd={handleStatersAdd}
                label="Choose Starter"
              />
            )}
            {isStarterChange && (
              <AutoSearch
                value={startersData}
                handleAdd={handleStatersAdd}
                label="Choose Starter"
              />
            )}

            {/* {!isStarterChange && (
              <select
                onChange={(e) => handleStatersAdd(e.target.value, "starters")}
              >
                <option value="">Choose Starter</option>
                {startersData.map((item, index) => {
                  if (
                    cuisines[cuisine] === item.cuisine ||
                    cuisines[cuisine] === "All"
                  ) {
                    if (nonVeg > 0) {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    } else if (nonVeg === 0 && item.veg) {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    }
                  } else {
                    return null;
                  }
                })}
              </select>
            )} */}
            {/* change */}

            {/* {isStarterChange && (
              <select
                onChange={(e) => handleStatersAdd(e.target.value, "starters")}
              >
                <option value="">Choose Starter</option>
                {startersData.map((item, index) => {
                  if (
                    cuisines[cuisine] === item.cuisine ||
                    cuisines[cuisine] === "All"
                  ) {
                    if (nonVeg > 0) {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    } else if (nonVeg === 0 && item.veg) {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    }
                  } else {
                    return null;
                  }
                })}
              </select>
            )} */}
          </div>
        </div>

        {/* mains */}
        <div className={styles.subsection}>
          <h1>Mains</h1>
          <div className={styles.wrapper}>
            {mains.map((item, index) => {
              return (
                <div className={styles.item} key={index}>
                  <div className={styles.img}></div>
                  <div className={styles.title}>
                    <h2>{item.name}</h2>
                    <p>
                      {item.Qtype === "pcs" ? (
                        <input
                          className={styles.quantity}
                          type="number"
                          onChange={(e) =>
                            handleChange(e.target.value, index, "mains")
                          }
                          value={item.quantity}
                        />
                      ) : (
                        <input
                          className={styles.quantity}
                          type="number"
                          onChange={(e) =>
                            handleChange(e.target.value, index, "mains")
                          }
                          step="0.5"
                          value={item.quantity}
                        />
                      )}{" "}
                      {item.Qtype}
                    </p>
                  </div>
                  <div className={styles.description}>
                    <button onClick={() => handleDelete(index, "mains")}>
                      <FontAwesomeIcon
                        style={{ color: "#CB4C39" }}
                        icon={faTrashAlt}
                      ></FontAwesomeIcon>
                      Delete
                    </button>
                    <button
                      onClick={() => setKnowMore([index, "mains", "mobile"])}
                    >
                      <FontAwesomeIcon
                        style={{ color: "#CB4C39" }}
                        icon={faListAlt}
                      ></FontAwesomeIcon>
                      <span>Know More</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.add}>
            <span>Add Main:</span>
{/* select main */}


{!isMainChange && (
              <AutoSearch
                value={mainData}
                handleAdd={handleMainAdd}
                label="Choose Main"
              />
            )}

            {isMainChange && (
              <AutoSearch
                value={mainData}
                handleAdd={handleMainAdd}
                label="Choose Main"
              />
            )}


            {/* {!isMainChange && (
              <select onChange={(e) => handleMainAdd(e.target.value, "mains")}>
                <option value="">Choose Main</option>
                {mainData.map((item, index) => {
                  if (
                    cuisines[cuisine] === item.cuisine ||
                    cuisines[cuisine] === "All"
                  ) {
                    if (nonVeg > 0) {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    } else if (nonVeg === 0 && item.veg) {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    }
                  } else {
                    return null;
                  }
                })}
              </select>
            )} */}

            {/* {isMainChange && (
              <select onChange={(e) => handleMainAdd(e.target.value, "mains")}>
                <option value="">Choose Main</option>
                {mainData.map((item, index) => {
                  if (
                    cuisines[cuisine] === item.cuisine ||
                    cuisines[cuisine] === "All"
                  ) {
                    if (nonVeg > 0) {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    } else if (nonVeg === 0 && item.veg) {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    }
                  } else {
                    return null;
                  }
                })}
              </select>
            )} */}
          </div>
        </div>
        {/* bread and rice */}

        <div className={styles.subsection}>
          <h1>Bread and Rice</h1>
          <div className={styles.wrapper}>
            {breadRice.map((item, index) => {
              return (
                <div className={styles.item} key={index}>
                  <div className={styles.img}></div>
                  <div className={styles.title}>
                    <h2>{item.name}</h2>
                    <p>
                      {item.Qtype === "pcs" ? (
                        <input
                          className={styles.quantity}
                          type="number"
                          onChange={(e) =>
                            handleChange(e.target.value, index, "Bread+Rice")
                          }
                          value={item.quantity}
                        />
                      ) : (
                        <input
                          className={styles.quantity}
                          type="number"
                          onChange={(e) =>
                            handleChange(e.target.value, index, "Bread+Rice")
                          }
                          step="0.5"
                          value={item.quantity}
                        />
                      )}{" "}
                      {item.Qtype}
                    </p>
                  </div>
                  <div className={styles.description}>
                    <button onClick={() => handleDelete(index, "Bread+Rice")}>
                      <FontAwesomeIcon
                        style={{ color: "#CB4C39" }}
                        icon={faTrashAlt}
                      ></FontAwesomeIcon>
                      Delete
                    </button>
                    <button
                      onClick={() =>
                        setKnowMore([index, "Bread+Rice", "mobile"])
                      }
                    >
                      <FontAwesomeIcon
                        style={{ color: "#CB4C39" }}
                        icon={faListAlt}
                      ></FontAwesomeIcon>
                      <span>Know More</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.add}>
            <span>Add Bread ,Rice and Noodle:</span>
            {/* changing bread and rice option */}
            {!isBreadChange && (
              <AutoSearch
                value={breadRiceData}
                handleAdd={handleBreadRiceAdd}
                label="Choose Bread, Rice and Noodles"
              />
            )}
            {isBreadChange && (
              <AutoSearch
                value={breadRiceData}
                handleAdd={handleBreadRiceAdd}
                label="Choose Bread, Rice and Noodles"
              />
            )}

            {/* {!isBreadChange && (
              <select
                onChange={(e) =>
                  handleBreadRiceAdd(e.target.value, "Bread+Rice")
                }
              >
                <option value="">Choose Bread, Rice and Noodle</option>
                {breadRiceData.map((item, index) => {
                  if (
                    cuisines[cuisine] === item.cuisine ||
                    cuisines[cuisine] === "All"
                  ) {
                    if (nonVeg > 0) {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    } else if (nonVeg === 0 && item.veg) {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    }
                  } else {
                    return null;
                  }
                })}
              </select>
            )} */}

            {/* {isBreadChange && (
              <select
                onChange={(e) =>
                  handleBreadRiceAdd(e.target.value, "Bread+Rice")
                }
              >
                <option value="">Choose Bread, Rice and Noodle</option>
                {breadRiceData.map((item, index) => {
                  if (
                    cuisines[cuisine] === item.cuisine ||
                    cuisines[cuisine] === "All"
                  ) {
                    if (nonVeg > 0) {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    } else if (nonVeg === 0 && item.veg) {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    }
                  } else {
                    return null;
                  }
                })}
              </select>
            )} */}
          </div>
        </div>

        {/* dessert */}
        <div className={styles.subsection}>
          <h1>Desserts</h1>
          <div className={styles.wrapper}>
            {desserts.map((item, index) => {
              return (
                <div className={styles.item} key={index}>
                  <div className={styles.img}></div>
                  <div className={styles.title}>
                    <h2>{item.name}</h2>
                    <p>
                      {item.Qtype === "pcs" ? (
                        <input
                          className={styles.quantity}
                          type="number"
                          onChange={(e) =>
                            handleChange(e.target.value, index, "desserts")
                          }
                          value={item.quantity}
                        />
                      ) : (
                        <input
                          className={styles.quantity}
                          type="number"
                          onChange={(e) =>
                            handleChange(e.target.value, index, "desserts")
                          }
                          step="0.5"
                          value={item.quantity}
                        />
                      )}{" "}
                      {item.Qtype}
                    </p>
                  </div>
                  <div className={styles.description}>
                    <button onClick={() => handleDelete(index, "desserts")}>
                      <FontAwesomeIcon
                        style={{ color: "#CB4C39" }}
                        icon={faTrashAlt}
                      ></FontAwesomeIcon>
                      Delete
                    </button>
                    <button
                      onClick={() => setKnowMore([index, "desserts", "mobile"])}
                    >
                      <FontAwesomeIcon
                        style={{ color: "#CB4C39" }}
                        icon={faListAlt}
                      ></FontAwesomeIcon>
                      <span>Know More</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.add}>
            <span>Add Dessert:</span>
{/* select dessert */}

{isDessertChange && (
              <AutoSearch
                value={dessertData}
                handleAdd={handleDesertsAdd}
                label="Choose Dessert"
              />
            )}
            {!isDessertChange && (
              <AutoSearch
                value={dessertData}
                handleAdd={handleDesertsAdd}
                label="Choose Dessert"
              />
            )}
            {/* {!isDessertChange && (
              <select onChange={(e) => handleDesertsAdd(e.target.value)}>
                <option value="">Choose Dessert</option>
                {dessertData.map((item, index) => {
                  if (
                    cuisines[cuisine] === item.cuisine ||
                    cuisines[cuisine] === "All"
                  ) {
                    if (nonVeg > 0) {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    } else if (nonVeg === 0 && item.veg) {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    }
                  } else {
                    return null;
                  }
                })}
              </select>
            )} */}

            {/* {isDessertChange && (
              <select onChange={(e) => handleDesertsAdd(e.target.value)}>
                <option value="">Choose Dessert</option>
                {dessertData.map((item, index) => {
                  if (
                    cuisines[cuisine] === item.cuisine ||
                    cuisines[cuisine] === "All"
                  ) {
                    if (nonVeg > 0) {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    } else if (nonVeg === 0 && item.veg) {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    }
                  } else {
                    return null;
                  }
                })}
              </select>
            )} */}
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.wrapper}>
          <button onClick={handleShowModal} className={styles.red + " bg-red"}>
            Check Price
          </button>

          <NameNumberModal handleClose={handleCloseModal} show={showModal} />
        </div>
      </div>
    </div>
  );

  // desktop

  const desktop = (
    <div className={styles.package}>
      <div className={styles.package_header}>
        <div className={styles.left}>
          <div className={styles.wrapper}>
            <div className={styles.package_header_title}>Package Name</div>
          </div>
          <div className={styles.wrapper}>
            {starters?.length} Starters + {mains?.length} Mains +{" "}
            {desserts?.length} Desserts
          </div>
          <div className={styles.wrapper}>
            <div className={styles.guests}>
              No. of Guests:{" "}
              <span style={{ color: "#455C24" }}>
                Veg&nbsp;
                <FontAwesomeIcon icon={faSeedling} />
              </span>
            </div>
            <div className={styles.inputField}>
              {/* <button className={styles.math} onClick={() => setVeg(veg - 1)}>-</button> */}
              <input
                type="number"
                onBlur={(e) =>
                  handleVegNonVegGuest("veg", parseInt(e.target.value))
                }
                min="0"
                defaultValue={veg}
              />
              {/* {veg} */}
              {/* <button className={styles.math} onClick={() => setVeg(veg + 1)}>+</button> */}
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.guests}>
              No. of Guests:{" "}
              <span style={{ color: "#841F1F" }}>
                Non-Veg&nbsp;
                <FontAwesomeIcon icon={faFish} />
              </span>
            </div>
            <div className={styles.inputField}>
              {/* <button className={styles.math} onClick={() => setNonVeg(nonVeg - 1)}>-</button> */}

              <input
                type="number"
                onBlur={(e) =>
                  handleVegNonVegGuest("nonVeg", parseInt(e.target.value))
                }
                min="0"
                defaultValue={nonVeg}
              />

              {/* {nonVeg} */}
              {/* <button className={styles.math} onClick={() => setNonVeg(nonVeg + 1)}>+</button> */}
            </div>
          </div>
        </div>
        <div className={styles.right}></div>
      </div>
      <div className={styles.cuisine}>
        <h1>Select Cuisine</h1>
        <div className={styles.cuisine_list}>
          {cuisines.map((item, index) => {
            return (
              <div
                style={{ display: "inline-flex", flexDirection: "column" }}
                key={index}
              >
                <div
                  key={index}
                  // onClick={() => setCuisine(index)}
                  onClick={() => handleCuisine(index)}
                  className={
                    styles.cuisine_item +
                    " " +
                    `${cuisine === index ? styles.selected : null}`
                  }
                >
                  {index === 0 && (
                    <img
                      src="../flags/all.png"
                      alt=""
                      height="100%"
                      width="100%"
                    />
                  )}
                  {index === 1 && (
                    <img
                      src="../flags/india.png"
                      alt=""
                      height="100%"
                      width="100%"
                    />
                  )}
                  {index === 2 && (
                    <img
                      src="../flags/chienese.jpg"
                      alt=""
                      height="100%"
                      width="100%"
                    />
                  )}
                  {index === 3 && (
                    <img
                      src="../flags/french.png"
                      alt=""
                      height="100%"
                      width="100%"
                    />
                  )}
                  {index === 4 && (
                    <img
                      src="../flags/japan.png"
                      alt=""
                      height="100%"
                      width="100%"
                    />
                  )}
                  <span
                    className={`${
                      cuisine === index ? styles.tickMark : styles.tickMarkTwo
                    }`}
                  >
                    <FontAwesomeIcon className={styles.tick} icon={faCheck} />
                  </span>
                </div>

                <p style={{ textAlign: "center" }}>{item}</p>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
      <div className={styles.content}>
        <div className={styles.subsection}>
          <h1>Starters</h1>
          <div className={styles.wrapper}>
            {starters?.map((item, index) => {
              return (
                <div className={styles.item} key={index}>
                  <div
                    onClick={() => handleDelete(index, "starters")}
                    className={styles.delete}
                  >
                    <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                  </div>
                  <div className={styles.img}>
                    <img src="https://via.placeholder.com/120x120/100" alt="" />
                  </div>
                  <div className={styles.title}>
                    <h2>{item.name}</h2>
                    <p>
                      {item.Qtype === "pcs" ? (
                        <input
                          className={styles.quantity}
                          type="number"
                          onChange={(e) =>
                            handleChange(e.target.value, index, "starters")
                          }
                          value={item.quantity}
                        />
                      ) : (
                        <input
                          className={styles.quantity}
                          type="number"
                          onChange={(e) =>
                            handleChange(e.target.value, index, "starters")
                          }
                          value={item.quantity}
                          step="0.5"
                        />
                      )}{" "}
                      {item.Qtype}
                    </p>
                  </div>
                  <div className={styles.description}>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.add}>
            <span>Add starter:</span>
            {/* STARTER SeLECT  */}

            {!isStarterChange && (
              <AutoSearch
                value={startersData}
                handleAdd={handleStatersAdd}
                label="Choose Starter"
              />
            )}
            {isStarterChange && (
              <AutoSearch
                value={startersData}
                handleAdd={handleStatersAdd}
                label="Choose Starter"
              />
            )}

            {/* {!isStarterChange && (
              <select onChange={(e) => handleStatersAdd(e.target.value)}>
                <option value="">Choose Starter</option>
                {startersData?.map((item, index) => {
                  if (
                    cuisines[cuisine] === item.cuisine ||
                    cuisines[cuisine] === "All"
                  ) {
                    if (nonVeg > 0) {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    } else if (nonVeg === 0 && item.veg) {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    }
                  } else {
                    return null;
                  }
                })}
              </select>
            )} */}

            {/* starter  change*/}

            {/* {isStarterChange && (
              <select onChange={(e) => handleStatersAdd(e.target.value)}>
                <option value="">Choose Starter</option>
                {startersData?.map((item, index) => {
                  if (
                    cuisines[cuisine] === item.cuisine ||
                    cuisines[cuisine] === "All"
                  ) {
                    if (nonVeg > 0) {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    } else if (nonVeg === 0 && item.veg) {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    }
                  } else {
                    return null;
                  }
                })}
              </select>
            )} */}
          </div>
        </div>
        {/* mains */}
        <div className={styles.subsection}>
          <h1>Mains</h1>
          <div className={styles.wrapper}>
            {mains.map((item, index) => {
              return (
                <div className={styles.item} key={index}>
                  <div
                    onClick={() => handleDelete(index, "mains")}
                    className={styles.delete}
                  >
                    <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                  </div>
                  <div className={styles.img}>
                    <img src="https://via.placeholder.com/120x120/100" alt="" />
                  </div>
                  <div className={styles.title}>
                    <h2>{item.name}</h2>
                    <p>
                      {item.Qtype === "pcs" ? (
                        <input
                          className={styles.quantity}
                          type="number"
                          onChange={(e) =>
                            handleChange(e.target.value, index, "mains")
                          }
                          value={item.quantity}
                        />
                      ) : (
                        <input
                          className={styles.quantity}
                          type="number"
                          onChange={(e) =>
                            handleChange(e.target.value, index, "mains")
                          }
                          value={item.quantity}
                          step="0.5"
                        />
                      )}{" "}
                      {item.Qtype}
                    </p>
                  </div>
                  <div className={styles.description}>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.add}>
            <span>Add Main:</span>
            {/* changing main dropdown */}

            {!isMainChange && (
              <AutoSearch
                value={mainData}
                handleAdd={handleMainAdd}
                label="Choose Main"
              />
            )}

            {isMainChange && (
              <AutoSearch
                value={mainData}
                handleAdd={handleMainAdd}
                label="Choose Main"
              />
            )}

            {/* {!isMainChange&& <select onChange={(e) => handleMainAdd(e.target.value)}>
              <option value="">Choose Main</option>
              {mainData.map((item, index) => {
                if (
                  cuisines[cuisine] === item.cuisine ||
                  cuisines[cuisine] === "All"
                ) {
                  if (nonVeg > 0) {
                    return (
                      <option key={index} value={item.id}>
                        {item.name}
                        {item.selling_price}
                      </option>
                    );
                  } else if (nonVeg === 0 && item.veg) {
                    return (
                      <option key={index} value={item.id}>
                        {item.name}
                        {item.selling_price}
                      </option>
                    );
                  }
                } else {
                  return null;
                }
              })}
            </select>} */}
            {/*  */}

            {/* {isMainChange&& <select onChange={(e) => handleMainAdd(e.target.value)}>
              <option value="">Choose Main</option>
              {mainData.map((item, index) => {
                if (
                  cuisines[cuisine] === item.cuisine ||
                  cuisines[cuisine] === "All"
                ) {
                  if (nonVeg > 0) {
                    return (
                      <option key={index} value={item.id}>
                        {item.name}
                        {item.selling_price}
                      </option>
                    );
                  } else if (nonVeg === 0 && item.veg) {
                    return (
                      <option key={index} value={item.id}>
                        {item.name}
                        {item.selling_price}
                      </option>
                    );
                  }
                } else {
                  return null;
                }
              })}
            </select>} */}
          </div>
        </div>
        {/* bread and rice and noodles */}

        <div className={styles.subsection}>
          <h1>Bread, Rice and Noodles</h1>
          <div className={styles.wrapper}>
            {breadRice.map((item, index) => {
              return (
                <div className={styles.item} key={index}>
                  <div
                    onClick={() => handleDelete(index, "Bread+Rice")}
                    className={styles.delete}
                  >
                    <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                  </div>
                  <div className={styles.img}>
                    <img src="https://via.placeholder.com/120x120/100" alt="" />
                  </div>
                  <div className={styles.title}>
                    <h2>{item.name}</h2>
                    <p>
                      {item.Qtype === "pcs" ? (
                        <input
                          className={styles.quantity}
                          type="number"
                          onChange={(e) =>
                            handleChange(e.target.value, index, "Bread+Rice")
                          }
                          value={item.quantity}
                        />
                      ) : (
                        <input
                          className={styles.quantity}
                          type="number"
                          onChange={(e) =>
                            handleChange(e.target.value, index, "Bread+Rice")
                          }
                          value={item.quantity}
                          step="0.5"
                        />
                      )}{" "}
                      {item.Qtype}
                    </p>
                  </div>
                  <div className={styles.description}>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.add}>
            <span>Add Bread, Rice and Noodles:</span>

            {/* changing bread dropdown */}

            {!isBreadChange && (
              <AutoSearch
                value={breadRiceData}
                handleAdd={handleBreadRiceAdd}
                label="Choose Bread, Rice and Noodles"
              />
            )}
            {isBreadChange && (
              <AutoSearch
                value={breadRiceData}
                handleAdd={handleBreadRiceAdd}
                label="Choose Bread, Rice and Noodles"
              />
            )}

            {/* {!isBreadChange && (
              <select onChange={(e) => handleBreadRiceAdd(e.target.value)}>
                <option value="">Choose Bread, Rice and Noodles</option>
                {breadRiceData.map((item, index) => {
                  if (
                    cuisines[cuisine] === item.cuisine ||
                    cuisines[cuisine] === "All"
                  ) {
                    if (nonVeg > 0) {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    } else if (nonVeg === 0 && item.veg) {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    }
                  } else {
                    return null;
                  }
                })}
              </select>
            )} */}

            {/* Bread change */}
            {/* {isBreadChange && (
              <select onChange={(e) => handleBreadRiceAdd(e.target.value)}>
                <option value="">Choose Bread, Rice and Noodles</option>
                {breadRiceData.map((item, index) => {
                  if (
                    cuisines[cuisine] === item.cuisine ||
                    cuisines[cuisine] === "All"
                  ) {
                    if (nonVeg > 0) {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    } else if (nonVeg === 0 && item.veg) {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    }
                  } else {
                    return null;
                  }
                })}
              </select>
            )} */}
          </div>
        </div>
        {/* dessert */}
        <div className={styles.subsection}>
          <h1>Desserts</h1>
          <div className={styles.wrapper}>
            {desserts.map((item, index) => {
              return (
                <div className={styles.item} key={index}>
                  <div
                    onClick={() => handleDelete(index, "desserts")}
                    className={styles.delete}
                  >
                    <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                  </div>
                  <div className={styles.img}>
                    <img src="https://via.placeholder.com/120x120/100" alt="" />
                  </div>
                  <div className={styles.title}>
                    <h2>{item.name}</h2>
                    <p>
                      {item.Qtype === "pcs" ? (
                        <input
                          className={styles.quantity}
                          type="number"
                          onChange={(e) =>
                            handleChange(e.target.value, index, "desserts")
                          }
                          value={item.quantity}
                        />
                      ) : (
                        <input
                          className={styles.quantity}
                          type="number"
                          onChange={(e) =>
                            handleChange(e.target.value, index, "desserts")
                          }
                          value={item.quantity}
                          step="0.5"
                        />
                      )}{" "}
                      {item.Qtype}
                    </p>
                  </div>
                  <div className={styles.description}>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.add}>
            {/* desert drop menu */}
            <span>Add Dessert:</span>

            {/* change dessert */}

            {/* {!isDessertChange && (
              <select onChange={(e) => handleDesertsAdd(e.target.value)}>
                <option value="">Choose Dessert</option>
                {dessertData.map((item, index) => {
                  if (
                    cuisines[cuisine] === item.cuisine ||
                    cuisines[cuisine] === "All"
                  ) {
                    if (nonVeg > 0) {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    } else if (nonVeg === 0 && item.veg) {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    }
                  } else {
                    return null;
                  }
                })}
              </select>
            )} */}

            {/*  */}
            {/* {isDessertChange && (
              <select onChange={(e) => handleDesertsAdd(e.target.value)}>
                <option value="">Choose Dessert</option>
                {dessertData.map((item, index) => {
                  if (
                    cuisines[cuisine] === item.cuisine ||
                    cuisines[cuisine] === "All"
                  ) {
                    if (nonVeg > 0) {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    } else if (nonVeg === 0 && item.veg) {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    }
                  } else {
                    return null;
                  }
                })}
              </select>
            )} */}

            {isDessertChange && (
              <AutoSearch
                value={dessertData}
                handleAdd={handleDesertsAdd}
                label="Choose Dessert"
              />
            )}
            {!isDessertChange && (
              <AutoSearch
                value={dessertData}
                handleAdd={handleDesertsAdd}
                label="Choose Dessert"
              />
            )}
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.wrapper}>
          <button onClick={handleShowModal} className={styles.red + " bg-red"}>
            Check Price
          </button>

          <NameNumberModal
            handleClose={handleCloseModal}
            show={showModal}
            totalPrice={totalPrice}
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      {isSmall ? mobile : desktop}
      {/* <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {modalContent}
            </Modal.Body>
        </Modal> */}
      <Footer />
    </>
  );
}
