import img1 from "../../../../../public/assets/Renan/img1.jpg"
import img2 from "../../../../../public/assets/Renan/img2.jfif"
import img3 from "../../../../../public/assets/Renan/img3.jfif"

import "./style.scss"


export default function Renan() {
    return (
        <>
        <div className="renan-content-box-1 renan-content-box">
            <img src={img1} className=" renan-image-content renan-image-content-1" />
            <p>
            Políticas públicas são ações e programas desenvolvidos pelo Estado para garantir e 
            colocar em prática direitos que são previstos na Constituição Federal e em outras leis. São 
            medidas e programas criados pelos governos dedicados a garantir o bem estar da população.
            </p>
        </div>
        <span class="material-symbols-outlined renan-content-span-1">more_horiz</span>
        <div className="renan-content-box-2 renan-content-box">
            <p>
            Mais recentemente, a definição de política pública tem sido entendida apenas como uma ação, e  
            não conceito. 
            </p>
        </div>
        <span className="material-symbols-outlined renan-content-span-2">more_horiz</span>
        <div className="renan-content-box-3 renan-content-box">
            <p>
            As políticas públicas afetam a todos os cidadãos, de todas as escolaridades, 
            independente de sexo, raça, religião ou nível social. Com o aprofundamento e 
            a expansão da democracia, as responsabilidades do representante popular se 
            diversificaram. O bem-estar da sociedade está relacionado a ações bem desenvolvidas 
            e à sua execução em áreas como saúde, educação, meio ambiente, habitação, 
            assistência social, lazer, transporte e segurança, ou seja, deve-se contemplar 
            a qualidade de vida como um todo.
            </p>
            <img src={img2} className="renan-image-content renan-image-content-2" />
        </div>
        <span class="material-symbols-outlined renan-content-span-3">more_horiz</span>
        <div className="renan-content-box-4 renan-content-box">
            <img src={img3} className="renan-image-content renan-image-content-3" />
            <p>
            Do ponto de vista teórico-conceitual, a política pública 
            é um campo multidisciplinar que se concentra na interpretação 
            da natureza da política pública e de seus procedimentos. Por isso, 
            uma hipótese de política pública geral busca condensar teorias 
            estabelecidas nos campos da ciência política, economia e sociologia. 
            </p>
        </div>
        <span class="material-symbols-outlined renan-content-span-4">more_horiz</span>
        <div className="renan-content-box-5 renan-content-box">
            <img src="https://al.se.leg.br/wp-content/uploads/2018/11/curso_online_gratuito_politicas_publicas-01.jpg" className="renan-image-content renan-image-content-4" />
            <p>
            Do ponto de vista teórico-conceitual, a política pública 
            é um campo multidisciplinar que se concentra na interpretação 
            da natureza da política pública e de seus procedimentos. Por isso, 
            uma hipótese de política pública geral busca condensar teorias 
            estabelecidas nos campos da ciência política, economia e sociologia. 
            </p>
        </div>
        </>
    )
}