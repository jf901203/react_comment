import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Add from '../add/add'
import List from '../list/list'
class Comment extends Component {
 
  // 声明当前组件需要用到的属性 声明式编程
  static propTypes={
    todos:PropTypes.array.isRequired,
    addHandle:PropTypes.func.isRequired,
    delHandel:PropTypes.func.isRequired,
    reqComments:PropTypes.func.isRequired
  }

  componentDidMount(){
    this.props.reqComments()
  }

  render() {
    const {todos,addHandle,delHandel} =this.props
    return (
      <div>
         
        <div className="container">
          <Add todos={todos} addHandle={addHandle}/>
          <List todos={todos} delHandel={delHandel}/>
        </div>
        
        
      </div>
    )
  }
}

export default Comment