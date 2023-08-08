let nodemailer = require('nodemailer')

export default function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // if (!data.name || !data.email) {
    //   return res.status(400).send({ message: "Bad request" });
    // }
    let transporter = nodemailer.createTransport('smtps://caterninjadiy@gmail.com:wnetkdifdnuqytcm@smtp.gmail.com');
    
    try 
      {
      let mailOptions = {
      from: 'caterninjadiy@gmail.com',
      // to: `caterninjadiy@gmail.com, ${data.email}, 8n62vi4t8_5o1fxq4@parser.zohocrm.com, lqruate0s_j7e8lb8@parser.zohocrm.com`,
      // to:`${data.email},59drv2k@parser.zohocrm.com`,
      // to:`${data.email}, i4e16n207_bvnzocb@parser.zohocrm.com`,

      to:`${data.email}, caterninjadiy@gmail.com, ${data.emailedtoparser?'':'i4e16n207_bvnzocb@parser.zohocrm.com'}`,

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
        data.appetizer?
        data.appetizer
          .map((array, index) => {
            return array.quantity
              ? `<li key="${array.id}_${index}">${array.name} (${array.quantity} ${array.Qtype})</li>`
              : null;
          })
          .join("")
          :""
          
          
        } 
        
          </h3> 
    </div>
    
    <div><br>
    <h3>MainCourse: 
    
    
    
    ${
      data.mainCourse?
        data.mainCourse
          .map((array, index) => {
            return array.quantity
            ? `<li key="${array.id}_${index}">${array.name} (${array.quantity} ${array.Qtype})</li>`
            : null;
          })
          .join("")
          :""
        }  
    </h3>
    </div>
    
    <div><br>
    
    <h3>BreadRice: 
    ${
       data.breadRice?
        data.breadRice
          .map((array, index) => {
            return array.quantity
            ? `<li key="${array.id}_${index}">${array.name} (${array.quantity} ${array.Qtype})</li>`
            : null;
          })
          .join("")
          :""
        }  
    </h3>
    </div>
    
    <div>
    <br>
    
    <h3>Dessert: 
          ${
        data.dessert?
        data.dessert
          .map((array, index) => {
            return array.quantity
              ? `<li key="${array.id}_${index}">${array.name} (${array.quantity} ${array.Qtype})</li>`
              : null;
          })
          .join("")
          :""
        }  
          </h3>
    </div>
    <br>
    
    
      <h3>Sub Total : Rs ${data.totalPrice}</h3><br>
      
      <h3>Box/Buffet Price : ${data.buffet?'NinjaBuffet':'NinjaBox'}</h3><br>
      <h3>GST: Rs ${data.GST}</h3><br>
      <h3>Grand Total : Rs ${data.grandTotal}</h3><br>
      <h3>Need any help ${data.name} : Please call us at 08047176666</h3>
        
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
             res.json({ success: false, message:error});
          } else {
             res.status(200).send({ success: true, message:mailOptions });
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