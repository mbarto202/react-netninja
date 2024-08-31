const Home = () => {

    const handleClick = () => {
        console.log('hello');
    }
    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => handleClickAgain('michael', e)}>Click Me Again</button>
        </div>
     );
}
 
export default Home;