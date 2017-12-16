import React, { Component } from 'react';
import { Redirect } from 'react-router';
import * as firebase from 'firebase';
// import CreatePollImg from '../images/createPoll.jpg';

class CreatePollForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pollName: '',
            question: '',
            opts: [],
            flag: false,
            optA: '',
            optB: '',
            optC: '',
            optD: '',
            numOfOpts: 0
        }
        console.log(props.editData);
    }
    
    getValue(ev) {
        let arr = this.state.opts;
        console.log(ev.target.id)
        let num = Number(ev.target.value)
        console.log(typeof (num))
        console.log(typeof (ev.target.value))
        this.setState({ [ev.target.id]: num })
        if(this.state.pollName !== "" && this.state.question !== "" && 
        this.state.optA !== "" && this.state.optB !== ""){
            this.setState({flag:true})
        }else{
            this.setState({flag:false})
        }
    }
    saveBtn(ev) {
        ev.preventDefault();
        let optsArr = [
            { name: this.state.optA, vote: 0 },
            { name: this.state.optB, vote: 0 },
            { name: this.state.optC, vote: 0 },
            { name: this.state.optD, vote: 0 }
        ];
        let obj
        console.log(this.state)
        console.log(optsArr)
        this.setState({ flag: true })
        let dataObj = {
            pollName: this.state.pollName,
            question: this.state.question,
            opts: optsArr
        }
        const rootRef = firebase.database().ref();
        const childRef = rootRef.child('data');
        childRef.push(dataObj)
    }
    divStyle = {
        width: '50%',
        margin: '0 auto',
        // backgroundImage:`url(${CreatePollImg})`
    }
    btnStyle = {
        marginTop: "10px"
    }
    render() {

        return (
            <div className="container" style={this.divStyle}>
                <form onSubmit={this.saveBtn.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="pollName">Polling Name</label>
                        <input type="text" className="form-control" onChange={this.getValue.bind(this)} id="pollName" placeholder="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="question">Question</label>
                        <textarea className="form-control" id="question" onChange={this.getValue.bind(this)} rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="optA">Select Number Of Options</label>
                        <select className="form-control" id="numOfOpts" onChange={this.getValue.bind(this)}>
                            <option value="0" selected >select options</option>
                            <option value="2">2</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    {(this.state.numOfOpts === 2) ?
                        <div className="form-inline">
                            <div className="form-group">
                                <label htmlFor="optA">A</label>
                                <input type="text" className="form-control" id="optA" onChange={this.getValue.bind(this)} placeholder="" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="optB">B</label>
                                <input type="text" className="form-control" id="optB" onChange={this.getValue.bind(this)} placeholder="" />
                            </div>
                        </div>
                        :
                        (this.state.numOfOpts === 4)?
                        [<div className="form-inline">
                        <div className="form-group">
                            <label htmlFor="optA">A</label>
                            <input type="text" className="form-control" id="optA" onChange={this.getValue.bind(this)} placeholder="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="optB">B</label>
                            <input type="text" className="form-control" id="optB" onChange={this.getValue.bind(this)} placeholder="" />
                        </div>
                    </div>,
                    <div className="form-inline">
                        <div className="form-group">
                            <label htmlFor="optC">C</label>
                            <input type="text" className="form-control" id="optC" onChange={this.getValue.bind(this)} placeholder="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="optD">D</label>
                            <input type="text" className="form-control" id="optD" onChange={this.getValue.bind(this)} placeholder="" />
                        </div>
                    </div>]
                    : console.log('options are not seleted')
                    }
                    
                    <button style={this.btnStyle} disabled={!this.state.flag} className="btn btn-info">Save</button>
                </form>
            </div>
        );
    }
}

export default CreatePollForm;
