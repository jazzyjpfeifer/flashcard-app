import React from 'react';
import { Link } from 'react-router-dom';

class FlashCardSmall extends React.Component {
    render() {       
        return (
            <Link
                className='flashcard-small flashcard-small-link'
                to={`/numbers/${this.props.number}`}>{this.props.number}
            </Link>
        )
    }
}

export default FlashCardSmall;

