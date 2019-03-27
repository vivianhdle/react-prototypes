import React from 'react'

function Table(props){
    const tableRows = props.data.map((itemFromArray, itemIndex)=>{
        return (
            <tr key={itemIndex}>
                <td>{itemFromArray.student}</td>
                <td>{itemFromArray.course}</td>
                <td>{itemFromArray.grade}</td>
            </tr>
        )
    });
    return (
        <table className="table">
            <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>{tableRows}</tbody>
        </table>
    )
}


export default Table