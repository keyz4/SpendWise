/**
 * Insights Page
 *
 * TODO: Implement spending analytics using Recharts
 * TODO: Add monthly comparison charts
 * TODO: Add category breakdown visualization
 * TODO: Fetch analytics data from backend
 */

export default function Insights() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Insights</h1>
        <p className="text-sm text-gray-500">Analyze your spending patterns and trends</p>
      </div>

      {/* TODO: Implement analytics charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Monthly Trends */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Monthly Trends</h3>
          <p className="text-sm text-gray-500">Income vs Expenses over time</p>
          <div className="mt-4 flex h-64 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
            <div className="text-center">
              <p className="text-4xl">📈</p>
              <p className="mt-2 text-sm font-medium text-gray-500">
                Chart Placeholder
              </p>
              <p className="text-xs text-gray-400">
                TODO: Implement using Recharts
              </p>
            </div>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Category Breakdown</h3>
          <p className="text-sm text-gray-500">Where your money goes</p>
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

        {/* Savings Rate */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Savings Rate</h3>
          <p className="text-sm text-gray-500">Your savings percentage over time</p>
          <div className="mt-4 flex h-64 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
            <div className="text-center">
              <p className="text-4xl">💹</p>
              <p className="mt-2 text-sm font-medium text-gray-500">
                Chart Placeholder
              </p>
              <p className="text-xs text-gray-400">
                TODO: Implement using Recharts
              </p>
            </div>
          </div>
        </div>

        {/* Top Expenses */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Top Expenses</h3>
          <p className="text-sm text-gray-500">Your biggest spending categories</p>
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
      </div>
    </div>
  );
}
