import React, { Component } from 'react';

class Second extends Component {
    render() {
        return (
            <div className='Timer-seconds' >
                {this.props.value}
            </div>
        );
    }
}

export default Second;