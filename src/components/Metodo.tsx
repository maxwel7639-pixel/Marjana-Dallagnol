import Image from "next/image";
import { waLink, waMessages } from "@/lib/whatsapp";

const steps = [
  {
    title: "Leitura do campo",
    text: "Antes de qualquer intervenção, leio o que está organizado em você agora — o que sustenta a queixa que te trouxe até aqui.",
  },
  {
    title: "Identificação do padrão",
    text: "Nomeamos a estrutura que se repete: a lógica silenciosa por trás das escolhas, dos vínculos e do cansaço.",
  },
  {
    title: "Reorganização e devolutiva",
    text: "A estrutura é reorganizada e você recebe a devolutiva completa da sessão, com clareza do caminho e do próximo passo.",
  },
];

export default function Metodo() {
  return (
    <section id="metodo" className="metodo">
      <div className="metodo__grid">
        <div className="metodo__intro">
          <h2 className="metodo__title">Método RQE®</h2>
          <p className="metodo__subtitle">Reprogramação Quântica Estrutural®</p>
          <div className="metodo__quote">
            <p className="metodo__quote-text">
              Leio e reorganizo a estrutura que sustenta e repete os padrões que afetam a sua
              vida.
            </p>
          </div>
          <div className="metodo__signature">
            <p className="metodo__signature-name">Marjana Dallagnol</p>
            <p className="metodo__signature-role">Terapeuta Estrutural Sistêmica</p>
          </div>
        </div>
        <div className="metodo__portrait">
          <Image
            src="/assets/marjana-blazer.svg"
            alt="Retrato — blazer marinho, luz de janela"
            fill
            sizes="(min-width: 900px) 45vw, 100vw"
          />
        </div>
      </div>

      <div className="metodo-steps">
        <div className="metodo-steps__inner">
          <p className="metodo-steps__eyebrow">Como o processo acontece</p>
          <div className="metodo-steps__grid">
            {steps.map((step) => (
              <div key={step.title}>
                <p className="metodo-step__title">{step.title}</p>
                <p className="metodo-step__text">{step.text}</p>
              </div>
            ))}
          </div>
          <div className="metodo-steps__cta">
            <a href={waLink(waMessages.metodo)} target="_blank" rel="noopener noreferrer" className="btn">
              Agendar sessão
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
