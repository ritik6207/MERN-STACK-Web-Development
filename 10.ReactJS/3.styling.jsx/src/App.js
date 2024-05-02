import "./UserPrfile.css";
import style from "./UserPrfile.module.css";
const App = () => {
  // Inline style object for the container
  const containerStyle = {
    textAlign: "center",
    margin: "20px",
  };
  return (
    <div style={containerStyle}>
      <img
        src="https://cdn.pixabay.com/photo/2024/01/24/15/10/ai-generated-8529788_1280.jpg"
        alt="avatar"
        // Applying inline style directly
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <h2 className="name">Ritik Kumar</h2>
      <p className="bio">Fullstack Web Developer | React Enthisiast</p>
      <ul className= {style.hobbies}>
        <li className= {style.hobby}>Coding</li>
        <li className= {style.hobby}>Reading Book</li>
        <li className= {style.hobby}>Traveling</li>
      </ul>
    </div>
  );
};

export default App;
