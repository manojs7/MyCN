// import { useState, useEffect } from "react";
// import styles from '$styles/view-details.module.scss';
// import Navbar from "$lib/Navbar";
// import Footer from "$lib/Footer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faIndianRupee, faListAlt, faSeedling } from "@fortawesome/free-solid-svg-icons";
// import Router from "next/router";
// import Ninja_Package_Data from '$lib/ninja-box/Ninja_Package_Data'
// import { Modal } from "react-bootstrap";
// import { NameNumberModal } from "$lib/custom/NameNumberModal";
// import NewFooter from "$lib/NewFooter";

// export default function ViewDetails()
// {
//     const [showModal, setShowModal] = useState(false);

//     const handleCloseModal = () => setShowModal(false);
//     const handleShowModal = () => setShowModal(true);

//     const [knowMore, setKnowMore] = useState([]);
//     const [isMobile, setIsMobile] = useState(false);
//     const [modalTitle, setModalTitle] = useState('');
//     const [modalContent, setModalContent] = useState('');
//     // const [show, setShowModal] = useState(false);

//     function handleclose()
//     {
//         setModalTitle('');
//         setModalContent('');
//         setShowModal(false);
//         setKnowMore([]);
//     }

//     function handleCustom(index)
//     {
//         const starters = Ninja_Package_Data[index].starters;
//         const mains = Ninja_Package_Data[index].mains;
//         const desserts = Ninja_Package_Data[index].desserts;
//         const veg = Ninja_Package_Data[index].veg;
//         const nonveg = Ninja_Package_Data[index].nonveg;
//         Router.push({
//             pathname: "/custom",
//             query: {
//                 data: JSON.stringify({
//                     starters: starters,
//                     mains: mains,
//                     desserts: desserts,
//                     veg: veg,
//                     nonVeg: nonveg
//                 })
//             }
//         }, '/custom');
//     }

//     useEffect(() =>
//     {
//         if (knowMore[2] === 'mobile')
//         {
//             if (knowMore[1] === 'starters')
//             {
//                 setModalTitle(starters[knowMore[0]].name);
//                 setModalContent(starters[knowMore[0]].description);
//             }
//             else if (knowMore[1] === 'mains')
//             {
//                 setModalTitle(mains[knowMore[0]].name);
//                 setModalContent(mains[knowMore[0]].description);    
//             }
//             else if (knowMore[1] === 'desserts')
//             {
//                 setModalTitle(desserts[knowMore[0]].name);
//                 setModalContent(desserts[knowMore[0]].description);    
//             }
//             setShowModal(true);
//         }
            
//     }, [knowMore]);

//     useEffect(() =>
//     {
//         setIsMobile(window.innerWidth < 939);
//         window.addEventListener('resize', () => setIsMobile(window.innerWidth < 939));
//     }, []);

//     useEffect(() =>
//     {
//         console.log(knowMore);
//     }, [knowMore]);

//     const [starters, setStarters] = useState([
//         {
//             name: 'Starter 1',
//             quantity: 1,
//             Qtype: 'pcs',
//             veg: true,
//             description: 'Lorem Ipsum long'
//         },
//         {
//             name: 'Starter 2',
//             quantity: 1,
//             Qtype: 'pcs',
//             veg: true,
//             description: 'Lorem Ipsum long'
//         },
//         {
//             name: 'Starter 3',
//             quantity: 1,
//             Qtype: 'pcs',
//             veg: true,
//             description: 'Lorem Ipsum long'
//         }
//     ])

//     const [mains, setMains] = useState([
//         {
//             name: 'Main 1',
//             quantity: 1,
//             Qtype: 'pcs',
//             veg: true,
//             description: 'Lorem Ipsum long'
//         },
//         {
//             name: 'Main 2',
//             quantity: 1,
//             Qtype: 'pcs',
//             veg: true,
//             description: 'Lorem Ipsum long'
//         },
//         {
//             name: 'Main 3',
//             quantity: 1,
//             Qtype: 'pcs',
//             veg: true,
//             description: 'Lorem Ipsum long'
//         }
//     ])

//     const [desserts, setDesserts] = useState([
//         {
//             name: 'Dessert 1',
//             quantity: 1,
//             Qtype: 'pcs',
//             veg: true,
//             description: 'Lorem Ipsum long'
//         },
//         {
//             name: 'Dessert 2',
//             quantity: 1,
//             Qtype: 'pcs',
//             veg: true,
//             description: 'Lorem Ipsum long'
//         },
//         {
//             name: 'Dessert 3',
//             quantity: 1,
//             Qtype: 'pcs',
//             veg: true,
//             description: 'Lorem Ipsum long'
//         }
//     ])

