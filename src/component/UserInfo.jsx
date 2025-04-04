function UserInfo(){
    const users = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" }
        ];

    return(
        <>
      {
        users.map((user)=>{
            return <h3 key={user.id}>{user.name}</h3>
        })}

        </>
    )    
}
export default UserInfo