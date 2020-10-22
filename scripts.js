const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    let validForm = validateAge() && validateBirth() && validateCheckboxes('dogs') && validateSelectboxes() && validateEmail()
    && validateTextArea() &&  validateCustomMessage();
    if(validForm == false) {
        e.preventDefault();
    }
});

function validateCustomMessage() {
    let custom = document.getElementById('custom-q-text');
    if(custom.value == '') {
        custom.classList.add('is-invalid');
        return false;
    } else {
        custom.classList.remove('is-invalid');
        custom.classList.add('is-valid');
        return true;
    }
}

function validateTextArea() {
    let t = document.getElementById('text-area-field');
    if(t.value == '') {
        t.classList.add('is-invalid');
        return false;
    } else {
        t.classList.remove('is-invalid');
        t.classList.add('is-valid');
        return true;
    }
}

function showMaleQuestion() {
    let q = document.getElementById('specific-question');
    q.innerHTML = "Vaša obľúbená herečka?";
}
function showFemaleQuestion() {
    let q = document.getElementById('specific-question');
    q.innerHTML = "Váš obľúbený herec?";
}

function validateEmail() {
    let email = document.getElementById('email');
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.value == "") {
        email.classList.add('is-invalid');
        return false;
    }
    if(re.test(String(email.value).toLowerCase()) == false) {
        email.classList.add('is-invalid');
        return false;
    } else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        return true;
    }
}

function validateSelectboxes() {
    let gameGenres = document.getElementById('game-genres');
    let gameSeries = document.getElementById('game-series');
    let gameSpecific = document.getElementById('game-specific');
    // validation
    if(gameGenres.value == "") {
        gameGenres.classList.add('is-invalid');
    } else {
        gameGenres.classList.remove('is-invalid');
        gameGenres.classList.add('is-valid');
    }
    if(gameSeries.value == " ") {
        gameSeries.classList.add('is-invalid');
    } else {
        gameSeries.classList.remove('is-invalid');
        gameSeries.classList.add('is-valid');
    }
    if(gameSpecific.value == " ") {
        gameSpecific.classList.add('is-invalid');
    } else {
        gameSpecific.classList.remove('is-invalid');
        gameSpecific.classList.add('is-valid');
    }
    //
    if( gameGenres.value === "" || gameSeries.value === " " || gameSpecific.value === " " 
     || gameGenres.value === null || gameSeries.value === null || gameSpecific.value === null) {
        return false;
    } else {
        return true;
    }
}
function validateCheckboxes(className) {
    let dogs = document.getElementsByClassName(className);
    counter = 0;
    console.log(dogs[2].checked + " " + document.getElementById('other-text').value);
    thirdCheckedEmpty = (dogs[2].checked && document.getElementById('other-text').value === "");
    for(let i = 0; i < dogs.length - 1; i++) {
        if(dogs[i].checked) {
            counter++;
        }
    }
    otherDog = document.getElementById('other-text');
    if(otherDog.type !== 'hidden' && otherDog.value !== "") {
        counter++;
    }
    if(thirdCheckedEmpty === true) {
        return false;
    }
    if(counter > 0) {
        dogs.classList.add('is-invalid');
        return true;
    } else {
        return false;
    }
}

function validateBirth() {
    let form = document.getElementById("form");
    let age = form["age"];
    let inputDate = new Date(document.getElementById("birthday").value);
    let currentDate = new Date();
    let incorrectAge = age.value != (currentDate.getFullYear() - inputDate.getFullYear() );

    if( birthday.value == "" || birthday.value == null) {
        birthday.classList.add("is-invalid");
        age.classList.add("is-invalid");
        return false;
    } else {
        birthday.classList.remove("is-invalid");
        birthday.classList.add("is-valid"); 
    }
    if(age.value === "" || age.value == null) {
        age.classList.add("is-invalid");
        return false;
    }
    if(incorrectAge)  {
        birthday.classList.add("is-invalid");
        age.classList.add("is-invalid");
        return false;
    } else {
        birthday.classList.remove("is-invalid");
        birthday.classList.add("is-valid");
        age.classList.remove("is-invalid");
        age.classList.add("is-valid");
    }
    return true;
}


