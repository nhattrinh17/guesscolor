"use strict"

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

var colorHeader = $(".header")
var colorSearch = $(".header__text--color")
const colorEasy = $(".nav__option--easy")
const colorHard = $(".nav__option--hard")
const colorOptionEasy = $(".color__easy")
const colorOptionHard = $(".color__hard")
const colorEasylist = $$(".color__easy--item")
const colorHardlist = $$(".color__hard--item")
const resetColor = $(".nav__newgame")


// handle color Easy
var renderEasy =  function(){
    var rgbResulr = makeColor()
    colorSearch.innerText = rgbResulr
    var rgbClick = []
    rgbClick.push(rgbResulr)
    rgbClick.push(makeColor())
    rgbClick.push(makeColor())
    let l1 
    let isSuccer = false
    let tg
    for(let i = 0; i< rgbClick.length; i++){
        if(i==0){
            const random = Math.floor(Math.random() * rgbClick.length);
            l1 = random
            tg = rgbClick[i]
            rgbClick[i] = rgbClick[random]
            rgbClick[random] = tg
        }if(i==1){
            while(isSuccer){
                const random = Math.floor(Math.random() * rgbClick.length);
                if(random != l1){
                    tg = rgbClick[i]
                rgbClick[i] = rgbClick[random]
                rgbClick[random] = tg
                    isSuccer = true
                }
            }
        }
    }
    Array.from(colorEasylist).forEach((colorEasyItem ,index)=> {
        colorEasyItem.style.backgroundColor = rgbClick[index]
    })
    checkColor(colorEasylist, rgbResulr)
}

// Handle color hard
var renderHard = function(){
    var rgbResulr = makeColor()
    colorSearch.innerText = rgbResulr
    var rgbClick = []
    rgbClick.push(rgbResulr)
    rgbClick.push(makeColor())
    rgbClick.push(makeColor())
    rgbClick.push(makeColor())
    rgbClick.push(makeColor())
    rgbClick.push(makeColor())
    let l1, l2, l3, l4, l5
    let isSuccer = false
    let tg
    for(let i = 0; i< rgbClick.length; i++){
        if(i==0){
            const random = Math.floor(Math.random() * rgbClick.length);
            l1 = random
            tg = rgbClick[i]
            rgbClick[i] = rgbClick[random]
            rgbClick[random] = tg
        }else if(i==1){
            let isSuccer = false
            while(isSuccer){
                const random = Math.floor(Math.random() * rgbClick.length);
                if(random != l1){
                    tg = rgbClick[i]
                    rgbClick[i] = rgbClick[random]
                    rgbClick[random] = tg
                    isSuccer = true
                    l2 = random;
                }
            }
        }else if(i==2){
            let isSuccer = false
            while(isSuccer){
                const random = Math.floor(Math.random() * rgbClick.length);
                if(random != l1 && random != 2){
                    tg = rgbClick[i]
                    rgbClick[i] = rgbClick[random]
                    rgbClick[random] = tg
                    isSuccer = true
                    l3 = random
                }
            }
        }else if(i==3){
            let isSuccer = false
            while(isSuccer){
                const random = Math.floor(Math.random() * rgbClick.length);
                if(random != l1 && random != l2 && random != l3){
                    tg = rgbClick[i]
                    rgbClick[i] = rgbClick[random]
                    rgbClick[random] = tg
                    isSuccer = true
                    l4 = random
                }
            }
        }else if(i==4){
            let isSuccer = false
            while(isSuccer){
                const random = Math.floor(Math.random() * rgbClick.length);
                if(random != l1 && random != l2 &&random != l3 &&random != l4){
                    tg = rgbClick[i]
                    rgbClick[i] = rgbClick[random]
                    rgbClick[random] = tg
                    isSuccer = true
                    l5 = random
                }
            }
        }else if(i==5){
            let isSuccer = false
            while(isSuccer){
                const random = Math.floor(Math.random() * rgbClick.length);
                if(random != l1 && random != l2 &&random != l3 &&random != l4 && random!= l5){
                    tg = rgbClick[i]
                    rgbClick[i] = rgbClick[random]
                    rgbClick[random] = tg
                    isSuccer = true
                }
            }
        }
    }
    Array.from( $$(".color__hard--item")).forEach((colorHardItem ,index)=> {
        colorHardItem.style.backgroundColor = rgbClick[index]
    })
    checkColor( $$(".color__hard--item"), rgbResulr)
}

function makeColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}

function checkColor(clolrOptions, result){
    Array.from(clolrOptions).forEach((clolrOption)=> {
        clolrOption.onclick = function(){
            if(clolrOption.style.backgroundColor == result){
                Array.from(clolrOptions).forEach((value)=> {
                    value.style.backgroundColor = result
                })
                colorHeader.style.backgroundColor = result
            }else{
                clolrOption.style.backgroundColor = 'rgb(103 103 103)'
            }
        }
    })
}

// Easy onclick
colorEasy.onclick = function(){
    colorEasy.classList.add("active")
    colorOptionEasy.classList.add('active')
    if(colorHard.classList.contains("active")){
        colorHard.classList.remove("active")
        colorOptionHard.classList.remove("active")
    }
    colorHeader.style.backgroundColor = "rgb(65, 206, 225)"
    renderEasy()    
}
colorEasy.onclick()

// Hard onclick
colorHard.onclick = function(){
    if(colorEasy.classList.contains("active")){
        colorEasy.classList.remove("active")
        colorOptionEasy.classList.remove("active")
    }
    colorHard.classList.add("active")
    colorOptionHard.classList.add('active')
    colorHeader.style.backgroundColor = "rgb(65, 206, 225)"
    renderHard()    
}

// reset color onclick
resetColor.onclick = function(){
    colorHeader.style.backgroundColor = "rgb(65, 206, 225)"
    if(colorOptionEasy.classList.contains("active")){
        renderEasy()
    }else{
        renderHard()
    }
    
}
