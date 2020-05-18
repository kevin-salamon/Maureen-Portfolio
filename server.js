const nodemailer = require("nodemailer");

console.log($("#inputName").val());

async function main() {

let transporter = nodemailer.createTransport({
    host: "localhost",
    port: 3000,
    secure: false, // true for 465, false for other ports
    auth: {
    user: testAccount.user, // generated ethereal user
    pass: testAccount.pass, // generated ethereal password
    },
});

// send mail with defined transport object
let info = await transporter.sendMail({
    from: `"${$("#inputName").val()}" <${$("#inputEmail").val()}>`, // sender address
    to: "theksalamon@gmail.com",
    subject: "Form Submission from Personal Website", // Subject line
    text: "Test", // plain text body
    html: "<b>Test</b>", // html body
});

console.log("Message sent: %s", info.messageId);

}

$("#send-button").on("click", function(event) {
    event.preventDefault();
    main().catch(console.error);
})
