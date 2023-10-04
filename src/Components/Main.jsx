import React, { useState, useEffect } from 'react';
import { data } from './data.js';
import { useNavigate, useParams } from 'react-router-dom';
import people from './people.png';
import fuel from './fuel.png';
import mileage from './mileage.png';
import carType from './carType.png';
import wishlist from './wishlist.png';
import Pagination from './Footer.jsx';


function Main() {
    const [search,setSearch] = useState('')
  console.log(search)

  const carsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();
 

  const startIndex = (currentPage - 1) * carsPerPage;
  const endIndex = currentPage * carsPerPage;

  const totalCars = data.length;
  const totalPages = Math.ceil(totalCars / carsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    navigate(`/page/${page}`); 
  };

  useEffect(() => {
    // Update the URL when the currentPage changes
    navigate(`/page/${currentPage}`);
  }, [currentPage, navigate]);
  

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
                style={{marginRight:'1px'}}
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
        
    <div className="container">
      <div className="row">
        {data.slice(startIndex, endIndex).filter((item)=>{
        const filter1 =  search.toLowerCase()=== ''
        ?item
        :item.name.toLowerCase().includes(search.toLowerCase());
        return filter1
      }).map((item, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card mb-4" style={{ backgroundColor: '#f2f4fb', borderRadius: '10px' }}>
              <img src={item.img} className="card-img-top" style={{ height: '200px', borderRadius: '15px' }} alt="..." />
              <div className="card-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h5 className="card-title" style={{ margin: 0 }}>{item.name}</h5>
                  <p className="card-text" style={{ margin: 0, border:'1.5px dashed ', padding:'2px 10px 2px 10px', borderColor:'#4999ED', borderRadius:'7px'}}>{item.year}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <p className="card-text" style={{ margin: '15px 0', fontSize:'15px' }}><img src={people} style={{ height: '25px' }} /> {item.seating_capacity} People</p>
                  <p className="card-text" style={{ margin: '5px 0', fontSize:'15px' }}><img src={fuel} style={{ height: '25px',  }}/><span style={{marginRight:'50px'}}>{item.fuel_type}</span></p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> 
                  <p className="card-text" style={{ margin: '15px 0', fontSize:'15px' }}><img src={mileage} style={{ height: '25px'}} />{item.mileage_km_per_liter}km/1-litre</p>
                  <p className="card-text" style={{ margin: '15px 0', fontSize:'15px' }}><img src={carType} style={{ height: '25px' }} /><span style={{marginRight:'40px'}}>{item.transmission}</span></p>
                </div>
                <hr />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <p className="card-text" style={{ margin: 0, fontSize: '25px'}}>
                    ${item.price}<span style={{fontSize:'15px'}}> /month</span></p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>


                    <img src={wishlist} style={{ height: '40px' }} />
                    <button className="btn" style={{ backgroundColor: '#4999ED', color: 'white', borderRadius:'15px' }}>Rent Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />

    </div>
    </>
  );
}

export default Main;

