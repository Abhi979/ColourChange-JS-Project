//  alert("Hello! I am an alert box!!");

const btn = document.getElementById("btn");
const randomColor = () => {
 let val = "1234567890ABCDEF";
 let hash = "#";

  for (let i = 0; i < 6; i++) {
    hash = hash + val[Math.floor(Math.random() * 16)];
  }   
  return hash;
};
// console.log(randomColor());
//  function ChangeColour(){
//     document.body.style.backgroundColor = randomColor();

//  }


btn.addEventListener("click", function ChangeColour(){
  document.body.style.backgroundColor = randomColor();
});