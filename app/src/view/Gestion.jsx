import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Logo from "../assets/SGI-without-bg.png";

export default function Gestion(){
    return (
        <>
        <Header source={Logo} alt="Logo SGC" title="Sistema de gestión de Citas"/>
            <main>
                <h1>Gestion</h1>
            </main>
            <Footer/>
        </>
    );
}