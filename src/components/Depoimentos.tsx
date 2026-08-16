"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

const quotes = [
  "“Cada sessão me ajudou a me entender e a ter clareza do caminho que quero seguir. Não é fácil, ainda tenho coisas para encarar, mas sem a terapia nada teria mudado — e eu não seria essa pessoa que estou me tornando.”",
  "“Melhorou bastante coisa e vejo que me ajudou muito: estou bem melhor do que antes. Algumas coisas ainda estão se alinhando, mas isso vem com o tempo.”",
  "“Estou vencendo o medo a cada dia. Hoje foi o segundo dia que dirigi, com meu marido do meu lado. Ainda sinto o peso de algumas coisas, mas tudo com menos intensidade.”",
];

const gallery = [
  {
    src: "/assets/depoimento-1.png",
    alt: "Mensagem de cliente recebida por WhatsApp",
    width: 529,
    height: 742,
  },
  {
    src: "/assets/depoimento-2.png",
    alt: "Mensagem de cliente recebida por WhatsApp",
    width: 530,
    height: 706,
  },
  {
    src: "/assets/depoimento-3.png",
    alt: "Mensagem de cliente recebida por WhatsApp",
    width: 526,
    height: 715,
  },
  {
    src: "/assets/depoimento-4.png",
    alt: "Relato de cliente após análise estrutural",
    width: 521,
    height: 731,
  },
  {
    src: "/assets/depoimento-5.png",
    alt: "Relato de cliente após processo terapêutico",
    width: 521,
    height: 652,
  },
];

export default function Depoimentos() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<(typeof gallery)[number] | null>(null);

  const open = useCallback((item: (typeof gallery)[number]) => {
    setActive(item);
    dialogRef.current?.showModal();
  }, []);

  // clique no backdrop: o alvo só é o próprio <dialog> fora do conteúdo
  const onDialogClick = useCallback((event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) dialogRef.current?.close();
  }, []);

  return (
    <section id="depoimentos" className="depoimentos">
      <div className="depoimentos__inner">
        <p className="eyebrow" style={{ marginBottom: 0 }}>
          Depoimentos
        </p>
        <h2 className="depoimentos__title">Quem está no processo</h2>

        <div className="testimonial-grid">
          {quotes.map((quote) => (
            <figure className="testimonial-card" key={quote}>
              <blockquote className="testimonial-card__quote">{quote}</blockquote>
              <figcaption className="testimonial-card__author">Cliente em processo</figcaption>
            </figure>
          ))}
        </div>

        <div className="gallery">
          {gallery.map((img) => (
            <button
              type="button"
              className="gallery__item"
              key={img.src}
              onClick={() => open(img)}
              aria-label={`Ampliar: ${img.alt}`}
            >
              <span className="gallery__frame">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  sizes="(max-width: 640px) 72vw, 360px"
                />
              </span>
            </button>
          ))}
        </div>
        <p className="gallery__caption">Mensagens recebidas · toque para ampliar</p>
        <p className="depoimentos__note">
          Relatos recebidos por mensagem, publicados com autorização e sem identificação.
        </p>
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        onClick={onDialogClick}
        onClose={() => setActive(null)}
      >
        {active && (
          <div className="lightbox__inner">
            <button
              type="button"
              className="lightbox__close"
              onClick={() => dialogRef.current?.close()}
              aria-label="Fechar"
            >
              ×
            </button>
            {/* sizes casa com o candidato de 640w do srcset de proposito: se os
                dois divergem o browser aplica um fator de densidade e encolhe o
                tamanho intrinseco, abrindo a imagem menor que o original. */}
            <Image
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              sizes="640px"
              className="lightbox__image"
            />
          </div>
        )}
      </dialog>
    </section>
  );
}
