import "./App.css";
import { useState } from "react";
import axios from "../node_modules/axios/index";
import NewsList from "./components/NewsList";
import SlideWrapper from "./components/SlideWrapper";

const App = () => {
  // const [data, setData] = useState(null);
  // const onClick = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://newsapi.org/v2/top-headlines?country=kr&apiKey=98ce5b0dbedd4587b9f28737c3e95029"
  //     );
  //     setData(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // return (
  //   <div>
  //     <div>
  //       <button onClick={onClick}>불러오기</button>
  //     </div>
  //     {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
  //   </div>
  // );
  return (
    <div className="App">
      <SlideWrapper />;
    </div>
  );
};
export default App;
