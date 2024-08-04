var wedName="TestWord"
//設定外觀
setUserTheme()
//當點擊設定視窗外圍
window.onclick = function(event) {
    if (event.target == document.getElementById("settingsModal")) {
        closeSetting()
    }
}
document.getElementById("userThemeSettings").addEventListener("change",function(){
    localStorage.setItem(`${wedName}_userTheme`,String(document.getElementById("userThemeSettings").value))
    setUserTheme()
})
