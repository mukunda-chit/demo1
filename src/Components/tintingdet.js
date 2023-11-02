import React, { useState, useEffect } from 'react';
import './styles.css';

const NewTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalItems = 23;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const contentArray = [
    'coomran',
    'pavidiya',
    'sabitch',
    'legend',
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
      <h2>Tinting table</h2>
      <table className="observation-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Name Of Project</th>
            <th>Fandeck</th>
            <th>Shade Code</th>
            <th>Shade Name</th>
            <th>Product</th>
            <th>Base</th>
            <th>Base Batch Number</th>
            <th>Formulation for 1L</th>
            <th>Quantity Tinted in Litres</th>
            <th>Reference</th>
            <th>For Project or Retail</th>
            <th>Shade Match Confirmation</th>
            <th>Shade Patch/Swatch</th>
            <th>Other Observations</th>
            <th>Dispensing Machine</th>
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

export default NewTable;
