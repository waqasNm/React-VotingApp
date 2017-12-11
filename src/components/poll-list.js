import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Link } from 'react-router-dom';

class PreviousPoll extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }

  }

  componentDidMount() {
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
        console.log(this.state.data)
      });
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className='text-center'>Poll List Component</h1>
        <ul className="list-group">
        {this.state.data.map((val, ind) => {
          return [
              <li className="list-group-item justify-content-between" key={ind}>
               <Link to={'/polling/'+val.id}>{val.pollName}</Link>               
                <span className="badge badge-default badge-pill">14</span>
              </li>
              ]
        })
        }
        </ul>
      </div>
    );
  }
}

export default PreviousPoll;
