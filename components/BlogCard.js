function BlogCard({ post, currentLanguage }) {
  try {
    const handleCardClick = () => {
      window.location.href = `blog-post.html?id=${post.id}`;
    };

    const lang = currentLanguage || localStorage.getItem('currentLanguage') || 'es';
    const title = typeof post.title === 'object' ? (post.title[lang] || post.title.es) : post.title;
    const excerpt = typeof post.excerpt === 'object' ? (post.excerpt[lang] || post.excerpt.es) : post.excerpt;

    return (
      <article className="card group cursor-pointer" onClick={handleCardClick} data-name="blog-card" data-file="components/BlogCard.js">
        <div className="aspect-video overflow-hidden rounded-t-lg">
          <img
            src={post.image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: 'var(--primary-color)',
                color: 'white'
              }}
            >
              {post.category}
            </span>
            <time className="text-sm" style={{color: 'var(--text-secondary)'}}>
              {post.date}
            </time>
          </div>
          <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-[var(--primary-color)] transition-colors" style={{color: 'var(--text-primary)'}}>
            {title}
          </h2>
          <p className="text-sm line-clamp-3 mb-4" style={{color: 'var(--text-secondary)'}}>
            {excerpt}
          </p>
          <div className="flex items-center">
            {/* Tags (si existen) */}
            <div className="flex flex-wrap gap-2">
              {post.tags && post.tags.map((tag, idx) => (
                <span key={idx} className="px-2 py-1 text-xs rounded-full border" style={{borderColor:'var(--border-color)', color:'var(--text-secondary)'}}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    );
  } catch (error) {
    console.error('BlogCard component error:', error);
    return null;
  }
}