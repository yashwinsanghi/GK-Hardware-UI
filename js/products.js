function changeOrientation(OrientType)    {
    if(OrientType.id == "listBtn")  {
        document.getElementById("listBtn").style="background-color: #f4f6ff;";
        document.getElementById("gridBtn").style="";
        document.getElementById("searchArea").style="background-color: #ffa5b0;";
        document.getElementById("btnArea").style="background-color: #ffa5b0;";
        document.getElementById("filterActiveBtn").style="background-color:#f4f6ff;";
        document.getElementById("listContent").style="display:block;";
        document.getElementById("gridContent").style="display:none;";
        if(sessionStorage.getItem("apply") != null) {
            document.getElementById("filterActiveBtn").style.backgroundColor= "#f4f6ff";
            document.getElementById("filterBtn").style.display="none";
            document.getElementById("filterActiveBtn").style.display = "inline-block";        
        }
        else    {
            document.getElementById("filterBtn").style.backgroundColor = "#f4f6ff";
            document.getElementById("filterBtn").style.display = "inline-block";
            document.getElementById("filterActiveBtn").style.display = "none";
        }
    }
    else    {
        document.getElementById("gridBtn").style="background-color:#ffa5b0;";
        document.getElementById("listBtn").style="";
        document.getElementById("searchArea").style="background-color: #f4f6ff;";
        document.getElementById("btnArea").style="background-color: #f4f6ff;";
        document.getElementById("listContent").style="display:none;";
        document.getElementById("gridContent").style="display:block;";
        console.log(sessionStorage.getItem("apply") != null);
        if(sessionStorage.getItem("apply") != null) {
            document.getElementById("filterActiveBtn").style.backgroundColor= "#ffa5b0";
            document.getElementById("filterBtn").style.display="none";
            document.getElementById("filterActiveBtn").style.display = "inline-block";        
        }
        else    {
            document.getElementById("filterBtn").style.backgroundColor = "#ffa5b0";
            document.getElementById("filterBtn").style.display = "inline-block";
            document.getElementById("filterActiveBtn").style.display = "none";
        }
    }
}
function filterSearch(filterType)  {
    sessionStorage.setItem("apply",true);
    if(filterType.id == "applyFilter")  {
        console.log("applied");
        document.getElementById("filterBtn").style.display="none";
        document.getElementById("filterActiveBtn").style.display = "inline-block";
    }
    else    {
        sessionStorage.clear();
        console.log("Closed");
        document.getElementById("filterBtn").style.display = "inline-block";
        document.getElementById("filterActiveBtn").style.display = "none";
    }
}