// let nodemailer = require("nodemailer");

// export default function handler(req, res) {
//   if (req.method === "POST") {
//     const data = req.body;
//     // if (!data.name || !data.email) {
//     //   return res.status(400).send({ message: "Bad request" });
//     // }
//     let transporter = nodemailer.createTransport(
//       "smtps://caterninjadiy@gmail.com:wnetkdifdnuqytcm@smtp.gmail.com"
//     );

//     try {
//       let mailOptions = {
//         from: "caterninjadiy@gmail.com",
//         // to: `caterninjadiy@gmail.com, ${data.email}, 8n62vi4t8_5o1fxq4@parser.zohocrm.com, lqruate0s_j7e8lb8@parser.zohocrm.com`,
//         to: `${data.email},5bg9ka2_umawe2o@preparser.zohocrm.com`,
//         subject: `Final Quote ${data.name} | CaterNinja🤺| Party Quote.`,
//         html: ` 

//       <html>
//         <head>
//       <style type="text/css">
//     body {
//         padding-top: 0;
//         padding-bottom: 0;
//         padding-top: 0;
//         padding-bottom: 0;
//         background-repeat: repeat;
//         width: 100% !important;
//         -webkit-text-size-adjust: 100%;
//         -ms-text-size-adjust: 100%;
//         -webkit-font-smoothing: antialiased;
//         font-family: Helvetica, Arial, serif;
//         margin: 0px;
//         background: #C1C1C1;
//     }
// </style>
// </head>
//       <body>
//       <div style="width: 600px; margin: auto;">

//       <div style="background-color: #BE2D30; height: 60px; text-align: center;">
//             <h2 style="padding-block: 20px; font-size: 20px; color: #fff; font-weight: 300;">COLD DEAL ${data.name.toUpperCase()}</h2>
//         </div>
//         <div style="text-align: center; background-color: #ebebeb; height: 100px;">
//             <img src="https://www.caterninja.com/frontend/web/images/app_img/site_logo.png" style="padding-block: 18px;"
//                 width="258" height="69" alt="logo" />
//         </div>
//         <div style="background-color: #f7f7f7; display: flex; padding: 30px;">
//             <div>
//                 <p>Name:</p>
//                 <p>Email:</p>
//                 <p>Phone:</p>
//                 <p>Veg Pax:</p>
//                 <p>NV Pax:</p>
//                 <p>Cuisine:</p>
//                 <p>Ocassion:</p>
//                 <p>City:</p>
//                 <p>Ref Url 2:</p>
//                 <p>Event Date:</p>
//             </div>
//             <div style="margin-left: 120px;">
//                 <p style="font-weight: bold;">${data.name.toUpperCase()}</p>
//                 <a>${data.email}</a>
//                 <p>${data.mobileno}</p>
//                 <p>${data.veg_c}</p>
//                 <p>${data.nonveg_c}</p>
//                 <p>${data.cuisine}</p>
//                 <p>${data.occasion}</p>
//                 <p>${data.city}</p>
//                 <a>https://www.caterninja.com</a>
//                 <p>${data.date}</p>
//             </div>
//         </div>
  
//         <div style="background-color: #ebebeb; padding: 30px;">
//           <div style="margin-bottom: 40px;">
//               <h4 style="margin-bottom: 30px;">Appetizer:</h4>
              
//               <div style="margin-left: 30px;">
              
//                   <ol>
//                   ${data.appetizer
//                     .map((array, index) => {
//                       return array.quantity
//                         ? `<li key="${array.id}_${index}">${array.name} (${array.quantity} ${array.Qtype})</li>`
//                         : null;
//                     })
//                     .join("")}
//                   </ol>
//               </div>
//           </div>
//         </div>

//         <div style="background-color: #ebebeb; padding: 30px;">
//         <div style="margin-bottom: 40px;">
//             <h4 style="margin-bottom: 30px;">MainCourse:</h4>
            
//             <div style="margin-left: 30px;">
            
//                 <ol>
//                 ${data.mainCourse
//                   .map((array, index) => {
//                     return array.quantity
//                       ? `<li key="${array.id}_${index}">${array.name} (${array.quantity} ${array.Qtype})</li>`
//                       : null;
//                   })
//                   .join("")}
//                 </ol>
//             </div>
//         </div>
//       </div>
    
//       <div style="background-color: #ebebeb; padding: 30px;">
//       <div style="margin-bottom: 40px;">
//           <h4 style="margin-bottom: 30px;">BreadRice :</h4>
          
//           <div style="margin-left: 30px;">
          
//               <ol>
//               ${data.breadRice
//                 .map((array, index) => {
//                   return array.quantity
//                     ? `<li key="${array.id}_${index}">${array.name} (${array.quantity} ${array.Qtype})</li>`
//                     : null;
//                 })
//                 .join("")}
//               </ol>
//           </div>
//       </div>
//     </div>
//     <div style="background-color: #ebebeb; padding: 30px;">
//       <div style="margin-bottom: 40px;">
//           <h4 style="margin-bottom: 30px;">Desserts:</h4>
          
//           <div style="margin-left: 30px;">
          
