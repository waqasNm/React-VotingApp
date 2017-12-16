import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Modal } from 'react-bootstrap';
import CreatePollForm  from './create-poll-form';


class PreviousPoll extends Component {
  abc = false;
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      editData:{}
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
      });
    });
  }
  editPoll(index, key) {
    console.log("edit", index)
    console.log("edit", key)
    const rootRef = firebase.database().ref();
    const childRef = rootRef.child(`data/${key}`);
    let pollObj = {};
    childRef.on('value', snap => {
      console.log(snap.val())
      pollObj = snap.val();
      this.setState({ editData: pollObj });
      console.log(this.state.editData)
    });
  }
  deletePoll(index, key) {
    console.log("delete", index)
    console.log("delete", key)
    const rootRef = firebase.database().ref();
    const childRef = rootRef.child(`data/${key}`);
    childRef.remove().then(() => {
      console.log("Poll deleted Sucessfully!");
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className='text-center'>Previous Poll Question Component</h1>
        {this.state.data.map((val, ind) => {
          return (
            <div className="card" key={ind} style={{ marginBottom: '10px' }}>
              <div className="card-header">
                Polling Name: {val.pollName}
              </div>
              <div className="card-block">
                <h4 className="card-title">Q:{val.question}</h4>
                {val.opts.map((opt) => {
                  return 
                  if (opt.vote > 0) {
                    console.log('asdasd')
                    this.abc = true
                  }
                  else {
                    this.abc = false;
                  }
                })}
                {(this.abc) ?
                  <button className="btn btn-danger" onClick={this.deletePoll.bind(this, ind, val.id)}>Delete</button>
                  : [
                    <button type="button" className="btn btn-info" data-toggle="modal" onClick={this.editPoll.bind(this, ind, val.id)} data-target="#myModal">
                    Edit
                  </button>,
                    <button className="btn btn-danger" onClick={this.deletePoll.bind(this, ind, val.id)}>Delete</button>
                  ]
                }

              </div>
            </div>)
        })
        }



        <div className="container">
          <div className="modal fade" id="myModal">
            <div className="modal-dialog modal-sm">
              <div className="modal-content">

                <div className="modal-header">
                  <h4 className="modal-title">Modal Heading</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>

                <div className="modal-body">
                  <CreatePollForm editData={this.state.editData}/>
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default PreviousPoll;
