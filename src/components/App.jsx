import React from 'react';
import '../css/main.css';
import {
    Switch,
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import Header from './Header';
import Content from '../containers/Content';
import Sidebar from '../containers/Sidebar';
import Footer from './Footer';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Labels from './Labels';

const App = () => (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route key={'/'} path={'/'} component={Content} exact={true} />
                <Route key={'/aboutUs'} path={'/aboutUs'} component={AboutUs} exact={true} />
                <Route key={'/contactUs'} path={'/contactUs'} component={ContactUs} exact={true} />
                <Route key={'/labels'} path={'/labels'} component={Labels} exact={true} />
            </Switch>
            <Sidebar />
            <Footer />
        </div>
    </Router>
)

export default App
