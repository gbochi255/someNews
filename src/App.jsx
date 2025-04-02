
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import ArticleDetailPage from './components/ArticleDetailPage';
import ArticlesList from './components/ArticlesList';
import TopicsList from './components/TopicsList';
import TopicPage from './components/TopicPage';
import Users from './components/Users';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';


function App() {
  const currentUser = "tickle122";

  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={<Homepage />} /> 
          <Route path='/articles' element={<ArticlesList />} />
          <Route path='/articles/:article_id' element={<ArticleDetailPage currentUser={currentUser} />} />
          <Route path='/topics' element={<TopicsList />} />
          <Route path='/topics/:topic' element={<TopicPage />} />
          <Route path='/users' element={<Users />} />
          <Route path='/*' element={<NotFound />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App
