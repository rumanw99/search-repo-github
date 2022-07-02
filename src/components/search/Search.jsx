import React, { useEffect, useState } from "react";
import './search.css'

const  Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [repos, setRepos] = useState([]);
  const [pen , setPen] = useState([]);
  const [id , setId] = useState(0)

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
        console.log(data);
        setIsLoading(false);
        setRepos(data.items);
      })
      .catch(err => {
        setIsLoading(false);
        setError(true);
        console.error(err);
      });
  }, [inputValue]);



const addRepoName = (repo) => {
  const ad =  
    <div key={id} className="comparison" >
                          <div className="name">
                                    <a href={repo.html_url} target="_blank">{repo.name}</a>
                                  <img src={repo.owner?.avatar_url} alt="" />
                                </div>
                                <div className="line"></div>
                                <div className="name">
                                  <div className="icon">
                                  <span className="material-symbols-outlined">star</span>
                                  <p>Stars</p>
                                  </div>
                                  <p>{repo.stargazers_count}</p>
                                </div>
                                <div className="name">
                                  <div className="icon">
                                  <span class="material-symbols-outlined">fork_right</span>
                                  <p>Forks</p>
                                  </div>
                                  <p>{repo.forks}</p>
                                </div>
                                <div className="name">
                                  <div className="icon">
                                  <span class="material-symbols-outlined">info</span>
                                  <p>Open issues</p>
                                  </div>
                                  <p>{repo.open_issues}</p>
                                </div>
                                <div className="name">
                                  <div className="icon">
                                  <span class="material-symbols-outlined">brightness_5</span>
                                  <p>License</p>
                                  </div>
                                  <p>{repo.license?.spdx_id}</p>
                                </div>
                                <div className="name">
                                  <div className="icon">
                                  <span class="material-symbols-outlined">closed_caption</span>
                                  <p>Language</p>
                                  </div>
                                  <p>{repo.language}</p>
                                </div>
                                <div className="line"></div>
                                <button onClick={() => deleteRepoName()}>Delete</button>
                            </div>

    setPen([...pen ,{id, ...ad}])
    setId(id + 1)
}

const deleteRepoName = () => {
    setPen((pen) => pen.filter((_, id) => id !== 0));
  };

  return (
    <div className="repo">
       
      <div className="search">
        <form
          onSubmit={evt => {
            evt.preventDefault();
            setInputValue(evt.target.elements.query.value);
          }}
        >
          <div className="searchInput">
            <span class="material-symbols-outlined">
            search
            </span>
            <input
              type="text"
              name="query"
              className="github_search_input"
              placeholder="Search Github Repositories..."
            />
          </div>
        </form>
        {isLoading && <div>Loading...</div>}
        {error && (
          <div>
            There is no user with this name...
            Try again
          </div>
        )}
      </div>

        <div className="pageComparison" >
              {pen}
        </div>

       <div className="line"></div>

      <div className="pageRepos" >
      
            <ul className="pageRepo" >
                {repos.map((repo , i) => {
                    return (
                        
                        <li key={i} className="comparison" style={{listStyle:"none"}}>
                                <div className="name">
                                    <a href={repo.html_url} target="_blank">{repo.name}</a>
                                  <img src={repo.owner?.avatar_url} alt="" />
                                </div>
                                <div className="line"></div>
                                <div className="name">
                                  <div className="icon">
                                  <span className="material-symbols-outlined">star</span>
                                  <p>Stars</p>
                                  </div>
                                  <p>{repo.stargazers_count}</p>
                                </div>
                                <div className="name">
                                  <div className="icon">
                                  <span class="material-symbols-outlined">fork_right</span>
                                  <p>Forks</p>
                                  </div>
                                  <p>{repo.forks}</p>
                                </div>
                                <div className="name">
                                  <div className="icon">
                                  <span class="material-symbols-outlined">info</span>
                                  <p>Open issues</p>
                                  </div>
                                  <p>{repo.open_issues}</p>
                                </div>
                                <div className="name">
                                  <div className="icon">
                                  <span class="material-symbols-outlined">brightness_5</span>
                                  <p>License</p>
                                  </div>
                                  <p>{repo.license?.spdx_id}</p>
                                </div>
                                <div className="name">
                                  <div className="icon">
                                  <span class="material-symbols-outlined">closed_caption</span>
                                  <p>Language</p>
                                  </div>
                                  <p>{repo.language}</p>
                                </div>
                                <div className="line"></div>
                                <button onClick={() => addRepoName(repo , i)}>Add To Comparison</button>
                            </li>
                );

                })}
            </ul>
      </div>
      
    </div>
  );
}

export default Search;