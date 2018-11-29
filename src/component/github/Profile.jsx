import React, { Component } from 'react';
import RepoList from './RepoList.jsx';


class Profile extends Component {

  render() {
    return (
        <div className="card">
            <div className="card-header">
            {this.props.userData.login}
            </div>
                <div className="card-body">
                
                <div className="row">

                    <div className="col-md-4">
                     <img src={this.props.userData.avatar_url} className="thumbnail" style={{width:"100%"}} />
                    </div>
  
                    <div className ="col-md-8">
                        <div className="row">
                            <div className="col-md-12">
                                <span className="alert alert-primary">{this.props.userData.public_repos} Repos</span>
                                <span className="alert alert-success">{this.props.userData.public_gists} Public Gists</span>
                                <span className="alert alert-info">{this.props.userData.followers} Followers</span>
                                <span className="alert alert-danger">{this.props.userData.following} Following</span>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="list-group">
                                    <li className="list-group-item"><strong>Name: </strong>{this.props.userData.name}</li>
                                    <li className="list-group-item"><strong>Location: </strong>{this.props.userData.location}</li>
                                    <li className="list-group-item"><strong>Email: </strong>{this.props.userData.email}</li>
                                </ul>
                            </div>
                        </div>
                        <br />
                        <a className="btm btn-primary profileBtn" target="_blank" href={this.props.userData.html_url}>Visit Profile </a>
                    </div>
            </div>
            <hr />
            <h3>User Repositories</h3>
            <RepoList userRepos={this.props.userRepos} />
      </div>
      </div>
    )
  }
}


export default Profile;

