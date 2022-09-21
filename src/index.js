import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
/*
class App extends Component {
 render() {
   return (
     <div>This is a React component inside of Webflow!</div>
  )
}
}

ReactDOM.render(
React.createElement(App, {}, null),
document.getElementById('react-target')
);
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);