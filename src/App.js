import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './App.css';
import $ from 'jquery';
import Profile from './component/github/Profile.jsx';
import Search from './component/github/Search.jsx';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    username: 'warlock257',
    userData: [],
    userRepos: [],
    perPage: 10
  }
}

//get user data from github
getUserData(){
  $.ajax({
    url: 'https://api.github.com/users/' + this.state.username+ '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
    dataType: 'json',
    cache:false,
    success: function(data){
      this.setState({userData: data});
    }.bind(this),
    error: function(xhr, status, err){
      this.setState({username: null});
      alert(err);
    }.bind(this)
  });
}

//get user repos
getUserRepos(){
  $.ajax({
    url: 'https://api.github.com/users/' + this.state.username+ '/repos?per_page='+this.state.perPage+'&client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret + '&sort=created',
    dataType: 'json',
    cache:false,
    success: function(data){
      this.setState({userRepos: data});
    }.bind(this),
    error: function(xhr, status, err){
      this.setState({username: null});
      alert(err);
    }.bind(this)
  });
}

handleFormSubmit(username){
  this.setState({username: username}, function(){
      this.getUserData();
      this.getUserRepos();
  });
}

componentDidMount(){
  this.getUserData();
  this.getUserRepos();
}


  render() {
    return (
      <div className="App">
        <Search onFormSubmit = {this.handleFormSubmit.bind(this)} />
        <Profile {...this.state} />
      </div>
    );
  }
}

App.propTypes = {
  // clientId: React.propTypes.string,
  // clientSecret: React.propTypes.string
};
App.defaultProps = {
  clientId: 'ac02cfe4e842228404c5',
  clientSecret: 'dfecb9e594268a8b36a7941d308604d681a66ce5'
}

export default App;
