import "./style.scss"

export default function Willian() {
    return (
        <>
        <h1>Os 4 tipos de políticas públicas presentes no Brasil</h1>
        <p>
            As mais conhecida tipologia sobre políticas públicas foi 
            desenvolvida por Theodor Lowi (1964; 1972). Segundo Lowi, 
            as políticas públicas podem assumir quatro formatos:
        </p>
        <div className="box">
            <h3>Distributivas</h3>
            <div>
                <span className="material-symbols-outlined">diversity_2</span>
                <p>
                    As políticas públicas distributivas 
                    são construídas com o orçamento público 
                    e contemplam ações que fazem o fornecimento 
                    de serviços para a população (ou parte dela) 
                    por meio do Estado.
                </p>
            </div>
        </div>
        <hr />
        <div className="box">
            <h3>Redistributivas</h3>
            <div>
            <span className="material-symbols-outlined">balance</span>
            <p>
                Esse tipo de política pública visa reduzir a 
                chamada disparidade social. Elas servem para 
                “equilibrar a balança” e favorecer cidadãos 
                que estão em situação mais frágil na pirâmide 
                social. 
            </p>
            </div>
        </div>
        <hr />
        <div className="box">
            <h3>Regulatórias</h3>
            <div>
            <span className="material-symbols-outlined">search</span>
            <p>
                As políticas públicas regulatórias estão diretamente 
                relacionadas com as leis. Elas servem para criar, 
                aprimorar ou fiscalizar o cumprimento de leis que 
                asseguram direitos e o bem da sociedade.
            </p>
            </div>
        </div>
        <hr />
        <div className="box">
            <h3>Constitutivas</h3>
            <div>
                <span className="material-symbols-outlined">diversity_2</span>
                <p>
                    O último tipo de política pública que iremos destacar 
                    aqui tem como objetivo estabelecer as responsabilidades 
                    das esferas de poder. Elas distribuem e determinam se a 
                    responsabilidade sobre algo é do governo municipal, 
                    estadual ou federal. 
                </p>
            </div>
        </div>
        </>
    )
}