//     const city = 'Bengluru';

//     const cityRender = (
//         <div className={styles.contain}>
//             <span>City: </span>
//             <select className={styles.city}>
//                 <option value={city}>{city}</option>
//                 <option value="Mumbai">Mumbai</option>
//                 <option value="Delhi">Delhi</option>
//             </select>
//         </div>
//     )

//     const mobile = (
//         <div className={styles.header}>
//             <div className={styles.strip}>
//                 <div className={styles.wrapper2}>
//                     <div className={styles.header_title}>
//                         <span>ninja</span>Box
//                     </div>
//                     <div className={styles.header_content}>
//                         Door Step Delivery in a Convenient Ready-to-Serve box for 10- 40
//                         Guests
//                     </div>
//                 </div>
//                 <div className={styles.wrapper}>
//                     <h1>Ninja<span>Box</span> Packages</h1>
//                     <h1>View NinjaBox Packages</h1>
//                 </div>
//                 {cityRender}
//             </div>
//         </div>
//     )

//     const desktop = (
//         <div className={styles.header}>
//             <div className={styles.strip}>
//                 <div className={styles.wrapper}>
//                     <h1>View NinjaBox Package</h1>
//                     <h1>Details</h1>
//                 </div>
//                 <div className={styles.wrapper2}>
//                     <div className={styles.header_title}>
//                         <span>ninja</span>Box
//                     </div>
//                     <div className={styles.header_content}>
//                         Door Step Delivery in a Convenient Ready-to-Serve box for 10- 40
//                         Guests
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );

//     const mobilePackage = (
//         <div className={styles.package}>
//             <div className={styles.package_header}>
//                 <div className={styles.wrapper}>
//                     <div className={styles.package_header_title}>Package Name</div>
//                 </div>
//                 <div className={styles.right}>
//                     <img src="https://via.placeholder.com/1920X1080/100" alt="package" />
//                 </div>
//                 <div className={styles.wrapper}>
//                     X Starters + X Mains + X Desserts
//                     <div className={styles.wrapper}>
//                         <div style={{color: 'green'}}>Veg  <FontAwesomeIcon icon={faSeedling} style={{ color: 'green' }} /></div>
//                         <div className={styles.price}><FontAwesomeIcon icon={faIndianRupee} /> 8,888</div>
//                         <div className={styles.guests}>No. of Guests: 10</div>
//                     </div>
//                 </div>
//             </div>
//             <div className={styles.content}>
//                 <div className={styles.subsection}>
//                     <h1>Starters</h1>
//                     <div className={styles.wrapper}>
//                         {starters.map((starter, index) =>
//                         {
//                             return (
//                                 <div className={styles.item} key={index}>
//                                     <div className={styles.img}>
//                                         <img src='https://via.placeholder.com/200x200/100' alt="dessert" />
//                                     </div>
//                                     <div className={styles.title}>
//                                         <h2>{starter.name}</h2>
//                                         <span onClick={() => setKnowMore([index, 'starters','mobile'])} style={{
//                                             display: 'flex',
//                                             justifyContent: 'center',
//                                             alignItems: 'center'

//                                         }}><FontAwesomeIcon icon={faListAlt} style={{
//                                             height: '1rem',
//                                             width: '1rem',
//                                             color: 'red'
//                                         }} />Know More</span>
//                                     </div>

//                                 </div>
//                             )
//                         })}

//                     </div>
//                 </div>
//                 <div className={styles.subsection}>
//                     <h1>Mains</h1>
//                     <div className={styles.wrapper}>
//                         {mains.map((main, index) =>
//                         {
//                             return (
//                                 <div className={styles.item} key={index}>
//                                     <div className={styles.img}>
//                                         <img src='https://via.placeholder.com/100x100/100' alt="dessert" />
//                                     </div>
//                                     <div className={styles.title}>
//                                         <h2>{main.name}</h2>
//                                         <span onClick={() => setKnowMore([index, 'mains', 'mobile'])} style={{
//                                             display: 'flex',
//                                             justifyContent: 'center',
//                                             alignItems: 'center'

//                                         }}><FontAwesomeIcon icon={faListAlt} style={{
//                                             height: '1rem',
//                                             width: '1rem',
//                                             color: 'red'
//                                         }} />Know More</span>
//                                     </div>

