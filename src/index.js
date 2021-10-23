import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MyReads from './MyReads'
import {BrowserRouter as Router} from 'react-router-dom'


ReactDOM.render(<Router><MyReads /></Router>, document.getElementById('root'))
