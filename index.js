// ReactDOM is a global variable

/*
// Display a h1 in dom
ReactDOM.render(<h1>Hello I am Yujan</h1>, document.getElementById("root"))
*/


/*
// Display a <ul> with 2 <li>
ReactDOM.render(
    <ul>
        <li>Naruto</li>
        <li>One Piece</li>
        <li>Bleach</li>
    </ul>
    , document.getElementById("root")
)
*/


/* 
function MyComponent(){
    return(
        <h1>
            I am Learning React
        </h1>
    )
}

ReactDOM.render(
    <div>
        <MyComponent />
    </div>,
    document.getElementById("root")
)
 */


/* 
// Imperative Programming where we tell how it should be done (vanilla js)
const h1 =document.createElement("h1")
h1.textContent ="This is creating a element"
h1.className = "header"
document.getElementById("root").append(h1)
 */


//JSX
/* 
// CODE
const page= (
    <div>
        <h1 className='header'>This is a JSX example</h1>
        <p>This is a paragraph</p>
    </div>
)

console.log(page)

ReactDOM.render(
    page,
    document.getElementById("root")
)
*/

/* Challenge
    -Use the sematic `nav` element as the parent wrapper
    - Have an h1 element with name "website"
    -Insert an unordered list for the other nav elements
        -Inside `ul` have 3 li for pricing, about and contact
*/

const navbar=(
    <nav>
        <h1>Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(
    navbar,
    document.getElementById("root")
)