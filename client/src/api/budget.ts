// import api from "./axios";

/**
 * Budget API Functions
 *
 * TODO: Implement API calls for budget CRUD
 */

export interface Budget {
  _id: string;
  category: string;
  amount: number;
  spent: number;
  period: "weekly" | "monthly" | "yearly";
  startDate: string;
  endDate: string;
}

// TODO: Implement API call to fetch budgets
export const getBudgets = async (): Promise<Budget[]> => {
  // const response = await api.get("/budget");
  // return response.data;
  throw new Error("Not implemented yet");
};

// TODO: Implement API call to create budget
export const createBudget = async (_data: Omit<Budget, "_id" | "spent">): Promise<Budget> => {
  // const response = await api.post("/budget", data);
  // return response.data;
  throw new Error("Not implemented yet");
};

// TODO: Implement API call to update budget
export const updateBudget = async (
  _id: string,
  _data: Partial<Budget>
): Promise<Budget> => {
  // const response = await api.put(`/budget/${id}`, data);
  // return response.data;
  throw new Error("Not implemented yet");
};

// TODO: Implement API call to delete budget
export const deleteBudget = async (_id: string): Promise<void> => {
  // await api.delete(`/budget/${id}`);
  throw new Error("Not implemented yet");
};
