import { useState } from "react";
import { data } from "./data/data";

const Food = () => {
	const [foods, setFoods] = useState(data);
	// Filter Type burgers/pizza/etc
	const filterType = (category) => {
		setFoods(
			data.filter((item) => {
				return item.category === category;
			})
		);
	};
	// Filter by Price
	const filterPrice = (price) => {
		setFoods(
			data.filter((item) => {
				return item.price === price;
			})
		);
	};
	return (
		<div className="max-w-[1640px] m-auto px-4 py-12">
			<h1 className="text-orange-600 font-bold text-4xl text-center pb-6">
				Top Rated Menu Items
			</h1>
			{/* Filter Row */}
			<div className="flex flex-col lg:flex-row justify-evenly ">
				{/* Filter Type */}
				<div>
					<p className="font-bold text-gray-700 pb-3">Filter Type</p>
					<div className="flex justify-between flex-wrap max-w-[600px] w-full mx-auto">
						<button
							onClick={() => setFoods(data)}
							className="border-orange-600 text-orange-600 hover:bg-orange-400 hover:text-white m-1">
							All
						</button>
						<button
							onClick={() => filterType("burger")}
							className="border-orange-600 text-orange-600 hover:bg-orange-400 hover:text-white m-1">
							Burger
						</button>
						<button
							onClick={() => filterType("pizza")}
							className="border-orange-600 text-orange-600 hover:bg-orange-400 hover:text-white m-1">
							Pizza
						</button>
						<button
							onClick={() => filterType("salad")}
							className="border-orange-600 text-orange-600 hover:bg-orange-400 hover:text-white m-1">
							Salad
						</button>
						<button
							onClick={() => filterType("chicken")}
							className="border-orange-600 text-orange-600 hover:bg-orange-400 hover:text-white m-1">
							Chicken
						</button>
					</div>
				</div>
				{/* Filter Price */}
				<div>
					<p className="font-bold text-gray-700 pb-3">filter Price</p>
					<div className="flex justify-between flex-wrap max-w-[390px] w-full mx-auto">
						<button
							onClick={() => filterPrice("$")}
							className="border-orange-600 text-orange-600 hover:bg-orange-400 hover:text-white m-1">
							$
						</button>
						<button
							onClick={() => filterPrice("$$")}
							className="border-orange-600 text-orange-600 hover:bg-orange-400 hover:text-white m-1">
							$$
						</button>
						<button
							onClick={() => filterPrice("$$$")}
							className="border-orange-600 text-orange-600 hover:bg-orange-400 hover:text-white m-1">
							$$$
						</button>
						<button
							onClick={() => filterPrice("$$$$")}
							className="border-orange-600 text-orange-600 hover:bg-orange-400 hover:text-white m-1">
							$$$$
						</button>
					</div>
				</div>
			</div>
			{/* display foods */}
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 ">
				{foods.map((item, index) => (
					<div
						key={index}
						className="border shadow-lg hover:scale-105 duration-300 rounded-lg ">
						<img
							src={item.image}
							alt={item.name}
							className="w-full h-48 object-cover rounded-t-lg"
						/>
						<div className="bg-zinc-200 flex justify-between px-3 py-4">
							<p className="font-bold">{item.name}</p>
							<p>
								<span className="bg-orange-400 text-white p-1 rounded-full">
									{item.price}
								</span>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Food;
