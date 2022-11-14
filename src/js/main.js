$(".container_name").click(function () {
    $('.container_desc').css({
            'opacity': '1'
    })  
});
setTimeout(() => {
    $('.container_desc').css({
        'opacity': '0'
    })  
}, 3000)