//               <ol>
//               ${data.dessert
//                 .map((array, index) => {
//                   return array.quantity
//                     ? `<li key="${array.id}_${index}">${array.name} (${array.quantity} ${array.Qtype})</li>`
//                     : null;
//                 })
//                 .join("")}
//               </ol>
//           </div>
//       </div>
//     </div>
   
//     <div style="background-color: #f7f7f7; display: flex; padding: 30px; justify-content: space-between;">
//             <div>
//                 <p>Sub Total:</p>
//                 <p>Box/Buffet Price:</p>
//                 <p>GST:</p>
//                 <p>Grand Total:</p>
//             </div>
//             <div>
//                 <p>Rs ${data.totalPrice}</p>
//                 <p>${
//                   data.buffet > 0 ? "NinjaBuffet Rs" : "NinjaBox(Free)"
//                 } ${data.buffet.toLocaleString("en-US")}</p>
//                 <p>Rs ${data.GST}</p>
//                 <h3 style="font-weight: bolder;">Rs ${data.grandTotal}</h3>
//             </div>
//       </div>
//     </div>

//     <div style="height: 100px; background-color: black;">
//       <h3 style=" color: white; text-align: center; padding-block: 35px;">Thank you ! Visit Again !</h3>
//     </div>

//     </body>

// </html>
    
    
//     <table style="width:100%">
    
//     ${
//       data.city === "mumbai"
//         ? `<tr>
//     <td><h3>Booking assistance for Mumbai :</h3></td>
//     <td><a style="color:green;text-decoration: none;" id="chat" href="https://api.whatsapp.com/send?phone=917738096313&amp;text=Hey! Need help booking a DIY Menu in Mumbai" className="whatsapp" title="WhatsApp us" async>
//     <h3> Chat on Whatassp !!</h3></a></td>  
//     </tr>`
//         : ""
//     }
    
//     ${
//       data.city === "bangalore"
//         ? `<tr>
//     <td><h3>Booking assistance for Bangalore :</h3></td>
//     <td><a style="color:green;text-decoration: none;" id="chat" href="https://api.whatsapp.com/send?phone=917738096313&amp;text=Hey! Need help booking a DIY Menu in Bangalore" className="whatsapp" title="WhatsApp us" async>
//     <h3> Chat on Whatassp !!</h3></a></td>  
//     </tr>`
//         : ""
//     }
    
//     ${
//       data.city === "delhi"
//         ? `<tr>
//     <td><h3>Booking assistance for Delhi :</h3></td>
//     <td><a style="color:green;text-decoration: none;" id="chat" href="https://api.whatsapp.com/send?phone=917738096313&amp;text=Hey! Need help booking a DIY Menu in Delhi" className="whatsapp" title="WhatsApp us" async>
//     <h3> Chat on Whatassp !!</h3></a></td>  
//     </tr>`
//         : ""
//     }
    
//     ${
//       data.city === "gurgaon"
//         ? `<tr>
//     <td><h3>Booking assistance for Gurgaon :</h3></td>
//     <td><a style="color:green;text-decoration: none;" id="chat" href="https://api.whatsapp.com/send?phone=917738096313&amp;text=Hey! Need help booking a DIY Menu in Gurgaon" className="whatsapp" title="WhatsApp us" async>
//     <h3> Chat on Whatassp !!</h3></a></td>  
//     </tr>`
//         : ""
//     }
      
//     </table>
    
//           `,
//       };
//       let appt = data.appetizer;

//       transporter.sendMail(mailOptions, (error, response) => {
//         if (error) {
//           return res.json({ success: false, message: error });
//         } else {
//           return res.json({ success: true, message: mailOptions });
//         }
//       });
//     } catch (err) {
//       return res.json({ message: err.message });
//     }
//   } else {
//     return res.json({ message: "Bad request" });
//   }
// }

let nodemailer = require('nodemailer')

