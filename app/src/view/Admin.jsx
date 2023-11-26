import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Logo from "../assets/SGI-without-bg.png";
import userContext from "../Context/userContext";
import Agent from "../Components/Agent";
import { useEffect } from "react";
export default function Admin(){
    useEffect(()=>{
        fetch('')
    },[])

    return (
        <>
            <Header source={Logo} alt="Logo SGC" title="Sistema de gestión de Citas"/>
            <main>
                <h1>Panel de Administraci&oacute;n.</h1>

            </main>
            <Footer/>
        </>
    );
}