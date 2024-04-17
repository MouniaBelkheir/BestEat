import SingleHeadlineCard from "./SingleHeadlineCard";

function HeadlineCards() {
	const foods = [
		{
			name: "Best Food Choices",
			detail: "Through 4/1",
			image:
				"https://images.unsplash.com/photo-1628294896516-344152572ee8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			name: "New Restaurants",
			detail: "Added daily",
			image:
				"https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			name: "We Deliver Desserts",
			detail: "Tasty Treats",
			image:
				"https://images.unsplash.com/photo-1492683513054-55277abccd99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
	];
	return (
		<div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 ">
			{/* Card */}
			{foods.map((food, index) => (
				<SingleHeadlineCard
					key={index}
					name={food.name}
					detail={food.detail}
					image={food.image}
				/>
			))}
		</div>
	);
}

export default HeadlineCards;
