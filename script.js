function makeid(l) {
  const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const nums="1234567890";
  let id="";
  for(let i=0;i<l;i++){
    const index=Math.ceil(Math.random()*10);
    if(index%2)
        id+=nums[index];
    else
        id+=chars[index];
  }
  return id;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));