function validateAge() {
    let form = document.getElementById("form");
    let age = form["age"];
    let inputDate = new Date(document.getElementById("birthday").value);
    let currentDate = new Date();
    let incorrectAge = age.value != (currentDate.getFullYear() - inputDate.getFullYear() );

    if(age.value === "" || age.value == null) {
        age.classList.add("is-invalid");
        return false;
    } else {
        age.classList.remove("is-invalid");
        age.classList.add("is-valid");  
    }    
    if(incorrectAge)  {
        birthday.classList.add("is-invalid");
        age.classList.add("is-invalid");
        return false;
    } else {
        birthday.classList.remove("is-invalid");
        birthday.classList.add("is-valid");
        age.classList.remove("is-invalid");
        age.classList.add("is-valid");
    }
    return true;
}
function changeTextField() { 
    x = document.getElementById("other-text");
    if(document.getElementById("other-checkbox").checked) {
        x.type = "text";
    } else {
        x.value = "";
        x.type = "hidden";
    }
}
function fillSecondSelect() {
    let firstParameter = document.getElementById('game-genres');
    let secondParameter = document.getElementById('game-series');
    let thirdParameter = document.getElementById('game-specific');
    
    secondParameter.innerHTML = "";
    thirdParameter.innerHTML = "";

    if(firstParameter.value == "fps") {
        var options = [" | ", "callOfDuty|Call of Duty", "battlefield|Battlefield", "brothersInArms|Brothers in Arms"];
    } else if(firstParameter.value == "rpg") {
        var options = [" | ", "gothic|Gothic", "fallout|Fallout", "elderscrolls|Elder Scrolls"];
    } else if(firstParameter.value == "stealth") {
        var options = [" | ", "hitman|Hitman", "splinterCell|Splinter Cell", "dishonored|Dishonored"];
    } else {
        var options = [" | "];
    }

    //
    if(thirdParameter.value == " ") {
        var options = [" | "];
    }
    
    for(let i in options) {
        let pair = options[i].split("|");
        let option = document.createElement("option");
        option.value = pair[0];
        option.innerHTML = pair[1];
        thirdParameter.options.add(option);
    }
    //    
    for(let i in options) {
        let pair = options[i].split("|");
        let option = document.createElement("option");
        option.value = pair[0];
        option.innerHTML = pair[1];
        secondParameter.options.add(option);
    }
}

function fillThirdSelect() {
    let firstParameter = document.getElementById('game-genres');
    let secondParameter = document.getElementById('game-series');
    let thirdParameter = document.getElementById('game-specific');
    
    thirdParameter.innerHTML = "";
    
    if(secondParameter.value == "hitman") {
        var options = [" | ", "hitmanAbsolute|Hitman Absolute", "hitmanBloodMoney|Hitman 4: Blood Money", "hitmanContracts|Hitman 3: Contracts"];
    } else if(secondParameter.value == "splinterCell") {
        var options = [" | ", "splinterCellBlacklist|Splinter Cell Blacklist", "splinterCellConviction|Splinter Cell Conviction", "splinterCellDoubleAgent|Splinter Cell Double Agent"];
    } else if(secondParameter.value == "dishonored") {
        var options = [" | ", "dishonored1|Dishonored 1", "dishonored2|Dishonored 2", "dishonored3|Dishonored 3"];
    } else if(secondParameter.value == "gothic") {
        var options = [" | ", "gothic1|Gothic 1", "gothic2|Gothic 2", "gothic3|Gothic 3"];
    } else if(secondParameter.value == "fallout") {
        var options = [" | ", "fallout1|Fallout 1", "fallout2|Fallout 2", "fallout3|Fallout 3"];
    } else if(secondParameter.value == "elderscrolls") {
        var options = [" | ", "elderScrollsOnline|Elder Scrolls Online", "elderScrollsBlades|Elder Scrolls Blades", "elderScrollsLegends|Elder Scrolls Legends"];
    } else if(secondParameter.value == "callOfDuty") {
        var options = [" | ", "callOfDutyBlackOps|Call of Duty Black Ops", "callOfDutyWarzone|Call of Duty Warzone", "callOfDutyModernWarfare|Call of Duty Modern Warfare"];
    } else if(secondParameter.value == "battlefield") {
        var options = [" | ", "battlefield2142|Battlefield 2142", "battlefield3|Battlefield 3", "battlefield4|Battlefield 4"];
    } else if(secondParameter.value == "brothersInArms") {
        var options = [" | ", "biaHourOfHeroes|Brothers in Arms: Hour of Heroes", "bia2GlobalFront|Brothers in Arms 2: Global Front", "bia3SonsOfWar|Brothers in Arms 3: Sons of War"];
    } else {
        var options = [" | "];
    }

    for(let i in options) {
        let pair = options[i].split("|");
        let option = document.createElement("option");
        option.value = pair[0];
        option.innerHTML = pair[1];
        thirdParameter.options.add(option);
    }

    function testingshit() {
        let firstParameter = document.getElementById('game-genres');
        let secondParameter = document.getElementById('game-series');
        let thirdParameter = document.getElementById('game-specific');

        if(thirdParameter.value == " ") {
            var options = [" | "];
        }
        
        for(let i in options) {
            let pair = options[i].split("|");
            let option = document.createElement("option");
            option.value = pair[0];
            option.innerHTML = pair[1];
            thirdParameter.options.add(option);
        }

    }
}