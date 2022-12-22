import background from "../images/bg.png";
import "../css/login-page.css";
import { useState } from "react";
import { useEffect } from "react";

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [minLength, setMinLength] = useState(false)
    const [maxLength, setMaxLength] = useState(false)
    const [isEmail, setEmail] = useState(false)
    const [inputValid, setInputValid] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case "minLength":
                    value.length < validations[validation] ? setMinLength(true) : setMinLength(false)
                    break;
                case "isEmpty":
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case "maxLength":
                    value.length > validations[validation] ? setMaxLength(true) : setMaxLength(false)
                    break;
                case "isEmail":
                    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    re.test(String(value).toLowerCase()) ? setEmail(false) : setEmail(true)
                    break;
            }
        }
    }, [value])

    useEffect(() => {
        if (isEmpty || maxLength || minLength || isEmail) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, maxLength, minLength, isEmail])

    return {
        isEmpty,
        minLength,
        maxLength,
        isEmail,
        inputValid
    }
}

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)


    const onChange = (e) => {
        setValue(e.target.value)
    }
    
    const onBlur = (e) => {
        setDirty(true)
    }
    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}


const Login = ({ setPage }) => {
    const email = useInput("", {isEmpty:true, isEmail: true})
    const password = useInput("", { isEmpty: true, minLength: 6, maxLength: 12})


    return (
        <div className="container">
            <img src={background} alt="background" className="back-img" />
            <div className="blur"></div>
            <div className="login_box">
                <form className="login_form" onSubmit={() => setPage(false)}>
                    <h2 >Simple hotel check</h2>
                    <p className="subtitle">Логин</p>
                    <input onChange={e => email.onChange(e)} onBlur={e => email.onBlur(e)} value={email.value} name="email" type="text" placeholder="Enter your email here:" />
                    <ul className="login_errors">
                        {(email.isDirty && email.isEmpty) && <div><li>Поле не может быть пустым</li></div>}
                        {(email.isDirty && email.isEmail) && <div><li>Такой почты не существует</li></div>}
                    </ul>
                    <p className="subtitle" style={{marginTop: 20}}>Пароль</p>
                    <input onChange={e => password.onChange(e)} onBlur={e => password.onBlur(e)} value={password.value} name="password" type="password" placeholder="Enter your password here:" />
                    <ul className="login_errors">
                        {(password.isDirty && password.isEmpty) && <div><li>Поле не может быть пустым</li></div>}
                        {(password.isDirty && password.minLength) && <div><li>Минимальная длинна пароля – 6 символов</li></div>}
                        {(password.isDirty && password.maxLength) && <div><li>Максимальная длинна пароля – 12 символов</li></div>}
                    </ul>
                    <button disabled={!email.inputValid || !password.inputValid} type="submit" style={{ marginTop: 20 }} >Войти</button>
                </form>
            </div>
        </div>
    );
};

export default Login;