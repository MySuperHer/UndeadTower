function call(){
    if(localStorage.getItem("place") != "house"){
        localStorage.removeItem("monster");
        localStorage.setItem("lv", "1");
        localStorage.setItem("place", "house");
    }
    if(localStorage.getItem("monster") == null){
        tre11.style.display = 'none';
        luk = Number(localStorage.getItem("LUK"));
        lv = Number(localStorage.getItem("LV"));
        thing = Math.random() * 5 * luk;
        if(thing > 100){
            getthing();
        }else{
            localStorage.setItem("monster", "菜雞");
            localStorage.setItem("lv", String(Math.round(Math.random() * 3 + lv)));
            look();
        }
    }
}

function getthing(){
    LV = Number(localStorage.getItem("LV"));
    exp = Number(localStorage.getItem("EXP"));
    mon = Number(localStorage.getItem("money"));
    rand = Math.random() * 100 + 1;
    if(rand > 50){
        var content = '獲得' + String(LV) + '經驗值';
        localStorage.setItem("EXP", String(exp + lv));
    }else{
        var content = '獲得' + String(LV) + '金錢';
        localStorage.setItem("money", String(mon + lv));
    }
    tre11.style.display = 'block';
    $('#house').after(content);
}

function look(){
    lv = Number(localStorage.getItem("lv"));
    monster = localStorage.getItem("monster");
    monstercreate();
    var content = '遭遇到等級' + String(lv) + '的' + monster + '<br></br>';
    $('#house').append(content);
    tre11.style.display = 'none';
    tre12.style.display = 'block';
    tre13.style.display = 'block';
    tre14.style.display = 'block';
    tre15.style.display = 'block';
    tre16.style.display = 'block';
    tre17.style.display = 'block';
    if(localStorage.getItem("skill") != null){
        tre18.style.display = 'block';
    }
}

function monstercreate(){
    lv = Number(localStorage.getItem("lv"));
    localStorage.setItem("MSTR", String(1 + 2 * lv));
    localStorage.setItem("MDEF", String(2 + 3 * lv));
    localStorage.setItem("MINT", String(2 + 2 * lv));
    localStorage.setItem("MLUK", String(3 + 3 * lv));
    localStorage.setItem("MVIT", String(4 + 4 * lv));
    localStorage.setItem("MMP", "0");
    localStorage.setItem("MHP", String(20 + 10 * lv * lv));
    localStorage.setItem("POSE", "1");
}

function prepare(){
    str = Number(localStorage.getItem("STR"));
    def = Number(localStorage.getItem("DEF"));
    vit = Number(localStorage.getItem("VIT"));
    lv = Number(localStorage.getItem("LV"));
    localStorage.setItem("STR", String(str + lv));
    localStorage.setItem("DEF", String(def - lv));
    localStorage.setItem("VIT", String(vit + lv));
    var content = '你感覺自己渾身充滿了能量。<br></br>';
    $('#house').after(content);
    byfight();
}

function resistance(){
    str = Number(localStorage.getItem("STR"));
    def = Number(localStorage.getItem("DEF"));
    vit = Number(localStorage.getItem("VIT"));
    lv = Number(localStorage.getItem("LV"));
    localStorage.setItem("STR", String(str - lv));
    localStorage.setItem("DEF", String(def + 2 * lv));
    localStorage.setItem("VIT", String(vit - 2 * lv));
    var content = '你穩穩地蹲了下來。<br></br>';
    $('#house').after(content);
    byfight();
}

function rest(){
    int = Number(localStorage.getItem("INT"));
    def = Number(localStorage.getItem("DEF"));
    hp = Number(localStorage.getItem("HP"));
    vit = Number(localStorage.getItem("VIT"));
    lv = Number(localStorage.getItem("LV"));
    localStorage.setItem("INT", String(int + lv));
    localStorage.setItem("DEF", String(def - lv));
    localStorage.setItem("VIT", String(vit + lv));
    localStorage.setItem("HP", String(hp + 10 * lv));
    var content = '你不管怪物在原地坐下休息。<br></br>';
    $('#house').after(content);
    byfight();
}

