/**
 * Dashboard Page — Partially implemented
 *
 * TODO: Fetch transactions from backend
 * TODO: Implement charts using Recharts
 * TODO: Replace mock data with API data
 * TODO: Calculate real summary values from transaction data
 */

// ─── Mock Data (Replace with API data) ──────────────────
const summaryCards = [
  { title: "Total Balance", value: "$12,450.00", change: "+2.5%", positive: true, icon: "💰" },
  { title: "Income", value: "$5,200.00", change: "+12.3%", positive: true, icon: "📈" },
  { title: "Expenses", value: "$3,750.00", change: "-4.1%", positive: false, icon: "📉" },
  { title: "Savings", value: "$1,450.00", change: "+8.7%", positive: true, icon: "🏦" },
];

// TODO: Replace mock data with API data
const recentTransactions = [
  { id: 1, description: "Grocery Store", category: "Food", amount: -85.50, date: "2025-03-21", type: "expense" },
  { id: 2, description: "Salary Deposit", category: "Income", amount: 3200.00, date: "2025-03-20", type: "income" },
  { id: 3, description: "Electric Bill", category: "Utilities", amount: -125.00, date: "2025-03-19", type: "expense" },
  { id: 4, description: "Freelance Project", category: "Income", amount: 800.00, date: "2025-03-18", type: "income" },
  { id: 5, description: "Restaurant", category: "Food", amount: -45.00, date: "2025-03-17", type: "expense" },
  { id: 6, description: "Gym Membership", category: "Health", amount: -50.00, date: "2025-03-16", type: "expense" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500">Overview of your financial activity</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map((card) => (
          <div
            key={card.title}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-500">{card.title}</p>
              <span className="text-2xl">{card.icon}</span>
            </div>
            <p className="mt-2 text-2xl font-bold text-gray-900">{card.value}</p>
            <p
              className={`mt-1 text-sm font-medium ${
                card.positive ? "text-green-600" : "text-red-600"
              }`}
            >
              {card.change} from last month
            </p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      {/* TODO: Implement charts using Recharts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Spending Trends</h3>
          <p className="text-sm text-gray-500">Monthly spending over time</p>
          {/* TODO: Implement line/bar chart using Recharts */}
          <div className="mt-4 flex h-64 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
            <div className="text-center">
              <p className="text-4xl">📊</p>
              <p className="mt-2 text-sm font-medium text-gray-500">
                Chart Placeholder
              </p>
              <p className="text-xs text-gray-400">
                TODO: Implement using Recharts
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Spending by Category</h3>
          <p className="text-sm text-gray-500">Where your money goes</p>
          {/* TODO: Implement pie/donut chart using Recharts */}
          <div className="mt-4 flex h-64 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
            <div className="text-center">
              <p className="text-4xl">🥧</p>
              <p className="mt-2 text-sm font-medium text-gray-500">
                Chart Placeholder
              </p>
              <p className="text-xs text-gray-400">
                TODO: Implement using Recharts
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-200 p-5">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
            <p className="text-sm text-gray-500">Your latest financial activity</p>
          </div>
          <a
            href="/transactions"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            View all →
          </a>
        </div>
        {/* TODO: Fetch transactions from backend */}
        <div className="divide-y divide-gray-100">
          {recentTransactions.map((tx) => (
            <div key={tx.id} className="flex items-center justify-between px-5 py-4">
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-lg ${
                    tx.type === "income"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {tx.type === "income" ? "↗" : "↘"}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{tx.description}</p>
                  <p className="text-xs text-gray-500">{tx.category}</p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={`text-sm font-semibold ${
                    tx.type === "income" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {tx.type === "income" ? "+" : ""}
                  ${Math.abs(tx.amount).toFixed(2)}
                </p>
                <p className="text-xs text-gray-500">{tx.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
