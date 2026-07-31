import { useState } from 'react'
import {SwitchButton2Vertical, SwitchButton3Horizonal} from "./SwitchButton.jsx"


export default function SectionCustomize() {

const [layout, setLayout] = useState('top')
const [themeColor, setThemeColor] = useState('rgb(14, 55, 78)')
const [font, setFont] = useState('Inter')

    return (
        <section
            id='customize-section'
        >
            <div>
                <p>Layout</p>
                <SwitchButton3Horizonal 
                    leftName='top'
                    middleName='left'
                    rightName='right'
                />
            </div>

            <div>
                <p>Color</p>
                <div></div>
            </div>

            <div>
                <p>Font</p>
                <SwitchButton3Horizonal 
                    leftName='Aa'
                    middleName='Aa'
                    rightName='Aa'
                />
            </div>

        </section>
    )
}
