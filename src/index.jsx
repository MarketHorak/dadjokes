import React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
/* import './index.html'; */
import './style.css';
import users from './users/user01.png';

const App = () => { 

 const [upLikes, setUpLikes] = useState (0);
 const handleClick = () => {
   setUpLikes(upLikes+1);
 };

 const [downLikes, setDownLikes] = useState (0);
 const handleClick1 = () => {
  setDownLikes(downLikes+1);
 };

 //tady to chvi jeste zjednodusit ... dopsat!!!!
 
  return (
    <>
  <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={users}/>
            <p className="user-name">Neroxx</p>
          </div>

          <p className="joke__text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
        </div>
        <div className="joke__likes">
          <button  id="btn-up" className="btn-like btn-like--up" onClick={handleClick}></button>
          <span id="likes-up" className="likes-count likes-count--up">{upLikes}</span>
          <button id="btn-down" className="btn-like btn-like--down" onClick={handleClick1}></button>
          <span id="likes-down" className="likes-count likes-count--down">{downLikes}</span>
        </div>
      </div>
    </div>
    </>
);
};

render(<App />, document.querySelector('#app'));
