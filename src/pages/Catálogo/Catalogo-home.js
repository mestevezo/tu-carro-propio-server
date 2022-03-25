import React from 'react'
import { homeObjThree, homeObjFour } from './CatalogoData'
import { InfoSection } from '../../components'

const CatalogoHome = () => {
    return (
        <>
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
        </>
    )
}

export default CatalogoHome;