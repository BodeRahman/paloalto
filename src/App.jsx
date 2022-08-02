import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Introduction from './components/Introduction';
import FAQ from './components/FAQ'
import Footer from './components/Footer';
import CallForPaper from './components/CallForPaper';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <Router>
            <React.Fragment>
                <Header />
                    <div className="pageContainer">
                        <Banner />
                        <Introduction />
                        <FAQ />
                        <Switch>
                            <Route exact path="/CallForPaper" component={CallForPaper}>
                                
                            </Route>
                        </Switch>
                    </div>
                <Footer />
            </React.Fragment>
        </Router>
    );
}

export default App;
