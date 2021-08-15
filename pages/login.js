import { Button } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";
import { authentication, provider } from "../firebase";
import Logo from "../components/Logo";

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  background-color: white;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0.7, 0.4);
`;

function Login() {
  const signIn = () => {
    authentication.signInWithPopup(provider).catch(alert);
  };

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <Logo />
        <Button onClick={signIn} variant="outlined">
          Sign with Google
        </Button>
      </LoginContainer>
    </Container>
  );
}
export default Login;
