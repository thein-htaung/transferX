import Login from "./components/login";
import Transfer from "./components/transfer";
import { connect } from "react-redux";


function App({ isValidUser }) {
  return (
    <div className="appContainer">
      {isValidUser ? <Transfer /> : <Login />}
      <div className="backgroundcover-text">
        <a href="https://www.freepik.com/free-vector/abstract-blue-geometric-shapes-background_6166980.htm#query=background&position=4&from_view=keyword&track=sph">Image by Harryarts</a>
      </div>
    </div>
  );
}

export default connect((state) => ({ isValidUser: state.isValidUser }))(App);
