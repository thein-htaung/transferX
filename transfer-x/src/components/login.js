import { useEffect, useRef, useState  } from "react";
import { Button, Card, Form, Grid } from "semantic-ui-react";
import styled from "styled-components";

const StyledCenter = styled.div`
  text-align: center;
`;

const Login = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [username, setUsername] = useState('');
  const [pword, setpword] = useState('');
  const [isValidUser, setIsValidUser] = useState(false);

  const nameHandler = (event) => (setUsername(event.target.value));
  const pwordHandler = (event) => (setpword(event.target.value));

  const isusernameValid = username.length > 4;
  const ispwordValid = pword.length > 5;
  const isSubmitInvalid = !(isusernameValid && ispwordValid);

  const submitHandler = (event) => {
    event.preventDefault();
    if (username === 'thein' && pword === '123321') {
      setIsValidUser(true)
    }
  }

  return (
    <Grid verticalAlign="middle" style={{ height: "100vh" }}>
      <Grid.Row>
        <Grid.Column>
          <Card centered color="blue">
            <Card.Content>
              <Card.Header style={{ textAlign: "center" }}>
                -- Welcome --
              </Card.Header>
              <Form onSubmit={submitHandler}>
                <Form.Field>
                  <label>Username</label>
                  <input type="text" name="username" value={username} placeholder="Username" ref={inputRef} onChange={nameHandler}/>
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input type="password" name="password" value={pword} placeholder="Password" onChange={pwordHandler}/>
                </Form.Field>
                <StyledCenter>
                  <Button disabled={isSubmitInvalid} type="submit">Log In</Button>
                </StyledCenter>
              </Form>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Login;
