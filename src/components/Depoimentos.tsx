import Image from "next/image";

const quotes = [
  "“Cada sessão me ajudou a me entender e a ter clareza do caminho que quero seguir. Não é fácil, ainda tenho coisas para encarar, mas sem a terapia nada teria mudado — e eu não seria essa pessoa que estou me tornando.”",
  "“Melhorou bastante coisa e vejo que me ajudou muito: estou bem melhor do que antes. Algumas coisas ainda estão se alinhando, mas isso vem com o tempo.”",
  "“Estou vencendo o medo a cada dia. Hoje foi o segundo dia que dirigi, com meu marido do meu lado. Ainda sinto o peso de algumas coisas, mas tudo com menos intensidade.”",
];

const gallery = [
  { src: "/assets/depoimento-1.svg", alt: "Mensagem de cliente recebida por WhatsApp" },
  { src: "/assets/depoimento-2.svg", alt: "Mensagem de cliente recebida por WhatsApp" },
  { src: "/assets/depoimento-3.svg", alt: "Mensagem de cliente recebida por WhatsApp" },
  { src: "/assets/depoimento-4.svg", alt: "Relato de cliente após análise estrutural" },
  { src: "/assets/depoimento-5.svg", alt: "Relato de cliente após processo terapêutico" },
];

export default function Depoimentos() {
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
            <figure className="gallery__item" key={img.src}>
              <div className="gallery__frame">
                <Image src={img.src} alt={img.alt} width={300} height={400} />
              </div>
            </figure>
          ))}
        </div>
        <p className="gallery__caption">Mensagens recebidas · arraste para o lado</p>
        <p className="depoimentos__note">
          Relatos recebidos por mensagem, publicados com autorização e sem identificação.
        </p>
      </div>
    </section>
  );
}
