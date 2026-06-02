import { useState, useMemo } from 'react';
import { Search, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import useUsers from '../hooks/useUsers';
import './UserDataTable.css';

const UserDataTable = () => {
  const { users, loading, error } = useUsers();
  const [searchTerm, setSearchTerm] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [sortDirection, setSortDirection] = useState(null); // 'asc', 'desc', null

  const uniqueCities = useMemo(() => {
    const cities = new Set(users.map(user => user.address.city));
    return Array.from(cities).sort();
  }, [users]);

  const filteredAndSortedUsers = useMemo(() => {
    let result = [...users];

    // Filter by search term (name or email)
    if (searchTerm) {
      const lowercasedSearch = searchTerm.toLowerCase();
      result = result.filter(user => 
        user.name.toLowerCase().includes(lowercasedSearch) ||
        user.email.toLowerCase().includes(lowercasedSearch)
      );
    }

    // Filter by city
    if (cityFilter) {
      result = result.filter(user => user.address.city === cityFilter);
    }

    // Sort by name
    if (sortDirection) {
      result.sort((a, b) => {
        if (a.name < b.name) return sortDirection === 'asc' ? -1 : 1;
        if (a.name > b.name) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [users, searchTerm, cityFilter, sortDirection]);

  const toggleSort = () => {
    if (sortDirection === null) setSortDirection('asc');
    else if (sortDirection === 'asc') setSortDirection('desc');
    else setSortDirection(null);
  };

  if (loading) {
    return <div className="table-state-message">Loading users data...</div>;
  }

  if (error) {
    return <div className="table-state-message error">Error: {error}</div>;
  }

  return (
    <div className="user-data-table-container">
      <div className="table-controls">
        <div className="search-input-wrapper">
          <Search size={16} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search by name or email..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <select 
          className="city-filter"
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
        >
          <option value="">All Cities</option>
          {uniqueCities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      <div className="table-wrapper">
        <table className="user-table">
          <thead>
            <tr>
              <th onClick={toggleSort} className="sortable-header">
                <div className="header-content">
                  Name
                  {sortDirection === 'asc' ? <ArrowUp size={14} /> : 
                   sortDirection === 'desc' ? <ArrowDown size={14} /> : 
                   <ArrowUpDown size={14} color="#ccc" />}
                </div>
              </th>
              <th>Email</th>
              <th>Company Name</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedUsers.length > 0 ? (
              filteredAndSortedUsers.map(user => (
                <tr key={user.id}>
                  <td className="font-medium">{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.company.name}</td>
                  <td>{user.address.city}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="empty-state">No users found matching your criteria.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDataTable;
