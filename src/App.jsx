import "./App.css"
import { useState } from "react"
import LabelInput from "./components/LabelInput.jsx"
import SectionDropdownWrapper from "./components/SectionDropdownWrapper.jsx"
import SectionNestedWrapper from "./components/SectionNestedWrapper.jsx"
import SectionSub from "./components/SectionSub.jsx"
import SectionCV from "./components/SectionCV.jsx"
import {SwitchButton2Vertical, SwitchButton3Horizonal} from "./components/SwitchButton.jsx"
import SectionCustomize from "./components/SectionCustomize.jsx"
import educationIcon from "./assets/imgs/education.svg"
import businessIcon from "./assets/imgs/business.svg"


export default function App() {

  //States:
  const [personalInfo, setPersonalInfo] = useState({
    userName: 'Joe Biden',
    email: 'president@whitehouse.gov',
    phoneNumber: '202-456-1414',
    address: '1600 Pennsylvania Avenue NW, Washington'
  })

  const [educationInfos, setEducationInfos] = useState([{
    id: Date.now(),
    school: 'University of Delaware',
    degree: 'Bachelor of Arts',
    from: '1961',
    to: '1965',
    location: 'Newark, Delaware, USA',
    majorCourses: 'History and Political Science'
  }])

  const [experienceInfos, setExperienceInfos] = useState([{
    id: Date.now(),
    company: 'Delaware Bar Association',
    title: 'Attorney',
    from: '1969',
    to: '1970',
    location: 'Delaware, USA',
    description: 'Practiced law after admission to the Delaware Bar.'
  }])

  const [contentOrCustomize, setContentOrCustomize] = useState('content')

  const handleAlignment = (event, newAlignment) => {
    setContentOrCustomize(newAlignment);
  };

  //InnerFunctions:
  function capitalFirstLetter(word) {
    if(!word) return ''
    return word[0].toUpperCase() + word.slice(1)
  }

  function createLabelInputsForSetObject(infoObject, setInfoObject) {    
      return Object.entries(infoObject).map(([key, value]) => (
        <LabelInput 
          key={`${infoObject.id}-${key}`}//everytime use '.map', require 'key'
          label={capitalFirstLetter(key)}
          inputId={key}
          inputValue={value}
          inputOnChange={
            e => setInfoObject(prev => ({
              ...prev,
              [key]: e.target.value
            }))
          }
          placeholder={value}
          type='text'
        />
      )
    )
  }

  function createLabelInputsForSetArray(infoObject, setInfoObject) {      
  //if state is Array(of object), onChange should call 'setState' and only change the corresponding object:
 
    return Object.entries(infoObject)
      .filter(([key]) => key !== 'id')
      .map(([key, value]) => (
        <LabelInput 
          key={key}//everytime use '.map', require 'key'
          label={capitalFirstLetter(key)}
          inputId={key}
          inputValue={value}
          inputOnChange={
            e => setInfoObject(prev => 
              prev.map(item => 
                item.id === infoObject.id 
                  ? {
                    ...item, 
                    [key]: e.target.value
                  } 
                  : item
              )
            )
          }
          placeholder={value}
          type='text'
        />
      )
    )
  }
  

  //Variables:
  const personalDetailInputEles = createLabelInputsForSetObject(personalInfo, setPersonalInfo);

  return (
    <>
        <section id="switch-button">
          <SwitchButton2Vertical 
            topName='Content'
            bottomName='Customize'
            alignment={contentOrCustomize}
            handleAlignment={handleAlignment}
          />
        </section>

        <section id='all-inputs-wrapper'>

          <SectionDropdownWrapper 
            sectionTitle='Personal Detail'
            id='personal-detail-section'
          >
            {personalDetailInputEles}
          </SectionDropdownWrapper>

          <SectionNestedWrapper
            iconSrc={educationIcon}
            id='education-section'
            sectionTitle='Education'
            handleAddSub={ () => 
              setEducationInfos(prev => [
                ...prev,
                {
                  id: Date.now(),
                  school: '',
                  degree: '',
                  from: '',
                  to: '',
                  location: '',
                  majorCourses: ''
                }
              ])

            }
          >
            {
              educationInfos.map(educationInfo => (
                <SectionSub
                  key={educationInfo.id}
                  sectionTitle={educationInfo.school}
                  handleDeleteSub={ () => 
                    setEducationInfos(
                      prev => prev.filter(
                        item => item.id !== educationInfo.id
                    ))}
                >
                  {
                    createLabelInputsForSetArray(educationInfo, setEducationInfos)
                  }
                </SectionSub>
              ))
            }
          </SectionNestedWrapper>

          <SectionNestedWrapper
            iconSrc={businessIcon}
            id='experience-section'
            sectionTitle='Experience'
            handleAddSub={ () => 
              setExperienceInfos(prev => [
                ...prev,
                {
                  id: Date.now(),
                  company: '',
                  title: '',
                  from: '',
                  to: '',
                  location: '',
                  description: ''
                }
              ])

            }
          >
            {
              experienceInfos.map(experienceInfo => (
                <SectionSub
                  key={experienceInfo.id}
                  sectionTitle={experienceInfo.company}
                  handleDeleteSub={ () => 
                    setExperienceInfos(
                      prev => prev.filter(
                        item => item.id !== experienceInfo.id
                    ))}
                >
                  {
                    createLabelInputsForSetArray(experienceInfo, setExperienceInfos)
                  }
                </SectionSub>
              ))
            }
          </SectionNestedWrapper>

        </section>

        <SectionCV
          personalInfo={personalInfo}
          educationInfos={educationInfos}
          experienceInfos={experienceInfos}
          >          
        </SectionCV>
    </>
  )
}