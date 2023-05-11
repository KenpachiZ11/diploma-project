import React from 'react';
import { Maps } from '../../components/Maps/Maps';
import './Contacts.scss';
import { Feedback } from '../../components/Feedback/Feedback';

export const Contacts = () => {
    // const [message, setMessage] = useState([]);

    // useEffect(() => {
    //     fetch("/contacts")
    //         .then(res => res.json())
    //         .then(data => setMessage(data.message));
    // }, []);
    return (
        // <div>{message}</div>
        <div className='page-contacts'>
            <div className='page-contacts__title'>Информация о нас</div>

            <Maps/>

            {/* <div className='page-contacts__info'>
                <div>Расположение офиса: Костомаровский переулок, 3с4</div>
                <div>Телефон для связи: +7 (499) 350-66-04</div>
                <div>Наша почта: info@ithub.ru</div>
            </div> */}

            <div className='page-contacts__feedback'><Feedback/></div>
        </div>
    )
}
