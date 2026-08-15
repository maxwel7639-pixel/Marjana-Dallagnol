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

          {/* o iframe engole o clique, entao o link de rota fica fora dele —
              e assim tambem nao cobre a atribuicao do OpenStreetMap */}
          <div className="footer__mapa">
            <div className="footer__map">
              <iframe
                title="Mapa do consultório — Petrópolis, Passo Fundo/RS"
                src={osmEmbed}
                loading="lazy"
              />
            </div>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__map-link"
            >
              <span className="footer__map-pin" aria-hidden="true" />
              Ver rota no Google Maps
              <span className="footer__map-seta" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>

        <div className="footer__info">
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
          </div>

          <div>
            <p className="footer__label">Atendimento</p>
            <p className="footer__attendance">Online e presencial</p>
          </div>

          <div>
            <p className="footer__label">Avaliações</p>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__nota"
            >
              <span className="footer__nota-valor">{consultorio.nota}</span>
              <span className="footer__nota-texto">
                <span className="footer__estrelas" aria-hidden="true">
                  ★★★★★
                </span>
                <span className="footer__nota-label">
                  {consultorio.avaliacoes} avaliações no Google
                </span>
              </span>
            </a>
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
