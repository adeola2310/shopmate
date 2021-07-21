import React, {lazy, Suspense} from  "react";
import {Router, Switch, Route} from "react-router-dom";
import { createBrowserHistory } from 'history';
import Layout from "../components/layout/Layout";
import Loader from "../components/Loader/Loader";



// import all pages
const HomePage = lazy(() => import("../pages/Home/HomePage"));

const history = createBrowserHistory();

const Routes = ()=>{
    return (
        <Router history={history}>
            <Switch>
                <Suspense fallback={<Loader />}>
                <Layout >
                    <Route
                        exact
                        path="/"
                        component={HomePage}
                    />
                </Layout>
                    </Suspense>
            </Switch>
        </Router>
    )
}

export default Routes
