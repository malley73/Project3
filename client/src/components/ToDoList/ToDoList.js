import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ToDoListItem from '../ToDoListItem';

class ToDoList extends Component{
		Remove = e => {
		   this.props.onDelete(e);
		}
		DragStart = e => {
			this.dragged = e.currentTarget;
			e.dataTransfer.effectAllowed = 'move';
		}
		DragEnd = () =>{
			this.dragged.style.display="";
			var IshasNode = false
			
			Array.prototype.forEach.call (this.dragged.parentNode.childNodes, function (node) {
				if(node.className=="placeholder")
								IshasNode = true;

			} );
			if(!IshasNode)
			return;
			this.dragged.parentNode.removeChild('');
			var data = this.props.items;
			var from = Number(this.dragged.dataset.id);
			var to = Number(this.over.dataset.id);
			if(from < to) to--;
			if(this.nodePlacement == "after") to++;
			data.splice(to, 0, data.splice(from, 1)[0]);
			this.setState({data: data});	
		}
		DragOver = e => {
	
			e.preventDefault();
			this.dragged.style.display = "none";
			
			if(e.target.className == "placeholder") return;
			this.over = e.target;
			// Inside the dragOver method
			var relY = e.clientY - this.over.offsetTop;
			var height = this.over.offsetHeight / 2;
			var parent = e.target.parentNode;
			
			if(relY > height) {
			  this.nodePlacement = "after";
			  parent.insertBefore('', e.target.nextElementSibling);
			}
			else if(relY < height) {
			  this.nodePlacement = "before"
			  parent.insertBefore('', e.target);
			}
		}
		render () {
			
			var createItem = function(itemText,i) {
			
				return (
					<ToDoListItem key={i} value={i} onDragEnd={this.DragEnd}
            onDragStart={this.DragStart} onRemove = {this.Remove}>{itemText}</ToDoListItem>
				);
			};
			var allitems = this.props.items;
            // Here is the filter function 
			var status = this.props.filter[0].Status;
			switch (status){
				case 'false':
				 allitems = allitems.filter(t => !t.isDone)
				 break;
				 case 'true':
				 allitems = allitems.filter(t => t.isDone)
			};
			// Here is the search function 
			var queryText = this.props.filter[0].keyword;
		 
			if(queryText){
				var queryResult=[];
				allitems.forEach(function(item){
					if(item.item.toLowerCase().indexOf(queryText)!=-1)
					queryResult.push(item);
				});
				return <ul onDragOver={this.DragOver}>{queryResult.map(createItem,this)}</ul>;
			}
	
			return <ul onDragOver={this.DragOver}>{allitems.map(createItem,this)}</ul>;
		}
    };

export default ToDoList;