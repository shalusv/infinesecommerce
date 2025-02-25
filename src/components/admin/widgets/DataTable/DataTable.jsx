import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaEdit, FaTrash, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Datatable.css";

const Datatable = ({ columns, data = [] }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [expandedRow, setExpandedRow] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [viewport, setViewport] = useState(window.innerWidth);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  useEffect(() => {
    setFilteredData(
      data.filter((row) =>
        Object.values(row).some((value) =>
          value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    );
  }, [searchQuery, data]);

  useEffect(() => {
    const handleResize = () => setViewport(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleExpand = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const sortData = (key) => {
    if (!columns.find((col) => col.key === key)?.sortable) return;

    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedData = [...filteredData].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setFilteredData(sortedData);
  };

  const mainColumns = columns.filter((col) =>
    viewport > 768
      ? col.G768
      : viewport > 650
      ? col.L768
      : viewport > 550
      ? col.L650
      : viewport > 450
      ? col.L550
      : col.L450
  );

  const expandableColumns = columns.filter((col) => !mainColumns.includes(col));

  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="table-container">
      <input
        type="text"
        className="datatable-search-input"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <table className="datatable">
        <thead>
          <tr>
            {mainColumns.map((col) => (
              <th key={col.key} onClick={() => sortData(col.key)}>
                {col.label}{" "}
                {sortConfig.key === col.key
                  ? sortConfig.direction === "asc"
                    ? "▲"
                    : "▼"
                  : ""}
              </th>
            ))}
            <th className="actions-col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <React.Fragment key={item.id}>
              <tr>
                {mainColumns.map((col) => (
                  <td key={col.key}>
                    {col.key === "permissionName" ? ( // ✅ Ensure only "Permission Name" is a clickable link
                      <Link to={`/details/${item.id}`} className="row-link">
                        {item[col.key]}
                      </Link>
                    ) : (
                      item[col.key]
                    )}
                  </td>
                ))}
                <td className="actions-col">
                  <div className="action-buttons">
                    <button className="icon-btn edit">
                      <FaEdit />
                    </button>
                    <button className="icon-btn delete">
                      <FaTrash />
                    </button>
                    <button
                      className="icon-btn expand"
                      onClick={() => toggleExpand(item.id)}
                    >
                      {expandedRow === item.id ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </button>
                  </div>
                </td>
              </tr>
              {expandedRow === item.id && expandableColumns.length > 0 && (
                <tr className="expand-row">
                  <td colSpan={mainColumns.length + 1}>
                    <div className="expand-content">
                      <table>
                        <tbody>
                          {expandableColumns.map((col) => (
                            <tr key={col.key}>
                              <td>
                                <strong>{col.label}:</strong>
                              </td>
                              <td>{item[col.key]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>
        <span>
          {" "}
          Page {currentPage} of {Math.ceil(filteredData.length / rowsPerPage)}{" "}
        </span>
        <button
          disabled={
            currentPage === Math.ceil(filteredData.length / rowsPerPage)
          }
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

// ✅ PropTypes for validation
Datatable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      G768: PropTypes.bool.isRequired,
      L768: PropTypes.bool.isRequired,
      L650: PropTypes.bool.isRequired,
      L550: PropTypes.bool.isRequired,
      L450: PropTypes.bool.isRequired,
      sortable: PropTypes.bool,
    })
  ).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      permissionName: PropTypes.string,
    })
  ).isRequired,
};

export default Datatable;
