import React from 'react'
import * as ReactBstrap from "react-bootstrap"
import { tempdata } from "../temp"


const lodash = require("lodash"); 

function DataReader() {
    
var  jsonTabData = lodash.uniqBy(tempdata, 'id','name','')
   
const empdata = (jsonTabData) => {
  return ( 
    <tr key = {jsonTabData.id}> 
    <td>{jsonTabData.id}</td> 
      <td>{jsonTabData.name}</td> 
      <td>{jsonTabData.age}</td>
      <td>{jsonTabData.salary}</td> 
</tr> 
  )
}

 

    return (
      <div className="container">
        <h2> Employee Data </h2>
        
        <ReactBstrap.Table striped bordered hover responsive="sm">
          <thead className="mb-5">
            <tr>
              <th>Id</th>
              <th> Name</th>
              <th>Age</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
          {jsonTabData.map(empdata) }
          </tbody>
        </ReactBstrap.Table>
            </div>
          );
        

    
}

export default DataReader
