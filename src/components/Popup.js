import React from 'react';
import { Link } from 'react-router-dom';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.hide = this.hide.bind(this);
        this.state = {
            hide: this.props.showPopup
        }
    }

    hide(){
        this.setState({
            hide: true
        })
    }

    emojiGrade() {
        const total = this.props.numCorrect + this.props.numWrong;
        const percent = (this.props.numCorrect / total) * 100;

        if(percent >= 90) {
            return (
                <div>
                    <p>Good Job! You answered {this.props.numCorrect} out of {total} correctly.</p>
                    <svg className='Popup-icon'>
                        <use xlinkHref='/img/sprite.svg#icon-emoji-happy'></use>
                    </svg>
                    <p>Keep up the good work!</p>
                </div>
            )
        } else if(percent < 90 && percent >=70) {
            return (
                <div>
                <p>Ooops, you answered {this.props.numCorrect} out of {total} correctly.</p>
                <svg className='Popup-icon'>
                    <use xlinkHref='/img/sprite.svg#icon-emoji-neutral'></use>
                </svg>
                <p>Good work and keep on practicing!</p>
            </div>
            )
        } else return (
            <div>
                <p>Ooops, you answered {this.props.numCorrect} out of {total} correctly.</p>
                <svg className='Popup-icon'>
                    <use xlinkHref='/img/sprite.svg#icon-emoji-sad'></use>
                </svg>
                <p>Try again and keep on practicing!</p>
            </div>
        )
    }

    render() {
        const total = this.props.numCorrect + this.props.numWrong;
        const percent = (this.props.numCorrect / total) * 100;
        const percent_formatted = percent.toFixed(2);
        if(!this.props.showPopup || this.state.hide) {
            return null;
        }
        return (
            <div className='Popup'>
                <div className='Popup-content'>
                    <div className='Popup-content-text'>
                        <h2 className='heading-secondary Popup-heading'>
                            Time is up!
                            <svg className='Popup-icon Popup-icon-stopwatch animated-wobble'>
                                <use xlinkHref='/img/sprite.svg#icon-stopwatch'></use>
                            </svg>
                            </h2>
                        <h3 className='heading-tertiary'>You scored {percent_formatted}%</h3>
                        {this.emojiGrade()}
                    </div>
                    <div className='Popup-buttons'>
                        <Link to={`/numbers/${this.props.name}`} onClick={() => window.location.reload(false)} className='btn btn-secondary mr-sm'>Retry</Link>
                        <Link to={'/numbers'} className='btn btn-secondary'>Back</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;