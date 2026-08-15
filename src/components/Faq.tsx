"use client";

import { useState } from "react";
import { waLink, waMessages } from "@/lib/whatsapp";

const items = [
  {
    question: "Como funciona o Método RQE®?",
    answer:
      "Começa pela leitura do seu campo. A partir dela identifico a estrutura que sustenta e repete o padrão que te incomoda, faço a reorganização e te entrego uma devolutiva completa do que apareceu e do que se moveu na sessão.",
  },
  {
    question: "O atendimento é online ou presencial?",
    answer:
      "Os dois. Presencial no consultório em Petrópolis, Passo Fundo/RS, e online para quem está em outra cidade. O processo é o mesmo nas duas formas — a leitura não depende da presença física.",
  },
  {
    question: "Quanto tempo dura o processo?",
    answer:
      "Depende do que a leitura mostrar. Algumas questões se reorganizam em poucas sessões; outras pedem acompanhamento por um período. Depois da primeira sessão você recebe a devolutiva e conversamos sobre o ritmo que faz sentido para você.",
  },
  {
    question: "Como agendo minha primeira sessão?",
    answer:
      "Pelo WhatsApp. Você me conta brevemente o que está buscando, eu explico como funciona e combinamos horário e formato — online ou presencial.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number>(-1);

  return (
    <section id="faq" className="faq">
      <div className="faq__inner">
        <p className="eyebrow" style={{ marginBottom: 0 }}>
          Perguntas frequentes
        </p>
        <h2 className="faq__title">Antes da primeira sessão</h2>

        <div className="faq__list">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className="faq__item" key={item.question}>
                <button
                  type="button"
                  className="faq__question"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  {item.question}
                  <span className="faq__icon">{isOpen ? "–" : "+"}</span>
                </button>
                {isOpen && <p className="faq__answer">{item.answer}</p>}
              </div>
            );
          })}
        </div>

        <div className="faq__cta">
          <a href={waLink(waMessages.faq)} target="_blank" rel="noopener noreferrer" className="btn">
            Tirar minha dúvida no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
