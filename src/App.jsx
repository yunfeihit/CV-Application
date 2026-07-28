import "./App.css"
import { useState } from "react"
import LabelInput from "./components/LabelInput.jsx"
import SectionInformation from "./components/SectionInformation.jsx"
import SectionCV from "./components/SectionCV.jsx"

export default function App() {
  const [userName, setUserName] = useState('Joe Biden');
  const [email, setEmail] = useState('president@whitehouse.gov');
  const [phoneNumber, setPhoneNumber] = useState('202-456-1414')
  const [address, setAddress] = useState('1600 Pennsylvania Avenue NW, Washington')

  return (
    <>
        <SectionInformation 
          sectionTitle='Personal Detail'
          id='personal-detail-section'
        >
           <LabelInput 
            label="Full Name"
            inputId="username"
            inputValue={userName}
            inputOnChange={
              e => setUserName(e.target.value)
            }
            placeholder="Joe Biden"
            type="text"
          />

          <LabelInput 
            label="Email"
            inputId="email"
            inputValue={email}
            inputOnChange={
              e => setEmail(e.target.value)
            }
            placeholder="president@whitehouse.gov"
            type='email'
          />

          <LabelInput 
            label="Phone Number"
            inputId="phone-number"
            inputValue={phoneNumber}
            inputOnChange={
              e => setPhoneNumber(e.target.value)
            }
            placeholder="202-456-1414"
            type='text'
          />  

          <LabelInput 
            label="Address"
            inputId="address"
            inputValue={address}
            inputOnChange={
              e => setAddress(e.target.value)
            }
            placeholder="1600 Pennsylvania Avenue NW, Washington"
            type='text'
          />  

        </SectionInformation>

        <SectionCV
          userName={userName}
          email={email}
          phoneNumber={phoneNumber}
          address={address}
          >          
        </SectionCV>




    </>
  )
}