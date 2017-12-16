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

  componentWillMount() {
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
        <h1 className='text-center'>Poll List Component</h1>
        <ul className="list-group">
        {this.state.data.map((val, ind) => {
          return [
              <li className="list-group-item justify-content-between" key={ind}>
               <span>Polling Name:</span>
               <Link to={'/polling/'+val.pollName+'/'+val.id}>{val.pollName}</Link>
               <Link to={'/graph/'+val.pollName+'/'+val.id}>Result</Link>                              
                <span className="badge badge-default badge-pill">
                {
                  Math.max.apply(Math,val.opts.map((o) => {return o.vote }))
                }
                </span>
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
