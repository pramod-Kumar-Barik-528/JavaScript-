var Employee =
{
company: 'Rohit'
}
var Emp1 = Object.create(Employee);
delete Emp1.company 
console.log(Emp1.company);

//OutPut - Rohit


/*in here i debug the code then i have got my OUTPOUT i.e "Rohit"
if i run the code without debuging then OUTPUT was Error i.e Identifire Error*/