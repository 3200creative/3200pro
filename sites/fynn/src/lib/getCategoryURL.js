function getCategoryURL(category, pageNum) {
    return pageNum === 0
      ? "/" + category.slug.current
      : "/" + category.slug.current + "/" + (pageNum + 1);
  }
  
  module.exports = {
    getCategoryURL: getCategoryURL,
  };