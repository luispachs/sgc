import { useState } from 'react';
export default function FormLogin() {
    let [rememberPasswordState, setRememberPassword] = useState("radio-button");
    let [inputValue, setInputValue] = useState("false")
    let [user, setUser] = useState("");
    let [password, setPassword] = useState("");

    return (
        <form className="form" method='POST'>
            <section>
                <label className="form-label">Usuario:
                </label><br />
                <input type="text" className="form-input" name="user" value={user} onChange={(e) => { setUser(e.target.value) }} />

            </section>
            <section>
                <label className="form-label"> Contraseña
                </label>
                <br />
                <input type="password" className="form-input" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
            </section>
            <section className="d-flex">
                <button className='btn' type='button' onClick={() => { getLogin(user, password, inputValue) }}>Ingresar</button>
            </section>
            <section>
                <article className="d-flex">
                    <div className="d-flex"><h4>¿Recordar Contraseña?</h4></div>
                    <div className="d-flex"><input type="radio" name="remember-password" className="radio-input" id='radio-input' value={inputValue} />
                        <div className="radio-container" onClick={() => {
                            if (inputValue == "true") {
                                setInputValue("false");
                                setRememberPassword("radio-button");
                                return;
                            }
                            else {
                                setInputValue("true");
                                setRememberPassword("radio-button active");
                                return;
                            }
                        }}>
                            <div className={rememberPasswordState} id="test"></div>
                        </div>
                    </div>
                </article>
                <article className="d-flex">
                    <a><h4>¿Olvido su contraseña?</h4></a>
                </article>
            </section>

        </form>
    )
}



function getLogin(user, password, rememberPassword) {
    fetch('http://localhost:5000/security/login', {
        method: "POST",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user, password, rememberPassword })
    }).then(res => {
        return res.json();
    }).then(json => {
        console.log(json);
        localStorage.setItem('_TOKEN', json.data.token)
    });
}
