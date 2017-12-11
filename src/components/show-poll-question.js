import React, { Component } from 'react';
import * as firebase from 'firebase';
class ShowPollQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      vote: 0,
      optA:{vote:0},
      optB:{vote:0},
      optC:{vote:0},
      optD:{vote:0},
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
    let data = Object.assign({}, this.state.data);
    data[e.target.id].vote = ++data[e.target.id].vote;
    this.setState({data})
    // this.setState({ data: { [e.target.id]: {name:[e.target.value],vote: ++this.state.data[e.target.id].vote} } });
    // this.setState({[e.target.id]:{vote:++this.state[e.target.id].vote}})
    console.log(this.state)
  }
  saveVote(e){
    e.preventDefault();
    console.log(this.state.data)
  }
  render() {
    const dataA = this.state.data && (this.state.data.optA) ? this.state.data.optA : [];
    const dataB = this.state.data && (this.state.data.optB) ? this.state.data.optB : [];
    const dataC = this.state.data && (this.state.data.optC) ? this.state.data.optC : [];
    const dataD = this.state.data && (this.state.data.optD) ? this.state.data.optD : [];

    return (
      <div>
        <h1 className='text-center'>Show Poll Question Component</h1>

        <div className="container">
        <form onSubmit={this.saveVote.bind(this)}> 
          <fieldset className="form-group">
            <legend>{this.state.data.question}</legend>
            <div className="form-check">
              <label className="form-check-label">
                <input type="radio" className="form-check-input" onChange={this.updateVote.bind(this)} name="polling" id="optA" value={dataA.name} />
                {dataA.name}
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input type="radio" className="form-check-input" onChange={this.updateVote.bind(this)} name="polling" id="optB" value={dataB.name} />
                {dataB.name}
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input type="radio" className="form-check-input" onChange={this.updateVote.bind(this)} name="polling" id="optC" value={dataC.name} />
                {dataC.name}
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input type="radio" className="form-check-input" onChange={this.updateVote.bind(this)} name="polling" id="optD" value={dataD.name} />
                {dataD.name}
              </label>
            </div>

            <button className="btn btn-success btn-lg">Add Vote</button>
          </fieldset>
        </form>
          <div className="container">
            <div className="item">
              <h1>Item 1</h1>
            </div>
            <div className="item">
              <h1>Item 2</h1>          
            </div>
            <div className="item">
              <h1>Item 3</h1>            
            </div>
            <div className="item">
              <h1>Item 4</h1>            
            </div>
            <div className="item">
              <h1>Item 5</h1>            
            </div>
          </div>


        </div>
      </div>
    );
  }
}

export default ShowPollQuestion;
