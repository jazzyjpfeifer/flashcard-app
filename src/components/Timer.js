import React, { Component } from 'react';


class Timer extends Component {  
  _isMounted = false;

  state = {
      timerState: 0,
      timerTime: 60000,
      show: false
    }

    startTimer = () => {
      this.setState({
        timerOn: true,
        timerTime: this.state.timerTime,
        timerStart: this.state.timerTime
      });
      this.timer = setInterval(() => {
        const newTime = this.state.timerTime - 10;
        if (newTime >= 0) {
          this.setState({
            timerTime: newTime
          });
        } else {
          clearInterval(this.timer);
          this.handleTimerOff();
          this.handleShowPopup();
          this.handleInputType();
          this.setState({ timerOn: false, show: true, isMounted: false });
        }
      }, 10);
    };

    resetTimer = () => {
      if (this.state.timerOn === false) {
        this.setState({
          timerTime: this.state.timerStart
        });
      }
    };

    componentDidMount() {
      this._isMounted = true;
      if (this._isMounted) {
        this.startTimer();
      }
    }

    componentWillUnmount() {
      this._isMounted = false;
    }

    handleTimerOff = () => {
      this.props.timerOff(false);
    }

    handleShowPopup = () => {
      this.props.show(true);
    }

    handleInputType = () => {
      this.props.type('hidden');
    }



    render() {
      const { timerTime } = this.state;
      let millsecs = ("0" + (Math.floor((timerTime / 100) % 60) % 60)).slice(-2);
      let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
      let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);

        return (
            <div className='Timer'>
                <div>
                {minutes} : {seconds} : {millsecs}
                </div>
            </div>
        );
    }
}

export default Timer;