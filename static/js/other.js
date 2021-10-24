var cpu_usage_per = document.getElementById("cpuusageval");
var write_speed = document.getElementById("wrspeedval");
var read_speed = document.getElementById("respeedval");

setInterval(function(){

    var xhr1 = new XMLHttpRequest;
    var queryString1 = "http://<IP>/cgi-bin/getcpuuse.py";
    xhr1.open("GET", queryString1, true);
    xhr1.send();
    
    xhr1.onload = function(){
        response1 = xhr1.responseText;
        cpu_usage_per.innerHTML = response1 + "%";
    }

    var xhr2 = new XMLHttpRequest;
    var queryString2 = "http://<IP>.254/cgi-bin/getwrspeed.py";
    xhr2.open("GET", queryString2, true);
    xhr2.send();
    
    xhr2.onload = function(){
        response2 = xhr2.responseText;
        write_speed.innerHTML = response2 + "kb/s";
    }

    var xhr3 = new XMLHttpRequest;
    var queryString3 = "http://<IP>/cgi-bin/getreadspeed.py";
    xhr3.open("GET", queryString3, true);
    xhr3.send();
    
    xhr3.onload = function(){
        response3 = xhr3.responseText;
        read_speed.innerHTML = response3 + "kb/s";
    }

}, 100);