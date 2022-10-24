var nodeMailer = require('nodemailer');
var transport =  nodeMailer.createTransport({
     host:'smtp.gmail.com',  
     port:587,
     secure:false,
     requireTLS: true,
     auth:
     {
        user:'webarmanali.shaikh77@gmail.com',
        pass:'gmailarman@1432'
     }
    });
    var mailOptions= {
        from:'webarmanali.shaikh77@gmail.com',
        to:'webarmanali.shaikh77@gmail.com',
        subject:'test node mail',
        text:'Hello Arman Node js mail',
 }
 transport.sendMail(mailOptions,function(error, info)
 {
    if(error)
    {
        console.warn(error);
    } 
    else{
        console.warn("email has been sent", info.response);
    }
 })  