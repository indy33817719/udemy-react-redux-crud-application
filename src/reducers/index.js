// app内に存在するreducerを総括する、結合する役割

import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import events from './events'

// store作成時に必要
export default combineReducers({ events, form})

