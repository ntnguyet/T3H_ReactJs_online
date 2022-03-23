//method this
let Info2 = {
    getPhone: "1234",
    name: "test",
    age: 44,
    xinchao: function(){
        console.log(this.name);
    },
    contact: {
        phone: Info2.getPhone, //1234
        email: "test@gmail.com",
        aboutMe: function(){
            console.log(this.email); //test@gmail.com
        },
        aboutUs: function(){
            console.log(this.name); //undefined do không tìm được giá trị name trong vùng chứa nó. 
        }
    }
}
//Constructor, operator "new"