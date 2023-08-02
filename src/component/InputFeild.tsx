import React,{useRef } from 'react'
import './style.css'
import Tippy from '@tippyjs/react';

interface Props {
   todo:string;
   setTodo : React.Dispatch<React.SetStateAction<string>>;
   handleAdd: (e: React.FormEvent) => void;
}

const InputFeild:React.FC<Props> = ({todo,setTodo,handleAdd}) => {
    const inputRef = useRef<HTMLInputElement>(null);
 
  return (
   <form className="input"   onSubmit={(e) => {
    handleAdd(e);
    inputRef.current?.blur();
  }}>
    <Tippy>    
    <input 
    ref={inputRef}
    type="input" 
    placeholder='Enter a task' 
    value={todo}
    onChange={(e) => setTodo(e.target.value)}
    className="input__box" />
    </Tippy>
    <button className="input_submit" type='submit'>ADD</button>
   </form>
  )
}

export default InputFeild
