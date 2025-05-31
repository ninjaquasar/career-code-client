import { useEffect, useState } from "react";
import CategoryCard from "../shared/CategoryCard";
import { Link } from "react-router";

const HotCategories = () => {
	const [categories, setCategories] = useState();
	useEffect(() => {
		fetch("http://localhost:5100/categories/hot")
			.then((res) => res.json())
			.then((data) => setCategories(data))
			.catch((error) => console.log(error));
	}, []);
	return (
		<section className="max-w-8xl mx-auto mt-24">
			<h2 className="text-4xl font-bold text-center mb-2">Hot Categories</h2>
			<p className="text-lg text-center text-neutral-700">
				Find the job that's perfect for you, categorized beautifully for you. Over 15+
				categories.
			</p>
			<div className="mt-12 mb-8 grid grid-cols-5 gap-5">
				{categories?.map((category) => (
					<CategoryCard
						key={category._id}
						icon={category.icon}
						description={category.description}
					>
						{category.name}
					</CategoryCard>
				))}
			</div>
			<div className="text-center">
				<Link
					to="/categories"
					target="_blank"
				>
					<button
						type="submit"
						className="w-40 py-2 text-2xl font-medium bg-prime text-light hover:bg-blue-500 rounded-xl cursor-pointer"
					>
						View All
					</button>
				</Link>
			</div>
		</section>
	);
};

export default HotCategories;
