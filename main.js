var _url = "http://127.0.0.1:8000/";

var GestorMain = {

    Inicio: function() {
        $('#send').on('click', function() {
            var val = ValidarRegistro();
            if (val.Valida) {
                UsuarioIns();
                LimpiaControles()
            } else {
                $(val.IdControl).focus();
                Swal.fire({
                    icon: 'info',
                    text: val.Mensaje,
                })
            }

        });

    }
}

function UsuarioIns() {
    var registro = Datos();
    console.log(registro);
    $.ajax({
        type: "POST",
        url: _url,
        data: JSON.stringify(registro),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(result) {
            Swal.fire({
                icon: 'info',
                title: 'Tenemos noticias para ti...',
                text: result.message,
            })
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ocurrió un error con tu peticion!',
            })
        }
    });
}

function LimpiaControles() {
    $("#name").val("")
    $("#email").val("")
    $("#kilometers").val("")
}

function ValidarRegistro() {
    if ($("#name").val() == "") {
        return { Valida: false, IdControl: "#name", Mensaje: "Ingrese su nombre." };
    }
    if (!isEmail($("#email").val())) {
        return { Valida: false, IdControl: "#email", Mensaje: "Ingrese un email." };
    }
    if ($("#kilometers").val() == "") {
        return { Valida: false, IdControl: "#kilometers", Mensaje: "Ingrese los kilometros recorridos." };
    }

    return { Valida: true, IdControl: "", Mensaje: "" };
}

function Datos() {
    return {
        name: $("#name").val(),
        mail: $("#email").val(),
        kilometers: $("#kilometers").val(),
    }
}

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}