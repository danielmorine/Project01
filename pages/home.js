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

    <section className="products">
        <div className="products-container">
            <div className="products-item">
                <h2 className="products-info-one">Paulista</h2>
                <p>As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo noutras regiões: o João Alberto Castelo Branco trouxe mudas do Pará</p>                
            </div>
            <div className="products-item">
                <h2 className="products-info-two">Carioca</h2>
                <p>As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo noutras regiões: o João Alberto Castelo Branco trouxe mudas do Pará</p>
            </div>
            <div className="products-item">
                <h2 className="products-info-three">Mineiro</h2>
                <p>As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo noutras regiões: o João Alberto Castelo Branco trouxe mudas do Pará</p>
            </div>
        </div>
        <a href="#" className="products-btn">Saiba Mais</a>
    </section>
    
    <section className="address">
        <div className="address-item">
            <img src={Botafogo} alt='Botafogo'/>
            <div>
                <h2>Botafogo</h2>
                <p>As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo.</p>
                <a href="#">Ver Mapa</a>
            </div>
        </div>
        <div className="address-item">
            <img src={Iguatemi} alt="Iguatemi"/>
            <div>
                <h2>Iguatemi</h2>
                <p>As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo.</p>
                <a href="#">Ver Mapa</a>                
            </div>
        </div>
        <div className="address-item">
            <img src={Mineirao} alt='Mineirão'/>
            <div>
                <h2>Mineirão</h2>
                <p>As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo.</p>
            </div>
            <a href='#'>Ver Mapa</a>
        </div>
    </section>

    <section className="signature">
        <div className="signature-container">
            <div className="signature-info">
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

    <footer className="footer">
        <div className="footer-container">
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

    :global(*) { 
        box-sizing: border-box;
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

    .products {
        background: #e7e4d8;
        padding: 60px 0;
        border-top: 3px solid #d6d3c8;
        border-bottom: 3px solid #d6d3c8;
    }

    .products-container {
        max-width: 960px;
        margin: 0 auto;
    }

    .products-container::after, .products-container:before {
        content: '';
        display: table;
        clear: both;
    }

    .products-item {
        width: 300px;
        float: left;
        margin: 0 10px 20px 10px;
    }

    .products-item h2 {
        text-align: center;
        font-size: 2.25em;
        margin-bottom: 20px;
    }

    .products-item h2::before {
        content: '';
        display: block;
        width: 100px;
        height: 100px;
        background: currentColor;
        border-radius: 50%;
        margin: 20px auto;
        border: 5px solid #e7e4d8;
        box-shadow: 0 0 0 5px currentColor;
    }

    h2.products-info-one::before {
        color: #492901;
    }

    h2.products-info-two::before {
        color: #c17139;
    }

    h2.products-info-three::before {
        color: #d7a54d;
    }

    .products-item p {
        font-size: 0.875em;
        line-height: 1.4em;
    }

    .products-btn {
        width: 180px;
        border: 3px solid;
        color: #252525;
        text-decoration: none;
        display: block;
        font-size: 1.125em;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        padding: 15px 0;
        margin: 20px auto 0 auto;
    }

    .address {
        max-width: 960px;
        margin: 0 auto;
        padding: 20px 0;
    }

    .address-item {
        clear: both;
        margin: 60px 0;
    }

    .address-item::after, .address-item::before {
        content: '';
        display: table;
        clear: both;
    }

    .address-item img {
        width: 460px;
        float: left;
        display: block;
        margin: 0 10px;
    }

    .address-item > div {
        width: 460px;
        float: left;
        margin: 0 10px;
    }

    .address-item h2 {
        font-size: 2.25em;
        margin-bottom: 20px;
    }

    .address-item p {
        font-size: 1.125em;
        line-height: 1.4em;
        max-width: 320px;
        margin-bottom: 40px;
    }

    .address-item a {
        font-size: 1.125em;
        text-transform: uppercase;
        text-decoration: none;
        border: 3px solid;
        color: #252525;
        padding: 10x 20px;
    }

    .signature {
        background: #e7e4d8;
        padding: 30px 0;
    }

    .signature-container {
        max-width: 960px;
        margin: 0 auto;
    }

    .signature-container::after, .signature-container::before {
        content: '';
        display: table;
        clear: both;
    }

    .signature-info {
        width: 460px;
        margin: 0 10px;
        float: left;
    }

    .signature-info h2 {
        font-size: 2.25em;        
    }

    .signature-info p {
        font-size: 1.5em;
        font-style: italic;
    }

    .signature form {
        width: 460px;
        margin: 10px 10px 0 10px;
        float: left;
    }

    .signature form label {
        display: none;
    }

    .signature input {
        width: 320px;
        border: 3px solid #252525;
        background: none;
        font-size: 1.5em;
        font-style: italic;
        font-family: Georgia, serif;
        padding: 10px;
        float: left;
    }

    .signature button { 
        border: none;
        background: #252525;
        font-family: Georgia, serif;
        text-transform: uppercase;
        font-size: 1.5em;
        width: 140px;
        padding: 13px 0;
        color:  #fff;
        cursor: pointer;
    }

    .footer {
        background: #d6d3c8;
        padding: 40px 0;        
    }

    .footer-container {
        max-width: 960px;
        margin: 0 auto; //centralizar
    }

    .footer-container::after, .footer-container::before {
        content: '';
        display: table;
        clear: both;
    }

    .footer p {
        float: left;
        margin: 0 10px;
        font-size: 1.125em;
        line-height: 1.4em;
    }

    .footer img {
        float: right;
        margin: 0 10px;
        display: block;
    }

    `}</style>
</div>
)

export default HomePage;