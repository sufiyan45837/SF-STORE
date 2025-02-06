import { useState } from "react";

const SearchFilter = () => {
  const [query, setQuery] = useState("");

  const items = [
 ""
  ];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className=" max-w-md mx-auto ">
      {/* Search Input */}
      <div className="relative w-full">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="px-4 py-2 w-full border rounded-md shadow text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Filtered List */}
      <ul className="mt-3 bg-white border rounded-md shadow-md " style={{display:"none"}}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index} className="p-2 border-b last:border-none">
              {item}
            </li>
          ))
        ) : (
          <li className="p-2 text-gray-500">No results found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchFilter;
