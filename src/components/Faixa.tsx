import { consultorio, mapsLink } from "@/lib/consultorio";

const items = [
  consultorio.categoria,
  `${consultorio.rua}, ${consultorio.cidade.split(" · ")[0]}`,
  "Presencial ou online",
  "Método RQE® — metodologia própria e registrada",
  "Devolutiva completa a cada sessão",
];

/**
 * A faixa roda duplicada: o track anda ate -50% e reinicia, e como as duas
 * metades sao identicas o corte nao aparece. A copia e aria-hidden para o
 * leitor de tela nao ouvir tudo duas vezes.
 */
function Grupo({ clone = false }: { clone?: boolean }) {
  return (
    <div className="faixa__grupo" aria-hidden={clone || undefined}>
      {items.map((item) => (
        <span className="faixa__item" key={item}>
          {item}
          <span className="faixa__ponto" aria-hidden="true" />
        </span>
      ))}

      <a
        href={mapsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="faixa__nota"
        tabIndex={clone ? -1 : undefined}
      >
        <span className="faixa__nota-valor">{consultorio.nota}</span>
        <span className="faixa__nota-texto">
          <span className="faixa__estrelas" aria-hidden="true">
            ★★★★★
          </span>
          <span className="faixa__nota-label">
            {consultorio.avaliacoes} avaliações no Google
          </span>
        </span>
      </a>
      <span className="faixa__ponto" aria-hidden="true" />
    </div>
  );
}

export default function Faixa() {
  return (
    <section className="faixa" aria-label="Consultório e avaliações">
      <div className="faixa__track">
        <Grupo />
        <Grupo clone />
      </div>
    </section>
  );
}
