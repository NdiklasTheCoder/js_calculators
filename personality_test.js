    var indoor_outdoor_q = "Do you like the indoors or outdoors?";
    var introv_extro_q = "Are you introverted or extroverted?";



    var ind_cnf = prompt(indoor_outdoor_q);
    var introv_cnf = prompt(introv_extro_q);

    var pet = '';
    var personality = "";
    if(ind_cnf == "indoors"){
      pet = "Cat";

    }else{
      pet = "Dog";

    }
    if(introv_cnf == "introverted"){
      personality = "Introverted";
    }else{
      personality = "Extroverted";
    }

    alert("You are "+ personality+" and you should get a "+ pet);
