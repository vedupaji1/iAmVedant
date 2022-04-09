const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const nodemailer = require("nodemailer");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const port = process.env.PORT || 8000;

app.post('/sendMail', (req, res) => {
    let mailData = req.body;
    console.log(mailData);
    if (mailData !== undefined) {
        let transporter = nodemailer.createTransport({
            host: "smtp-mail.outlook.com", // hostname
            secureConnection: false, // TLS requires secureConnection to be false
            port: 587, // port for secure SMTP
            tls: {
                ciphers: 'SSLv3'
            },
            auth: {
                user: 'vartmywork@hotmail.com',
                pass: '8490856735v@'
            }
        });

        let mailOptions = {
            from: 'vartmywork@hotmail.com',
            to: "www.panchalvedant1@gmail.com",
            subject: mailData.mailSubject,
            html: `<h1>Message From ${mailData.senderName}</h1><p>${mailData.realMessage}</p><p><b>Sender Mail Id Is ${mailData.senderMailId}</b</p>`
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.send({
                    isDone: false,
                    message: "Something Went Wrong"
                });
            } else {
                console.log('Email sent: ' + info.response);
                res.send({
                    isDone: true,
                    message: "Done"
                });
            }
        });
    } else {
        res.send({
            isDone: true,
            message: "Invalid Details"
        });
    }
})


app.use(express.static(path.join(__dirname, "client/build")));

app.get("/*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

http.listen(port, () => {
    console.log("Ok");
})

io.on('connection', (socket) => {
    console.log("Connected Done Using Sockets");
})