import img1 from "../../../../../public/assets/Bruno/img1.jpg"
import img2 from "../../../../../public/assets/Bruno/img2.jpg"
import img3 from "../../../../../public/assets/Bruno/img3.jpg"

import "./style.scss"

export default function Bruno() {
    return (
      <>
        <h3>O que são ações afirmativas?</h3>
        <p>
            Políticas públicas focalizadas que buscam
            minorar a desigualdade política, social 
            e econômica entre grupos de uma sociedade.
        </p>
        <div className="lateral-container">
          <span className="material-symbols-outlined">balance</span>
          <p>
              Esse tipo de ação faz-se necessário 
              quando a assimetria de oportunidades entre grupos 
              sociais deriva de suas características culturais, 
              fenotípicas, biológicas ou de injustiças históricas, 
              comuns em sociedades que sofreram processos de colonização 
              escravocrata, segregação racial, guerras civis. Ações 
              afirmativas também são fundamentais em sociedades 
              multiculturais ou com intensos fluxos migratórios.
            </p>
        </div>
        <div className="img1-container">
          <img src={img1} className="img1" />
        </div>
        <p>
          As ações afirmativas desempenham importante papel no combate 
          à desigualdade social e às segregações. Elas permitem que 
          pessoas de origens distintas alcancem espaços de influência 
          no âmbito educacional, político, econômico, socioprofissional 
          e cultural. Não se trata de concessão de benefícios ou privilégios,
          mas da efetivação de direitos assegurados pela Constituição.
        </p>
        <div className="img1-container">
          <img src={img2} className="img2" />
        </div>
        <div className="lateral-container-inverted">
        <img src={img3} className="img3" />
          <p>
            Permitir que pessoas com origens e vivências distintas participem 
            da construção do conhecimento acadêmico, da formulação e operação 
            das leis, das funções de Estado, da associação política, das diversas 
            posições hierárquicas no mercado de trabalho, significa construir o 
            caminho para que o perfil demográfico da sociedade seja representado 
            em todas as suas atividades produtivas e decisórias e que essas sejam 
            consideradas legítimas perante a população como um todo.
          </p>
        </div>
      </>
    )
}