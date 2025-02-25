import React, { useState, useEffect } from "react";
import "./DevStyles.css";

const columns = [
  {
    key: "id",
    label: "#",
    G768: true,
    L768: true,
    L650: true,
    L550: true,
    L450: true,
    sortable: true,
  },
  {
    key: "name",
    label: "Permission Name",
    G768: true,
    L768: true,
    L650: true,
    L550: true,
    L450: true,
    sortable: true,
  },
  {
    key: "created",
    label: "Created",
    G768: true,
    L768: true,
    L650: false,
    L550: false,
    L450: false,
    sortable: true,
  },
  {
    key: "status",
    label: "Status",
    G768: false,
    L768: true,
    L650: false,
    L550: false,
    L450: false,
    sortable: true,
  },
  {
    key: "description",
    label: "Description",
    G768: false,
    L768: false,
    L650: false,
    L550: false,
    L450: false,
    sortable: false,
  },
];

const initialData = [
  {
    id: 1,
    name: "Admin Access",
    created: "2024-02-20",
    status: "Active",
    description: "Full access to system",
  },
  {
    id: 2,
    name: "Editor Access",
    created: "2024-02-18",
    status: "Inactive",
    description: "Can edit content",
  },
  {
    id: 3,
    name: "Viewer Access",
    created: "2024-02-15",
    status: "Active",
    description: "Can only view content",
  },
];

const DevStyles = () => {
  const [data, setData] = useState(initialData);
  const [expandedRow, setExpandedRow] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [viewport, setViewport] = useState(window.innerWidth);

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

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setData(sortedData); // ✅ Fixed: Now using state
  };

  // Determine which columns go to the main row and expandable section
  const mainColumns = columns.filter((col) => {
    return viewport > 768
      ? col.G768
      : viewport > 650
      ? col.L768
      : viewport > 550
      ? col.L650
      : viewport > 450
      ? col.L550
      : col.L450;
  });

  const expandableColumns = columns.filter((col) => !mainColumns.includes(col));

  return (
    <div className="table-container">
      <h2>Developer Styles</h2>
      <hr />
      <table className="permission-table">
        <thead>
          <tr>
            {mainColumns.map((col) => (
              <th key={col.key} onClick={() => sortData(col.key)}>
                {col.label}
              </th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <React.Fragment key={item.id}>
              <tr>
                {mainColumns.map((col) => (
                  <td key={col.key}>{item[col.key]}</td>
                ))}
                <td>
                  <button className="icon-btn edit">✏️</button>
                  <button className="icon-btn delete">🗑️</button>
                  <button
                    className="icon-btn expand"
                    onClick={() => toggleExpand(item.id)}
                  >
                    {expandedRow === item.id ? "▲" : "▼"}
                  </button>
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
    </div>
  );
};

export default DevStyles;
