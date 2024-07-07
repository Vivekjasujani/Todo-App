import {configureStore} from '@reduxjs/toolkit'
import todoReducer  from '../features/todo/todoSlice';
export const store=configureStore({
    reducer:todoReducer
})



/* this store is restrictive stor harr kisi reducer se value leke update nhi krta hai
jo jo reducers ham yha register krenge keval whi values ko manipulate kr skte hai */