function SuperHeroes({heroes}){
    return (
    <ul>
        {heroes.map((hero,index)=>{
            return <li key={index}>{hero}</li>
        })}
    </ul>
    )

}
export default SuperHeroes