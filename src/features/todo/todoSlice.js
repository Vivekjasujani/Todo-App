import {createSlice,nanoid} from '@reduxjs/toolkit'
const initialState= {
    todos:[
        {id:1,Text:"Hello world",}
    ]
}
export const todoSlice=createSlice({
    name : 'todo',
    initialState,
    reducers:{
        addTodo:(state,action) => {
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!=action.payload)
        },
        updateTodo:(state,action)=>{
            state.todos.filter((todo)=>todo.id===action.payload ? todo.Text=action.payload:todo.Text)
        }
    }
})
export const {addTodo,removeTodo,updateTodo}=todoSlice.actions // this export is done for components so that these functions can be used there
export default todoSlice.reducer // this export is done for store as store ko bhi to pta hona chiye reducers ke baare mei