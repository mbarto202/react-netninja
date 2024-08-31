import { useState } from "react"

const Home = () => {

    // let name = 'michael'
    const [name, setName] = useState('mike')
    const[age, setAge] = useState(25)

    const handleClick = () => {
       setName('mikey')
       setAge(15)
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;