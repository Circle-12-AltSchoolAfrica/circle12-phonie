function startApp() {
  //declare variables
  let phoneNumber = document.getElementById("phoneNumber");
  let alert = document.querySelector(".alert");
  let carrier = document.getElementById("carrier");
  let btn = document.querySelector(".btn");
  let form = document.getElementById("form");


  //prevent default
  btn.addEventListener("click", (ev) => {
    // prevents default behaviour of the button
    ev.preventDefault();

    //using regex to validate
    let order = /((\+234?)|0)?[ -]?(?<network>\d{4})[ -]?(\d{3})[ -]?(\d{4})/;
    let entry = phoneNumber.value;

    // to check if the number is valid before validating
    let isValid = false;

    if (entry.includes("+234") && entry.length === 14) {
      isValid = true;
    }

    if (entry.includes("+2340") && entry.length === 15) {
      isValid = true;
    }

    if (entry.length === 11) {
      isValid = true;
    }

    // check for incorrect inputs

    if (entry === "" || !entry.match(order) || !isValid) {
      phoneNumber.classList.add("invalid");
      alert.style.visibility = "visible";
      alert.classList.add("invalid");
      alert.innerText = "Please enter a valid number";
      setTimeout(() => {
        phoneNumber.classList.remove("invalid");
        alert.classList.remove("invalid");
        alert.innerText = "";
        alert.style.visibility = "hidden";
      }, 2000);
      return;
    }

    // create groups in the order.
    let groups = entry.match(order).groups;
    // select named group to carry check on
    let network = groups.network;

    const MOBILE_NETWORKS = {
      MTN: [
        "803",
        "806",
        "703",
        "706",
        "810",
        "813",
        "814",
        "816",
        "903",
        "906",
        "916",
      ],
      "9MOBILE": ["809", "817", "818", "908", "909"],
      AIRTEL: ["802", "808", "812", "701", "708", "902", "907", "901"],
      GLO: ["805", "807", "811", "705", "815", "905"],
    };

    function entryContains(x, obj) {
      for (let i = 0; i < x.length; i++) {
        if (obj.includes(x[i])) {
          return true;
        }
      }
      return false;
    }

    if (entryContains(MOBILE_NETWORKS.MTN, network)) {
      phoneNumber.classList.add("valid");
      alert.style.visibility = "visible";
      alert.classList.add("valid");
      alert.innerText = "Success!. Your Network Carrier is MTN";
      carrier.style.backgroundImage = "url(./images/mtn.svg)";
    } 
    
    else if (entryContains(MOBILE_NETWORKS["9MOBILE"], network)) {
      phoneNumber.classList.add("valid");
      alert.style.visibility = "visible";
      alert.classList.add("valid");
      alert.innerText = "Success!. Your Network Carrier is 9MOBILE";
      carrier.style.backgroundImage = "url(./images/9mobile.svg)";
    } 
    
    else if (entryContains(MOBILE_NETWORKS.AIRTEL, network)) {
      phoneNumber.classList.add("valid");
      alert.style.visibility = "visible";
      alert.classList.add("valid");
      alert.innerText = "Success!. Your Network Carrier is AIRTEL";
      carrier.style.backgroundImage = "url(./images/airtel.svg)";
    } 
    
    else if (entryContains(MOBILE_NETWORKS.GLO, network)) {
      phoneNumber.classList.add("valid");
      alert.style.visibility = "visible";
      alert.classList.add("valid");
      alert.innerText = "Success!. Your Network Carrier is GLO";
      carrier.style.backgroundImage = "url(./images/glo.svg)";
    }
    
    else {
      phoneNumber.classList.add("invalid");
      alert.style.visibility = "visible";
      alert.classList.add("invalid");
      alert.innerText = "Oops!. Mobile Network Carrier Not Found";

      setTimeout(() => {
        phoneNumber.classList.remove("invalid");
        alert.classList.remove("invalid");
        alert.innerText = "";
        alert.style.display = "none";
      }, 2000);
    }
  });

  // Setting the enter key to perform the button function
  phoneNumber.addEventListener("keypress", (ev) => {
    // If the user presses the "Enter" key on the keyboard
    if (ev.key === "Enter") {
      // Cancel the default action
      ev.preventDefault();
      // Trigger the button element with a click
      btn.click();
    }
  });


  // Your entire app should not necessarily be coded inside this
  // single function (though there's no penalty for that),
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
  // console.log('make magic in here!');

  //   const header = document.querySelector('h2');
  //   if(header) {
  //     header.textContent = 'make some magic here!!';
  //   }
  // };
}

// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //
