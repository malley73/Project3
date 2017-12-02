import React, { Component } from "react";
import ReactDOM from 'react-dom';

class ToDoCatalogForm extends React.Component {
	state = { item: '' };

		getInitialState = () => {
			return {item: ''};
        }

        handleInputChange = event =>{
    		const { name, value } = event.target;
    		this.setState({
      			[name]: value
    		});
  		};

		handleSubmit = e => {
			e.preventDefault();
			this.props.onFormSubmit(this.state.item);
			this.setState({item: ''});
			ReactDOM.findDOMNode(this.refs.item).focus();
			return;
		}

		render (){
			return (
				<div className="row">
				  <form  onSubmit={this.handleSubmit}>
					<div className="form-group ">
	
						<input type='text' className="newTodoCatalogField form-control"  ref='item' onChange={this.handleInputChange} value={this.state.item} name='item'/>
						<input type='submit' className="btn btn-default" style={{"float":"left","marginLeft":"5px"}} value='Add'/>
					</div>
				  </form>
				  </div>
				
			);
		}
    };

export default ToDoCatalogForm;