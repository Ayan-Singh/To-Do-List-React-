// Task 1: Basic useState - Counter
// ✅ Create a Counter component.
// ✅ Use useState to track a count (starting from 0).
// ✅ Add "Increment" and "Decrement" buttons to update the count.
// ✅ Ensure count doesn't go below 0.
import Counter from "./component/Counter"
import Logger from "./component/Logger"
import Card from "./component/Card"
import InputFocus from "./component/InputFocus"
import Child from "./component/Child"
import Parent from "./component/Parent"
import UserProfile from "./component/UserProfile"
import NameList from "./component/NameList"
import SuperHeroes from "./component/SuperHeroes"

function App(){
    return(
        <>
        <SuperHeroes heroes={["Superman","Batman","Ironman"]}/>
        <UserProfile name="Poorvi Tandel" city="Rewa" age={23}/>
           {/* <Counter/> 
           <Logger/>
           <Card>
            <h1>This is 1st Card Component</h1>
            <h2>This is 2nd Card Component</h2>
           </Card>
           <InputFocus/>
           <Parent/> */}
        </>
    )
}

export default App