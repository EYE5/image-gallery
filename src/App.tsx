import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Components
import ImageList from "./components/image-list/ImageList";
import ImageModal from "./components/image-list-item-modal/ImageModal";

//Styles
import './App.css';

const App = () => {
  return (
  <Router>
    <div>
      <header>
        <h1>
            Image gallery
        </h1>
      </header>
    <main>
      <Switch>
        <Route exact path="/" component={ImageList} />
        <Route path="/image/:itemID" component={ImageModal} />
      </Switch>
    </main>
    </div>
  </Router>
  );
}

export default App;
