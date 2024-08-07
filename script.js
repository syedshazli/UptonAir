import {GitHub} from "./github-js/lib/GitHub.js";

export function test(input, user, pass)
    {
      /*
      const fs = require('fs');
      const readline = require('readline');

      //init file stream
      const readStream = fs.createReadStream("test.txt", 
	function(err) {if(err) {alert("Cannot read " + "test.txt");}});
      const readInterface = readline.createInterface({
        input: readStream,
        output: process.stdout,
        console: false});

      //read file
      var text = "";
      readInterface.on('line', function(line){
        text = text + line + "\n";
      });
      text = text + input;*/
      text = input;

      //github stuff
      var github = new GitHub({
        username: user,
        password: pass,
        auth: "basic"
      });

      var repo = github.getRepo("KeenanSegenchuk", "UptonAir");
    
      repository.write(
        "master",
        "test.txt",
        text,
        "test commit via api",
        function(err){if(err){alert("err")}}
      );
    }