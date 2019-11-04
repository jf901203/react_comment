
import {React} from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
 
  
  static propTypes={
    todos:PropTypes.array.isRequired,
    addHandle:PropTypes.func.isRequired,
    delHandel:PropTypes.func.isRequired
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