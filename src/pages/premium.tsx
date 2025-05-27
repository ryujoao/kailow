import { Footer } from "../components/footer";
import Nav from "../components/navbar";
import style from "../style/premium.module.css";

export default function Premium() {
  return (
    <>
      <Nav />
      <div className={style.premiumBody}>
        <div className={style.tituloDiv}>
          <h1 className={style.tituloPlano}>Escolha o plano ideal para você</h1>
          <p className={style.subPlano}>
            Comece com o pé direito. Oferecemos 30 dias para pedir reembolso, ou seja, risco zero para você.
          </p>
        </div>
        <div className={style.containerPlanos}>
          {/* MENSAL */}
          <div className={style.cardPremium}>
            <h2 className={style.tituloDosPlanos}>Mensal</h2>
            <br />
            <div className={style.precoAntigo}>R$ 15,99</div>
            <span className={style.economize}>ECONOMIZE 25%</span>
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
              Renovação por R$ 11,99/mês* para 4 meses. Cancele a qualquer momento.
            </p>
            <hr />
            <ul className={style.beneficiosPlano}>
              
              <li><span className={style.check}>✔</span> <span className={style.destaque}>Acesso antecipado a novas comunidades.</span></li>
              <li><span className={style.check}>✔</span> <span className={style.destaque}>Remoção de anúncios.</span> </li>
              <li><span className={style.check}>✔</span> <span className={style.destaque}>Destaque no perfil (selo premium).</span> </li>
              
            </ul>
          </div>
          <hr />

          {/* POPULAR */}
          <div className={`${style.cardPremium} ${style.destaque}`}>
            <div className={style.tag}>MAIS POPULAR</div>
            <h2 className={style.tituloDosPlanos}>Mensal+</h2>
            <h3 className={style.sub}>Solução ideal para iniciantes</h3>
            <h3 className={style.sub}>+1 mês gratis</h3>
            <br />  
            <div className={style.precoAntigo}>R$ 59,99</div>
            <span className={style.economize}>ECONOMIZE 45%</span>
            <div className={style.precoNovo}>
              <span className={style.preco}>R$ 32,99</span>
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
              <li><span className={style.check}>✔</span>Todos os benefícios do Básico, mais:</li>
              <li><span className={style.check}>✔</span> <span className={style.destaque}>Mensagens diretas ilimitadas.</span></li>
              <li><span className={style.check}>✔</span> <span className={style.destaque}>Personalização avançada do perfil.</span></li>
              <li><span className={style.check}>✔</span> <span className={style.destaque}>Upload de imagens e vídeos em alta resolução.</span></li>
              <li><span className={style.check}>✔</span>Participação em eventos exclusivos.</li>
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
            <span className={style.economize}>ECONOMIZE 70%</span>
            <div className={style.precoNovo}>
              <span className={style.preco}>R$ 18,90</span>
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
              <li><span className={style.check}>✔</span>Todos os benefícios do Plus, mais:</li>
              <li><span className={style.check}>✔</span> <span className={style.destaque}>Mais notoriedades em empresas</span></li>
              <li><span className={style.check}>✔</span> <span className={style.destaque}>Comunidades privadas ou secretas.</span></li>
              <li><span className={style.check}>✔</span> <span className={style.destaque}>Análises detalhadas de engajamento.</span></li>
              <li><span className={style.check}>✔</span>Suporte prioritário.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}