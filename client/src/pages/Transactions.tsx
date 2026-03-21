/**
 * Transactions Page
 *
 * TODO: Fetch transactions from backend
 * TODO: Implement Add Transaction modal
 * TODO: Implement filter logic (type, category, date range)
 * TODO: Implement pagination
 * TODO: Implement edit/delete actions
 */

// TODO: Replace mock data with API data
const mockTransactions = [
  { id: 1, description: "Grocery Store", category: "Food", type: "expense", amount: 85.50, date: "2025-03-21" },
  { id: 2, description: "Salary Deposit", category: "Income", type: "income", amount: 3200.00, date: "2025-03-20" },
  { id: 3, description: "Electric Bill", category: "Utilities", type: "expense", amount: 125.00, date: "2025-03-19" },
  { id: 4, description: "Freelance Project", category: "Income", type: "income", amount: 800.00, date: "2025-03-18" },
  { id: 5, description: "Restaurant Dinner", category: "Food", type: "expense", amount: 45.00, date: "2025-03-17" },
  { id: 6, description: "Gym Membership", category: "Health", type: "expense", amount: 50.00, date: "2025-03-16" },
  { id: 7, description: "Netflix Subscription", category: "Entertainment", type: "expense", amount: 15.99, date: "2025-03-15" },
  { id: 8, description: "Gas Station", category: "Transport", type: "expense", amount: 60.00, date: "2025-03-14" },
];

export default function Transactions() {
  // TODO: Add state for filters, pagination, and modal
  // const [transactions, setTransactions] = useState([]);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [filters, setFilters] = useState({});

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
          <p className="text-sm text-gray-500">Manage your income and expenses</p>
        </div>
        {/* TODO: Implement Add Transaction modal */}
        <button className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700">
          + Add Transaction
        </button>
      </div>

      {/* Filters */}
      {/* TODO: Implement filter logic */}
      <div className="flex flex-wrap items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">Type:</label>
          <select className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
            <option value="">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">Category:</label>
          <select className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
            <option value="">All Categories</option>
            <option value="food">Food</option>
            <option value="utilities">Utilities</option>
            <option value="transport">Transport</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">From:</label>
          <input
            type="date"
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">To:</label>
          <input
            type="date"
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        {/* TODO: Add search input */}
        <button className="ml-auto rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
          Reset Filters
        </button>
      </div>

      {/* Transactions Table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                Date
              </th>
              <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {/* TODO: Replace mock data with API data */}
            {mockTransactions.map((tx) => (
              <tr key={tx.id} className="transition-colors hover:bg-gray-50">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  {tx.description}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <span className="inline-flex rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700">
                    {tx.category}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      tx.type === "income"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {tx.type}
                  </span>
                </td>
                <td
                  className={`whitespace-nowrap px-6 py-4 text-sm font-semibold ${
                    tx.type === "income" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {tx.type === "income" ? "+" : "-"}${tx.amount.toFixed(2)}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {tx.date}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm">
                  {/* TODO: Implement edit/delete actions */}
                  <button className="mr-3 font-medium text-indigo-600 hover:text-indigo-700">
                    Edit
                  </button>
                  <button className="font-medium text-red-600 hover:text-red-700">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        {/* TODO: Implement pagination */}
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-6 py-3">
          <p className="text-sm text-gray-500">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">8</span> of{" "}
            <span className="font-medium">8</span> results
          </p>
          <div className="flex gap-2">
            <button
              disabled
              className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-400"
            >
              Previous
            </button>
            <button
              disabled
              className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-400"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
