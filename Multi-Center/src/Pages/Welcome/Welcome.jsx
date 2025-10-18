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
  LogoImage,
  LogoText,
  Title,
  Subtitle,
  OptionsGrid,
  OptionCard,
  OptionIcon,
  OptionTitle,
  OptionDescription,
  OptionButton,
  CTASection,
  CTAButtons,
  CTAButton,
  InfoSection,
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
  <LogoText>Multi Center</LogoText>

        <Title>Central de Comunicação</Title>
        <Subtitle>
          Um hub elegante de comunicação entre colaboradores e gestão — ideal
          para abrir chamados, tirar dúvidas, solicitar férias e acompanhar
          respostas em tempo real.
        </Subtitle>

        <OptionsGrid>
          <OptionCard>
            <OptionIcon><UserPlus /></OptionIcon>
            <OptionTitle>Criar Conta</OptionTitle>
            <OptionDescription>Cadastre-se para começar a usar o sistema.</OptionDescription>
            <OptionButton onClick={() => navigate("/register")}>
              Começar
            </OptionButton>
          </OptionCard>

          <OptionCard>
            <OptionIcon><LogIn /></OptionIcon>
            <OptionTitle>Entrar</OptionTitle>
            <OptionDescription>Faça login para acessar o sistema.</OptionDescription>
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

        <CTASection>
          <h3>Pronto pra acelerar sua comunicação interna?</h3>
          <p>Cadastre-se em segundos ou faça login para continuar.</p>
          <CTAButtons>
            <CTAButton onClick={() => navigate("/register")} $variant="primary">
              <UserPlus size={18} /> Criar conta
            </CTAButton>
            <CTAButton onClick={() => navigate("/login")} $variant="ghost">
              <LogIn size={18} /> Entrar
            </CTAButton>
          </CTAButtons>
        </CTASection>

        <InfoSection>
          <h4>Por que usar?</h4>
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
        </InfoSection>

        <Footer>© {new Date().getFullYear()} Multi Center • Engenharia de Produto & Software</Footer>
      </ContentWrapper>
    </WelcomeContainer>
  );
};

export default Welcome;
