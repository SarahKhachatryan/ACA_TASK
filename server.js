const express = require('express');
var cors = require('cors');
const app = express();
const {write_user, to_cv} = require('./helpers/converter');
const admz = require('adm-zip');
const {read_json} = require('./helpers/read_json');



// CORS FUNCTIONALITY

// const whitelist = ['aca.am'];
// const corsOptions = {
//     origin: function (origin, callback) {
//         console.log(origin);
//       if (whitelist.indexOf(origin) !== -1) {
//         callback(null, true)
//       } else {
//         callback(new Error('Not allowed by CORS'))
//       }
//    }
//   }
 
    app.get('/',function(req,res)
{
    let arr = read_json(); 

    console.log("arr",arr);
    
    res.sendFile(__dirname + '/' + 'index.html');

    const zp = new admz();
    
    for(let i=0; i<arr.length; i++){
    
        const cv_text = write_user(to_cv(arr[i]));
    
        zp.addLocalFile(cv_text);
    }
    
        const file_after_download ='cv.zip';
    
        const data = zp.toBuffer();

    res.set('Content-Type','application/octet-stream');
    res.set('Content-Disposition',`attachment; filename=${file_after_download}`);
    res.set('Content-Length',data.length);
    res.send(data);
    
});

app.listen(3000,()=> {console.log("app running on port 3000")});
