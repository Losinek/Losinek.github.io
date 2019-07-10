/* GLOBAL OPTIONS */
Chart.defaults.global.defaultFontColor = '#2c0000';
//Chart.defaults.global.defaultFontFamily = 'Lato'; --> Just change this to the Krusty Krab font
Chart.defaults.global.defaultFontSize = 17;

            $(document).ready(function(){
                $("#c1").click(function(){
                    $("#chart1").show()
                    $("#chart2").hide()
                    $("#chart3").hide()
                    $("#sales").hide()
                    $("#searched").hide()
                    $("#uploads").hide()
                })
                    $("#c2").click(function(){
                    $("#chart2").show()
                    $("#chart1").hide()
                    $("#chart3").hide()
                    $("#sales").hide()
                    $("#searched").hide()
                    $("#uploads").hide()
                })
                    $("#c3").click(function(){
                    $("#chart3").show()
                    $("#chart2").hide()
                    $("#chart1").hide()
                    $("#sales").hide()
                    $("#searched").hide()
                    $("#uploads").hide()
                })
                    $("#sl").click(function(){
                    $("#sales").show()
                    $("#chart2").hide()
                    $("#chart3").hide()
                    $("#chart1").hide()
                    $("#searched").hide()
                    $("#uploads").hide()
                })
                    $("#shbt").click(function(){
                    $("#searched").show()
                    $("#chart2").hide()
                    $("#chart3").hide()
                    $("#sales").hide()
                    $("#chart1").hide()
                    $("#uploads").hide()
                })
                    $("#ud").click(function(){
                    $("#uploads").show()
                    $("#chart2").hide()
                    $("#chart3").hide()
                    $("#sales").hide()
                    $("#searched").hide()
                    $("#chart1").hide()
                })
            })
            
            function select() // FUNCTION FOR THE FILE READER (Choose File) => checks if input is valid
            {
                if (window.File && window.FileReader && window.FileList && window.Blob) {

                } else {
                    alert('The File APIs are not fully supported in this browser.');
                    return;
                }   

                input = document.getElementById('fileinput');
                if (!input) {
                  alert("Um, couldn't find the fileinput element.");
               }
               else if (!input.files) {
                  alert("This browser doesn't seem to support the `files` property of file inputs.");
               }
               else {
                  file = input.files[0];
                  fr = new FileReader();
                  fr.onload = receivedText;
                  fr.readAsText(file);
               }
                   
                  //result = fr.result;
                  //document.getElementById('editor').appendChild(document.createTextNode(fr.result))
                  var newArr = JSON.parse(fr.result); 
                  var x = JSON.parse(krustykrab.json);
                  console.log(fr.result); 
                
            }
            
            function handleFileSelect() // FUNCTION FOR THE LOAD BUTTON => checks if user has already put a suitable json file; alert errors if 															   json file is invalid or if there is no file selected yet
            {               
                if (window.File && window.FileReader && window.FileList && window.Blob) {

                } else {
                    alert('The File APIs are not fully supported in this browser.');
                    return;
                }   

                input = document.getElementById('fileinput');
                if (!input) {
                  alert("Um, couldn't find the fileinput element.");
               }
               else if (!input.files) {
                  alert("This browser doesn't seem to support the `files` property of file inputs.");
               }
               else if (!input.files[0]) {
                  alert("Please select a JSON file before clicking 'Upload'");               
               }
               else {
                  file = input.files[0];
                  fr = new FileReader();
                  fr.onload = receivedText;
                  fr.readAsText(file);
               }
            }

            function receivedText() { // FUNCTION WHERE I PARSE THE JSON (var newArr), and show all the code in the console, maybe you can put     							your code here for the json parsing @Jan          
              
                var newArr = JSON.parse(fr.result);          
				//inside(newArr);    
                console.log(fr.result);     
            }
            
            function inside(newArr) //UNFINISHED FUNCTION; this was supposed to be my loop for pushing json data
            {
                for(i in newArr){
                    if(typeof newArr[i] === 'object')
                        inside(newArr[i]);
                    else
                        chart.data.labels.push(newArr);
                        chart.data.datasets.push(newArr);
                        alert.log('wtf'); 
                } 
            }



             
       


/*
$(document).ready(function(){
var linegraph1 = document.getElementById('lg1');
var lg1 = new Chart(linegraph1, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Number of krabby patties sold',
            data: [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10, 11, 15],
        }]
    },
    options: {
        responsive: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
})*/