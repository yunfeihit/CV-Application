import './SectionCustomize.css'
import { useState } from 'react'
import {SwitchButton2Vertical, SwitchButton3Horizonal} from "./SwitchButton.jsx"


export default function SectionCustomize({
    className,
    font,
    handleChangeFont,
    color,
    handleChangeColor,
    pageAlignment,
    handleChangePageAlignment
}) {

const [layout, setLayout] = useState('top')
const [themeColor, setThemeColor] = useState('rgb(14, 55, 78)')

    return (
        <section
            id='customize-section'
            className={className}
        >
            <div>
                <p>Layout</p>
                <SwitchButton3Horizonal 
                    leftName='top'
                    middleName='left'
                    rightName='right'
                    alignment={pageAlignment}
                    handleAlignment={handleChangePageAlignment}
                />
            </div>

            <div>
                <p>Color</p>
                <div id='choose-color'>
                    <input 
                        type="color" 
                        value={color}
                        onChange={e => handleChangeColor(e.target.value)}
                    />
                </div>
            </div>

            <div>
                <p>Font</p>
                <SwitchButton3Horizonal 
                    leftName="Inter"
                    middleName="Cormorant Garamond"
                    rightName="JosefinSans"
                    alignment={font}
                    handleAlignment={handleChangeFont}
                />
            </div>

        </section>
    )
}
