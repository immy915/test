function clickEvent(){
  
  // "好きな推しのセリフ"に入力された文字列を取得して変数「oshi」に代入する
  var oshi = document.getElementById("oshi").value;
  // "半角数字"に入力されている文字列を取得して変数「arg」に代入する
  var arg = document.getElementById("arg").value;
  
  // 「arg」が数値であった場合の処理
  if (!isNaN(arg)) {
    // 「arg」が3の倍数の場合の処理
    if (Number.isInteger(arg/3)){
      alert(oshi);
    } else {
    // 3の倍数以外の時の処理
      alert("入力値は「" + arg + "」です。");
    }
  } else {
  // 「arg」が数値以外の場合の処理
    alert("半角数字を入力してください。");
  }
};
