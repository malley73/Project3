import React, { Component } from "react";
import ReactDOM from 'react-dom';

class ToDoFilter extends Component{

	isActive = value => {
		return 'btn '+((value===this.props.filter[0].Status) ?'btn-primary':'default');
	}
	render (){
		var onFilter1 = this.props.onFilter;
		var onSearch1 = this.props.onSearch;
		return(
			<div className="row">
			<div className="col-xs-7">
			<div id="todo-filter" className="input-group">
			<span className="input-group-btn">
			<button className="btn btn-default" type="button"><span className="glyphicon glyphicon-search"></span></button>
			</span>
			<input  type="search" className="form-control" ref='filter' onChange={onSearch1} placeholder="Search" ></input>
			</div>
			</div>
			</div>
			); 
	}
};


export default ToDoFilter;