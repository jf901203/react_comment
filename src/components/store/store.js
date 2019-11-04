
import React from 'react'
import {createStore} from 'redux'
import {comments} from './reducers.js'

const store=createStore(comments)

export default store
