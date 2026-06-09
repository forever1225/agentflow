"use client";
import { useState, useEffect } from "react";

const NAV_LINKS = ["Características", "Precios", "Plantillas", "Blog"];

const FEATURES = [
  { icon: "🤖", title: "IA que aprende tu negocio", desc: "Claude Opus entiende tu industria, servicios y tono. Responde como si fuera tu mejor empleado." },
  { icon: "📅", title: "Agenda citas automáticamente", desc: "Detecta intención de agendar, propone horarios y confirma en Google Calendar sin que toques nada." },
  { icon: "🌍", title: "8 idiomas en tiempo real", desc: "Detecta el idioma del cliente y responde en el mismo. Español, inglés, portugués y más." },
  { icon: "🎙️", title: "Entiende notas de voz", desc: "Transcribe audios de WhatsApp con Whisper y responde por texto o voz según tu preferencia." },
  { icon: "📊", title: "Analytics que importan", desc: "CSAT, tiempo de respuesta, conversaciones resueltas, heatmap horario. Todo en un dashboard." },
  { icon: "🔗", title: "Conecta tu stack", desc: "Google Calendar, HubSpot CRM y Zapier sincronizados automáticamente con cada cita." },
];

const PLANS = [
  {
    name: "Starter", price: 29, color: "#6366f1", msgs: "1,000 msgs/mes",
    features: ["1 agente IA", "WhatsApp Business", "Agenda automática", "Soporte por email"],
  },
  {
    name: "Pro", price: 79, color: "#8b5cf6", msgs: "5,000 msgs/mes", popular: true,
    features: ["3 agentes IA", "Multi-idioma + voz", "Google Calendar + HubSpot", "Widget web embed", "Analytics avanzado"],
  },
  {
    name: "Enterprise", price: 199, color: "#ec4899", msgs: "Ilimitado",
    features: ["Agentes ilimitados", "API personalizada", "SLA 99.9%", "Onboarding dedicado", "White-label"],
  },
];

const TEMPLATES = [
  { emoji: "🦷", name: "Clínica Dental", color: "#0ea5e9" },
  { emoji: "🍽️", name: "Restaurante", color: "#f97316" },
  { emoji: "💇", name: "Salón de Belleza", color: "#ec4899" },
  { emoji: "💪", name: "Gimnasio", color: "#10b981" },
  { emoji: "🏥", name: "Consultorio Médico", color: "#6366f1" },
  { emoji: "🏨", name: "Hotel / Hospedaje", color: "#f59e0b" },
  { emoji: "⚖️", name: "Despacho Legal", color: "#8b5cf6" },
  { emoji: "🏋️", name: "Entrenador Personal", color: "#14b8a6" },
];

const TESTIMONIALS = [
  { name: "Dra. Carmen López", role: "Clínica DentalCare · Monterrey", avatar: "👩‍⚕️", stars: 5, quote: "En 2 semanas el agente agendó 47 citas sin que yo contestara un solo WhatsApp. Es como tener una recepcionista 24/7." },
  { name: "Chef Marco Ruiz", role: "Restaurante El Patio · CDMX", avatar: "👨‍🍳", stars: 5, quote: "Mis clientes hacen reservaciones a las 2am y el bot responde perfecto. Las reservaciones subieron 35% el primer mes." },
  { name: "Sofía Mendez", role: "Studio Glow Beauty · Guadalajara", avatar: "💅", stars: 5, quote: "El agente recuerda a las clientas sus citas, envía confirmaciones y hasta da indicaciones. Increíble." },
];

const chatMessages = [
  { from: "bot", text: "¡Hola! Soy el agente IA de DentalCare 😊 ¿En qué te puedo ayudar hoy?" },
  { from: "user", text: "Quiero agendar una limpieza dental" },
  { from: "bot", text: "¡Perfecto! Tengo disponibilidad para limpieza dental. ¿Prefieres por la mañana o por la tarde? 🦷" },
  { from: "user", text: "Por la mañana, este jueves" },
  { from: "bot", text: "Tengo jueves 12 de junio a las 10:00am o 11:30am. ¿Cuál te funciona mejor?" },
];

