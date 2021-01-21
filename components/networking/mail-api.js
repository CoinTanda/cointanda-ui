import axios from "axios"
// EXAMPLE FROM https://stadtteilliebe.de/blog/serverless-contact-form

export const sendContactMail = async (senderMail, name, recipientMail, content, subject) => {
    const data = {
        senderMail,
        name,
        recipientMail,
        content,
        subject
    }

    try {
        const res = await axios({
            method: "post",
            url: "/api/contact",
            headers: {
                "Content-Type": "application/json"
            },
            data
        })
        return res

    } catch (error) {
        return error
    }
}
