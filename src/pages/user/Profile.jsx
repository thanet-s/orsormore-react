import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

export default function Profile() {
    let history = useHistory();
    let { path } = useRouteMatch();

    const logout = () => {
        history.push('/');
    }

    return (
        <div className='fullHeight container'>
            <div className='section has-text-centered is-size-5'>
                <h1 className='title has-text-white is-2'>Profile</h1>
                <hr />
            </div>
            <div className="section columns has-text-centered">
                <div className="column">
                    <button className="button is-large is-warning" onClick={() => history.push(`${path}/village`)}>
                        <span className="icon is-small">
                            <i className="fas fa-users"></i>
                        </span>
                        <span>
                            ข้อมูลประชากรในหมู่บ้าน
                        </span>
                    </button>
                </div>
                <div className="column">
                    <button className="button is-large is-warning" onClick={() => history.push(`${path}/todo`)}>
                        <span className="icon is-small">
                            <i className="fas fa-th-list"></i>
                        </span>
                        <span>
                            สิ่งที่ต้องทำ
                        </span>
                    </button>
                </div>
            </div>
            <div className="section columns is-vcentered is-variable is-8">
                <div className="column is-one-third">
                    <figure className="image">
                        <img className="is-rounded" src="https://bulma.io/images/placeholders/256x256.png" />
                    </figure>
                </div>
                <div className="column">
                    <ul className='title box has-text-dark' style={{ opacity: 0.5 }}>
                        <li>นาง A B</li>
                        <li>อายุ 45 ปี</li>
                        <li>บ้านเลขที่ 13</li>
                        <li>อาชีพ เกษตรกร</li>
                        <li>เป็น อสม.ประจำหมู่บ้าน</li>
                    </ul>
                </div>
            </div>
            <div className='section' style={{ paddingBottom: '80px' }}>
                <button className="is-pulled-right button is-medium is-danger" onClick={logout}>
                    <span className="icon is-small">
                        <i className="fas fa-sign-out-alt"></i>
                    </span>
                    <span>
                        Logout
                    </span>
                </button>
            </div>
        </div>
    );
}