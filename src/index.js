import  React from 'react'
// 渲染真实DOM
import  ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import App from './components/app/app.jsx'
import store from './store'
ReactDOM.render(
<Provider store={store}>
 <App />
</Provider>,
document.getElementById('root'))