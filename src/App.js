import Header from './components/Header';
import Welcome from './components/Welcome';
import AboutMe from "./components/AboutMe";
import MyWork from './components/MyWork';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Welcome/>
        <AboutMe/>
        <MyWork/>
        <ContactMe/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
