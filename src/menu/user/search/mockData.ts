export const content = [
    { user_id: "UUID 001", name: "User 1"},
    { user_id: "UUID 002", name: "User 2"},
    // Add more mock data as needed
  ];
  
  export const mockFetchBranches = (filterCode = "", filterName = "" ) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredData = content.filter((branch) => {
          return (
            branch.user_id.includes(filterCode) && branch.name.includes(filterName)
          );
        });
        resolve(filteredData);
      }, 500); // Simulate network delay
    });
  };
  