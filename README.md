# NodeBB Audioplayer Plugin

This plugin is prayed mp3, ogg, wav appear in a player.

## Installation

    npm install nodebb-plugin-audioplayer

## Use

    This plugin is prayed mp3, ogg, wav appear in a player.
    
    If you have uploaded an audio file. converts the plugin the files in a HTML5 audio palyer



# A&Q: 

    https://community.nodebb.org/topic/6162/nodebb-plugin-audioplayer



## you need the following code in the "costum css" and enter it into the "custom html"

# CUSTOM CSS

    /* Audioplayer*/

   .playit { cursor: pointer; }

   #audioplayerPlayer {
      background-color: red;
      position: fixed;
      bottom: 0px;
      height: 50px;
      left: 0px;
      right: 0px;
      display: none;
      z-index: 2000;
  }

  #audioplayerPlayer .fa {
    font-size: 30px;
    padding: 11px;
    background-color: green;
    height: 100%;
    cursor: pointer;
  }

  #audioplayerClose {
    
    color: red;
    position: absolute;
    right: 0px;
    cursor: pointer;
    
  }


# CUSTOM HTML

     <script>
    $( document ).ready(function() {
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
           var src = $(this).data("link"),
           name = $(this).data("name");
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
    </script>
