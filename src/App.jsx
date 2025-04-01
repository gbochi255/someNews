

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticleDetailPage from './components/ArticleDetailPage';
import ArticlesList from './components/ArticlesList';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';


function App() {
  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={<ArticlesList />} />
          <Route path='/articles' element={<ArticlesList />} />
          <Route path='/articles/:article_id' element={<ArticleDetailPage />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App
