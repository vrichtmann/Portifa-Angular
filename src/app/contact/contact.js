import { config } from "rxjs";

var nodemailer = required("nodemailer");

let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    port: 25,
    auth: {
        user: 'paddyloldev@gmail.com',
        pass: config.password
    },
    tls: {
        rejectUnauthorized: false
    }
});

let HelperOptions = {
    from: '"Patrick Parker" <vrichtmann@gmail.com',
    to: 'vrichtmann@gmail.com',
    subject: 'Hello, world',
    text: "Wow this tutorial is amazing!!"
}

transporter.sendMail(HelperOptions, (error, info) => {
    if(error){
      return  console.log(error);
    }
    console.log("This message was send!!!");
    console.log(info);
});