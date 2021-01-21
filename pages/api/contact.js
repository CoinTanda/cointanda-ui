import nodemailer from "nodemailer"
// EXAMPLE FROM https://stadtteilliebe.de/blog/serverless-contact-form

const transporter = nodemailer.createTransport({
    host: process.env.NEXT_JS_SMTP_HOST,
    port: process.env.NEXT_JS_SMTP_PORT,
    auth: {
        user: process.env.NEXT_JS_SMTP_USER,
        pass: process.env.NEXT_JS_SMTP_PASS
    }
})
//[1]

export default async (req, res) => {
    const { senderMail, name, content, recipientMail, subject } = req.body
//[2]

    // Check if fields are all filled
    if (senderMail === "" || name === "" || content === "" || recipientMail === "") {
        res.status(403).send("")
        return
    }
//[3]

    const mailerRes = await mailer({ senderMail, name, content, recipientMail, subject })
    res.send(mailerRes)
//[4]
}

const mailer = ({ senderMail, name, content, recipientMail, subject }) => {
    const sender =  `CoinTanda <${process.env.NEXT_JS_EMAIL_SENDER}>`
    const from = name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`
    const message = {
        from: sender,
        to: recipientMail,
        subject: subject,
        text: content,
        replyTo: from
    }
//[5]
    console.log(message)
    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
//[6]
}