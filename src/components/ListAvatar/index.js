
function ListAvatar ({title, list}) {
    return (
        <>
            <h2 className="smallTitle">
                {title} ({list.length})
            </h2>
            <ul>
                {
                    list.map((item, index)=>{
                        if(index <= 5){
                            return(
                                <li key={index}>
                                    <a href={`${item.url}`} >
                                        <img src={item.image} />
                                        <span>{item.title}</span>
                                    </a>
                                </li>
                            )
                        }
                    })
                }
            </ul>
        </>
    )
}

export default ListAvatar;