import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [students, setStudents] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    setStudents({
      name: name,
      age: age,
      email: email
    });
  }

  return (
    <div>
      <h1>STUDENT</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {students && (
        <div>
          <h2>Student Details</h2>
          <p>Name: {students.name}</p>
          <p>Age: {students.age}</p>
          <p>Email: {students.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;