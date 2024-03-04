type CategoriesProps = {
	categories: {
		id: string,
		category: string
	}[]
};

const Categories = ({ categories }: CategoriesProps) => {
	return (
		<div className="fixed top-2 bg-white shadow-2xl p-8 text-wrap rounded-2xl right-6 w-1/4">
			<h3 className="text-2xl">{'Kategori Populer'}</h3>
			<div className="mt-5 flex flex-wrap justify-between">
				{categories.map((category) => (
					<span
						key={category.id}
						className="bg-slate-200 py-2 px-4 rounded-full mt-2 cursor-pointer"
					>{`#${category.category}`}
					</span>
				))}
			</div>
		</div>
	);
};

export default Categories;
