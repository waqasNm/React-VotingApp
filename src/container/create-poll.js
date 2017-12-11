import React, { Component } from 'react';
import CreatePollForm from '../components/create-poll-form';


class CreatePoll extends Component {
  render() {
    return (
        <div>
            <h1 className='text-center'>Create Poll Component</h1>
            <CreatePollForm/>
        </div>
    );
  }
}

export default CreatePoll;
