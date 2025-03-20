export default function Stats({ totalCount }) {
	return (
	  <div className="bg-gray-200 p-4 rounded-lg shadow-md text-center">
		<h2 className="text-lg font-semibold">Statistics</h2>
		<p className="mt-2">Total Clicks: {totalCount}</p>
	  </div>
	);
  }
  