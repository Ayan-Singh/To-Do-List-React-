// Task 1: Basic useState - Counter
// ✅ Create a Counter component.
// ✅ Use useState to track a count (starting from 0).
// ✅ Add "Increment" and "Decrement" buttons to update the count.
// ✅ Ensure count doesn't go below 0.
import Counter from "./component/Counter"
import Logger from "./component/Logger"
import Card from "./component/Card"

function App(){
    return(
        <>
           <Counter/> 
           <Logger/>
           <Card>
            <h1>This is 1st Card Component</h1>
            <h2>This is 2nd Card Component</h2>
           </Card>
        </>
    )
}

export default App