import React, { Component } from 'react';
import './App.css';

import Card from './Card';
import Counter from './Counter';
import Person from './Person';


export default class App extends Component {
  state = {
    people: [
      {name: "Pierre", age: 23},
      {name: "Paul", age: 12},
      {name: "bertrand", age: 40}
    ]
  }

  // Objectif: 
  // à partir de  -> {name: "Pierre", age: 23}
  // je veux <li>Pierre a 23 ans</li>

  // J'aimerai que ça le fasse pour tous les éléments du tableau
  /*
    [
      <li>Pierre a 23 ans</li>,
      <li>Paul a 12 ans</li>,
      <li>bertrand a 40 ans</li>
    ]
  */

  render() {
    const peopleJSX = this.state.people.map(bouzigouloum => {
      return <li>{bouzigouloum.name} a {bouzigouloum.age} ans</li>
    })
    // Au tout début peopleJSX = []

    // 1er tour, 
    // {name: "Pierre", age: 23} va se mettre dans bouzigouloum
    // <li>Pierre a 23 ans</li>
    // Puis peopleJSX = [<li>Pierre a 23 ans</li>]

    // 2ème élément de mon ancien tableau
    //  {name: "Paul", age: 12} va se mettre dans bouzigouloum
    // <li>Paul a 12 ans</li>
    //  Puis peopleJSX = [<li>Pierre a 23 ans</li>,<li>Paul a 12 ans</li>]

    // 3ème élément de mon ancien tableau
    // {name: "bertrand", age: 40} va se mettre dans bouzigouloum
    // <li>bertrand a 40 ans</li>
    /* Puis peopleJSX = [
      <li>Pierre a 23 ans</li>,
      <li>Paul a 12 ans</li>,
      <li>bertrand a 40 ans</li>
    ]
    */

    return (
      <div className="App">
        <h1>Bienvenue les gens!</h1>

        <ul>
          {peopleJSX}
        </ul>

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
