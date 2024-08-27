import { createContext, useState } from "react";

//Create context
export const FiltersContext = createContext();


//Create provider to use context
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  });

  return(

    <FiltersContext.Provider value={{
        filters,
        setFilters

    }}>
    
        {children}
    </FiltersContext.Provider>
  )
}