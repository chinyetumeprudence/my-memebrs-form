//VARIABLE DECLEARATION
const creditUnitOfA = parseInt(document.getElementById('creditUnitOfA').value);
const numOfA = parseInt(document.getElementById('numOfA').value);
const creditUnitOfB = document.getElementById('creditUnitOfB');
const numOfB = parseInt(document.getElementById('numOfB').value);
const creditUnitOfC = parseInt(document.getElementById('creditUnitOfC').value);
const numOfC = parseInt(document.getElementById('numOfC').value);
const creditUnitOfD = parseInt(document.getElementById('creditUnitOfD').value);
const numOfD = parseInt(document.getElementById('numOfD').value);
const creditUnitOfE = parseInt(document.getElementById('creditUnitOfE').value);
const numOfE = parseInt(document.getElementById('numOfE').value);
const creditUnitOfF = parseInt(document.getElementById('creditUnitOfF').value);
const numOfF = parseInt(document.getElementById('numOfF').value);
//GRADE POINT CALCULATION
const calcA = creditUnitOfA * numOfA;
const calcB = creditUnitOfB * numOfB;
const calcC = creditUnitOfC * numOfC;
const calcD = creditUnitOfD * numOfD;
const calcE = creditUnitOfE * numOfE;
//TOTAL CREDIT UNIT
const totalCreditUnit = creditUnitOfA + creditUnitOfB + creditUnitOfC + creditUnitOfD + creditUnitOfE + creditUnitOfF;
//TOTAL GRADE POINT
const totalGradePoint = calcA + calcB + calcC + calcD + calcE;
//CGPA CALCULATION
const CGPA_calculation = totalGradePoint/totalCreditUnit;
//LISTEN TO SUBMIT
document.getElementById('mainForm').addEventListener('submit', function(e) {
    document.getElementById('cgpaResult').style.display = 'block';
    e.preventDefault();
})
//DISPALY RESULT
document.getElementById('cgpaResult');