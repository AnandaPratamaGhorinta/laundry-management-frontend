export const branchData = [
    { code: "001", name: "Outlet 1", isActive: true },
    { code: "002", name: "Outlet 2", isActive: false },
    { code: "003", name: "Outlet 3", isActive: true },
    // Add more mock data as needed
  ];
  
  export const mockFetchBranches = (filterCode = "", filterName = "") => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredData = branchData.filter((branch) => {
          return (
            branch.code.includes(filterCode) && branch.name.includes(filterName)
          );
        });
        resolve(filteredData);
      }, 500); // Simulate network delay
    });
  };
  