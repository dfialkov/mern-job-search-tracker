import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Application = props => (
  <tr>
    <td>{props.application.company}</td>
    <td>{props.application.position}</td>
    <td>{props.application.recruiterContact}</td>
    <td>{props.application.time.substring(0,10)}</td>
     <td>
      <Link to={"/edit/"+props.application._id}>edit</Link> | <a href="#" onClick={() => { props.deleteApplication(props.application._id) }}>delete</a>
    </td> 
  </tr>
)
export default class ListView extends Component {

  constructor(props){
    super(props);

    this.deleteApplication = this.deleteApplication.bind(this);

    this.state = {applications: []}
}
deleteApplication(id){
  axios.delete('http://localhost:5000/api/applications/'+id)
  .then(res =>console.log(res.data));
  this.setState({
      exercises: this.state.applications.filter(el => el.id !== id)
  })
}

componentDidMount(){
  axios.get('http://localhost:5000/api/applications/')
  .then(response => {
      this.setState({applications:response.data})
  })
  .catch((error) =>{
      console.log(error)
  })
}

applicationList() {
  return this.state.applications.map(currentapplication => {
    return <Application application={currentapplication} deleteApplication={this.deleteApplication} key={currentapplication._id}/>;
  })
}


  //List of all jobs for the current user
  //Display offers on top, with option to hide
  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.applicationList() }
          </tbody>
        </table>
      </div>
    )
  }
}