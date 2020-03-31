// app内に存在するreducerを総括する、結合する役割

import { combineReducers } from 'redux'
import count from './count'

// store作成時に必要
export default combineReducers({ count })

