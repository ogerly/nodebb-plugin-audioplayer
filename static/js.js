   $('document').ready(function() {
   
    var html = "";
       html += '<div id="audioplayerPlayer">';
   
   	    html += '<span id="audio_icon" class="fa fa-pause"></span>&nbsp;&nbsp;';
        html += '<span id="a_titel" >fffffff</span>';

   	    html += '<audio id="playdemo" src="" autoplay></audio>&nbsp;&nbsp;';
   	     
        html += '<div id="audioplayerClose" class="fa fa-times"></div>';
        html += '</div>';

     
     $( "body" ).append(html);
     
     
    
    $(document ).on("click", ".playit", function() {
        $("#audioplayerPlayer").css("display","block");
        var src = $(this).data("link");
        var name = $(this).data("name");
        
        $("#a_titel").text(name);
        
    
       
          $("#playdemo").attr("src", src);
         document.getElementById('playdemo').play();
       
     
   
    });
  
  $( document ).on( "click", "#audio_icon", function() {
	 
	   var playdemo = $("#playdemo");
	   
       var clas  =  $("#audio_icon").attr("class");
     
       if ( clas == "fa fa-pause" ) {
           $("#audio_icon").attr("class", "fa fa-play");
         
           document.getElementById('playdemo').pause();
       } else {
           $("#audio_icon").attr("class", "fa fa-pause");
           document.getElementById('playdemo').play();
       }
 
  });
    
   $( document ).on( "click", "#audioplayerClose", function() {
	 
	      $("#audioplayerPlayer").css("display","none");
	      document.getElementById('playdemo').pause();
  });
  });
