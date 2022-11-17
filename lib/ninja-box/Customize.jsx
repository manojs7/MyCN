import styles from '$styles/Customize.module.scss'
import { useState,useEffect } from 'react'


export default function Customize(props)
{

    const [veg, setVeg] = useState(props.veg)
    const [nonVeg, setNonVeg] = useState(props.nonveg)
    const [cuisine, setCuisine] = useState(0)

    return (<>
        <div className={styles.package}>
            <div className={styles.package_header}>
                <div className={styles.left}>
                    <div className={styles.wrapper}>
                        <div className={styles.package_header_title}>Package Name</div>
                        <div className={styles.V_NV}>icon</div>
                    </div>
                    <div className={styles.wrapper}>
                        X Starters + X Mains + X Desserts
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.guests}>No. of Non-Veg Guests:</div>
                        <div className={styles.price}><button onClick={() => setNonVeg(nonVeg - 1)}>-</button>{nonVeg}<button onClick={() => setNonVeg(nonVeg + 1)}>+</button></div>
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.guests}>No. of Veg Guests:</div>
                        <div className={styles.price}><button onClick={() => setVeg(veg -1)}>-</button>{veg}<button onClick={() => setVeg(veg +1)}>+</button></div>
                    </div>
                </div>
                <div className={styles.right}>

                </div>
            </div>
            <div className={styles.cuisine}>
                <h1>Select Cuisine</h1>
                <div className={styles.cuisine_list}>
                    <div onClick={() => setCuisine(0)} className={styles.cuisine_item + " " + `${cuisine === 0 ? styles.selected : null}`}>
                        <p>Cuisuine 1</p>
                    </div>  
                    <div onClick={() => setCuisine(1)} className={styles.cuisine_item + " " + `${cuisine === 1 ? styles.selected : null}`}>
                        <p>Cuisuine 1</p>
                    </div>  
                    <div onClick={() => setCuisine(2)} className={styles.cuisine_item + " " + `${cuisine === 2 ? styles.selected : null}`}>
                        <p>Cuisuine 1</p>
                    </div>  
                    <div onClick={() => setCuisine(3)} className={styles.cuisine_item + " " + `${cuisine === 3 ? styles.selected : null}`}>
                        <p>Cuisuine 1</p>
                    </div>  
                    <div onClick={() => setCuisine(4)} className={styles.cuisine_item + " " + `${cuisine === 4 ? styles.selected : null}`}>
                        <p>Cuisuine 1</p>
                    </div>  
                </div>
                <hr />
            </div>
            <div className={styles.content}>
                <div className={styles.subsection}>
                    <h1>Starters</h1>
                    <div className={styles.wrapper}>
                        <div className={styles.item}>
                            <div className={styles.img}></div>
                            <div className={styles.title}>
                                <h2>Starter Name</h2>
                            </div>
                            <div className={styles.description}>
                                <p>Lorem ipsum long</p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.img}></div>
                            <div className={styles.title}>
                                <h2>Starter Name</h2>
                            </div>
                            <div className={styles.description}>
                                <p>Lorem ipsum long</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.subsection}>
                    <h1>Mains</h1>
                    <div className={styles.wrapper}>
                        <div className={styles.item}>
                            <div className={styles.img}></div>
                            <div className={styles.title}>
                                <h2>Mains Name</h2>
                            </div>
                            <div className={styles.description}>
                                <p>Lorem ipsum long</p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.img}></div>
                            <div className={styles.title}>
                                <h2>Mains Name</h2>
                            </div>
                            <div className={styles.description}>
                                <p>Lorem ipsum long</p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.img}></div>
                            <div className={styles.title}>
                                <h2>Mains Name</h2>
                            </div>
                            <div className={styles.description}>
                                <p>Lorem ipsum long</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.subsection}>
                    <h1>Desserts</h1>
                    <div className={styles.wrapper}>
                        <div className={styles.item}>
                            <div className={styles.img}></div>
                            <div className={styles.title}>
                                <h2>Dessert Name</h2>
                            </div>
                            <div className={styles.description}>
                                <p>Lorem ipsum long</p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.img}></div>
                            <div className={styles.title}>
                                <h2>Dessert Name</h2>
                            </div>
                            <div className={styles.description}>
                                <p>Lorem ipsum long</p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.img}></div>
                            <div className={styles.title}>
                                <h2>Dessert Name</h2>
                            </div>
                            <div className={styles.description}>
                                <p>Lorem ipsum long</p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.img}></div>
                            <div className={styles.title}>
                                <h2>Dessert Name</h2>
                            </div>
                            <div className={styles.description}>
                                <p>Lorem ipsum long</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.wrapper}>
                    <button className={styles.red}>Check Price</button>
                    <button>Customize Package</button>
                </div>
                <div className={styles.wrapper2}>
                    <span>Need more choices</span>
                    <button>Create Your Own Package</button>
                </div>
            </div>
        </div>
    </>)
}