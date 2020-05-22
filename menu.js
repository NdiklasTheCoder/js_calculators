function Menu(selection){
		if(selection=!""){
    	anything_else = prompt("Here is some"+selection+"for you. Anything else?");
      if(anything_else=="no"){
      	alert("thanks for choosing us");
      }
    }
}

var menu_select = prompt("What food would you like to be served?");
Menu(menu_select);
