import React from "react";
import { LinkedIn } from "react-linkedin-login-oauth2";

const clientId = "78pczf44xo6zfk";
const clientSecret = "oOfWxThmUjCdaPY9";

const LoginLinkedin = () => {
  const handleSuccess = (data) => {
    console.log(data);
  };

  const handleFailure = (error) => {
    console.log(error);
  };

  return (
    <LinkedIn
    children={({ onClick, disabled }) => (
      <button onClick={onClick} disabled={disabled}>
        Login with LinkedIn
      </button>
    )}
      redirectUri={"http://localhost:3000/auth/linkedin/callback"}
      clientId={clientId}
      onSuccess={handleSuccess}
      onError={handleFailure}
      clientSecret={clientSecret}      
    />
  );
};

export default LoginLinkedin;
