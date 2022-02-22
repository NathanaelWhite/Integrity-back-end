// import React from 'react';
import styled from "styled-components";
import { css } from "styled-components";
export const StyledButton = styled.button`
  border: 0;
  color: #fff;
  padding: 1em;
  text-transform: uppercase;
  width: 100%;

  &:hover,
  &:focus {
    color: #fff;
    outline: 0;
    transition: background-color 2s ease-out;
  }
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1170px;

  ${(props) =>
    props.wrapper &&
    css`
      border: 1px solid #000;
      /* box-shadow: 0 0 20px 0 #000; */
      > * {
        padding: 1em;
      }

      @media (min-width: 700px) {
        display: grid;
        grid-template-columns: 1fr 2fr;
        > * {
          padding: 2em;
        }
      }
    `}
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export const Input = styled.input`
  border: 1px solid #000;
  padding: 1em;
  width: 100%;
`;
export const Label = styled.label`
  display: block;
`;
export const Textarea = styled.textarea`
  border: 1px solid #e6343b;
  padding: 1em;
  width: 100%;
`;

export const Title = ({ className, text }) => (
  <h1 className={className}>{text}</h1>
);

export const StyledTitle = styled(Title)`
  color: #b8161f;
  font: 70px;
  text-align: center;
  @media (min-width: 700px) {
    text-align: left;
  }
`;

export const WrapperCompanyInfo = styled.div`
/* background:? */
`;

export const CompanyName = styled.h3`
  margin: 0 0 1rem 0;
  text-align: center;
  color: #fff;
  @media (min-width: 700px) {
    text-align: left;
  }
`;

export const WrapperList = styled.ul`
  list-style: none;
  margin: 0 0 1rem 0;
  padding: 0;
  text-align: center;
  @media (min-width: 700px) {
    text-align: left;
  }
`;