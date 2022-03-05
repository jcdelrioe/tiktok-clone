export const Heart = ({ fill = "currentColor" }) => {
	return (
		<svg width="56" height="56" viewBox="0 0 12 20">
			<path
				id="path"
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
				fill={fill}
			/>
		</svg>
	);
};
