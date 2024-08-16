
var queryString = window.location.search;


var params = new URLSearchParams(queryString);
var is_ok=1
var title = params.get('title');
var m_day = params.get('day');
var m_time = params.get('time');
if (m_day===null||title ===null||m_time===null){
    alert("請輸入所有必要參數")
}

//把標題數為title
var elements = document.getElementsByClassName("my_title");
for(var i = 0; i < elements.length; i++) {
    elements[i].innerText = title;
}
function updateTime(time_pass_f){
    var n_day=Math.floor(time_pass_f/(3600*24))
    time_pass_f-=(n_day*3600*24)
    var n_hours=Math.floor(time_pass_f/3600)
    time_pass_f-=(n_hours*3600)
    var n_minutes=Math.floor(time_pass_f/60)
    time_pass_f-=(n_minutes*60)
    var n_seconds=time_pass_f
    document.getElementById("time").innerHTML="還有"+n_day+"天"+n_hours+"小時"+n_minutes+"分鐘"+n_seconds+"秒"
}
// 在控制台中輸出參數值

function get_now_time(){
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    // 獲取目前的年、月、日
    var year = now.getFullYear(); // 年份
    var month = now.getMonth() + 1; // 月份是從 0 開始的，所以要加 1
    var day = now.getDate(); // 日
    now_day=year+'/'+month+'/'+day
    date1=new Date(now_day).getTime()
    date2=new Date(m_day).getTime()
    date1=date1/1000
    date2=date2/1000
    date1+=(minutes*60+hours*3600+seconds)
    date2+=Number(m_time)
    if (date2<date1){
        document.getElementById("time").innerHTML="還有"+0+"天"+0+"小時"+0+"分鐘"+0+"秒"
        is_ok=0
        alert("time up")
        clearInterval(forever_loop);
        document.getElementById("time").style="border: 20px solid red;"
        
    }else{
        //day pass



        time_pass=(date2-date1)
        updateTime(time_pass)
    }

}
var forever_loop= setInterval(get_now_time, 500);

