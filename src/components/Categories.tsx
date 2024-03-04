import { asyncClearCategory, asyncSetCategory } from '@/redux/category/action';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';

type CategoriesProps = {
	categories: string[]
};

const Categories = ({ categories }: CategoriesProps) => {
	const category: string = useAppSelector((states: RootState) => states.category);
	const dispatch = useAppDispatch();

	const handleClickCategory = (value: string) => {
		if (category === value) {
			dispatch(asyncClearCategory());
		} else {
			dispatch(asyncSetCategory(value));
		}
	};

	return (
		<div className="fixed top-2 bg-white shadow-2xl p-8 text-wrap rounded-2xl right-6 w-1/4">
			<h3 className="text-2xl">{'Kategori Populer'}</h3>
			<div className="mt-5 flex flex-wrap">
				{categories.map((value, key) => (
					<span
						key={key}
						onClick={() => handleClickCategory(value)}
						className={`bg-slate-200 py-2 px-4 rounded-full cursor-pointer -mt-1 my-2 -ml-1 mx-2 ${category === value && 'bg-blue-950 text-white'}`}
					>{`#${value}`}
					</span>
				))}
			</div>
		</div>
	);
};

export default Categories;
