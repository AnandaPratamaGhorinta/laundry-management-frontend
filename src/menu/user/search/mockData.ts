export const content = [
    { outlet: "Outlet 001", name: "Machine 1",  code: "MCH01" ,type :"Washer" },
    { outlet: "Outlet 002", name: "Machine 2",  code: "MCH02" ,type :"Washer"},
    { outlet: "Outlet 003", name: "Machine 3",  code: "MCH03",type :"Dryer"},
    // Add more mock data as needed
  ];
  
  export const mockFetchBranches = (filterCode = "", filterName = "" , filterOutlet ="") => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredData = content.filter((branch) => {
          return (
            branch.code.includes(filterCode) && branch.name.includes(filterName)&& branch.outlet.includes(filterOutlet)
          );
        });
        resolve(filteredData);
      }, 500); // Simulate network delay
    });
  };
  