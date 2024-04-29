const App = () => {
    // Basic syntax
    const element = <h1>Hello world!</h1>;
    // Embedding Expressions
    const name = "ReactJS Developer";
    const element2 = (
        <h1>
            Hello {name} {2 + 2}
        </h1>
    );
    //JSX as an expression
    const element3 = (
        <div>
            <h1>Hello, World!</h1>
            <h2>It is {new Date().toLocaleDateString()}</h2>
        </div>
    )
    // return element3;

    //! Other method to return JSX
    return (
        // first div is described to entering the return part
        <div>
            {/* Here actual content */}
            <div>
                <h1>Hello, World!</h1>
                <h2>It is {new Date().toLocaleDateString()}</h2>
            </div>
        </div>
    )

};

export default App;
