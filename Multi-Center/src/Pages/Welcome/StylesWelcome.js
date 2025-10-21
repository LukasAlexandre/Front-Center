// src/styles/WelcomeStyles.js
import { style } from "framer-motion/client";
import styled, { keyframes } from "styled-components";

/* ====== Animations ====== */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-16px); }
`;

const orbFloat = keyframes`
  0%, 100% { transform: translateY(0) scale(1); filter: blur(0px); }
  50%      { transform: translateY(-10px) scale(1.02); filter: blur(0.2px); }
`;

/* ====== Layout ====== */
export const WelcomeContainer = styled.div`
  position: relative;
  min-height: 100dvh;
  padding: 56px 16px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Blue gradient background */
  background:
    radial-gradient(1200px 600px at 10% -10%, rgba(59,130,246,0.28), transparent 55%), /* blue-500 */
    radial-gradient(900px 500px at 110% 0%, rgba(56,189,248,0.22), transparent 55%),   /* cyan-400 */
    linear-gradient(180deg, #0ea5e9 0%, #1d4ed8 45%, #60a5fa 120%);
  color: #f4f6fb;
  overflow: hidden;
`;

export const BackgroundBloom = styled.div`
  position: absolute;
  inset: -20%;
  background:
    radial-gradient(700px 500px at 0% 10%, rgba(56,189,248,0.20), transparent 60%),  /* cyan-400 */
    radial-gradient(800px 500px at 100% 0%, rgba(59,130,246,0.20), transparent 60%); /* blue-500 */
  filter: blur(40px);
  opacity: 0.7;
  pointer-events: none;
`;

export const Orb = styled.div`
  position: absolute;
  width: ${(p) => p.$size || 220}px;
  height: ${(p) => p.$size || 220}px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18), rgba(255,255,255,0.05));
  box-shadow:
    inset 0 0 80px rgba(255,255,255,0.06),
    0 20px 120px rgba(0,0,0,0.35);
  animation: ${orbFloat} 8s ease-in-out infinite;
  ${(p) => p.$left && `left: ${p.$left};`}
  ${(p) => p.$right && `right: ${p.$right};`}
  ${(p) => p.$top && `top: ${p.$top};`}
  ${(p) => p.$bottom && `bottom: ${p.$bottom};`}
`;

export const ContentWrapper = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  text-align: center;
  animation: ${fadeIn} 0.9s ease;
  backdrop-filter: saturate(110%);
`;

/* ====== Branding ====== */
export const LogoImage = styled.img`
  width: 96px;
  height: auto;
  margin: 0 auto 8px;
  animation: ${float} 3.2s ease-in-out infinite;
  filter: drop-shadow(0 10px 28px rgba(0,0,0,0.35));
`;

export const LogoText = styled.div`
  font-weight: 700;
  letter-spacing: 0.6px;
  font-size: 14px;
  color: #e9ecf6;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

/* ====== Hero ====== */
export const Title = styled.h1`
  font-size: clamp(36px, 5.2vw, 60px);
  line-height: 1.1;
  margin: 6px 0 10px;
  font-weight: 800;
  color: #ffffff;
  text-shadow: 0 6px 18px rgba(22, 8, 70, 0.35);
`;

export const Subtitle = styled.p`
  margin: 2px auto 6px;
  max-width: 840px;
  color: #e9eefb;
  font-size: clamp(16px, 1.9vw, 20px);
  font-weight: 600;
`;

export const HelperText = styled.p`
  margin: 0 auto 18px;
  max-width: 760px;
  color: #edf2ff;
  font-size: 15px;
  opacity: 0.95;
`;

/* ====== Options Grid ====== */
export const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 22px;
  margin: 24px 0 34px;
`;

export const OptionCard = styled.div`
  background: #ffffff;
  border: 0;
  border-radius: 20px;
  padding: 22px 22px;
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  color: #0f172a;
  box-shadow: 0 18px 36px rgba(2, 23, 80, 0.16);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 22px 44px rgba(23, 8, 62, 0.22);
  }
`;

