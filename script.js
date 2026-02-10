function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (weight === "" || height === "") {
        document.getElementById("result").innerText = "Please enter values";
        return;
    }

    height = height / 100;
    let bmi = (weight / (height * height)).toFixed(2);

    let status = "";

    if (bmi < 18.5) status = "Underweight";
    else if (bmi < 25) status = "Normal weight";
    else if (bmi < 30) status = "Overweight";
    else status = "Obese";

    document.getElementById("result").innerText =
        "Your BMI: " + bmi + " (" + status + ")";
}
