export default function Card({arr}){
    
    let element=arr.map((name,index)=>{
        return <li key={index}>{name}</li>
    })
    return (
        <>
        <ul >
            {element}
        </ul>
        </>
    )
}