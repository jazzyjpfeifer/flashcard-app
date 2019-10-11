import React from 'react';

const random = Math.floor(Math.random() * 12) + 1;

export default function FlashCard(props) {
    const name = props.match.params.name;
    const correctAnswer = Number(name) * random;
    const [values, setValues] = React.useState({
        number1: Number(name),
        number2: random,
        correctAnswer: correctAnswer,
        answer: '',
        isCorrect: '',
        numCorrect: 0,
        numWrong: 0,
        isTicking: false,
        seconds: 60
    });

    const handleChange = answer => event => {
        setValues({ ...values, [answer]: event.target.value });
      };

      const Timer = () => {
          const startTime = Date.now() - values.seconds;
          setValues({...values, isTicking: true, seconds: startTime});
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        Timer();

        //Math Logic
        const newrandom = Math.floor(Math.random() * 12) + 1;
        const newcorrect = newrandom * name;
        if(Number(values.answer) === Number(values.correctAnswer)) {
        setValues({...values, isCorrect: true});
        setTimeout(function(){
            setValues({...values,         
                number2: newrandom,
                correctAnswer: newcorrect,
                answer: '',
                isCorrect: '',
                numCorrect: values.numCorrect + 1,
                isTicking: true
            });

        }, 1000);
        } else {
        setValues({...values, isCorrect: false});
        setTimeout(function(){
            setValues({...values,         
                isCorrect: '',
                numWrong: values.numWrong + 1
            });
        }, 1000);
        }

      }

      const shake = () => {
          if(values.isCorrect === false) {
              return 'animated-shake';
          }  else {
              return '';
          }
      } ;

    return (  
        <div className='flashcard'>
            <div className='flashcard-container'>
                <div className={`flashcard-card ${shake()}`}>
                { !(values.isCorrect) 
                    ?   //Wrong Answer Card
                    <div>
                        <div className='flashcard-equation'>
                            {name} x {values.number2}
                        </div>
                        <div className='flashcard-input'>
                            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                                <input
                                    id="answer"
                                    label="Answer"
                                    type="text"
                                    value={values.answer}
                                    autoFocus="autofocus"
                                    onChange={handleChange('answer')}
                                />
                            </form>
                        </div> 
                        <div className='button'>
                            <button onClick={handleSubmit} className='button'>
                                Submit
                            </button>
                        </div>
                    </div>
                    : //Correct Answer Card
                        <div className='flashcard-card animated-flipCard'>
				            <div className ='flashcard-equation'>
					            {values.correctAnswer} 
				            </div>
			            </div>
                }
                </div>                
			</div>
		</div>
    );

}
