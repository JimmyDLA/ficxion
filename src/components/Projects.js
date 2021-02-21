import './__style__.css';
import { ProjectBox } from './ProjectBox.js';
import webApp from '../assets/images/web_app.png';
import mobileApp from '../assets/images/mobile_app.png';
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';
import project5 from '../assets/images/project5.png';

export const Projects = () => {
  const info = 'Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.';
  const projectArr = [
    {pic: webApp, title: 'Retro Snake', info, url: 'https://jimmydla.github.io/RetroSnake/'},
    {pic: mobileApp, title: 'MobileIM', info, url: 'https://github.com/JimmyDLA/mobileIM'},
    {pic: webApp, title: 'JDLA Portfilio', info, url: 'https://jimmydla.com'},
    {pic: mobileApp, title: 'FIGRD', info, url: 'https://github.com/JimmyDLA/FIGRD'},
    {pic: webApp, title: 'NYC Wreck-a-mended', info, url: 'http://www.nycwreckamended.com/'},
    {pic: webApp, title: 'Blink', info, url: 'https://wid-blink.herokuapp.com/'},
  ]
  return (
    <div id="projContainer">
      <h1 id="projTitle">Projects</h1>
      <hr />
      <div className="allProjContainer">
        {projectArr.map((proj, i) => (
          <ProjectBox key={`projectBox${i}`} title={proj.title} pic={proj.pic} info={proj.info} url={proj.url}/>
        ))}
      </div>
    </div>
  )   
}