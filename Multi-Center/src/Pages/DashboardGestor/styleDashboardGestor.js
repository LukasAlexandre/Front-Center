import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --bg: #f3f6f8;
    --surface: #ffffff;
    --primary: #0026FF;
    --primary-700: #0026FF;
    --muted-700: #000000;
    --accent: #125f79;
    --success: #2e8b57;
    --danger: #e04b4b;
    --glass: #000000;
    --radius: 10px;
    --shadow-1: 0 6px 18px rgba(0, 0, 0, 0.06);
    font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    color-scheme: light;
  }

  * { box-sizing: border-box; }

  html, body, #root {
    height: 100%;
    width: 100%;
  }
  body {
    margin: 0;
    min-height: 100vh;
    background: linear-gradient(180deg, #ffffff 0%, var(--bg) 100%);
    color: #000000;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
  }
`;

export const App = styled.div`
  max-width: 1300px;
  margin: 20px auto;
  background: var(--surface);
  border-radius: var(--radius);
  box-shadow: var(--shadow-1);
  overflow: hidden;
  border: 1px solid rgba(16,30,40,0.04);
`;

/* Topbar */
export const Topbar = styled.header`
  display: flex; justify-content: space-between; align-items: center;
  padding: 18px 22px;
  background: linear-gradient(90deg, var(--primary) 0%, var(--primary-700) 100%);
  color: #fff;
`;
export const Brand = styled.div`
  display: flex; align-items: center; gap: 12px;
`;
export const LogoBox = styled.div``;
export const BrandText = styled.div`
  strong { display: block; font-size: 16px; }
  small { display: block; font-size: 12px; opacity: .9; }
`;

export const TopActions = styled.div`
  display: flex; align-items: center; gap: 14px;
`;
export const Search = styled.div`
  display: flex; align-items: center;
  background: rgba(255,255,255,0.12);
  padding: 6px; border-radius: 8px;
`;
export const SearchInput = styled.input`
  background: transparent; border: 0; color: #fff;
  padding: 8px 10px; width: 320px; outline: none;
  &::placeholder { color: rgba(255,255,255,0.8); }
  &:focus { outline: none; }
`;
export const SearchClear = styled.button`
  background: transparent; border: 0; color: #fff;
  padding: 6px; cursor: pointer; opacity: .9;
`;

export const FiltersGroup = styled.div`
  display: inline-flex; gap: 8px; align-items: center; vertical-align: middle;
`;
export const Separator = styled.div`
  width: 1px; height: 28px; background: #e6f6f9; margin: 0 12px;
  @media (max-width: 800px) { display: none; }
`;
export const TopSelect = styled.select`
  appearance: none;
  border: .9px solid #d6eaf0; background-color: transparent;
  padding: 8px 36px 8px 12px;
  border-radius: 8px; font-size: 14px; color: #ffffff;
  min-width: 170px; height: 36px; box-shadow: none; cursor: pointer;
  background-image:
    linear-gradient(45deg, transparent 50%, #fefefe 50%),
    linear-gradient(135deg, #ffffff 50%, transparent 50%);
  background-position: calc(100% - 14px) calc(50% - 6px),
                      calc(100% - 8px)  calc(50% - 6px);
  background-size: 6px 6px, 6px 6px;
  background-repeat: no-repeat;
  transition: box-shadow .12s ease, border-color .12s ease;

  &:focus {
    outline: none;
    border-color: #0b6b8a;
    box-shadow: 0 0 0 4px rgba(11,107,138,0.08);
  }
  &:disabled { opacity: .6; cursor: not-allowed; }

  @media (max-width: 800px) { min-width: 120px; }
`;

export const UserBox = styled.div`
  display: flex; align-items: center; gap: 10px;
`;
export const UserName = styled.div`
  font-weight: 600; font-size: 13px; opacity: .95;
`;
export const Avatar = styled.div`
  width: 36px; height: 36px; border-radius: calc(var(--radius) - 2px);
  background: rgba(255,255,255,0.12);
  display: flex; align-items: center; justify-content: center;
`;

/* Main layout */
export const Container = styled.main`
  display: flex; gap: 20px; padding: 20px;
  @media (max-width: 980px) { flex-direction: column; }
`;
export const Sidebar = styled.aside`
  width: 340px; padding: 12px;
  @media (max-width: 980px) { width: 100%; }
`;
export const SidebarHeader = styled.div`
  display: flex; align-items: center; justify-content: space-between;
  padding: 6px 2px;
  h2 { margin: 0; font-size: 16px; }
`;
export const OpenCount = styled.span`
  background: var(--accent); color: #fff; padding: 6px 10px;
  border-radius: 18px; font-weight: 700; font-size: 13px;
`;
export const TicketList = styled.ul`
  margin-top: 12px; display: flex; flex-direction: column; gap: 12px;
  max-height: 68vh; overflow: auto; padding-right: 6px;
`;
export const TicketItem = styled.li`
  list-style: none;
  background: linear-gradient(180deg,#fff,#fbfeff);
  border-radius: var(--radius); padding: 12px;
  display: flex; gap: 12px; align-items: flex-start;
  box-shadow: 0 4px 10px rgba(16,30,40,0.04);
  border: 1px solid rgba(16,30,40,0.03);
  cursor: pointer;
  transition: transform .12s ease, box-shadow .12s ease;

  &:hover { transform: translateY(-4px); box-shadow: 0 8px 18px rgba(16,30,40,0.07); }
  &.active {
    border: 2px solid var(--primary-700);
    box-shadow: 0 10px 24px rgba(11,107,138,0.08);
  }
`;
export const TicketMeta = styled.div` flex: 1; `;
export const TicketId = styled.div`
  &.ticket-id { font-weight: 700; color: var(--primary-700); font-size: 13px; }
`;
export const TicketTitle = styled.div`
  font-weight: 600; margin: 6px 0; color: #21323a;
`;
export const TicketSub = styled.div`
  font-size: 13px; color: var(--muted-700);
`;
export const TicketBadges = styled.div`
  display: flex; gap: 8px; align-items: center; margin-top: 8px;
`;
export const Badge = styled.span`
  padding: 6px 8px; border-radius: 12px; font-weight: 600; font-size: 12px; color: #08323f;
  &.category { background: #dff6fb; color: #0a5566; }
  &.status { background: #fff3d9; color: #7a4c00; border: 1px solid rgba(0,0,0,0.04); }
`;

/* Detail */
export const Detail = styled.section`
  flex: 1; padding: 12px 16px; border-left: 1px dashed rgba(16,30,40,0.04);
`;
export const DetailHeader = styled.div`
  display: flex; align-items: center; justify-content: space-between;
  gap: 12px; padding-bottom: 10px;

  /* título principal */
  .ticket-id#detailTicketId { font-weight: 700; font-size: 18px; color: var(--primary); }
`;
export const DetailActions = styled.div` display: flex; gap: 10px; `;
export const Btn = styled.button`
  border: 0; padding: 8px 12px; border-radius: 8px; cursor: pointer; font-weight: 700;
  transition: box-shadow .12s ease, transform .08s ease;
  &:focus { outline: none; box-shadow: 0 0 0 4px rgba(0,38,255,0.10); }
  &:active { transform: translateY(1px); }
  &.primary { background: var(--primary); color: #fff; box-shadow: 0 6px 14px rgba(11,107,138,0.08); }
  &.outline { background: transparent; border: 1px solid rgba(11,107,138,0.12); color: var(--primary); }
  &.danger { background: var(--danger); color: #fff; }
  &.plain { background: transparent; color: var(--muted-700); }
  &:disabled { opacity: .55; cursor: not-allowed; }
`;

export const DetailBody = styled.div`
  display: flex; gap: 18px; align-items: flex-start;

  @media (max-width: 980px) { flex-direction: column; }
`;
export const Cards = styled.div`
  display: flex; flex: 1; gap: 12px;
  @media (max-width: 980px) { flex-direction: column; }
`;
export const Card = styled.div`
  background: var(--surface); border-radius: var(--radius); padding: 14px;
  box-shadow: 0 6px 18px rgba(16,30,40,0.02);
  border: 1px solid rgba(16,30,40,0.03);
  flex-basis: 0; flex: 1;
`;
export const CardTitle = styled.div`
  font-weight: 700; margin-bottom: 10px; color: var(--muted-700); font-size: 13px;
`;
export const CardContent = styled.div`
  font-size: 14px; color: #21323a;

  /* reforço p/ solicitante */
  .name { font-weight: 700; }
`;

export const Pill = styled.span`
  display: inline-block; padding: 6px 10px; border-radius: 16px; font-weight: 700; font-size: 13px;
  &.pending { background: #fff3d9; color: #7a4c00; }
  &.in_progress { background: #dbeffa; color: #083e6b; }
  &.resolved { background: #e6fbef; color: #095a34; }
  &.closed { background: #f6f6f6; color: #8a8f94; }
`;

export const TimelineAndNotes = styled.div`
  width: 420px; display: flex; flex-direction: column; gap: 12px;
  @media (max-width: 980px) { width: 100%; }
`;
export const SectionTitle = styled.div`
  font-weight: 700; color: var(--muted-700); margin-bottom: 8px;
`;
export const Timeline = styled.div`
  background: var(--surface); padding: 12px; border-radius: var(--radius);
  border: 1px solid rgba(16,30,40,0.03);
`;
export const TimelineList = styled.ul`
  list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px;
`;
export const TimelineItem = styled.li`
  font-size: 13px; color: #21323a; background: rgba(16,30,40,0.02);
  padding: 8px; border-radius: 8px;
`;

export const Notes = styled.div`
  background: var(--surface); padding: 12px; border-radius: var(--radius);
  border: 1px solid rgba(16,30,40,0.03);
`;
export const NotesContent = styled.div`
  min-height: 84px; white-space: pre-wrap;
`;

export const DetailFooter = styled.div`
  display: flex; justify-content: space-between; align-items: center;
  padding-top: 12px; border-top: 1px dashed rgba(16,30,40,0.04);
`;
export const Muted = styled.div` color: var(--muted-700); `;

/* Modal */
export const Modal = styled.div`
  position: fixed; inset: 0; display: flex; align-items: center; justify-content: center;
  background: rgba(4,9,12,0.45); z-index: 99;
  &.hidden { display: none; }
`;
export const ModalCard = styled.div`
  background: #fff; padding: 18px; border-radius: var(--radius); max-width: 640px; width: 92%;
  box-shadow: 0 18px 46px rgba(4,9,12,0.25);
  h3 { margin: 0 0 12px 0; }
`;
export const ModalTextarea = styled.textarea`
  width: 100%; padding: 12px; border-radius: 8px; border: 1px solid rgba(16,30,40,0.06);
  resize: vertical;
`;
export const ModalActions = styled.div`
  display: flex; gap: 8px; justify-content: flex-end; margin-top: 12px;
`;

/* Footer */
export const AppFooter = styled.footer`
  text-align: center; padding: 12px;
  background: linear-gradient(180deg, rgba(11,107,138,0.03), transparent);
  font-size: 12px;
`;
