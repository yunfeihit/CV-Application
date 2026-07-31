import './SectionSub.css'
import arrowDown from '../assets/imgs/keyboard_arrow_down_36dp.svg'
import deleteIcon from '../assets/imgs/delete.svg'
import { useState } from 'react'

export default function SectionSub({ 
    sectionTitle,
    children,
    handleDeleteSub
}) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <section
            className="sub-section"
        >
            <div className="sub-section-title">
                <p>{sectionTitle}</p>
                <img 
                    src={deleteIcon} 
                    alt="delete-icon" 
                    onClick={handleDeleteSub}
                />
                <img 
                    src={arrowDown} 
                    className={`
                        arrow-taggle
                        ${isOpen ? 'arrow-rotate' : null}
                    `}                                      
                    alt='arrow-taggle'
                    onClick={() => setIsOpen(prev => !prev)}
                />
            </div>   
            <div className={`
                section-content
                sub-section-content
                ${isOpen ? null : 'section-hide'}
            `}>
                {children}
            </div>
        </section>
    )
}