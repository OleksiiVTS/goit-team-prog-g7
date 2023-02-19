const input = document.getElementById("inpt");
    const inputResult = document.getElementById("res");

    input.addEventListener("keyup", function () {
      inputResult.value = input.value * 1000;
    })
