import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaEdit, FaTrash, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Datatable.css";

const Datatable = ({ columns = [], data = [] }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [viewport, setViewport] = useState(window.innerWidth);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // ✅ Ensure safe filtering (avoid `.toString()` on null)
  useEffect(() => {
    setFilteredData(
      data.filter((row) =>
        Object.values(row).some((value) =>
          value
            ? value.toString().toLowerCase().includes(searchQuery.toLowerCase())
            : false
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
    const column = columns.find((col) => col.key === key);
    if (!column || !column.sortable) return;

    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedData = [...filteredData].sort((a, b) => {
      if (!a[key] || !b[key]) return 0;
      return a[key] < b[key]
        ? direction === "asc"
          ? -1
          : 1
        : a[key] > b[key]
        ? direction === "asc"
          ? 1
          : -1
        : 0;
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
      <div className="table-features">
        <input
          type="text"
          className="datatable-search-input"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="datatable-container">
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
                      {col.key === "permission" ? (
                        <Link to={`/details/${item.id}`} className="row-link">
                          {item[col.key]}
                        </Link>
                      ) : (
                        item[col.key] ?? "--"
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
                      {expandableColumns.length > 0 && (
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
                      )}
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
                                <td>{item[col.key] ?? "--"}</td>
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
            {"<"}
          </button>
          {[...Array(Math.ceil(filteredData.length / rowsPerPage)).keys()].map(
            (num) => (
              <button
                key={num + 1}
                className={currentPage === num + 1 ? "active" : ""}
                onClick={() => setCurrentPage(num + 1)}
              >
                {num + 1}
              </button>
            )
          )}
          <button
            disabled={
              currentPage === Math.ceil(filteredData.length / rowsPerPage)
            }
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

// ✅ Updated PropTypes
Datatable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      G768: PropTypes.bool,
      L768: PropTypes.bool,
      L650: PropTypes.bool,
      L550: PropTypes.bool,
      L450: PropTypes.bool,
      sortable: PropTypes.bool,
    })
  ).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      permission: PropTypes.string.isRequired,
      description: PropTypes.string,
      updated: PropTypes.string,
      user_id: PropTypes.number,
    })
  ).isRequired,
};

export default Datatable;
