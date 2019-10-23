import React from 'react';
import FlashCardSmall from './FlashCardSmall';

const row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];



class FlashCardList extends React.Component {
    render () {
        return  (
            <div className='flashcard-list'>
                <div className='flashcard-list-text-box'>
                    <h2 className='flashcard-list-heading'>
                        Select a number to start practicing
                    </h2>
                </div>
                <div className='flashcard-list-grid'>
                    {row.map((r) => (
                        <FlashCardSmall number={r} key={r}/>
                    ))}
                </div>
            </div>

        )
    };
   

}

export default FlashCardList;
