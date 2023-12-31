import styles from '$styles/Float.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp,faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Float()
{
    return (
        <div className={styles.container}>
            <div className={styles.item}>
            <a href='tel:08047176666' id="call"><button  className={styles.floatBtn}>

                    <span>Call a Ninja</span>
                    <br />Instant Order</button></a>
                    {/* <img src='messaging.svg' color="white" alt=''/> */}
                    {/* <FontAwesomeIcon icon={faInstagram} className={styles.icon} /> */}
                    {/* <FontAwesomeIcon icon="fa-solid fa-message" /> */}
            </div>
            <div className={styles.item}>
            
            <img src='horizontal bar ninja and logo.png' color="white" alt='' style={{width: "120px"}}/>
                {/* <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} /> */}
            </div>
            <div className={styles.item}>
               
                   <button onClick={() => window.open('/checkprice', '_blank')} className={styles.floatBtn}>
                <span>Custom Menu</span>
                <br />Instant Price
                
                </button>
            </div>
            {/* <div className={styles.item}>

            </div> */}
        </div>
//         <div className='sticky-section'>
// <div className='sticky-cta'>
// <a className='sticky-cta--col'>
//     <span>Refer a frend</span>
//     <span>Refer a frend</span>
// </a>
// <a className='sticky-cta--col'></a>
// <a className='sticky-cta--col'></a>
// </div>
//         </div>
    )
}