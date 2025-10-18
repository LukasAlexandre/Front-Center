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
  padding: 48px 16px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(1200px 600px at 10% -10%, rgba(99,102,241,0.15), transparent 55%),
    radial-gradient(900px 500px at 110% 0%, rgba(16,185,129,0.14), transparent 50%),
    linear-gradient(180deg, #0b1220 0%, #0a0f1a 100%);
  color: #e6e9ef;
  overflow: hidden;
`;

export const BackgroundBloom = styled.div`
  position: absolute;
  inset: -20%;
  background:
    radial-gradient(700px 500px at 0% 10%, rgba(34,197,94,0.18), transparent 60%),
    radial-gradient(800px 500px at 100% 0%, rgba(99,102,241,0.18), transparent 60%);
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
  max-width: 980px;
  text-align: center;
  animation: ${fadeIn} 0.9s ease;
  backdrop-filter: saturate(110%);
`;

/* ====== Branding ====== */
export const LogoImage = styled.img`
  width: 140px;
  height: auto;
  margin: 0 auto 8px;
  animation: ${float} 3.2s ease-in-out infinite;
  filter: drop-shadow(0 10px 28px rgba(0,0,0,0.35));
`;

export const LogoText = styled.div`
  font-weight: 700;
  letter-spacing: 0.6px;
  font-size: 15px;
  color: #cdd5e1;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

/* ====== Hero ====== */
export const Title = styled.h1`
  font-size: clamp(28px, 4.5vw, 48px);
  line-height: 1.1;
  margin: 6px 0 10px;
  font-weight: 800;
  color: #f8fafc;
`;

export const Subtitle = styled.p`
  margin: 0 auto 28px;
  max-width: 760px;
  color: #cbd5e1;
  font-size: clamp(14px, 1.8vw, 17px);
`;

/* ====== Options Grid ====== */
export const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 16px;
  margin: 10px 0 26px;
`;

export const OptionCard = styled.div`
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(148,163,184,0.18);
  border-radius: 18px;
  padding: 18px 16px;
  text-align: left;
  transition: all 0.25s ease;
  backdrop-filter: blur(6px);

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(148,163,184,0.34);
    background: rgba(255,255,255,0.06);
  }
`;

export const OptionIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  margin-bottom: 10px;
  color: #10b981;
  background: linear-gradient(135deg, rgba(16,185,129,0.16), rgba(99,102,241,0.12));
  svg { width: 22px; height: 22px; }
`;

export const OptionTitle = styled.h3`
  margin: 0 0 6px;
  font-size: 18px;
  color: #e5e7eb;
`;

export const OptionDescription = styled.p`
  margin: 0 0 12px;
  color: #b6c2d1;
  font-size: 14px;
`;

export const OptionButton = styled.button`
  appearance: none;
  border: 0;
  border-radius: 12px;
  padding: 10px 12px;
  font-weight: 600;
  font-size: 14px;
  color: #0b1220;
  background: linear-gradient(135deg, #22c55e, #a3e635);
  cursor: pointer;
  transition: transform 0.15s ease, filter 0.15s ease;

  &:hover { transform: translateY(-1px); filter: brightness(1.02); }
  &:active { transform: translateY(0); }
`;

/* ====== CTA ====== */
export const CTASection = styled.section`
  margin: 22px 0 14px;
  h3 {
    margin: 0 0 6px;
    font-size: clamp(18px, 2.3vw, 22px);
    color: #e7eef8;
  }
  p {
    margin: 0 0 14px;
    color: #b8c2d0;
    font-size: 14px;
  }
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
export const InfoSection = styled.section`
  margin: 24px 0 16px;
  h4 {
    margin: 0 0 10px;
    color: #e5e9f2;
    font-size: 16px;
    font-weight: 700;
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
`;

export const FeatureItem = styled.div`
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(148,163,184,0.18);
  border-radius: 16px;
  padding: 12px 14px;
  display: flex;
  gap: 10px;
  align-items: flex-start;
`;

export const FeatureIcon = styled.div`
  color: #60a5fa;
  flex: 0 0 auto;
  svg { width: 20px; height: 20px; }
`;

export const FeatureText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  strong {
    color: #e6edf7;
    font-size: 14px;
  }
  span {
    color: #b6c2d1;
    font-size: 13px;
  }
`;

/* ====== Footer ====== */
export const Footer = styled.div`
  margin-top: 20px;
  font-size: 12px;
  color: #96a2b4;
  opacity: 0.9;
`;
