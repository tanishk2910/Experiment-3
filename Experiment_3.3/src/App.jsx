import React from "react";
import { Person, Student, Teacher } from "./classes";

function App() {
  const people = [
    new Person("Alice", 30),
    new Student("Bob", 20, "3rd Year"),
    new Teacher("Charlie", 40, "Mathematics"),
  ];

  return (
    <div>
      <h1>Person Class Hierarchy Demo</h1>
      <ul>
        {people.map((p, index) => (
          <li key={index}>{p.describe()}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
