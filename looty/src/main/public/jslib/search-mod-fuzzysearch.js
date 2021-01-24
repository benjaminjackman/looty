/*
Search for mod names in col-div titles which have descriptions written in  ComputedItemProps.scala
*/
/*function clearSelectionWhenEmpty(e) {
    //undo all changes to groups
    if (e.target.value.length === 0) {
        let groups = Array.from(document.getElementsByClassName("group-div"));
        groups.forEach((group) => {
            showEl(group);
        });
    }
}*/

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

function hideEl(el) {
    //el.style.opacity = 0.2;
    el.style.display = 'none';
}
function showEl(el) {
    //el.style.opacity = 0.2;
    el.style.display = 'block';
}

function checkGroupsForMatchedMods(event) {
    // Search through all group-div and their col-div elements and
    // compare their title with input text
    allGroups.forEach((group) => {
        let isInGroup = false;
        let cols = Array.from(group.querySelectorAll(".col-div"));
        cols.forEach((col) => {
            if (event.target.value.length > 0) {
                //when there is some text in input field, that we can search for ...
                //check if it found match in column title
                if (
                    fuzzysearch(event.target.value.toLowerCase(), col.title.toLowerCase())
                ) {
                    isInGroup = true;
                    showEl(group);
                    col.style.opacity = 1;
                    col.classList.add("select-mod");
                } else {
                    //not found, and remove class if previously had it
                    col.classList.remove("select-mod");
                    col.style.opacity = 0.4; //fade not selected buttons
                }
            } else {
                //if there is no text in input field
                showEl(group);
                col.classList.remove("select-mod"); //remove all previous selections
                col.style.opacity = 1;
            }
        });
        if (!isInGroup) hideEl(group);
        //fade group-div were mods were not found
        else showEl(group);
    });
}
input.addEventListener("keyup",checkGroupsForMatchedMods, false);
