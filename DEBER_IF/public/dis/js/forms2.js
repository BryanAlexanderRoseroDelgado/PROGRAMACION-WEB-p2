// Función para mostrar y validar el nombre (oninput, onchange, onblur)
function mostrarNombre(valor) {
    const nombreInput = document.getElementById("nombre");
    const msg = document.getElementById("msgNombre");

    if (valor.length === 0) {
        msg.innerHTML = "✏️ Por favor escribe algo.";
        nombreInput.style.backgroundColor = "#ffe5e5";
    } else if (valor.length < 3) {
        msg.innerHTML = "🔍 Muy corto, escribe más.";
        nombreInput.style.backgroundColor = "#fff3cd";
    } else if (valor.toLowerCase() === "admin") {
        msg.innerHTML = "👑 ¡Hola, Admin!";
        nombreInput.style.backgroundColor = "#cce5ff";
    } else {
        msg.innerHTML = "✅ Nombre válido.";
        nombreInput.style.backgroundColor = "#d4edda";
    }

    // Extra: cambiar el borde si está vacío al perder foco
    if (document.activeElement !== nombreInput && valor === "") {
        nombreInput.style.border = "2px solid red";
    } else {
        nombreInput.style.border = "1px solid gray";
    }
}

// Función para manejar el foco (onfocus)
function mostrarFoco() {
    const enfocar = document.getElementById("enfocar");
    const msg = document.getElementById("msgFoco");

    msg.innerHTML = "👀 Estás enfocado en este campo.";
    enfocar.style.backgroundColor = "#e0f7fa";
}

// Función para manejar eventos de teclado (onkeydown, onkeyup, onkeypress)
function mostrarTeclado(event) {
    const teclado = document.getElementById("teclado");
    const msg = document.getElementById("msgTeclado");

    if (event.type === "keydown") {
        if (event.key === "a") {
            msg.innerHTML = "🅰️ Presionaste la letra A (keydown)";
        } else if (event.key === "Enter") {
            msg.innerHTML = "⏎ Presionaste Enter (keydown)";
        } else {
            msg.innerHTML = `⬇️ Tecla presionada: ${event.key}`;
        }
    } else if (event.type === "keyup") {
        if (event.key === "Shift") {
            msg.innerHTML = "🔓 Soltaste Shift (keyup)";
        }
    } else if (event.type === "keypress") {
        if (/[0-9]/.test(event.key)) {
            teclado.style.backgroundColor = "#fff3cd"; // amarillo claro
            msg.innerHTML = "🔢 ¡Estás escribiendo números! (keypress)";
        } else {
            teclado.style.backgroundColor = "#ffffff";
        }
    }
}

function validarEmail(valor) {
    const emailInput = document.getElementById("email");
    const msg = document.getElementById("msgEmail");

    const regexCorreo = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;

    if (valor.length === 0) {
        msg.innerHTML = "📭 Por favor ingresa tu correo.";
        emailInput.style.backgroundColor = "#ffe5e5";
    } else if (!regexCorreo.test(valor)) {
        msg.innerHTML = "❌ El correo no tiene un formato válido.";
        emailInput.style.backgroundColor = "#fff3cd"; // amarillo claro
    } else {
        msg.innerHTML = "✅ Correo válido.";
        emailInput.style.backgroundColor = "#d4edda"; // verde claro
    }

    // Opcional: agregar borde rojo si el campo está vacío al salir
    if (document.activeElement !== emailInput && valor === "") {
        emailInput.style.border = "2px solid red";
    } else {
        emailInput.style.border = "1px solid gray";
    }
}

