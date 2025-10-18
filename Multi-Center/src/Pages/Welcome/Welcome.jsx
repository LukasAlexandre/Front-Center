// Welcome page
import React from 'react';
import { Background, WelcomeContainer, WelcomeHeader, Greeting, WelcomeText, FeaturesList, FeatureItem, ButtonsContainer, StyledButton, TipSection, HelpLink } from './StylesWelcome';

const Welcome = () => {
  const userName = 'Colaborador'; // Placeholder; in real app, fetch from auth or props

  return (
    <>
      <Background />
      <WelcomeContainer>
      <WelcomeHeader>
        <h1>Bem-vindo ao MultiCenter!</h1>
        <Greeting>Olá, {userName}!</Greeting>
        <WelcomeText>
          Bem-vindo à sua nova casa para se conectar com a equipe, RH e gestores. 
          Aqui, tudo fica mais simples: converse, peça ajuda e acompanhe o que importa para o seu dia a dia no trabalho.
        </WelcomeText>
      </WelcomeHeader>

      <FeaturesList>
        <FeatureItem>
          <span role="img" aria-label="RH">❤️</span>
          <div>
            <strong>Falar com o RH</strong>: Peça férias, tire dúvidas sobre salário ou documentos – e veja o status em tempo real.
          </div>
        </FeatureItem>
        <FeatureItem>
          <span role="img" aria-label="Gestor">📢</span>
          <div>
            <strong>Conversar com o Gestor</strong>: Abra pedidos de materiais, relate problemas ou compartilhe ideias sobre o time.
          </div>
        </FeatureItem>
        <FeatureItem>
          <span role="img" aria-label="Fórum">💬</span>
          <div>
            <strong>Trocar ideias com todos</strong>: No fórum, discuta sugestões e boas práticas com colegas de outros setores.
          </div>
        </FeatureItem>
        <FeatureItem>
          <span role="img" aria-label="Acompanhar">✅</span>
          <div>
            <strong>Acompanhar pedidos</strong>: Crie um chamado rápido (como corrigir ponto ou consertar equipamento) e siga o progresso até o fim.
          </div>
        </FeatureItem>
      </FeaturesList>

      <ButtonsContainer>
        <StyledButton variant="primary" onClick={() => {/* Handle new user registration */}}>
          Novo por aqui? Crie sua conta
        </StyledButton>
        <StyledButton variant="secondary" onClick={() => {/* Handle login */}}>
          Já tem acesso? Entre agora
        </StyledButton>
      </ButtonsContainer>

      <TipSection>
        <p><strong>Dica rápida</strong>: Se você é gestor, vai ver um painel especial com todos os pedidos da equipe ao entrar. Para o time de RH ou suporte, há ferramentas extras para ajudar todo mundo.</p>
        <HelpLink href="/help" target="_blank" rel="noopener noreferrer">
          Precisa de mais ajuda? Clique em "Ajuda" no menu superior para um tour guiado. Vamos tornar o trabalho mais leve juntos! 😊
        </HelpLink>
      </TipSection>
      </WelcomeContainer>
    </>
  );
};

export default Welcome;