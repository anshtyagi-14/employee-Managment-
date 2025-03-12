import React from 'react';
import Header from '../Others/Header';
import CreateTask from '../Others/CreateTask';
import AllTask from '../Others/AllTask';

const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-7 bg-black text-white'>
            <Header changeUser={props.changeUser}/>
            <CreateTask />
            <AllTask />
            
        </div>
    );
};

export default AdminDashboard;