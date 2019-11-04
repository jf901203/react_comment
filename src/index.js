import  React from 'react'
// 渲染真实DOM
import  ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import App from './components/app/app'
import store from './store/store'
ReactDOM.render(
<Provider store={store}>
 <App />
</Provider>,
document.getElementById('root'))