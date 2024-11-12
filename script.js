"use strict";

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

function greet(greeting, exclamation) {
  console.log(
    `${greeting}, ${this.firstName} ${this.lastName}! You are ${this.age} years old${exclamation}`
  );
}

greet.call(person, "Hello", "!");

const greetPerson = greet.bind(person);
greetPerson("Hello", "!");

greet.apply(person, ["Hello", "!"]);

const ahmad = {
  firstName: "Ahmad",
  lastName: "Ahmadi",
  age: 25,
};

greet.call(ahmad, "Hi", "!");
