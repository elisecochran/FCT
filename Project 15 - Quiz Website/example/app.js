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
    resetResult();

    if (soccer> basketball && soccer > gymnastics && soccer > baseball) {
        document.getElementById("soccer").style.display = "block";
    } else if (Seattle > LA && Seattle > Miami && Seattle > Chicago) {
        document.getElementById("basketball").style.display = "block";
    } else if (Miami > LA && Miami > Seattle && Miami > Chicago) {
        document.getElementById("gymnastics").style.display = "block";
    } else {
        document.getElementById("baseball").style.display = "block";
    }
}
