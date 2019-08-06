import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Index = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Users = () => <h2>Users</h2>

// 这也证明了React-Router是按照代码结构渲染的, 不存在类似Vue的RouterView的API
const AppRouter = () => (
  <Router>
    <Link to='/'>Home</Link> // 
    <Route path='/' exact component={Index} />
    <Link to='/about'>About</Link> // 
    <Route path='/about' component={About} />
    <Link to='/users'>Users</Link> // 
    <Route path='/users' component={Users} />
    <p><strong>这也证明了React-Router是按照代码结构渲染的, 不存在类似Vue的RouterView的API</strong></p>
  </Router>
)

export default AppRouter