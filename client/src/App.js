import * as React from 'react';
import LoginPage from './LoginPage/LoginPage.js';
import Dashboard from './Dashboard/Dashboard.js';
import Home from './Home/Home.js';
import AllBooks from './AllBooks/AllBooks.js';
import AddNewBook from './AddNewBook/AddNewBook.js';
import { Routes, Route } from 'react-router-dom';
import SignUpPage from './LoginPage/SignUpPage.js';
import Master from './Master/Master.js';
import './css/App.css';



function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route element={<Dashboard />}>
            <Route path="/dashboard" element={<Home />} />
            <Route path="/books" element={<AllBooks />} />
            <Route path="/books/:bookTitle" element={<AddNewBook />} />
            <Route path="/add-new-book" element={<AddNewBook />} />
            <Route path="/master" element={<Master />} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;
