const dynamicPage = async ({params}: {params : Promise<{id:string}>} ) => {
    const {id} = await params;
    return (
        <h1>Hello user{id}</h1>
    )
}

export default dynamicPage;