export default function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // if (!data.name || !data.email) {
    //   return res.status(400).send({ message: "Bad request" });
    // }
    let transporter = nodemailer.createTransport('smtps://caterninjadiy@gmail.com:wnetkdifdnuqytcm@smtp.gmail.com');
    // let reciver;
    // if(emailedtoparser){
    //   reciver=data.email,
    // }
    // else{

    // }
    try 
      {
      let mailOptions = {
      from: 'caterninjadiy@gmail.com',
      // to: `caterninjadiy@gmail.com, ${data.email}, 8n62vi4t8_5o1fxq4@parser.zohocrm.com, lqruate0s_j7e8lb8@parser.zohocrm.com`,
      // to:`${data.email},59drv2k@parser.zohocrm.com`,
      // to:`${data.email}, i4e16n207_bvnzocb@parser.zohocrm.com`,

      to:`${data.email}, ${data.emailedtoparser?'':'i4e16n207_bvnzocb@parser.zohocrm.com'}`,

      subject: `Final Quote ${data.name} | CaterNinja🤺| Party Quote.`,

      html: ` 
      
    <h3>Hello ${data.name} !! </h3><br>
    <h3>Thank you for choosing CaterNinja😊</h3><br>
    
    
    
      <h3>Name : ${data.name.toUpperCase()}</h3><br>
      <h3>Email : ${data.email}</h3><br>
      <h3>Mobile No : ${data.mobileno}</h3><br>
      <h3>City : ${data.city.toUpperCase()}</h3><br>
      <h3>Date: ${data.date}</h3><br>
      <h3>Veg Count : ${data.veg_c}</h3><br>
      <h3>nonVeg Count : ${data.nonveg_c}</h3><br>
      <h3>Total Guest Count : ${data.people}</h3><br>
      <h3>Occasion: ${data.occasion}</h3><br>
      <h3>Cuisine : ${data.cuisine}</h3><br>
      <h3>Preference : ${data.preference}</h3><br>
      <h3>Meal Type : ${data.mealtype}</h3><br>
      <h3>Ref URL 2 : ${data.url}</h3><br>
    
    
    
    <div>
    
    <h3>Appetizer :
          ${
        // data.appetizer.some((el) => el.value === true) &&
        data.appetizer
          .map((array, index) => {
            return array.quantity
              ? `<li key="${array.id}_${index}">${array.name} (${array.quantity} ${array.Qtype})</li>`
              : null;
          })
          .join("")
          
          
        } 
        
          </h3> 
    </div>
    
    <div><br>
    <h3>MainCourse: 
    
    
    
    ${
        
        data.mainCourse
          .map((array, index) => {
            return array.quantity
            ? `<li key="${array.id}_${index}">${array.name} (${array.quantity} ${array.Qtype})</li>`
            : null;
          })
          .join("")
        }  
    </h3>
    </div>
    
    <div><br>
    
    <h3>BreadRice: 
    ${
       
        data.breadRice
          .map((array, index) => {
            return array.quantity
            ? `<li key="${array.id}_${index}">${array.name} (${array.quantity} ${array.Qtype})</li>`
            : null;
          })
          .join("")
        }  
    </h3>
    </div>
    
    <div>
    <br>
    
    <h3>Dessert: 
          ${
        
        data.dessert
          .map((array, index) => {
            return array.quantity
              ? `<li key="${array.id}_${index}">${array.name} (${array.quantity} ${array.Qtype})</li>`
              : null;
          })
          .join("")
        }  
          </h3>
    </div>
    <br>
    
    
      <h3>Sub Total : Rs ${data.totalPrice}</h3><br>
      
      <h3>Box/Buffet Price : ${data.buffet?'NinjaBuffet':'NinjaBox'}</h3><br>
      <h3>GST: Rs ${data.GST}</h3><br>
      <h3>Grand Total : Rs ${data.grandTotal}</h3><br>
      <h3>Need any help ${data.name} : Please call us</h3>
        
      <h2>Thank you!!! </h2<br>
    
    
    <table style="width:100%">
    
    ${data.city === "mumbai"
          ? `<tr>
    <td><h3>Booking assistance for Mumbai :</h3></td>
    <td><a style="color:green;text-decoration: none;" id="chat" href="https://api.whatsapp.com/send?phone=917738096313&amp;text=Hey! Need help booking a DIY Menu in Mumbai" className="whatsapp" title="WhatsApp us" async>
    <h3> Chat on Whatassp !!</h3></a></td>  
    </tr>`
          : ""
        }
    
    ${data.city === "bangalore"
          ? `<tr>
    <td><h3>Booking assistance for Bangalore :</h3></td>
    <td><a style="color:green;text-decoration: none;" id="chat" href="https://api.whatsapp.com/send?phone=917738096313&amp;text=Hey! Need help booking a DIY Menu in Bangalore" className="whatsapp" title="WhatsApp us" async>
    <h3> Chat on Whatassp !!</h3></a></td>  
    </tr>`
          : ""
        }
    
    ${data.city === "delhi"
          ? `<tr>
    <td><h3>Booking assistance for Delhi :</h3></td>
    <td><a style="color:green;text-decoration: none;" id="chat" href="https://api.whatsapp.com/send?phone=917738096313&amp;text=Hey! Need help booking a DIY Menu in Delhi" className="whatsapp" title="WhatsApp us" async>
    <h3> Chat on Whatassp !!</h3></a></td>  
    </tr>`
          : ""
        }
    
    ${data.city === "gurgaon"
          ? `<tr>
    <td><h3>Booking assistance for Gurgaon :</h3></td>
    <td><a style="color:green;text-decoration: none;" id="chat" href="https://api.whatsapp.com/send?phone=917738096313&amp;text=Hey! Need help booking a DIY Menu in Gurgaon" className="whatsapp" title="WhatsApp us" async>
    <h3> Chat on Whatassp !!</h3></a></td>  
    </tr>`
          : ""
        }
      
    </table>
    
          `,
    };
    let appt=data.appetizer;

        transporter.sendMail(mailOptions, (error, response) => {
          if (error) {
            return res.json({ success: false, message:error});
          } else {
            return res.json({ success: true, message:mailOptions });
          }
        });

        
      } 
    catch (err) {
      return res.json({ message: err.message });
    }
  }
  else{
    return res.json({ message: "Bad request" });
  }
};