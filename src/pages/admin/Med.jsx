import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Med() {
    let history = useHistory();
    const [formValue, setFormValue] = useState('');
    const [med, setMed] = useState([
        {
            _id: 1,
            name: 'พาราเซตามอล'
        }, {
            _id: 2,
            name: 'แอสไพริน'
        }, {
            _id: 3,
            name: 'คลอเฟนิรามีน'
        }
    ]);

    const remove = e => {
        const id = parseInt(e.target.value);
        setMed(med.filter(item => item._id !== id));
    }

    const submit = () => {
        try {
            setMed([...med, {
                _id: med[med.length - 1]._id + 1,
                name: formValue
            }]);
        } catch {
            setMed([...med, {
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
                <h1 className='title has-text-white is-2'>ยา</h1>
                <hr />
            </div>
            <div className='section'>
                <label className='label has-text-white'>เพิ่มยา</label>
                <div className="field has-addons">
                    <div className="control is-expanded">
                        <input className="input is-medium is-fullwidth" placeholder='พารา' type='text' value={formValue} onChange={e => setFormValue(e.target.value)} />
                    </div>
                    <div className="control">
                        <button onClick={submit} type="submit" className="button is-medium is-primary">เพิ่ม</button>
                    </div>
                </div>
            </div>
            <div className='section'>
                <div className='table-container'>
                    <table className="table is-fullwidth is-striped is-hoverable is-size-5">
                        <thead className='has-background-warning'>
                            <tr>
                                <th>ยา</th>
                                <th><span className='is-pulled-right'>ลบ</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                med.map(x => (
                                    <tr key={x._id}>
                                        <td>{x.name}</td>
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