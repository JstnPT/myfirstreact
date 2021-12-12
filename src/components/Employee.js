import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import employeeService from "../services/employeeService"

const Employee = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        refreshEmployeeTable();
    })

    const refreshEmployeeTable = () => {
        employeeService.getEmployees()
            .then(
                response => {
                    setEmployees(response.data);
                }
            )
            .catch(() => {
                console.log("luh nag error si Employee")
            }
            )
    }

    const deleteEmployee = (employeeId) =>{
        employeeService.deleteEmployee(employeeId)
        .then(
            response =>{
                console.log("employee has been fired!")
                refreshEmployeeTable();
            }
        )
        .catch(
            error =>{
                console.error("luh something went wrong!", error)
            }
        )
    }

    return (
        <div className="container">
            <h3>List of Employees</h3>
            <div>
                <Link to="/add" className="btn btn-warning btn=primary mb-2">Add Employee</Link>
                <table className="table table-hover table-light table-striped" >
                    <thead>
                        <tr className="table-dark">
                            <td>Name</td>
                            <td>Location</td>
                            <td>Department</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(
                                employee => (
                                    <tr key={employee.employeeId}>
                                        <td>{employee.name}</td>
                                        <td>{employee.location}</td>
                                        <td>{employee.department}</td>
                                        <td>
                                            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                                                <Link className="btn btn-warning" to={`/edit/${employee.employeeId}`}>Update</Link>
                                                <button className="btn btn-danger" onClick={() => deleteEmployee(employee.employeeId)}>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Employee