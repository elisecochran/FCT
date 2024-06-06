// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function resetResult() {
    document.getElementById("soccer").style.display = "none";
    document.getElementById("basketball").style.display = "none";
    document.getElementById("gymnastics").style.display = "none";
    document.getElementById("baseball").style.display = "none";
}

function seeResult() {
    var soccer = 0;
    var basketball = 0;
    var gymnastics = 0;
    var baseball = 0;

    if (document.getElementById("inside").checked) {
        gymnastics += 1;
        basketball += 1;
    } else if (document.getElementById("outside").checked) {
        soccer += 1;
    } else {
        baseball += 1;
    }

    if (document.getElementById("yes").checked) {
        soccer += 1;
        basketball += 1;
        baseball += 1;
    } else if (document.getElementById("no").checked) {
        gymnastics += 1;
    } else {
        soccer += 1;
        
    }

    if (document.getElementById("very").checked) {
        gymnastics += 1;

    } else if (document.getElementById("somewhat").checked) {
        soccer += 1;
    } else {
        basketball += 1;
        baseball += 1;
    }

    if (document.getElementById("its my best skill!").checked) {
        baseball += 1;
        basketball += 1;

    } else if (document.getElementById("mid").checked) {
        soccer += 1;
    } else {
        gymnastics += 1;
    }
       
        if (document.getElementById("very fast!").checked) {
            soccer += 1;
    
        } else if (document.getElementById("mid").checked) {
            baseball += 1;
        } else {
            gymnastics += 1;
            basketball += 1;
        }

        if (document.getElementById("yes its a need").checked) {
            basketball += 1;
            soccer += 1;
    
        } else if (document.getElementById("idc either way").checked) {
            baseball += 1;
        } else {
            gymnastics += 1;
            
        }

        if (document.getElementById("spring").checked) {
            baseball += 1;
            soccer += 1;
    
        } else if (document.getElementById("fall").checked) {
            basketball += 1;
        } else {
            gymnastics += 1;
            
        }

        if (document.getElementById("extremely").checked) {
            basketball += 1;
            
        } else if (document.getElementById("no im short").checked) {
            gymnastics += 1;
        } else {
            soccer += 1;
            baseball += 1;
            
        }
    resetResult();

    if (soccer> basketball && soccer > gymnastics && soccer > baseball) {
        document.getElementById("soccer").style.display = "block";
    } else if (basketball > soccer && basketball > baseball && basketball > gymnastics) {
        document.getElementById("basketball").style.display = "block";
    } else if (baseball > soccer && baseball > basketball && baseball > gymnastics) {
        document.getElementById("baseball").style.display = "block";
    }else if (gymnastics > basketball && gymnastics > soccer && gymnastics > baseball) {
            document.getElementById("gymnastics").style.display = "block";
    } else {
        document.getElementById("gymnastics").style.display = "block";
    }
}
