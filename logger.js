let fs=require('fs')
let WebSocket= require('ws');

class Logger{
    
  constructor(){

    console.log("in constructor");
        this.level=""
        this.message=""
        this.time=Date.now()
        this.stream;
        this.stream=fs.createWriteStream('file.txt',{'flags': 'a'})
        this.ws=new WebSocket("http://localhost:8000")
    
    }
   
    log(level,message){ 
        this.level=level
        this.message=message
       
        console.log("===================inside  log===================");

          this.stream.write(JSON.stringify({level:this.level,message:this.message,time:Date.now()}))
          this.stream.end(function() {
              console.log('file has been written');
          });
       
         this.ws.on('message',()=>{
            // console.log({level:level,message:message,time:Date.now()},"===============================");
             this.ws.send(JSON.stringify({level:level,message:message,time:Date.now()}))
          })

      }
    //   exist(){
    //       console.log("inside exist");
          
    //       fs.exists('file.txt', function(exists){
    //         console.log("=====================here=================================");
            
    //         if (exists) {
    //           console.error('myfile already exists');
    //         } else {
    //             console.log("create file");
    //             this.stream=fs.createWriteStream('file.txt',{'flags': 'a'})
    //         }
    //       });
    //   }
   
}
module.exports=new Logger()
