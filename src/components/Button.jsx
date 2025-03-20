export default function Button({ handler, label }) {
	return (
	  <button
		onClick={handler}
		className="px-4 py-2 btn btn-primary text-white rounded-md"
	  >
		{label}
	  </button>
	);
  }
  