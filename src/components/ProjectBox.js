import './__style__.css';

export const ProjectBox = ({pic, title, info}) => {

  return (
    <div className="projBoxCont">
      <img id="projBoxImg" height="300" src={pic} />
      <div id="projBoxOverlay">
        <div id="projInfoCont">
          <h1 id="projBoxTitle">{title}</h1>
          <p id="projBoxInfo">{info}</p>
        </div>
      </div>
    </div>
  );
}