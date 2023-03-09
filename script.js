// 获取按钮元素
const button = document.querySelector('button');

// 获取文本框元素
const input = document.querySelector('input[type="text"]');

// 获取图片元素
const img = document.querySelector('img');

// 为按钮元素添加点击事件监听器
button.addEventListener('click', function() {
  // 获取文本框中的值
  const searchTerm = input.value;

  // 使用搜索词作为API请求参数
  fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=YOUR_ACCESS_KEY`)
    .then(response => response.json())
    .then(data => {
      // 获取返回的第一张图片
      const imageUrl = data.results[0].urls.regular;

      // 更新图片元素的src属性
      img.src = imageUrl;
    })
    .catch(error => console.error(error));
});
