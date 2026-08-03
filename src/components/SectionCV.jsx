import "./SectionCV.css"
import phoneIcon from "../assets/imgs/call_36dp.svg"
import emailIcon from "../assets/imgs/mail_36dp.svg"
import addressIcon from "../assets/imgs/home_36dp.svg"

function EducationSub({educationInfo}) {
    if(educationInfo.school) {
        return (
                <div className='education-sub'>
                    <p>{
                    educationInfo.from && `${educationInfo.from}-${educationInfo.to}`
                    }</p>
                    <p>{educationInfo.school}</p>
                    <p>{educationInfo.degree}</p>
                    <p>{educationInfo.location}</p>
                    <p>{educationInfo.majorCourses}</p>
                </div>
            )
    }
    
}

function ExperienceSub({experienceInfo}) {
    if(experienceInfo.company) {
        return (
                <div className='experience-sub'>
                    <p>{
                    experienceInfo.from && `${experienceInfo.from}-${experienceInfo.to}`
                    }</p>
                    <p>{experienceInfo.company}</p>
                    <p>{experienceInfo.title}</p>
                    <p>{experienceInfo.location}</p>
                    <p>{experienceInfo.description}</p>
                </div>
            )
    }
    
}


export default function SectionCV({
    personalInfo,
    educationInfos,
    experienceInfos,
    font,
    color
}) {
    
    return (
        <section 
        id="section-CV"
        style={{fontFamily: font}}
        >
            <div 
                id="section-CV-header"
                style={{backgroundColor: color}}
            >
                <p>{personalInfo.userName}</p>
                <div id="section-CV-header-wrapper">
                    <div>
                        <img src={phoneIcon} alt="phone-number" />
                        <p>{personalInfo.phoneNumber}</p>
                    </div>
                    <div>
                        <img src={emailIcon} alt="email" />
                        <p>{personalInfo.email}</p>
                    </div>
                    <div>
                        <img src={addressIcon} alt="address" />
                        <p>{personalInfo.address}</p>
                    </div>
                </div>
            </div>

            <div id="section-CV-main">
                <p id='education-title'>Education</p>
                <div id='education-sections'>
                    {educationInfos.map(educationInfo => (
                        <EducationSub 
                            key={educationInfo.id}
                            educationInfo={educationInfo}
                        />
                    ))}
                </div>

                <p id="experience-title">Experience</p>
                <div id='experience-sections'>
                    {experienceInfos.map(experienceInfo => (
                        <ExperienceSub 
                            key={experienceInfo.id}
                            experienceInfo={experienceInfo}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
