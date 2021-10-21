import React, {useState} from 'react';
import Typical from 'react-typical';
import axios from 'axios';
import {toast} from 'react-toastify';

import imgBack from '../../../src/images/mailz.jpeg';
import load1 from '../../../src/images/load2.gif';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './ContactMe.css'

export default function ContactMe(props) {

    let fadeInScreenHandler=(screen)=>{
        if(screen.fadeInScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    };

     const fadeInSubscription = 
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [message, setMessage] = useState("");
        const [banner, setBanner] = useState("");
        const [bool, setBool] = useState(false);

        const handleName = (e)=> {
            setName(e.target.value);
        };
        const handleEmail = (e) => {
            setEmail(e.target.value);
        };
        const handleMessage = (e) => {
            setMessage(e.target.value);
        };
        console.log(name);
        const submitForm = async(e) => {
            e.preventDefault();
            try {
                let data = {
                    name,
                    email,
                    message,
            };
             setBool(true)
             const res = await axios.post(`/contact`, data);
             if(name.length === 0 || email.length === 0 || message.length === 0) {
                 setBanner(res.data.msg)
                 toast.error(res.data.msg)
                 setBool (false)
             } else if (res.status ===200) {
                setBanner(res.data.msg);
                toast.success(res.data.msg);
                setBool (false);

                setName("")
                setEmail("")
                setMessage("")
            }
            
            } catch (error) {
                console.log(error)
            }
           
            };

    return (
        <div className='main-container' id={props.id|| ''}>
            <ScreenHeading
            subHeading={"Let's keep in touch!"}
            title={"Contact Me"}/>
            <div className='central-form'>
                <div className='col'>
        
                <h2 className='title'>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Reach me out on Socials",
                    3000,
                    "Facebook",
                    3000,
                    "Instagram",
                    3000,
                    "LinkedIn",
                    3000,
                    "GitHub",
                    3000,
                  ]}
                />
              </h2>
              <a href="https://www.facebook.com/profile.php?id=100019503108964">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/veiyie/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/vei-yie-8b3286137/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/bunnyvy">
                <i className="fa fa-github"></i>
              </a>
            </div>
            <div className='back-form'>
                <div className='img-back'>
                I am seeking out opportunities to collaborate with companies/agencies/individuals, not just work for them. I want to bring my collective design experience from my Bachelor degree to the table where we can work together to solve real business-problems in a way that optimises all of our respective experience and knowledge. 
                </div>
                <form onSubmit={submitForm}>
                  <p>{banner}</p>
                  <label htmlFor='name'>Name</label>
                  <input type="text"
                      onChange={handleName}
                      value={name}
                  />

                  <label htmlFor='email'>Email</label>
                  <input type='email'
                      onChange={handleEmail}
                      value={email}
                  />

                  <label htmlFor='message'>Message</label>
                  <textarea type="text"
                      onChange={handleMessage}
                      value={message}
                  />

                  <div className="send-btn">
                      <button type="submit">
                          Send 
                          <i className='fa fa-paper-plane'/>
                          {bool?(<b className='load'>
                              <img src={load1} alt='image not responding'/>
                          </b>):("")}
                      </button>
                  </div>
                </form>
            </div>
            </div>
        </div>
        
    )
}
