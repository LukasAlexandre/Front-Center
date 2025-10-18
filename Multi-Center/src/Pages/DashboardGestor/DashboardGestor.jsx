import React, { useMemo, useState } from "react";
import {
  GlobalStyles,
  App,
  Topbar,
  Brand,
  LogoBox,
  BrandText,
  TopActions,
  Search,
  SearchInput,
  SearchClear,
  FiltersGroup,
  Separator,
  TopSelect,
  UserBox,
  UserName,
  Avatar,
  Container,
  Sidebar,
  SidebarHeader,
  OpenCount,
  TicketList,
  TicketItem,
  TicketMeta,
  TicketId,
  TicketTitle,
  TicketSub,
  TicketBadges,
  Badge,
  Detail,
  DetailHeader,
  DetailActions,
  Btn,
  DetailBody,
  Cards,
  Card,
  CardTitle,
  CardContent,
  Pill,
  TimelineAndNotes,
  SectionTitle,
  Timeline,
  TimelineList,
  TimelineItem,
  Notes,
  NotesContent,
  DetailFooter,
  Muted,
  AppFooter,
  Modal,
  ModalCard,
  ModalTextarea,
  ModalActions
} from "./styleDashboardGestor";

export default function DashboardGestor() {
  // mock de tickets só para pré-visualização
  const [tickets] = useState(() => [
    {
      id: "TCK-00231",
      title: "Solicitação de Férias",
      sub: "Colaborador: Ana Paula • Setor: RH",
      category: "ferias",
      status: "pending",
      requester: { nome: "Ana Paula", email: "ana.paula@empresa.com" },
      caso:
        "Solicitação de férias referente ao período aquisitivo 2024/2025. Dúvida sobre saldo e datas possíveis.",
      atividades: [
        "12/10 09:12 — Ticket aberto pela colaboradora",
        "12/10 09:15 — Sistema anexou saldo do período"
      ],
      observacoes:
        "Verificar política interna de férias para períodos fracionados; confirmar feriados do mês."
    },
    {
      id: "TCK-00219",
      title: "Acerto de Ponto",
      sub: "Colaborador: João Silva • Setor: Produção",
      category: "ponto",
      status: "in_progress",
      requester: { nome: "João Silva", email: "joao.silva@empresa.com" },
      caso:
        "Registro de ponto ausente no dia 03/10 durante turno noturno. Precisa incluir justificativa.",
      atividades: [
        "10/10 18:40 — Ticket aberto",
        "11/10 08:05 — RH solicitou comprovante de hora extra"
      ],
      observacoes:
        "Aguardar documento do líder; se OK, lançar ajuste no sistema até sexta."
    }
  ]);

  const [query, setQuery] = useState("");
  const [filterDashboard, setFilterDashboard] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [activeId, setActiveId] = useState(null);

  const active = useMemo(
    () => tickets.find((t) => t.id === activeId) || null,
    [tickets, activeId]
  );

  const filtered = useMemo(() => {
    return tickets.filter((t) => {
      const matchQ =
        !query ||
        [t.id, t.title, t.sub, t.caso, t.requester?.nome]
          .join(" ")
          .toLowerCase()
          .includes(query.toLowerCase());
      const matchStatus = filterStatus === "all" || t.status === filterStatus;
      const matchCat = filterCategory === "all" || t.category === filterCategory;
      return matchQ && matchStatus && matchCat;
    });
  }, [tickets, query, filterStatus, filterCategory]);

  const [showModal, setShowModal] = useState(false);

  const statusPillClass =
    active?.status === "pending"
      ? "pending"
      : active?.status === "in_progress"
      ? "in_progress"
      : active?.status === "resolved"
      ? "resolved"
      : active?.status === "closed"
      ? "closed"
      : "";

  return (
    <>
      <GlobalStyles />

      <App className="app">
        <Topbar className="topbar">
          <Brand className="brand">
            <LogoBox className="logo" aria-hidden="true">
              {/* SVG do logo original */}
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="4" fill="#0b6b8a"/>
                <path d="M6 12h12" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/>
                <path d="M6 8h8" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </LogoBox>

            <BrandText className="brand-text">
              <strong>Multi Center</strong>
              <small>Sistema de Solicitações</small>
            </BrandText>
          </Brand>

          <TopActions className="top-actions">
            <Search className="search" role="search">
              <SearchInput
                id="searchInput"
                placeholder="Pesquisar tickets, colaborador ou resumo..."
                aria-label="Pesquisar tickets"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query && (
                <SearchClear
                  id="clearSearch"
                  type="button"
                  title="Limpar"
                  aria-label="Limpar pesquisa"
                  onClick={() => setQuery("")}
                >
                  ✕
                </SearchClear>
              )}
            </Search>

            <Separator className="filters separator" aria-hidden="true" />

            <FiltersGroup className="filters">
              <TopSelect
                id="filterDashboard"
                title="Filtrar dashboards"
                value={filterDashboard}
                onChange={(e) => setFilterDashboard(e.target.value)}
              >
                <option value="all">Todos os Dashboards</option>
                <option value="pending">Pendentes</option>
                <option value="in_progress">Em Andamento</option>
                <option value="resolved">Resolvido</option>
                <option value="closed">Fechado</option>
              </TopSelect>

              <TopSelect
                id="filterStatus"
                title="Filtrar por status"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">Todos os Status</option>
                <option value="pending">Pendente</option>
                <option value="in_progress">Em Análise</option>
                <option value="resolved">Resolvido</option>
                <option value="closed">Fechado</option>
              </TopSelect>

              <TopSelect
                id="filterCategory"
                title="Filtrar por categoria"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                <option value="all">Todas as Categorias</option>
                <option value="ponto">Ponto</option>
                <option value="ferias">Férias</option>
                <option value="gestao">Gestão</option>
                <option value="rh">RH</option>
                <option value="outros">Outros</option>
              </TopSelect>
            </FiltersGroup>

            <UserBox className="user">
              <UserName className="user-name">Olá, Gestor</UserName>
              <Avatar className="avatar" title="Gestor" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="8" r="3" fill="#fff" />
                  <path d="M4 20c1.8-3.3 5.4-5 8-5s6.2 1.7 8 5"
                        stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </Avatar>
            </UserBox>
          </TopActions>
        </Topbar>

        <Container className="container">
          <Sidebar className="sidebar">
            <SidebarHeader className="sidebar-header">
              <h2>Tickets Abertos</h2>
              <OpenCount id="openCount" className="open-count">
                {filtered.length}
              </OpenCount>
            </SidebarHeader>

            <TicketList id="ticketList" className="ticket-list" aria-live="polite">
              {filtered.map((t) => (
                <TicketItem
                  key={t.id}
                  className={`ticket-item ${activeId === t.id ? "active" : ""}`}
                  onClick={() => setActiveId(t.id)}
                >
                  <TicketMeta className="ticket-meta">
                    <TicketId className="ticket-id">{t.id}</TicketId>
                    <TicketTitle className="ticket-title">{t.title}</TicketTitle>
                    <TicketSub className="ticket-sub">{t.sub}</TicketSub>

                    <TicketBadges className="ticket-badges">
                      <Badge className="badge category">
                        {t.category.toUpperCase()}
                      </Badge>
                      <Badge className="badge status">
                        {t.status.replace("_", " ").toUpperCase()}
                      </Badge>
                    </TicketBadges>
                  </TicketMeta>
                </TicketItem>
              ))}
            </TicketList>
          </Sidebar>

          <Detail className="detail">
            <DetailHeader className="detail-header">
              <TicketId id="detailTicketId" className="ticket-id">
                {active ? active.id : "Selecione um ticket"}
              </TicketId>

              <DetailActions className="detail-actions">
                <Btn
                  id="btnAccept"
                  className="btn primary"
                  disabled={!active}
                  onClick={() => active && alert(`Ticket ${active.id} aceito`)}
                >
                  Aceitar
                </Btn>
                <Btn
                  id="btnRequestInfo"
                  className="btn outline"
                  disabled={!active}
                  onClick={() => setShowModal(true)}
                >
                  Solicitar mais info
                </Btn>
                <Btn
                  id="btnClose"
                  className="btn danger"
                  disabled={!active}
                  onClick={() => active && alert(`Ticket ${active.id} fechado`)}
                >
                  Fechar
                </Btn>
              </DetailActions>
            </DetailHeader>

            <DetailBody className="detail-body">
              <Cards className="cards">
                <Card className="card card-requester">
                  <CardTitle className="card-title">Solicitante</CardTitle>
                  <CardContent id="detailRequester" className="card-content">
                    {active ? (
                      <>
                        <div className="name">{active.requester?.nome}</div>
                        <div className="muted">{active.requester?.email}</div>
                      </>
                    ) : (
                      <Muted className="muted">Nenhum ticket selecionado</Muted>
                    )}
                  </CardContent>
                </Card>

                <Card className="card card-case">
                  <CardTitle className="card-title">Problema / Caso</CardTitle>
                  <CardContent id="detailCase" className="card-content">
                    {active ? (
                      active.caso
                    ) : (
                      <Muted className="muted">Nenhum ticket selecionado</Muted>
                    )}
                  </CardContent>
                </Card>

                <Card className="card card-status">
                  <CardTitle className="card-title">Status</CardTitle>
                  <CardContent id="detailStatus" className="card-content">
                    {active ? (
                      <Pill className={`pill ${statusPillClass}`}>
                        {active.status.replace("_", " ")}
                      </Pill>
                    ) : (
                      <Muted className="muted">-</Muted>
                    )}
                  </CardContent>
                </Card>
              </Cards>

              <TimelineAndNotes className="timeline-and-notes">
                <Timeline className="timeline">
                  <SectionTitle className="section-title">Atividades</SectionTitle>
                  <TimelineList id="detailTimeline" className="timeline-list">
                    {active ? (
                      active.atividades.map((a, i) => (
                        <TimelineItem className="timeline-item" key={i}>
                          {a}
                        </TimelineItem>
                      ))
                    ) : (
                      <li className="muted">Nenhuma atividade disponível</li>
                    )}
                  </TimelineList>
                </Timeline>

                <Notes className="notes">
                  <SectionTitle className="section-title">Observações</SectionTitle>
                  <NotesContent id="detailNotes" className="notes-content">
                    {active ? active.observacoes : (
                      <Muted className="muted">
                        Selecione um ticket para ver as observações.
                      </Muted>
                    )}
                  </NotesContent>
                </Notes>
              </TimelineAndNotes>
            </DetailBody>

            <DetailFooter className="detail-footer">
              <Muted id="detailUpdated" className="last-updated muted">
                Última atualização: {active ? "agora" : "—"}
              </Muted>
              <div className="footer-actions">
                <Btn
                  id="btnExport"
                  className="btn plain"
                  disabled={!active}
                  onClick={() => alert("Exportar (stub)")}
                >
                  Exportar
                </Btn>
              </div>
            </DetailFooter>
          </Detail>
        </Container>

        {/* Modal */}
        <Modal
          id="modal"
          className={`modal ${showModal ? "" : "hidden"}`}
          role="dialog"
          aria-modal="true"
          aria-hidden={!showModal}
          onClick={(e) => {
            if (e.target.getAttribute("id") === "modal") setShowModal(false);
          }}
        >
          <ModalCard className="modal-card">
            <h3>Solicitar mais informações</h3>
            <ModalTextarea
              id="modalMessage"
              placeholder="Digite a solicitação para o colaborador..."
              rows={6}
              aria-label="Mensagem para colaborador"
            />
            <ModalActions className="modal-actions">
              <Btn
                id="modalCancel"
                type="button"
                className="btn outline"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </Btn>
              <Btn
                id="modalSend"
                type="button"
                className="btn primary"
                onClick={() => {
                  setShowModal(false);
                  alert("Solicitação enviada (stub)");
                }}
              >
                Enviar
              </Btn>
            </ModalActions>
          </ModalCard>
        </Modal>

        <AppFooter className="app-footer">
          <small>Multi Center — Sistema interno • © 2025</small>
        </AppFooter>
      </App>
    </>
  );
}
