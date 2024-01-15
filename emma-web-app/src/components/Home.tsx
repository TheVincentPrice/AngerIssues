import "../App.css";
import "../../content/icons/anger_production_logo.jpg";
import { ContactButton } from "./ContactButton";

const Home = () => {
  const logoStyle = {
    width: "70%",
    height: "auto",
  };

  return (
    <body>
      <div className="App">
          <a href="/portfolio">
            <img
              src="../content/icons/anger_production_logo.jpg"
              style={logoStyle}
            />
          </a>
        <div className="card">
          <ContactButton />
        </div>
      </div>
    </body>
  );
};

export default Home;
