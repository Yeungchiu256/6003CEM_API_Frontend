//import 'antd/dist/reset.css'
//import { Card, Button, DatePicker } from 'antd'
//import Hello from './components/Hello'
//import GoodBye from './components/Goodbye'
//import BlogHome from './components/Bloghome'
import React from 'react'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import About from './components/About'
import DetailArticle from './components/DetailArticles'
import Article from './components/Articles'
import NewCat from './components/NewCat'
import Catimage from './components/Catimage';

import { Layout, Space } from 'antd';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;


//export default function App(){
const App = () => {
  return (
    <Router>
      <Header>
        <nav>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/Article">Article</Link>
            <Link to="/DetailArticles">DetailArticle</Link>
            <Link to="/NewCat">New Cat</Link>
          </Space>
        </nav>
      </Header>
      <Content>
        <Routes>
          <Route index element={<Home />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Article" element={<Article />} />
          <Route path="/NewCat" element={<NewCat />} />
          <Route path="/DetailArticles" element={<DetailArticle />} />
        </Routes>
      </Content>
      <Footer>
        <p>
          <h2>
            <span style={{ fontWeight: 'bold' }}>The Pet Shelter Offical App</span>
          </h2>
        </p>
        <p>Shelter cat matching service</p>
      </Footer>
    </Router>
  );
}

export default App;

let counter = 0;

const onChange: DatePickerProps['OnChange'] = (date, dateString) => {
  console.log(date, dateString)
}

const onClick = (event: any) => {
  console.log(counter++)
}

/*export default function App() {
  return (
    <main>
      <>
        <Hello title="Web API Development" subTitle=", By IVE"/>
        <Card title="Default Card" style={{width:300}}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content 123</p>
        </Card>
        <br />
        <Button type="primary" onClick={onClick}>Button</Button>
        <Button type="primary" danger>Button</Button>
        <br />
        <DatePicker onChange={onChange} />
        <GoodBye name="all"/>
        <BlogHome />
      </>
    </main>
  )
}*/
