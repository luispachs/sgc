export default function Agent({name,profileImage,nextDate}){

    return(
        <section className="card">
            <article className="card-header">
                <img src={profileImage} alt={name}/>
                <h3>{name}</h3>
            </article>
            <article className="car-body">
                <h4>{nextDate.name}</h4>
                <p><strong>Servicio:</strong>{nextDate.service??"No Posee ningun servicio Asignado"}</p>
                <p><strong>Hora:</strong>{nextDate.hour??"--:-- --/--/----"}</p>
                <p><strong>Contacto:</strong>{nextDate.phone??"+-- --- --- ----"}</p>
            </article>
        </section>
    );
}