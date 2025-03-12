import React from 'react';
import Header from '../Others/Header';
import TaskListNumber from '../Others/TaskListNumber';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {
    return (
        <div className=' h-screen w-screen p-10 bg-[#1C1C1C] '>
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumber  data={props.data} />
        <TaskList  data={props.data}/>
        </div>
    );
};

export default EmployeeDashboard;