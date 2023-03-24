import { useRef, useEffect } from "react";
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
  return (
    <Grid verticalAlign="middle" style={{ height: "100vh" }}>
      <Grid.Row>
        <Grid.Column>
          <Card centered color="blue">
            <Card.Content>
              <Card.Header style={{ textAlign: "center" }}>
                -- Welcome --
              </Card.Header>
              <Form>
                <Form.Field>
                  <label>Username</label>
                  <input type="text" placeholder="Username" ref={inputRef} />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input type="password" placeholder="Password" />
                </Form.Field>
                <StyledCenter>
                  <Button type="submit">Log In</Button>
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
