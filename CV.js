let html = document.querySelector('#html');
let style = document.querySelector('#style');
console.log(html);
let string = 
`/*我是一个新的须弥角色，
*叫做缇娜里,
*我有一个叫柯莱的徒弟从璃月学到一个新的标志
*让我来给大家展示展示
*接下来我要一个样式是
*/
#div1{
    // border: 1px solid red;
    width:200px;
    height:200px;
}
/*接下来把div变成一个八卦图
*首先把div变成圆的
*/
#div1{
    border-radius:50%;
    box-shadow: 0 0 3px;
    border:none;
}
/*八卦是阴阳形成的
*一黑一白
*/
#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, 
    rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 98%);
}
/*加两个神秘的小球*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform: translateX(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%,
    rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 98%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform: translateX(-50%);
    border-radius:50%;
    background:radial-gradient(circle, rgba(0,0,0,1) 0%,
    rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 98%);
}

`;
console.log(string.length);
let n = 0;
let string2 = ''


let step = ()=>{
    setTimeout(()=>{
        // string2 += string[n] === '\n' ?'<br>' :string[n];
        if (string[n] === '\n') {
            string2 += '<br>'
        }else if (string[n] === ' ') {
            string2 += '&nbsp'
        }
        else{
            string2 += string[n]
        }
        html.innerHTML=string2;
        style.innerHTML=string.substring(0,n);

        console.log(string2);
        console.log(n);
        n++;
        window.scrollTo(0,99999);
        html.scrollTo(0,99999);
        if (n < string.length) {
            step();
        }
    },10);
   
};
step();

