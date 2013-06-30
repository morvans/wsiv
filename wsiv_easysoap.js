var easySoap    = require('easysoap');

//soap client params
var clientParams = {

    //set soap connection data (mandatory values)
    // //www.ratp.fr/wsiv/services/Wsiv
    host    : 'www.ratp.fr',
    path    : '/wsiv/services/Wsiv',
    wsdl    : '/wsiv/services/Wsiv?wsdl',

    //set soap header (optional)
    header  : []
};

//soap client options
var clientOptions = {
    secure : false //is https or http
};

//create new soap client
var SoapClient = new easySoap.Client(clientParams, clientOptions);
    SoapClient.once('initialized', function() {
      console.log('initialized');
console.log(SoapClient.getAllFunctions());
        //successful initialized
        SoapClient.once('getVersion', function(data, header) {
   console.log('here');
          console.log(header);
          console.log(data);
            //soap response
        });

        SoapClient.call({
            'method' : 'getVersion',
            'params' : {

            }
        });
    });

    //initialize soap client
    SoapClient.init();


function onClientCreated(err, client){
  console.log(client);
//  client.GetLines([], onGetLines);
}

function onGetLines(err, result){
  console.log(result);
}

//var soap = require('soap');
//var url = 'http://www.ratp.fr/wsiv/services/Wsiv?wsdl';
//var args = {};
//soap.createClient(url, onClientCreated); 
//
//

