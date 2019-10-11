import React from 'react';
import FlashCardSmall from './FlashCardSmall';

const row_1 = [1, 2, 3, 4];
const row_2 = [5, 6, 7, 8];
const row_3 = [9, 10, 11, 12];

export default function FlashCardList() {  
    return (
        <div className='flashcard-list'>
            <div className='flashcard-list-text-box'>
                <h2 className='flashcard-list-heading'>
                    Click on a number to start practicing
                </h2>
            </div>
            <div className='row'>
                {row_1.map((r) => (
                    <FlashCardSmall number={r}/>
                ))}
            </div>
            <div className='row'>
                {row_2.map((r) => (
                    <FlashCardSmall number={r}/>
                ))}
            </div>
            <div className='row'>
                {row_3.map((r) => (
                    <FlashCardSmall number={r}/>
                ))}
            </div>
        </div>
    );
}
