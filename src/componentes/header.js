    import React,{Component} from 'react';

    class Header extends Component {
        render(){
            return(
                <header>
                    <div className="container-fluid">

                        <div className="bola bola-esquerda">
                        <div className="conteudo-esquerda" >   
                            <p>Quer dar um UP na carreira com novos conhecimentos ?</p>  
                                <div className="botao-logo2" >
                                    <img className="logo-esquerda" src="job.svg" />
                                <div className="logo-esquerda-fundo" ><span className="btn-entrar2" >Quero!</span></div>
                                </div>

                            </div>
                        </div>

                        <div className="bola bola-meio">
                            <div className="conteudo-meio" >   
                            <p>Bora aprendar oque você mais gosta ?</p>  
                                <div className="botao-logo" >
                                    <img className="logo-meio" src="graduate.svg" />
                                <div className="logo-meio-fundo" ><span className="btn-entrar" >BORA!</span></div>
                                </div>

                            </div>
                        </div>

                        <div className="bola bola-direita">
                        <div className="conteudo-direita" >   
                            <p>Que tal explorar novos campos de conhecimento ?</p>  
                                <div className="botao-logo3" >
                                    <img className="logo-direita" src="idea.svg" />
                                <div className="logo-direita-fundo" ><span className="btn-entrar3" >Agora!</span></div>
                                </div>

                            </div>  
                        </div>

                    </div> 
                </header>
            );
        }

    }

    export default Header;