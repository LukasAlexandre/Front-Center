import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Reset básico + fonte padrão */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
  }

  body {
    background-color: #f5f5f5;
  }

  @media (max-width: 480px) {
    body {
      padding: 20px;
    }
  }
`;

/* Wrapper para centralizar vertical/horizontal */
export const Page = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  color: #333;
  font-size: 28px;

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const Container = styled.section`
  background-color: #ffffff;
  padding: 40px 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    padding: 30px 20px;
    box-shadow: none;
    border-radius: 0;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  font-size: 22px;
  color: #007bff;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 10px;
  }
`;

export const Button = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color .3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 480px) {
    font-size: 15px;
    padding: 10px;
  }
`;

export const Links = styled.div`
  margin-top: 20px;
  text-align: right;
`;

export const LinkA = styled.a`
  color: #007bff;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;
