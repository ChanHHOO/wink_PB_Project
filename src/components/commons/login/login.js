import React, {useState} from 'react'
import mainImage from '../../../images/main_image.jpg';
import styled from "styled-components";
import {Motion, spring} from "react-motion";
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import RegisterPage from "./example";



const login= () => {
    const [inputEmail, setinputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    const CheckEmail = () => {
        if (inputEmail.includes('@') && inputEmail.includes('.')) {
            setinputEmail(true);
        } else {
            setinputEmail(false);
        }
    };

    const onChange = (value, key) => {
        switch (key) {
            case 'Email':
                CheckEmail();
                setinputEmail(value);
                return;
            case 'Password':
                setInputPassword(value);
                return;
            default:
                return;
        }
    };
    const handleLogin =(e, key) => {
        onChange(e.target.value, key);
    };
    const onSubmit = async () => {

        }


    return (
        <Modal trigger={<Button>Show Modal</Button>}>
            <Modal.Header>login</Modal.Header>
            <Modal.Content image>
                <Modal.Description>
                    <Form onSubmit={onSubmit}>
                        <div className="field">
                            <label>Email</label>
                            <input type="text" name="Email" placeholder="Email 입력하세요."/>
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input type="text" name="Password" placeholder="Password를 입력하세요."/>
                        </div>

                        <button className="ui button" type="submit" onClick={handleLogin}>Login</button>
                    </form>
                </Modal.Description>
            </Modal.Content>
        </Modal>

    )

};
export default login;