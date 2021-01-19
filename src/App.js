import { requestPermission } from "./setnotification";
function App() {
  return (
    <div className="App">
     
     <p>
       HELLO
     </p>

     <button onClick={requestPermission}>
       GET NOTIFICATION
     </button>
    </div>
  );
}

export default App;
