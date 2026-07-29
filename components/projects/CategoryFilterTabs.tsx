interface CategoryFilterTabsProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export default function CategoryFilterTabs({
  categories,
  selected,
  onSelect,
}: CategoryFilterTabsProps) {
  return (
    <div className="mb-10 flex justify-center overflow-x-auto pb-1">
      <div className="flex gap-1 border-b-2 border-card">
        {categories.map((category) => {
          const isActive = category === selected;
          return (
            <button
              key={category}
              type="button"
              onClick={() => onSelect(category)}
              className={`relative cursor-pointer whitespace-nowrap px-5 py-2.5 text-base font-semibold transition-colors duration-200 after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-blue-600 after:transition-transform after:duration-300 after:content-[''] hover:text-blue-600 ${
                isActive ? "text-blue-600 after:scale-x-100" : "text-muted after:scale-x-0"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
