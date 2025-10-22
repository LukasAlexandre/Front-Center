import React from "react";
import { useNavigate } from "react-router-dom";
import { UserPlus, LogIn, MessageSquare, Users, ClipboardList, TrendingUp } from "lucide-react";
import logo from "../../assets/logo.svg";
import {
GlobalStyle,
Container,
LogoContainer,
LogoImage,
Title,
Subtitle,
Description,
CardsContainer,
Card,
IconCircle,
CardTitle,
CardText,
Button,
WelcomeSection,
WelcomeTitle,
WelcomeParagraph,
FeaturesGrid,
FeatureCard,
FeatureIcon,
FeatureTitle,
FeatureText,
} from "./WelcomeStyles";


export default function WelcomePage() {
	const navigate = useNavigate();

	const handleSignup = () => {
		// Mantido como alerta por enquanto; podemos criar /register depois
		alert("Função de cadastro");
	};

	const handleLogin = () => {
		navigate("/login");
	};


return (
<>
<GlobalStyle />
<Container>
<LogoContainer>
<LogoImage src={logo} alt="Multi Center" />
<Title>Multi Center</Title>
<Subtitle>Sistema de Gestão de Funcionários</Subtitle>
<Description>Acesse sua conta ou cadastre-se como novo funcionário</Description>
</LogoContainer>


<CardsContainer>
<Card>
<IconCircle aria-hidden="true">
<UserPlus size={32} strokeWidth={2.5} color="white" />
</IconCircle>
<CardTitle>Funcionário Novo</CardTitle>
<CardText>Primeiro acesso? Crie sua conta para começar a utilizar o sistema</CardText>
<Button onClick={handleSignup}>Cadastre-se</Button>
</Card>

<Card>
<IconCircle aria-hidden="true">
<LogIn size={32} strokeWidth={2.5} color="white" />
</IconCircle>
<CardTitle>Já tenho Login</CardTitle>
<CardText>Já possui uma conta? Faça login para acessar o sistema</CardText>
<Button onClick={handleLogin}>Entrar</Button>
</Card>
</CardsContainer>


<WelcomeSection>
<WelcomeTitle>Bem-vindo ao Multi Center!</WelcomeTitle>
<WelcomeParagraph>
Olá, Colaborador! Bem-vindo à sua nova casa para se conectar com a equipe, RH e gestores. Aqui, tudo fica mais
simples: converse, peça ajuda e acompanhe o que importa para o seu dia a dia no trabalho.
</WelcomeParagraph>


<FeaturesGrid>
<FeatureCard>
<FeatureIcon aria-hidden="true">
<MessageSquare size={24} strokeWidth={2} color="white" />
</FeatureIcon>
<div>
<FeatureTitle>Falar com o RH</FeatureTitle>
<FeatureText>Peça férias, tire dúvidas sobre salário ou documentos – e veja o status em tempo real.</FeatureText>
</div>
</FeatureCard>

<FeatureCard>
<FeatureIcon aria-hidden="true">
<Users size={24} strokeWidth={2} color="white" />
</FeatureIcon>
<div>
<FeatureTitle>Conversar com o Gestor</FeatureTitle>
<FeatureText>Abra pedidos de materiais, relate problemas ou compartilhe ideias sobre o time.</FeatureText>
</div>
</FeatureCard>

<FeatureCard>
<FeatureIcon aria-hidden="true">
<ClipboardList size={24} strokeWidth={2} color="white" />
</FeatureIcon>
<div>
<FeatureTitle>Trocar ideias com todos</FeatureTitle>
<FeatureText>No fórum, discuta sugestões e boas práticas com colegas de outros setores.</FeatureText>
</div>
</FeatureCard>

<FeatureCard>
<FeatureIcon aria-hidden="true">
<TrendingUp size={24} strokeWidth={2} color="white" />
</FeatureIcon>
<div>
<FeatureTitle>Acompanhar Solicitações</FeatureTitle>
<FeatureText>Crie um chamado rápido e siga o progresso até o fim.</FeatureText>
</div>
</FeatureCard>
</FeaturesGrid>
</WelcomeSection>
</Container>
</>
);
}