import './__style__.css';
import iphone from '../assets/images/iphone_x2.png';
import macbook from '../assets/images/macbook.png';
import macDesktop from '../assets/images/mac_desktop.png';
import webpage from '../assets/images/webpage.png';
import webpage2 from '../assets/images/webpage2.png';

export const Service = () => {

    return (
        <div id="serviceContainer">
            <div id="serviceTop">
                <div id="serviceTopLeft">
                    <div id="serviceBodyCont">
                        <h5 id="serviceTitle">Great</h5>
                        <h5 id="serviceTitle">Features</h5>
                        <p id="serviceBody">
                            Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, 
                            vestibulum in vulputate at, tempus viverra turpis.
                        </p>
                    </div>
                </div>
                <div id="serviceTopRight">
                    <img id="iphoneImg" height="600" src={iphone} />
                </div>
            </div>
            <div id="serviceBottom">
                <div id="serviceBottomLeft">
                    <img id="macbookImg" src={macbook} />
                    <img id="webpage" src={webpage} height="270" width="435" />
                </div>
                <div id="serviceBottomRight">
                    <div id="serviceBodyContBottom">
                        <h5 id="serviceTitle">Smart</h5>
                        <h5 id="serviceTitle">Designs</h5>
                        <p id="serviceBodyBottom">
                            Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, 
                            vestibulum in vulputate at, tempus viverra turpis.
                        </p>
                    </div>
                </div>
            </div>
            <div className="lastSection" id="serviceTop">
                <div id="serviceTopLeft">
                    <div id="serviceBodyCont">
                        <h5 id="serviceTitle">Creative</h5>
                        <h5 id="serviceTitle">Solutions</h5>
                        <p id="serviceBody">
                            Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, 
                            vestibulum in vulputate at, tempus viverra turpis.
                        </p>
                    </div>
                </div>
                <div id="serviceTopRight">
                    <img height="450" src={macDesktop} />
                    <img id="webpage2" src={webpage2} height="290" width="510" />
                </div>
            </div>
        </div>
    );
}