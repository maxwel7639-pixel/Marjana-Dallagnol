import Image from "next/image";
import { waLink, waMessages } from "@/lib/whatsapp";

export default function Nav() {
  return (
    <nav className="nav">
      <a href="#top" className="nav__brand">
        <Image
          src="/assets/logo.png"
          alt="Marjana Dallagnol Espaço Terapêutico"
          width={293}
          height={111}
          className="nav__logo"
          priority
        />
      </a>
      <div className="nav__right">
        <div className="nav__links">
          <a href="#sobre" className="nav__link">
            Sobre
          </a>
          <a href="#metodo" className="nav__link">
            Método RQE
          </a>
          <a href="#depoimentos" className="nav__link">
            Depoimentos
          </a>
        </div>
        <a
          href={waLink(waMessages.nav)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--small"
        >
          Agendar no WhatsApp
        </a>
      </div>
    </nav>
  );
}
