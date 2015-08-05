(function(module) {
	"use strict";
    
	var AudioPlayer = {}, 
	    type = "",	    	    
		 embed  = '<div class="playit" data-link="/uploads/files/$1" data-name="$2" ><i class="fa fa-play">&nbsp;&nbsp;</i>$2</div>',
		  
       embedUrl_mpeg = /<a href=".*\/uploads\/files\/(\w*-(.*\.mp3)).*>.*<\/a>/ig,  // regex mp3
       embedUrl_ogg  = /<a href=".*\/uploads\/files\/(\w*-(.*\.ogg)).*>.*<\/a>/ig,   // regex ogg
       embedUrl_wav  = /<a href=".*\/uploads\/files\/(\w*-(.*\.wav)).*>.*<\/a>/ig;   // regex wav
       
  
	AudioPlayer.parse = function(data, callback) { 
	    if (!data || !data.postData || !data.postData.content) { 
            return callback(null, data);
        }
        // mp3
        if (data.postData.content.match(embedUrl_mpeg)) {
        console.log("audio/mpeg");
           type = "audio/mpeg";
            data.postData.content = data.postData.content.replace(embedUrl_mpeg, embed);
        }
        // ogg
         if (data.postData.content.match(embedUrl_ogg)) {
         console.log("audio/ogg");
           type = "audio/ogg";
            data.postData.content = data.postData.content.replace(embedUrl_ogg, embed);
        }
        // wav
         if (data.postData.content.match(embedUrl_wav)) {
         console.log("audio/wave");
           type = "audio/wav";
            data.postData.content = data.postData.content.replace(embedUrl_wav, embed);
        }
        callback(null, data);
    };
    
    
    

	module.exports = AudioPlayer;
}(module));
