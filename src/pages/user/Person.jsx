import React from 'react';
import { Route, Switch, useHistory, Link, useParams } from 'react-router-dom';
import Weight from './Weight';
import Blood from './Blood';
import Vital from './Vital';

export default function Person() {
    let history = useHistory();
    let { houseId, id } = useParams();

    const back = () => {
        history.goBack();
    }

    return (
        <Switch>
            <Route exact path={`/user/todo/${houseId}/${id}`}>
                <div className='fullHeight container has-text-white'>
                    <div className='section'>
                        <div className='section has-text-centered is-size-5'>
                            <h1 className='title has-text-white is-2'>บ้านเลขที่ {houseId}</h1>
                            <hr />
                        </div>
                        <div className="tile is-ancestor">
                            <div className="tile is-7 is-vertical is-parent">
                                <div className="tile is-child box">
                                    <div className="columns is-vcentered is-variable is-8">
                                        <div className="column is-one-third">
                                            <figure className="image">
                                                <img src="https://bulma.io/images/placeholders/256x256.png" />
                                            </figure>
                                        </div>
                                        <div className="column">
                                            <ul className='has-text-dark is-size-5'>
                                                <li>ชื่อ: นาง A นามสกุล: B</li>
                                                <li>เพศ: หญิง  ว/ด/ป: 11/11/2506</li>
                                                <li>อายุ: 58 ปี</li>
                                                <li>สถานะภาพสมรส: แต่งงานแล้ว</li>
                                                <li>อาชีพ เกษตรกร</li>
                                                <li>เชื้อชาติ: ไทย สัญชาติ: ไทย</li>
                                                <li>ศาสนา: พุทธ</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="tile is-child">
                                    <p className="title has-text-white">โรคประจำตัว</p>
                                    <p className='box is-size-4'>-</p>
                                </div>
                                <div className="tile is-child">
                                    <p className="title has-text-white">ยาที่ใช้ในปัจจุบัน</p>
                                    <p className='box is-size-4'>-</p>
                                </div>
                            </div>
                            <div className="tile is-parent is-vertical">
                                <div className="tile is-child">
                                    <p className="title has-text-white">Checklists</p>
                                    <div className='box'>
                                        <div className="field is-horizontal">
                                            <div className="field-label">
                                                <label className="label is-size-4">
                                                    <span className="icon-text has-text-success">
                                                        <span className="icon">
                                                            <i className="fas fa-check-circle fa-lg"></i>
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="field-body">
                                                <div className="field">
                                                    <div className="control">
                                                        <p className='is-size-4'>
                                                            <Link to={`/user/todo/${houseId}/${id}/weight`}>
                                                                น้ำหนักส่วนสูง
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field is-horizontal">
                                            <div className="field-label">
                                                <label className="label is-size-4">
                                                    <span className="icon-text has-text-success">
                                                        <span className="icon">
                                                            <i className="fas fa-check-circle fa-lg"></i>
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="field-body">
                                                <div className="field">
                                                    <div className="control">
                                                        <p className='is-size-4'>
                                                            <Link to={`/user/todo/${houseId}/${id}/blood`}>
                                                                เจาะเลือด
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field is-horizontal">
                                            <div className="field-label">
                                                <label className="label is-size-4">
                                                    <span className="icon-text">
                                                        <span className="icon">
                                                            <i className="fas fa-check-circle fa-lg"></i>
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="field-body">
                                                <div className="field">
                                                    <div className="control">
                                                        <p className='is-size-4'>
                                                            <Link to={`/user/todo/${houseId}/${id}/vital`}>
                                                                สัญญาณชีพ
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tile is-child">
                                    <p className="title has-text-white">วันนัดพบแพทย์</p>
                                    <p className='box is-size-4'>{new Date().toDateString()}</p>
                                </div>
                            </div>
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
            <Route path={`/user/todo/:houseId/:id/weight`} component={Weight} />
            <Route path={`/user/todo/:houseId/:id/blood`} component={Blood} />
            <Route path={`/user/todo/:houseId/:id/vital`} component={Vital} />
        </Switch>

    );
}