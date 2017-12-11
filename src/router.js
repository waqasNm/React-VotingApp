import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import CreatePoll from './container/create-poll';
import PreviousPolls from './components/previous-polls';
import ShowPollQuestion from './components/show-poll-question';
import PollList from './components/poll-list';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={CreatePoll}/>
            <Route path='/previouspoll' component={PreviousPolls}/>
            <Route path='/polling/:pollId' component={ShowPollQuestion}/>
            <Route path='/pollinglist' component={PollList}/>
        </Switch>
  </main>
)

export default Main;