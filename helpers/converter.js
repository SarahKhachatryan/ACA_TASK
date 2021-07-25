const fs = require('fs');

//creates a cv for one user 
function to_cv (info){

        const {email, gender, phone_number,birthdate, location, username, password,first_name,last_name, title, picture} = info;
        const {street,city, state, postcode} = location;

     const cv = `                 Name: ${first_name}
                 Surname: ${last_name}
                 Title: ${title}
                 Gender: ${gender}
                 Picture: ${picture}
                 Birthdate: ${birthdate}
                 Phone Number: ${phone_number}
                 Username: ${username}
                 Password: ${password}
                 Email: ${email}
                 Location
                 City: ${city}
                 Street: ${street}
                 State: ${state}
                 Pastcode: ${postcode}
                 `
       return {cv: cv, file_name: `${first_name}_${last_name}_cv`};

}

//writes single user object in a text file 
 function write_user(info){

    //saving cv as a text file in directory
    const cv_text = 'info' + '/' + info.file_name + '.txt';

    fs.writeFileSync(cv_text,info.cv, err=>{

        if(err){
            console.log(err);
            return;
        }  
        else {
            console.log("User was written in text file.")
        }
    })
    return cv_text;
}


module.exports = {write_user,to_cv};