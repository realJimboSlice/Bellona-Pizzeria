function changeColorBasedOnDay() {
    // var sondag = document.getElementById("sondag");
    // var mandag = document.getElementById("mandag");
    // var tirsdag = document.getElementById("tirsdag");
    // var onsdag = document.getElementById("onsdag");
    // var torsdag = document.getElementById("torsdag");
    // var fredag = document.getElementById("fredag");
    // var lordag = document.getElementById("lordag");

    var elements = document.querySelectorAll(".sondag, .mandag, .tirsdag, .onsdag, .torsdag, .fredag, .lordag");
    
    var dayOfWeek = new Date().getDay();
    console.log(dayOfWeek);
  
    // switch (dayOfWeek) {
    //   case 0: // Søndag
    //     sondag.style.backgroundColor = "lightgreen";
    //     break;
    //   case 1: // Mandag
    //     mandag.style.backgroundColor = "lightgreen";
    //     break;
    //   case 2: // Tirsdag
    //     tirsdag.style.backgroundColor = "lightgreen";
    //     break;
    //   case 3: // Onsdag
    //     onsdag.style.backgroundColor = "lightgreen";
    //     break;
    //   case 4: // Torsdag
    //     torsdag.style.backgroundColor = "lightgreen";
    //     break;
    //   case 5: // Fredag
    //     fredag.style.backgroundColor = "lightgreen";
    //     break;
    //   case 6: // Lørdag
    //     lordag.style.backgroundColor = "lightgreen";
    //     break;
    // }

    elements.forEach(element => {
      switch (dayOfWeek) {
        
        case 0: // Sunday
          if (element.classList.contains("sondag")) {
            element.style.backgroundColor = "#008C45";
          }
          break;
        case 1: // Mandag
          if (element.classList.contains("mandag")) {
            element.style.backgroundColor = "#008C45";
          }
          break;
        case 2: // Tirsdag
          if (element.classList.contains("tirsdag")) {
            element.style.backgroundColor = "#008C45";
          }
          break;
        case 3: // Onsdag
          if (element.classList.contains("onsdag")) {
            element.style.backgroundColor = "#008C45";
          }
          break;
        case 4: // Torsdag
          if (element.classList.contains("torsdag")) {
            element.style.backgroundColor = "#008C45";
          }
          break;
        case 5: // Fredag
          if (element.classList.contains("fredag")) {
            element.style.backgroundColor = "#008C45";
          }
          break;
        case 6: // Lørdag
          if (element.classList.contains("lordag")) {
            element.style.backgroundColor = "#008C45";
          }
          break;
        
      }
    });
  }
  
  changeColorBasedOnDay();