

$(function () {






      var square = document.querySelector('.square');
      var pop = document.querySelector('.pop');
      square.addEventListener('click', function () {
        square.classList.toggle('active');
        pop.classList.toggle('active');
      })




      var $cont = document.querySelector('.cont');
      var $elsArr = [].slice.call(document.querySelectorAll('.el'));
      var $closeBtnsArr = [].slice.call(document.querySelectorAll('.closeBtn'));

      setTimeout(function () {
        $cont.classList.remove('s--inactive');
      }, 200);

      $elsArr.forEach(function ($el) {
        $el.addEventListener('click', function () {
          if (this.classList.contains('s--active')) return;
          $cont.classList.add('s--el-active');
          this.classList.add('s--active');
        });
      });

      $closeBtnsArr.forEach(function ($btn) {
        $btn.addEventListener('click', function (e) {
          e.stopPropagation();
          $cont.classList.remove('s--el-active');
          document.querySelector('.el.s--active').classList.remove('s--active');
        });
      });


      var liEle = document.querySelectorAll('.dt_main .dt_m2 figure');
      var winH = window.innerHeight;
      window.addEventListener('scroll', fadeFun);
      function fadeFun() {
        liEle.forEach(function (el, idx) {
          if (el.offsetTop - winH < this.scrollY) {
            el.classList.add('active');
          } else {
            el.classList.remove('active');
          }
        });
      }
    


    });
