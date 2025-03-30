import { Category } from '@/types/blog';

interface BlogCategoriesProps {
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
}

export default function BlogCategories({ selectedCategory, onCategorySelect }: BlogCategoriesProps) {
  const categories: Category[] = [
    { id: 'all', name: 'All', active: selectedCategory === 'all' },
    { id: 'tech', name: 'Technology', active: selectedCategory === 'tech' },
    { id: 'programming', name: 'Programming', active: selectedCategory === 'programming' },
    { id: 'web-dev', name: 'Web Development', active: selectedCategory === 'web-dev' },
  ];

  return (
    <div className="my-8">
      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`px-4 py-2 rounded-full transition-colors ${
              category.active
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
} 