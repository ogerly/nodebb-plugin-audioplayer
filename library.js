(function(module) {
	"use strict";
    
	var AudioPlayer = {}, 
	    type = "",
		 embed     = '<div>$1</div><audio src="/uploads/files/$1" type="' + type + '"  controls ></audio>',
		 
       embedUrl_mpeg = /<a href=".*\/uploads\/files\/(.*\.mp3).*>.*<\/a>/ig,  // regex mp3
       embedUrl_ogg = /<a href=".*\/uploads\/files\/(.*\.ogg).*>.*<\/a>/ig,   // regex ogg
       embedUrl_wav = /<a href=".*\/uploads\/files\/(.*\.wav).*>.*<\/a>/ig;   // regex wav
       
  
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
