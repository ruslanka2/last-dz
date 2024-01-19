const accessKey = '2Vx1DWEw7nS2DvtZBFJhW5tSh2sRRk-tjKzQMBTpb_Q';

// Получение случайного изображения и информации о фотографе
function getRandomImage() {
  fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}`)
    .then(response => response.json())
    .then(data => {
      const image = data.urls.regular;
      const photographer = data.user.name;

      // Отображение изображения и информации о фотографе
      document.getElementById('image').src = image;
      document.getElementById('photographer').textContent = `Photographer: ${photographer}`;
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

// Получение текущего количества лайков из локального хранилища или установка значения по умолчанию
let likeCount = parseInt(localStorage.getItem('likeCount')) || 0;
document.getElementById('like-count').textContent = `${likeCount} Likes`;

// Обработчик нажатия на кнопку "лайк"
document.getElementById('like-button').addEventListener('click', function() {
  likeCount++;
  document.getElementById('like-count').textContent = `${likeCount} Likes`;
  localStorage.setItem('likeCount', likeCount);
});

// Загрузка случайного изображения при загрузке страницы
getRandomImage();