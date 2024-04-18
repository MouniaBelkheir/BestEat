import PropTypes from "prop-types";
const SingleHeadlineCard = ({ name, image, detail }) => {
	return (
		<div className="rounded-xl relative">
			{/* Overlay */}
			<div className="absolute w-full h-full bg-black/50 text-white rounded-xl">
				<p className="font-bold text-2xl px-2 pt-4">{name}</p>
				<p className="px-2">{detail}</p>
				<button className=" absolute border-orange-400 bg-orange-400 text-black mx-2 bottom-5 right-4 ">
					Order Now
				</button>
			</div>
			<img
				src={image}
				alt="Burger"
				className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
			/>
		</div>
	);
};
{
	SingleHeadlineCard.propTypes = {
		image: PropTypes.elementType,
		name: PropTypes.string,
		detail: PropTypes.string,
	};
}

export default SingleHeadlineCard;
