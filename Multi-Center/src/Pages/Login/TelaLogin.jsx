import React from "react";
import styled, { createGlobalStyle } from "styled-components";

// Inline styles to avoid module export mismatch issues
const GlobalStyle = createGlobalStyle`
  * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', sans-serif; }
  body { background-color: #f5f5f5; }
  @media (max-width: 480px) { body { padding: 20px; } }
`;

const Page = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #333;
  font-size: 28px;
  @media (max-width: 480px) { font-size: 22px; }
`;

const Container = styled.section`
  background-color: #ffffff;
  padding: 40px 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  @media (max-width: 480px) { padding: 30px 20px; box-shadow: none; border-radius: 0; }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  font-size: 22px;
  color: #007bff;
  @media (max-width: 480px) { font-size: 18px; }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  @media (max-width: 480px) { font-size: 13px; padding: 10px; }
`;

const Button = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color .3s ease;
  &:hover { background-color: #0056b3; }
  @media (max-width: 480px) { font-size: 15px; padding: 10px; }
`;

const Links = styled.div`
  margin-top: 20px;
  text-align: right;
`;

const LinkA = styled.a`
  color: #007bff;
  text-decoration: none;
  font-size: 14px;
  &:hover { text-decoration: underline; }
  @media (max-width: 480px) { font-size: 13px; }
`;

function TelaLogin({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = {
      matricula: form.matricula.value,
      senha: form.senha.value,
    };
    if (typeof onSubmit === "function") onSubmit(payload);
  };

  return (
    <>
      <GlobalStyle />
      <Page>
        <Title>Grupo MultiLaser</Title>

        <Container>
          <Card as="form" autoComplete="off" aria-label="Formulário de login" onSubmit={handleSubmit}>
            <CardTitle>Multi Center</CardTitle>

            <FormGroup>
              <Input
                type="text"
                name="matricula"
                id="matricula"
                placeholder="Matrícula"
                required
              />
              <Input
                type="password"
                name="senha"
                id="senha"
                placeholder="Senha"
                required
              />
            </FormGroup>

            <Button type="submit">Entrar</Button>
          </Card>

          <Links>
            <LinkA href="#" aria-label="Recuperar senha">Esqueceu a senha?</LinkA>
          </Links>
        </Container>
      </Page>
    </>
  );
}

export default TelaLogin;
