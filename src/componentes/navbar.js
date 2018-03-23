import React, {Component} from 'react';

class Navbar extends Component {
    render(){
        return (
                <nav className= "nave">
                    <div className="navegador">            
                        <img className="menunav" src ="hamburguer.svg"></img>
                        
                        <div className="logos" >
                             
                             <span className="spanlogo1" >w</span>
                             <span className="spanlogo2" >o</span>
                             <span className="spanlogo3" >d</span>
                             <span className="spanlogo4" >u</span>
                             <span className="spanlogo5" >c</span>
                             
                        </div>

                        <div class="usernav">
                            <input className="inputnav" ></input>
                            <button className="btnsearch"><img className="lupa" src="search.svg"></img></button>
                            <img className="avatarimage" src ="http://placehold.it/50x50"></img>
                        </div>
                    </div>
                </nav>
            );
        }

}

export default Navbar;