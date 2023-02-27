export default function (req, res) {
    //require('dotenv').config()
    
    let nodemailer = require('nodemailer')
    let smtpTransport = nodemailer.createTransport('smtps://caterninjadiy@gmail.com:wnetkdifdnuqytcm@smtp.gmail.com');

    // const transporter = nodemailer.createTransport({
    //   port: 465,
    //   host: "smtp.gmail.com",
    //   auth: {
    //     user: 'demo email',
    //     pass: process.env.password,
    //   },
    //   secure: true,
    // })
    const mailData = {
      from: 'takmanoj369@gmail.com',
      to: 'takmanoj369@gmail.com',
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
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
         
      
      
      <div>`
    }
    smtpTransport.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    res.status(200)
  }