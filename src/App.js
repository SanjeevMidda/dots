import "./index.css";
import Link from "./components/Link";

function App() {
  return (
    <div className="App">
      <header>
        <div className="title">
          <h1>LOIGC STVIO</h1>
          <div className="dot2"></div>
        </div>

        <div className="links">
          <Link name="A" color="orange" />
          <Link name="B" color="blue" />
          <Link name="C" color="pink" />
        </div>
      </header>

      <h2>BAHAUS</h2>
      <section>
        <div className="text">
          <h3>WORK IN PROGRESS</h3>
          <p>
            Postmodernism is a philosophical and cultural movement that emerged
            in the mid-20th century, questioning and challenging traditional
            ideas, structures, and beliefs. It often involves skepticism toward
            grand narratives, embraces eclecticism, and blurs the boundaries
            between high and low culture. Postmodernism influences various
            fields, including art, literature, architecture, and philosophy,
            encouraging a more fragmented and diverse approach to creativity and
            expression.Postmodernism is a philosophical and cultural movement
            that emerged in the mid-20th century, questioning and challenging
            traditional ideas, structures, and beliefs. It often involves
            skepticism toward grand narratives, embraces eclecticism, and blurs
            the boundaries between high and low culture. Postmodernism
            influences various fields, including art, literature, architecture,
            and philosophy, encouraging a more fragmented and diverse approach
            to creativity and expression.
          </p>
        </div>
        <div className="gradient-circle"></div>

        <h4>ㅟ</h4>
      </section>
    </div>
  );
}

export default App;
