

hexo.extend.helper.register('twitter_share_link', function(item){
  const title = item.title;
  const url = encodeURIComponent(item.permalink);
  const via = 'PBDesk';
  const hashTagsArr = [];
  item.categories.forEach(function(category) {
    hashTagsArr.push(category.name);
  });
  item.tags.forEach(function(tag) {
    hashTagsArr.push(tag.name);
  });
  const hashtags = hashTagsArr.join(',');
  return `https://twitter.com/intent/tweet?url=${url}&text=${title}&via=${via}&hashtags=${hashtags}`;
  
});