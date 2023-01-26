import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function PastChoresPage() {
    const [value, onChange] = useState(new Date());
    
    // function onClickDay

    return (
        <div>
            <Calendar onChange={onChange} value={value}/>
        </div>
    )
}
