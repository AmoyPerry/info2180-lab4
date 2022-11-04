window.onload = function (){
    
    var searchbutton = document.querySelector("button")
    console.log(searchbutton)
    var httpRequest;
    

    searchbutton.addEventListener('click', function (ele)
    {
            ele.preventDefault()
            // get request
            httpRequest = new XMLHttpRequest();

            var url = "superheroes.php";
            httpRequest.onreadystatechange = myFunction;
            httpRequest.open('Get', url);
            httpRequest.send();
          });

            function myFunction(){
              if (httpRequest.readyState === XMLHttpRequest.DONE)
              {
                if (httpRequest.status===200)
                {
                  var response = httpRequest.responseText;
                  alert(response)
                }
                else
                {
                  alert("No php found!")
                }
      
              }
            }


   
  }