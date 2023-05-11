const elements = Array.from(document.getElementsByClassName('target'));

elements.forEach(element => {

    function moveAt(pageX, pageY){
        element.style.left = pageX - element.offsetWidth / 2 + 'px';
        element.style.top = pageY - element.offsetHeight /2 + 'px';
    }
    
    function onMouseMove(event){
        moveAt(event.pageX, event.pageY);
    }

    function onTouchMove(event){
        event.preventDefault();
        const touch = event.changedTouches[0];
        moveAt(touch.pageX, touch.pageY);
    }

    function stopDragging() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('touchmove', onTouchMove);
    }

    element.addEventListener('mousedown', function handleClick(event){
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', stopDragging);
    });

    element.addEventListener('touchstart', function handleTouch(event){
        const touch = event.changedTouches[0];
        document.addEventListener('touchmove', onTouchMove);
        document.addEventListener('touchend', stopDragging);
    });

    element.addEventListener('dblclick', function handleDbClick(event){
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('keydown', function handleEscDown(event){
            if (event.code == 'Escape'){
                stopDragging();
            }
        });
    });
});
