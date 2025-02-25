// timezone
var now = luxon.DateTime.now();
var projectGalleryHtml = "";
var viewHtml = "";
let projectImgNum = 0;
let projectNum = 0;
const maxProjectNum = projects.length - 1;
let maxProjectImgNum = 0;
var timeSetInterval;

// general

// floating windows
const $floatingWindows = document.querySelector("#floatingWindows");
const $phoneNav = document.querySelector("#phoneNav");
const $infoPopup = document.querySelector("#infoPopup");
const $projectGallery = document.querySelector("#projectGallery");

// main view
const $view = document.querySelector("#view");
const $content = document.querySelector("#content");
const $desktopInfo = document.querySelector("#desktopInfo");

// phone buttons
const $navBtn = document.querySelector("#navBtn");
const $infoBtn = document.querySelector("#infoBtn");
const $galleryBtn = document.querySelector("#galleryBtn");
const $cameraGalleryBtn = document.querySelector("#cameraGalleryBtn");

// nav buttons
const $deskStartBtn = document.querySelector("#deskStartBtn");
const $phoneStartBtn = document.querySelector("#phoneStartBtn");
const $deskProjectsBtn = document.querySelector("#deskProjectsBtn");
const $phoneProjectsBtn = document.querySelector("#phoneProjectsBtn");
const $deskAboutBtn = document.querySelector("#deskAboutBtn");
const $phoneAboutBtn = document.querySelector("#phoneAboutBtn");

startWeb();
function startWeb() {
    loadEvents();
    loadStart();

    projects.forEach(writeGallery);
}

// PHONE SWIPE

$view.addEventListener(
    "touchstart",
    function (event) {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
    },
    false
);

$view.addEventListener(
    "touchend",
    function (event) {
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        handleGesture();
    },
    false
);

function handleGesture() {
    if (touchendX < touchstartX) {
        // swiped left
        imgViewPlus();
    }

    if (touchendX > touchstartX) {
        // swiped right
        imgViewMinus();
    }

    if (touchendY < touchstartY) {
        // swiped up
    }

    if (touchendY > touchstartY) {
        // swiped down
    }

    if (touchendY === touchstartY) {
        // tap    }
    }
}

// DESKTOP SCROLL

function keyCheck(e) {
    if (
        e.keyCode == 39 ||
        e.keyCode == 68 ||
        e.keyCode == 83 ||
        e.keyCode == 32 ||
        e.keyCode == 40
    ) {
        imgViewPlus();
    } else if (
        e.keyCode == 37 ||
        e.keyCode == 65 ||
        e.keyCode == 87 ||
        e.keyCode == 38 ||
        e.keyCode == 8
    ) {
        imgViewMinus();
    }
}

// change image
function imgViewPlus() {
    if (projectNum === maxProjectNum && projectImgNum === maxProjectImgNum) {
        projectNum = 0;
        projectImgNum = 0;

        loadView(projectNum, projectImgNum);
    } else if (
        projectImgNum === maxProjectImgNum &&
        projectNum != maxProjectNum
    ) {
        projectNum = projectNum + 1;
        projectImgNum = 0;

        loadView(projectNum, projectImgNum);
    } else {
        projectImgNum = projectImgNum + 1;

        loadView(projectNum, projectImgNum);
    }
}
function imgViewMinus() {
    if (projectNum === 0 && projectImgNum === 0) {
        projectNum = maxProjectNum;

        maxProjectImgNum = projects[projectNum].imgs.length - 1;

        projectImgNum = maxProjectImgNum;

        loadView(projectNum, projectImgNum);
    } else if (projectImgNum === 0 && projectNum != 0) {
        projectNum = projectNum - 1;

        projectImgNum = projects[projectNum].imgs.length + -1;

        loadView(projectNum, projectImgNum);
    } else {
        projectImgNum = projectImgNum - 1;
        loadView(projectNum, projectImgNum);
    }
}

