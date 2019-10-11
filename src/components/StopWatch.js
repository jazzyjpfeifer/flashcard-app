import React from 'react';
import Countdown from 'react-countdown-now';


export default function StopWatch(props) {

    const renderer = ({minutes, seconds, completed }) => {
        if (completed) {
            return <span>Times up!</span>
        } else {
            return <span>{minutes}:{seconds}</span>
        }
    }


    return (
        <div className='Stopwatch'>
            <Countdown date={Date.now() + 60000} autoStart={false} onTick={props.isTicking} renderer={renderer} />
        </div>
    )
}


