import React, { Component } from 'react';
import Second from './Second';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            time: {}, 
            seconds: 60,
            started: true // this.props.clockStarted
        };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
      }

          
      secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
    
        let obj = {
          "h": hours,
          "m": minutes,
          "s": seconds
        };
        return obj;
      }

      componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
      }
    
      startTimer() {
        this.setState({
            started: this.props.clockStarted
        });
            if (this.timer === 0 && this.state.seconds > 0) {
                this.timer = setInterval(this.countDown, 1000);
              }
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
        }
      }

      beginCountdown() {
        if(this.state.started) {
          this.startTimer();
        }

      } 

    render() {
        return (
            <div className='Timer'>
                <div>
                  <Second value={this.state.seconds}/>
                </div>
                <button onClick={this.startTimer}>Start</button>
            </div>
        );
    }
}

export default Timer;