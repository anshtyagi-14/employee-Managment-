import React from 'react';
import AcceptTAsk from './AcceptTAsk';
import NewTAsk from './NewTAsk';
import CompleteTAsk from './CompleteTAsk';
import FAiledTask from './FAiledTask';

const TaskList = ({data}) => {
    return (
        <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
            {data.tasks.map((e,idx)=>{

                if(e.active){
                    return <AcceptTAsk key={idx} data={e}/>
                }
                if(e.failed){
                    return <FAiledTask key={idx} data={e}/>
                }
                if(e.NewTask){
                    return <NewTAsk key={idx} data={e}/>
                }
                if(e.completed){
                    return <CompleteTAsk key={idx} data={e}/>
                }
            })}
        </div>
    );
};

export default TaskList;