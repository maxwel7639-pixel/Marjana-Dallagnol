import Image from "next/image";
import { waLink, waMessages } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="hero__content">
        <p className="hero__tag">Terapeuta Estrutural Sistêmica · Online e Presencial</p>
        <h1 className="hero__title">
          Marjana
          <br />
          Dallagnol
        </h1>
        <p className="hero__lead">
          Reorganizo a estrutura que sustenta e repete os padrões que travam a sua vida. Um
          processo de leitura e reorganização — com devolutiva completa depois de cada sessão.
        </p>
        <div className="hero__actions">
          <a href={waLink(waMessages.hero)} target="_blank" rel="noopener noreferrer" className="btn">
            Agende sua sessão
          </a>
          <a href="#metodo" className="btn btn--outline">
            Conhecer o Método RQE
          </a>
        </div>
      </div>
      <div className="hero__portrait">
        <Image
          src="/assets/marjana-blazer.webp"
          alt="Marjana Dallagnol — foto profissional de blazer marinho"
          fill
          sizes="(min-width: 900px) 520px, 100vw"
          priority
        />
      </div>
    </header>
  );
}
