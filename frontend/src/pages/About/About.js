// import React, {useState, useEffect} from 'react';
import Aside from './Aside/Aside';
import OwnerAside from './OwnerAside/OwnerAside';
import './Aside.scss'

export const About = () => {
    return (
        <div>
            <div className='aside-block'>
                <Aside/>
                <OwnerAside/>
            </div>
        </div>
    )
}
