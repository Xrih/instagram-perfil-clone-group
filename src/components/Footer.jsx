import React from "react";
import "../scss/_Footer.scss";

const Footer = () => {
    return (
        <>
            <footer>
                <span>Meta</span>
                <span>Información</span>
                <span>Blog</span>
                <span>Empleo</span>
                <span>Ayuda</span>
                <span>API</span>
                <span>Privacidad</span>
                <span>Condiciones</span>
                <span>Ubicaciones</span>
                <span>Instagram Lite</span>
                <span>Threads</span>
                <span>Subir contactos y no usuarios</span>
                <span>Meta Verified</span>
            </footer>

            <div className="footer-IG">
                    <div className="spanish">
                        <select name="text">
                            <option value="Spanish">Español</option>
                            <option value="English">Ingles</option>
                            <option value="Francais">Frances</option>
                            <option value="Brasil">Portugues</option>
                        </select>
                    </div>

                    <p> &copy; 2023 Instagram from Meta </p>
                </div>
        </>
    );
};

export default Footer;
