export default function Button({ handler, type, label }) {
	return (
		<button
			onClick={handler}
			className={`px-4 py-2 btn ${
				type === "btn-success" ? "btn-success" : "btn-error"
			} text-white rounded-md`}
		>
			{label}
		</button>
	);
}
