import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as string_decoder from "string_decoder";
import internal from "stream";
import {scryRenderedComponentsWithType} from "react-dom/test-utils";

function App() {

    type student = {
        id: string,
        name:  string,
    }
    const students: student [] = [
        {id:"1", name:"Michael"},
        {id:"2", name:"Kristina"},
        {id:"3", name:"Christian"},
        {id:"4", name:"Svenia"},
        {id:"5", name:"Christian"},
        {id:"6", name:"Klaus"}
    ]

    function changeStudentName(id: string, newName:string){
        return students.map((student) =>{
            if(student.id===id){
              // return student.name=newName;
                return {...student, name: newName}; //created new array with new student
            //}else{
             //   return "Studetn wih id " + id + " not found!";
            }
            return student;
        });
    }
    console.log("before: ");
    console.log(students);

    console.log("after: ");
    console.log(changeStudentName("1","vonWaldhofen"));

  //const arrayNumbers: number[] = [1, 2, 3, 3, 5, 1, 2, 3, 4, 5] //Klammern für Array
  //const foundNumber: number | undefined = arrayNumbers.find((currentNumber: number):boolean =>{return currentNumber === 5;});
  //console.log(foundNumber);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
