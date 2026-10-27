
import "./App.css";

const students = [
  { id: 1, name: "Balamurugan", email: "bala@example.com" },
  { id: 2, name: "Arun Kumar", email: "arun@example.com" },
  { id: 3, name: "Priya Sharma", email: "priya@example.com" },
];

function App() {
  return (
    <main className="container">
      <section className="student-list">
        {students.map((student) => (
          <article className="student-card" key={student.id}>
            <div className="student-info">
              <h2>{student.name}</h2>
              <p>{student.email}</p>
            </div>
            <button onClick={() => alert(student.name)}>
              Edit
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
