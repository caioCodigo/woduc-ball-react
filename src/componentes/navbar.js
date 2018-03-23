import React, {Component} from 'react';

class Navbar extends Component {
    render(){
        return (
                <nav className= "nave">
                    <div className="navegador">            
                        <img className="menunav" src ="hamburguer.svg"></img>
                        
                        <div className="logos" >
                             
                             <span className="spanlogo" >w</span>
                             <span className="spanlogo" >o</span>
                             <span className="spanlogo" >d</span>
                             <span className="spanlogo" >u</span>
                             <span className="spanlogo" >c</span>
                             <span className="spanlogo" >a</span>
                             <span className="spanlogo" >t</span>
                             <span className="spanlogo" >i</span>
                             <span className="spanlogo" >o</span>
                             <span className="spanlogo" >n</span>
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