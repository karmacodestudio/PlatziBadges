import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import Layout from './Layout'
import NotFound from '../pages/NotFound'
import BadgeEdit from '../pages/BadgeEdit'
import BadgeDetails from '../pages/BadgeDetailsContainer'
function App(){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path ="/badges" component={Badges} />
                    <Route exact path ="/badges/new" component={BadgeNew} />
                    <Route exact path ="/badges/:badgeId/edit" component={BadgeEdit} />
                    <Route exact path ="/badges/:badgeId" component={BadgeDetails} />
                    <Route component={NotFound}></Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App