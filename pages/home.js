import React from 'react';
import Nav from '../components/nav'
import CafeOne from '../img/cafe-1.jpg'
import CafeTwo from '../img/cafe-2.jpg'
import Botafogo from '../img/botafogo.jpg'
import Iguatemi from '../img/iguatemi.jpg'
import Mineirao from '../img/mineirao.jpg'
import Brafe from '../img/brafe.png'
import BgIntro from '../img/bg-intro.jpg'


const HomePage = () => (
<div>
    <Nav/>
    <main className="intro">
        <h1>Cafés com a <br></br>cara do Brasil</h1>
        <p>Direto das fazendas de Minas Gerais</p>
    </main>

    <section className="about">
        <h2>Uma Mistura de</h2>
        <div className="about-container">
            <div className="about-item">
                <img src={CafeOne} />
                <h3>amor</h3>
            </div>
            <div className="about-item">
                <img src={CafeTwo}/>
                <h3>perfeição</h3>
            </div>
        </div>
        <p>O café é uma bebida produzida a partir dos grãos torrados do fruto do cafeeiro. É servido tradicionalm aente quente, mas também pode ser consumido gelado. Ele é um estimulante, por possuir cafeína — geralmente 80 a 140 mg para cada 207 ml dependendo do método de preparação.</p>
    </section>

    <section>
        <div>
            <div>
                <h2>Paulista</h2>
                <p>As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo noutras regiões: o João Alberto Castelo Branco trouxe mudas do Pará</p>                
            </div>
            <div>
                <h2>Carioca</h2>
                <p>As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo noutras regiões: o João Alberto Castelo Branco trouxe mudas do Pará</p>
            </div>
            <div>
                <h3>Mineiro</h3>
                <p>As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo noutras regiões: o João Alberto Castelo Branco trouxe mudas do Pará</p>
            </div>
        </div>
        <a href="#">Saiba Mais</a>
    </section>
    
    <section>
        <div>
            <img src={Botafogo} alt='Botafogo'/>
            <div>
                <h2>Botafogo</h2>
                <p>As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo.</p>
                <a href="#">Ver Mapa</a>
            </div>
        </div>
        <div>
            <img src={Iguatemi} alt="Iguatemi"/>
            <div>
                <h2>Iguatemi</h2>
                <p>As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo.</p>
                <a href="#">Ver Mapa</a>                
            </div>
        </div>
        <div>
            <img src={Mineirao} alt='Mineirão'/>
            <div>
                <h2>Mineirão</h2>
                <p>As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo.</p>
            </div>
            <a href='#'>Ver Mapa</a>
        </div>
    </section>

    <section>
        <div>
            <div>
                <h2>Assine Nossa Newsletter</h2>
                <p>promoções e eventos mensais</p>
            </div>
            <form>
                <label>E-mail </label>
                    <input placeholder="Digite seu email"/>
                    <button type="submit"> Enviar</button>
                
            </form>
        </div>
    </section>

    <footer>
        <div>
            <p>Este é um projeto da Origamid. Mais em origamid.com<br></br>
            Praia de Botafogo, 300, 5º andar - Botafogo - Rio de Janeiro
            </p>  
            <img src={Brafe} alt="Brafe"/>          
        </div>
    </footer>
        <style jsx>{`
     :global(body, h1, h2, h3, p, ul) {
        padding: 0px;
        margin: 0px;
    }
    :global(body) {
        font-family: Georgia, serif;
        color: #252525;
    }
    .intro {
        background: url(${BgIntro}) no-repeat center center;
        background-size: cover;
        padding: 150px 0;
        text-align: center;
        color: #fff;
    }

    .intro h1 {
        text-transform: uppercase;
        font-size: 3em;
    }

    .intro h1::after {
        content: '';
        display: block;
        width: 20px;
        height: 4px;
        background: #fff;
        margin: 10px auto;
    }

    .intro p {
        font-style: italic;
        font-size: 1.125em;
    }

    .about {
        padding: 60px 0;
    }

    .about-container {
        max-width: 960px;
        margin: 0 auto;
    }

    .about-container::after, .about-container::before{
        content: '';
        display: table;
        clear: both;
    }

    .about h2 {
        text-align: center;
        font-size: 2.25em;
        margin-bottom: 60px;
    }

    .about-item {
        width: 460px;
        float: left;
        margin: 0 10px;
    }

    .about-item img {
        display: block;
        max-width: 100%;
    }

    .about-item h3 {
        font-size: 2.25em;
        line-height: 1em;
        background: #252525;
        width: 220px;
        color: #fff;
        font-style: italic;
        font-weight: normal;
        text-align: center;
        padding: 5px 0 10px 0;
        top: -25px;
        position: relative;
    }

    .about > p {
        font-size; 1.125em;
        line-height: 1.4em;
        font-style: italic;
        text-align: center;
        margin: 20px auto;
        max-width: 460px;
    }

    `}</style>
</div>
)

export default HomePage;