

import {ADDHANDLE,DELHANDEL} from './action-types.js'

const initComment=[
  
  {name:'张三',text:'还不错'}

]
 
// state是老的状态  action参数是action对象  原来老的状态不能改 必须产生一个新的状态
// filter()过滤数组 不会改变原来的数组 返回一个新的数组
/*



*/ 
export function comments(state=initComment,action) {
  // 操作initComment数据的行为
  switch (action.type) {
    case ADDHANDLE:
      // ...state 数据解构
      return [action.data,...state]

    case DELHANDEL:
      // 产生的新数组就是我需要的新的状态
      return state.filter((todo,index)=>index!=action.data)
    default:
      return state;
  }


  }