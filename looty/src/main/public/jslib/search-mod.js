/*
    Search for mod names in col-div titles which have descriptions written in  ComputedItemProps.scala
    code taken from https://fusejs.io/
*/

//---------------------------fuse--------------------
const allColumns = Array.from(document.getElementsByClassName("col-div"));
const allColumns2 = Array.from(document.querySelectorAll(".col-div"));
//documentation about options: https://fusejs.io/api/options.html
const options = { //fuse.js options

    // isCaseSensitive: false,
    // includeScore: false,
    shouldSort: false,
    // includeMatches: false,
    //findAllMatches: true,
    // minMatchCharLength: 1,
    // location: 0,
    threshold: 0,
    //distance: 3,
    // useExtendedSearch: false,
    ignoreLocation: true
    // ignoreFieldNorm: false,
    // keys: []
};
const fuseWithTitles = new Fuse(allColTitlesArr(), { threshold: 0, ignoreLocation: true});
const input = document.getElementById("search-mod");
const allGroups = Array.from(document.getElementsByClassName("group-div"));
// -----------------initialization end---------------

function allColTitlesArr() { //build array with all titles in columns
    all = [];
    allColumns.forEach((column) => {
        all.push(column.title);
    });
    return all;
}

function findMod(e) {
    // Search through all group-div and their col-div elements and
    // compare their title with input text
    let inputText = e.target.value
    if (inputText.length == 0) {
        //clear
        $(".group-div").show();
        $(".group-div").css("opacity",1);
        $(".col-div").removeClass("select-mod"); //remove all previous selections
        $(".col-div").css("opacity",1);
        return;
    }
    allGroups.forEach((group) => {
        let isInGroup = false;
        let cols = Array.from(group.querySelectorAll(".col-div"));
        cols.forEach((col) => {
            //when there is some text in input field, that we can search for ...
            let results = fuseWithTitles.search(inputText);
            //(Array.isArray(results) && results.length > 0)
            let resultsMaped = results.map((el)=> el.item)
            //check if it found match in column title
            if (resultsMaped.includes(col.title)) {
                isInGroup = true;
                group.style.display = 'block';
                col.style.opacity = 1;
                col.classList.add("select-mod");
            } else {
                //not found, and remove class if previously had it
                col.classList.remove("select-mod");
                col.style.opacity = 0.4; //fade not selected buttons
            }
        });
        //hide group-div were mods were not found
        if (!isInGroup) group.style.display = 'none';
        else group.style.display = 'block';
    });
}

/*function findContains(e) {
    let inputText = e.target.value;
    if (inputText.length > 0) {
        $(".col-div").removeClass("select-mod");
        //console.table( fuseWithTitles);
        let results = fuseWithTitles.search(inputText);
        if (Array.isArray(results) && results.length > 0) {
            let resultsMaped = results.map((el)=> el.item);
            allColumns.forEach((col) => {
                 if (resultsMaped.includes(col.title)) {
                     col.classList.add("select-mod");
                     col.style.opacity = 1;
                 }
                 else {
                     col.classList.remove("select-mod");
                     col.style.opacity = 0.5;
                 }
            });
        }
    } else {
        //$() //cos bedziesz robil z grupami ?
        $(".col-div").removeClass("select-mod");
    }
}*/

input.addEventListener("keyup", findMod, false);