
//connection of database
const mongoose = require('mongoose');
 async function main(){
    await mongoose.connect('mongodb+srv://ersarju86:Sarju2023@cluster0.jl3gpnz.mongodb.net/hospital-api?retryWrites=true&w=majority');
    console.log("Connection SuccessFull !!");
}
main().catch((error) =>{console.log("Connection Not Success Full !!");})
