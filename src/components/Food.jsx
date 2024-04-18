import { data } from "./data/data";

const Food = () => {
	console.log(data);
	return (
		<div className="max-w-[1640px] m-auto px-4 py-12">
			<h1 className="text-orange-600 font-bold text-4xl text-center">
				Top Rated Menu Items
			</h1>
			{/* Filter Row */}
			<div className="flex flex-col lg:flex-row justify-evenly ">
				{/* Filter Type */}
				<div>
					<p className="font-bold text-gray-700">Filter Type</p>
					<div className="flex justify-between flex-wrap max-w-[600px] w-full mx-auto">
						<button className="border-orange-600 text-orange-600 hover:bg-orange-400 hover:text-white m-1">
							All
						</button>
						<button className="border-orange-600 text-orange-600 hover:bg-orange-400 hover:text-white m-1">
							Burger
						</button>
						<button className="border-orange-600 text-orange-600 hover:bg-orange-400 hover:text-white m-1">
							Pizza
						</button>
						<button className="border-orange-600 text-orange-600 hover:bg-orange-400 hover:text-white m-1">
							Salad
						</button>
						<button className="border-orange-600 text-orange-600 hover:bg-orange-400 hover:text-white m-1">
							Chicken
						</button>
					</div>
				</div>
				{/* Filter Price */}
				<div>
					<p className="font-bold text-gray-700">filter Price</p>
					<div className="flex justify-between flex-wrap max-w-[390px] w-full mx-auto">
						<button className="border-orange-600 text-orange-600 hover:bg-orange-400 hover:text-white m-1">
							$
						</button>
						<button className="border-orange-600 text-orange-600 hover:bg-orange-400 hover:text-white m-1">
							$$
						</button>
						<button className="border-orange-600 text-orange-600 hover:bg-orange-400 hover:text-white m-1">
							$$$
						</button>
						<button className="border-orange-600 text-orange-600 hover:bg-orange-400 hover:text-white m-1">
							$$$$
						</button>
					</div>
				</div>
            </div>
            <div>
                {/* display foods */}
                
            </div>
		</div>
	);
};

export default Food;
