import style from "../style/premium.module.css"

export default function Premium() {
  return (
    <main>
      <h1 className={style.tituloPlano}>Escolha o plano ideal para você</h1>
      <p className={style.subPlano}>
        Comece com o pé direito. Oferecemos 30 dias para pedir reembolso, ou seja, risco zero para você.
      </p>
      <div className={style.containerPlanos}>
        {/* MENSAL */}
        <div className={style.cardPremium}>
          <h2 className={style.tituloDosPlanos}>Mensal</h2>
          <h3 className={style.sub}>Teste 1 mês gratis</h3>
          <br />
          <div className={style.precoAntigo}>R$ 29,99</div>
          <span className={style.economize}>ECONOMIZE 70%</span>
          <div className={style.precoNovo}>
            <span className={style.preco}>R$ 11,99</span>
            <span className={style.mes}>/mês*</span>
          </div>
          <p className={style.descricaoPequena}>
            *Estimativa de gasto mensal durante 48 meses. O plano é pago de forma integral.
          </p>
          <button className={style.btnEscolherPlano}>Escolher plano</button>
          <br />
          <p className={style.descricaoPequena}>
            Renovação por R$ 11,99/mês* para 4 anos. Cancele a qualquer momento.
          </p>
          <hr />
          <ul className={style.beneficiosPlano}>
            <li><span className={style.check}>✔</span> 1 site</li>
            <li><span className={style.check}>✔</span> <span className={style.destaque}>Hospedagem Gerenciada para WordPress</span></li>
            <li><span className={style.check}>✔</span> <span className={style.destaque}>Cerca de 10.000</span> visitas mensais</li>
            <li><span className={style.check}>✔</span> <span className={style.destaque}>10 GB</span> de armazenamento SSD</li>
            <li><span className={style.check}>✔</span> SSL grátis e domínio incluso (1 ano)</li>
          </ul>
        </div>
        <hr />

        {/* POPULAR */}
        <div className={`${style.cardPremium} ${style.destaque}`}>
          <div className={style.tag}>MAIS POPULAR</div>
          <h2 className={style.tituloDosPlanos}>Anual</h2>
          <h3 className={style.sub}>Solução ideal para iniciantes</h3>
          <br />
          <div className={style.precoAntigo}>R$ 59,99</div>
          <span className={style.economize}>ECONOMIZE 70%</span>
          <div className={style.precoNovo}>
            <span className={style.preco}>R$ 31,99</span>
            <span className={style.mes}>/ano*</span>
          </div>
          <p className={style.descricaoPequena}>
            *Estimativa de gasto mensal durante 48 meses. O plano é pago de forma integral.
          </p>
          <h3 className={style.gratis}>+3 Meses grátis</h3>
          <button className={style.btnEscolherPlano}>Escolher plano</button>
          <br />
          <p className={style.descricaoPequena}>
            Renovação por R$ 31,99/ano* para 4 anos. Cancele a qualquer momento.
          </p>
          <hr />
          <ul className={style.beneficiosPlano}>
            <li><span className={style.check}>✔</span> 1 site</li>
            <li><span className={style.check}>✔</span> <span className={style.destaque}>Hospedagem Gerenciada para WordPress</span></li>
            <li><span className={style.check}>✔</span> <span className={style.destaque}>Cerca de 10.000</span> visitas mensais</li>
            <li><span className={style.check}>✔</span> <span className={style.destaque}>10 GB</span> de armazenamento SSD</li>
            <li><span className={style.check}>✔</span> SSL grátis e domínio incluso (1 ano)</li>
          </ul>
        </div>
        <hr />

        {/* RECOMENDADO */}
        <div className={style.cardPremium}>
          <div className={`${style.tag} ${style.recomendado}`}>RECOMENDADO</div>
          <h2 className={style.tituloDosPlanos}>Anual parcelado</h2>
          <h3 className={style.sub}>Solução ideal para iniciantes</h3>
          <br />
          <div className={style.precoAntigo}>R$ 62,99</div>
          <div className={style.precoNovo}>
            <span className={style.preco}>R$ 18,90 </span>
            <span className={style.mes}>/mês*</span>
          </div>
          <p className={style.descricaoPequena}>
            *Estimativa de gasto mensal durante 48 meses. O plano é pago de forma integral.
          </p>
          <h3 className={style.gratis}>+3 Meses grátis</h3>
          <button className={style.btnEscolherPlano}>Escolher plano</button>
          <br />
          <p className={style.descricaoPequena}>
            Renovação por R$ 14,99/mês* para 4 anos. Cancele a qualquer momento.
          </p>
          <hr />
          <ul className={style.beneficiosPlano}>
            <li><span className={style.check}>✔</span> 1 site</li>
            <li><span className={style.check}>✔</span> <span className={style.destaque}>Hospedagem Gerenciada para WordPress</span></li>
            <li><span className={style.check}>✔</span> <span className={style.destaque}>Cerca de 10.000</span> visitas mensais</li>
            <li><span className={style.check}>✔</span> <span className={style.destaque}>10 GB</span> de armazenamento SSD</li>
            <li><span className={style.check}>✔</span> SSL grátis e domínio incluso (1 ano)</li>
          </ul>
        </div>
      </div>
    </main>
  );
}