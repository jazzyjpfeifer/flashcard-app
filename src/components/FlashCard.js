import React from 'react';
import Popup from './Popup';
import Timer from './Timer';

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
        this.flip = this.flip.bind(this);
        this.closePopup = this.closePopup.bind(this);
        this.handleTimer = this.handleTimer.bind(this);

        this.state = {
            numerator: number1,
            denominator: random,
            correctAnswer: number1 * random,
            answer: '',
            isCorrect: '',
            numCorrect: 0,
            numWrong: 0,
            timerOn: '',
            showPopup: false,
            inputType: 'text'
        }

    }

    handleChange(event) {
        this.setState({answer: event.target.value});
      }

    handleSubmit = (e) => {
        e.preventDefault();
        this.checkAnswer();
    };

    checkAnswer() {
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
                    timerOn: true,
                    focus: false
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
            timerOn: true
        })
    }

      closePopup() {
        this.setState({
            showPopup: false
        });
      }

      shake() {
          if(this.state.isCorrect === false) {
              return 'animated-shake';
          }  else {
              return '';
          }
      }

      flip() {
          if(this.state.isCorrect === true) {
              return 'animated-flipCard';
          } else {
              return '';
          }
      };
      
      // Update state from Timer Component
      handleTimer = (timerOff) => {
          this.setState({timerOn: timerOff})
      };

      handleShowPopUp = (show) => {
          this.setState({showPopup: show})
      };

      handleInputType = (type) => {
          this.setState({inputType: type})
      };

    render() {
        return (  
            <div className='flashcard'>
                <Popup 
                    className='flashcard-popup'
                    showPopup={this.state.showPopup}
                    numCorrect={this.state.numCorrect}
                    numWrong={this.state.numWrong}
                    name={this.state.numerator}
                    show = {this.handleShowPopUp}
                />
                { (this.state.timerOn)
                ?
                <Timer 
                    timerOn={this.state.timerOn} 
                    timerOff = {this.handleTimer} 
                    show = {this.handleShowPopUp}
                    type = {this.handleInputType}
                />
                :
                null
                }  
                <div className='flashcard-container'>
                    <div className={`flashcard-card ${this.shake()} ${this.flip()}`}>
                    { !(this.state.isCorrect) 
                        ?   //Wrong Answer Card
                        <div className='flashcard-content'>
                            <div className='flashcard-equation'>
                                <span className='flashcard-equation-number'>{this.state.numerator}</span>
                                <span className='flashcard-equation-operator'>x</span>
                                <span className='flashcard-equation-number'>{this.state.denominator}</span> 
                            </div>
                            <div className='flashcard-input'>
                                <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                                    <input
                                        id="answer"
                                        label="Answer"
                                        value={this.state.answer}
                                        autoFocus={true}
                                        type={this.state.inputType}
                                        onChange={this.handleChange}
                                    />
                                </form>
                            </div> 
                        </div>
                        : //Correct Answer Card
                            <div className='flashcard-content'>
                                <div className='flashcard-equation'>
                                    <span className='flashcard-equation-number'>{this.state.numerator}</span>
                                    <span className='flashcard-equation-operator'>x</span>
                                    <span className='flashcard-equation-number'>{this.state.denominator}</span> 
                                </div>
                                <div className='flashcard-correct-answer'>
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
