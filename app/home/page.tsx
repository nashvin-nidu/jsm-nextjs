interface Album {
    id: number;
    title: string;
}

const Home = async () => {

    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    if(!response.ok) throw new Error("Failed to Fetch");
    const albums: Album[] = await response.json();
    console.log(albums)
    return(

        <>
            {albums.map((album) => {
                return(
                    <div key={album.id}>
                        <h1>Fetched No {album.id}</h1>
                        <h2>Fetched Title {album.title}</h2>
                    </div>
                )
            })}
        </>  
    )
}

export default Home;