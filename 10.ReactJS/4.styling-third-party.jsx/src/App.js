const App = () => {
  return (
    // Herea we use third pary t Telwind Css for styling
    // <h1 className="text-3xl text-red-900 font-bold underline">Hello world!</h1>

    // Here we use third party bootstarp css for styling
    <div>
      <div className="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>
      <div className="alert alert-secondary" role="alert">
        A simple secondary alert—check it out!
      </div>
      <div className="alert alert-success" role="alert">
        A simple success alert—check it out!
      </div>
      <div className="alert alert-danger" role="alert">
        A simple danger alert—check it out!
      </div>
      <div className="alert alert-warning" role="alert">
        A simple warning alert—check it out!
      </div>
      <div className="alert alert-info" role="alert">
        A simple info alert—check it out!
      </div>
      <div className="alert alert-light" role="alert">
        A simple light alert—check it out!
      </div>
      <div className="alert alert-dark" role="alert">
        A simple dark alert—check it out!
      </div>
    </div>
  );
};

export default App;
