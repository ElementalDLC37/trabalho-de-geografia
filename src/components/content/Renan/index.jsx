import img1 from "../../../../public/assets/Renan/img1.jpg"
import img2 from "../../../../public/assets/Renan/img2.jfif"
import img3 from "../../../../public/assets/Renan/img3.jfif"

import "./style.scss"


export default function Renan() {
    return (
        <>
        <div className="box1r">
            <img src={img1} />
            <p>
            Políticas públicas são ações e programas desenvolvidos pelo Estado para garantir e 
            colocar em prática direitos que são previstos na Constituição Federal e em outras leis. São 
            medidas e programas criados pelos governos dedicados a garantir o bem estar da população.
            </p>
        </div>
        <div className="box2r">
            <p>
            Mais recentemente, a definição de política pública tem sido entendida apenas como uma ação, e  
            não conceito. 
            </p>
        </div>
        <span class="material-symbols-outlined">more_horiz</span>
        <div className="box3r">
            <p>
            As políticas públicas afetam a todos os cidadãos, de todas as escolaridades, 
            independente de sexo, raça, religião ou nível social. Com o aprofundamento e 
            a expansão da democracia, as responsabilidades do representante popular se 
            diversificaram. Hoje, é comum dizer que sua função é promover o bem-estar da 
            sociedade. O bem-estar da sociedade está relacionado a ações bem desenvolvidas 
            e à sua execução em áreas como saúde, educação, meio ambiente, habitação, 
            assistência social, lazer, transporte e segurança, ou seja, deve-se contemplar 
            a qualidade de vida como um todo.
            </p>
            <img src={img2} />
        </div>
        <span class="material-symbols-outlined">more_horiz</span>
        <div className="box4r">
            <img src={img3} />
            <p>
            Do ponto de vista teórico-conceitual, a política pública 
            é um campo multidisciplinar que se concentra na interpretação 
            da natureza da política pública e de seus procedimentos. Por isso, 
            uma hipótese de política pública geral busca condensar teorias 
            estabelecidas nos campos da ciência política, economia e sociologia. 
            A política pública afeta a economia e a sociedade, razão pela qual 
            qualquer teoria de política pública também precisa articular a 
            interconexão entre Estado, economia, sociedade e política. É 
            também por isso que pesquisadores de diferentes disciplinas - 
            antropologia, ciências sociais aplicadas, ciência política, 
            economia, geografia, administração, planejamento e sociologia - 
            compartilham uma inclinação comum no campo e fornecem suporte 
            teórico e empírico para o Progresso e a cooperação.
            </p>
        </div>
        </>
    )
}