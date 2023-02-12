import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { changeMessage, selectMessage } from "../redux/slices/basicSlice";
import "./App.css";

function App() {
  const message = useAppSelector(selectMessage);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
