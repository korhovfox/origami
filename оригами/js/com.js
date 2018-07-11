  
document.onreadystatechange =  (function() {

  var animTimer; 
  var form1 = document.getElementById('form1');
  function animate() {
    //можно еще тут замедллить
    // animTimer = setInterval(function () {

     if(!form1.classList.contains('active')){
      form1.classList.add('active');
    }
   // },1000)
 }

 
//счетчик расстояния до верха от элемента(не до верха родителя!!!)
function getElementPosition(elem){

  var t = 0;

  while (elem)
  {

    t += elem.offsetTop;
    elem = elem.offsetParent;
  }

  return t;
}

window.onscroll = function () {

  let hForm1 = getElementPosition(form1);

      //тут как угодно проверяем растояние до верха
      //можно и без функции getElementPosition расстояния до верха
      if(scrollY > hForm1-1200) animate();
    }


  })();
