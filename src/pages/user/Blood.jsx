import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Blod() {
    let history = useHistory();
    const [time, setTime] = useState('13.05');
    const [rbg, setRbg] = useState('150');
    const [finalStatus, setFinalStatus] = useState({
        time: time,
        rbg: rbg
    });

    const back = () => {
        history.goBack();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFinalStatus({
            time: time,
            rbg: rbg
        });
    }

    return (
        <div className='fullHeight container has-text-white'>
            <div className='section'>
                <div className='section has-text-centered is-size-5'>
                    <h1 className='title has-text-white is-2'>เจาะเลือด</h1>
                    <hr />
                </div>
            </div>
            <div className='section'>
                <div className='box'>
                    <div className="field is-horizontal">
                        <div className="field-label">
                            <label className="label is-size-4">
                                เวลา
                            </label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <p className='is-size-4'>
                                        {finalStatus.time} น.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label">
                            <label className="label is-size-4">
                                Random blood glucose
                            </label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <p className='is-size-4'>
                                        {finalStatus.rbg} mg/dL.
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
                        <label className="label has-text-white">เวลา</label>
                        <div className="control has-icons-left">
                            <input className="input is-medium" type='number' value={time} onChange={e => setTime(e.target.value)} />
                            <span className="icon is-small is-left">
                                <i className="fas fa-clock"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-white">Random blood glucose</label>
                        <div className="control has-icons-left">
                            <input className="input is-medium" type="number" value={rbg} onChange={e => setRbg(e.target.value)} />
                            <span className="icon is-small is-left">
                                <i className="fas fa-cookie-bite"></i>
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