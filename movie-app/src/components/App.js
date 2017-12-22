import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import MovieListContainer from './MovieListContainer';
import MovieDetailContainer from './MovieDetailContainer';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="movie">
                    <Switch>
                        <Redirect exact from="/" to="/list" />
                        <Route path="/list" component={MovieListContainer} />
                        <Route exact path="/detail" component={MovieDetailContainer} />
                        <Route path="/detail/:movieid" component={MovieDetailContainer} />
                        <Route component={NoMatch}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

const NoMatch = () => {
    return ( <div>no match</div> );
}

export default App;