import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Askaquestion from "./Pages/Askaquestion";


export const HomeRoute = "/";
export const AboutRoute = "/About/";
export const AskaquestionRoute = "/Askaquestion/";

class Routing extends Component{
    render(){
        return(
            <div className="Routing_path">
                <Route path={HomeRoute} exact component={Home} />
                <Route path={AboutRoute} component = {About} />
                <Route path={AskaquestionRoute} component={Askaquestion} />
            </div>
        );
    }
}

export default withRouter(Routing);
