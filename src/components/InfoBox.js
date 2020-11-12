import './__style__.css';
import { Icon } from '@material-ui/core';

export const InfoBox = ({icon, title, body, idx}) => {
    const isEven = idx % 2 === 0;
    const idName = isEven ? 'iconEven' : 'iconOdd';
    return (
        <div id="infoBoxContainer">
            <Icon id={idName}>{icon}</Icon>
            <h5 id="infoBoxTitle">{title}</h5>
            <p id="infoBoxBody">{body}</p>
        </div>
    );
}