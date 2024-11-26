function check1(index){
  var message1 = document.getElementById("message1");
  if(index == 1){
    document.getElementById("message1").textContent = "今日は終了・明日の自分に任せろ";
  }
  else if(index == 3){
    document.getElementById("message2").textContent = "角度の固定・クロスの前兆とストキャスティクスの角度は両立させろ";
  }
  else if(index == 5){
    document.getElementById("message3").textContent = "1度PCを落として1から2時間トレードから離れる。再度確認この項目を確認";
  }
  else if(index == 7){
    document.getElementById("message4").textContent = "次のエントリーで巻き返そうとせずそういう時こそ落ち着いてエントリーしろ";
  }
}
function check2(index){
  const step = document.getElementById('step'+index);
  step.classList.remove('hidden');
}
