var currentIndex;

function saveInformation() {
  if (
    document.getElementById("name").value == "" ||
    isNaN(document.getElementById("name").value) == false
  ) {
    alert("Name cannot be empty or integer");
  } else if (
    document.getElementById("age").value == "" ||
    isNaN(document.getElementById("age").value) == true
  ) {
    alert("Age cannot be empty or non integer");
  } else if (
    document.getElementById("city").value == "" ||
    isNaN(document.getElementById("city").value) == false
  ) {
    alert("City cannot be empty or integer");
  } else if (
    document.getElementById("job").value == "" ||
    isNaN(document.getElementById("job").value) == false
  ) {
    alert("Job cannot be empty or integer");
  } else {
    currentIndex = 0;
    allDates.information = [];
    var today = new Date();
    document.getElementById("card").style.visibility = "visible";
    document.getElementById("Name").innerHTML =
      document.getElementById("name").value +
      ", " +
      document.getElementById("age").value;
    document.getElementById("City").innerHTML = document.getElementById(
      "city"
    ).value;
    document.getElementById("Job").innerHTML = document.getElementById(
      "job"
    ).value;
    document.getElementById("Month").innerHTML = "Date:  " + printDate(today);
    updateDates(today);
  }
}

function updateDates(date) {
  dailyInformation = {
    date: printDate(date),
    symptoms: {
      mostCommon: [0, 0, 0],
      lessCommon: [0, 0, 0, 0, 0, 0, 0],
      serious: [0, 0, 0],
    },
  };
  allDates.information.push(dailyInformation);
  let i;
  for (let i = 0; i < 13; i++) {
    date.setDate(date.getDate() + 1);
    //printDate(date);
    dailyInformation = {
      date: printDate(date),
      symptoms: {
        mostCommon: [0, 0, 0],
        lessCommon: [0, 0, 0, 0, 0, 0, 0],
        serious: [0, 0, 0],
      },
    };
    allDates.information.push(dailyInformation);
  }
  console.log(allDates.information);
}

function printDate(date) {
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = date.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;
  return today;
}

function saveSymptoms() {
  console.log(allDates.information[currentIndex]);
  allDates.information[
    currentIndex
  ].symptoms.mostCommon[0] = document.getElementById("m1").checked;
  allDates.information[
    currentIndex
  ].symptoms.mostCommon[1] = document.getElementById("m2").checked;
  allDates.information[
    currentIndex
  ].symptoms.mostCommon[2] = document.getElementById("m3").checked;
  allDates.information[
    currentIndex
  ].symptoms.lessCommon[0] = document.getElementById("l1").checked;
  allDates.information[
    currentIndex
  ].symptoms.lessCommon[1] = document.getElementById("l2").checked;
  allDates.information[
    currentIndex
  ].symptoms.lessCommon[2] = document.getElementById("l3").checked;
  allDates.information[
    currentIndex
  ].symptoms.lessCommon[3] = document.getElementById("l4").checked;
  allDates.information[
    currentIndex
  ].symptoms.lessCommon[4] = document.getElementById("l5").checked;
  allDates.information[
    currentIndex
  ].symptoms.lessCommon[5] = document.getElementById("l6").checked;
  allDates.information[
    currentIndex
  ].symptoms.lessCommon[6] = document.getElementById("l7").checked;
  allDates.information[
    currentIndex
  ].symptoms.serious[0] = document.getElementById("s1").checked;
  allDates.information[
    currentIndex
  ].symptoms.serious[1] = document.getElementById("s2").checked;
  allDates.information[
    currentIndex
  ].symptoms.serious[2] = document.getElementById("s3").checked;
  checkCases();
  console.log(allDates);
}

function previousDate() {
  if (currentIndex != 0) {
    currentIndex--;

    document.getElementById("m1").checked =
      allDates.information[currentIndex].symptoms.mostCommon[0];
    document.getElementById("m2").checked =
      allDates.information[currentIndex].symptoms.mostCommon[1];
    document.getElementById("m3").checked =
      allDates.information[currentIndex].symptoms.mostCommon[2];
    document.getElementById("l1").checked =
      allDates.information[currentIndex].symptoms.lessCommon[0];
    document.getElementById("l2").checked =
      allDates.information[currentIndex].symptoms.lessCommon[1];
    document.getElementById("l3").checked =
      allDates.information[currentIndex].symptoms.lessCommon[2];
    document.getElementById("l4").checked =
      allDates.information[currentIndex].symptoms.lessCommon[3];
    document.getElementById("l5").checked =
      allDates.information[currentIndex].symptoms.lessCommon[4];
    document.getElementById("l6").checked =
      allDates.information[currentIndex].symptoms.lessCommon[5];
    document.getElementById("l7").checked =
      allDates.information[currentIndex].symptoms.lessCommon[6];
    document.getElementById("s1").checked =
      allDates.information[currentIndex].symptoms.serious[0];
    document.getElementById("s2").checked =
      allDates.information[currentIndex].symptoms.serious[1];
    document.getElementById("s3").checked =
      allDates.information[currentIndex].symptoms.serious[2];

    document.getElementById("Month").innerHTML =
      "Date:  " + allDates.information[currentIndex].date;
  }
}

