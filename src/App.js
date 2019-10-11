import React from 'react';
import { Route, Switch } from 'react-router-dom'
import FlashCardList from './components/FlashCardList';
import FlashCard from './components/FlashCard';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';



function App() {
  return (
    <div className="App">
      <div>
      <Navbar/> 
        <Switch>
          <Route exact path='/' render={() => <Header/>}/>
          <Route exact path='/numbers' render={() => <FlashCardList/>}/>
          <Route exact path='/numbers/:name' render={(routeProps) => <FlashCard {...routeProps} />}/>
        </Switch>
    </div>
  </div>
  );
}

export default App;
