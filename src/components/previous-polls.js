import React, { Component } from 'react';
import * as firebase from 'firebase';

class PreviousPoll extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }

  }

  componentDidMount(){
    const rootRef = firebase.database().ref();
    const childRef = rootRef.child('data');
    let arrData = [];
    childRef.on('value', snap => {
      arrData = [];
      snap.forEach(ev => {
        let obj = ev.val();
        obj.id = ev.key;
        arrData.push(obj)
        this.setState({ data: arrData });
      });
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className='text-center'>Previous Poll Question Component</h1>
        {this.state.data.map((val, ind) => {
            return <div>
                <h2>{val.question}</h2>
              </div>
          })
        }
      </div>
    );
  }
}

export default PreviousPoll;
