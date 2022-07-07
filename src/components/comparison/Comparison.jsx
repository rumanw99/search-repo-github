import React from 'react'

const Comparison = ({repo , id , deleteRepoName}) => {
  return (

    <div key={id} className="comparison">
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
                                  <span className="material-symbols-outlined">fork_right</span>
                                  <p>Forks</p>
                                  </div>
                                  <p>{repo.forks}</p>
                                </div>
                                <div className="name">
                                  <div className="icon">
                                  <span className="material-symbols-outlined">info</span>
                                  <p>Open issues</p>
                                  </div>
                                  <p>{repo.open_issues}</p>
                                </div>
                                <div className="name">
                                  <div className="icon">
                                  <span className="material-symbols-outlined">brightness_5</span>
                                  <p>License</p>
                                  </div>
                                  <p>{repo.license?.spdx_id}</p>
                                </div>
                                <div className="name">
                                  <div className="icon">
                                  <span className="material-symbols-outlined">closed_caption</span>
                                  <p>Language</p>
                                  </div>
                                  <p>{repo.language}</p>
                                </div>
                                <div className="name">
                                  <p>Created</p>
                                  <p>{repo.created_at}</p>
                                </div>
                                <div className="name">
                                  <p>Pushed</p>
                                  <p>{repo.pushed_at}</p>
                                </div>
                                <div className="line"></div>
                                <button onClick={() => deleteRepoName()}>Delete</button>
                            </div>

  )
}

export default Comparison;