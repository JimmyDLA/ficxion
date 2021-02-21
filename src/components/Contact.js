import './__style__.css';
import { useState, useEffect } from 'react';
import { form, Button, TextField } from '@material-ui/core';
import Twitter from '@material-ui/icons/Twitter';
import Facebook from '@material-ui/icons/Facebook';
import YouTube from '@material-ui/icons/YouTube';
import GitHub from '@material-ui/icons/GitHub';

import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

export const Contact = () => {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   alert('Contact: side effect');
  //   return () => {console.log('completed')}
  // }, []
  // )

  return (
    <div id="contactContainer">
      <div id="contactTop">
        <div id="contactOffset">
          <h1 id="contactTitle">GET IN TOUCH</h1>
          <p id="contactSubtitle">
            Epsum factorial non deposit quid pro quo hic escorol.<br />
            Olypian quarrels et gorilla congolium sic ad nauseum.
          </p>
          <div id="contactForm">
            <div id="formContainer">
              <p className="formTitle">Send your request</p>
              <form id="formId" noValidate autoComplete="off">
                <TextField id="standard-basic" label="Name"/>
                <TextField id="standard-basic" label="Email"/>
                <TextField id="standard-basic" label="Subject"/>
                <TextField id="outlined-basic" label="Message" />
                <div className="formButton">
                  <Button style={{backgroundColor: '#069be2', color: 'white'}} variant="contained" className="formButton" >
                    Send
                  </Button>
                </div>
              </form>
            </div>
            <div id="contactInfo">
              <p className="formTitle">Contact Information</p>
              <div className="contactRow">
                <p id="contactKey">Address</p>
                <p id="contactValue">98-01 67th ave. Rego Park, NY 11374</p>
              </div>
              <div className="contactRow">
                <p id="contactKey">Phone</p>
                <p id="contactValue">917-558-6221</p>
              </div>
              <div className="contactRow"> 
                <p id="contactKey">E-mail</p>
                <p id="contactValue">Ficxion@me.com</p>
              </div>

              <div className="contactRow" id="bottomContactRow"> 
                <Twitter style={{fontSize: 30}} className="icons" />
                <Facebook style={{fontSize: 30}} className="icons" />
                <YouTube style={{fontSize: 30}} className="icons" />
                <GitHub style={{fontSize: 30}} className="icons" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contactBottom" />
    </div>
  );
}