import React, { useEffect, useState } from "react";
import Comparison from "../comparison/Comparison";
import Repos from "../repos/Repos";
import SearchInput from "../searchInput/SearchInput";
import './search.css'

const  Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [repos, setRepos] = useState([]);
  const [pen , setPen] = useState([]);
  const [id , setId] = useState(0)
  const [rman , setRman] = useState(false)



  useEffect(() => {
    if (!inputValue) {
      return;
    }

    setIsLoading(true);

   
      fetch(`https://api.github.com/search/repositories?q=${inputValue}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setIsLoading(false);
        setRepos(data.items);
      })
      .catch(err => {
        setIsLoading(false);
        setError(true);
        console.error(err);
      });
    
  }, [inputValue]);


  const deleteRepoName = () => {
      setPen((pen) => pen.filter((_, id) => id !== 0));
  };

  const addRepoName = (repo) => {
        const ad =   <Comparison repo={repo}  key={id} deleteRepoName={deleteRepoName}  />
        setPen([...pen ,{id , ...ad}])
        setRepos((repos) => repos.filter((_, id) => id !== 0));
        setId(id + 1)
  }


  return (
    <div className="repo">
       
      <SearchInput setInputValue={setInputValue} setRman={setRman} isLoading={isLoading} error={error} />



      <div className="pageRepos" >
      
        <Repos repos={repos} addRepoName={addRepoName} rman={rman}  />
        {id > 0 ? <div className="pageComparison">
        {pen}
      </div> : ""}
      </div>
      
    </div>
  );
}

export default Search;