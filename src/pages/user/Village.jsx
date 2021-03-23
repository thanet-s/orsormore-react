import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Village() {
    let history = useHistory();
    const [villla, setVilla] = useState(1);
    const [village, setVillage] = useState(1);


    const submit = () => {
        setVillage(villla);
    }

    const back = () => {
        history.goBack();
    }

    return (
        <div className='fullHeight container'>
            <div className='section has-text-centered is-size-5'>
                <h1 className='title has-text-white is-2'>ข้อมูลประชากรในหมู่บ้าน</h1>
                <hr />
            </div>
            <div className='section'>
                <label className='label has-text-white'>เลือกหมู่</label>
                <div className="field has-addons">
                    <div className="control is-expanded">
                        <div className="select is-medium is-fullwidth">
                            <select name="villa" value={villla} onChange={e => setVilla(e.target.value)}>
                                <option value={1}>หมู่ 1</option>
                                <option value={2}>หมู่ 2</option>
                                <option value={3}>หมู่ 3</option>
                                <option value={4}>หมู่ 4</option>
                                <option value={5}>หมู่ 5</option>
                            </select>
                        </div>
                    </div>
                    <div className="control">
                        <button onClick={submit} type="submit" className="button is-medium is-warning">Choose</button>
                    </div>
                </div>
            </div>
            <div className='section'>
                <h1 className='title has-text-white has-text-centered'>หมู่ที่ {village}</h1>
                <div className='table-container'>
                    <table className="table is-fullwidth is-striped is-hoverable is-size-5">
                        <thead className='has-background-warning'>
                            <tr>
                                <th>บ้านเลขที่</th>
                                <th>เจ้าของบ้าน</th>
                                <th>อสม.รับผิดชอบ</th>
                                <th>เบอร์โทรติดต่อ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>นาง A</td>
                                <td>นาง B</td>
                                <td>0999999999</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>นาง A</td>
                                <td>นาง B</td>
                                <td>0999999999</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>นาง A</td>
                                <td>นาง B</td>
                                <td>0999999999</td>
                            </tr>
                            <tr>
                                <th>4</th>
                                <td>นาง A</td>
                                <td>นาง B</td>
                                <td>0999999999</td>
                            </tr>
                            <tr>
                                <th>5</th>
                                <td>นาง A</td>
                                <td>นาง B</td>
                                <td>0999999999</td>
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
    );
}