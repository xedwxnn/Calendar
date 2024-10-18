const currentDate = new Date();

// Obtiene los elementos a editar
const monthName = document.getElementById("monthName");
const dayName = document.getElementById("dayName");
const dayNumber = document.getElementById("dayNumber");
const yearNumber = document.getElementById("yearNumber");

// Crea variables para guardar las fechas
const currentMonthName = currentDate.getMonth();
const currentDayName = currentDate.getDay();
const currentDayNumber = currentDate.getDate();
const currentYearNumber = currentDate.getFullYear();

// Reemplaza el texto en 'monthName' por el nombre del mes (en inglés)
monthName.innerText = currentDate.toLocaleString("en", {
    month: "long"
});

// Reemplaza el texto en 'dayName' por el nombre del día de la semana (en inglés)
dayName.innerText = currentDate.toLocaleString("en", {
    weekday: "long"
});

// Reemplaza el texto en 'dayNumber' por el número del día
dayNumber.innerText = currentDayNumber;

// Reemplaza el texto en 'yearNumber' por el número del año
yearNumber.innerText = currentYearNumber;

// Obtiene el cuerpo (body) del HTML
const body = document.getElementsByTagName("body")[0];

// Obtiene el cuerpo del calendario
const calendar = document.getElementById("header");

// Establece un wallpaper al background dependiendo el mes y día (estaciones)

// Spring (Marzo, Abril, Mayo)
if (currentMonthName >= 2 && currentMonthName <= 4) {
    body.style.backgroundImage = "url('/assets/images/spring.jpg')";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    calendar.style.backgroundColor = "#576064";
}

// Summer (Junio, Julio, Agosto)
else if (currentMonthName >= 5 && currentMonthName <= 7) {
    body.style.backgroundImage = "url('/assets/images/summer.jpg')";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    calendar.style.backgroundColor = "#4b8c8b";
}

// Autumn (Septiembre, Octubre, Noviembre)
else if (currentMonthName >= 8 && currentMonthName <= 10) {
    body.style.backgroundImage = "url('/assets/images/autumn.jpg')";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    calendar.style.backgroundColor = "#aa633c";
}

// Winter (Diciembre, Enero, Febrero)
else {
    body.style.backgroundImage = "url('/assets/images/winter.jpg')";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    calendar.style.backgroundColor = "#7a9347";
}