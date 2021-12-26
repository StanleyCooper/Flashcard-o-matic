import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home/Home";
import NotFound from "./NotFound";

function Layout() {
  const [deckLength, setDeckLength] = useState(0);
  const updateDecks = (newDecks) => {
    setDeckLength(() => deckLength + newDecks)
  }
  
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}

        <Switch>
          {/* HOME */}
          <Route exact path="/">
            <Home updateDecks={updateDecks} deckLength={deckLength} />
          </Route>
        </Switch>
        <NotFound />
      </div>
    </>
  );
}

export default Layout;