export default function AgentFlowLanding() {
  const [annual, setAnnual] = useState(false);
  const [chatStep, setChatStep] = useState(0);
  const [chatVisible, setChatVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!chatVisible) return;
    if (chatStep < chatMessages.length - 1) {
      const t = setTimeout(() => setChatStep((s) => s + 1), 1200);
      return () => clearTimeout(t);
    }
  }, [chatStep, chatVisible]);

  const startDemo = () => {
    setChatVisible(true);
    setChatStep(0);
  };

  return (
    <div style={{ fontFamily: "'Inter',-apple-system,sans-serif", background: "#06060f", color: "#e2e8f0", lineHeight: "1.6" }}>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? "rgba(6,6,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #1e293b" : "1px solid transparent",
        padding: "0 24px",
        transition: "all 0.3s",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", height: 64, gap: 32 }}>
          <div style={{ fontWeight: 800, fontSize: 22, background: "linear-gradient(135deg,#818cf8,#c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            ⚡ AgentFlow
          </div>
          <div style={{ display: "flex", gap: 28, flex: 1, justifyContent: "center" }}>
            {NAV_LINKS.map((l) => (
              <a key={l} href="#" style={{ color: "#94a3b8", fontSize: 14, textDecoration: "none" }}>{l}</a>
            ))}
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button style={{ background: "transparent", border: "1px solid #334155", color: "#94a3b8", borderRadius: 8, padding: "7px 18px", fontSize: 13, cursor: "pointer" }}>
              Entrar
            </button>
            <button style={{ background: "linear-gradient(135deg,#4f46e5,#7c3aed)", border: "none", color: "#fff", borderRadius: 8, padding: "7px 18px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
              Empezar gratis →
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "140px 24px 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "5%", left: "50%", transform: "translateX(-50%)", width: 700, height: 500, background: "radial-gradient(ellipse, rgba(79,70,229,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: 780, margin: "0 auto" }}>
          <div style={{ marginBottom: 20 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.3)", color: "#4ade80", borderRadius: 20, padding: "5px 16px", fontSize: 12, fontWeight: 600 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80", display: "inline-block" }} />
              Nuevo · Voz + multi-idioma disponible
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(2.4rem,5.5vw,4.2rem)", fontWeight: 900, lineHeight: 1.1, margin: "0 0 24px", letterSpacing: "-1.5px" }}>
            Tu negocio responde en{" "}
            <span style={{ background: "linear-gradient(135deg,#818cf8 30%,#c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              WhatsApp 24/7
            </span>
            <br />sin que muevas un dedo
          </h1>
          <p style={{ fontSize: 18, color: "#94a3b8", maxWidth: 540, margin: "0 auto 36px", lineHeight: 1.7 }}>
            Crea un agente de IA que atiende clientes, agenda citas y responde dudas — exactamente como lo harías tú.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{ background: "linear-gradient(135deg,#4f46e5,#7c3aed)", border: "none", color: "#fff", borderRadius: 12, padding: "15px 32px", fontSize: 16, fontWeight: 700, cursor: "pointer", boxShadow: "0 0 40px rgba(79,70,229,0.4)" }}>
              Crear mi agente gratis →
            </button>
            <button onClick={startDemo} style={{ background: "#111827", border: "1px solid #1e293b", color: "#e2e8f0", borderRadius: 12, padding: "15px 28px", fontSize: 15, cursor: "pointer" }}>
              ▶ Ver demo en vivo
            </button>
          </div>
          <p style={{ fontSize: 12, color: "#374151", marginTop: 16 }}>14 días gratis · Sin tarjeta de crédito · Cancela cuando quieras</p>

          {chatVisible && (
            <div style={{ maxWidth: 360, margin: "48px auto 0", background: "#0d1117", border: "1px solid #1e293b", borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.6)" }}>
              <div style={{ background: "#111827", padding: "12px 16px", display: "flex", alignItems: "center", gap: 10, borderBottom: "1px solid #1e293b" }}>
                <span style={{ fontSize: 20 }}>🦷</span>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontWeight: 600, fontSize: 13 }}>DentalCare IA</div>
                  <div style={{ fontSize: 11, color: "#4ade80" }}>● En línea ahora</div>
                </div>
              </div>
              <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 10, minHeight: 200 }}>
                {chatMessages.slice(0, chatStep + 1).map((m, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: m.from === "user" ? "flex-end" : "flex-start" }}>
                    <div style={{ maxWidth: "80%", padding: "8px 12px", borderRadius: m.from === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px", background: m.from === "user" ? "#4f46e5" : "#1e293b", fontSize: 13, lineHeight: 1.5, textAlign: "left" }}>
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div style={{ display: "flex", justifyContent: "center", gap: 36, marginTop: chatVisible ? 36 : 60, flexWrap: "wrap" }}>
            {[["500+", "negocios activos"], ["98%", "satisfacción"], ["2.4M", "mensajes/mes"], ["47s", "respuesta promedio"]].map(([v, l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 24, fontWeight: 800, color: "#818cf8" }}>{v}</div>
                <div style={{ fontSize: 11, color: "#4b5563" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAIN */}
      <section style={{ padding: "60px 24px", background: "#080810" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 800, marginBottom: 40 }}>¿Te identificas con esto? 😩</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 16 }}>
            {["📱 Pierdes clientes que escriben fuera de horario", "😤 Pasas horas contestando siempre las mismas preguntas", "📅 Se te olvida confirmar citas y el cliente no llega", "🔥 Tu equipo pierde tiempo en mensajes en lugar de atender"].map((p) => (
              <div key={p} style={{ background: "#0d1117", border: "1px solid #1f2937", borderRadius: 12, padding: "18px 20px", fontSize: 14, color: "#94a3b8", textAlign: "left", lineHeight: 1.6 }}>{p}</div>
            ))}
          </div>
          <div style={{ marginTop: 40, padding: "28px 32px", background: "linear-gradient(135deg,#1e1b4b,#0f172a)", border: "1px solid rgba(79,70,229,0.3)", borderRadius: 16 }}>
            <p style={{ fontSize: 16, color: "#a5b4fc", margin: 0 }}>
              <strong style={{ color: "#fff" }}>AgentFlow lo resuelve todo.</strong>{" "}
              Tu agente IA trabaja 24/7, recuerda cada conversación y agenda por ti — desde $29/mes.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1020, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ display: "inline-block", background: "rgba(129,140,248,0.15)", border: "1px solid rgba(129,140,248,0.3)", color: "#818cf8", borderRadius: 20, padding: "4px 16px", fontSize: 12, fontWeight: 600, marginBottom: 16 }}>Características</span>
            <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 800, marginBottom: 12 }}>Todo lo que necesita tu negocio</h2>
            <p style={{ color: "#64748b", fontSize: 15 }}>Configurado en minutos. Sin código. Sin headaches.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(290px,1fr))", gap: 20 }}>
            {FEATURES.map((f) => (
              <div key={f.title} style={{ background: "#0d1117", border: "1px solid #1e293b", borderRadius: 14, padding: 26, transition: "border-color 0.2s, transform 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#4f46e5"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#1e293b"; (e.currentTarget as HTMLDivElement).style.transform = "none"; }}>
                <div style={{ fontSize: 34, marginBottom: 14 }}>{f.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8, color: "#e2e8f0" }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEMPLATES */}
      <section style={{ padding: "60px 24px", background: "#080810" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <span style={{ display: "inline-block", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", color: "#10b981", borderRadius: 20, padding: "4px 16px", fontSize: 12, fontWeight: 600, marginBottom: 16 }}>Marketplace</span>
          <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 800, margin: "0 0 12px" }}>Activa en 1 click para tu industria</h2>
          <p style={{ color: "#64748b", marginBottom: 36 }}>12 plantillas preconfiguradas con servicios, preguntas frecuentes y flujos listos.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {TEMPLATES.map((t) => (
              <div key={t.name} style={{ background: "#0d1117", border: `1px solid ${t.color}44`, borderRadius: 12, padding: "12px 22px", display: "flex", alignItems: "center", gap: 10, cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = `${t.color}11`; (e.currentTarget as HTMLDivElement).style.borderColor = t.color; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#0d1117"; (e.currentTarget as HTMLDivElement).style.borderColor = `${t.color}44`; }}>
                <span style={{ fontSize: 22 }}>{t.emoji}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#e2e8f0" }}>{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", textAlign: "center" }}>
          <span style={{ display: "inline-block", background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.3)", color: "#6366f1", borderRadius: 20, padding: "4px 16px", fontSize: 12, fontWeight: 600, marginBottom: 16 }}>Precios</span>
          <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 800, margin: "0 0 12px" }}>Empieza gratis. Escala cuando quieras.</h2>
          <div style={{ display: "inline-flex", background: "#0d1117", border: "1px solid #1e293b", borderRadius: 30, padding: 4, marginBottom: 44 }}>
            <button onClick={() => setAnnual(false)} style={{ padding: "8px 22px", borderRadius: 26, border: "none", background: !annual ? "#4f46e5" : "transparent", color: !annual ? "#fff" : "#64748b", cursor: "pointer", fontSize: 13, transition: "all 0.2s" }}>Mensual</button>
            <button onClick={() => setAnnual(true)} style={{ padding: "8px 22px", borderRadius: 26, border: "none", background: annual ? "#4f46e5" : "transparent", color: annual ? "#fff" : "#64748b", cursor: "pointer", fontSize: 13, transition: "all 0.2s" }}>
              Anual <span style={{ color: "#4ade80", fontSize: 11 }}>-20%</span>
            </button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: 20 }}>
            {PLANS.map((p) => (
              <div key={p.name} style={{ background: (p as any).popular ? "linear-gradient(135deg,#1e1b4b,#0f172a)" : "#0d1117", border: `2px solid ${(p as any).popular ? p.color : "#1e293b"}`, borderRadius: 16, padding: "30px 26px", position: "relative", boxShadow: (p as any).popular ? `0 0 50px ${p.color}22` : "none" }}>
                {(p as any).popular && (
                  <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: p.color, color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 16px", borderRadius: 20 }}>MÁS POPULAR</div>
                )}
                <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 10 }}>{p.name}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}>
                  <span style={{ fontSize: 44, fontWeight: 900, color: p.color }}>${annual ? Math.round(p.price * 0.8) : p.price}</span>
                  <span style={{ color: "#4b5563", fontSize: 13 }}>/mes</span>
                </div>
                <div style={{ fontSize: 12, color: "#4b5563", marginBottom: 22 }}>{p.msgs}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 26 }}>
                  {p.features.map((f) => (
                    <div key={f} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 13, color: "#94a3b8", textAlign: "left" }}>
                      <span style={{ color: "#4ade80", flexShrink: 0 }}>✓</span>{f}
                    </div>
                  ))}
                </div>
                <button style={{ width: "100%", padding: "12px", borderRadius: 10, border: (p as any).popular ? "none" : "1px solid #1e293b", background: (p as any).popular ? `linear-gradient(135deg,${p.color},#6d28d9)` : "#111827", color: (p as any).popular ? "#fff" : "#94a3b8", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                  Empezar 14 días gratis
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "60px 24px", background: "#080810" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 800 }}>Negocios que ya crecen con AgentFlow</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: 20 }}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} style={{ background: "#0d1117", border: "1px solid #1e293b", borderRadius: 14, padding: 26 }}>
                <div style={{ marginBottom: 14 }}>{Array(t.stars).fill(0).map((_, i) => <span key={i} style={{ color: "#fbbf24", fontSize: 15 }}>★</span>)}</div>
                <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.7, marginBottom: 18 }}>"{t.quote}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: 30 }}>{t.avatar}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 13 }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: "#4b5563" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: "100px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 660, margin: "0 auto", background: "linear-gradient(135deg,#1e1b4b 0%,#0f172a 100%)", border: "1px solid rgba(79,70,229,0.35)", borderRadius: 24, padding: "64px 48px", boxShadow: "0 0 100px rgba(79,70,229,0.2)" }}>
          <div style={{ fontSize: 52, marginBottom: 20 }}>🚀</div>
          <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 900, marginBottom: 16 }}>
            Lanza tu agente hoy.<br />
            <span style={{ color: "#818cf8" }}>Gratis por 14 días.</span>
          </h2>
          <p style={{ color: "#64748b", marginBottom: 36, fontSize: 15 }}>
            Configúralo en 5 minutos con nuestro onboarding guiado por IA. Sin tarjeta. Sin compromisos.
          </p>
          <button style={{ background: "linear-gradient(135deg,#4f46e5,#7c3aed)", border: "none", color: "#fff", borderRadius: 12, padding: "18px 40px", fontSize: 17, fontWeight: 700, cursor: "pointer", boxShadow: "0 0 50px rgba(79,70,229,0.5)", width: "100%", maxWidth: 340 }}>
            Crear mi agente gratis →
          </button>
          <div style={{ display: "flex", justifyContent: "center", gap: 28, marginTop: 22, flexWrap: "wrap" }}>
            {["✅ Sin tarjeta", "✅ Setup en 5 min", "✅ Cancela cuando quieras"].map((f) => (
              <span key={f} style={{ fontSize: 12, color: "#4b5563" }}>{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #1e293b", padding: "32px 24px", textAlign: "center" }}>
        <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 10, color: "#818cf8" }}>⚡ AgentFlow</div>
        <div style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 16, flexWrap: "wrap" }}>
          {["Características", "Precios", "Plantillas", "Blog", "Afiliados", "Privacidad"].map((l) => (
            <a key={l} href="#" style={{ color: "#374151", fontSize: 13, textDecoration: "none" }}>{l}</a>
          ))}
        </div>
        <p style={{ color: "#1f2937", fontSize: 12 }}>© 2026 AgentFlow · Hecho con IA · Next.js + Claude + Stripe</p>
      </footer>
    </div>
  );
}
