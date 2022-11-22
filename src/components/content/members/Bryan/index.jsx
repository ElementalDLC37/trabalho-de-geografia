import img1 from "../../../../../public/assets/Bryan/img1.webp"

import "./style.scss"

export default function Bryan() {
    return (
        <>
            <h3>Formação de uma política pública</h3>
            <div className="box1">
                <p>
                    Está na hora de vermos como as políticas de interesse 
                    público se desenham na prática e perceber como podem 
                    impactar nas nossas vidas. De maneira simples, podemos 
                    resumir que elas servem para solucionar questões coletivas 
                    identificadas dentro da sociedade. Para isso, existe um 
                    processo que alguns especialistas chamam de “Ciclos de 
                    Políticas Públicas”, que se refere às fases de execução 
                    de um projeto desta natureza.
                </p>
                <i>
                    Existem basicamente cinco etapas nesse sentido.
                </i>
            </div>
            <div className="box2">
            <div className="container-a">
                <span class="material-symbols-outlined">search</span>
                <h5>Identificação de um problema</h5>
                <p>
                    localizar qual a necessidade mais urgente a partir de 
                    um olhar técnico e criterioso do poder público aliado 
                    às pautas sociais
                </p>
            </div>
            <span class="material-symbols-outlined">arrow_downward</span>
            <div className="container-a">
                <span class="material-symbols-outlined">calendar_month</span>
                <h5>Formação da agenda</h5>
                <p>
                    a partir desta identificação, são levantados uma série de 
                    pontos para garantir a viabilidade da política.
                </p>
            </div>
            <span class="material-symbols-outlined">arrow_downward</span>
            <div className="container-a">
                <span class="material-symbols-outlined">science</span>
                <h5>Formulação da política</h5>
                <p>
                    definir as principais linhas de atuação, programas a serem 
                    desenvolvidos, agentes envolvidos e assim por diante
                </p>
            </div >
            <span class="material-symbols-outlined">arrow_downward</span>
            <div className="container-a">
                <span class="material-symbols-outlined">done</span>
                <h5>Implementação</h5>
                <p>
                    início da parte prática propriamente dita, com a aplicação 
                    das fases anteriores e cumprimento das diretrizes traçadas
                </p>
            </div>
            <span class="material-symbols-outlined">arrow_downward</span>
            <div className="container-a">
                <span class="material-symbols-outlined">edit_note</span>
                <h5>Supervisão</h5>
                <p>
                    verificar se a política pública está cumprindo com os objetivos 
                    ou se algumas mudanças precisam ser implementadas.
                </p>
            </div>
        </div>
        <div className="box3">
            <span class="material-symbols-outlined">diversity_3</span>
            <p>
                A partir dessas fases, uma política pública vai 
                ser criada e atender uma parcela da população. 
                Um exemplo recente foi a criação do auxílio emergencial, 
                um auxílio financeiro com o objetivo de diminuir os impactos 
                econômicos causados pela pandemia de Covid-19 no Brasil.
            </p>
            </div>
        <div className="image">
            <img src={img1} />
        </div>
        </>
    )
}