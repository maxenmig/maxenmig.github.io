var menuVar = false;
var color = "white";
const subjectsAnim = (bool) => {
    if (window.innerWidth > 412){
        switch (bool){
            case true:
                gsap.to('#subjectsButton', {duration: 0.2, color:"#FE3C5F", borderColor:"#FE3C5F"});
                gsap.to('#arrow', {duration:0.2, fill:"#FE3C5F"});
                break;
            case false:
                gsap.to('#subjectsButton', {duration: 0.2, color:color, borderColor:color});
                gsap.to('#arrow', {duration:0.2, fill:color});
                break;
        }
    }
}

const menu = () => {
    switch (menuVar){
        case true:
            gsap.to('.menu', {duration: 0.2, opacity:0, display:"none"});
            gsap.to('html', {duration:0, height:"auto", overflowY:"auto"});
            menuVar = false;
            break;
        case false:
            gsap.to('.menu', {duration: 0.2, opacity:1, display:"block"});
            gsap.to('html', {duration:0, height:"100vh", overflowY:"hidden"});
            menuVar = true;
            break;
    }
}

const menuAnim = (bool) => {
    if (window.innerWidth > 412){
        switch (bool){
            case true:
                gsap.to('.vector', {duration:0.2, fill:"#FE3C5F"});
                break;
            case false:
                gsap.to('.vector', {duration:0.2, fill:color});
                break;
        }
    }
}

var showSub = false;
const openSubjects = () => {
    switch (showSub){
        case true:
            gsap.to('.subs', {duration: 0.2, opacity:0, display:"none"});
            gsap.to('#arrow', {duration: 0.2, rotate:0, transformOrigin:"50% 50%"});
            showSub = false;
            break;
        case false:
            gsap.to('.subs', {duration: 0.2, opacity:1, display:"block"});
            gsap.to('#arrow', {duration: 0.2, rotate:180, transformOrigin:"50% 50%"});
            showSub = true;
            break;
    }
}

var colorVar = false;
const colorMode = () => {
    switch (colorVar){
        case false:
            color = "black";
            gsap.to("body", {duration:0, backgroundColor:"white"});
            gsap.to(".menu", {duration: 0, backgroundColor:"white"});
            gsap.to(".clrMode, #subjectsButton", {duration:0,color:"black"});
            gsap.to("#subjectsButton", {duration: 0, borderColor:"black"});
            gsap.to("#arrow", {duration: 0, fill:"black"});
            gsap.to("#crossFill", {duration:0, fill:"black"});
            gsap.to("#circle", {duration: 0.5, x:"-200%"});
            gsap.to('.vector', {duration: 0, fill:"black"});
            gsap.to('.subs', {duration:0, backgroundColor:"white", color:"black"});
            gsap.to('.link, .id, .divider, .subLink', {duration: 0, color:"black"});
            gsap.to('.tableRow', {duration: 0, borderColor:"black"});
            document.getElementById('colorMode').innerHTML = "Color Mode: Light";
            colorVar = true;
            break;
        case true:
            color = "white";
            gsap.to("body", {duration:0, backgroundColor:"#333333"});
            gsap.to(".menu", {duration:0, backgroundColor:"#333333"});
            gsap.to(".clrMode, #subjectsButton", {duration:0, color:"white"});
            gsap.to("#subjectsButton", {duration: 0, borderColor:"white"});
            gsap.to("#arrow", {duration: 0, fill:"white"});
            gsap.to("#crossFill", {duration:0, fill:"white"});
            gsap.to("#circle", {duration: 0.5, x:"0%"});
            gsap.to('.vector', {duration: 0, fill:"white"});
            gsap.to('.subs', {duration:0, backgroundColor:"#333333", color:"white"});
            gsap.to('.link, .id, .divider, .subLink', {duration: 0, color:"white"});
            gsap.to('.tableRow', {duration: 0, borderColor:"white"});
            document.getElementById('colorMode').innerHTML = "Color Mode: Dark";
            colorVar = false;
            break;
    }
}