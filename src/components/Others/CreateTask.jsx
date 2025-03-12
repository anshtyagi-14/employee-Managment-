import React, { useState } from 'react';

const CreateTask = () => {
    const [taskTitle, settaskTitle] = useState('');
    const [taskDate, settaskDate] = useState('');
    const [assignTo, setassignTo] = useState('');
    const [taskDescription, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [task, setTask] = useState({});

    const data=JSON.parse(localStorage.getItem("employees"))



    const SubmitHandler=(e)=>{
        e.preventDefault()
        setTask({taskTitle,taskDate,taskDescription,category,active:false,newTask:true,completed:false,failed:false})

        data.forEach((e)=>{
            if(assignTo == e.firstName){
                e.tasks.push(task)
            }
        })
        localStorage.setItem("employees",JSON.stringify(data))

        settaskTitle('')
        settaskDate('')
        setassignTo('')
        setDescription('')
        setCategory('')
    }
    return (
        <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
            <form onSubmit={SubmitHandler} className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input value={taskTitle} onChange={(e)=>{
                            settaskTitle(e.target.value)
                        }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design'/>
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input value={taskDate} onChange={(e)=>{
                            settaskDate(e.target.value)
                        }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4 text-white appearance-none relative' type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                        <input value={assignTo} onChange={(e)=>{
                            setassignTo(e.target.value)
                        }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input value={category} onChange={(e)=>{
                            setCategory(e.target.value)
                        }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea value={taskDescription} onChange={(e)=>{
                            setDescription(e.target.value)
                        }} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>

            </form>
        </div>
    );
};

export default CreateTask;