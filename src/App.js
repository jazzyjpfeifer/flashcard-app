import React from 'react';
import { Route, Switch } from 'react-router-dom'
import FlashCardList from './components/FlashCardList';
import FlashCard from './components/FlashCard';
import { Header } from './components/Header';
import NoRoute from './components/NoRoute';
import Navbar from './components/Navbar';




function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => <Header/>}/>
          <Route exact path='/numbers' render={() => <FlashCardList/>}/>
          <Route exact path='/numbers/:name' render={(routeProps) => <FlashCard {...routeProps} />}/>
          <Route path="*">
            <NoRoute />
          </Route>
        </Switch>
    </div>
  </div>
  );
}

export default App;
