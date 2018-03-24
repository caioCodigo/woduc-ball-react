import React,{Component} from 'react';

class Header extends Component {
    render(){
        return(
            <header>
                <div className="row linha-card">

                    <div className="col-2  bloco-atras1" >
                    
                    </div>

                        <div className="col-4 bloco">

                            <div className="titulo-card" >
                                <p>Estude oque você gosta</p>
                            </div>

                            <div className="conteudo-imagem" >
                                <img className="imagem-card"  src="card1.jpg" />
                            </div>

                            <div className="botao-card">
                               <div className="testao"><span class="seta-direita"></span>
                               <button className="btn-block botao" >explorar</button>   </div>          
                              
                               
                            </div>

                        </div>

                    <div className="col-2 bloco-atras2" >
                    </div>   
                </div>
            </header>
        );
    }

}

export default Header;