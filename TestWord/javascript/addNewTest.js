
//show and close

const inputWordsModal = document.getElementById("inputWordsModal");

const addNewTest = document.getElementById("addNewTest");
const all_words = document.getElementById("all_words");
addNewTest.addEventListener("click", openInputWordsModal);
function openInputWordsModal() {
  inputWordsModal.hidden = false;
  document.getElementById("all_words_see").value = all_words.value.split(
    document.getElementById("splitWord").value
  );
}

var ifEdit = 0;
//save
const inputWords = document.getElementById("inputWords");
const save = document.getElementById("save");

const testName = document.getElementById("testName");
const language = document.getElementById("language");

save.addEventListener("click", saveTest);
function saveTest() {
  //檢查有沒有輸入
  if (all_words.value == "") {
    all_words.style.border = "2px solid red";
    all_words.style.outline = "none";
    document.getElementById("errorText").innerText = "請輸入考試名稱跟要考的字";
  } else {
    all_words.style.border = "";
    all_words.style.outline = "auto";
  }
  if (testName.value == "") {
    testName.style.border = "2px solid red";
    document.getElementById("errorText").innerText = "請輸入考試名稱跟要考的字";
    testName.style.outline = "none";
  } else {
    testName.style.border = "none";
    testName.style.outline = "auto";
  }
  if (all_words.value == "" || testName.value == "") {
    return 0;
  } else {
    document.getElementById("errorText").innerText = "";
  }
  //檢查完畢
  document.getElementById("all_words_see").value = all_words.value.split(
    document.getElementById("splitWord").value
  );
  if (ifEdit != 100) {
    var id = Math.round(Math.random() * 100000000);
    id =`${wedName}_`+String(id) + testName.value;
  }
  let TestWordAndName = {
    TestName: testName.value,
    words: all_words.value.split(document.getElementById("splitWord").value),
    language: language.value,
  };
  TestWordAndName = JSON.stringify(TestWordAndName);
  TestWordAndName = JSON.stringify(TestWordAndName);

  if (ifEdit != 100) {
    idList.push(id);
    localStorage.setItem(id, TestWordAndName);
  } else {
    localStorage.setItem(NowTestItemID, TestWordAndName);
  }
  ifEdit = 0;
  localStorage.setItem(`${wedName}_`+"idList", idList);
  inputWordsModal.hidden = true;
  SetTestSwitch();
  CloseInputWordsModal();
}
//預覽結果
document.getElementById("all_words").addEventListener("input", function () {
  document.getElementById("all_words_see").value = all_words.value.split(
    document.getElementById("splitWord").value
  );
});
