require('dotenv').config()

const nodemailer = require("nodemailer");

const EMAIL = process.env.email

const PASSWORD = process.env.password

export default function (req: any, res: any) {
    require('dotenv').config()
    
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.hostinger.co.uk",
      auth: {
        user: EMAIL,
        pass: PASSWORD,
      },
      secure: true,
    })
    const mailData = {
      from: EMAIL,
      to: EMAIL,
      subject: `New form submission - Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`
    }
    transporter.sendMail(mailData, function (err: any, info: any) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    res.status(200)
    res.send()
  }


// require('dotenv').config()

// const nodemailer = require("nodemailer");

// const EMAIL = process.env.email

// const PASSWORD = process.env.password

// export default async (req : any, res : any) => {
//     const transporter = nodemailer.createTransport({
//         port: 465,
//         host: "smtp.hostinger.co.uk",
//         auth: {
//             user: EMAIL,
//             pass: PASSWORD,
//         },
//         secure: true,
//     });

//     await new Promise((resolve, reject) => {
//         // verify connection configuration
//         transporter.verify(function (error: any, success: any) {
//             if (error) {
//                 console.log(error);
//                 reject(error);
//             } else {
//                 console.log("Server is ready");
//                 resolve(success);
//             }
//         });
//     });

//     const mailData = {
//         from: {
//             name: `${req.body.firstName} ${req.body.lastName}`,
//             address: "form@shed61.co.uk",
//         },
//         replyTo: req.body.email,
//         to: EMAIL,
//         subject: `New form submission from ${req.body.email}`,
//         text: `${req.body.message}`,
//         html: `${req.body.message} FROM ${req.body.email}`,
//     };

//     await new Promise((resolve, reject) => {
//         // send mail
//         transporter.sendMail(mailData, (err : any, info : any) => {
//             if (err) {
//                 console.error(err);
//                 reject(err);
//             } else {
//                 console.log(info);
//                 resolve(info);
//             }
//         });
//     });

//     res.status(200).json({ status: "OK" });
// };

// // export default function (req, res) {
// //
// //     console.log(req.body)
// //
// //     const PASSWORD = process.env.password
// //
// //     let nodemailer = require('nodemailer')
// //     const transporter = nodemailer.createTransport({
// //         port: 465,
// //         host: "smtp.hostinger.com",
// //         auth: {
// //             user: 'louis@shed61.co.uk',
// //             pass: PASSWORD
// //         },
// //         secure: true,
// //     });
// //
// //     const mailData = {
// //         from: 'form@shed61.co.uk',
// //         to: 'louis@shed61.co.uk',
// //         subject: `Message From ${req.body.email}`,
// //         text: `Sender Name - ${req.body.firstName} ${req.body.lastName}
// //         Message - ${req.body.message}`,
// //     }
// //
// //     transporter.sendMail(mailData, function (err, info) {
// //         if(err)
// //             console.log(err)
// //         else
// //             console.log(info)
// //     })
// //
// //     res.send()
// //
// //     res.status(200)
// // }