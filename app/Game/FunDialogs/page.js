"use client"
import { useContext } from 'react';
import { FunDialogsContext } from "../../../context/funDialog";
import FunDialogSpace from '@/components/Games/CGM/FunDialogSpace';

const page = () => {
  const levelsArr = []
  for(let i = 1; i <= 20;i++){
    levelsArr.push(`Level ${i}`)
  }
  const { current , setCurrent } = useContext(FunDialogsContext);
  return (
    <div className='flex h-screen w-screen justify-evenly bg-green-200'>
      <div className='bg-slate-400 flex w-[20vw] my-6 flex-col' >
        <h1>FunDialogs</h1>
        <p>{current}</p>
        <div className='flex flex-wrap gap-2 px-3 my-3'>
          { levelsArr.map((level,index)=>{
            return(
              <div key={level} className={` flex justify-center items-center h-10 w-10 p-2 rounded-full ${(index +1 == current) ?'bg-green-600':'bg-green-100'}`} >{index + 1}</div>
            )
          })}  
        </div>
      </div>
      <div className='bg-slate-400 flex w-[50vw] my-6 flex-col'>
        {(current == 0 ? <button onClick={()=> setCurrent(current+1)} >Start</button> : <FunDialogSpace current={current} setCurrent={setCurrent}/>)}
      </div>
    </div>
  )
}

export default page

/*
if(current == 0){
              return(
                <button onClick={()=> setCurrent(current+1)} >Start</button>
              )
            }else{
              return <FunDialogSpace/>
            }

*/