/*
    Search for mod names in col-div titles which have descriptions written in  ComputedItemProps.scala
    code taken from https://fusejs.io/
*/

//documentation about options: https://fusejs.io/api/options.html
const options = { //fuse.js options
    // isCaseSensitive: false,
    includeScore: false,
    shouldSort: true,
    // includeMatches: false,
    //findAllMatches: true,
    // minMatchCharLength: 1,
    // location: 0,
    threshold: 0.3,
    //distance: 3,
    // useExtendedSearch: false,
    //ignoreLocation: false
     ignoreFieldNorm: true,
    // keys: []
};
//{ threshold: 0, ignoreLocation: true} //previous options
const allColumns = Array.from(document.getElementsByClassName("col-div")); //HTMLElements
const fuse = new Fuse(dataSet(), {
        //possible bug when loaded variable with options instead of whole object like {...}
        threshold: 0.4,
        ignoreFieldNorm: true,
        includeScore: true,
        shouldSort: true
        }
    );
const input = document.getElementById("search-mod");
const allGroups = Array.from(document.getElementsByClassName("group-div")); //HTMLElements
const cols = $(".col-div"); //JQuery
const groups = $(".group-div"); //JQuery

function dataSet() { //build array with mod descriptions to search
    let all = [];
    allColumns.forEach((col) => {
        all.push(col.dataset.modDescription);
    });
    //show meh de dataz!
    //console.log(all);
    return all;
}
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
    groups.show();
    if (inputText.length > 0) {
        allGroups.forEach((group) => {
            //let isInGroup = true; //so we later can do something with group-div without matching col
            show(group);
            let colsArr = Array.from(group.querySelectorAll(".col-div"));
            colsArr.forEach((col) => {
                let needle = col.dataset.modDescription; //<div data-mod-description
                let results = fuse.search(inputText);
                let haystack = results.map((el) => el.item);
                if (haystack.includes(needle)) {
                    //isInGroup = true;
                    show(group);
                    select(col);
                } else {
                    hide(group);
                    fade(col); //fade not selected buttons
                }
            });
        });
    }
}

input.addEventListener("keyup", findMod, false); //<---

/*
//It checks only cols without hiding groups
function findCols(e) {
    let inputText = e.target.value;
    if (inputText.length > 0) {
        clearPageResults();
        let results = fuse.search(inputText);
        if (Array.isArray(results) && results.length > 0) {
            let haystack = results.map((el)=> el.item);
            allColumns.forEach((col) => {
                 if (haystack.includes(col.dataset.modDescription))
                     select(col);
                 else
                     fade(col);
            });
        }
    } else {
        clearPageResults();
    }
}
*/