function nextDate() {
  if (currentIndex != 13) {
    currentIndex++;

    document.getElementById("m1").checked =
      allDates.information[currentIndex].symptoms.mostCommon[0];
    document.getElementById("m2").checked =
      allDates.information[currentIndex].symptoms.mostCommon[1];
    document.getElementById("m3").checked =
      allDates.information[currentIndex].symptoms.mostCommon[2];
    document.getElementById("l1").checked =
      allDates.information[currentIndex].symptoms.lessCommon[0];
    document.getElementById("l2").checked =
      allDates.information[currentIndex].symptoms.lessCommon[1];
    document.getElementById("l3").checked =
      allDates.information[currentIndex].symptoms.lessCommon[2];
    document.getElementById("l4").checked =
      allDates.information[currentIndex].symptoms.lessCommon[3];
    document.getElementById("l5").checked =
      allDates.information[currentIndex].symptoms.lessCommon[4];
    document.getElementById("l6").checked =
      allDates.information[currentIndex].symptoms.lessCommon[5];
    document.getElementById("l7").checked =
      allDates.information[currentIndex].symptoms.lessCommon[6];
    document.getElementById("s1").checked =
      allDates.information[currentIndex].symptoms.serious[0];
    document.getElementById("s2").checked =
      allDates.information[currentIndex].symptoms.serious[1];
    document.getElementById("s3").checked =
      allDates.information[currentIndex].symptoms.serious[2];

    document.getElementById("Month").innerHTML =
      "Date:  " + allDates.information[currentIndex].date;
  }
}

function checkCases() {
  scoreYesterday = calculateScore(currentIndex - 1);
  scoreToday = calculateScore(currentIndex);

  //case1 çok hastasın hemen doktora git serious semptomlar gösteriyosun
  if (scoreYesterday.seriousScore >= 1 && scoreToday.seriousScore >= 1) {
    console.log(111111111111);
    document.getElementById("alert").style.visibility = "visible";
    document.getElementById("alert").className = "alertRed";
    document.getElementById("alert").innerHTML =
      "You Have Serious Symptoms Go to Doctor";
  }

  //case2 kendini izole et. Common ve uncommon semptomlar gösteriyosun
  else if (
    scoreYesterday.lessCommonScore >= 1 &&
    scoreToday.lessCommonScore >= 1 &&
    scoreYesterday.mostCommonScore >= 1 &&
    scoreToday.mostCommonScore >= 1
  ) {
    document.getElementById("alert").style.visibility = "visible";
    document.getElementById("alert").className = "alertOrange";
    document.getElementById("alert").innerHTML =
      "You show common symptoms but not serious. Stay ISOLATED";
  }

  //case3 kendini izole et yaygın olmayan corona semptomları gösteriyosun
  else if (
    (scoreYesterday.lessCommonScore >= 1 && scoreToday.lessCommonScore >= 1) ||
    (scoreYesterday.mostCommonScore >= 1 && scoreToday.mostCommonScore >= 1)
  ) {
    document.getElementById("alert").style.visibility = "visible";
    document.getElementById("alert").className = "alertBlue";
    document.getElementById("alert").innerHTML =
      "You do not show common Corona symptoms, stay isolated and safe.";
    // alert izole
  } else if (
    scoreYesterday.seriousScore == 0 &&
    scoreToday.seriousScore == 0 &&
    scoreYesterday.lessCommonScore == 0 &&
    scoreToday.lessCommonScore == 0 &&
    scoreYesterday.mostCommonScore == 0 &&
    scoreToday.mostCommonScore == 0
  ) {
    // hasta degil
    document.getElementById("alert").style.visibility = "visible";
    document.getElementById("alert").className = "alertGreen";
    document.getElementById("alert").innerHTML = "You are Fine";
  }
}

function calculateScore(index) {
  scores = {
    mostCommonScore: 0,
    lessCommonScore: 0,
    seriousScore: 0,
  };

  if (index >= 0 && index <= 13) {
    for (let i = 0; i < 3; i++) {
      if (allDates.information[index].symptoms.mostCommon[i] == true)
        scores.mostCommonScore++;
    }
    for (let i = 0; i < 7; i++) {
      if (allDates.information[index].symptoms.lessCommon[i] == true)
        scores.lessCommonScore++;
    }
    for (let i = 0; i < 3; i++) {
      if (allDates.information[index].symptoms.serious[i] == true)
        scores.seriousScore++;
    }
  }
  console.log(scores);
  return scores;
}

var allDates = {
  information: [],
};

var dailyInformation = {
  date: null,
  symptoms: {
    mostCommon: [0, 0, 0],
    lessCommon: [0, 0, 0, 0, 0, 0, 0],
    serious: [0, 0, 0],
  },
  //semptomlar indexte 0 ve 1 olarak tutulcak
};
