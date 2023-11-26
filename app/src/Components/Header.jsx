import { Link } from "react-router-dom";
export default function Header({source,alt,title}){
    return (
        <header className="d-flex-no-center">
            <div className="col-8 align-items-center">
            <Link to="/" className="mx-1"><img src={source} alt={alt} title={title} width={100} height={100}/></Link>
            <h1 className="header-title">{title}</h1>
            </div>
            <div className="col-4">
                <nav className="nav">
                    <ul className="nav">
                        <li className="nav-link"><Link to="/admin" >Inicio</Link></li>
                        <li className="nav-link"><Link to="/admin/gestion">Gesti&oacute;n</Link></li>
                        <li className="nav-link"><Link to="/admin/agenda">Agenda</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}