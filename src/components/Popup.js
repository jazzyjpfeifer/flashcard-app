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
                        <h3 className='heading-tertiary'>Your grade is:</h3>
                        <p>You answered {this.props.numCorrect} correctly:</p>
                        {this.props.numWrong <= 0 
                        ? 
                            <p>Good Job, you didn't miss any problems!</p>
                         : 
                            <p>Ooops, you missed {this.props.numWrong} out of {total}</p>
                        }
                        <p>You received {percent_formatted}%</p>
                    </div>
                    <div className='Popup-buttons'>
                        <Link to={''} onClick={() => window.location.reload(false)} className='btn btn-secondary mr-sm'>Retry</Link>
                        <Link to={'/numbers'} className='btn btn-secondary'>Back</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;