//                                 </div>
//                             )
//                         })}
//                     </div>
//                 </div>
//                 <div className={styles.subsection}>
//                     <h1>Desserts</h1>
//                     <div className={styles.wrapper}>
//                         {desserts.map((dessert, index) =>
//                         {
//                             return (
//                                 <div className={styles.item} key={index}>
//                                     <div className={styles.img}>
//                                         <img src='https://via.placeholder.com/100x100/100' alt="dessert" />
//                                     </div>
//                                     <div className={styles.title}>
//                                         <h2>{dessert.name}</h2>
//                                         <span onClick={() => setKnowMore([index, 'desserts', 'mobile'])} style={{
//                                             display: 'flex',
//                                             justifyContent: 'center',
//                                             alignItems: 'center'

//                                         }}><FontAwesomeIcon icon={faListAlt} style={{
//                                             height: '1rem',
//                                             width: '1rem',
//                                             color: 'red'
//                                         }} />Know More</span>
//                                     </div>

//                                 </div>
//                             )
//                         })}
//                     </div>
//                 </div>
//             </div>
//             <div className={styles.footer}>
//                 <div className={styles.wrapper}>
//                     <button onClick={handleShowModal}  className={styles.red + " bg-red"}>Check Price</button>
//                     <button className={"bg-white"} onClick={() => handleCustom(0)}>Customize Package</button>


                   
//                 </div>
//                 <div className={styles.wrapper2}>
//                     <span>Need more choices</span>
//                     <button className={"bg-white"} onClick={() => window.location.href = '/custom'}>Create Your Own Package</button>
//                 </div>
//             </div>
//         </div>
//     )

//     const desktopPackage = (
//         <div className={styles.package}>
//             <div className={styles.package_header}>
//                 <div className={styles.left}>
//                     <div className={styles.wrapper}>
//                         <div className={styles.package_header_title}>Package Name</div>
//                         <div className={styles.V_NV}>icon</div>
//                     </div>
//                     <div className={styles.wrapper}>
//                         X Starters + X Mains + X Desserts
//                     </div>
//                     <div className={styles.wrapper}>
//                         <div className={styles.guests}>No. of Guests: 10</div>
//                         <div className={styles.price}>Rs. 8,888</div>
//                     </div>
//                 </div>
//                 <div className={styles.right}>
//                 </div>
//             </div>
//             <div className={styles.content}>
//                 <div className={styles.subsection}>
//                     <h1>Starters</h1>
//                     <div className={styles.wrapper}>
//                         <div className={styles.item}>
//                             <div className={styles.img}></div>
//                             <div className={styles.title}>
//                                 <h2>Starter Name</h2>
//                             </div>
//                             <div className={styles.description}>
//                                 <p>Lorem ipsum long</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={styles.subsection}>
//                     <h1>Mains</h1>
//                     <div className={styles.wrapper}>
//                         <div className={styles.item}>
//                             <div className={styles.img}></div>
//                             <div className={styles.title}>
//                                 <h2>Mains Name</h2>
//                             </div>
//                             <div className={styles.description}>
//                                 <p>Lorem ipsum long</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={styles.subsection}>
//                     <h1>Desserts</h1>
//                     <div className={styles.wrapper}>
//                         <div className={styles.item}>
//                             <div className={styles.img}></div>
//                             <div className={styles.title}>
//                                 <h2>Dessert Name</h2>
//                             </div>
//                             <div className={styles.description}>
//                                 <p>Lorem ipsum long</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className={styles.footer}>
//                 <div className={styles.wrapper}>
//                     <button  onClick={handleShowModal}  className={styles.red + " bg-red"}>Check Price</button>
//                     <button className="bg-white" onClick={() => handleCustom(0)}>Customize Package</button>
//                 </div>
//                 <div className={styles.wrapper2}>
//                     <span>Need more choices</span>
//                     <button className="bg-white" onClick={() => window.location.href = '/custom'}>Create Your Own Package</button>
//                 </div>
//             </div>
//         </div>
//     )


//     return (<>
//         <Navbar />
//         {isMobile ? mobile : desktop}
//         <div className={styles.container}>
//             {!isMobile && (<div className={styles.header}>
//                 <h1>Ninja<span>Box</span> Packages</h1>
//                 {cityRender}
//             </div>)}
//             {isMobile ? mobilePackage : desktopPackage}
//         </div>

//          {/* modal */}
//          <NameNumberModal
//                     handleClose={handleCloseModal}
//                     show={showModal}
//                     />
//         {/* <Modal show={show} onHide={handleclose}>
//             <Modal.Header closeButton>
//                 <h1>{modalTitle}</h1>
//             </Modal.Header>
//             <Modal.Body>
//                 {modalContent}
//             </Modal.Body>
//         </Modal> */}
//         {/* <Footer /> */}
//         <NewFooter />
//     </>)
// }