import { React, useEffect, useState } from "react";
import { getData, fetchData } from "../service/actions/utilsAction";
import { useDispatch } from "react-redux";
import Main from "./pages/main";
function App() {
  const dispatch = useDispatch();
  const [stall, setStall] = useState(true);

  useEffect(() => {
    document.title = "Trello";
    dispatch(getData());
    // dispatch(fetchData());
    setStall(false);
  }, []);
  return (
    <>
      <div className="App">{!stall && <Main />}</div>
    </>
  );
}

export default App;
