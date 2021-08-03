 function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}
 
 //console.log("foo1 returns:");
console.log(foo1());
 console.log(foo2());
 

 /*output --  // [Object, Object]
                 {
                    bar: "hello"
                  }
               undefined 
  */

  /* why Not  .. ?
      that semicolons are technically optional in JavaScript . 
      As a result, when the line containing the return statement  
       is encountered in foo2(), a semicolon is automatically inserted immediately after the return statement. */