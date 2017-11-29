import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ToDoForm from '../ToDoForm';
import ToDoCatalogForm from '../ToDoCatalogForm';
import ToDoCatelog from '../ToDoCatelog';
import ToDoFilter from '../ToDoFilter';
import ToDoList from '../ToDoList';
import ToDoBanner from '../ToDoBanner';
import ToDoListItem from '../ToDoListItem';



class ToDoApp extends Component {
	state = {Todo:[{name:"parimary",items:[{item:'Todo itme #1',isDone:false},{item:'Todo itme #2',isDone:true},{item:'aaaa',isDone:true},{item:'dddd',isDone:true}
			]},{name:"Secondary",items:[{item:'Todo itme #1',isDone:false},{item:'Todo itme #2',isDone:true},{item:'Todo itme #3',isDone:true}
			]}],filter:[{keyword:'',Status:"SHOW_ALL"}],selectedCatelog:"0"};


		updateItems = newItem => {
		
			var item = {
				item: newItem,
				isDone: false
			};
			var newtodo = this.state.Todo;
			var allItems = this.state.Todo[this.state.selectedCatelog].items.concat([item]);
			newtodo[this.state.selectedCatelog].items = allItems;
			this.setState({
				Todo: newtodo
			});
		}

		deleteItem= index =>{
			var newtodo = this.state.Todo;
			var allItems = this.state.Todo[this.state.selectedCatelog].items.slice(); //copy array
			allItems.splice(index, 1); //remove element
			newtodo[this.state.selectedCatelog].items = allItems;
			this.setState({
				Todo: newtodo
			});
		}
		filterItem = e =>{
			
			this.state.filter[0].Status = e.target.value;
			this.setState({
				filter: this.state.filter
			});
		}
		searchItem = e =>{
	
			this.state.filter[0].keyword = e.target.value;
			this.setState({
				filter: this.state.filter
			});
		}

		AddCatalog = newCatalog => {
			var Catalog = {name:newCatalog,items:[{item:'Todo itmd #1',isDone:false}]};
			var newtodo = this.state.Todo.concat([Catalog]);
			this.setState({
				Todo: newtodo
			});
		}

		setSelectedCatalog = index => {
			this.state.selectedCatelog = index;
			this.setState({
				selectedCatelog: index
			});
		}

		render(){
			return (
				<div className="row">
					<div className="col-xs-3">
                       <ToDoCatalogForm onFormSubmit = {this.AddCatalog} />
                        <ToDoCatelog selectedID = {this.state.selectedCatelog} onSelected={this.setSelectedCatalog} Todos = {this.state.Todo} />
					</div>
					<div className="col-xs-6">
						<ToDoBanner/>
						<ToDoFilter onFilter = {this.filterItem} onSearch = {this.searchItem} filter={this.state.filter}/>
						
						<ToDoForm onFormSubmit = {this.updateItems} />
						<ToDoList  items = {this.state.Todo[this.state.selectedCatelog].items} filter = {this.state.filter} onDelete={this.deleteItem}/>
					</div>
				</div>
			);
		}
	};

	export default ToDoApp;
	 