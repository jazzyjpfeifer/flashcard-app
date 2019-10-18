import React from 'react';
import Popup from './Popup';

const random = Math.floor(Math.random() * 12) + 1;

class FlashCard extends React.Component {
    
    constructor(props) {
        super(props)

        const number1 = Number(props.match.params.name);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.generateNewProblem = this.generateNewProblem.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
        this.shake = this.shake.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        this.closePopup = this.closePopup.bind(this);

        this.state = {
            numerator: number1,
            denominator: random,
            correctAnswer: number1 * random,
            answer: '',
            isCorrect: '',
            numCorrect: 0,
            numWrong: 0,
            clockStarted: '',
            seconds: 60,
            showPopup: false
        }

        this.timer = 0;
    }


    handleChange(event) {
        this.setState({answer: event.target.value});
      }

    handleSubmit = (e) => {
        e.preventDefault();
        this.checkAnswer();
    };

    checkAnswer() {
        //Starting Clock after submitting
        this.startTimer();

        //Checking answer logic here with time delay to generate new problem
        const answer = Number(this.state.answer);
        if(answer === this.state.correctAnswer) {
            this.setState({ 
                isCorrect: true
            });
            setTimeout(() => {
                this.generateNewProblem();
            }, 1000)
        } else {
            this.setState({ 
                isCorrect: false
            });
            setTimeout(() => {
                this.setState({
                    isCorrect: '',
                    answer: '',
                    numWrong: this.state.numWrong + 1,
                    clockStarted: true
                })
            }, 1000)
        } 
    };

    generateNewProblem() {
        const newRandom = Math.floor(Math.random() * 12) + 1;
        const newCorrect = newRandom * this.state.numerator;
        this.setState({
            denominator: newRandom,
            correctAnswer: newCorrect,
            answer: '',
            isCorrect: '',
            numCorrect: this.state.numCorrect + 1,
            clockStarted: true
        })
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
          time: this.secondsToTime(seconds),
          seconds: seconds,
        });
        
        // Check if we're at zero.
        if (seconds === 0) { 
          clearInterval(this.timer);
          this.setState({
            showPopup: true,
            seconds: 60,
            clockStarted: ''
          });

        }
      }

    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
        let divisor_for_milliseconds = divisor_for_seconds % 60;
        let milliseconds = Math.ceil(divisor_for_milliseconds);
    
        let obj = {
          "h": hours,
          "m": minutes,
          "s": seconds,
          "ms": milliseconds
        };
        return obj;
      }
      
      startTimer() {
          if (this.timer === 0 && this.state.seconds > 0) {
              this.timer = setInterval(this.countDown, 1000);
            }

            this.setState({
                time: {m: 1}
            })
    }

      componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
      }

      closePopup() {
        this.setState({
            showPopup: false
        });
        this.timer = 0;
      }

      shake() {
          if(this.state.isCorrect === false) {
              return 'animated-shake';
          }  else {
              return '';
          }
      }

    render() {
        return (  
            <div className='flashcard'>
                <Popup 
                    className='flashcard-popup'
                    showPopup={this.state.showPopup}
                    numCorrect={this.state.numCorrect}
                    numWrong={this.state.numWrong}
                    name={this.state.numerator}
                />
                { (this.state.clockStarted)
                ?
                <div className='timer'>
                     {this.state.seconds}
                </div>
                :
                null
                }  
                <div className='flashcard-container'>
                    <div className={`flashcard-card ${this.shake()}`}>
                    { !(this.state.isCorrect) 
                        ?   //Wrong Answer Card
                        <div>
                            <div className='flashcard-equation'>
                                {this.state.numerator} x {this.state.denominator}
                            </div>
                            <div className='flashcard-input'>
                                <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                                    <input
                                        id="answer"
                                        label="Answer"
                                        type="text"
                                        value={this.state.answer}
                                        autoFocus="autofocus"
                                        onChange={this.handleChange}
                                    />
                                </form>
                            </div> 
                        </div>
                        : //Correct Answer Card
                            <div className='flashcard-card animated-flipCard'>
                                <div className ='flashcard-equation'>
                                    {this.state.correctAnswer} 
                                </div>
                            </div>
                    }
                    </div>                
                </div>
            </div>
        );
        
    }

   

}

export default FlashCard;
