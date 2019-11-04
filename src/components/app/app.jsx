import React, { Component } from 'react'
import {connect} from 'react-redux'

import Comment from './comment.jsx'
import {addHandle,addHandle} from '../store/actions'

import './app.css'
import Add from '../add/add'
import List from '../list/list'

// 把一般属性和函数属性传递给Comment UI组件
export default connect(state=>({
  todos:state
}),{addHandle,addHandle})(Comment)
 