export const OptionIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin: 0 auto 14px;
  color: #ffffff;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  box-shadow: 0 12px 22px rgba(37, 99, 235, 0.35);
  svg { width: 30px; height: 30px; }
`;

export const OptionTitle = styled.h3`
  margin: 6px 0 6px;
  font-size: 20px;
  color: #0f172a;
  font-weight: 700;
`;

export const OptionDescription = styled.p`
  margin: 0 0 16px;
  color: #5b677a;
  font-size: 14px;
`;

export const OptionButton = styled.button`
  appearance: none;
  border: 0;
  border-radius: 999px;
  padding: 12px 18px;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  cursor: pointer;
  transition: transform 0.15s ease, filter 0.15s ease;

  &:hover { transform: translateY(-1px); filter: brightness(1.05); }
  &:active { transform: translateY(0); }
`;

/* ====== CTA ====== */
export const CTASection = styled.section`
  display: none; /* Não usar na nova estética do herói */
`;

export const CTAButtons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const CTAButton = styled.button`
  appearance: none;
  border-radius: 14px;
  padding: 10px 14px;
  font-weight: 700;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  border: ${(p) => (p.$variant === "ghost" ? "1px solid rgba(148,163,184,0.25)" : "0")};
  background: ${(p) =>
    p.$variant === "ghost"
      ? "rgba(255,255,255,0.04)"
      : "linear-gradient(135deg, #6366f1, #22c55e)"};
  color: ${(p) => (p.$variant === "ghost" ? "#e6e9ef" : "#0b1220")};

  transition: transform 0.15s ease, filter 0.15s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    filter: ${(p) => (p.$variant === "ghost" ? "brightness(1.1)" : "brightness(1.03)")};
    border-color: ${(p) => (p.$variant === "ghost" ? "rgba(148,163,184,0.45)" : "inherit")};
  }
`;

/* ====== Info / Features ====== */
export const InfoPanel = styled.section`
  margin: 6px auto 20px;
  width: 100%;
  max-width: 1100px;
  background: #ffffff;
  color: #0f172a;
  border-radius: 22px;
  box-shadow: 0 22px 44px rgba(2, 23, 80, 0.14);
  padding: 24px 24px 20px;

  h4 {
    margin: 0 0 12px;
    color: #2563eb;
    font-size: 22px;
    font-weight: 800;
    text-align: center;
  }

  p.lead {
    margin: 0 auto 18px;
    color: #475569;
    max-width: 880px;
    text-align: center;
    font-size: 15px;
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
`;

export const FeatureItem = styled.div`
  background: #ffffff;
  border: 1px solid rgba(15,23,42,0.06);
  border-radius: 16px;
  padding: 14px 16px;
  display: flex;
  gap: 10px;
  align-items: flex-start;
  box-shadow: 0 6px 14px rgba(23,8,62,0.08);
`;

export const FeatureIcon = styled.div`
  color: #2563eb;
  flex: 0 0 auto;
  svg { width: 20px; height: 20px; }
`;

export const FeatureText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  strong {
    color: #0f172a;
    font-size: 14px;
    font-weight: 700;
  }
  span {
    color: #475569;
    font-size: 13px;
  }
`;

/* ====== Footer ====== */
export const Footer = styled.div`
  margin-top: 20px;
  font-size: 12px;
  color: #e6e9ef;
  opacity: 0.9;
`;

/* Badge para placeholder de logo caso não exista imagem */
export const LogoBadge = styled.div`
  width: 96px;
  height: 96px;
  margin: 0 auto 8px;
  border-radius: 18px;
  background: linear-gradient(135deg, #93c5fd, #3b82f6, #1d4ed8);
  box-shadow: 0 16px 28px rgba(7, 47, 115, 0.35);
`;
