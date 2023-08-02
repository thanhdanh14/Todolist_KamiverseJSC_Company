import React, { useState } from 'react';
import './App.css';
import InputFeild from './component/InputFeild';
import { Todo } from './model';
import Todolist from './component/Todolist';
import {Stack} from '@mui/material';
import {Snackbar} from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const App:React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [todo,setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([
    {id: Date.now(), todo:'Learn Code Javascript!' , isDone : false}
  ]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos, {id: Date.now(), todo:todo , isDone : false}])
      setOpen(true);
      setTodo("")
    }
  }
 
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="App">
      <span className="heading">TodoList React + TypeScript </span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <Todolist todos={todos} setTodos={setTodos} />
      <div>
      <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Todo add succesfully!
        </Alert>
      </Snackbar>
    </Stack>
      </div>
    </div>
    
  );
}

export default App;
