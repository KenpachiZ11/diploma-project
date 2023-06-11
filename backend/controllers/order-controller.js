const nodemailer = require('nodemailer');
const orderToEmail = (req, res) => {

    let transport  = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'GlobalAdmin@gmail.ru',
            pass: 'password'
        }
    });

    // const mailData = {
    //     from: 'youremail@gmail.com',  // sender address
    //     to: req.body.to,   // list of receivers
    //     subject: 'Sending Email using Node.js',
    //     text: 'That was easy!',
    //     html: '<b>Hey there! </b>',
    // };

    let mailOptions = {
        from: 'danek001@mail.ru',
        // to: 
        to: 'danek001@mail.ru',
        subject: 'req.body.subject',
        text: 'req.body.text',
        // html: 
        //     `
        //         <div style="padding:10px;border-style: ridge">
        //         <h3>Details Order</h3>
        //         <ul>
        //             <li>Email: ${req.body.to}</li>
        //             <li>Subject: ${req.body.subject}</li>
        //             <li>Message: ${req.body.text}</li>
        //         </ul>
        //     `
    };
            
            // <li>Message: ${req.body.info.title}</li>
            // <li>Message: ${req.body.info.description}</li>
            // <li>Message: ${req.body.info.author}</li>
            // <li>Message: ${req.body.info.linkImage}</li>

    console.log(mailOptions)

    transport.sendMail(mailOptions, function(error, info){
        if(error) {
            res.json({status: true, respMesg: 'Email Sent Successfully'})
        } else {
            res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
    });
};


const getOrder = (req, res) => {
    res.json({ message: "Hello from server 'getContacts" });
}

module.exports = {
    orderToEmail,
    getOrder
};