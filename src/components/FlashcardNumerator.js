import React, { Component } from 'react';

class FlashcardNumerator extends Component {
    render() {
        return (
            <div className='Flashcard-numerator'>
                {this.props.number}                
            </div>
        );
    }
}

export default FlashcardNumerator;