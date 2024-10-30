"use client";

import { Autocomplete, AutocompleteOption } from "@yamada-ui/react";
import { useRouter } from "next/router";
import { Category } from "~/types/blog";

type CategorySelectorProps = {
	categories: { id: string; name: string }[];
	selectedCategory: string;
};

export const CategorySelector: React.FC<CategorySelectorProps> = ({
	categories,
	selectedCategory,
}) => {
	const router = useRouter();
	const handleCategoryChange = (value: string) => {
		router.push(`?category=${value}`);
	};

	return (
		<Autocomplete
			placeholder="カテゴリ選択"
			defaultValue={selectedCategory}
			onChange={handleCategoryChange}
		>
			{categories.map((category) => (
				<AutocompleteOption key={category.id} value={category.name}>
					{category.name}
				</AutocompleteOption>
			))}
		</Autocomplete>
	);
};
