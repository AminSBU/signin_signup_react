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
                            <input type="text" placeholder="Your name:"></input>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Form;