import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch
} from 'react-router-dom';
import Profile from './user/Profile';
import Village from './user/Village';
import Todo from './user/Todo';

export default function User() {
    let { path } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path} component={Profile} />
            <Route path={`${path}/village`} component={Village} />
            <Route path={`${path}/todo`} component={Todo} />
        </Switch>
    );
}