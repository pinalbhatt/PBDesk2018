const getShareData = (item) => {
  const hashTagsArr = [];
  item.categories.forEach(function(category) {
    hashTagsArr.push(category.name);
  });
  item.tags.forEach(function(tag) {
    hashTagsArr.push(tag.name);
  });
  const hashtags = hashTagsArr.join(',');
  return {
    title: item.title,
    url: encodeURIComponent(item.permalink),
    via: 'PBDesk',
    hashtags: hashtags
  }
};

hexo.extend.helper.register('twitter_share_link', function(item){
  const d = getShareData(item);
  return `https://twitter.com/intent/tweet?url=${d.url}&text=${d.title}&via=${d.via}&hashtags=${d.hashtags}`;
});

hexo.extend.helper.register('facebook_share_link', function(item){
  const d = getShareData(item);
  return `https://www.facebook.com/sharer.php?u=${d.url}`;
});

hexo.extend.helper.register('googleplus_share_link', function(item){
  const d = getShareData(item);
  return `https://plus.google.com/share?url=${d.url}`;
});

hexo.extend.helper.register('linkedin_share_link', function(item){
  const d = getShareData(item);
  return `https://www.linkedin.com/shareArticle?url=${d.url}&title=${d.title}`;
});