
import {ADDHANDLE,DELHANDEL,RECIVE_COMMENT} from './action-types.js'

// 返回一个action对象 同步 提交一个action给reducers 去新创建一个state状态
export const addHandle=(todo)=>({type:ADDHANDLE,data:todo})

// 返回一个action对象 同步 提交一个action给reducers
export const delHandel=(index)=>({type:DELHANDEL,data:index})
// 同步  提交一个action给reducers 
const reciveComments=(initComment)=>({type:RECIVE_COMMENT,data:initComment})

// 异步获取数据  在组件的声明周期中触发这个函数
export const reqComments=()=>{
  return dispatch=>{
   setTimeout(()=>{
    // 异步拿到数据
    const initComment=[
      {name:'张三',text:'还不错'}
    ]
    // 分发一个action
    dispatch(reciveComments(initComment))

   },1000)

  }


}