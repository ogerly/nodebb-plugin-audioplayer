(function(module) {
	"use strict";

	var AudioPlayer = {},

		 embed = '<div>$1<audio src="/uploads/files/$1" controls ></audio></div>';


  
    var embedUrl = /<a href=".*\/uploads\/files\/(.*\.mp3).>.*<\/a>/ig;

 
  
	AudioPlayer.parse = function(data, callback) { 
	    if (!data || !data.postData || !data.postData.content) { 
            return callback(null, data);
        }
        if (data.postData.content.match(embedUrl)) {
            data.postData.content = data.postData.content.replace(embedUrl, embed);
        }
        callback(null, data);
    };

	module.exports = AudioPlayer;
}(module));
