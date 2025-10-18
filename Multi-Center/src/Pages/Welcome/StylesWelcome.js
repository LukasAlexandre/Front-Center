// welcome.styles.js
import styled, { keyframes } from 'styled-components';

// Subtle entrance animation
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const WelcomeContainer = styled.div`
  --bg-start: #0f172a; /* slate-900 */
  --bg-end: #0b1220;   /* deep slate */
  --primary: #4F46E5;  /* indigo-600 */
  --primary-2: #22C55E; /* emerald-500 */
  --card: #ffffff;
  --muted: #6b7280;
  --text: #0f172a;

  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;       /* Stack sections vertically */
  align-items: center;          /* Center sections horizontally */
  justify-content: flex-start;  /* Start from top, not vertically centered */
  gap: 24px;                    /* Space between sections */
  padding: 64px 20px 40px;
  background: transparent;      /* full background handled by <Background /> */
  position: relative;
  z-index: 1;                   /* content above background */
  color: var(--text);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const WelcomeHeader = styled.div`
  background: var(--card);
  border-radius: 16px;
  padding: 40px 36px;
  margin-bottom: 24px;
  width: min(960px, 100%);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
  animation: ${fadeInUp} 320ms ease-out both;

  h1 {
    margin: 0 0 8px 0;
    font-size: clamp(28px, 3.2vw, 40px);
    font-weight: 800;
    line-height: 1.1;
    background: linear-gradient(90deg, var(--primary) 0%, #60A5FA 50%, var(--primary-2) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

export const Greeting = styled.p`
  font-size: 1rem;
  margin: 0 0 8px 0;
  color: ${() => '#334155'};
  font-weight: 600;
`;

export const WelcomeText = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  margin: 0;
  color: var(--muted);
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 28px 0;
  width: min(960px, 100%);
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 16px;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const FeatureItem = styled.li`
  background: var(--card);
  border-radius: 14px;
  padding: 18px 18px;
  display: flex;
  gap: 14px;
  align-items: flex-start;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.10);
  animation: ${fadeInUp} 360ms ease-out both;

  span {
    font-size: 20px;
    display: inline-grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: rgba(79,70,229,0.1);
  }

  strong {
    display: block;
    color: var(--primary);
    margin-bottom: 4px;
  }

  div { color: #374151; }
`;

export const ButtonsContainer = styled.div`
  width: min(960px, 100%);
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: center;
  margin-bottom: 26px;
`;

export const StyledButton = styled.button`
  padding: 14px 22px;
  border-radius: 10px;
  border: 1px solid rgba(0,0,0,0.06);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
  transition: transform 0.18s ease, box-shadow 0.18s ease, background-color 0.18s ease, opacity 0.18s ease;
  min-width: 220px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.12);
  }

  ${props => props.variant === 'primary' && `
    background: linear-gradient(90deg, var(--primary) 0%, #6366F1 100%);
    color: white;
  `}

  ${props => props.variant === 'secondary' && `
    background: linear-gradient(90deg, var(--primary-2) 0%, #34D399 100%);
    color: #052e16;
  `}

  @media (max-width: 480px) {
    min-width: 100%;
  }
`;

export const TipSection = styled.div`
  background: var(--card);
  border-radius: 14px;
  padding: 18px 20px;
  width: min(960px, 100%);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeInUp} 400ms ease-out both;

  p {
    margin: 0 0 10px 0;
    color: #4b5563;
  }
`;

export const HelpLink = styled.a`
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

// Full-bleed animated background used behind the page content
const bgMove = keyframes`
  0%   { background-position: 0% 0%, 100% 0%, 50% 100%, 0% 0%; }
  100% { background-position: 100% 100%, 0% 100%, 50% 0%, 0% 0%; }
`;

export const Background = styled.div`
  position: fixed;
  inset: 0;                 /* full viewport */
  z-index: 0;               /* stay behind content */
  pointer-events: none;     /* clicks pass through */
  
  background-image:
    radial-gradient(800px 400px at 10% -10%, rgba(99,102,241,0.24), transparent 60%),
    radial-gradient(900px 420px at 110% 20%, rgba(34,197,94,0.20), transparent 60%),
    radial-gradient(1000px 520px at 50% 120%, rgba(56,189,248,0.15), transparent 60%),
    linear-gradient(180deg, #0f172a 0%, #0b1220 100%);
  background-size: 160% 160%, 160% 160%, 160% 160%, 100% 100%;
  background-repeat: no-repeat;
  animation: ${bgMove} 28s ease-in-out infinite alternate;
  filter: saturate(1.05);
`;