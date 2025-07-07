function validarRango(valor, tipoEvento) {
    const rango = document.getElementById("rango");
    const msg = document.getElementById("msgRango");
    const numero = parseInt(valor);

    // Mostrar valor actual mientras se mueve el slider
    if (tipoEvento === "input") {
        msg.innerHTML = `🎚️ Valor actual: ${numero}`;
    }

    // Evaluar valor final cuando se suelta el slider (onchange)
    if (tipoEvento === "change") {
        if (numero < 20) {
            msg.innerHTML = `🔵 Muy bajo (${numero})`;
            rango.style.background = "#d1ecf1"; // celeste
        } else if (numero < 60) {
            msg.innerHTML = `🟡 Rango medio (${numero})`;
            rango.style.background = "#fff3cd"; // amarillo claro
        } else {
            msg.innerHTML = `🔴 Valor alto (${numero})`;
            rango.style.background = "#f8d7da"; // rojo claro
        }
    }
}

function validarColor(valor, tipoEvento) {
    const msg = document.getElementById("msgColor");
    const inputColor = document.getElementById("color");

    // Mostrar el código del color seleccionado
    msg.innerHTML = `🎨 Color seleccionado: <strong>${valor}</strong>`;
    msg.style.color = valor;

    // Condiciones personalizadas
    if (valor === "#ff0000") {
        msg.innerHTML += "<br>❤️ Rojo detectado. Color fuerte.";
        document.body.style.backgroundColor = "#ffe5e5";
    } else if (valor === "#00ff00") {
        msg.innerHTML += "<br>💚 Verde detectado. Color relajante.";
        document.body.style.backgroundColor = "#e6ffed";
    } else if (valor === "#0000ff") {
        msg.innerHTML += "<br>💙 Azul detectado. Color frío.";
        document.body.style.backgroundColor = "#e0f0ff";
    } else {
        msg.innerHTML += "<br>🧩 Color personalizado.";
        document.body.style.backgroundColor = "#ffffff"; // fondo neutro
    }

    // Efecto visual al confirmar selección
    if (tipoEvento === "change") {
        inputColor.style.border = `3px solid ${valor}`;
    }
}

function validarTelefono(valor) {
    const telefonoInput = document.getElementById("telefono");
    const msg = document.getElementById("msgTelefono");

    // Eliminar espacios, guiones u otros símbolos visuales
    const limpio = valor.replace(/[\s\-()]/g, "");

    // Validaciones
    if (limpio.length === 0) {
        msg.innerHTML = "📞 Ingresa tu número de teléfono.";
        telefonoInput.style.backgroundColor = "#ffe5e5";
    } else if (!/^\d+$/.test(limpio)) {
        msg.innerHTML = "❌ Solo se permiten números.";
        telefonoInput.style.backgroundColor = "#fff3cd";
    } else if (limpio.length < 7) {
        msg.innerHTML = "⚠️ Número demasiado corto.";
        telefonoInput.style.backgroundColor = "#fff3cd";
    } else if (limpio.length >= 7 && limpio.length < 10) {
        msg.innerHTML = "📱 Número local válido.";
        telefonoInput.style.backgroundColor = "#d1ecf1"; // celeste
    } else if (limpio.length === 10) {
        msg.innerHTML = "✅ Número nacional válido.";
        telefonoInput.style.backgroundColor = "#d4edda"; // verde claro
    } else if (limpio.length > 10) {
        msg.innerHTML = "🔺 El número es demasiado largo.";
        telefonoInput.style.backgroundColor = "#f8d7da"; // rojo claro
    }

    // Opcional: borde rojo si mezcla letras
    if (/[^0-9\s\-()]/.test(valor)) {
        telefonoInput.style.border = "2px solid red";
    } else {
        telefonoInput.style.border = "1px solid gray";
    }
}

function validarURL(valor, tipoEvento) {
    const inputURL = document.getElementById("url");
    const msg = document.getElementById("msgURL");

    const regexURL = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/;

    if (valor.length === 0) {
        msg.innerHTML = "🌐 Ingresa una URL.";
        inputURL.style.backgroundColor = "#ffe5e5";
        return;
    }

    if (!regexURL.test(valor)) {
        msg.innerHTML = "❌ Esta URL no parece válida.";
        inputURL.style.backgroundColor = "#fff3cd"; // amarillo claro
    } else if (!valor.startsWith("http://") && !valor.startsWith("https://")) {
        msg.innerHTML = "⚠️ Falta el protocolo (usa http:// o https://)";
        inputURL.style.backgroundColor = "#fff3cd";
    } else {
        msg.innerHTML = `✅ URL válida: <a href="${valor}" target="_blank">${valor}</a>`;
        inputURL.style.backgroundColor = "#d4edda"; // verde claro
    }

    if (tipoEvento === "blur" && valor === "") {
        inputURL.style.border = "2px solid red";
    } else {
        inputURL.style.border = "1px solid gray";
    }
}

function validarCheckbox(estado, tipoEvento) {
    const msg = document.getElementById("msgCheckbox");
    const checkbox = document.getElementById("checkbox");

    msg.innerHTML = ""; // LIMPIAR para evitar duplicación

    if (tipoEvento === "click") {
        msg.innerHTML = "🖱️ Has hecho clic en el checkbox.";
    }

    if (estado) {
        msg.innerHTML += "<br>✅ Términos aceptados.";
        checkbox.style.outline = "2px solid green";
        checkbox.style.accentColor = "green";
    } else {
        msg.innerHTML += "<br>❌ Aún no aceptas los términos.";
        checkbox.style.outline = "2px solid red";
        checkbox.style.accentColor = "red";
    }
}



