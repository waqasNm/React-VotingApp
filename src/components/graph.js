import React, { Component} from 'react';
import * as firebase from 'firebase';
  
class Example extends Component{
  constructor(){
      super()
      this.state = {
          width:0,
          height:100
      }
  }

  componentWillMount() {
    const rootRef = firebase.database().ref();
    let pollId = this.props.match.params.resultId;
    const childRef = rootRef.child(`data/${pollId}`);
    let pollObj = {};
    childRef.on('value', snap => {
      pollObj = snap.val();
      this.setState({ data: pollObj });
      console.log(this.state)
    });
  }
 
 
  render() {
      const opts = this.state.data && this.state.data? this.state.data.opts: [];
      const pollName = this.state.data && this.state.data? this.state.data.pollName: "";

      return (
        <div className="container">
        <h1>{pollName}</h1>
            <div className="row align-items-end" style={{background:'#ccc'}}>
                {opts.map((val,ind) => {
                    return(
                        <div className="col-3" key = {ind}>
                        <p className="btn btn-primary btn-block" style={(val.vote) > 0 ? {height:'100' *  val.vote,marginBottom:'0'}: {height:'auto',marginBottom:'0'}} >{val.vote}</p>
                        <p className="text-center" style={{background:'#A8C1FF'}}>{val.name}</p>                        
                        </div>
                    )
                })}
            </div>
        </div>
    );
  }
}
 
export default Example;