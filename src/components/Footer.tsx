import { consultorio, mapsLink, osmEmbed } from "@/lib/consultorio";
import { waLink, waMessages } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div>
            <h2 className="footer__title">Marjana Dallagnol</h2>
            <p className="footer__subtitle">Espaço Terapêutico</p>
            <p className="footer__quote">
              Você não precisa continuar em segundo lugar para caber na sua própria vida.
            </p>
            <a
              href={waLink(waMessages.footer)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn footer__cta"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div className="footer__col">
            <div>
              <p className="footer__label">Instagram</p>
              <a
                href="https://instagram.com/marjanadallagnolterapeuta"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                @marjanadallagnolterapeuta
              </a>
            </div>
            <div>
              <p className="footer__label">Consultório</p>
              <p className="footer__address">
                {consultorio.rua}
                <br />
                {consultorio.cidade}
              </p>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__map"
              >
                <iframe
                  title="Mapa do consultório — Petrópolis, Passo Fundo/RS"
                  src={osmEmbed}
                  loading="lazy"
                />
                <span className="footer__map-bar">
                  <span className="footer__map-pin" aria-hidden="true" />
                  Ver rota no Google Maps
                  <span className="footer__map-seta" aria-hidden="true">
                    →
                  </span>
                </span>
              </a>
            </div>
            <div>
              <p className="footer__label">Atendimento</p>
              <p className="footer__attendance">Online e presencial</p>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Marjana Dallagnol · Método RQE®</p>
          <p>Terapeuta Estrutural Sistêmica</p>
        </div>
      </div>
    </footer>
  );
}
