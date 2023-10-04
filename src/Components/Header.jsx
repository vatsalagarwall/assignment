import React, {useState} from 'react';
import './Header.css'

function Header() {
  const [search,setSearch] = useState('')
  console.log(search)
  return (
    <>
      <div className="header-container" style={{backgroundColor:'#EDF1F6', marginLeft:'70px',marginBottom:'20px',marginRight:'75px', border: '1px solid #ccc', borderRadius:'15px'}}>
        <nav className="navbar navbar-expand-lg ">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <form className="form-inline my-2 my-lg-0">
            <div className="search-bar-container">
              <input
                className="form-control mr-sm-2 search-bar"
                type="search"
                placeholder="Search..."
                aria-label="Search"
                style={{width:'300px'}}
                onChange={(e)=>setSearch(e.target.value)}
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
                alt="Search Icon"
                className="search-icon"
              />
            </div>
          </form>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ marginLeft: '25px' }}
                >
                  Relevance
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  style={{ marginLeft: '25px' }}
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  All brands
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
