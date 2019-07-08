import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import './App.css';

class App extends Component {
  state = {
  userDetails: [
      {
        name: 'Mike',
        job: 'Developer',
      },
      {
        name: 'Peter',
        job: 'Developer',
      },
      {
        name: 'Roberto',
        job: 'Developer',
      },
      {
        name: 'Brandon',
        job: 'Lead Developer',
      },
      {
        name: 'Nik',
        job: 'Developer',
      },
      {
        name: 'Matt',
        job: 'Developer',
      }
    ]

  }
  removeUserDetails = index => {
    const { userDetails } = this.state;
    this.setState({
      userDetails: userDetails.filter((userDetails, i) => {
        return i!==index;
      })
    })
  }

  handleSubmit = userDetails => {
    this.setState({ userDetails: [...this.state.userDetails, userDetails] })
  }
  render() {
    return (
      <div>
        <div className="header">
          Admin Portal in ReactJS
        </div>
        <div className="container">
        <Table userDataDetails = {this.state.userDetails} removeUserDetails={this.removeUserDetails} />
        <Form handleSubmit={this.handleSubmit} />
        </div>
        <div className= "footer">
          Footer links
        </div>
      </div>
    );
  }
}

export default App;
