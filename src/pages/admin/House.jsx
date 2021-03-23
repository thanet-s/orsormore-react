import React from 'react';
import { useHistory } from 'react-router-dom';

export default function House() {
    let history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const back = () => {
        history.goBack();
    }
    return (
        <div className='fullHeight container'>
            <div className='section has-text-centered is-size-5'>
                <h1 className='title has-text-white is-2'>เพิ่มบ้าน</h1>
                <hr />
            </div>

            <div className='section'>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label has-text-white">หมู่บ้าน</label>
                        <div className="control has-icons-left">
                            <div className="select is-medium is-fullwidth">
                                <select>
                                    <option>หมู่ 1</option>
                                    <option>หมู่ 5</option>
                                    <option>หมู่ 12</option>
                                </select>
                            </div>
                            <div className="icon is-small is-left">
                                <i className="fas fa-users"></i>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-white">อสม. ที่รับผิดชอบ</label>
                        <div className="control has-icons-left">
                            <div className="select is-medium is-fullwidth">
                                <select>
                                    <option>นางบี มีความสุข</option>
                                    <option>นายโอ มีความสุข</option>
                                </select>
                            </div>
                            <div className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-white">บ้านเลขที่</label>
                        <div className="control has-icons-left">
                            <input className="input is-medium" type="text" placeholder="15" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-home"></i>
                            </span>
                        </div>
                    </div>
                    <h2 className='title has-text-centered has-text-white'>เจ้าบ้าน</h2>
                    <div className="field">
                        <label className="label has-text-white">ชื่อ</label>
                        <div className="control has-icons-left">
                            <input className="input is-medium" type="text" placeholder="นายโอ" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-id-card-alt"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-white">สกุล</label>
                        <div className="control has-icons-left">
                            <input className="input is-medium" type="text" placeholder="มีความสุข" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-id-card-alt"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-white">หมายเลขโทรศัพท์</label>
                        <div className="control has-icons-left">
                            <input className="input is-medium" type="text" placeholder="09xxxxxxxx" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-phone"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-white">เพศ</label>
                        <div className="control has-icons-left">
                            <div className="select is-medium is-fullwidth">
                                <select>
                                    <option>ชาย</option>
                                    <option>หญิง</option>
                                </select>
                            </div>
                            <div className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-white">อาชีพ</label>
                        <div className="control has-icons-left">
                            <input className="input is-medium" type="text" placeholder="เกษตรกร" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-id-card-alt"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-white">วันเกิด</label>
                        <div className="control has-icons-left">
                            <input className="input is-medium" type="text" placeholder="15/03/2025" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-calendar-day"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-white">สัญชาติ</label>
                        <div className="control has-icons-left">
                            <input className="input is-medium" type="text" placeholder="ไทย" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-globe-asia"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-white">เชื้อชาติ</label>
                        <div className="control has-icons-left">
                            <input className="input is-medium" type="text" placeholder="ไทย" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-globe-asia"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-white">ศาสนา</label>
                        <div className="control has-icons-left">
                            <input className="input is-medium" type="text" placeholder="พุทธ" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-pray"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-white">สถานะ</label>
                        <div className="control has-icons-left">
                            <input className="input is-medium" type="text" placeholder="โสด" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user-clock"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-white">วันหมอนัด</label>
                        <div className="control has-icons-left">
                            <input className="input is-medium" type="text" placeholder="15/03/2025" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-calendar-day"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-white">โรค</label>
                        <label className="checkbox has-text-white">
                            <input type="checkbox" />&nbsp;
                            เบาหวาน&nbsp;&nbsp;&nbsp;
                        </label>
                        <label className="checkbox has-text-white">
                            <input type="checkbox" />&nbsp;
                            ริดสีดวงทวารหนัก&nbsp;&nbsp;&nbsp;
                        </label>
                    </div>
                    <div className="field">
                        <label className="label has-text-white">ยาที่ใช้</label>
                        <label className="checkbox has-text-white">
                            <input type="checkbox" />&nbsp;
                            พาราเซตามอล&nbsp;&nbsp;&nbsp;
                        </label>
                        <label className="checkbox has-text-white">
                            <input type="checkbox" />&nbsp;
                            แอสไพริน&nbsp;&nbsp;&nbsp;
                        </label>
                        <label className="checkbox has-text-white">
                            <input type="checkbox" />&nbsp;
                            คลอเฟนิรามีน&nbsp;&nbsp;&nbsp;
                        </label>
                    </div>
                    <div className='field has-text-white'>
                        <label className="label has-text-white">ระยะเวลาติดตาม</label>
                        <div className="control">
                            <label className="radio has-text-white">
                                <input type="radio" name="rsvp" />&nbsp;
                                    1 สัปดาห์
                            </label>
                            <label className="radio has-text-white">
                                <input type="radio" name="rsvp" />&nbsp;
                                    2 สัปดาห์
                            </label>
                            <label className="radio has-text-white" >
                                <input type="radio" name="rsvp" />&nbsp;
                                    3 สัปดาห์
                            </label>
                            <label className="radio has-text-white" >
                                <input type="radio" name="rsvp" />&nbsp;
                                    1 เดือน
                            </label>
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