import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

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
        <Link to="/" className="app-link">
        <h1>
            Image gallery
        </h1>
        </Link>
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
