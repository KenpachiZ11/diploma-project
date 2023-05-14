import React from 'react';
import { Maps } from '../../components/Maps/Maps';
import './Contacts.scss';
import { Feedback } from '../../components/Feedback/Feedback';

export const Contacts = () => {
    return (
        <div className='page-contacts'>
            <div className='page-contacts__title'>Информация о нас</div>
            <Maps/>
            <div className='page-contacts__feedback'><Feedback/></div>
        </div>
    )
}
