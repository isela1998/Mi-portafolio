function showServices(){
    let box1 = document.getElementById('services-box')
    let box2 = document.getElementById('services-box-1')
    if(box1.classList.contains('hide')){
        box1.classList.remove('hide')
    }else{
        box1.classList.add('hide')
    }

    if(box2.classList.contains('hide')){
        box2.classList.remove('hide')
    }else{
        box2.classList.add('hide')
    }
}

function hide(){
    document.getElementById('header-menu').checked = false
}