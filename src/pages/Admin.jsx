import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch
} from 'react-router-dom';
import Profile from './admin/Profile';
import Disease from './admin/Disease';
import Med from './admin/Med';
import Village from './admin/Village';
import User from './admin/User';
import House from './admin/House';
import Search from './admin/Search';
import AddPerson from './admin/AddPerson';

export default function Admin() {
    let { path } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path} component={Profile} />
            <Route path={`${path}/disease`} component={Disease} />
            <Route path={`${path}/med`} component={Med} />
            <Route path={`${path}/village`} component={Village} />
            <Route path={`${path}/user`} component={User} />
            <Route path={`${path}/house`} component={House} />
            <Route path={`${path}/search`} component={Search} />
            <Route path={`${path}/addperson`} component={AddPerson} />
        </Switch>
    );
}