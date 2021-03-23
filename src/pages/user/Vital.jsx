import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Vital() {
    let history = useHistory();
    const [bodyTemp, setTemp] = useState('');
    const [bpm, setBpm] = useState('');
    const [bloodPress, setBlood] = useState('');
    const [breathRate, setBreath] = useState('');
    const [finalStatus, setFinalStatus] = useState({
        temp: bodyTemp,
        bpm: bpm,
        breathRate: breathRate,
        bloodPress: bloodPress
    });

    const back = () => {
        history.goBack();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFinalStatus({
            temp: bodyTemp,
            bpm: bpm,
            breathRate: breathRate,
            bloodPress: bloodPress
        });
    }

    return (
        <div className='fullHeight container has-text-white'>
            <div className='section'>
                <div className='section has-text-centered is-size-5'>
                    <h1 className='title has-text-white is-2'>สัญญาณชีพ</h1>
                    <hr />
                </div>
            </div>
            {finalStatus.temp !== '' &&
                <div className='section'>
                <div className='box'>
                    <div className="field is-horizontal">
                        <div className="field-label">
                            <label className="label is-size-4">
                                อุณหภูมิร่างกาย
                            </label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <p className='is-size-4'>
                                        {finalStatus.temp} °C
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label">
                            <label className="label is-size-4">
                                อัตราการเต้นชีพจร
                            </label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <p className='is-size-4'>
                                        {finalStatus.bpm} ครั้ง/นาที
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label">
                            <label className="label is-size-4">
                                อัตราการหายใจ
                            </label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <p className='is-size-4'>
                                        {finalStatus.breathRate} ครั้ง/นาที
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label">
                            <label className="label is-size-4">
                                ความดันโลหิต
                            </label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <p className='is-size-4'>
                                        {finalStatus.bloodPress} mmHg
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            <div className='section'>
                <h2 className='title has-text-centered has-text-white'>{finalStatus.temp !== ''?  'แก้ไข' : 'เพิ่ม'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label has-text-white">อุณหภูมิร่างกาย</label>
                        <div className="control has-icons-left">
                            <input className="input is-medium" type='number' placeholder='36.5' value={bodyTemp} onChange={e => setTemp(e.target.value)} />
                            <span className="icon is-small is-left">
                                <i className="fas fa-thermometer-three-quarters"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-white">อัตราการเต้นชีพจร</label>
                        <div className="control has-icons-left">
                            <input className="input is-medium" type="number" placeholder='60' value={bpm} onChange={e => setBpm(e.target.value)} />
                            <span className="icon is-small is-left">
                                <i className="fas fa-heartbeat"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-white">อัตราการหายใจ</label>
                        <div className="control has-icons-left">
                            <input className="input is-medium" type="number" placeholder='20' value={breathRate} onChange={e => setBreath(e.target.value)} />
                            <span className="icon is-small is-left">
                                <i className="fas fa-heart"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-white">ความดันโลหิต</label>
                        <div className="control has-icons-left">
                            <input className="input is-medium" type="text" placeholder='120/80' value={bloodPress} onChange={e => setBlood(e.target.value)} />
                            <span className="icon is-small is-left">
                                <i className="fas fa-thermometer-quarter"></i>
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