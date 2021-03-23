import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Weight() {
    let history = useHistory();
    const [weight, setWeight] = useState('50');
    const [height, setHeight] = useState('163');
    const [finalStatus, setFinalStatus] = useState({
        weight: weight,
        height: height
    });

    const back = () => {
        history.goBack();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFinalStatus({
            weight: weight,
            height: height
        });
    }
    return (
        <div className='fullHeight container has-text-white'>
            <div className='section'>
                <div className='section has-text-centered is-size-5'>
                    <h1 className='title has-text-white is-2'>น้ำหนักส่วนสูง</h1>
                    <hr />
                </div>
            </div>
            <div className='section'>
                <div className='box'>
                    <div className="field is-horizontal">
                        <div className="field-label">
                            <label className="label is-size-4">
                                น้ำหนัก
                            </label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <p className='is-size-4'>
                                        {finalStatus.weight} กก.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label">
                            <label className="label is-size-4">
                                ส่วนสูง
                            </label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <p className='is-size-4'>
                                        {finalStatus.height} ซม.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label">
                            <label className="label is-size-4">
                                BMI
                            </label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <p className='is-size-4'>
                                        {(finalStatus.weight/((finalStatus.height/100)**2)).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section'>
                <h2 className='title has-text-centered has-text-white'>แก้ไข</h2>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label has-text-white">น้ำหนัก</label>
                        <div className="control has-icons-left">
                            <input className="input is-medium" type='number' value={weight} onChange={e => setWeight(e.target.value)} />
                            <span className="icon is-small is-left">
                                <i className="fas fa-weight"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-white">ส่วนสูง</label>
                        <div className="control has-icons-left">
                            <input className="input is-medium" type="number" value={height} onChange={e => setHeight(e.target.value)} />
                            <span className="icon is-small is-left">
                                <i className="fas fa-text-height"></i>
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
            </div>
        </div>
    );

}