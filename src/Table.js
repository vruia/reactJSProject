import React, { Component } from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Actions</th>
      </tr>
    </thead>
  )
}

const TableBody = props => {
  const rows = props.userDataDetails.map((row, index) => {
      return (
        <tr key = {index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td><button className="btn btn-link" onClick={() => props.removeUserDetails(index)}>Delete</button></td>
        </tr>
      )
  })

  return <tbody>{rows}</tbody>
}

class Table extends Component{
  render(){
    const { userDataDetails} = this.props;
    return(
      <div class="row">
      <h3 className="mgr_top20">Card User Details</h3>
      <table className="table table-bordered" cellpadding="5" cellspacing="5">
        <TableHeader />
        <TableBody userDataDetails = {userDataDetails} />
      </table>
      </div>
    );
  }
}

export default Table
