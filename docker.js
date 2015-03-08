/*
 * Docket struggle
 */


var exec = require('child_process').exec;

var swcommon = exec('docker run ubuntu:14.04 \n\
apt-get install -y software-properties-common');
swcommon.on('close', function() {
    console.log('Software Properties Common installed.');
    var commitSwCommon = exec ('docker commit 0a7a94 ubuntu:14.04');
    commitSwCommon.on('close',function(){
        console.log('Software Properties Common commited.');
        
        var tsharkrepo = exec ('docker run ubuntu:14.04 \n\
            add-apt-repository ppa:n-muench/programs-ppa');
        tsharkrepo.on('close', function(){
            console.log('Tshark repo installed');
            
            var commitRepo = exec('docker commit 1ec84b ubuntu:14.04');
            commitRepo.on('close', function(){
                
                var updateRepo = exec ('docker run ubuntu:14.04 \n\
                apt-get update');
    //<-------------------------<
    updateRepo.on('close', function(){
        
        var commitUpdate = exec('docker commit 4691a ubuntu:14.04');
        commitUpdate.on('close', function(){
            
            var installTshark = exec('docker run ubuntu:14.04 \n\
            apt-get install -y tshark');
            
            installTshark.on('close', function(){
                console.log('tshark is installed');
                
                var commitSwCommon = exec ('docker commit cbe904 ubuntu:14.04');
                commitSwCommon.on('close', function(){
                    console.log('Tshark successfuly installed.');
                });             
            });
        });
    });//----->               
            });
        });
    });
});
