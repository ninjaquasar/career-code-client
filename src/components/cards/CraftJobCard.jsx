import CraftJobForm from "../forms/CraftJobForm";

const CraftJobCard = () => {
	return (
		<div className="w-3xl border border-neutral-200 bg-neutral-100 rounded-3xl p-8">
			{/* Heading text */}
			<h2 className="text-4xl font-bold text-center text-prime mb-12">Craft A Job</h2>
			{/* Form for crafting job */}
			<CraftJobForm />
		</div>
	);
};

export default CraftJobCard;
