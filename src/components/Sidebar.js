import React from "react";
import styled from "styled-components";
import logo from "../assets/contrast.svg"
import Input from "./Input";

const Sidebar = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="" />
        <h3>
          lorem <span>ipsum</span>
        </h3>
      </LogoWrapper>
      <Form>
        <h3>Join Now!</h3>
        <Input placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confrim Password" />
        <button>Sign Up</button>
      </Form>
      <div>
        <Terms>
          By signing up, I agree to the Privacy Policy <br /> and Terms of
          Service
        </Terms>
        <h4>
          Already have an account? <span>Sign In</span>
        </h4>
      </div>
    </Container>
  );
};

const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #808080;
  font-weight: 300;
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #5e5b5b;
    margin-bottom: 2rem;
    font-family: 'Poppins', sans-serif;
  }

  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    border-color: #f7f7f7;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #70edb9;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transform: scale(1.05);
      border: 1.5px solid #f7f7f7
    }
  }
`;

const LogoWrapper = styled.div`
  img {
    height: 2.5rem;
    margin: 10px 40px;    
  }

  h3 {
    color: #ff8d8d;
    text-align: center;
    font-size: 22px;
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
  }

  span {
    color: #5dc399;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
  
  }
`;

const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }

  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;
    font-family: 'Poppins', sans-serif;

    span {
      color: #ff8d8d;
      cursor: pointer;
      font-family: 'Poppins', sans-serif;
    }
  }
`;

export default Sidebar;
