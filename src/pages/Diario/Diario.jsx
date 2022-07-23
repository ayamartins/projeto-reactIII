import Header from '../../components/Header/Header'
import Image from '../../assets/fotoprojeto.svg'
import Footer from '../../components/Footer/Footer'
import Texto from '../../components/Textos/Textos'
import Titulo from '../../components/Textos/Titulo'
import Gifs from '../../components/Gifs'

import './diario.css'

function Diario() {
    return(
        <>
            <Header 
                image={Image} 
                description={"ilustração de mulher com projeto"}
                >
                Meu Diário na Reprograma
            </Header>
            <article>
            <Titulo title="4 coisas que aprendi na Reprograma:" />
    <div className="container">
      < Titulo title="Git - GitHub" />
      < Gifs image="https://media.giphy.com/media/xUNd9TLZdUyc9FO5cA/giphy.gif" alt="Gif Grey's Anatomy"/>
      <Texto><b>GitHub</b> é uma plataforma para gerenciar seu código e criar um ambiente de colaboração entre desenvolvedores, utilizando o Git como sistema de controle. Meu primeiro contato com o Git aconeteceu na segunda semana de aula do curso, foi um choque de realidade, pois eu não fazia a mínima ideia do que era GitHub. 
      Levei algumas semanas para de fato conseguir compreender o básico das suas funcionalidades e a cada dia aprendo uma coisa nova sobre ele.</Texto>
    </div>
    <div className="container">
      < Titulo title="HTML" />
      < Gifs image="https://media.giphy.com/media/sEJ1zptp2Ruec/giphy.gif" alt="Gif Cristina Yang"/>
      <Texto><b>HTML</b>, Linguagem de Marcação de Hipertexto, é uma linguagem de computador que compõe a maior parte das páginas da internet e dos aplicativos online, é composta por uma série de marcações que dizem para os servidores da web qual é o estilo e a estrutura de um documento. Apesar de conhecer e já ter trabalhado com HTML, aprender mais a fundo sobre suas funcionalidades foi enriquecedor e necessário.</Texto>
    </div>
    <div className="container">
      < Titulo title="CSS" />
      < Gifs image="https://media.giphy.com/media/3o7abIOMQrCuLdZPry/giphy.gif" alt="Gif Gre's Anatomy" />
      <Texto> <b>CSS</b> CSS, Cascading Style Sheets, que em português significa Folha de Estilo em Cascatas, é um mecanismo para adicionar estilo a um documento web, é uma das principais linguagens da open web e é padronizada em navegadores web de acordo com as especificação da W3. Através do CSS podemos trazer personalidade para os sites e desenvolver a nossa criatividade. Aprender CSS foi um respiro diante de tantos conteúdos difíceis que foram ministrados ao longo do curso.</Texto>
    </div>
    <div className="container">
      < Titulo title="JavaScript" />
      < Gifs image="https://media.giphy.com/media/XazTKKTogKXQI/giphy.gif" alt="Gif Cristina Yang" />
      <Texto><b>JavaScript </b> é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. Meu primeiro contato com JavaScript foi assustador, pois sempre tive muita dificuldade com lógica, que é a base dessa linguagem. Está sendo um processo de aprendizagem bem minucioso, mas com dedicação e horas de estudos estou conseguindo evoluir.</Texto>
    </div>
            </article>

            <footer>
                <Footer> Página desenvolvida por Ayane Martins | Aluna Reprograma - On17 | 2022 </Footer>
            </footer>
        </>
    )
}

export default Diario