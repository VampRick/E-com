import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let[tittle,setTittle]=useState("")
  let[desc,setDesc]=useState("")
  let[main,setmain]=useState([])

  let notloading=(e)=>{
    e.preventDefault()
    setmain([...main,{tittle,desc}])
    console.log(main)
    setDesc("")
    setTittle("")

  }
  let dlt=(i)=>{
    let main2=[...main]
    main2.splice(i,1)
    setmain(main2)
  }
  let task=""
  task=main.map((value,index)=>{
    return(
      <div className='flex justify-between'>
        <h5 className='text-xl'>{value.tittle}</h5>
        <h5>{value.desc}</h5>
        <button className='bg-red-500 p-2 rounded m-1' onClick={()=>{
          dlt(index)
        }}>Delete</button>
      </div>

    )

  })
  
  return (
    <div className="App">
      <p class="text-2xl bg-black text-white py-2 text-center ">My ToDo List App</p>
      <form onSubmit={notloading}>
        <input
        type='text'
        className='border-zinc-500 m-5 border-4 px-6' 
        placeholder='Enter your tittle'
        value={tittle}
        onChange={(e)=>{
          setTittle(e.target.value)
        
        }}
        />
        
        <input
        type='text'
        className='border-zinc-500 m-5 border-4 ml-40 px-6' 
        placeholder='Enter your description'
        value={desc}
        onChange={(f)=>{
          setDesc(f.target.value)
        }}
          />
        <button className='m-10 text-xl border-4 py-0.5 bg-black text-white px-4'>Save</button>
      </form>
      <hr/>
      <ul className='bg-slate-200 w-full p-5'>
        {task}
      </ul>
    </div>
  );
}

export default App;
