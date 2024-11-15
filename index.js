function nightMode() {
  if (localStorage.getItem("theme") === "light") {
    document.getElementById("body").style.backgroundColor = "#201e38";

    document.getElementById("header").style.backgroundColor = "#594e37";

    // localStorage.removeItem('theme');

    localStorage.setItem("theme", "dark");
  } else if (localStorage.getItem("theme") === "dark") {
    document.getElementById("body").style.backgroundColor = "aliceblue";

    document.getElementById("header").style.backgroundColor = "#ffc341";

    localStorage.setItem("theme", "light");

    // localStorage.removeItem('theme');
    // console.log("test");
  } else {
    document.getElementById("body").style.backgroundColor = "#201e38";

    document.getElementById("header").style.backgroundColor = "#594e37";

    localStorage.setItem("theme", "dark");

    // console.log("test else");

    // localStorage.removeItem('theme');
  }
}
