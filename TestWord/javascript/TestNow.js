
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
SetTestSwitch();
GetIdList();

//show and close
const TestNowButton = document.getElementById("TestNowButton");
const TestNowChickModal = document.getElementById("TestNowChickModal");
TestNowButton.addEventListener("click", OpenTestNowChickModal);

function OpenTestNowChickModal() {
  TestNowChickModal.hidden = false;
  GetNowItem();
  shuffle(NowTestItemWordsArray);
  document.getElementById("TestNow_Name").innerText = NowTestItemName;
  document.getElementById("TestNow_Words").value = NowTestItemWordsArray;
}
var stopNow = false;

//Star the test
const StartTestButton = document.getElementById("StartTestButton");
const TestNowModal = document.getElementById("TestNowModal");
StartTestButton.addEventListener("click", StarTheTest);
var sayTime = 0;

function sayTheTestWord() {
  var sayList = NowTestItemWordsArray;
  if (stopNow) {
    return 0;
  } else {
    if (sayTime > sayList.length) {
      Swal.fire({
        icon: "success",
        title: "考試結束！",
        text: "恭喜!",
        timer: 2000,
        timerProgressBar: true,
      });
      TestNowModal.hidden = true;
      document.getElementById("TestNow_Words").value = sayList;
      clearInterval(sayTheTestWord_all);
      sayTime = 0;
      return 0;
    }
    if (
      sayList[sayTime] == "" ||
      sayList[sayTime] == " " ||
      sayList[sayTime] == undefined
    ) {
      sayTime++;
      return 0;
    }
    document.getElementById("Say_Text").innerText = "正在播放……";
    var word = sayList[sayTime];
    console.log(word);
    console.log(sayTime);
    var synthesis = window.speechSynthesis;
    var utterance = new SpeechSynthesisUtterance(word);
    utterance.rate = document.getElementById("speed").value;
    utterance.lang = NowTestItemLanguage;
    synthesis.speak(utterance);
    utterance.onend = function (event) {
      if (sayThisWordTime == 1) {
        sayTime++;
        sayThisWordTime = document.getElementById("SayTime").value;
      } else {
        sayThisWordTime--;
      }

      console.log("End");
      if (!document.getElementById("AutoPlay").checked) {
        document.getElementById("stopButton").style.background = "#c907077c";
        document.getElementById("stopButton").innerText = "▲";
        stopNow = true;
      } else {
        stopNow = false;
      }
    };
  }
}
var sayThisWordTime;
var sayTheTestWord_all;
GetNowItem();
function StarTheTest() {
  shuffle(NowTestItemWordsArray);
  TestNowModal.hidden = false;
  document.getElementById("TestNow_Words").value = "考試中~~";
  sayTheTestWord();
  sayThisWordTime = document.getElementById("SayTime").value;
  sayTime = 0;
  sayTheTestWord_all = setInterval(sayTheTestWord, 3000);
  if (!document.getElementById("AutoPlay").checked) {
    document.getElementById("stopButton").style.background = "#c907077c";
    document.getElementById("stopButton").innerText = "▲";
    stopNow = true;
  }
}
