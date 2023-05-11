import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Novel from './components/Novel.js'
import Genre from './components/Genre.js'
import Writer from './components/Writer.js'
import Search from './components/Search.js'

function App() {
  function handleUpdateOnSubmission(newNovel){

    const serverOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newNovel)
    }
    fetch("http://localhost:3000/novels", serverOptions)
      .then(r => r.json())
      .then(newNovel => setNovels(novels => [...novels, newNovels]))
      .catch(error=>alert(error))
  }
  const [novels, setNovels] = useState([]);
  const [searchFilter, setSearchFilter] =useState("")

  useEffect(() => {
    
    fetch("http://localhost:3000/novels")
      .then((r) => r.json())
      .then((novels) => setNovels(novels));
  }, []); 
  const filterNovels=novels.filter(novels => searchFilter === ""? true: novels.description.includes(searchFilter))
    function handleOnSearch (search) {
      setSearchFilter(search)
    }


  return (
    <div>
    <h2>Novel Reader</h2>
    <Genre onSearching={handleOnSearch}/>
    <Writer onSubmission={handleUpdateOnSubmission}/>
    <Novels novels={filterNovels} />
    
    </div>
  );
}

export default App;

