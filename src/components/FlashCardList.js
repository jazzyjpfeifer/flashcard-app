import React from 'react';
import FlashCardSmall from './FlashCardSmall';

const row_lg_1 = [1, 2, 3, 4];
const row_lg_2 = [5, 6, 7, 8];
const row_lg_3 = [9, 10, 11, 12];

const row_sm_1 = [1, 2, 3];
const row_sm_2 = [4, 5, 6];
const row_sm_3 = [7, 8, 9];
const row_sm_4 = [10,11, 12];

const row_xsm_1 = [1,2];
const row_xsm_2 = [3,4];
const row_xsm_3 = [5,6];
const row_xsm_4 = [7,8];
const row_xsm_5 = [9,10];
const row_xsm_6 = [11,12];

const row_phone_1 = [1];
const row_phone_2 = [2];
const row_phone_3 = [3];
const row_phone_4 = [4];
const row_phone_5 = [5];
const row_phone_6 = [6];
const row_phone_7 = [7];
const row_phone_8 = [8];
const row_phone_9 = [9];
const row_phone_10 = [10];
const row_phone_11 = [11];
const row_phone_12 = [12];




class FlashCardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: window.innerHeight,
            width: window.innerWidth,
            device: 'Desktop'
        }
        this.windowSize = this.windowSize.bind(this);
        this.handleDevice = this.handleDevice.bind(this);
    }
    componentDidMount() {
        window.addEventListener("resize", this.windowSize);
      }

    windowSize() {
        this.setState({
            height: window.innerHeight, 
            width: window.innerWidth,
            isMobile: window.innerWidth < 1200,
            isMobile_sm: window.innerWidth < 900
        });
        if(this.state.width < 600) {
            this.setState({
                device: 'Phone'
            });
        } else if(this.state.width < 900 && this.state.width > 600) {
            this.setState({
                device: 'Tablet Portrait'
            });
        } else if(this.state.width > 900 && this.state.width < 1200) {
            this.setState({
                device: 'Tablet Landscape'
            });
        } else
            this.setState({
                device: 'Desktop'
            });
    }

    handleDevice() {
        if(this.state.device === 'Desktop') {
            return (
                <div>
                <div className='row'>
                    {row_lg_1.map((r) => (
                        <FlashCardSmall number={r} device={this.state.device} key={r}/>
                    ))}
                </div>
                <div className='row'>
                    {row_lg_2.map((r) => (
                        <FlashCardSmall number={r} device={this.state.device} key={r}/>
                    ))}
                </div>
                <div className='row'>
                    {row_lg_3.map((r) => (
                        <FlashCardSmall number={r} device={this.state.device} key={r}/>
                    ))}
                </div>
            </div>
            )

        } else if(this.state.device === 'Tablet Landscape') {
            return (
                <div>
                    <div className='row'>
                        {row_sm_1.map((r) => (
                            <FlashCardSmall number={r} device={this.state.device} key={r}/>
                        ))}
                    </div>
                    <div className='row'>
                        {row_sm_2.map((r) => (
                            <FlashCardSmall number={r} device={this.state.device} key={r}/>
                        ))}
                    </div>
                    <div className='row'>
                        {row_sm_3.map((r) => (
                            <FlashCardSmall number={r} device={this.state.device} key={r}/>
                        ))}
                    </div>
                    <div className='row'>
                        {row_sm_4.map((r) => (
                            <FlashCardSmall number={r} device={this.state.device} key={r}/>
                        ))}
                    </div>
                </div>
            )
        } else if(this.state.device === 'Tablet Portrait') {
            return (
                <div>
                    <div className='row'>
                        {row_xsm_1.map((r) => (
                            <FlashCardSmall number={r} device={this.state.device} key={r}/>
                        ))}
                    </div>
                    <div className='row'>
                        {row_xsm_2.map((r) => (
                            <FlashCardSmall number={r} device={this.state.device} key={r}/>
                        ))}
                    </div>
                    <div className='row'>
                        {row_xsm_3.map((r) => (
                            <FlashCardSmall number={r} device={this.state.device} key={r}/>
                        ))}
                    </div>
                    <div className='row'>
                        {row_xsm_4.map((r) => (
                            <FlashCardSmall number={r} device={this.state.device} key={r}/>
                        ))}
                    </div>
                    <div className='row'>
                        {row_xsm_5.map((r) => (
                            <FlashCardSmall number={r} device={this.state.device} key={r}/>
                        ))}
                    </div>
                    <div className='row'>
                        {row_xsm_6.map((r) => (
                            <FlashCardSmall number={r} device={this.state.device} key={r}/>
                        ))}
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className='row'>
                        {row_phone_1.map((r) => (
                            <FlashCardSmall number={r} device={this.state.device} key={r}/>
                        ))}
                    </div>
                    <div className='row'>
                        {row_phone_2.map((r) => (
                            <FlashCardSmall number={r} device={this.state.device} key={r}/>
                        ))}
                    </div>
                    <div className='row'>
                        {row_phone_3.map((r) => (
                            <FlashCardSmall number={r} device={this.state.device} key={r}/>
                        ))}
                    </div>
                    <div className='row'>
                        {row_phone_4.map((r) => (
                            <FlashCardSmall number={r} device={this.state.device} key={r}/>
                        ))}
                    </div>
                    <div className='row'>
                        {row_phone_5.map((r) => (
                            <FlashCardSmall number={r} device={this.state.device} key={r}/>
                        ))}
                    </div>
                    <div className='row'>
                        {row_phone_6.map((r) => (
                            <FlashCardSmall number={r} device={this.state.device} key={r}/>
                        ))}
                    </div>
                    <div className='row'>
                        {row_phone_7.map((r) => (
                            <FlashCardSmall number={r} device={this.state.device} key={r}/>
                        ))}
                    </div>
                    <div className='row'>
                        {row_phone_8.map((r) => (
                            <FlashCardSmall number={r} device={this.state.device} key={r}/>
                        ))}
                    </div>
                    <div className='row'>
                        {row_phone_9.map((r) => (
                            <FlashCardSmall number={r} device={this.state.device} key={r}/>
                        ))}
                    </div>
                    <div className='row'>
                        {row_phone_10.map((r) => (
                            <FlashCardSmall number={r} device={this.state.device} key={r}/>
                        ))}
                    </div>
                    <div className='row'>
                        {row_phone_11.map((r) => (
                            <FlashCardSmall number={r} device={this.state.device} key={r}/>
                        ))}
                    </div>
                    <div className='row'>
                        {row_phone_12.map((r) => (
                            <FlashCardSmall number={r} device={this.state.device} key={r}/>
                        ))}
                    </div>
                </div>
            )
        }
    }

    render () {
        return  (
            <div className='flashcard-list'>
                <div className='flashcard-list-text-box'>
                    <h2 className='flashcard-list-heading'>
                        Click on a number to start practicing
                    </h2>
                </div>
                {this.handleDevice()}
            </div>

        )
    };

    componentWillUnmount() {
        window.removeEventListener("resize", this.windowSize);
      };
    

}

export default FlashCardList;
