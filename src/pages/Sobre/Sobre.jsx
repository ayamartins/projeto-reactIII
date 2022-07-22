import Header from "../../components/Header/Header"
import Image from '../../assets/fotoapresentacao.svg'
import Footer from "../../components/Footer/Footer"
import Textos from "../../components/Textos/Textos"
import './sobre.css'


function Sobre() {
    return(
        <>
            <Header 
                image={Image} 
                description={"ilustração de mulher com projeto"}
                >
                Sobre
            </Header>
            <main>
                <div className="imagem">
                    <img src="https://media.giphy.com/media/bTGggjvpmu9k00paKN/giphy.gif" alt="Imagem da desenvolvedora da página"/>
                </div>
                <div className="sobre">
                    <Textos>
                    Meu nome é Ayane Martins, tenho 28 anos, sou mineirinha, nascida e criada em Juiz de Fora. Jornalista, formada pela Universidade Federal de Juiz de Fora - UFJF, especialista em Marketing pela Universidade de São Paulo - USP e futura desenvolvedora Front-end pela Reprograma. Sempre gostei muito da área de comunicação, mas vivendo o processo de transição de carreira encontrei na tecnologia uma nova paixão e um mundo de possibilidades.
                    </Textos>
                </div>
             </main>
            <footer>
                <Footer> Página desenvolvida por Ayane Martins | Aluna Reprograma - On17 | 2022 </Footer>
            </footer>
        </>
    )
}

export default Sobre