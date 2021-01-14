var border  = document.createElement('div')


border.style.height = 400 + "px";
border.style.width = 400 + "px";
border.style.border = "1px solid #000000";
border.style.margin = "auto";
border.style.position = "relative";
border.style.float= 'right';
border.style.marginRight = "10%";
document.body.appendChild(border);


var ball = document.createElement('div')
ball.setAttribute('id', 'ball')
ball.style.borderRadius = '50%';
ball.style.backgroundColor = 'blue'
ball.style.height = 50 + 'px'
ball.style.width = 50 + 'px'
ball.style.position = 'relative'
ball.style.left = '45%'

border.appendChild(ball);

var i = 0; 
flag = true;

setInterval(
function motion() {
    if (flag === true){
        ball.style.top = i + 'px'
        i++ 
        if(i >=350){
            flag = false
        }
    } else {
        ball.style.top = i + 'px'
        i--
        if(i<=0){
            flag = true;
        }
    }
    
},)
motion()

