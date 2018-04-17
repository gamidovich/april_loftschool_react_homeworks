import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'components/App';
import { BrowserRouter } from 'react-router-dom';

<<<<<<< HEAD
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
=======
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
>>>>>>> ee9154f469f88197cfa8ca9daceaa7860685ba7e
