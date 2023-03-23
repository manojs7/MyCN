import styles from '$styles/Float.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp,faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Float2()
{
    return (
        <div className={styles.container}>
            <div className={styles.item}>
            <button onClick={() => (window.open('tel:08047176666'))} className={styles.floatBtn}>

                    <span>Call a Ninja</span>
                    <br />Instant Order</button>
                    {/* <img src='messaging.svg' color="white" alt=''/> */}
                    {/* <FontAwesomeIcon icon={faInstagram} className={styles.icon} /> */}
                    {/* <FontAwesomeIcon icon="fa-solid fa-message" /> */}
            </div>
            <div className={styles.item}>
            
            <img src='horizontal bar ninja and logo.png' color="white" alt='' style={{width: "120px"}}/>
                {/* <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} /> */}
            </div>
            <div className={styles.item}>
               
                   <button onClick={() => window.open('https://api.whatsapp.com/send?phone=917738096313&text=Hi Need Help Booking DIY Menu', '_blank')} className={styles.floatBtn}>
                <span>Chat with us</span>
                <br />on Whatsapp
                
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