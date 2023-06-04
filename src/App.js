import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import SectionOne from './Components/SectionOne';
import SectionTwo from './Components/SectionTwo';
import SectionThree from './Components/SectionThree';
import Footer from './Components/Footer';

function App() {
  return (
    <div >
      <body id="page-top">

        <Navbar/>

       <Header/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <Footer/>
      </body>


    </div>
  );
}

export default App;
