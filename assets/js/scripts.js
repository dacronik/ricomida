$(function () {

    $("#enviarCorreo").click(function () {
        alert('El correo fue enviado correctamente...')
    })

    $(".card-title").click(function () {
        $(".card-text").toggle()

    })


    $('body').on('dblclick','h4',function(){
        $(this).css("color","red")
    })

})