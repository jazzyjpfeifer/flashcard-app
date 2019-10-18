import React from 'react';
import { Link } from 'react-router-dom';

class FlashCardSmall extends React.Component {
    constructor(props) {
        super(props);
        this.handleDevice = this.handleDevice.bind(this);
    }

    handleDevice() {
        if(this.props.device === 'Desktop') {
            return 'col-1-of-4'
        } else if(this.props.device === 'Tablet Landscape') {
            return 'col-1-of-3'
        } else if (this.props.device === 'Tablet Portrait') {
            return 'col-1-of-2'
        } else {
            return '';
        }
    }

    render() {       
        return (
            <Link
                className={this.handleDevice() + ` flashcard-small flashcard-small-link`}
                to={`/numbers/${this.props.number}`}>{this.props.number}
            </Link>
        )
    }
}

export default FlashCardSmall;

