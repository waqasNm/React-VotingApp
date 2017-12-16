import React, { Component } from 'react';
import * as firebase from 'firebase';
class ShowPollQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      isTrue: false,
      optA: { vote: 0 },
      optB: { vote: 0 },
      optC: { vote: 0 },
      optD: { vote: 0 },
    }
  }
  componentWillMount() {
    const rootRef = firebase.database().ref();
    let pollId = this.props.match.params.pollId;
    const childRef = rootRef.child(`data/${pollId}`);
    let pollObj = {};
    childRef.on('value', snap => {
      console.log(snap.val())
      pollObj = snap.val();
      this.setState({ data: pollObj });
      console.log(this.state)
    });
  }

  updateVote(e) {
    console.log(e.target.value)
    let optsArr =  this.state.data.opts 
    console.log(optsArr)
    optsArr[e.target.id].vote = ++optsArr[e.target.id].vote; 
    this.setState({opts:optsArr})
    this.setState({isTrue:true});
    console.log(this.state)
  }
  saveVote(e) {
    e.preventDefault();
    console.log(this.state.data)
    const rootRef = firebase.database().ref();
    let pollId = this.props.match.params.pollId;
    const childRef = rootRef.child(`data/${pollId}`);
    childRef.update(this.state.data).then(() => {
      console.log("Ur Vote Updated Sucessfully!");
      this.setState({isTrue : false})
    })
  }
  render() {
    const optsArray = this.state.data && (this.state.data.opts) ? this.state.data.opts : []
    // console.log(optsArray);


    return (
      <div>
        <h1 className='text-center'>Show Poll Question Component</h1>

        <div className="container">
          <form onSubmit={this.saveVote.bind(this)}>
            <fieldset className="form-group">
              <legend>{this.state.data.question}</legend>
              {optsArray.map((val,ind) => {
                return(
                <div className="form-check" key={ind}>
                  <label className="form-check-label">
                    <input type="radio" className="form-check-input" onChange={this.updateVote.bind(this)} name="polling" id={ind} value={val.name} />
                    {val.name}
                  </label>
                </div>)
              })}
              <button className="btn btn-success btn-lg" disabled={!this.state.isTrue}>Add Vote</button>
            </fieldset>
          </form>
          <div className="parent">
            <div className="child">
              <h1>child 1</h1>
            </div>
            <div className="child">
              <h1>child 2</h1>
            </div>
            <div className="child">
              <h1>child 3</h1>
            </div>
            <div className="child">
              <h1>child 4</h1>
            </div>
            <div className="child">
              <h1>child 5</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowPollQuestion;
