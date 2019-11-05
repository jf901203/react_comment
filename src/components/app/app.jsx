
import {connect} from 'react-redux'
import Comment from './comment.jsx'
import {addHandle,delHandel,reqComments} from '../../store/actions'
import './app.css'

// 把一般属性和函数属性传递给Comment UI组件
export default connect(state=>({
  todos:state.comments
}),{addHandle,delHandel,reqComments})(Comment)
 
