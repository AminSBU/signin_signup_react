import React from "react";
import './Form.css'

const Form = () => {
    return(
        <>
            <div className="Form-container">
                <div className="first">
                    <img src="./src/img/Wavy_Gen-01_Single-07.jpg" className="img"></img>
                </div>

                <div className="second">
                    <ul>
                        <div>
                            <input type="text" placeholder="Your name:"></input>
                        </div>

                        <div>
                            <input type="password" placeholder="Password:"></input>
                        </div>

                        <div>
                            <button className="signinBtn">Login</button>
                        </div>

                        <div>
                            <h4>Login with Sites:</h4>
                        </div>

                        <div>
                            <button aria-label="Home"><i class="fa fa-google"></i></button>
                            <button aria-label="Home"><i class="fa fa-linkedin"></i></button>
                            <button aria-label="Home"><i class="fa fa-twitter"></i></button>
                            <button aria-label="Home"><i class="fa fa-facebook"></i></button>
                        </div>


                    </ul>
                </div>
            </div>
        </>
    );
}

export default Form;