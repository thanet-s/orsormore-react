import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Village() {
    let history = useHistory();
    const [formValue, setFormValue] = useState('');
    const [villa, setVilla] = useState([
        {
            _id: 1,
            name: '1'
        }, {
            _id: 2,
            name: '5'
        }, {
            _id: 3,
            name: '12'
        }
    ]);

    const remove = e => {
        const id = parseInt(e.target.value);
        setVilla(villa.filter(item => item._id !== id));
    }

    const submit = () => {
        try {
            setVilla([...villa, {
                _id: villa[villa.length - 1]._id + 1,
                name: formValue
            }]);
        } catch {
            setVilla([...villa, {
                _id: 1,
                name: formValue
            }]);
        }
        setFormValue('');
    }

    const back = () => {
        history.goBack();
    }
    return (
        <div className='fullHeight container'>
            <div className='section has-text-centered is-size-5'>
                <h1 className='title has-text-white is-2'>หมู่บ้าน</h1>
                <hr />
            </div>
            <div className='section'>
                <label className='label has-text-white'>เพิ่มหมู่บ้าน</label>
                <div className="field has-addons">
                    <div className="control is-expanded">
                        <input className="input is-villaium is-fullwidth" placeholder='1' type='text' value={formValue} onChange={e => setFormValue(e.target.value)} />
                    </div>
                    <div className="control">
                        <button onClick={submit} type="submit" className="button is-villaium is-primary">เพิ่ม</button>
                    </div>
                </div>
            </div>
            <div className='section'>
                <div className='table-container'>
                    <table className="table is-fullwidth is-striped is-hoverable is-size-5">
                        <thead className='has-background-warning'>
                            <tr>
                                <th>หมู่บ้าน</th>
                                <th><span className='is-pulled-right'>ลบ</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                villa.map(x => (
                                    <tr key={x._id}>
                                        <td>หมู่ที่ {x.name}</td>
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