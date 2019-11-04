
import {ADDHANDLE,DELHANDEL} from './action-types.js'

// 返回一个action对象
export const addHandle=(todo)=>({type:ADDHANDLE,data:todo})

// 返回一个action对象
export const addHandle=(index)=>({type:DELHANDEL,data:index})