import { consultorio } from "@/lib/consultorio";

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
    </div>
  );
}

export default function Faixa() {
  return (
    <section className="faixa" aria-label="Consultório e atendimento">
      <div className="faixa__track">
        <Grupo />
        <Grupo clone />
      </div>
    </section>
  );
}
