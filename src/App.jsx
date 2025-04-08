import Greeting from "./component/Greeting"
import Card from "./component/Card"
import books from "./component/books"
import BookStore from "./component/BookStore"

function App(){

    return(
        <>
        <Greeting name="Poorvi" age={23} />
        <Greeting name="Ayan"/>
        <BookStore books={books}/>
        </>
    )
}

export default App