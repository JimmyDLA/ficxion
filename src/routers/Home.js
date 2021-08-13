import './Home.css';
import { NavBar } from '../components/NavBar.js';
import { Overview } from '../components/Overview.js';
import { Service } from '../components/Service.js';
import { Projects } from '../components/Projects.js';
import { Contact } from '../components/Contact.js';
import video from '../assets/videos/tech_global.mp4';
import logo from '../assets/images/tech_logo2.png';

const Landing = () => (
    <div className="container">
      <div className="content">
        <div id="logoContainer">
          <img src={logo} alt="logo" id="logo" width="80" height="80" />
          <h1 className="title">Ficxion Dev.</h1>
        </div>

        <h2>Making Imagination, Reality </h2>
      </div>
      <video autoPlay muted loop id="myVideo">
          <source id="src" src={video} type="video/mp4" />
      </video>
    </div>
)
export const Home = () => {
    return (
      <div className="superCont">
        <Landing />
        <NavBar />
        <Overview />
        <Service />
        <Projects />
        <Contact />
      </div>
    );
}