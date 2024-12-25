import Main from "components/templates/Main";
import SideBar from "components/templates/SideBar";

function HomePage() {
  const style = { display: "flex" };
  return (
    <div style={style}>
      <SideBar />
      <Main />
    </div>
  );
}

export default HomePage;
