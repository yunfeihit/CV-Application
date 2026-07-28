import "./SectionCV.css"
import { useState } from 'react'
import phoneIcon from "../assets/imgs/call_36dp.svg"
import emailIcon from "../assets/imgs/mail_36dp.svg"
import addressIcon from "../assets/imgs/home_36dp.svg"


export default function SectionCV({
    userName,
    email,
    phoneNumber,
    address
}) {
    
    return (
        <section id="section-CV">
            <div id="section-CV-header">
                <p>{userName}</p>
                <div id="section-CV-header-wrapper">
                    <div>
                        <img src={phoneIcon} alt="phone-number" />
                        <p>{phoneNumber}</p>
                    </div>
                    <div>
                        <img src={emailIcon} alt="email" />
                        <p>{email}</p>
                    </div>
                    <div>
                        <img src={addressIcon} alt="address" />
                        <p>{address}</p>
                    </div>
                </div>
            </div>
            <div id="section-CV-main">
                
            </div>
        </section>
    )
}