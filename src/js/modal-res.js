const input = document.getElementById("inpt1");
    const inputResult = document.getElementById("res1");

    input.addEventListener("keyup", function () {
      inputResult.value = input.value * 1000;
    })
