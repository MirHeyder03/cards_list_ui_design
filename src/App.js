import "./App.scss";
import apis from "./api/cards.json";
import SearchBar from "./components/search/SearchBar";
import { useState,useEffect } from "react";
import Cards from "./components/Cards/Cards";

function App() {
  const [search, setSearch] = useState("");
  const [api, setApi] = useState(apis);


  useEffect(()=>{
      
  },[search])
  
  return (
    <div className="App">
      <h3>
        A collective list of free APIs for use in <br /> software and web
        development.
      </h3>
      <SearchBar search={search} setSearch={setSearch} />
      <div className="container">
        <h3>Featured APIs of this week</h3>
        <div className="api-list">
            {
              apis.map(api=>(
                <Cards api={api} key={api.id}/>
              ))
            }
        </div>
      </div>
    </div>
  );
}

export default App;