function validarRadio(valor, tipoEvento) {
    const msg = document.getElementById("msgRadio");

    msg.innerHTML = ""; // LIMPIAR

    if (tipoEvento === "click") {
        msg.innerHTML = "🎯 Has hecho clic en una opción.";
    }

    if (valor === "opcion1") {
        msg.innerHTML += "<br>🔵 Elegiste la Opción 1.";
        document.body.style.backgroundColor = "#e3f2fd"; // azul claro
    } else if (valor === "opcion2") {
        msg.innerHTML += "<br>🟢 Elegiste la Opción 2.";
        document.body.style.backgroundColor = "#e8f5e9"; // verde claro
    } else {
        msg.innerHTML += "<br>⚠️ Opción no reconocida.";
        document.body.style.backgroundColor = "#ffffff";
    }
}


function validarSelect(valor, tipoEvento) {
    const select = document.getElementById("select");
    const msg = document.getElementById("msgSelect");

    msg.innerHTML = ""; // LIMPIAR

    if (tipoEvento === "focus") {
        msg.innerHTML = "📂 Desplegaste el menú de selección.";
        select.style.backgroundColor = "#e3f2fd"; // azul claro
        return;
    }

    if (tipoEvento === "click") {
        msg.innerHTML = "🖱️ Hiciste clic en el selector.";
    }

    if (tipoEvento === "blur") {
        if (valor === "") {
            msg.innerHTML = "⚠️ Saliste sin seleccionar nada.";
            select.style.border = "2px solid red";
        } else {
            select.style.border = "1px solid gray";
        }
    }

    if (tipoEvento === "change") {
        if (valor === "opcion1") {
            msg.innerHTML = "🔵 Elegiste la Opción 1.";
            select.style.backgroundColor = "#d1ecf1"; // celeste
        } else if (valor === "opcion2") {
            msg.innerHTML = "🟢 Elegiste la Opción 2.";
            select.style.backgroundColor = "#d4edda"; // verde claro
        } else {
            msg.innerHTML = "❌ Selección no válida.";
            select.style.backgroundColor = "#f8d7da"; // rojo claro
        }
    }
}


function validarTextarea(valor, tipoEvento) {
    const textarea = document.getElementById("textarea");
    const msg = document.getElementById("msgTextarea");

    if (tipoEvento === "focus") {
        msg.innerHTML = "✏️ Comienza a escribir tu texto...";
        textarea.style.backgroundColor = "#f0f8ff"; // azul muy claro
        return;
    }

    if (tipoEvento === "blur") {
        if (valor.trim() === "") {
            msg.innerHTML = "⚠️ Dejaste el campo vacío.";
            textarea.style.border = "2px solid red";
            textarea.style.backgroundColor = "#ffe5e5";
            return;
        } else {
            textarea.style.border = "1px solid gray";
        }
    }

    if (tipoEvento === "keyup" || tipoEvento === "input") {
        const longitud = valor.trim().length;

        if (longitud === 0) {
            msg.innerHTML = "⌨️ Comienza a escribir algo...";
            textarea.style.backgroundColor = "#fff3cd"; // amarillo claro
        } else if (longitud < 20) {
            msg.innerHTML = `🟡 Escribe un poco más... (${longitud} caracteres)`;
            textarea.style.backgroundColor = "#fff9c4";
        } else if (longitud >= 20 && longitud <= 100) {
            msg.innerHTML = `🟢 Buen texto. (${longitud} caracteres)`;
            textarea.style.backgroundColor = "#d4edda"; // verde claro
        } else {
            msg.innerHTML = `🔴 Texto demasiado largo (${longitud} caracteres)`;
            textarea.style.backgroundColor = "#f8d7da"; // rojo claro
        }
    }
}

function validarBoton() {
    const msg = document.getElementById("msgBoton");
    const boton = document.getElementById("boton");

    msg.innerHTML = "✅ ¡Formulario enviado con éxito!";
    msg.style.color = "green";

    boton.disabled = true;
    boton.innerText = "Enviado";
    boton.style.backgroundColor = "#d4edda"; // verde claro
    boton.style.cursor = "not-allowed";
}

function cambiarColor(elemento, color) {
    elemento.style.backgroundColor = color;
}

function validarInput(valor) {
    const msg = document.getElementById("msgForm");

    if (valor.trim() === "") {
        msg.innerHTML = "⚠️ Campo vacío.";
        msg.style.color = "red";
    } else if (valor.length < 5) {
        msg.innerHTML = `✍️ Escribe al menos 5 caracteres. (${valor.length})`;
        msg.style.color = "#ff9900"; // naranja
    } else {
        msg.innerHTML = "✅ Entrada válida.";
        msg.style.color = "green";
    }
}

function validarFormulario(evento) {
    const msg = document.getElementById("msgForm");
    const input = document.getElementById("inputText");
    const valor = input.value.trim();

    if (evento.type === "submit") {
        evento.preventDefault(); // evitar envío por defecto

        if (valor === "") {
            msg.innerHTML = "🚫 No puedes enviar un campo vacío.";
            msg.style.color = "red";
        } else {
            msg.innerHTML = `📨 Formulario enviado con: <strong>${valor}</strong>`;
            msg.style.color = "green";
        }
    } else if (evento.type === "reset") {
        msg.innerHTML = "🔄 Formulario reiniciado.";
        msg.style.color = "gray";
    }
}
