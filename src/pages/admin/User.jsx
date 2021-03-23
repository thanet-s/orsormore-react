import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function User() {
    let history = useHistory();
    const [users, setUsers] = useState([
        {
            _id: 1,
            firstName: 'นางบี',
            lastName: 'มีความสุข',
            age: 45,
            job: 'เกษตรกร',
            cardId: '4444444444444',
            user: 'AB1234',
            psss: '1234'
        }, {
            _id: 2,
            firstName: 'นายโอ',
            lastName: 'มีความสุข',
            age: 44,
            job: 'เกษตรกร',
            cardId: '4444444444444',
            user: 'AB1234',
            psss: '1234'
        }
    ]);

    const remove = e => {
        const id = parseInt(e.target.value);
        setUsers(users.filter(item => item._id !== id));
    }

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [idCard, setIdCard] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLasrName] = useState('');
    const [age, setAge] = useState('');
    const [job, setJob] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            setUsers([
                ...users,
                {
                    _id: users[users.length-1]._id + 1,
                    firstName: firstName,
                    lastName: lastName,
                    age: parseInt(age),
                    job: job,
                    cardId: idCard,
                    user: user,
                    pass: pass
                }
            ]);
        } catch {
            setUsers([
                ...users,
                {
                    _id: 1,
                    firstName: firstName,
                    lastName: lastName,
                    age: parseInt(age),
                    job: job,
                    cardId: idCard,
                    user: user,
                    pass: pass
                }
            ]);
        }
        setFirstName('');
        setLasrName('');
        setAge('');
        setJob('');
    }

    const back = () => {
        history.goBack();
    }
    return (
        <div className='fullHeight container'>
            <div className='section has-text-centered is-size-5'>
                <h1 className='title has-text-white is-2'>อสม.</h1>
                <hr />
            </div>
            <div className='section'>
                <div className='table-container'>
                    <table className="table is-fullwidth is-striped is-hoverable is-size-5">
                        <thead className='has-background-warning'>
                            <tr>
                                <th>อสม.</th>
                                <th><span className='is-pulled-right'>ลบ</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(x => (
                                    <tr key={x._id}>
                                        <td>{x.firstName} {x.lastName}</td>
                                        <td>
                                            <button className="button is-small is-danger is-pulled-right" value={x._id} onClick={remove}>
                                                <span className="icon">
                                                    <i className="fas fa-trash-alt"></i>
                                                </span>
                                                <span>
                                                    ลบ
                                                </span>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='section'>
                <h1 className='title has-text-centered has-text-white'>เพิ่ม</h1>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label has-text-white">ชื่อ</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-medium" type="text" placeholder="นางบี" value={firstName} onChange={e => setFirstName(e.target.value)} />
                            <span className="icon is-small is-left">
                                <i className="fas fa-signature"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-white">สกุล</label>
                        <div className="control has-icons-left">
                            <input className="input is-medium" type="text" placeholder="มีความสุข" value={lastName} onChange={e => setLasrName(e.target.value)} />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user-friends"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-white">อายุ</label>
                        <div className="control has-icons-left">
                            <input className="input is-medium" type="number" placeholder="45" value={age} onChange={e => setAge(e.target.value)} />
                            <span className="icon is-small is-left">
                                <i className="fas fa-hat-cowboy"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-white">อาชีพ</label>
                        <div className="control has-icons-left">
                            <input className="input is-medium" type="text" placeholder="เกษตรกร" value={job} onChange={e => setJob(e.target.value)} />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user-md"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-white">เลขบัตร ปชช.</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-medium" type="text" placeholder="xxxxxxxxxxxxx" value={idCard} onChange={e => setIdCard(e.target.value)} />
                            <span className="icon is-small is-left">
                                <i className="fas fa-id-card"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-white">Username</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input is-medium" type="text" placeholder="Username" value={user} onChange={e => setUser(e.target.value)} />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-white">Password</label>
                        <div className="control has-icons-left">
                            <input className="input is-medium" type="password" placeholder="Password" value={pass} onChange={e => setPass(e.target.value)} />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field has-text-centered">
                        <button type="submit" className="button is-medium is-primary">
                            <span className="icon is-small">
                                <i className="fas fa-save"></i>
                            </span>
                            <span>
                                เพิ่ม
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
            </div>
        </div>
    );
}