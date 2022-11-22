import "./style.scss"

const img1 = "https://blog.elevaplataforma.com.br/wp-content/uploads/2019/04/capacita%C3%A7%C3%A3o-de-professores.jpg"
const img2 = "https://negre.com.br/wp-content/uploads/7-jornalistas-negros-no-cenario-do-telejornalismo-brasileiro-8.png"

export default function App() {
    return (
        <>
            <p>Existem profissões que podem colaborar com políticas publícas de ajuda ao combate ao racismo e assuntos semelhantes.</p>
            <img src={img1} />
            <p>
                Professores, por exemplo, podem incentivar e ensinar os alunos sobre os males do preconceito e ajudar para que isso não entre na cabeça dos jovens.
            </p>
            <img src={img2} />
            <p>
                Um jornalista pode pensar em coisas que vão além das políticas públicas de acesso
                à informação, podendo auxiliar na construção de um projeto que visando o combate ao preconceito. 
            </p>
        </>
    )
}
  
  