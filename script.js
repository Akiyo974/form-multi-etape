function goStepTwo() {
    checkName();
    checkNum();
    checkMail();
    Achieve();
  }
  
  function backStepOne() {
    stepInfo.style.display = "flex";
    stepPlan.style.display = "none";
    circle1.style.color = "black";
    circle1.style.backgroundColor = "rgba(255, 255, 255)";
    circle2.style.backgroundColor = "rgb(255, 255, 255, 0)";
    circle2.style.color = "white";
  }
  
  function goStepThree() {
    console.log(typeof document.getElementById("totalPrice").innerHTML);
  
    if (document.getElementById("totalPrice").innerHTML == "") {
      console.log(document.getElementById("totalPrice").innerHTML);
      document.getElementById("totalPrice").innerHTML = "0";
      console.log(document.getElementById("totalPrice").innerHTML);
    }
    checkPlan();
  }
  function backSteptTwo() {
    stepPlan.style.display = "flex";
    stepAddOn.style.display = "none";
    circle2.style.color = "black";
    circle2.style.backgroundColor = "rgba(255, 255, 255)";
    circle3.style.backgroundColor = "rgb(255, 255, 255, 0)";
    circle3.style.color = "white";
  }
  
  function goStepFour() {
    stepSummary.style.display = "flex";
    stepAddOn.style.display = "none";
    circle3.style.color = "white";
    circle3.style.backgroundColor = "rgba(255, 255, 255, 0)";
    circle4.style.backgroundColor = "rgb(255, 255, 255)";
    circle4.style.color = "black";
  
    document.getElementsByName("adOnn").forEach(radio => {
      if (radio.checked) {
        console.log(radio.value);
        console.log(document.getElementById("totalPrice").innerHTML);
        const planPrice = document.getElementById("totalPrice").innerHTML;
        console.log(planPrice);
        document.getElementById("totalPrice").innerHTML =
          parseInt(planPrice) + parseInt(radio.value);
      }
    });
  }
  
  function backStepThree() {
    stepSummary.style.display = "none";
    stepAddOn.style.display = "flex";
    circle3.style.color = "black";
    circle3.style.backgroundColor = "rgba(255, 255, 255)";
    circle4.style.backgroundColor = "rgb(255, 255, 255, 0)";
    circle4.style.color = "white";
  
    document.getElementsByName("adOnn").forEach(radio => {
      if (radio.checked) {
        console.log(radio.value);
        console.log(document.getElementById("totalPrice").innerHTML);
        const planPrice = document.getElementById("totalPrice").innerHTML;
        console.log(planPrice);
        document.getElementById("totalPrice").innerHTML =
          parseInt(planPrice) - parseInt(radio.value);
      }
    });
  }
  
  function goFromFourToTwo() {
    stepSummary.style.display = "none";
    stepPlan.style.display = "flex";
    circle2.style.color = "black";
    circle2.style.backgroundColor = "rgba(255, 255, 255)";
    circle4.style.backgroundColor = "rgb(255, 255, 255, 0)";
    circle4.style.color = "white";
  
    document.getElementsByName("adOnn").forEach(radio => {
      if (radio.checked) {
        console.log(radio.value);
        console.log(document.getElementById("totalPrice").innerHTML);
        const planPrice = document.getElementById("totalPrice").innerHTML;
        console.log(planPrice);
        document.getElementById("totalPrice").innerHTML =
          parseInt(planPrice) - parseInt(radio.value);
      }
    });
  }
  
  function goToStepThankYou() {
    console.log(document.getElementById("modeResume").innerHTML);
    if (document.getElementById("modeResume").innerHTML == "Choisissez un plan") {
      stepSummary.style.display = "flex";
      stepThankYou.style.display = "none";
    } else {
      stepSummary.style.display = "none";
      stepThankYou.style.display = "flex";
    }
  }
  
  // Fonction pour vérifier si le checkbox est coché pour afficher le plan annuel
  document.getElementById("switch").addEventListener("click", event => {
    if (event.target.checked) {
      planYear.style.display = "flex";
      planMonth.style.display = "none";
      addonAnnee.style.display = "flex";
      addonMois.style.display = "none";
    } else {
      planYear.style.display = "none";
      planMonth.style.display = "flex";
      addonAnnee.style.display = "none";
      addonMois.style.display = "flex";
    }
  });
  
  // Fonction pour changer la couleur des boutons PLAN et récupérer les infos
  document.getElementById("moisArcade").addEventListener("click", event => {
    moisArcade.style.backgroundColor = "hsl(217, 100%, 97%)";
    moisArcade.style.border = " solid 1px hsl(213, 96%, 18%)";
    // Réinitialiser les autres background et borders
    moisAdvenced.style.backgroundColor = "white";
    moisAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
    moisPro.style.backgroundColor = "white";
    moisPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneeArcade.style.backgroundColor = "white";
    anneeArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneeAdvenced.style.backgroundColor = "white";
    anneeAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneePro.style.backgroundColor = "white";
    anneePro.style.border = " solid 1px hsl(229, 24%, 87%)";
    // La suite
    document.getElementById("modeResume").innerHTML = "Arcade (mensuel)";
    document.getElementById("priceResume").innerHTML = "9$/mois";
    document.getElementById("modeTotal").innerHTML = "Total (par mois)";
  });
  
  document.getElementById("moisAdvenced").addEventListener("click", event => {
    moisAdvenced.style.backgroundColor = "hsl(217, 100%, 97%)";
    moisAdvenced.style.border = " solid 1px hsl(213, 96%, 18%)";
    // Réinitialiser les autres background et borders
    moisArcade.style.backgroundColor = "white";
    moisArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    moisPro.style.backgroundColor = "white";
    moisPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneeArcade.style.backgroundColor = "white";
    anneeArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneeAdvenced.style.backgroundColor = "white";
    anneeAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneePro.style.backgroundColor = "white";
    anneePro.style.border = " solid 1px hsl(229, 24%, 87%)";
    // La suite
    document.getElementById("modeResume").innerHTML = "Avancé (mensuel)";
    document.getElementById("priceResume").innerHTML = "12$/mois";
    document.getElementById("modeTotal").innerHTML = "Total (par mois)";
  });
  
  document.getElementById("moisPro").addEventListener("click", event => {
    moisPro.style.backgroundColor = "hsl(217, 100%, 97%)";
    moisPro.style.border = " solid 1px hsl(213, 96%, 18%)";
    // Réinitialiser les autres background et borders
    moisAdvenced.style.backgroundColor = "white";
    moisAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
    moisArcade.style.backgroundColor = "white";
    moisArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneeArcade.style.backgroundColor = "white";
    anneeArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneeAdvenced.style.backgroundColor = "white";
    anneeAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneePro.style.backgroundColor = "white";
    anneePro.style.border = " solid 1px hsl(229, 24%, 87%)";
    // La suite
    document.getElementById("modeResume").innerHTML = "Pro (mensuel)";
    document.getElementById("priceResume").innerHTML = "15$/mois";
    document.getElementById("modeTotal").innerHTML = "Total (par mois)";
  });
  
  document.getElementById("anneeArcade").addEventListener("click", event => {
    anneeArcade.style.backgroundColor = "hsl(217, 100%, 97%)";
    anneeArcade.style.border = " solid 1px hsl(213, 96%, 18%)";
    // Réinitialiser les autres background et borders
    moisArcade.style.backgroundColor = "white";
    moisArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    moisPro.style.backgroundColor = "white";
    moisPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    moisAdvenced.style.backgroundColor = "white";
    moisAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneeAdvenced.style.backgroundColor = "white";
    anneeAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneePro.style.backgroundColor = "white";
    anneePro.style.border = " solid 1px hsl(229, 24%, 87%)";
    // La suite
    document.getElementById("modeResume").innerHTML = "Arcade (annuel)";
    document.getElementById("priceResume").innerHTML = "90$/an";
    document.getElementById("modeTotal").innerHTML = "Total (par an)";
  });
  
  document.getElementById("anneeAdvenced").addEventListener("click", event => {
    anneeAdvenced.style.backgroundColor = "hsl(217, 100%, 97%)";
    anneeAdvenced.style.border = " solid 1px hsl(213, 96%, 18%)";
    // Réinitialiser les autres background et borders
    moisAdvenced.style.backgroundColor = "white";
    moisAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
    moisPro.style.backgroundColor = "white";
    moisPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    moisArcade.style.backgroundColor = "white";
    moisArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneeArcade.style.backgroundColor = "white";
    anneeArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneePro.style.backgroundColor = "white";
    anneePro.style.border = " solid 1px hsl(229, 24%, 87%)";
    // La suite
    document.getElementById("modeResume").innerHTML = "Avancé (annuel)";
    document.getElementById("priceResume").innerHTML = "120$/an";
    document.getElementById("modeTotal").innerHTML = "Total (par an)";
  });
  
  document.getElementById("anneePro").addEventListener("click", event => {
    anneePro.style.backgroundColor = "hsl(217, 100%, 97%)";
    anneePro.style.border = " solid 1px hsl(213, 96%, 18%)";
    // Réinitialiser les autres background et borders
    moisArcade.style.backgroundColor = "white";
    moisArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    moisPro.style.backgroundColor = "white";
    moisPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    moisAdvenced.style.backgroundColor = "white";
    moisAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneeArcade.style.backgroundColor = "white";
    anneeArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneeAdvenced.style.backgroundColor = "white";
    anneeAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
    // La suite
    document.getElementById("modeResume").innerHTML = "Pro (annuel)";
    document.getElementById("priceResume").innerHTML = "150$/an";
    document.getElementById("modeTotal").innerHTML = "Total (par an)";
  });
  
  // Fonction pour récupérer les infos des ADD ONS
  
  document.getElementById("onlineMois").addEventListener("click", event => {
    if (event.target.checked) {
      document.getElementById("onlinePrice").innerHTML = "+1$/mois";
      document.getElementById("modeTotal").innerHTML = "Total (par mois)";
    } else {
      document.getElementById("onlinePrice").innerHTML = "+0$";
    }
  });
  
  document.getElementById("storageMois").addEventListener("click", event => {
    if (event.target.checked) {
      document.getElementById("storagePrice").innerHTML = "+2$/mois";
      document.getElementById("modeTotal").innerHTML = "Total (par mois)";
    } else {
      document.getElementById("storagePrice").innerHTML = "+0$";
    }
  });
  
  document.getElementById("customizableMois").addEventListener("click", event => {
    if (event.target.checked) {
      document.getElementById("customizablePrice").innerHTML = "+2$/mois";
      document.getElementById("modeTotal").innerHTML = "Total (par mois)";
    } else {
      document.getElementById("customizablePrice").innerHTML = "+0$";
    }
  });
  
  document.getElementById("onlineAnnee").addEventListener("click", event => {
    if (event.target.checked) {
      document.getElementById("onlinePrice").innerHTML = "+10$/an";
      document.getElementById("modeTotal").innerHTML = "Total (par an)";
    } else {
      document.getElementById("onlinePrice").innerHTML = "+0$";
    }
  });
  
  document.getElementById("storageAnnee").addEventListener("click", event => {
    if (event.target.checked) {
      document.getElementById("storagePrice").innerHTML = "+20$/an";
      document.getElementById("modeTotal").innerHTML = "Total (par an)";
    } else {
      document.getElementById("storagePrice").innerHTML = "+0$";
    }
  });
  
  document.getElementById("customizableAnnee").addEventListener("click", event => {
    if (event.target.checked) {
      document.getElementById("customizablePrice").innerHTML = "+20$/an";
      document.getElementById("modeTotal").innerHTML = "Total (par an)";
    } else {
      document.getElementById("customizablePrice").innerHTML = "+0$";
    }
  });
  
  function reset() {
    document.getElementById("onlineMois").checked = false;
    document.getElementById("storageMois").checked = false;
    document.getElementById("customizableMois").checked = false;
    document.getElementById("onlineAnnee").checked = false;
    document.getElementById("storageAnnee").checked = false;
    document.getElementById("customizableAnnee").checked = false;
    document.getElementById("onlinePrice").innerHTML = "+0$";
    document.getElementById("storagePrice").innerHTML = "+0$";
    document.getElementById("customizablePrice").innerHTML = "+0$";
    document.getElementById("modeResume").innerHTML = "Choisissez un plan";
    document.getElementById("priceResume").innerHTML = "0$";
    moisArcade.style.backgroundColor = "white";
    moisArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    moisPro.style.backgroundColor = "white";
    moisPro.style.border = " solid 1px hsl(229, 24%, 87%)";
    moisAdvenced.style.backgroundColor = "white";
    moisAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneeArcade.style.backgroundColor = "white";
    anneeArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneeAdvenced.style.backgroundColor = "white";
    anneeAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
    anneePro.style.backgroundColor = "white";
    anneePro.style.border = " solid 1px hsl(229, 24%, 87%)";
  }
  
  // FONCTION POUR FAIRE LE TOTAL
  
  function getPrice1() {
    const planPrice = "9";
    console.log(planPrice);
    document.getElementById("totalPrice").innerHTML = planPrice;
  }
  
  function getPrice2() {
    const planPrice = "12";
    console.log(planPrice);
    document.getElementById("totalPrice").innerHTML = planPrice;
  }
  
  function getPrice3() {
    const planPrice = "15";
    console.log(planPrice);
    document.getElementById("totalPrice").innerHTML = planPrice;
  }
  
  function getPrice4() {
    const planPrice = "90";
    console.log(planPrice);
    document.getElementById("totalPrice").innerHTML = planPrice;
  }
  
  function getPrice5() {
    const planPrice = "120";
    console.log(planPrice);
    document.getElementById("totalPrice").innerHTML = planPrice;
  }
  
  function getPrice6() {
    const planPrice = "150";
    console.log(planPrice);
    document.getElementById("totalPrice").innerHTML = planPrice;
  }
  
  // Fonction pour vérifier les inputs des informations personnelles
  
  function checkName() {
    let myNameInput = document.getElementById("infoName");
    let myNameError = document.getElementById("errorName");
    let myNameRegex = /^[a-zA-Z-\s]+$/;
  
    if (myNameInput.value.trim() == "") {
      myNameError.innerHTML = "Ce champ est requis";
    } else if (myNameRegex.test(myNameInput.value) == false) {
      myNameError.innerHTML = "Ne peut contenir des chiffres ou des symboles";
    } else {
      myNameError.innerHTML = "";
    }
  }
  
  function checkNum() {
    let myNumInput = document.getElementById("infoNumber");
    let myNumError = document.getElementById("errorNum");
    let myNumRegex = /^[0-9\s]+$/;
  
    if (myNumInput.value.trim() == "") {
      myNumError.innerHTML = "Ce champ est requis";
    } else if (myNumRegex.test(myNumInput.value) == false) {
      myNumError.innerHTML = "Doit contenir des chiffres";
    } else if (myNumInput.value.trim().length !== 10) {
      myNumError.innerHTML = "Numéro de téléphone invalide";
    } else {
      myNumError.innerHTML = "";
    }
  }
  
  function checkMail() {
    let myMailInput = document.getElementById("infoMail");
    let myNumError = document.getElementById("errorMail");
    let myMailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    if (myMailInput.value.trim() == "") {
      myNumError.innerHTML = "Ce champ est requis";
    } else if (myMailRegex.test(myMailInput.value) == false) {
      myNumError.innerHTML = "Veuillez entrer un email valide";
    } else {
      myNumError.innerHTML = "";
    }
  }
  
  function Achieve() {
    let myNumInput = document.getElementById("infoNumber");
    let myNameInput = document.getElementById("infoName");
    let myMailInput = document.getElementById("infoMail");
    let myNameRegex = /^[a-zA-Z-\s]+$/;
    let myNumRegex = /^[0-9\s]+$/;
    let myMailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    if (
      myNumInput.value.trim().length === 10 &&
      myNumRegex.test(myNumInput.value) == true &&
      myMailInput.value.trim().length !== 0 &&
      myMailRegex.test(myMailInput.value) === true &&
      myNameInput.value.trim().length !== 0 &&
      myNameRegex.test(myNameInput.value) === true
    ) {
      stepInfo.style.display = "none";
      stepPlan.style.display = "flex";
      circle1.style.color = "white";
      circle1.style.backgroundColor = "rgba(255, 255, 255, 0)";
      circle2.style.backgroundColor = "rgb(255, 255, 255)";
      circle2.style.color = "black";
    }
  }
  
  function checkPlan() {
    if (document.getElementById("modeResume").innerHTML == "Choisissez un plan") {
      stepInfo.style.display = "none";
      stepPlan.style.display = "flex";
      circle1.style.color = "white";
      circle1.style.backgroundColor = "rgba(255, 255, 255, 0)";
      circle2.style.backgroundColor = "rgb(255, 255, 255)";
      circle2.style.color = "black";
    } else {
      stepPlan.style.display = "none";
      stepAddOn.style.display = "flex";
      circle2.style.color = "white";
      circle2.style.backgroundColor = "rgba(255, 255, 255, 0)";
      circle3.style.backgroundColor = "rgb(255, 255, 255)";
      circle3.style.color = "black";
    }
  }
  