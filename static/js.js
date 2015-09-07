 $('document').ready(function() {
   var html = "";
  
    $(document ).on("click", ".playit", function() {    
        if ( $("#audioplayerPlayer").attr("id") === "audioplayerPlayer" ) {
           $(".playdemo").stop();
           $("#audioplayerPlayer").html("");
        
        } else {
        
           $( "body" ).append('<div id="audioplayerPlayer"></div>');
        }
         

         
          html = "";
        
           html += '<span id="audioplayer_user"></span>';
           html += '<span><audio class="playdemo inline" src="" preload="auto" controls loop ></audio></span>';     
           html += '<a  id="linkToContent" class="pointer inline" ></a>';
           html += '<span id="linkToDownload" class="fa fa-cloud-download pointer t20w inline hover" rel="nofollow"></span>';
           html += '<span  class="closeAudioPlayer right fa fa-times t30w pointer hover" ></span>';
       


       $( "#audioplayerPlayer" ).html(html);  
      
    
           
        var src 	= $(this).data("link"),   // link from file
            name 	= $(this).data("name"),   // name from file
            topic = $(".topic-title").text(),  // topic title
            //user  = $(this).closest('.poster-avatar').html();            
           // user 	= $(this).parent().parent().parent().parent().children().html(),  // user Name and Link
            URL 	= $(location).attr('href'),  // Topic Link                 
            PHAT  = $(location).attr('pathname'); // Returns path only
          

          
        
          // theme material
          if ( $( ".post-block" ).length ) {
 
             var  user  = $(this).closest('div[class^="post-block"]').children().html();
             console.log(  "theme => material" ); 
          }
          
          // theme persona
          if ( $( ".clearfix" ).length ) {
 
             var  user  = $(this).closest('.clearfix').children().children().html();
              console.log(  "theme => persona" );
          }
          
          // theme lavender
          if ( $( ".topic-profile-pic" ).length ) {
 
             var  user  = $(this).closest('.col-md-12').children().children().html();
                  user  = "<a href='/user/"+ $(user).attr("alt") +"'>" + user + "</a>";
             
              console.log(  "theme => lavender" );
          }
          
          // theme vanilla
          if ( $( ".avatar" ).length ) {
 
             var  user  = $(this).closest('.topic-item').html();

             
              console.log(  "theme => vanilla" );
          }
          
          
           console.log(  "user code => " + user);
             
                    
                    
                    
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
  
  
