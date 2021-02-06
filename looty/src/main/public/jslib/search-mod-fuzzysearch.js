/*
Search for mod names in col-div titles which have descriptions written in  ComputedItemProps.scala
*/

function fuzzysearch(needle, haystack) {
    //code taken from https://github.com/bevacqua/fuzzysearch
    var hlen = haystack.length;
    var nlen = needle.length;
    if (nlen > hlen) {
        return false;
    }
    if (nlen === hlen) {
        return needle === haystack;
    }
    outer: for (var i = 0, j = 0; i < nlen; i++) {
        var nch = needle.charCodeAt(i);
        while (j < hlen) {
            if (haystack.charCodeAt(j++) === nch) {
                continue outer;
            }
        }
        return false;
    }
    return true;
}

const input = document.getElementById("search-mod");
const allGroups = Array.from(document.getElementsByClassName("group-div"));
const cols = $(".col-div"); //JQuery
const groups = $(".group-div"); //JQuery

function clearPageResults() {
    cols.removeClass("select-mod").css("opacity", 1);
    groups.show();
}
function fade(el) {
    el.classList.remove("select-mod"); //in case of el == group it doesnt matter
    el.style.opacity = 0.4;
}

function select(col) {
    col.style.opacity = 1;
    col.classList.add("select-mod");
}

function hide(el) {
    el.style.display = 'none';
    //el.style.opacity = 0.4; //for version with fading group-divs, instead of disappearing
}
function show(el) {
    el.style.display = 'block';
    el.style.opacity = 1;
}
function findMod(e) {
    // Search through all col-div elements (in group-div) to find
    // one matching input field with its attribute data-mod-description
    let inputText = e.target.value.toLowerCase();
    clearPageResults();
    if (inputText.length > 0 && inputText.value !== "") {
        allGroups.forEach((group) => {
            show(group);
            let colsArr = Array.from(group.querySelectorAll(".col-div"));
            colsArr.forEach((col) => {
                let needle = col.dataset.modDescription.toLowerCase(); //<div data-mod-description
                    //when there is some text in input field, that we can search for ...
                    //check if it found match in column title
                    if (fuzzysearch(inputText, needle)) {
                        show(group);
                        select(col);
                    } else {
                        hide(group);
                        //not found, and remove class if previously had it
                        fade(col);
                    }
            }); //forEach colsArr
        });
    }
}

input.addEventListener("keyup",findMod, false);
