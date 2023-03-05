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
      from: data.email,
      to: `caterninjadiy@gmail.com, ${data.email}, 8n62vi4t8_5o1fxq4@parser.zohocrm.com`,
      subject: `Final Quote ${data.date} | CaterNinja🤺| Party Quote.`,
      html: ` 
      
    <h2>Hello ${data.name} !! </h2>
    <h2>Thank you for choosing CaterNinja😊</h2>
    
    
    
      <h3>Name : ${data.name.toUpperCase()}</h3>
      <h3>Email : ${data.email}</h3>
      <h3>Mobile No : ${data.mobileno}</h3>
      <h3>City : ${data.city.toUpperCase()}</h3>
      <h3>Date: ${data.date}</h3>
    
      <h3>Guest Count : ${data.people}</h3>
      <h3>Occasion: ${data.occasion}</h3>
      <h3>Cuisine : ${data.cuisine}</h3>
      <h3>Preference : ${data.preference}</h3>
      <h3>Meal Type : ${data.mealtype}</h3>
    
    
    
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
    
    <div>
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
    
    <div>
    
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
    
    
      <h3>Sub Total : Rs ${data.totalPrice}</h3>
      
      <h3>Box/Buffet Price : Rs ${data.buffet}</h3>
      <h3>GST: Rs ${data.GST}</h3>
      <h2>Grand Total : Rs ${data.grandTotal}
        </h2>
    
    
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
            return res.json({ success: false});
          } else {
            return res.json({ success: true, message:mailOptions });
          }
        });

        
      } 
    catch (err) {
      console.log(err);
      return res.json({ message: err.message });
    }
  }
  else{
    return res.json({ message: "Bad request" });
  }
};
