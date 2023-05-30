import React from 'react'
import nodemailer from "nodemailer"

async function contactAPI(req, res) {
    const {name, email, message} = req.body
    //regex test to see if it is an email

    const data = {
        name, email, message
    }

    const transporter = nodemailer.createTransport({
        host: "susceramics7@gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.user,
            pass: process.env.ppass,
        },
    })

    try {
        const mail = await transporter.sendMail{
            
        }

        return res.status(200).json({message:"success"})  

    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Could not send the email. Your message was not sent."})
    }
}

export default contact