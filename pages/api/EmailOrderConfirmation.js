let nodemailer = require('nodemailer')

export default function handler(req, res) {
  if (req.method === "POST") {
    try{
      const data = req.body;
      // if (!data.name || !data.email) {
      //   return res.status(400).send({ message: "Bad request" });
      // }
      let transporter = nodemailer.createTransport('smtps://caterninjadiy@gmail.com:wnetkdifdnuqytcm@smtp.gmail.com');
  
      try 
        {
        let mailOptions = {
        from: 'caterninjadiy@gmail.com',
        to:`${data.email}, takmanoj369@gmail.com, anup@caterninja.com, anurag@caterninja.com`,
  
        subject: `Order Placed ${data.name} | CaterNinja🤺| Party Quote.`,
  
        html: ` 
        
      <h3>Hello ${data.name} !! </h3><br>
      <h3>Thank you for choosing CaterNinja😊</h3><br>
  
      <h5>Thank you for placing order with us. Your Order request has been reached to us.</h5><br>
      <h5>Our team Ninja will connect you shortly.</h5>
      
      
      
        <h3>Name : ${data.name.toUpperCase()}</h3><br>
        <h3>Email : ${data.email}</h3><br>
        <h3>Mobile No : ${data.mobileno}</h3><br>
        <h3>City : ${data.city.toUpperCase()}</h3><br>
        <h3>Date: ${data.date}</h3><br>
        <h3>Veg Count : ${data.veg_c}</h3><br>
        <h3>nonVeg Count : ${data.nonveg_c}</h3><br>
        <h3>Guest Count : ${data.people}</h3><br>
        <h3>amount: ${data.amount}</h3><br>
        <h3>txnid : ${data.txnid}</h3><br>
        <h3>txnMessage : ${data.status.txnMessage}</h3><br>
        <h3>TxnTime : ${data.status.field1}</h3><br>
      
      
      
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
    catch(e){
      
    }
  }
   
  else{
    return res.json({ message: "Bad request" });
  }
};