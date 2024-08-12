import { BranchData } from "../../../services/dto/branch";

  export const branchData: BranchData[] = [
    {
      code: "001",
      name: "Main Branch",
      description: "Primary branch located in downtown.",
      address: "123 Main St, Downtown",
      phone_number: "555-1234",
      fax: "555-5678",
      email: "main@branch.com",
      city: "Metropolis",
      isActive: true,
    },
    {
      code: "002",
      name: "Secondary Branch",
      description: "Branch located in the suburban area.",
      address: "456 Elm St, Suburbia",
      phone_number: "555-8765",
      fax: "555-4321",
      email: "secondary@branch.com",
      city: "Metropolis",
      isActive: false,
    },
    // Add more mock branches as needed
  ];
  
  // Mock function to simulate fetching branches
  export const mockFetchBranches = async (code: string, name: string) => {
    // Simulate a network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Filter the mock data based on the code and name
    return branchData.filter(branch => 
      (code ? branch.code.includes(code) : true) && 
      (name ? branch.name.includes(name) : true)
    );
  };
  
  // Mock function to simulate fetching branch detail
  export const mockFetchBranchDetail = async (code: string) => {
    // Simulate a network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Find and return the branch detail by code
    return branchData.find(branch => branch.code === code);
  };
  