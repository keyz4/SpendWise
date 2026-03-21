/**
 * Budget Page
 *
 * TODO: Fetch budgets from backend
 * TODO: Implement create/edit budget modal
 * TODO: Calculate spent amounts from transactions
 * TODO: Add budget alerts when nearing/exceeding limit
 */

// TODO: Replace mock data with API data
const mockBudgets = [
  { id: 1, category: "Food", amount: 500, spent: 320, period: "monthly" },
  { id: 2, category: "Transport", amount: 200, spent: 180, period: "monthly" },
  { id: 3, category: "Entertainment", amount: 150, spent: 45, period: "monthly" },
  { id: 4, category: "Utilities", amount: 300, spent: 275, period: "monthly" },
  { id: 5, category: "Health", amount: 100, spent: 50, period: "monthly" },
];

export default function Budget() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Budget</h1>
          <p className="text-sm text-gray-500">Track and manage your spending limits</p>
        </div>
        {/* TODO: Implement Create Budget modal */}
        <button className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700">
          + Create Budget
        </button>
      </div>

      {/* Budget Cards */}
      {/* TODO: Replace mock data with API data */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockBudgets.map((budget) => {
          const percentage = Math.round((budget.spent / budget.amount) * 100);
          const isOver = percentage >= 90;
          const isWarning = percentage >= 70 && percentage < 90;

          return (
            <div
              key={budget.id}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-900">{budget.category}</h3>
                <span className="text-xs font-medium capitalize text-gray-500">
                  {budget.period}
                </span>
              </div>
              <div className="mt-3">
                <div className="flex items-end justify-between">
                  <p className="text-2xl font-bold text-gray-900">
                    ${budget.spent.toFixed(0)}
                  </p>
                  <p className="text-sm text-gray-500">of ${budget.amount.toFixed(0)}</p>
                </div>
                {/* Progress Bar */}
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-100">
                  <div
                    className={`h-full rounded-full transition-all ${
                      isOver
                        ? "bg-red-500"
                        : isWarning
                          ? "bg-yellow-500"
                          : "bg-indigo-500"
                    }`}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  />
                </div>
                <p
                  className={`mt-2 text-xs font-medium ${
                    isOver
                      ? "text-red-600"
                      : isWarning
                        ? "text-yellow-600"
                        : "text-gray-500"
                  }`}
                >
                  {percentage}% used
                  {isOver && " — Budget almost exceeded!"}
                  {isWarning && " — Approaching limit"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
