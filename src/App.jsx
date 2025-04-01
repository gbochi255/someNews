import { useState } from 'react'
import React from 'react'
import ArticlesList from './components/ArticlesList';
import ArticleCard from './components/ArticleCard';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticleDetailPage from './components/ArticleDetailPage';
import Header from './components/Header';
import Footer from './components/Footer';
import CommentsList from './components/CommentsList';
import CommentCard from './components/CommentCard';

function App() {
  

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<ArticlesList />} />
          <Route path='/articles' element={<ArticlesList />} />
          <Route path='/articles/:articleId' element={<ArticleDetailPage />} />
          <Route path='/articles/:id' element={<ArticleDetailPage />} />
        </Routes>
    </main>
    <Footer />
    </Router>
  );
}

export default App
