
function start(){


  $('#two').mouseover(function(){
  $('#two').addClass('vis');
  show();
  });
  $('#three').mouseover(function(){
  $('#three').addClass('vis');
  show();
  });
  $('#foor').mouseover(function(){
  $('#foor').addClass('vis');
  show();
  });
}

function show() {
  if (document.querySelector("#two").classList.contains("vis") ===
  document.querySelector("#three").classList.contains("vis")) {
    if (document.querySelector("#two").classList.contains("vis") ===
    document.querySelector("#foor").classList.contains("vis")){
      if (document.querySelector("#three").classList.contains("vis") ===
      document.querySelector("#foor").classList.contains("vis")){
        document.getElementById('one').removeAttribute('disabled');
      }
    }



}
};
start();