function validarNumero(valor) {
    const numeroInput = document.getElementById("numero");
    const msg = document.getElementById("msgNumero");

    const numero = parseFloat(valor);

    if (valor === "") {
        msg.innerHTML = "📭 Por favor ingresa un número.";
        numeroInput.style.backgroundColor = "#ffe5e5";
    } else if (isNaN(numero)) {
        msg.innerHTML = "❌ No es un número válido.";
        numeroInput.style.backgroundColor = "#fff3cd";
    } else if (numero < 0) {
        msg.innerHTML = "⚠️ El número no puede ser negativo.";
        numeroInput.style.backgroundColor = "#f8d7da";
    } else if (numero === 0) {
        msg.innerHTML = "ℹ️ El número es cero.";
        numeroInput.style.backgroundColor = "#e2e3e5";
    } else if (numero > 1000) {
        msg.innerHTML = "🔺 Número muy grande.";
        numeroInput.style.backgroundColor = "#ffeeba";
    } else {
        msg.innerHTML = "✅ Número válido.";
        numeroInput.style.backgroundColor = "#d4edda";
    }

    // Opcional: borde rojo si está vacío al salir
    if (document.activeElement !== numeroInput && valor === "") {
        numeroInput.style.border = "2px solid red";
    } else {
        numeroInput.style.border = "1px solid gray";
    }
}

function validarPassword(event) {
    const passwordInput = document.getElementById("password");
    const msg = document.getElementById("msgPassword");
    const valor = passwordInput.value;

    // Solo aplica cuando ya se escribió algo
    if (valor.length === 0) {
        msg.innerHTML = "🔒 Por favor ingresa una contraseña.";
        passwordInput.style.backgroundColor = "#ffe5e5";
        return;
    }

    if (event.type === "onkeypress" || event.type === "keypress") {
        msg.innerHTML = `⌨️ Escribiendo contraseña...`;
    }

    if (event.type === "keyup") {
        if (valor.length < 6) {
            msg.innerHTML = "❌ Muy corta (mínimo 6 caracteres).";
            passwordInput.style.backgroundColor = "#fff3cd";
        } else if (!/[A-Z]/.test(valor)) {
            msg.innerHTML = "⚠️ Falta una letra mayúscula.";
            passwordInput.style.backgroundColor = "#fff3cd";
        } else if (!/[0-9]/.test(valor)) {
            msg.innerHTML = "⚠️ Falta un número.";
            passwordInput.style.backgroundColor = "#fff3cd";
        } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(valor)) {
            msg.innerHTML = "⚠️ Agrega al menos un símbolo.";
            passwordInput.style.backgroundColor = "#fff3cd";
        } else {
            msg.innerHTML = "✅ Contraseña segura.";
            passwordInput.style.backgroundColor = "#d4edda";
        }
    }

    if (event.type === "blur") {
        if (valor.length === 0) {
            msg.innerHTML = "🚨 El campo de contraseña está vacío.";
            passwordInput.style.border = "2px solid red";
        } else {
            passwordInput.style.border = "1px solid gray";
        }
    }
}

function validarFecha(valor, tipoEvento) {
    const fechaInput = document.getElementById("fecha");
    const msg = document.getElementById("msgFecha");

    const fechaSeleccionada = new Date(valor);
    const hoy = new Date();

    // Limpiar el tiempo de ambas fechas para comparación justa (solo día/mes/año)
    fechaSeleccionada.setHours(0, 0, 0, 0);
    hoy.setHours(0, 0, 0, 0);

    if (tipoEvento === "focus") {
        msg.innerHTML = "📅 Selecciona una fecha del calendario.";
        fechaInput.style.backgroundColor = "#e3f2fd"; // azul claro
        return;
    }

    if (!valor) {
        msg.innerHTML = "⚠️ No has seleccionado ninguna fecha.";
        fechaInput.style.backgroundColor = "#ffe5e5";
        return;
    }

    if (fechaSeleccionada > hoy) {
        msg.innerHTML = "❌ La fecha no puede ser futura.";
        fechaInput.style.backgroundColor = "#fff3cd"; // amarillo claro
    } else if (fechaSeleccionada.toDateString() === hoy.toDateString()) {
        msg.innerHTML = "📌 Has seleccionado la fecha de hoy.";
        fechaInput.style.backgroundColor = "#d4edda"; // verde claro
    } else {
        msg.innerHTML = "✅ Fecha válida.";
        fechaInput.style.backgroundColor = "#d4edda";
    }

    if (tipoEvento === "blur" && valor === "") {
        fechaInput.style.border = "2px solid red";
    } else {
        fechaInput.style.border = "1px solid gray";
    }
}

