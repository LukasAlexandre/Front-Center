import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  * { margin: 0; padding: 0; box-sizing: border-box; }
  :root {
    --blue: #0052FF;
    --blue-hover: #0046E0;
    --blue-active: #003BC7;
    --text-dark: #1e293b;
    --text-muted: #64748b;
  }
  body {
    font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(180deg, #0052FF 0%, #0046E0 100%);
    color: white;
    min-height: 100vh;
  }
`;


export const Container = styled.div`
max-width: 1160px;
margin: 0 auto;
padding: 56px 24px 64px;
`;


export const LogoContainer = styled.div`
text-align: center;
margin-bottom: 28px;
`;

export const LogoImage = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 20px;
  display: inline-block;
  box-shadow: 0 12px 24px rgba(0, 82, 255, 0.35);
  margin-bottom: 18px;
`;


export const Title = styled.h1`
font-size: 3.75rem;
font-weight: 800;
margin-bottom: 10px;
text-shadow: 0 4px 20px rgba(0,0,0,0.35);
text-align: center;


@media (max-width: 768px) {
font-size: 2.6rem;
}
`;


export const Subtitle = styled.p`
text-align: center;
font-size: 1.5rem;
font-weight: 600;
opacity: 0.95;
margin-bottom: 6px;


@media (max-width: 768px) {
font-size: 1.25rem;
}
`;


export const Description = styled.p`
text-align: center;
font-size: 1rem;
opacity: 0.9;
margin-bottom: 44px;
`;


export const CardsContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(320px, 1fr));
gap: 28px;
margin-bottom: 44px;

@media (max-width: 768px) {
	grid-template-columns: 1fr;
}
`;

// Cards
export const Card = styled.div`
  background: #ffffff;
  color: var(--text-dark);
  border: none;
  border-radius: 20px;
  padding: 32px 28px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
`;

export const IconCircle = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  background: var(--blue);
  box-shadow: 0 4px 12px rgba(0, 82, 255, 0.25);
`;

export const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--text-dark);
  text-align: center;
`;

export const CardText = styled.p`
  font-size: 0.94rem;
  line-height: 1.5;
  margin-bottom: 22px;
  color: var(--text-muted);
  text-align: center;
`;

export const Button = styled.button`
  width: 100%;
  background: var(--blue);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;
  box-shadow: 0 2px 8px rgba(0, 82, 255, 0.2);

  &:hover { 
    background: var(--blue-hover);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 82, 255, 0.3);
  }
  &:active { 
    background: var(--blue-active);
    transform: translateY(0);
  }
`;

// Welcome copy section
export const WelcomeSection = styled.section`
  margin-top: 20px;
  background: #ffffff;
  border-radius: 24px;
  padding: 36px 32px;
  color: var(--text-dark);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

export const WelcomeTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--blue);
  text-align: center;
`;

export const WelcomeParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin-bottom: 32px;
  text-align: center;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

// Features grid
export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 980px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  background: #f8fafc;
  color: var(--text-dark);
  border: 1px solid #e2e8f0;
  padding: 20px;
  border-radius: 16px;
  transition: background 0.2s ease;
  
  &:hover {
    background: #f1f5f9;
  }
`;

export const FeatureIcon = styled.div`
  width: 48px;
  height: 48px;
  min-width: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--blue);
  box-shadow: 0 2px 8px rgba(0, 82, 255, 0.2);
`;

export const FeatureTitle = styled.h4`
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0 0 6px 0;
  color: var(--text-dark);
`;

export const FeatureText = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
  color: var(--text-muted);
`;
