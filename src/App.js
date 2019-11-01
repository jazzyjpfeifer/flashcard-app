import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import FlashCardList from './components/FlashCardList';
import FlashCard from './components/FlashCard';
import { Header } from './components/Header';
import NoRoute from './components/NoRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
    <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => <Header/>}/>
          <Route exact path='/numbers' render={() => <FlashCardList/>}/>
          <Route exact path='/numbers/:name' render={(routeProps) => <FlashCard {...routeProps} />}/>
          <Route path="*">
            <NoRoute />
          </Route>
        </Switch>
      <Footer />
    </div>
    );
  }
}

export default App;
