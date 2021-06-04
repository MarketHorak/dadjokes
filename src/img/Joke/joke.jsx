/* Vytvořte komponentu Joke, která zobrazuje jeden vtip. Tato komponenta bude sídlet ve vlastní složce 
se všemi potřebnými CSS styly a obrázky. Komponenta Joke nechť má pět props: userAvatar, userName, text,
 likes, dislikes.V hlavním souboru projektu importujte pole objektů ze souboru jokes.js. 
 Zobrazte každý vtip z pole pomocí komponenty Joke.
Zvažte, která vlastnost ze zobrazovaných dat se nejlépe hodí pro key prop vaší komponenty a použijte ji jako key. */

import React from 'react';
import { useState } from 'react';

import './style.css';


const Joke = ({userAvatar, userName, text, likes, dislikes}) =>
{
    
 const [upLikes, setUpLikes] = useState (likes);
 const likes = () => {
   setUpLikes(upLikes+1);
 };

 const [downLikes, setDownLikes] = useState (dislikes);
 const dislikes = () => {
  setDownLikes(downLikes+1);
 };
 const userAvatar = user.id
 const userName = user.name
 //tady to chvi jeste zjednodusit ... dopsat!!!!
 return (
    <>
 <div className="joke__body">
 <div className="joke__user">
   <img className="user-avatar" src={userAvatar}/>
   
   <p className="user-name">{userName}</p>
 </div>

 <p className="joke__text">{text}</p>
</div>
<div className="joke__likes">
 <button  id="btn-up" className="btn-like btn-like--up" onClick={likes}></button>
 <span id="likes-up" className="likes-count likes-count--up">{upLikes}</span>
 <button id="btn-down" className="btn-like btn-like--down" onClick={dislikes}></button>
 <span id="likes-down" className="likes-count likes-count--down">{downLikes}</span>
</div>
</>
 );

};

export default Joke;