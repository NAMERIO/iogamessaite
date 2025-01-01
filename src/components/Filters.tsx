import React from "react";

interface FiltersProps {
  genres: string[];
  selectedGenre: string;
  searchQuery: string;
  sortOption: string;
  onGenreChange: (genre: string) => void;
  onSearchChange: (query: string) => void;
  onSortChange: (option: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  genres,
  selectedGenre,
  searchQuery,
  sortOption,
  onGenreChange,
  onSearchChange,
  onSortChange,
}) => {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search games..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select value={sortOption} onChange={(e) => onSortChange(e.target.value)}>
        <option value="alphabetical">Alphabetical</option>
        <option value="date">New</option>
      </select>
    </div>
  );
};

export default Filters;
