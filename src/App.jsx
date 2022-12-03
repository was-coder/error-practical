// import ErrorBoundary from "./component/ErrorApp";
import Navbar from "./reusable/Navbar";
import SetRoute from "./route/SetRoute";

function App() {
  return (
    <>
      {/* <ErrorBoundary> */}
      <Navbar />
      <SetRoute />
      {/* </ErrorBoundary> */}
    </>
  );
}

export default App;
