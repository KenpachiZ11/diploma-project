import React from 'react'
import './AsideBlockPanel.scss'
import { FilterComponentsCard } from '../../../components/FilterComponentsCard/FilterComponentsCard'

const Aside = () => {
    return (
        <div className='aside-block__panel'>Aside
            <div >
                <FilterComponentsCard />
            </div>
        </div>
    )
}

export default Aside