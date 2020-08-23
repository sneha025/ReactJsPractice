import  React ,{ useContext, useState } from "react";
import {TodoContext} from '../Context/TodoContext'
import  {FormGroup,
            Input,
            Button,
            InputGroup,
            Form,
            InputGroupAddon        

}from 'reactstrap'

import {v4} from 'uuid'
import {ADD_TODO} from '../Context/action.types'

const TodoForm =()=>{
    const [todoString,setTodoString]= useState("");
    const {dispatch} =useContext(TodoContext);
    const handleSubmit = e =>{
        e.preventDefault ();
        if (todoString ===""){
            return alert ("please enter todo");

        }
        const todo = {
            todoString,
            id:v4()
        }
        dispatch ({
            type : ADD_TODO,
            payload : todo
        })
        setTodoString("");
    }


    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                <Input type ="text"
                name="todo"
                id="todo"
                placeholder="Your next Todo"
                value={todoString}
                onChange={e=>setTodoString(e.target.value)}
                
                />
                <InputGroupAddon>
                <Button color="warning">
                    ADD
                </Button>
                </InputGroupAddon>
            </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm;