import './__style__.css';
import { ProjectBox } from './ProjectBox.js';
import webApp from '../assets/images/web_app.png';
import mobileApp from '../assets/images/mobile_app.png';

export const Projects = () => {
  const info = 'Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.';
  const projectArr = [
    {pic: webApp, title: 'Retro Snake', info},
    {pic: mobileApp, title: 'MobileIM', info},
    {pic: webApp, title: 'JDLA Portfilio', info},
    {pic: mobileApp, title: 'FIGRD', info},
    {pic: webApp, title: 'NYC Wreck-a-mended', info},
    {pic: webApp, title: 'Blink', info},
  ]
  return (
    <div id="projContainer">
      <h1 id="projTitle">Projects</h1>
      <hr />
      <div className="allProjContainer">
        {projectArr.map((proj, i) => (
          <ProjectBox key={`projectBox${i}`} title={proj.title} pic={proj.pic} info={proj.info} />
        ))}
      </div>
    </div>
  )   
}