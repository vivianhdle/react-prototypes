import React from 'react'
import Table from './table'


const students = [
    {student:'Peter Parker',course:'Spidering',grade:80},
    {student:'Barry Allen',course:'Track',grade:57},
    {student:'Clark Kent',course:'Weight Lifting',grade:100}
];



function App(props){
    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
}


export default App;