import React from 'react';

function Pagination({ totalPages, currentPage, handlePageChange }) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const goToPreviousPage = () => {
    if (!isFirstPage) {
      handlePageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (!isLastPage) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination mt-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #cccccc', borderRadius: '15px', padding: '15px 20px 0px 20px', marginBottom: '5px' }}>
      <div style={{ textAlign: 'left' }}>
        <p style={{ margin: 0 }}>6 from 60</p>
      </div>
      <div>
        <button
          className={`btn btn-white`}
          onClick={goToPreviousPage}
          disabled={isFirstPage}
          style={{ backgroundColor: 'white', marginRight: '5px', marginBottom: '10px' }}
        >
          <img src='https://cdn-icons-png.flaticon.com/512/109/109618.png' style={{height:'20px', width:'20px'}}/>
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`btn btn-white`}
            onClick={() => handlePageChange(index + 1)}
            style={{ backgroundColor: 'white', marginRight: '5px', marginBottom: '10px' }}
          >
            {index + 1}
          </button>
        ))}
        <button
          className={`btn btn-white`}
          onClick={goToNextPage}
          disabled={isLastPage}
          style={{ backgroundColor: 'white', marginBottom: '10px' }}
        >
          <img src='https://upload.wikimedia.org/wikipedia/commons/2/24/Arrow-right-512.png' style={{height:'20px', width:'20px'}}/>
        </button>
      </div>
    </div>
  );
}

export default Pagination;

