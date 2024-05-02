import Userprofile from "./components/UserProfile";
const App = () => {
  return (
    <div>
      {/* Call/render the components */}
      <Userprofile
        name="ritik kumar"
        email="ritik@gmail.com"
        location="india"
        about="Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laboriosam consequuntur placeat, natus quaerat maiores iure eius unde
        repudiandae pariatur facere accusamus ex, alias nam et adipisci sunt
        quae quisquam ipsam."
      />
      <Userprofile
        name="Supriya kumari"
        email="supriya@gmail.com"
        location="india"
        about="Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laboriosam consequuntur placeat, natus quaerat maiores iure eius unde
        repudiandae pariatur facere accusamus ex, alias nam et adipisci sunt
        quae quisquam ipsam."
      />
    </div>
  );
};

export default App;
