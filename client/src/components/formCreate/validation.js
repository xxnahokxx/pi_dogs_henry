export default function validation(inputs) {
    const regexNumber = /^([0-9])*$/
    const regexEnlace = /^(ftp|http|https):\/\/[^ "]+$/
    const errors = {};

    if (!inputs.name) {
        errors.name = "Tiene que tener un nombre.";
    }
    if (inputs.name.length > 10) {
        errors.name = "tiene que tener maximo 10";
    }
    if (inputs.image === "") {
        errors.image = "Tiene que tener una imagen.";
    }
    if (!regexEnlace.test(inputs.image)) {
        errors.image = "tiene que ser un enlace valido";
    }

    // validacion del height::::::::
    if (Number(inputs.heightMin) <= 0 || Number(inputs.heightMax) <= 0) {
        errors.heightMin = "Tiene que tener una cantidad positiva";
    }
    if (inputs.heightMax === "") {
        errors.heightMax = "Tiene que tener una altura maxima.";
    }
    if (inputs.heightMin === "") {
        errors.heightMin = "Tiene que tener una altura minima.";
    }
    if (!regexNumber.test(inputs.heightMin)) {
        errors.heightMin = "tiene que ser un numero entero positivo.";
    }
    if (!regexNumber.test(inputs.heightMax)) {
        errors.heightMax = "tiene que ser un numero entero positivo.";
    }
    if (Number(inputs.heightMin) > Number(inputs.heightMax)) {
        errors.heightMin = "el valor minimo tiene que se menor al maximo";
    }

    // validacion de weight::::::::
    if (Number(inputs.weightMin) <= 0 || Number(inputs.weightMax) <= 0) {
        errors.weightMin = "Tiene que tener una cantidad positiva";
    }
    if (inputs.weightMax === "") {
        errors.weightMax = "Tiene que tener una peso maximo.";
    }
    if (inputs.weightMin === "") {
        errors.weightMin = "Tiene que tener una peso minimo.";
    }
    if (!regexNumber.test(inputs.weightMin)) {
        errors.weightMin = "tiene que ser un numero entero positivo.";
    }
    if (!regexNumber.test(inputs.weightMax)) {
        errors.weightMax = "tiene que ser un numero entero positivo.";
    }
    if (Number(inputs.weightMin) > Number(inputs.weightMax)) {
        errors.weightMin = "el valor minimo tiene que se menor al maximo";
    }


    // validacion life span::::::::

    if (Number(inputs.lifeMin) <= 0 || Number(inputs.lifeMax) <= 0) {
        errors.lifeMin = "Tiene que tener una cantidad positiva";
    }

    if (inputs.lifeMax === "") {
        errors.lifeMax = "Tiene que tener una vida maxima.";
    }
    if (inputs.lifeMin === "") {
        errors.lifeMin = "Tiene que tener una vida minima.";
    }
    if (!regexNumber.test(inputs.lifeMin)) {
        errors.lifeMin = "tiene que ser un numero entero positivo.";
    }
    if (!regexNumber.test(inputs.lifeMax)) {
        errors.lifeMax = "tiene que ser un numero entero positivo.";
    }
    if (Number(inputs.lifeMin) > Number(inputs.lifeMax)) {
        errors.lifeMin = "el valor minimo tiene que se menor al maximo";
    }

    // validacion temperaments::::::::

    if (inputs.temperament.length === 0) {
        errors.temperament = "selecciona como minimo un temperamento";
    }


    return errors;
}
