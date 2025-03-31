import { useState } from 'react'
import React from 'react'
import ArticlesList from './components/ArticlesList';
import ArticleCard from './components/ArticleCard';
import './App.css';

function App() {
  

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Some Ncnews</h1>
      </header>
      <ArticlesList />
      <ArticleCard />
    </div>
  );
}

export default App
