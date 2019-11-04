import React, { useState } from 'react';
import { Button, Form, Message, Header } from 'semantic-ui-react';
import firebase from '../../../firebase';

const RegisterPage = () => {
    const [inputVal, setInputVal] = useState('');
    const [checkEmail, setEmail] = useState(false);

    const [inputPassword, setInputPassword] = useState('');
    const [inputPasswordCheck, setInputPasswordCheck] = useState('');

    const [inputNickName, setInputNickName] = useState("");
    const [checkNickName, setCheckNickName] = useState("");

    const CheckEmail = () => {
        if (inputVal.includes('@') && inputVal.includes('.')) {
            setEmail(true);
        } else {
            setEmail(false);
        }
    };
    const onChange = (value, key) => {
        switch (key) {
            case 'Email':
                CheckEmail();
                setInputVal(value);
                return;
            case 'Password':
                setInputPassword(value);
                return;
            case 'PasswordCheck':
                setInputPasswordCheck(value);
                return;
            case 'NickName':
                setInputNickName(value);
                return;
            default:
                return;
        }
    };
    const handleInput = (e, key) => {
        onChange(e.target.value, key);
    };

    const inputEmailType = () => {
        return (
            <Message success header="Email Completed" content="Complete Next step" />
        );
    };
    const onSubmit = async () => {
        if (checkEmail && inputPassword === inputPasswordCheck) {
            const users = await firebase
                .auth()
                .createUserWithEmailAndPassword(inputVal, inputPassword)
                .catch(error => {
                    // Handle Errors here.
                    // var errorCode = error.code;
                    // var errorMessage = error.message;
                });
            alert('success!');
            window.location.href = './';
        } else {
            alert('retry');
        }
    };
    return (
        <div style={{ position: 'relative', left: '50em', top: '20em' }}>
            {/*<Header as="h2" textAlign="center">*/}
            {/*  <Image src="https://react.semantic-ui.com/logo.png" /> OSP.GG*/}
            {/*</Header>*/}
            <Header as="h1" size="huge" style={{ fontSize: '3rem', marginTop: 0 }}>
                Signup
            </Header>
            <div style={{ maxWidth: '450px' }}>
                <Form success onSubmit={onSubmit}>
                        <Form.Input
                        onChange={e => {
                            handleInput(e, 'Email');
                        }}
                        value={inputVal}
                        label="Email"
                        placeholder="joe@schmoe.com"
                    />
                    {checkEmail === true ? inputEmailType() : ''}
                    <Form.Input
                        type="password"
                        onChange={e => {
                            handleInput(e, 'Password');
                        }}
                        value={inputPassword}
                        label="Password"
                        placeholder=""
                    />
                    <Form.Input
                        type="password"
                        onChange={e => {
                            handleInput(e, 'PasswordCheck');
                        }}
                        value={inputPasswordCheck}
                        label="Check password"
                        placeholder=""
                    />
                    <Form.Input
                        type="text"
                        onChange={e => {
                            handleInput(e, 'NickName');
                        }}
                        value={inputNickName}
                        label="NickName"
                        placeholder=""
                    />
                    <Button onClick={onSubmit}> Submit </Button>
                </Form>
            </div>
        </div>
    );
};

export default RegisterPage;