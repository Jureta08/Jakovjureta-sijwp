const dan=(new Date().getDay());
let day;
let vrstaDana;
switch (dan) {
  case 0:
    day = "nedjelja";
    break;
  case 1:
    day = "ponedjeljak";
    break;
  case 2:
     day = "utorak";
    break;
  case 3:
    day = "srijeda";
    break;
  case 4:
    day = "četvrtak";
    break;
  case 5:
    day = "petak";
    break;
  case 6:
    day = "subota";
}

if(dan >=1 && dan<=5){
    vrstaDana="radni dan";
} else {
    vrstaDana="neradni dan";
}
console.log(day);
console.log(vrstaDana);
if(day==="ponedjeljak"){
    console.log("Ja najviše volim JS od svih programskih jezika");
} else if(day==="četvrtak"){
    console.log("Mali petak!");
} else if(day==="petak"){
    console.log("Vikend na Vidiku!");
}