import React, { useState } from "react";
import { StyledButton, Input } from "../styles/Contact.styled";
import { Wrapper, Form } from "../styles/Login.styled";
function Login() {
  // const [data, setData] = useState({
  //   email: "",
  //   password: "",
  // });
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(data);
  // };

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   const { name, value } = e.target;
  //   setData(Object.assign(data, { [name]: value }));
  // };

  return (
    <>
      <Wrapper>
        <Form
        // onSubmit={handleSubmit}
        >
          <h2>Login to your account</h2>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            // value={data.email}
            // onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"

            // value={data.password}
            // onChange={handleChange}
          />
          <StyledButton>Submit</StyledButton>
          <p>Forget your Password ?</p>
          <p>no worries, click here to reset your password.</p>
        </Form>
      </Wrapper>
    </>
  );
}
export default Login;
