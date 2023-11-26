import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Logo from "../assets/SGI-without-bg.png";

export default function Agenda(){
    return (
        <>
            <Header source={Logo} alt="Logo SGC" title="Sistema de gestión de Citas"/>
            <main>
                <h1>Agenda</h1>
            </main>
            <Footer/>
        </>
    );
}