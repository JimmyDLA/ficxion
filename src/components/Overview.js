import './__style__.css';
import { InfoBox } from './InfoBox.js';


export const Overview = () => {
    const infoBoxArr = [
        {
            icon: 'languageOutlinedIcon',
            title: 'GLOBAL',
            body: 'Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum.'
        },
        {
            icon: 'roomOutlined',
            title: 'FIND A WAY',
            body: 'Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum.'
        },
        {
            icon: 'forumOutlined',
            title: 'SOCIAL',
            body: 'Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum.'
        },
        {
            icon: 'fingerprintOutlined',
            title: 'SECURITY',
            body: 'Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum.',
        }
    ];

    return (
        <div id="overviewContainer">
            <div id="overviewTop">
                <h1 id="overviewTitle">Welcome to our company</h1>
                <p id="overviewBody">
                    A small river named Duden flows by their place and supplies it with the necessary regelialia, even the 
                    all-powerful pointing has no control about the blind texts it is an almost unorthographic life 
                    one day however a small line of blind text by the name of Lorem Ipsum decided to leave.
                </p>
            </div>
            <div id="overviewBottom">
                {infoBoxArr.map(({icon, title, body}, idx) => (
                    <InfoBox key={`infoBox_${icon}`} icon={icon} title={title} body={body} idx={idx} />
                ))}
            </div>
        </div>
    );
}