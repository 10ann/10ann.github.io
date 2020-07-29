 function viewPrompt() {
     var prmptMessage = prompt();
    var newMessage=prmptMessage+"さん訪問ありがとうございます！";
     var html_newMessage= document.getElementById("newMessage");
    html_newMessage.innerHTML = newMessage;
 }

 function omikuji() {
     var today = ["お花", "お店", "大切な人", "いきもの", "ファッション", "空", "料理", "海", "好きなもの", "商店街"]
     var random = Math.random() * 100;
     var randomNum = Math.floor(random);
     console.log(randomNum);
     if (randomNum >= 90) {
         texto = "今日は" + today[0] + "を撮ってみてはいかがでしょうか<p></p>季節の花を調べてみよう";
     } else if (randomNum >= 80) {
         texto = "今日は" + today[1] + "を撮ってみてはいかがでしょうか";
     } else if (randomNum >= 70) {
         texto = "今日は" + today[2] + "を撮ってみてはいかがでしょうか";
     } else if (randomNum >= 60) {
         texto = "今日は" + today[3] + "を撮ってみてはいかがでしょうか";
     } else if (randomNum >= 50) {
         texto = "今日は" + today[4] + "を撮ってみてはいかがでしょうか";
     } else if (randomNum >= 40) {
         texto = "今日は" + today[5] + "を撮ってみてはいかがでしょうか<p></P>上を見上げよう！";
     } else if (randomNum >= 30) {
         texto = "今日は" + today[6] + "を撮ってみてはいかがでしょうか。<p></p>家で作るのもいいし、どこかへ食べに行くのもいいですね。";
     } else if (randomNum >= 20) {
         texto = "今日は" + today[7] + "を撮ってみてはいかがでしょうか.<p></p>遠出するのもいいかも！";
     } else if (randomNum >= 10) {
         texto = "今日は" + today[8] + "を撮ってみてはいかがでしょうか";
     } else if (randomNum >= 0) {
         texto = "今日は" + today[9] + "を撮ってみてはいかがでしょうか";
     }
     document.getElementById("tex").innerHTML = texto;
 }
