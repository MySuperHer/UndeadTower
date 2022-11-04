function levelup(){
    lv = Number(localStorage.getItem("LV"));
    exp = Number(localStorage.getItem("exp"));
    EXP = Math.round(Math.pow(Math.pow((lv + 3), 5) - 10 * (lv + 2) + 37, 1 / 2));
    localStorage.setItem("EXP", String(EXP));
    if(exp >= EXP){
        exp = exp - EXP;
        localStorage.setItem("LV", String(lv + 1));
        localStorage.setItem("exp", String(exp));
        grow();
        levelup();
    }
}

levelup();

function grow(){
    work = localStorage.getItem("work");
    if(work == "戰士"){
        warriorgrow();
    }else if(work == "魔法師"){
        magiciangrow();
    }else if(work == "盜賊"){
        thievesgrow();
    }
}

function warriorgrow(){
    lv = Number(localStorage.getItem("LV"));
    str = Number(localStorage.getItem("STR"));
    def = Number(localStorage.getItem("DEF"));
    int = Number(localStorage.getItem("INT"));
    luk = Number(localStorage.getItem("LUK"));
    vit = Number(localStorage.getItem("VIT"));
    mp = Number(localStorage.getItem("MP"));
    hp = Number(localStorage.getItem("HP"));
    localStorage.setItem("STR", String(str + 5 * lv));
    localStorage.setItem("DEF", String(def + 10 * lv));
    localStorage.setItem("INT", String(int + 3 * lv));
    localStorage.setItem("LUK", String(luk + 1 * lv));
    localStorage.setItem("VIT", String(vit + 3 * lv));
    localStorage.setItem("MP", String(mp + 0 * lv));
    localStorage.setItem("HP", String(hp + 100 * lv));
}

function magiciangrow(){
    lv = Number(localStorage.getItem("LV"));
    str = Number(localStorage.getItem("STR"));
    def = Number(localStorage.getItem("DEF"));
    int = Number(localStorage.getItem("INT"));
    luk = Number(localStorage.getItem("LUK"));
    vit = Number(localStorage.getItem("VIT"));
    mp = Number(localStorage.getItem("MP"));
    hp = Number(localStorage.getItem("HP"));
    localStorage.setItem("STR", String(str + 10 * lv));
    localStorage.setItem("DEF", String(def + 3 * lv));
    localStorage.setItem("INT", String(int + 10 * lv));
    localStorage.setItem("LUK", String(luk + 5 * lv));
    localStorage.setItem("VIT", String(vit + 3 * lv));
    localStorage.setItem("MP", String(mp + 30 * lv));
    localStorage.setItem("HP", String(hp + 45 * lv));
}

function thievesgrow(){
    lv = Number(localStorage.getItem("LV"));
    str = Number(localStorage.getItem("STR"));
    def = Number(localStorage.getItem("DEF"));
    int = Number(localStorage.getItem("INT"));
    luk = Number(localStorage.getItem("LUK"));
    vit = Number(localStorage.getItem("VIT"));
    mp = Number(localStorage.getItem("MP"));
    hp = Number(localStorage.getItem("HP"));
    localStorage.setItem("STR", String(str + 3 * lv));
    localStorage.setItem("DEF", String(def + 4 * lv));
    localStorage.setItem("INT", String(int + 3 * lv));
    localStorage.setItem("LUK", String(luk + 10 * lv));
    localStorage.setItem("VIT", String(vit + 5 * lv));
    localStorage.setItem("MP", String(mp + 15 * lv));
    localStorage.setItem("HP", String(hp + 50 * lv));
}