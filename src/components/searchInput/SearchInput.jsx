import React from 'react'

const SearchInput = ({setInputValue , setRman , isLoading , error}) => {
  return (
    <div className='sera'>
      <div className="search">
          <form
            onSubmit={evt => {
              evt.preventDefault();
              setInputValue(evt.target.elements.query.value);
            }}
          >
            <div className="searchInput">
              <span className="material-symbols-outlined">
              search
              </span>
              <input
                type="text"
                name="query"
                className="github_search_input"
                placeholder="Search Github Repositories..."
              />
            <button onClick={() => setRman(true)}>Click To Search</button>
            </div>
          </form>
          {isLoading && <div>Loading...</div>}
          {error && (
              <span>There is no user with this name...<br />Try again</span>
          )}
        </div>
    </div>
  )
}

export default SearchInput