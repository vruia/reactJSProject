import React, { Component } from 'react'

  class Form extends Component {
      constructor(props) {
        super(props)

        this.initialState = {
          name: '',
          job: '',
        }

        this.state = this.initialState
      }

      handleChange = event => {
        const { name, value } = event.target

        this.setState({
          [name]: value,
        })
      }
      submitForm = () => {
  this.props.handleSubmit(this.state)
  this.setState(this.initialState)
}
   render() {
    const { name, job } = this.state;
    return(
      <form>
       <div className="form-group">
        <label>Name</label>
        <input className="form-control"
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange} />
       </div>
       <div className="form-group">
        <label>Job</label>
        <input className="form-control"
          type="text"
          name="job"
          value={job}
          onChange={this.handleChange} />
        <input className="btn btn-info mgr_top20 mgr_bot20" type="button" value="Create User" onClick={this.submitForm} />
       </div>
      </form>
    )
  }
}
export default Form;
