let nodemailer = require('nodemailer')
const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
};

export default function handler(req, res) {
  if (req.method === "POST") {
    const data =req.body;
    console.log(data);
    if (!data.name || !data.email) {
      return res.status(400).send({ message: "Bad request" });
    }
    let transporter = nodemailer.createTransport('smtps://caterninjadiy@gmail.com:wnetkdifdnuqytcm@smtp.gmail.com');

    try {
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
        ${data.boolean &&
      data.appetizer.some((el) => el.value === true) &&
      data.appetizer
        .map((array, index) => {
          return array.value === true
            ? `<li key="${array.id}_${index}">${array.name} (${array.quantity})</li>`
  
            : null;
        })
        .join("")
      } 
        </h3> 
  </div>
  
  <div>
  <h3>MainCourse: 
  
  
  
  ${data.boolean &&
      data.mainCourse.some((el) => el.value === true) &&
      data.mainCourse
        .map((array, index) => {
          return array.value === true
            ? `<li key="${array.id}_${index}">${array.name} (${array.quantity})</li>`
            : null;
        })
        .join("")
      }  
  </h3>
  </div>
  
  <div>
  
  <h3>BreadRice: 
  ${data.boolean &&
      data.breadRice.some((el) => el.value === true) &&
      data.breadRice
        .map((array, index) => {
          return array.value === true
            ? `<li key="${array.id}_${index}">${array.name} (${array.quantity})</li>`
            : null;
        })
        .join("")
      }  
  </h3>
  </div>
  
  <div>
  
  <h3>Dessert: 
        ${data.boolean &&
      data.dessert.some((el) => el.value === true) &&
      data.dessert
        .map((array, index) => {
          return array.value === true
            ? `<li key="${array.id}_${index}">${array.name}</li>`
            : null;
        })
        .join("")
      }  
        </h3>
  </div>
  
  
    <h3>Sub Total : Rs ${data.totalAppeticerPrice +
      data.totalMainCoursePrice +
      data.totalDessertPrice +
      data.totalBreadRicePrice
      }</h3>
    
    <h3>Box/Buffet Price : Rs ${data.buffet}</h3>
    <h3>GST: Rs ${Math.round(((data.totalAppeticerPrice +
      data.totalMainCoursePrice +
      data.totalDessertPrice +
      data.totalBreadRicePrice) *
      5) /
      100)}</h3>
    <h2>Grand Total : Rs ${Math.round((((data.totalAppeticerPrice +
        data.totalMainCoursePrice +
        data.totalDessertPrice +
        data.totalBreadRicePrice) *
        5) / 100) +
        (data.totalAppeticerPrice +
          data.totalMainCoursePrice +
          data.totalDessertPrice +
          data.totalBreadRicePrice +
          data.buffet * 1.05))
      }</h2>
  
  
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

      // transporter.sendMail({
        
        
      // });
      transporter.sendMail(mailOptions, (error, response) => {
        if (error) {
          return res.status(400).json({ success: false});
        } else {
          return res.status(200).json({ success: true });
        }
      });

      
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
};
