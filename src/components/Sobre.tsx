export default function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <div className="sobre__grid">
        <div>
          <p className="eyebrow">Sobre</p>
          <h2 className="sobre__title">Quem é Marjana Dallagnol</h2>
          <div className="sobre__divider" />
          <p className="sobre__text">
            Terapeuta estrutural sistêmica e criadora do Método RQE®, atende mulheres em processo
            de autoconhecimento e mudança em Passo Fundo/RS e online.
          </p>
          <p className="sobre__text">
            Seu trabalho não começa por uma técnica: começa pela leitura do campo da pessoa. É
            ali que aparece a estrutura que se repete — o padrão que organiza escolhas, relações
            e cansaços que parecem não ter explicação. A partir dessa leitura, o processo é de
            reorganização, feito no seu tempo e com devolutiva completa depois de cada sessão,
            para que você entenda o que se moveu.
          </p>
          <p className="sobre__text">
            A dor não impede a mudança. A vida não trava — ela se organiza do jeito que dá, com o
            que tem. Quando a estrutura muda, a organização muda com ela.
          </p>
        </div>
        <div className="sobre__cards">
          <div className="sobre__card">
            <p className="sobre__card-num">01</p>
            <p className="sobre__card-text">
              Cada processo começa pela leitura do seu campo — não por um roteiro pronto.
            </p>
          </div>
          <div className="sobre__card">
            <p className="sobre__card-num">02</p>
            <p className="sobre__card-text">Metodologia própria e registrada: o Método RQE®.</p>
          </div>
          <div className="sobre__card">
            <p className="sobre__card-num">03</p>
            <p className="sobre__card-text">
              Atendimento online e presencial em Petrópolis, Passo Fundo/RS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
