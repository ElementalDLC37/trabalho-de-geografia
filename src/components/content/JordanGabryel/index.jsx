import img1 from "../../../../public/assets/JordanGabryel/img1.jfif"
import img2 from "../../../../public/assets/JordanGabryel/img2.jpg"
import img3 from "../../../../public/assets/JordanGabryel/img3.jfif"
import img4 from "../../../../public/assets/JordanGabryel/img4.jfif"

import "./style.scss"

export default function JordanGabryel() {
    return (
        <>
        <div className="box1">
          <h3>Criminalização do racismo</h3>
          <p>Criação de leis no combate ao preconceito</p>
          <div>
            <img src={img1} />
            <p>
              No dia 2 de fevereiro de 1988, o Plenário da 
              Constituinte aprovou a emenda de autoria do 
              deputado federal Carlos Alberto Caó Oliveira 
              que definiu o racismo como crime inafiançável 
              e imprescritível.
            </p>
          </div>
        </div>
        <hr />
        <div className="box2">
          <div>
            <img src={img2} />
            <p>
              Apesar do rigor da legislação, casos de racismo, 
              injúria racial, preconceito e intolerância religiosa 
              ainda ocorrem com bastante frequência e exigem do 
              poder público e da sociedade vigilância constante, 
              para identificar e responsabilizar os culpados, que 
              atacam, na maior parte das vezes, sem qualquer 
              constrangimento, de celebridades a cidadãos comuns, 
              nas redes sociais ou em público; com agressões verbais, 
              físicas e mesmo atentados.
            </p>
          </div>
        </div>
        <hr />
        <div className="box3">
          <div>
          <img src={img4} />
            <p>
              O artigo 140 do Código Penal, em seu terceiro parágrafo, define 
              como injúria racial quando se ofende determinada pessoa ou grupo 
              de pessoas por conta de sua raça, cor, etnia, origem ou religião. 
              A pena de reclusão é de três anos e inclui multa.
            </p>
          </div>
        </div>
        <hr />
        <div className="box4">
        <div>
        <img src={img3} />
            <p>
              Já o crime de racismo, segundo regulamentação da lei 7.716, de 1989, 
              atenta contra uma coletividade ou certo grupo, geralmente com ofensas
              de caráter mais amplo. Entre exemplos de racismo podem estar recusar 
              ou impedir acesso a estabelecimento comercial, barrar acesso a entradas 
              sociais em edifícios públicos ou privados e negar ou dificultar o acesso 
              a um posto de trabalho. A pena também vai de um a três anos de reclusão e 
              inclui multa.
            </p>
        </div>
        </div>
        </>
    )
}