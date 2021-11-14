function timeout_method() {
    var seconds = document.getElementById("seconds").value ;

    function time () {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout (time, 3000);
        if (seconds == -1) {
            alert ("done!");
                          }
                    }   
}

