
import {combineReducers} from 'redux'

import {ADDHANDLE,DELHANDEL,RECIVE_COMMENT} from './action-types.js'

const initComment=[]
 
// state是老的状态  action参数是action对象  原来老的状态不能改 必须产生一个新的状态
// filter()过滤数组 不会改变原来的数组 返回一个新的数组
/*
action是操作当前state状态的行为
*/ 
 function comments(state=initComment,action) {
  // 操作initComment数据的行为
  switch (action.type) {
    case ADDHANDLE:
      // ...state 数据解构
      return [action.data,...state]

    case DELHANDEL:
      // 产生的新数组就是我需要的新的状态
      return state.filter((todo,index)=>index!==action.data)
    case RECIVE_COMMENT:
      return action.data 
    default:
      return state;
  }


  }

  // 向外暴露state对象  这个对象中包含comments属性
  export default combineReducers({
    comments
  })