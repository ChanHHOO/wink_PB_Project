import React,{useCallback, useState, useEffect} from 'react';
import {Button, Divider, Form, Grid, Icon, Message} from "semantic-ui-react";
import firebaseSdk from 'firebase';
import firebase from '../../../../firebase';

import profile from "../../../../images/1_mm5cDQAWDh7J_ef_NnxoyA.png";

export default function LoginComponent({history}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({
        displayName: '',
        photoUrl: '',
    });
    const handleLogin = useCallback(async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch (error) {

            console.log(password)
            setError(true);
        }
    }, [email, password]);
    const handleLogout = useCallback(async () => {
        try {
            await firebase.auth().signOut();


        } catch (error) {

            console.log(password)
            setError(true);
        }
    }, []);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user !== null) {
                setLoggedIn(true);
                setUser({
                    displayName: user.displayName,
                    photoUrl: user.photoURL,
                });




                firebase
                    .database()
                    .ref(`users/${user.uid}`)

            }
        });
    }, []);


    return(
        <>
            {
                loggedIn ? (<div style={{position: "absolute", top: "20%", minWidth: "100%"}}>
                    <Grid textAlign="center" verticalAlign="middle">
                        <Grid.Column style={{maxWidth: 450}}>

                                <img src={profile} style={{position:"relative", height:"100%", minWidth:"100%"}}/>

                            <h2>찬호</h2>
                            <Button primary={true} fluid size="large" onClick={handleLogout}>
                                로그아웃
                            </Button>
                        </Grid.Column>

                    </Grid>
                    </div> ):
                    ( <div style={{position: "absolute", top: "20%", minWidth: "100%"}}>
                        <Grid textAlign="center" verticalAlign="middle">
                            <Grid.Column style={{maxWidth: 450}}>

                                <Form size="large" error={error}>
                                    <Form.Input
                                        fluid
                                        icon="user"
                                        iconPosition="left"
                                        placeholder="이메일"
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                    <Form.Input
                                        fluid
                                        icon="lock"
                                        iconPosition="left"
                                        type="password"
                                        placeholder="비밀번호"
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                    <Button primary={true} fluid size="large" onClick={handleLogin}>
                                        로그인
                                    </Button>
                                    <Message
                                        error
                                        header="로그인 실패"
                                        content="이메일 또는 비밀번호를 다시 확인해주세요"
                                    />
                                </Form>
                                <Divider/>
                                <Button fluid color="black" size="large">
                                    <Icon name="github"/>
                                    Github 계정으로 로그인
                                </Button>
                                <Message>
                                    계정이 없으신가요? <a href="/register">회원가입</a>
                                </Message>
                            </Grid.Column>

                        </Grid>
                    </div> )

            }
        </>

    )
}