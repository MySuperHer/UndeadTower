function create(){
    if(localStorage.getItem("again") == null){
        work = localStorage.getItem("work");
        if(work == "戰士"){
            warriorcreate();
        }else if(work == "魔法師"){
            magiciancreate();
        }else if(work == "盜賊"){
            thievescreate();
        }
        localStorage.setItem("place", "house");
        localStorage.removeItem("monster");
        localStorage.removeItem("story");
        localStorage.setItem("again", "1");
    }
}

create();

function warriorcreate(){
    localStorage.setItem("LV", "1");
    localStorage.setItem("exp", "0");
    localStorage.setItem("STR", "3");
    localStorage.setItem("DEF", "5");
    localStorage.setItem("INT", "1");
    localStorage.setItem("LUK", "1");
    localStorage.setItem("VIT", "7");
    localStorage.setItem("MP", "0");
    localStorage.setItem("HP", "80");
    localStorage.setItem("money", "0");
}

function magiciancreate(){
    localStorage.setItem("LV", "1");
    localStorage.setItem("exp", "0");
    localStorage.setItem("STR", "4");
    localStorage.setItem("DEF", "1");
    localStorage.setItem("INT", "7");
    localStorage.setItem("LUK", "0");
    localStorage.setItem("VIT", "5");
    localStorage.setItem("MP", "30");
    localStorage.setItem("HP", "50");
    localStorage.setItem("money", "0");
}

function thievescreate(){
    localStorage.setItem("LV", "1");
    localStorage.setItem("exp", "0");
    localStorage.setItem("STR", "2");
    localStorage.setItem("DEF", "3");
    localStorage.setItem("INT", "2");
    localStorage.setItem("LUK", "10");
    localStorage.setItem("VIT", "6");
    localStorage.setItem("MP", "10");
    localStorage.setItem("HP", "60");
    localStorage.setItem("money", "100");
}