function validarHora(valor, tipoEvento) {
    const horaInput = document.getElementById("hora");
    const msg = document.getElementById("msgHora");

    if (!valor) {
        msg.innerHTML = "🕒 Por favor selecciona una hora.";
        horaInput.style.backgroundColor = "#ffe5e5";
        return;
    }

    // Convertimos la hora ingresada a minutos totales para comparación
    const [hora, minutos] = valor.split(":").map(Number);
    const totalMinutos = hora * 60 + minutos;

    if (totalMinutos < 6 * 60) {
        msg.innerHTML = "🌙 Muy temprano (antes de las 6:00 am).";
        horaInput.style.backgroundColor = "#f8d7da"; // rojo suave
    } else if (totalMinutos >= 6 * 60 && totalMinutos < 12 * 60) {
        msg.innerHTML = "☀️ Mañana activa (6:00 am - 12:00 pm).";
        horaInput.style.backgroundColor = "#d1ecf1"; // celeste
    } else if (totalMinutos >= 12 * 60 && totalMinutos < 18 * 60) {
        msg.innerHTML = "🌤️ Tarde tranquila (12:00 pm - 6:00 pm).";
        horaInput.style.backgroundColor = "#fff3cd"; // amarillo claro
    } else {
        msg.innerHTML = "🌙 Noche serena (6:00 pm en adelante).";
        horaInput.style.backgroundColor = "#d4edda"; // verde claro
    }

    if (tipoEvento === "blur" && valor === "") {
        horaInput.style.border = "2px solid red";
    } else {
        horaInput.style.border = "1px solid gray";
    }
}

function validarArchivo(file, tipoEvento) {
    const inputArchivo = document.getElementById("archivo");
    const msg = document.getElementById("msgArchivo");

    if (tipoEvento === "click") {
        msg.innerHTML = "📁 Esperando que selecciones un archivo...";
        inputArchivo.style.backgroundColor = "#e3f2fd"; // azul claro
        return;
    }

    if (!file) {
        msg.innerHTML = "⚠️ No has seleccionado ningún archivo.";
        inputArchivo.style.backgroundColor = "#ffe5e5"; // rojo claro
        return;
    }

    // Validaciones comunes
    const tipo = file.type;
    const tamañoKB = (file.size / 1024).toFixed(1); // en KB
    const nombre = file.name;

    // Condicionales por tipo de archivo
    if (tipo.startsWith("image/")) {
        msg.innerHTML = `🖼️ Archivo seleccionado: ${nombre} <br>Tamaño: ${tamañoKB} KB <br>Tipo: imagen`;
        inputArchivo.style.backgroundColor = "#d4edda"; // verde claro
    } else if (tipo === "application/pdf") {
        msg.innerHTML = `📄 Has subido un PDF: ${nombre} <br>Tamaño: ${tamañoKB} KB`;
        inputArchivo.style.backgroundColor = "#fff3cd"; // amarillo claro
    } else {
        msg.innerHTML = `📦 Archivo: ${nombre} <br>Tipo: ${tipo || "desconocido"} <br>Tamaño: ${tamañoKB} KB`;
        inputArchivo.style.backgroundColor = "#f8d7da"; // rojo suave
    }

    // Si se sale sin seleccionar
    if (tipoEvento === "blur" && !file) {
        inputArchivo.style.border = "2px solid red";
    } else {
        inputArchivo.style.border = "1px solid gray";
    }
}
