import React, { useState } from 'react';

export default function Login() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (user !== '' && pass !== '') {
            alert(`User: ${user}  Pass: ${pass}`);
        }
    }

    return (
        <div className='container is-max-desktop'>
            <div style={{ paddingTop: '30vh' }}>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label has-text-white">Username</label>
                        <div className="control has-icons-left has-icons-right">
                            <input autoFocus className="input is-medium" type="text" placeholder="Username" value={user} onChange={e => setUser(e.target.value)} />
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
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}