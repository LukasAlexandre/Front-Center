// src/pages/Welcome.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  UserPlus,
  LogIn,
  MessageCircle,
  Users,
  ClipboardList,
  TrendingUp,
} from "lucide-react";

import {
  WelcomeContainer,
  BackgroundBloom,
  Orb,
  ContentWrapper,
  LogoBadge,
  LogoText,
  Title,
  Subtitle,
  HelperText,
  OptionsGrid,
  OptionCard,
  OptionIcon,
  OptionTitle,
  OptionDescription,
  OptionButton,
  InfoPanel,
  FeaturesGrid,
  FeatureItem,
  FeatureIcon,
  FeatureText,
  Footer,
} from "./StylesWelcome";

// Logo opcional via imagem removido (arquivo não existe em src/assets). Use apenas o texto/branding.

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <WelcomeContainer>
      <BackgroundBloom />
      <Orb $size={340} $left="-120px" $top="-100px" />
      <Orb $size={220} $right="-60px" $top="80px" />
      <Orb $size={160} $left="60px" $bottom="120px" />
      <ContentWrapper>
        <LogoBadge />
        <Title>Multi Center</Title>
        <Subtitle>Sistema de Gestão de Funcionários</Subtitle>
        <HelperText>Acesse sua conta ou cadastre-se como novo funcionário</HelperText>

        <OptionsGrid>
          <OptionCard>
            <OptionIcon><UserPlus /></OptionIcon>
            <OptionTitle>Funcionário Novo</OptionTitle>
            <OptionDescription>Primeiro acesso? Crie sua conta para começar a utilizar o sistema</OptionDescription>
            <OptionButton onClick={() => navigate("/register")}>
              Cadastrar-se
            </OptionButton>
          </OptionCard>

          <OptionCard>
            <OptionIcon><LogIn /></OptionIcon>
            <OptionTitle>Já tenho Login</OptionTitle>
            <OptionDescription>Já possui uma conta? Faça login para acessar o sistema.</OptionDescription>
            <OptionButton onClick={() => navigate("/login")}>
              Entrar
            </OptionButton>
          </OptionCard>

          <OptionCard>
            <OptionIcon><MessageCircle /></OptionIcon>
            <OptionTitle>Abrir Chamado</OptionTitle>
            <OptionDescription>Problema ou dúvida? Abra um chamado em minutos.</OptionDescription>
            <OptionButton onClick={() => navigate("/support")}>
              Abrir
            </OptionButton>
          </OptionCard>

          <OptionCard>
            <OptionIcon><Users /></OptionIcon>
            <OptionTitle>Comunidade</OptionTitle>
            <OptionDescription>Converse com colegas e troque soluções.</OptionDescription>
            <OptionButton onClick={() => navigate("/community")}>
              Acessar
            </OptionButton>
          </OptionCard>

          <OptionCard>
            <OptionIcon><ClipboardList /></OptionIcon>
            <OptionTitle>Minhas Solicitações</OptionTitle>
            <OptionDescription>Acompanhe o status de tudo o que você abriu.</OptionDescription>
            <OptionButton onClick={() => navigate("/requests")}>
              Ver
            </OptionButton>
          </OptionCard>

          <OptionCard>
            <OptionIcon><TrendingUp /></OptionIcon>
            <OptionTitle>Métricas</OptionTitle>
            <OptionDescription>Indicadores e SLA para gestão e melhoria contínua.</OptionDescription>
            <OptionButton onClick={() => navigate("/analytics")}>
              Ver métricas
            </OptionButton>
          </OptionCard>
        </OptionsGrid>

        {/* CTA suprimido para herói limpo, como no mock */}

        <InfoPanel>
          <h4>Bem-vindo ao Multi Center!</h4>
          <p className="lead">Olá, Colaborador! Bem-vindo à sua nova casa para se conectar com a equipe, RH e gestores. Aqui, tudo fica mais simples: converse, peça ajuda e acompanhe o que importa para o seu dia a dia no trabalho.</p>
          <FeaturesGrid>
            <FeatureItem>
              <FeatureIcon><ClipboardList /></FeatureIcon>
              <FeatureText>
                <strong>Chamados organizados</strong>
                <span>Fluxo simples para abrir, priorizar e resolver.</span>
              </FeatureText>
            </FeatureItem>

            <FeatureItem>
              <FeatureIcon><MessageCircle /></FeatureIcon>
              <FeatureText>
                <strong>Mensageria ágil</strong>
                <span>Converse com o time certo sem ruído.</span>
              </FeatureText>
            </FeatureItem>

            <FeatureItem>

            <OptionCard>
              <OptionIcon><MessageCircle /></OptionIcon>
              <OptionTitle>Abrir Chamado</OptionTitle>
              <OptionDescription>Problema ou dúvida? Abra um chamado em minutos.</OptionDescription>
              <OptionButton onClick={() => navigate("/support")}>
                Abrir
              </OptionButton>
            </OptionCard>

            <OptionCard>
              <OptionIcon><Users /></OptionIcon>
              <OptionTitle>Comunidade</OptionTitle>
              <OptionDescription>Converse com colegas e troque soluções.</OptionDescription>
              <OptionButton onClick={() => navigate("/community")}>
                Acessar
              </OptionButton>
            </OptionCard>

            <OptionCard>
              <OptionIcon><ClipboardList /></OptionIcon>
              <OptionTitle>Minhas Solicitações</OptionTitle>
              <OptionDescription>Acompanhe o status de tudo o que você abriu.</OptionDescription>
              <OptionButton onClick={() => navigate("/requests")}>
                Ver
              </OptionButton>
            </OptionCard>

            <OptionCard>
              <OptionIcon><TrendingUp /></OptionIcon>
              <OptionTitle>Métricas</OptionTitle>
              <OptionDescription>Indicadores e SLA para gestão e melhoria contínua.</OptionDescription>
              <OptionButton onClick={() => navigate("/analytics")}>
                Ver métricas
              </OptionButton>
            </OptionCard>
              <FeatureIcon><TrendingUp /></FeatureIcon>
              <FeatureText>
                <strong>Visão gerencial</strong>
                <span>KPIs e SLA para decisões rápidas.</span>
              </FeatureText>
            </FeatureItem>

            <FeatureItem>
              <FeatureIcon><Users /></FeatureIcon>
              <FeatureText>
                <strong>Transparência</strong>
                <span>Acompanhe o progresso do início ao fim.</span>
              </FeatureText>
            </FeatureItem>
          </FeaturesGrid>
  </InfoPanel>

        <Footer>© {new Date().getFullYear()} Multi Center • Engenharia de Produto & Software</Footer>
      </ContentWrapper>
    </WelcomeContainer>
  );
};

export default Welcome;
