var cpu_usage_per = document.getElementById("cpuusageval");

function GetCPUUse(){
              
    var xhr1 = new XMLHttpRequest;
    var queryString1 = "http://<IP>/cgi-bin/getcpuuse.py";
    xhr1.open("GET", queryString1, true);
    xhr1.send();
    
    xhr1.onload = function(){
        response1 = xhr1.responseText;
        cpu_usage_per.innerHTML = response1 + "%";
    }
}

setInterval(GetCPUUse, 100);