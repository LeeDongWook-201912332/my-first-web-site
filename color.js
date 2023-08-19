var Links = {
    setColor:function(color){
        // var links = document.querySelectorAll('a');
        // var i = 0;
        // while(i<links.length){
        //     links[i].style.color = color;
        //     i+=1;
        // }
        $('a').css('color',color);//모든 a태그를 jquery의 css함수로 제어하겟다
    }
}
// function setColor(color){
//     var links = document.querySelectorAll('a');
//     var i = 0;
//     while(i<links.length){
//             links[i].style.color = color;
//             i+=1;
//     }
// }
var Body = {
    setColor:function(color){
        //document.querySelector('body').style.color = color;
        $('body').css('color',color);
    },
    setBackgroundColor:function(color){
    //    document.querySelector('body').style.backgroundColor = color;
        $('body').css('color',color);
    }
}
function nightDayHandler(self){
    var target = document.querySelector('body');
    var links = document.querySelectorAll('a');
    var i = 0;
    var color = '';
    if(self.value == 'night'){
        Links.setColor('powderblue');
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';
    }else{
        Links.setColor('blue');
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night'; 
    }
}