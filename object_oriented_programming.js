let person ={
    name :"rishabh",
    lastname :"srivastav",
    age: 52,
//    method inside a object 
    detail : function()
    {
        console.log(this.name + " " +this.lastname+ " " +this.age);//excess elemenent of object in method
    }
}

//console.log(person.name); when object value access

 person.detail();  //excess method_function when inside the object  