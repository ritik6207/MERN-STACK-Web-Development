//Analyzing process
// console.log(process);

// Enviroment varibale
// console.log(process.env);


// Acessing env variable
const appEnv = process.env.APP_ENV || "development"
// Display the env
// console.log(`Our Node App is running ${appEnv}`);
// setting the env


//!  process.exit()
// Check the current enviroment using the 'NODE_ENV' enviroment vairable

// console.log(process.env.NODE_ENV);

// if(process.env.NODE_ENV != "production"){
//     // Display some error
//     // console.log("This script should only run in production");
//     // Exit the process
//     process.exit();
// }



//! 'porcess.cwd()' and 'process.chdir(directory)'

// Log the current working directory of the process
// console.log(`Current working directory ${process.cwd()}`);


try {
    // Change the current working directory
    process.chdir("/tmp");
    // Log the new current working directory after the change
    console.log(`The new working directory is ${process.cwd()}`);
} catch (error) {
    // Log any error the might occur during the directory change
    console.log(`Someting happend: ${error}`);
}