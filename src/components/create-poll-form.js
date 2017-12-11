import React, { Component } from 'react';
import { Redirect } from 'react-router';

import * as firebase from 'firebase';

class CreatePollForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            pollName:'',
            question:'',
            optA:{name:'',vote:0},
            optB:{name:'',vote:0},
            optC:{name:'',vote:0},
            optD:{name:'',vote:0},
            flag:false,
        }
    }
    getValue(ev){
        if(ev.target.id === 'optA' || ev.target.id === 'optB' || ev.target.id === 'optC' || ev.target.id === 'optD'){
            this.setState({[ev.target.id]:{name:ev.target.value,vote:0}})            
        }else{
            this.setState({[ev.target.id]:ev.target.value})
        }
    }
    saveBtn(ev){
        ev.preventDefault();
        this.setState({flag:true})
        let dataObj = {
            pollName:this.state.pollName,
            question:this.state.question,
            optA:this.state.optA,
            optB:this.state.optB,
            optC:this.state.optC,
            optD:this.state.optD
        }
        const rootRef = firebase.database().ref();
        const childRef = rootRef.child('data');
        childRef.push(dataObj)
    }
    divStyle = {
        width: '45%',
        margin:'0 auto'
    }
    btnStyle = {
        marginTop:"10px"
    }
    render() {
        // if(this.state.flag){
        //     return <Redirect push to="/show" />;
        // }
        return (
            <div className="container" style={this.divStyle}>
            <form  onSubmit={this.saveBtn.bind(this)}>
                <div className="form-group">
                    <label htmlFor="pollName">Polling Name</label>
                    <input type="text" className="form-control" onChange={this.getValue.bind(this)} id="pollName" placeholder="" />
                </div>
                <div className="form-group">
                    <label htmlFor="question">Question</label>
                    <textarea className="form-control" id="question" onChange={this.getValue.bind(this)} rows="3"></textarea>
                </div>
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
                <div className="form-inline">
                    <div className="form-group">
                        <label htmlFor="optC">C</label>
                        <input type="text" className="form-control" id="optC" onChange={this.getValue.bind(this)} placeholder="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="optD">D</label>
                        <input type="text" className="form-control" id="optD" onChange={this.getValue.bind(this)} placeholder="" />
                    </div>
                </div>
                <button style={this.btnStyle} className="btn btn-info">Save</button>
            </form>
            </div>
        );
    }
}

export default CreatePollForm;
