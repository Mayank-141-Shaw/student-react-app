import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddStudent from './components/AddStudent';
import DeleteStudent from './components/DeleteStudent';
import Navbar from './components/Navbar';
import ShowStudents from './components/ShowStudents';
import UpdateStudent from './components/UpdateStudent';
import SearchStudent from './components/SearchStudent';
import Home from './components/Home';
import { Container } from '@material-ui/core';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div>
        <Header/>

        <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/show" element={<ShowStudents/>}/>
          <Route path="/delete/:id" element={<DeleteStudent/>} />
          <Route path="/add" element={<AddStudent/>} />
          <Route path="/update/:id" element={<UpdateStudent/>} />
          <Route path="/search" element={<SearchStudent/>} />
        </Routes>
        </main>
      
        <Footer />
      </div>
    </div>
  );
}

export default App;
