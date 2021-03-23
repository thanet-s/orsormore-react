import React, { useState } from 'react';
import { Switch, Route, useHistory, Link, useParams } from 'react-router-dom';
import Person from './Person';

export default function House() {
    let history = useHistory();
    let { houseId } = useParams();
    const [houseImg, setHouseImg] = useState('https://www.homenayoo.com/wp-content/uploads/2020/06/Grand-V-Home-Bangna.jpg');
    const [status, setStatus] = useState('ตัวบ้านและบริเวณรอบบ้านสะอาด');
    const [finalStatus, setFinalStatus] = useState({
        status: status,
        img: houseImg
    });

    const back = () => {
        history.goBack();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFinalStatus({
            status: status,
            img: houseImg
        });
    }

    return (
        <Switch>
            <Route exact path={`/user/todo/${houseId}`}>
                <div className='fullHeight container has-text-white'>
                    <div className='section has-text-centered is-size-5'>
                        <h1 className='title has-text-white is-2'>บ้านเลขที่ {houseId}</h1>
                        <hr />
                    </div>
                    <div className='section'>
                        <h2 className='title has-text-centered has-text-white'>สมาชิกในบ้าน</h2>
                        <div className='table-container'>
                            <table className="table is-fullwidth is-striped is-hoverable is-size-5">
                                <thead className='has-background-warning'>
                                    <tr>
                                        <th>CHECK</th>
                                        <th>ที่</th>
                                        <th>ชื่อ</th>
                                        <th>นามสกุล</th>
                                        <th>สถานะ</th>
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
                                        <td>นาง A</td>
                                        <td>B</td>
                                        <td>ไม่มีโรคประจำตัว</td>
                                        <td>
                                            <Link to={`/user/todo/${houseId}/1`}>
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
                                        <td>นาง A</td>
                                        <td>B</td>
                                        <td>ไม่มีโรคประจำตัว</td>
                                        <td>
                                            <Link to={`/user/todo/${houseId}/1`}>
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
                                        <td>นาง A</td>
                                        <td>B</td>
                                        <td>ป่วย</td>
                                        <td>
                                            <Link to={`/user/todo/${houseId}/1`}>
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
                                        <td>นาง A</td>
                                        <td>B</td>
                                        <td>ป่วย</td>
                                        <td>
                                            <Link to={`/user/todo/${houseId}/1`}>
                                                <button className='button is-link is-small is-pulled-right'>Click</button>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='section'>
                        <h2 className='title has-text-centered has-text-white'>สภาพความเป็นอยู่</h2>
                        <div className='box'>
                            <div className='columns is-variable is-8'>
                                <div className="column">
                                    <p className='title is-4 has-text-grey'>
                                        {finalStatus.status}
                                    </p>
                                </div>
                                <div className="column is-one-third">
                                    <figure className="image">
                                        <img src={finalStatus.img} />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='section'>
                        <h2 className='title has-text-centered has-text-white'>แก้ไข</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="field">
                                <label className="label has-text-white">สภาพความเป็นอยู่</label>
                                <textarea className="textarea is-medium" value={status} onChange={e => setStatus(e.target.value)} ></textarea>
                            </div>
                            <div className="field">
                                <label className="label has-text-white">รูปภาพบ้าน</label>
                                <div className="control has-icons-left">
                                    <input className="input is-medium" type="text" value={houseImg} onChange={e => setHouseImg(e.target.value)} />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-images"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="field has-text-centered">
                                <button type="submit" className="button is-medium is-primary">
                                    <span className="icon is-small">
                                        <i className="fas fa-edit"></i>
                                    </span>
                                    <span>
                                        บันทึก
                            </span>
                                </button>
                            </div>
                        </form>
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
                        <button className="button is-pulled-right" onClick={back}>
                            <span className="icon is-small">
                                <i className="fas fa-power-off"></i>
                            </span>
                            <span>
                                Finish
                            </span>
                        </button>
                    </div>
                </div>
            </Route>
            <Route path={`/user/todo/:houseId/:id`} component={Person} />
        </Switch>
    );
}