import './CategoryNav.css';

function CategoryNav({ categories }) {
  const handleClick = (cat) => {
    const el = document.getElementById(cat.replace(/\s+/g, "-"));
    if (el) {
      const yOffset = -130; // adjust based on total height of sticky navs
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="category-nav">
      {categories.map((cat) => (
        <button key={cat} onClick={() => handleClick(cat)}>
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryNav;
