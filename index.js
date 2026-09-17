function f01(){
  c = document.querySelector("#color01").value;
  x = document.querySelector("#target01");
  console.log(x);
  x.style.backgroundColor = c;
}

function f02(num){
  x = document.querySelector("#target02");
  x.style.width = num + 'px';
  x.style.height = num + 'px';
}

function f03(){
  input31 = document.querySelector("#input31").value;
  input32 = document.querySelector("#input32").value;
  input33 = document.querySelector("#input33").value;
  resultArea = document.querySelector("#result-area")

  s = "구매자 :" + input31 + ", 상품명 : " + input32 + ", 가격 : " + input33 + "원 구매하셨습니다.";
  resultArea.innerHTML = s;

  console.log(input31);
  console.log(input32);
  console.log(input33);

  
}

// snake_case : result_area
// camelCase : resultArea
// 백팁 위치 : 물결 아래 / 문자열 표시 가능하다. 
