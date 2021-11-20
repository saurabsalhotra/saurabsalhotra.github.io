import smiley from './assets/smiling-face-with-sunglasses-apple.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <img src={smiley}/>
      <h1>Welcome to Saurab's World</h1>
      <h2>I'm a software developer with a keen eye for UX.</h2>
      <h3>I code in <span id="typescript">Typescript</span> and <span id="dart">Dart</span>. 
       I am proficient in Frontend Frameworks such as <span id="react">React</span> and <span id="flutter">Flutter</span>. And I like my servers baked in <span id="nodejs">node.js</span></h3>
    </div>
  );
}

export default App;
