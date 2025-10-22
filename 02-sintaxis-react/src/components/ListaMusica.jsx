export function ListaMusica ({image, userMusic, title, parrafo}) {
    return(
        <div>
            
            <h1>{title}</h1>
            <h1>{userMusic}</h1>
            <img src={image} alt="" width="250" />
            <p>{parrafo}</p>
           

        </div>
    )
}