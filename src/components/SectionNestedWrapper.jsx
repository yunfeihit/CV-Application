import "./SectionNestedWrapper.css"
import arrowDown from '../assets/imgs/keyboard_arrow_down_36dp.svg'
import addIcon from '../assets/imgs/add.svg'
import { useState } from 'react'


export default function SectionNestedWrapper({
    iconSrc,
    id,
    sectionTitle,
    handleAddSub,
    children
}) {
    const [isOpen, setIsOpen] = useState(true);
    const [rotation, setRotation] = useState(0);

    return (
        <section 
            className='wrapper-section'
            id={id}
        >

            <div className="nested-section-title">
                <img src={iconSrc} />
                <p>{sectionTitle}</p>
                <img 
                    src={addIcon}
                    className="add-icon"
                    style={{transform: `rotate(${rotation}deg)`}}
                    onClick={
                        e => {
                            handleAddSub(e);
                            setRotation(prev => prev + 360)
                        }
                    }
                    alt='add section'
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
                ${isOpen ? null : 'section-hide'}
            `}>
                {children}
            </div>
            
        </section>
    )
}
