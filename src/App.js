import './App.css';
import DisplayPosts from './components/DisplayPost';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DisplayPosts></DisplayPosts>
      </header>
    </div>
  );
}

export default App;

// Run
// amplify configure to set up a new amplify profile for the project
// amplify init
// amplify add api
// If you modify the schema, amplify push is necessary & recreate the code
// npm install aws-amplify aws-amplify-react
// import Amplify from 'aws-amplify' in index.js
// import aws_exports from './aws-exports' in index.js
// Add Amplify.configure(aws_exports) in index.js to abstract backend ops
// 