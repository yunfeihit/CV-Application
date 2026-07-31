import './SectionDropdownWrapper.css'
import arrowDown from '../assets/imgs/keyboard_arrow_down_36dp.svg'
import { useState } from 'react'

export default function SectionDropdownWrapper({ 
    id,
    sectionTitle,
    children
}) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <section 
            id={id}
            className='dropdown-wrapper-section'
        >
            <div className="dropdown-section-title">
                <p>{sectionTitle}</p>
                <img 
                    src={arrowDown} 
                    className={`
                        arrow-taggle
                        ${isOpen ? 'rotate' : null}
                    `}                                      
                    alt='arrow-taggle'
                    onClick={() => setIsOpen(prev => !prev)}
                />
            </div>   
            <div className={`
                section-content
                ${isOpen ? null : 'section-hide'}
            `}>
                {children}
            </div>
        </section>
    )
}