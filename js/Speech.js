var Speech = (function() {

	var answerFinal = "";

	function init(){
		//No Initialization as of now.
		meSpeak.loadConfig("mespeak_config.json");
   		meSpeak.loadVoice("voices/en.json");
	}

	function getBotReply(question){
		var aimlInterpreter = new AIMLInterpreter({name:'WireInterpreter', age:'42'});
		var filesArray = ['js/alice/star.aiml'];
		var words = question.split(' ');
		var marked = new Array(256);
		for(i=0;i<256;i++){
			marked[i] = 0;
		}
		for(i=0; i<words.length; i++){
			if(words[i][0] >= 'a' && words[i][0] <= 'z'){
				if (marked[(words[i].charCodeAt(0)+'A'.charCodeAt(0)-'a'.charCodeAt(0))] == 0){
					marked[(words[i].charCodeAt(0)+'A'.charCodeAt(0)-'a'.charCodeAt(0))] = 1;
					filesArray.unshift("js/alice/" + String.fromCharCode(words[i].charCodeAt(0)+'A'.charCodeAt(0)-'a'.charCodeAt(0)) + ".aiml");
				}
			}
			if((words[i][0] >= 'A' && words[i][0] <= 'Z') || (words[i][0] >= '0' && words[i][0] <= '9')){
				if (marked[words[i].charCodeAt(0)] == 0){
					marked[words[i].charCodeAt(0)] = 1;
					filesArray.unshift("js/alice/" + words[i][0] + ".aiml");
				}
			}
		}
		//console.log(filesArray);
		aimlInterpreter.loadAIMLFilesIntoArray(filesArray);
		answerFinal = "Please ask me something else";

		var callback = function(answer, wildCardArray, input){
			if(answer == null){
				answer = "Please ask me something else";
			}
		    answerFinal = answer.split('.')[0];
		};

		aimlInterpreter.findAnswerInLoadedAIMLFiles(question, callback);
	}

	function playVoice(id) {
      var fname="voices/"+id+".json";
      var text = document.getElementById('userText').value;
      if(document.getElementById('mode').innerHTML=="2"){
	    //After the voice is loaded, playSound callback is called
	    getBotReply(text);
	    setTimeout(function(){
			meSpeak.loadVoice(fname, playSound);
		}, 4000);
  	  }
  	  else{
  	  	meSpeak.loadVoice(fname, playSound);
  	  }
    }

    function playSound(){
		var text = document.getElementById('userText').value;
		var pitch = document.getElementById('pitch').innerHTML;
		var speed = document.getElementById('rate').innerHTML;
		if(document.getElementById('mode').innerHTML=="2"){
			text = answerFinal;
			console.log(answerFinal);
		}

		function soundComplete(){
			document.getElementById('speaking').innerHTML = "0";
		}

		meSpeak.speak(text, {speed: speed, pitch: pitch}, soundComplete);
    }

	return {
        init: init,
		playVoice: playVoice
    };

});