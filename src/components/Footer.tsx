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
                R. Paissandu, 1254 — Petrópolis
                <br />
                Passo Fundo/RS · 99051-240
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=R.%20Paissandu%2C%201254%20-%20Petr%C3%B3polis%2C%20Passo%20Fundo%20-%20RS%2C%2099051-240"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__map"
              >
                <iframe
                  title="Mapa do consultório — Petrópolis, Passo Fundo/RS"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-52.4055%2C-28.2618%2C-52.3925%2C-28.2502&layer=mapnik&marker=-28.2560%2C-52.3990"
                  loading="lazy"
                />
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
