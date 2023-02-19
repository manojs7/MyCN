import React, { useRef, useState, useEffect } from 'react'
import styles from '/styles/NewDiy.module.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faArrowLeftLong, faMagnifyingGlass, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import Multiselect from 'multiselect-react-dropdown';
import { DisabledByDefault } from '@mui/icons-material';
import Image from 'next/image';

// this.state = {
//     options: [{ name: 'Option 1️⃣', id: 1 }, { name: 'Option 2️⃣', id: 2 }]
// };



// onSelect(selectedList, selectedItem) {

// }

// onRemove(selectedList, removedItem) {

// }

const NewDiy = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [selectedOptions, setSelectedOptions] = useState();
    const [data, setData] = useState([])
    const [isDisabled, setIsDisabled] = useState(true);
    const [isDisabledStarter, setIsDisabledStarter] = useState(true);
    const [isDisabledMains, setIsDisabledMains] = useState(true);
    const [isDisabledBread, setIsDisabledBread] = useState(true);
    const [isDisabledRice, setIsDisabledRice] = useState(true);
    const[showDropdown, setShowDropdown] = useState(true)
    const [isShown, setIsShown] = useState(false);

    const [state, setState] = useState({
        showDiv1: true,
        showDiv2: false
    });

    const handleDiv1Click = () => {

        setShowSelectedMenu(true);
        setShowDropdown(false)

        setState({
            showDiv1: false,
            showDiv2: true
        });
        
        const results = filteredData.filter(({ id: id1 }) => !checkedValues.some(({ id: id2 }) => id2 === id1));
   
        let selectedIds = [];
        for(let i=0; i<results.length; i++){
            selectedIds.push(results[i].id);
        }
        for(let j=0; j<filteredData.length; j++){
            if(!(selectedIds.includes(filteredData[j].id))){
                filteredData[j].checked='checked';
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

    const deleteMenu = (item)=>{
        setCheckedValues(checkedValues.filter(v => v.id !== item.id));
    }
    const handleClick = event => {
        // 👇️ toggle shown state
        setIsShown(current => !current);

        // 👇️ or simply set it to true
        // setIsShown(true);
    };

    const optionList = [
        { value: "red", label: "Paneer Butter Masala" },
        { value: "green", label: "Palak Paneer" },
        { value: "yellow", label: "Kadai Paneer" },
        { value: "blue", label: "Chicken tikka" },
        { value: "white", label: "Chicken Punjabi" }
    ];

    function handleSelect(data) {
        setSelectedOptions(data);
    }

    const [starter, setStarter] = useState([""]);

    useEffect(() => {

        setData(itemList)
        const prevBtns = document.querySelectorAll(".btn-prev");
        const nextBtns = document.querySelectorAll(".btn-next");
        const progress = document.getElementById("progress");
        const formSteps = document.querySelectorAll(".form-step");
        const progressSteps = document.querySelectorAll(".progress-step");

        nextBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                formStepsNum++;
                updateFormSteps();
                updateProgressbar();
            });
        });

        prevBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                formStepsNum--;
                updateFormSteps();
                updateProgressbar();
            });
        });

        let formStepsNum = 0;

        function updateFormSteps() {
            formSteps.forEach((formStep) => {
                formStep.classList.contains("form-step-active") &&
                    formStep.classList.remove("form-step-active");
            });

            formSteps[formStepsNum].classList.add("form-step-active");
        }

        function updateProgressbar() {
            progressSteps.forEach((progressStep, idx) => {
                if (idx < formStepsNum + 1) {
                    progressStep.classList.add("progress-step-active");
                } else {
                    progressStep.classList.remove("progress-step-active");
                }
            });

            const progressActive = document.querySelectorAll(".progress-step-active");

            progress.style.width =
                ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
        }
    }, [])

    const itemList = [
        {
            id: 1,
            image: '/diy images/starter/image 23.png',
            name: 'Palak Paneer',
            description: "Creamy, buttery Smooth paneer in a delicious thick gravy",
            checked: ''
        },
        {
            id: 2,
            image: '/diy images/starter/image 23.png',
            name: 'Butter Paneer',
            description: "cscscsecse",
            checked: ''
        },
        {
            id: 3,
            image: '/diy images/starter/image 23.png',
            name: 'Matar Paneer',
            description: "cscsecfesces",
            checked: ''
        },
        {
            id: 4,
            image: '/diy images/starter/image 23.png',
            name: 'Chilie Paneer',
            description: "csecfescfescfes",
            checked: ''
        },
    ]

    const [searchValue, setSearchValue] = React.useState('');
    const [showSelectedMenu, setShowSelectedMenu] =  useState(false);

    const searchStarter = (e) => {
        setSearchValue(e.target.value);
    };

    const filteredData = data.filter((temp) =>
        temp.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    const [checkedValues, setCheckedValues] = React.useState([]);

    const handleCheckboxChange = (e, item) => {
        const value = item;
        if (e.target.checked) {
            value.checked = 'checked';
            setCheckedValues([...checkedValues, value]);
        } else {
            value.checked = '';
            setCheckedValues(checkedValues.filter(v => v.id !== value.id));
        }

    }


    return (
        <div className={styles.diyMainContainer}>
            {/* <div className={styles.diyAnimationScreen}>
                <div className={styles.whiteBg}>
                    <img id={styles.logo} src='CaterNinja (1).png' />
                    <p>Get Instant Quote In <span>Four</span> Easy Steps</p>
                    <img id={styles.ninja} src='/diy images/Group 266 (1).png' />
                </div>
                <div className={styles.redBg} />
                <div className={styles.yellowBg} />
            </div> */}
            <div className={styles.header}>
                <img src='CaterNinja (1).png' />
                <h4>Get Instant Quote In Four Easy Steps</h4>
                {/* <div className={styles.headerButtonsLines}>
                    <button id={styles.btn1}></button>
                    <div id={styles.line1}></div>
                    <button></button>
                    <div id={styles.line1}></div>
                    <button></button>
                    <div id={styles.line1}></div>
                    <button></button>
                </div> */}
                <div className="progressbar">
                    <div className="progress" id="progress"></div>
                    <div
                        className="progress-step progress-step-active"
                    ></div>
                    <div className="progress-step" ></div>
                    <div className="progress-step" ></div>
                    <div className="progress-step" ></div>
                </div>
            </div>
            <form action="#" className="form">
                <div className="form-step form-step-active">
                    <div className={styles.selectCity}>
                        <h3>Select Your City</h3>
                        <hr />
                        <div className="btn-group" role="group" aria-label="Basic example" id={styles.cityIcon}>
                            <button type='radio'><img src='cities/mumbai.png' /></button>
                            <button type='radio'><img src='cities/bangalore.png' /></button>
                            <button type='radio'><img src='cities/delhi.png' /></button>
                            <button type='radio'><img src='cities/gurgaon.png' /></button>
                        </div>
                    </div>
                    <div className={styles.occasion}>
                        <h3>Occasion</h3>
                        <hr />
                        <div className="btn-group" role="group" aria-label="Basic example" id={styles.occasionOptionBtn}>
                            <div>
                                <button>Birthday Party</button>
                                <button>Pre-Wedding</button>
                                <button>House Warmings</button>
                            </div>
                            <div>
                                <button>House-Party</button>
                                <button>Office-Party</button>
                                <button>Other Occasion</button>
                            </div>
                        </div>
                    </div>
                    <div className="" id={styles.nextBtn1}>
                        <a href="#" className="btn btn-next width-50 ml-auto">Next <FontAwesomeIcon icon={faArrowRightLong} /></a>
                    </div>
                </div>
                <div className="form-step">
                    <div className={styles.eventDate}>
                        <h3>Event Date &amp; Time</h3>
                        <hr />
                        <div className={styles.datePicker}>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className={styles.availableSlots}>
                            <h5>Available Slots</h5>
                        </div>
                    </div>
                    <div className={styles.guestCount}>
                        <h3>Guest Count</h3>
                        <hr />
                        <div>
                            <div className={styles.vegSwitch}>
                                <div>
                                    <p>Veg Only</p>
                                </div>
                                <div>
                                    <label className={styles.switch}>
                                        <input type="checkbox" checked={isDisabled}
                                            onChange={(e) => setIsDisabled(e.target.checked)} />
                                        <span className={styles.slider}></span>
                                    </label>
                                </div>
                            </div>
                            <div className={styles.vegNonvegOptions}>
                                <div>
                                    <select className="form-select" aria-label="Default select example">
                                        <option id={styles.addimg} value="0" selected>Veg guest 10</option>
                                        <option value="1">Veg guest 10</option>
                                        <option value="2">Veg guest 10</option>
                                        <option value="3">Veg guest 10</option>
                                    </select>
                                </div>
                                <div>
                                    <select className="form-select" aria-label="Default select example" disabled={isDisabled}>
                                        <option value="0" selected>Non-Veg guest 10</option>
                                        <option value="4">Non-Veg guest 10</option>
                                        <option value="5">Non-Veg guest 10</option>
                                        <option value="6">Non-Veg guest 10</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cuisineContainer}>
                        <h3>Cuisine</h3>
                        <hr />
                        <div className={styles.cuisineBtn}>
                            <div>
                                <button>North Indian</button>
                                <button>Bengali</button>
                                <button>Contiental</button>
                            </div>
                            <div>
                                <button>Pan Asian</button>
                                <button>Indian Chinese</button>
                                <button>Multi Cuisine</button>
                            </div>
                        </div>
                    </div>
                    <hr id={styles.bottomLine} />
                    {/* <div className={styles.backBtn}>
                        <button>back</button>
                    </div> */}
                    <div className="btns-group" id={styles.nextPrevBtn2}>
                        <a href="#" className="btn btn-prev"><FontAwesomeIcon icon={faArrowLeftLong} /> Back</a>
                        <a href="#" className="btn btn-next">Next <FontAwesomeIcon icon={faArrowRightLong} /></a>
                    </div>
                </div>
                <div className="form-step">
                    <div className={styles.createYourMenuContainer}>
                        <h3>Create Your Menu</h3>
                        <hr />
                        <div>
                            <div className={styles.startersContainer}>
                                <div>
                                    <label className={styles.switch}>
                                        <input type="checkbox" checked={isDisabledStarter}
                                            onChange={() => setIsDisabledStarter(!isDisabledStarter)} />
                                        <span className={styles.slider}></span>
                                    </label>
                                </div>
                                <div>
                                    <h6>STARTERS -</h6>
                                </div>
                            </div>
                            <div className={styles.selectedStarterContainer}>
                            {!showSelectedMenu && checkedValues.map((item, index) => (<div className={styles.fstItem} key={index}>
                                    <img className={styles.itemImage} src="/diy images/starter/image 23.png" />
                                    <div className={styles.itemDetailsContainer}>
                                        <img className={styles.vegLogo} src="/diy images/vegLogo.png" />
                                        <div>
                                            <h4>{item.name}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                        <div>
                                            <div className={styles.quantityBtn}>
                                                <button>-</button>
                                                <h6>00pcs</h6>
                                                <button>+</button>
                                            </div>
                                            <div className={styles.recQnty}>
                                                <p>Recommended Qt.</p>
                                            </div>
                                        </div>
                                        <div>
                                            <img className={styles.trassLogo} src="/diy images/trash-alt.png" onClick={()=>deleteMenu(item)} />
                                        </div>
                                    </div>
                                </div> )) }
                            </div>
                            {showDropdown && (<div onClick={handleDiv1Click} className={styles.starterSearchBtn} id="srchbr">
                                <p><FontAwesomeIcon icon={faMagnifyingGlass} />  Select Starter</p>
                                <span><FontAwesomeIcon icon={faAngleDown} />  Click here to select</span>
                            </div>
                            )}
                            {/* { isShown && (<div className={styles.starterMenuContainer}>
                        <Select
                            className={styles.selectDropdown}
                            options={optionList}
                            placeholder="Select Starter"
                            value={selectedOptions}
                            onChange={handleSelect}
                            isSearchable={true}
                            isMulti
                        />
                        <div><button onClick={handleClick}>close</button></div>
                    </div>)} */}
                            {showSelectedMenu && (<div className={styles.starterMenuContainer}>
                                {/* <Multiselect
                                    disable={!isDisabledStarter}
                                    id="starterOptions"
                                    placeholder="Select Starter"
                                    displayValue="key"
                                    onKeyPressFn={function noRefCheck() { }}
                                    onRemove={function noRefCheck() { }}
                                    onSearch={function noRefCheck() { }}
                                    onSelect={function noRefCheck() { }}
                                    options={[
                                        {
                                            cat: 'Group 1',
                                            key: 'Palak Paneer',
                                            image: "/666.png"
                                        },
                                        {
                                            cat: 'Group 1',
                                            key: 'Butter Paneer'
                                        },
                                        {
                                            cat: 'Group 1',
                                            key: 'Muter Paneer'
                                        },
                                        {
                                            cat: 'Group 2',
                                            key: 'Chilie Paneer'
                                        }
                                    ]}
                                    showCheckbox
                                /> */}
                                <div id={styles.starterSearchContent}>
                                    {/* <Multiselect
                                        disable={!isDisabledStarter}
                                        id="starterOptions"
                                        placeholder="Select Starter"
                                        displayValue="key"
                                        onKeyPressFn={function noRefCheck() { }}
                                        onRemove={function noRefCheck() { }}
                                        onSearch={function noRefCheck() { }}
                                        onSelect={function noRefCheck() { }}
                                        options={[
                                            {
                                                cat: 'Group 1',
                                                key: 'Palak Paneer',
                                            },
                                            {
                                                cat: 'Group 1',
                                                key: 'Butter Paneer'
                                            },
                                            {
                                                cat: 'Group 1',
                                                key: 'Muter Paneer'
                                            },
                                            {
                                                cat: 'Group 2',
                                                key: 'Chilie Paneer'
                                            },
                                            {
                                                cat: 'Group 2',
                                                key: 'Chilie Paneer'
                                            },
                                            {
                                                cat: 'Group 2',
                                                key: 'Chilie Paneer'
                                            },
                                            {
                                                cat: 'Group 2',
                                                key: 'Chilie Paneer'
                                            },
                                            {
                                                cat: 'Group 2',
                                                key: 'Chilie Paneer'
                                            },
                                            {
                                                cat: 'Group 2',
                                                key: 'Chilie Paneer'
                                            },
                                            {
                                                cat: 'Group 2',
                                                key: 'Chilie Paneer'
                                            }
                                        ]}
                                        showCheckbox
                                        Multiselect/> */}
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
                                                                <img src={item.image} width="30.05px" height="26.54px" />
                                                                <p>{item.name}<br /><span>{item.description}</span></p>
                                                            </div>
                                                            <div>
                                                                <input id={item.id} type="checkbox" checked={item.checked} value={item.id} onChange={(e)=>handleCheckboxChange(e, item)} />
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
                            <div className={styles.starterBtmLine}>
                                <hr />
                            </div>
                            <div className={styles.addMoreBtn}>
                                <button onClick={handleDiv1Click}>+ Add More</button>
                            </div>
                            <div className={styles.startersContainer}>
                                <div>
                                    <label className={styles.switch}>
                                        <input type="checkbox" checked={isDisabledMains}
                                            onChange={() => setIsDisabledMains(!isDisabledMains)} />
                                        <span className={styles.slider}></span>
                                    </label>
                                </div>
                                <div>
                                    <h6>MAINS -</h6>
                                </div>
                            </div>
                            <div>
                                <Multiselect
                                    disable={!isDisabledMains}
                                    id="starterOptions"
                                    placeholder="Select Mains"
                                    displayValue="key"
                                    onKeyPressFn={function noRefCheck() { }}
                                    onRemove={function noRefCheck() { }}
                                    onSearch={function noRefCheck() { }}
                                    onSelect={function noRefCheck() { }}
                                    options={[
                                        {
                                            cat: 'Group 1',
                                            key: 'Palak Paneer'
                                        },
                                        {
                                            cat: 'Group 1',
                                            key: 'Butter Paneer'
                                        },
                                        {
                                            cat: 'Group 1',
                                            key: 'Muter Paneer'
                                        },
                                        {
                                            cat: 'Group 2',
                                            key: 'Chilie Paneer'
                                        }
                                    ]}
                                    showCheckbox
                                />
                            </div>
                            <div className={styles.starterBtmLine}>
                                <hr />
                            </div>
                            <div className={styles.addMoreBtn}>
                                <button>+ Add More</button>
                            </div>
                            <div className={styles.startersContainer}>
                                <div>
                                    <label className={styles.switch}>
                                        <input type="checkbox" checked={isDisabledBread}
                                            onChange={() => setIsDisabledBread(!isDisabledBread)} />
                                        <span className={styles.slider}></span>
                                    </label>
                                </div>
                                <div>
                                    <h6>BREAD / RICE -</h6>
                                </div>
                            </div>
                            <div>
                                <Multiselect
                                    disable={!isDisabledBread}
                                    id="starterOptions"
                                    placeholder="Select Bread / Rice"
                                    displayValue="key"
                                    onKeyPressFn={function noRefCheck() { }}
                                    onRemove={function noRefCheck() { }}
                                    onSearch={function noRefCheck() { }}
                                    onSelect={function noRefCheck() { }}
                                    options={[
                                        {
                                            cat: 'Group 1',
                                            key: 'Palak Paneer'
                                        },
                                        {
                                            cat: 'Group 1',
                                            key: 'Butter Paneer'
                                        },
                                        {
                                            cat: 'Group 1',
                                            key: 'Muter Paneer'
                                        },
                                        {
                                            cat: 'Group 2',
                                            key: 'Chilie Paneer'
                                        }
                                    ]}
                                    showCheckbox
                                />
                            </div>
                            <div className={styles.starterBtmLine}>
                                <hr />
                            </div>
                            <div className={styles.addMoreBtn}>
                                <button>+ Add More</button>
                            </div>
                            <div className={styles.startersContainer}>
                                <div>
                                    <label className={styles.switch}>
                                        <input type="checkbox" checked={isDisabledRice}
                                            onChange={() => setIsDisabledRice(!isDisabledRice)} />
                                        <span className={styles.slider}></span>
                                    </label>
                                </div>
                                <div>
                                    <h6>DESSERT -</h6>
                                </div>
                            </div>
                            <div>
                                <Multiselect
                                    disable={!isDisabledRice}
                                    id="starterOptions"
                                    placeholder="Select Dessert"
                                    displayValue="key"
                                    onKeyPressFn={function noRefCheck() { }}
                                    onRemove={function noRefCheck() { }}
                                    onSearch={function noRefCheck() { }}
                                    onSelect={function noRefCheck() { }}
                                    options={[
                                        {
                                            cat: 'Group 1',
                                            key: 'Palak Paneer'
                                        },
                                        {
                                            cat: 'Group 1',
                                            key: 'Butter Paneer'
                                        },
                                        {
                                            cat: 'Group 1',
                                            key: 'Muter Paneer'
                                        },
                                        {
                                            cat: 'Group 2',
                                            key: 'Chilie Paneer'
                                        }
                                    ]}
                                    showCheckbox
                                />
                            </div>
                            <div className={styles.starterBtmLine}>
                                <hr />
                            </div>
                            <div className={styles.addMoreBtn}>
                                <button>+ Add More</button>
                            </div>
                        </div>
                    </div>
                    {/* <div className={styles.checkPriceBtn}>
                        <button>Check Price</button>
                    </div> */}
                    <div className="btns-group" id={styles.nextPrevBtn2}>
                        <a href="#" className="btn btn-prev"><FontAwesomeIcon icon={faArrowLeftLong} /> Back</a>
                        <a href="#" className="btn btn-next">Check Price <FontAwesomeIcon icon={faArrowRightLong} /></a>
                    </div>
                </div>
                <div className="form-step">
                    <div className={styles.priceDetailsSection}>
                        <h3>Review Your Menu</h3>
                        <hr />
                        <div className={styles.reviewBtn}>
                            <button>Birthday Party</button>
                            <button>Total Guests - 50</button>
                            <button>Veg Only</button>
                        </div>
                        <div>
                            <div className={styles.menuName}>
                                <div>
                                    <h6>Starter -</h6>
                                </div>
                                <div><p>Qt. -</p></div>
                            </div>
                            <div className={styles.itemName}>
                                <div>
                                    <h6>Paneer Butter Masala</h6>
                                    <h6>Palak Paneer</h6>
                                </div>
                                <div>
                                    <h6>2.0 kg</h6>
                                    <h6>2.0 kg</h6>
                                </div>
                            </div>
                            <div className={styles.menuName}>
                                <div>
                                    <h6>Mains -</h6>
                                </div>
                            </div>
                            <div className={styles.itemName}>
                                <div className='mt-2'>
                                    <h6>Paneer Butter Masala</h6>
                                    <h6>Palak Paneer</h6>
                                </div>
                                <div>
                                    <h6>2.0 kg</h6>
                                    <h6>2.0 kg</h6>
                                </div>
                            </div>
                            <div className={styles.menuName}>
                                <div>
                                    <h6>Bread / Rice -</h6>
                                </div>
                            </div>
                            <div className={styles.itemName}>
                                <div className='mt-2'>
                                    <h6>Paneer Butter Masala</h6>
                                    <h6>Palak Paneer</h6>
                                </div>
                                <div>
                                    <h6>2.0 kg</h6>
                                    <h6>2.0 kg</h6>
                                </div>
                            </div>
                            <div className={styles.menuName}>
                                <div>
                                    <h6>Desserts</h6>
                                </div>
                            </div>
                            <div className={styles.itemName}>
                                <div className='mt-2'>
                                    <h6>Paneer Butter Masala</h6>
                                    <h6>Palak Paneer</h6>
                                </div>
                                <div>
                                    <h6>2.0 kg</h6>
                                    <h6>2.0 kg</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr id={styles.pricebtmHr} />
                    <div className="btns-group" id={styles.nextPrevBtn2}>
                        <a href="#" className="btn btn-prev"><FontAwesomeIcon icon={faArrowLeftLong} /> Back To Menu</a>
                    </div>
                    <div className={styles.finalPriceSection}>
                        <div className="d-flex justify-content-between">
                            <select className="form-select" aria-label="Default select example">
                                <option value="1">NinjaBox Delivery (Free)</option>
                                <option value="2">Buffet setup + 1 waiter</option>
                            </select>
                            <p>₹ 0000</p>
                        </div>
                        <div className={styles.couponSection}>
                            <div>
                                <h5>Discount Coupon</h5>
                            </div>
                            <div className={styles.coupon}>
                                <input />
                                <button>Apply</button>
                            </div>
                        </div>
                        <div className={styles.itemtotalSectn}>
                            <div>
                                <h6>Item Total</h6>
                                <h6>Delivery Charges (As Per Actual)</h6>
                            </div>
                            <div>
                                <h6>₹ 0000</h6>
                                <h6>₹ 0000</h6>
                            </div>
                        </div>
                        <hr id={styles.pricebtmHr} />
                        <div className={styles.itemtotalSectn}>
                            <div>
                                <h6>Coupon Value</h6>
                                <h6>GST</h6>
                            </div>
                            <div>
                                <h6>₹ 0000</h6>
                                <h6>₹ 0000</h6>
                            </div>
                        </div>
                        <hr id={styles.pricebtmHr} />
                        <div className={styles.grandTotalContainer}>
                            <div>
                                <h3>Grand Total</h3>
                            </div>
                            <div>
                                <h3>₹ 0000</h3>
                            </div>
                        </div>
                    </div>
                    <div id={styles.submitBtn}>
                        <button>Check Price</button>
                        {/* <input type="submit" value="Submit" className="btn" /> */}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NewDiy