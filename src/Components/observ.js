
import React, { useState, useEffect } from 'react';
import './styles.css';

const Observ = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalItems = 23;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const contentArray = [
    'demo',
    'demopig',
    'demo2',
    'demopig2',
    // Add more content as needed
  ];

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  useEffect(() => {
    const newTotalPages = Math.ceil(totalItems / itemsPerPage);
    if (currentPage > newTotalPages) {
      setCurrentPage(newTotalPages);
    }
  }, [totalItems, currentPage, itemsPerPage]);

  const renderTableRows = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

    const rows = [];
    for (let i = startIndex; i < endIndex; i++) {
      const contentIndex = i % contentArray.length;
      rows.push(
        <tr key={i}>
          <td>{contentArray[contentIndex]}</td>
          <td>{contentArray[contentIndex]}</td>
          <td>{contentArray[contentIndex]}</td>
          <td>{contentArray[contentIndex]}</td>
          <td>{contentArray[contentIndex]}</td>
          <td>{contentArray[contentIndex]}</td>
          <td>{contentArray[contentIndex]}</td>
          <td>{contentArray[contentIndex]}</td>
        </tr>
      );
    }

    return rows;
  };

  return (
    <div>
      <h2>Observations Table</h2>
      <table className="observation-table">
        <thead>
          <tr>
            <th>Depot</th>
            <th>Base Tinted as per Report</th>
            <th>Base Tinted as per History</th>
            <th>Colourant Poured in Cannister</th>
            <th>Colourant Consumed</th>
            <th>Remarks</th>
            <th>Branding for Dispensing Machine</th>
            <th>Branding for Gyroshaker Machine</th>
          </tr>
        </thead>
        <tbody>
          {renderTableRows()}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default Observ;