// PHONE SWIPE
function loadView(e, n) {
    clearInterval(timeSetInterval);
    viewHtml = `
    <h4>${projects[e].date}</h4>
    ${projects[e].imgs[n].type}${projects[e].imgs[n].src}${projects[e].imgs[n].endType}`;
    $view.innerHTML = viewHtml;

    var titlephone = document.querySelector("#infoPopup h3");
    var title = document.querySelector("#desktopInfo h3");
    title.innerHTML = projects[e].nombre;
    titlephone.innerHTML = projects[e].nombre;
    var textphone = document.querySelector("#infoPopup p");
    var text = document.querySelector("#desktopInfo p");
    text.innerHTML = projects[e].asignatura + "\r\n\r\n" + projects[e].sobre;
    textphone.innerHTML =
        projects[e].asignatura + "\r\n\r\n" + projects[e].sobre;

    maxProjectImgNum = projects[e].imgs.length - 1;
}
function loadEvents() {
    document.addEventListener("keydown", keyCheck);
    $galleryBtn.addEventListener("click", displayGallery);
    $cameraGalleryBtn.addEventListener("click", displayGallery);
    $navBtn.addEventListener("click", displayNav);
    $infoBtn.addEventListener("click", displayInfo);
    $phoneProjectsBtn.addEventListener("click", displayGallery);
    $deskProjectsBtn.addEventListener("click", () => {
        loadView(0, 0);
        projectNum = 0;
        projectImgNum = 0;
    });
    $deskAboutBtn.addEventListener("click", loadAbout);
    $phoneAboutBtn.addEventListener("click", loadAbout);
    $phoneStartBtn.addEventListener("click", loadStart);
    $deskStartBtn.addEventListener("click", loadStart);
}
function loadStart() {
    $infoPopup.style.display = "none";
    $phoneNav.style.display = "none";
    $floatingWindows.style.display = "none";

    var title = document.querySelector("#desktopInfo h3");
    title.innerHTML = starterPack.title;

    var text = document.querySelector("#desktopInfo p");
    text.innerHTML = starterPack.textPC;

    var title2 = document.querySelector("#infoPopup h3");
    title2.innerHTML = starterPack.title;

    var text2 = document.querySelector("#infoPopup p");
    text2.innerHTML = starterPack.textPhone;

    $view.innerHTML =
        `
        <h4>${starterPack.dateVideo}</h4> ` + starterPack.videoIntro;
}
function loadAbout() {
    $infoPopup.style.display = "none";
    $phoneNav.style.display = "none";
    $floatingWindows.style.display = "none";

    var title = document.querySelector("#desktopInfo h3");
    title.innerHTML = aboutMe.micName;

    var text = document.querySelector("#desktopInfo p");
    text.innerHTML = aboutMe.micDesc;

    var title2 = document.querySelector("#infoPopup h3");
    title2.innerHTML = aboutMe.micName;

    var text2 = document.querySelector("#infoPopup p");
    text2.innerHTML = aboutMe.micDesc;

    $view.innerHTML =
        `
        <h4 id=time></h4> ` + aboutMe.micImg;

    timeSetInterval = setInterval(() => {
        now = luxon.DateTime.now();
        document.querySelector("#time").innerHTML =
            "Uruguay, " + now.toFormat("HH:mm:ss, ZZZZ");
    }, 1000);
}

// gallery functions
function writeGallery(e) {
    projectGalleryHtml += `<div class="projectCard" id="${e.id}"> ${e.imgs[0].type}${e.imgs[0].src}${e.imgs[0].endType}<p>${e.nombre}</p> </div>`;
}
function printGallery() {
    console.log(projectGalleryHtml);
    // phone print
    $view.innerHTML +=
        `<div class="projectGallery" id="projectGallery">` +
        projectGalleryHtml +
        `</div>`;
    listenGalleryCard();
}
function listenGalleryCard() {
    var elements = document.getElementsByClassName("projectCard");

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", upProject);
    }
    console.log(elements);
}
function upProject() {
    var cual = this.id;
    console.log(cual);

    loadView(cual, 0);
    projectNum = cual;
    projectImgNum = 0;
}

// display floating windows
function displayGallery() {
    if (document.getElementById("projectGallery") === null) {
        $infoPopup.style.display = "none";
        $phoneNav.style.display = "none";
        $floatingWindows.style.display = "none";
        printGallery();
    } else {
        $infoPopup.style.display = "none";
        $phoneNav.style.display = "none";
        $floatingWindows.style.display = "none";
        document.getElementById("projectGallery").remove();
    }

    console.log("foreach");
}
function displayNav() {
    if ($phoneNav.style.display === "none") {
        $floatingWindows.style.display = "block";
        $phoneNav.style.display = "flex";
        $projectGallery.style.display = "none";
        $infoPopup.style.display = "none";
    } else {
        $floatingWindows.style.display = "none";
        $phoneNav.style.display = "none";
    }
}
function displayInfo() {
    if ($infoPopup.style.display === "none") {
        $floatingWindows.style.display = "block";
        $infoPopup.style.display = "flex";
        $phoneNav.style.display = "none";
        $projectGallery.style.display = "none";
    } else {
        $floatingWindows.style.display = "none";
        $infoPopup.style.display = "none";
    }
}
