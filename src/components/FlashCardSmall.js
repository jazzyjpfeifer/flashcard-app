import React from 'react';
import { Link } from 'react-router-dom';

export default function FlashCardSmall(props) { 
    return (
        <Link
            className='col-1-of-4 flashcard-small flashcard-small-link' 
            to={`/numbers/${props.number}`}>{props.number}
        </Link>
    );
}