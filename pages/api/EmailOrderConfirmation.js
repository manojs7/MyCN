let nodemailer = require('nodemailer')

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email) {
      return res.status(400).send({ message: "Parameter missing" });
    }
    let transporter = nodemailer.createTransport(
      "smtps://caterninjadiy@gmail.com:wnetkdifdnuqytcm@smtp.gmail.com"
    );

    try {
      let mailOptions = {
        from: "caterninjadiy@gmail.com",
        // to: `caterninjadiy@gmail.com, ${data.email}, 8n62vi4t8_5o1fxq4@parser.zohocrm.com, lqruate0s_j7e8lb8@parser.zohocrm.com`,
        to:`${data.email}, takmanoj369@gmail.com, anup@caterninja.com, anurag@caterninja.com`,
  
        subject: `Order Placed ${data.name} | CaterNinja🤺| Order Confirmation.`,
        html: ` 

      <html>
        <head>
      <style type="text/css">
    body {
        padding-top: 0;
        padding-bottom: 0;
        padding-top: 0;
        padding-bottom: 0;
        background-repeat: repeat;
        width: 100% !important;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        font-family: Helvetica, Arial, serif;
        margin: 0px;
        background: #C1C1C1;
    }
</style>
</head>
      <body>
      <div style="width: 600px; margin: auto;">

      <div style="background-color: #BE2D30; height: 60px; text-align: center;">
            <h2 style="padding-block: 20px; font-size: 20px; color: #fff; font-weight: 300;">Order Confirmation ${data.name.toUpperCase()}</h2>
        </div>
        <div style="text-align: center; background-color: #ebebeb; height: 100px;">
            <img src="https://www.caterninja.com/frontend/web/images/app_img/site_logo.png" style="padding-block: 18px;"
                width="258" height="69" alt="logo" />
        </div>
        <div style="background-color: #f7f7f7; display: flex; padding: 30px;">
            <div>
                <p>Name:</p>
                <p>Email:</p>
                <p>Phone:</p>
                <p>Veg Pax:</p>
                <p>NV Pax:</p>
                <p>Cuisine:</p>
                <p>Ocassion:</p>
                <p>City:</p>
                <p>Event Date:</p>
                <p>Payment Details: </p>
                <p>Amount</p>
               <p>Txnid </p>
               <p>bank_ref_num </p>
               <p>TxnTime </p>
            </div>
            <div style="margin-left: 120px;">
                <p style="font-weight: bold;">${data.name.toUpperCase()}</p>
                <a>${data.email}</a>
                <p>${data.mobileno}</p>
                <p>${data.veg_c}</p>
                <p>${data.nonveg_c}</p>
                <p>${data.cuisine}</p>
                <p>${data.occasion}</p>
                <p>${data.city}</p>
                <p>${data.date}</p>
                <p>.....</p>
                <p> ${data.amount}</p>
               <p> ${data.txnid}</p>
               <p> ${data.status.bank_ref_num}</p>
                <p>${data.status.addedon}</p>
            </div>
        </div>
  
        <div style="background-color: #ebebeb; padding: 30px;">
          <div style="margin-bottom: 40px;">
              <h4 style="margin-bottom: 30px;">Appetizer:</h4>
              
              <div style="margin-left: 30px;">
              
                  <ol>
                  ${data.appetizer
                    .map((array, index) => {
                      return array.quantity
                        ? `<li key="${array.id}_${index}">${array.name} (${array.quantity} ${array.Qtype})</li>`
                        : null;
                    })
                    .join("")}
                  </ol>
              </div>
          </div>
        </div>

        <div style="background-color: #ebebeb; padding: 30px;">
        <div style="margin-bottom: 40px;">
            <h4 style="margin-bottom: 30px;">MainCourse:</h4>
            
            <div style="margin-left: 30px;">
            
                <ol>
                ${data.mainCourse
                  .map((array, index) => {
                    return array.quantity
                      ? `<li key="${array.id}_${index}">${array.name} (${array.quantity} ${array.Qtype})</li>`
                      : null;
                  })
                  .join("")}
                </ol>
            </div>
        </div>
      </div>
    
      <div style="background-color: #ebebeb; padding: 30px;">
      <div style="margin-bottom: 40px;">
          <h4 style="margin-bottom: 30px;">BreadRice :</h4>
          
          <div style="margin-left: 30px;">
          
              <ol>
              ${data.breadRice
                .map((array, index) => {
                  return array.quantity
                    ? `<li key="${array.id}_${index}">${array.name} (${array.quantity} ${array.Qtype})</li>`
                    : null;
                })
                .join("")}
              </ol>
          </div>
      </div>
    </div>
    <div style="background-color: #ebebeb; padding: 30px;">
      <div style="margin-bottom: 40px;">
          <h4 style="margin-bottom: 30px;">Desserts:</h4>
          
          <div style="margin-left: 30px;">
          
              <ol>
              ${data.dessert?
                data.dessert
                .map((array, index) => {
                  return array.quantity
                    ? `<li key="${array.id}_${index}">${array.name} (${array.quantity} ${array.Qtype})</li>`
                    : null;
                })
                :null
                .join("")}
              </ol>
          </div>
      </div>
    </div>
   
    <div style="background-color: #f7f7f7; display: flex; padding: 30px; justify-content: space-between;">
            <div>
                <p>Sub Total:</p>
                <p>Box/Buffet Price:</p>
                <p>GST:</p>
                <p>Grand Total:</p>
            </div>
            <div>
                <p>Rs ${data.totalPrice}</p>
                <p>${
                  data.buffet > 0 ? "NinjaBuffet Rs" : "NinjaBox(Free)"
                } ${data.buffet.toLocaleString("en-US")}</p>
                <p>Rs ${data.GST}</p>
                <h3 style="font-weight: bolder;">Rs ${data.grandTotal}</h3>
            </div>
      </div>
    </div>

    <div style="height: 100px; background-color: black;">
    <h3>Call us in case of query, on +917738096313</h3>
      <h3 style=" color: white; text-align: center; padding-block: 35px;">Thank you ! Visit Again !</h3>
    </div>

    </body>

</html>
    
    
       
          `,
      };
      let appt = data.appetizer;

      transporter.sendMail(mailOptions, async(error, response) => {
        if (error) {
          res.json({ success: false, message: error });
        } else {
          await res.json({ success: true, message: mailOptions });
        }
      });
    } catch (err) {
      return res.json({ message: err.message });
    }
  } else {
    return res.json({ message: "Bad request" });
  }
}