function fight(x){
    str = Number(localStorage.getItem("STR"));
    def = Number(localStorage.getItem("DEF"));
    int = Number(localStorage.getItem("INT"));
    luk = Number(localStorage.getItem("LUK"));
    vit = Number(localStorage.getItem("VIT"));
    hp = Number(localStorage.getItem("HP"));
    exp = Number(localStorage.getItem("exp"));
    mstr = Number(localStorage.getItem("MSTR"));
    mdef = Number(localStorage.getItem("MDEF"));
    mint = Number(localStorage.getItem("MINT"));
    mluk = Number(localStorage.getItem("MLUK"));
    mvit = Number(localStorage.getItem("MVIT"));
    mhp = Number(localStorage.getItem("MHP"));
    pose = Number(localStorage.getItem("POSE"));
    mon = localStorage.getItem("monster");
    lv = Number(localStorage.getItem("lv"));
    if(x == pose){
        harm = 0;
        var content = '你的攻擊被' + mon + '抵擋了。<br></br>';
    }else{
        critical = Math.random() * (100 + luk);
        if(critical > 100){
            if(x == 1){
                mint = mint - 2;
                var content = '你的攻擊爆擊了' + mon + '的頭部，';
            }else if(x == 2){
                mstr = mstr - 2;
                var content = '你的攻擊爆擊了' + mon + '的腹部，';
            }else{
                mdef = mdef - 2;
                var content = '你的攻擊爆擊了' + mon + '的腿部，';
            }
            harm = Math.round((str - mdef) * (100 + int) / 100);
            if(harm <= 1){
                harm = vit;
                vit -= 2;
            }
        }else{
            if(x == 1){
                mint = mint - 1;
                var content = '你攻擊了' + mon + '的頭部，';
            }else if(x == 2){
                mstr = mstr - 1;
                var content = '你攻擊了' + mon + '的腹部，';
            }else{
                mdef = mdef - 1;
                var content = '你攻擊了' + mon + '的腿部，';
            }
            harm = str + Math.round(vit / 2) - mdef;
            vit -= 1;
            if(harm <= 1){
                harm = Math.round(vit / 2);
                vit -= 1;
            }
        }
        if(harm > 0){
            mhp -= harm;
            content += '造成' + String(harm) + '點傷害。<br></br>';
        }else{
            content += '沒有造成傷害。<br></br>';
        }
        localStorage.setItem("VIT", String(vit));
        localStorage.setItem("MINT", String(mint));
        localStorage.setItem("MSTR", String(mstr));
        localStorage.setItem("MDEF", String(mdef));
        localStorage.setItem("MHP", String(mhp));
        if(mhp <= 0){
            content += mon + '被擊敗了，獲得' + String(3 * lv) + '點經驗值<br></br>';
            localStorage.setItem("exp", String(exp + 3 * lv));
            localStorage.removeItem("monster");
            tre11.style.display = 'block';
            tre12.style.display = 'none';
            tre13.style.display = 'none';
            tre14.style.display = 'none';
            tre15.style.display = 'none';
            tre16.style.display = 'none';
            tre17.style.display = 'none';
            tre18.style.display = 'none';
            tre19.style.display = 'none';
        }else{
            byfight();
        }
    }
    changepose();
    $('#house').after(content);
}

function changepose(){
    pose = Number(localStorage.getItem("POSE"));
    localStorage.setItem("POSE", String(pose + 2) % 3);
}

function byfight(){
    str = Number(localStorage.getItem("STR"));
    def = Number(localStorage.getItem("DEF"));
    int = Number(localStorage.getItem("INT"));
    luk = Number(localStorage.getItem("LUK"));
    vit = Number(localStorage.getItem("VIT"));
    hp = Number(localStorage.getItem("HP"));
    exp = Number(localStorage.getItem("exp"));
    mstr = Number(localStorage.getItem("MSTR"));
    mdef = Number(localStorage.getItem("MDEF"));
    mint = Number(localStorage.getItem("MINT"));
    mluk = Number(localStorage.getItem("MLUK"));
    mvit = Number(localStorage.getItem("MVIT"));
    mhp = Number(localStorage.getItem("MHP"));
    pose = Number(localStorage.getItem("POSE"));
    mon = localStorage.getItem("monster");
    lv = Number(localStorage.getItem("lv"));
    critical = Math.random() * (100 + luk);
    if(critical > 100){
        var content = mon + '的攻擊爆擊了，';
        harm = Math.round((mstr - def) * (100 + mint) / 100);
        mvit -= 1;
        if(harm <= 1){
            harm = mvit;
            mvit -= 2;
        }
    }else{
        var content =  mon + '攻擊了你，';
        harm = mstr + Math.round(mvit / 2) - def;
        mvit -= 1;
        if(harm <= 1){
            harm = Math.round(mvit / 2);
            mvit -= 1;
        }
    }
    if(harm > 0){
        hp -= harm;
        content += '造成' + String(harm) + '點傷害。<br></br>';
    }else{
        content += '沒有造成傷害。<br></br>';
    }
    localStorage.setItem("MVIT", String(mvit));
    localStorage.setItem("HP", String(hp));
    if(hp <= 0){
        content += '你被擊敗了，請轉生<br></br>';
        localStorage.removeItem("again");
        tre11.style.display = 'none';
        tre12.style.display = 'none';
        tre13.style.display = 'none';
        tre14.style.display = 'none';
        tre15.style.display = 'none';
        tre16.style.display = 'none';
        tre17.style.display = 'none';
        tre18.style.display = 'none';
        tre19.style.display = 'none';
        tre111.style.display = 'block';
    }
    $('#house').after(content);
}