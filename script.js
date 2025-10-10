
// 手機導覽開合（不改 HTML 結構）
(function(){
  const header = document.querySelector('header');
  const menuBtn = header.querySelector('.menu');
  if(menuBtn){
    menuBtn.addEventListener('click', () => header.classList.toggle('open'));
  }
})();
