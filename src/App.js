import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Headshot from './assets/Headshot.jpg';
import PortfolioPage from "./components/portfolioPage";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <About />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/portfolio">
                    <PortfolioPage />
                </Route>
                <Route>
                    <Redirect to="/" />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
