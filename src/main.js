let demo = document.querySelector("#demo")
let style = document.querySelector("#style")
let str = `/*你好，我是胡文灏
* 接下来，我准备利用css画一个神秘的图案
* 首先，我要准备一个div
**/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*接下来，把div变成一个八卦图
* 注意看好了
* 首先，把div变成一个圆圈
**/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦是阴阳形成的
* 一黑一白
**/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个ball */
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translate(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translate(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`
let newStr = ""
let index = 0

let step = () => {
    setTimeout(() => {
        if (str[index] === "\n") {
            newStr += "<br>"
        } else if(str[index] === " "){
            newStr += "&nbsp;"
        }else {
            newStr += str[index]
        }
        demo.innerHTML = newStr
        style.innerHTML = str.substring(0,index)
        window.scrollTo(0,99999)
        demo.scrollTo(0,99999)
        if (index < str.length - 1) {
            index++
            step()
        }
    }, 50)
}

step()

