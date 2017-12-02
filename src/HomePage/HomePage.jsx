import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../Auth/_actions';




class HomePage extends React.Component {

    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-12">
                <div className="row">
                <div className="col-md-6">
                <h2 className="welcome">Welcome {user.firstName}</h2>
                </div>
                <div className="col-md-6">
                <p className="logoutLink">
                    <Link to="/login">Logout</Link>
                </p>
                </div>
            </div>
            <hr></hr>
            <div className="col-md-10">
                <h3>The Last ToDo App You'll ever need.</h3>
            </div>
            <div className="col-xs-3">
                <div className="row">
                  <form >
                    <div className="form-group ">
                        <input type='text' className="newTodoCatalogField form-control"  ref='item' name='item'/>
                        <input type='submit' className="btn btn-default" style={{"float":"left","marginLeft":"5px"}} value='Add'/>
                    </div>
                  </form>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-7">
                    <div id="todo-filter" className="input-group">
                    <span className="input-group-btn">
                <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-search"></span></button>
                </span>
                    <input  type="search" className="form-control" ref='filter' placeholder="Search" ></input>
                    </div>
                </div>
            </div>
                    </div>
                   
                    
           

            
        );
    }
}




function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };