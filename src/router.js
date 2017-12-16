import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import CreatePoll from './container/create-poll';
import PreviousPolls from './components/previous-polls';
import ShowPollQuestion from './components/show-poll-question';
import PollList from './components/poll-list';
import Example from './components/graph';
import CreatePollImg from './images/createPoll.jpg';



const Main = () => (
    <main style={{background:`url(${CreatePollImg})`,backgroundRepeat:'no-repeat'}}>
        <Switch>
            <Route exact path='/' component={CreatePoll}/>
            <Route path='/previouspoll' component={PreviousPolls}/>
            <Route path='/polling/:pollName/:pollId' component={ShowPollQuestion}/>
            <Route path='/pollinglist' component={PollList}/>
            <Route path='/graph/:resultName/:resultId' component={Example}/>
        </Switch>
  </main>
)

export default Main;