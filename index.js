/**
 * Created by Administrator on 2015/12/24.
 */
var main=getEle("#main");
var winH=document.documentElement.clientHeight;
var winW=document.documentElement.clientWidth;
var desH=960;
var desW=640;
if(desW/desW<winW/winH)
{
    main.style.webkitTransform = 'scale('+winW/desW+')';
}else{
    main.style.webkitTransform = 'scale('+winH/desH+')';
}

function getEle(ele)
{
    return document.querySelector(ele);
}
var loginModel=getEle(".login");
var personInfo=getEle(".personInfo");
var loginIcon=getEle(".loginIcon");
var nextBtn=getEle(".personInfo .nextBtn");
var personTil=document.querySelectorAll(".personInfo>span");
var workExp=getEle(".workExp");
var workBtn=getEle(".workBtn");
var cube=getEle(".cube");
var cubeBox = getEle('.cubeBox');
var cubeLis = cubeBox.querySelectorAll('li');
var cubeBtn=getEle('.cubeBtn');
var lastPage=getEle(".lastPage");
var skillInfo=getEle(".skillInfo");
var skillBtn=getEle(".skillBtn");
loginIcon.addEventListener("touchstart",touch,false);
function touch(e)
{
    if(e.target.className=="loginIcon"){
       loginModel.remove();
        personInfo.style.display="block";
        loginIcon.removeEventListener("touchstart",touch,false);
        info.init();
    }

}
var info={
    init:function(){
        nextBtn.addEventListener("touchstart",this.start,false);
    },
  start:function(e){
      if(e.target.className=="nextBtn"){
          personInfo.remove();
          nextBtn.removeEventListener("touchstart",this.start,false);
          skillInfo.style.display="block";
          skillInf.init();
          window.setTimeout(function () {
              var oList = document.querySelectorAll(".skillInfo>div");
              for (var i = 0; i < oList.length; i++) {
                  oList[i].className = "move";
              }
          }, 200);
      }
  }};
var skillInf={
    init:function(){
        skillBtn.addEventListener("touchstart",this.start,false);
    },
    start:function(e){
        if(e.target.className=="skillBtn") {
            skillInfo.remove();
            skillBtn.removeEventListener("touchstart", this.start, false);
            workExp.style.display = "block";
            workInfo.init();
            window.setTimeout(function () {
                var oList = document.querySelectorAll(".workExp>div");
                for (var i = 0; i < oList.length; i++) {
                    oList[i].className = "rotateMy";
                }
            }, 200);
        }
    }

};


var workInfo={
    init:function(){
        workBtn.addEventListener("touchstart",this.move,false);
    },
    move:function(e){
        if(e.target.className=="workBtn")
        {
            workExp.remove();
            workBtn.removeEventListener("touchstart",this.move,false);
            cube.style.display="block";
            window.setTimeout(function(){
                cube.firstElementChild.id="cubeTitle";
            },1000);
            fnCube();
            last.init();
        }

    }
};
function fnCube(){
    var TouchStart = {x:0,y:0};
    var startX = -45;
    var startY = -45;
    var x = 0;
    var y = 0;
    var flag = true;
    cubeBox.style.opacity = 1;
    cubeBox.style.webkitTransform ='scale(0.7) rotateX(-45deg) rotateY(-45deg)';
    cubeBox.addEventListener('webkitTransitionEnd',function(){
        this.style.webkitTransition="";
    },false);
    document.addEventListener('touchestart',cStart,false);
    document.addEventListener('touchmove',cMove,false);
    document.addEventListener('touchend',cEnd,false);

    function cStart(e){
        TouchStart.x = e.changedTouches[0].pageX;
        TouchStart.y = e.changedTouches[0].pageY;
    }

    function cMove(e){
        flag = false;
        var touchMoveX = e.changedTouches[0].pageX;
        var toucheMoveY = e.changedTouches[0].pageY;
        var x = touchMoveX - TouchStart.x;
        var y = toucheMoveY - TouchStart.y;
        if (startX + x > 70) {
            x = -startX + 70;
        }
        else if (startX + x < -70) {
            x = -startX - 70;
        }

        cubeBox.style.webkitTransform = 'scale(0.7) rotateX('+(startY+y)+'deg) rotateY('+(startX+x)+'deg)';

    }

    function cEnd(e){
        if(!flag){
            startX+=x;
            startY+=y;
        }

        document.removeEventListener('touchstart',cStart,false);
        document.removeEventListener('touchemove',cMove,false);
        document.removeEventListener('touchend',cEnd,false)
    }
}

var last={
    init:function(){
        cubeBtn.addEventListener("touchstart",this.step,false);
    },
    step:function(e){
        if(e.target.className=="cubeBtn")
        {
            cube.remove();
            cube.removeEventListener("touchstart",this.start,false);
            lastPage.style.display="block";
            window.setTimeout(function(){
                lastPage.firstElementChild.nextElementSibling.id="lastCon";
            },200);
        }

    }
};
