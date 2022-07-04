        //div（广告）获取节点
        var div1 = document.getElementById("div1");
        // div(广告)初始的位置
        var offsetx = 6;
        var offsety = 6;
        //div(广告)每次移动的距离
        var stepx = 10;
        var stepy = 10;
        //div(广告)的大小
        div1.style.width="100px"
        div1.style.height="100px"
        //设置定位
        div1.style.position="absolute"
        div1.style.top = offsetx;
        div1.style.left = offsety;
        // div1.style.backgroundColor="black"
        div1.style.backgroundImage="url(./img/ggao.webp)"
        div1.style.backgroundSize="cover"
        
        //网页可视化宽高--div(广告)可以移动的区域
        var seeWidth = document.documentElement.clientWidth;
        var seeHeight = document.documentElement.clientHeight;
        //div(广告)最大可移动的宽度、高度
        var maxLeft = seeWidth -100;
        var maxTop = seeHeight -100;
        function move(){
            offsetx+=stepx;
            offsety+=stepy;
            console.log(offsetx);
            console.log(offsety)
            //大于可移动的高度或到达顶部 就让移动的距离变为它的负数
            if(offsety>=maxTop||offsety<=0){
                stepy = -stepy;
            }
            //大于可移动的宽度或到达最左 就让移动的距离变为它的负数
            if(offsetx>=maxLeft||offsetx<=0){
                stepx=-stepx;
            }
            //div定位的位置
            div1.style.top = offsety+"px"
            div1.style.left = offsetx+"px"
        }
        //启动定时器
        var t= setInterval(move,30);
        //鼠标移入清除定时器
        div1.onmouseenter = function(){
            clearInterval(t);
        }
        //鼠标移出恢复
        div1.onmouseleave = function(){
            t = setInterval(move,30);
        }
        //点击事件，点击后消失
        div1.onclick = function(){
            div1.style.display = "none"
        } 