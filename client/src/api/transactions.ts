// import api from "./axios";

/**
 * Transactions API Functions
 *
 * TODO: Implement API call to fetch transactions
 * TODO: Add pagination parameters
 * TODO: Add filter parameters
 */

export interface Transaction {
  _id: string;
  type: "income" | "expense";
  amount: number;
  category: string;
  description: string;
  date: string;
}

export interface TransactionFilters {
  type?: "income" | "expense";
  category?: string;
  startDate?: string;
  endDate?: string;
  page?: number;
  limit?: number;
}

// TODO: Implement API call to fetch transactions
export const getTransactions = async (_filters?: TransactionFilters): Promise<Transaction[]> => {
  // const response = await api.get("/transactions", { params: filters });
  // return response.data;
  throw new Error("Not implemented yet");
};

// TODO: Implement API call to create transaction
export const createTransaction = async (_data: Omit<Transaction, "_id">): Promise<Transaction> => {
  // const response = await api.post("/transactions", data);
  // return response.data;
  throw new Error("Not implemented yet");
};

// TODO: Implement API call to update transaction
export const updateTransaction = async (
  _id: string,
  _data: Partial<Transaction>
): Promise<Transaction> => {
  // const response = await api.put(`/transactions/${id}`, data);
  // return response.data;
  throw new Error("Not implemented yet");
};

// TODO: Implement API call to delete transaction
export const deleteTransaction = async (_id: string): Promise<void> => {
  // await api.delete(`/transactions/${id}`);
  throw new Error("Not implemented yet");
};
