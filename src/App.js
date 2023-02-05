import Header from './components/Header';
import Welcome from './components/Welcome';
import AboutMe from "./components/AboutMe";
import MyWork from './components/MyWork';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Welcome/>
      <AboutMe/>
      <MyWork/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
