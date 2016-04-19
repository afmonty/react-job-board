import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import Home from './Home.js';
import JobPost from './job-post-page';

 

const router = (
 <Router history={hashHistory}>
   <Route path="/" component={Home}/>
   <Route path="/jobpost" component={JobPost}/>
 </Router>  
)
export default router