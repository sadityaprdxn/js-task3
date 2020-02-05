'use strict';
var movieList;
var movieNames = [];
var narnia = new Movie("narnia", "10-11-1996", "harry swan", "gorge lucifer lucifer");
var jumangi = new Movie("jumangi", "20-12-2017", "dwayne johnson", "matt tolmach");
var sherlock = new Movie("sherlock holmes", "17-10-2019", "michael robert", "joel silver");
var moana = new Movie("moana", "14-11-2016", "moana tui", "osnat shurer");
var dolittle = new Movie("dolittle", "17-01-2020", "stephen gaghan", "downey roth");
var spotlight = new Movie("spotlight", "03-09-2015", "mark ruffalo", "blye pagon faust");
var hulk = new Movie("hulk", "20-06-2003", "eric bana", "avi arad");
var joker = new Movie("joker", "31-08-2019", "joaquin phoenix", "todd phillips");
var frozen = new Movie("frozen", "19-11-2013", "kristen bell", "peter del vecho");
var movieList = [narnia, jumangi, sherlock, moana, dolittle, spotlight, hulk, joker, frozen];


function Movie(name, date, actor, producer) {
  this.movie_name = name;
  this.release_date = date;
  this.actor_name = actor;
  this.producer_name = producer;
  this.show = show;
  this.result = result;
}

for (var i = 0; i < movieList.length; i++) {
  movieList[i].show();
}

document.querySelector("#submit").addEventListener("click", search);

function search(e) {
  e.preventDefault();

  var parrentChild = document.querySelector(".result");
  var ulRemove = document.querySelectorAll(".result ul:not(:first-of-type)");

  for (var i = ulRemove.length; i > 0; i--) {
    parrentChild.removeChild(parrentChild.children[i]);
  }

  var input = document.querySelector("#name").value.toLowerCase();
  var searchName = [];

  for (var i = 0; i < movieNames.length; i++) {
    var a = movieNames[i];
    if (a.indexOf(input) > -1) {
      searchName.push(a);
    }
  }

  for (var j = 0; j < searchName.length; j++) {
    for (var i = 0; i < movieList.length; i++) {

      if (movieList[i].movie_name == searchName[j] || movieList[i].actor_name == searchName[j]) {
        movieList[i].result();
      }
    }
  }
}


function show() {
  var ulNode = document.createElement("ul");
  var parentNode = document.querySelector(".display");
  for (var specs in this) {

    if (specs !== "show" && specs !== "result") {
      var liNode = document.createElement("li");

      liNode.textContent = (this[specs]);
      ulNode.appendChild(liNode);

      if (specs == "movie_name" || specs == "actor_name") {
        movieNames.push(this[specs]);
      }
    }
  }
  parentNode.appendChild(ulNode);
}

function result() {
  var ulNode = document.createElement("ul");
  var parentNode = document.querySelector(".result");
  for (var specs in this) {

    if (specs !== "show" && specs !== "result") {
      var liNode = document.createElement("li");

      liNode.textContent = (this[specs]);
      ulNode.appendChild(liNode);
    }
  }
  parentNode.appendChild(ulNode);
}