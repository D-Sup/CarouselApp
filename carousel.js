
const arrPic = [
];
function loadItems(year){
  return fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=download_count&limit=100;
}`)
// 
    .then(response => response.json())
    .then(json => json.data);
}
const randomValues = [];
function getRandomValue() {
  var randomValue = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
  if (randomValues.includes(randomValue)) {
    return getRandomValue(); // 중복된 값이면 다시 생성
  } else {
    randomValues.push(randomValue);
    return randomValue;
  }
}
// const year = prompt('')
loadItems().then((items) => {
  for(let i=0; i < 10; i++){
    getRandomValue()
    arrPic.push(items.movies[randomValues[i]].large_cover_image);
  }
  console.log(randomValues);
  
  console.log(arrPic);
  loadCarousel()
})

function loadCarousel(){
  const center = document.querySelector('.list-item');

  arrPic.forEach((item) => {
    const elLi = document.createElement('li');
    elLi.innerHTML = `<img src="${item}" alt="" onerror=this.src='https://yts.mx/assets/images/movies/all_hail_the_popcorn_king_2019/large-cover.jpg'>`;
    center.appendChild(elLi);
  })
  
  const items = document.querySelectorAll('.list-item li');
  
  const radius = items[0].offsetWidth * items.length / 3.14 / 2;
  
  items.forEach((item, index) => {
    item.style.transform = `rotateY(${360 / items.length * index}deg) translateZ(${radius}px)`;
  });
  
  const angle = 360 / items.length;
  let currAngle = 0;
  
  document.addEventListener('click', function (event) {
    // 화면 오른쪽을 눌렀을 경우
    if (window.innerWidth / 2 < event.clientX) {
      currAngle += angle;
  
      // 화면 왼쪽을 눌렀을 경우
    } else {
      currAngle -= angle;
    }
    center.style.transform = `translate(-50%, -50%) rotateY(${currAngle}deg)`;
  });
}


