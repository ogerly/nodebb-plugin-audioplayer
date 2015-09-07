 $('document').ready(function() {
   
  
    $(document ).on("click", ".playit", function() {    
         $(".playdemo").stop();
         $("#audioplayerPlayer").remove();
         var html = "";
        html += '<div id="audioplayerPlayer">';
           html += '<span id="audioplayer_user"></span>';
           html += '<span><audio class="playdemo inline" src="" preload="auto" controls loop autoplay></audio></span>';     
           html += '<a  id="linkToContent" class="pointer inline" ></a>';
           html += '<span id="linkToDownload" class="fa fa-cloud-download pointer t20w inline hover" rel="nofollow"></span>';
           html += '<span  class="closeAudioPlayer right fa fa-times t30w pointer hover" ></span>';
        html += '</div>';

       $( "body" ).append(html);  
      
           
        var src 	= $(this).data("link"),   // link from file
            name 	= $(this).data("name"),   // name from file
            topic = $(".topic-title").text(),  // topic title
            user 	= $(this).parent().parent().parent().parent().children().html(),  // user Name and Link
            URL 	= $(location).attr('href'),  // Topic Link                 
            PHAT  = $(location).attr('pathname'); // Returns path only
            
            
        $(".playdemo").attr("src", src);        
        $("#audioplayer_user").html(user);         
        $("#linkToContent").attr("href", URL).text(topic); 
       // $("#linkToDownload").attr("href", src).title("Download " + name);     
        
        $('#linkToDownload').click(function(e) {
           e.preventDefault();  //stop the browser from following
           window.location.href = src;
        });
    });
  
   
   // close and remove audioplayer
      $(document ).on("click", ".closeAudioPlayer", function() {    
 
         $(".playdemo").stop();
         $("#audioplayerPlayer").remove();
     });  

  });  
  
  
