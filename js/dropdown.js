var menuStatus = false;

const dropDown = () => {
    switch (menuStatus){
        case true:
            menuStatus = false;
            gsap.to('.dropDownMenu', {duration: 0.5, opacity: 0, display:'none'});
            gsap.to('.arrow', {duration: 0.5, rotate:0})
            console.log('Menu closed')
            break;
        case false:
            menuStatus = true;
            gsap.to('.dropDownMenu', {duration:0.5, opacity: 1, display: 'block'});
            gsap.to('.arrow', {duration: 0.5, rotate:180})
            console.log('Menu opened');
            break;
    }
}