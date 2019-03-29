"use strict";


function Person(ad, surname, city){
    this.name = ad;
    this.surname = surname;
    this.city = city;
}

function City(name, country){
    this.name = name;
    this.country = country;
}

function Student(studentInfo){
    this.info = studentInfo;
    this.scores = [];
    this.addScore = function(score){
        this.scores.push(score);
    }
}


let arzuCity = new City("Ordubad", "ORDUBAD");
let arzu = new Person("Arzu", "Quliyev", arzuCity);

let arzuStudent = new Student(arzu);

console.log(arzuStudent);


function addNewScore(){
    let bal = document.querySelector(".scoreInput2").value;
    arzuStudent.addScore(Number(bal));
    console.log(arzuStudent);
}