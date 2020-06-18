function check()
{
   var p1= document.getElementById('pass');
   var p2= document.getElementById('same-pass');
   if(p1.value!=p2.value)
   {
       alert("Both passwords should be same!");
       return false;
   }
}