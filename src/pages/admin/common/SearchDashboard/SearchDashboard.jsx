import { useLocation, useNavigate } from "react-router-dom";
import "./SearchDashboard.css"; // Add this CSS file for styling

const SearchDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const query = params.get("q"); // Extract query
  const results = location.state?.results || []; // Extract passed results

  return (
    <div className="search-dashboard">
      <h1 className="search-title">
        Search Results for:{" "}
        <span className="search-query">&quot;{query}&quot;</span>
      </h1>

      {results.length > 0 ? (
        <ul className="search-results-list">
          {results.map((result, index) => (
            <li key={index} className="search-result-item">
              {result}
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-results">No results found.</p>
      )}

      <button className="back-home-btn" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default SearchDashboard;
