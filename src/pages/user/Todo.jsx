import React from 'react';
import { Switch, Route, useHistory, Link, useRouteMatch } from 'react-router-dom';
import House from './House';

export default function Todo() {
    let history = useHistory();
    let { path } = useRouteMatch();

    const back = () => {
        history.goBack();
    }

    return (
        <Switch>
            <Route exact path={`${path}`}>
                <div className='fullHeight container has-text-white'>
                    <div className='section has-text-centered is-size-5'>
                        <h1 className='title has-text-white is-2'>TO-DO LIST</h1>
                        <hr />
                        <p>DATE: {new Date().toDateString()}</p>
                        <p>เจ้าหน้าที่ อสม.: นาง A</p>
                    </div>
                    <div className='section'>
                        <div className='table-container'>
                            <table className="table is-fullwidth is-striped is-hoverable is-size-5">
                                <thead className='has-background-warning'>
                                    <tr>
                                        <th>CHECK</th>
                                        <th>หมู่</th>
                                        <th>บ้านเลขที่</th>
                                        <th>เจ้าของบ้าน</th>
                                        <th>อสม.รับผิดชอบ</th>
                                        <th>เบอร์โทรติดต่อ</th>
                                        <th className='is-pulled-right'>รายละเอียด</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>
                                            <span className="icon-text has-text-success">
                                                <span className="icon">
                                                    <i className="fas fa-check-circle fa-lg"></i>
                                                </span>
                                            </span>
                                        </th>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>นาง A</td>
                                        <td>นาง B</td>
                                        <td>0999999999</td>
                                        <td>
                                            <Link to={`${path}/1`}>
                                                <button className='button is-link is-small is-pulled-right'>Click</button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <span className="icon-text">
                                                <span className="icon">
                                                    <i className="fas fa-check-circle fa-lg"></i>
                                                </span>
                                            </span>
                                        </th>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>นาง A</td>
                                        <td>นาง B</td>
                                        <td>0999999999</td>
                                        <td>
                                            <Link to={`${path}/1`}>
                                                <button className='button is-link is-small is-pulled-right'>Click</button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <span className="icon-text">
                                                <span className="icon">
                                                    <i className="fas fa-check-circle fa-lg"></i>
                                                </span>
                                            </span>
                                        </th>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>นาง A</td>
                                        <td>นาง B</td>
                                        <td>0999999999</td>
                                        <td>
                                            <Link to={`${path}/1`}>
                                                <button className='button is-link is-small is-pulled-right'>Click</button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <span className="icon-text">
                                                <span className="icon">
                                                    <i className="fas fa-check-circle fa-lg"></i>
                                                </span>
                                            </span>
                                        </th>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>นาง A</td>
                                        <td>นาง B</td>
                                        <td>0999999999</td>
                                        <td>
                                            <Link to={`${path}/1`}>
                                                <button className='button is-link is-small is-pulled-right'>Click</button>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='section' style={{ paddingBottom: '80px' }}>
                        <button className="button" onClick={back}>
                            <span className="icon is-small">
                                <i className="fas fa-chevron-left"></i>
                            </span>
                            <span>
                                Back
                            </span>
                        </button>
                    </div>
                </div>
            </Route>
            <Route path={`${path}/:houseId`} component={House} />
        </Switch>

    );
}