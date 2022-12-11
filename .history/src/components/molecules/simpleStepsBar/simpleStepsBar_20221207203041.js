import React from 'react'
import SimpleStepsColumn from '../../atoms/simpleStepsColumn/simpleStepsColumn'
import IconOne from '../../../assets/Icon-1.svg'
import IconSec from '../../../assets/Icon-2.svg'
import IconThr from '../../../assets/Icon-3.svg'
import IconFou from '../../../assets/Icon-4.svg'

const SimpleStepsBar = () => {
    return (
        <div className='simpleStepsBar'>
            <SimpleStepsColumn source={IconOne} simpleStepsColumnTitle={'Wybierz rzeczy'} />
            <SimpleStepsColumn source={IconSec} simpleStepsColumnTitle={'Spakuj je'} />
            <SimpleStepsColumn source={IconThr} simpleStepsColumnTitle={'Zdecyduj komu chcesz pomóc'} />
            <SimpleStepsColumn source={IconFou} simpleStepsColumnTitle={ } />
        </div>
    )
}

export default SimpleStepsBar
