import React, { Component } from 'react';
import './App.css';

import Card from './Card';
import Counter from './Counter';
import Person from './Person';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Bienvenue les gens!</h1>

        <Card 
          bachibouzouk="Comment manger une pomme?"
          description="blablablabla" />
        <Card 
          bachibouzouk="Devenir riche grâce au DOGE"
          description="Coucouuuuuuu" />
        <Card 
          bachibouzouk="Savoir faire la roue"
          description="Bonsoir les enfants" />

        <Counter what="mangé" something="nuggets" />
        <Counter what="patchoulé" something="louloutes" />
        <Counter what="bu" something="café" />
        <Counter what="curé" something="nezs" />


        <Person firstname="Pierre" lastname="Paul" />
        <Person firstname="Ju" lastname="Das" />
      </div>
    );
  }
}
