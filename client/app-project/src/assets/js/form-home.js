function radioChecked(value) {
    let input = document.getElementById('inputFechaVuelta')
    if (value) {
        input.readOnly = true;
    } else {
        input.readOnly = false;
    }
}