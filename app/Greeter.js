
module.exports = function() { //将该方法导出
  var greet = document.createElement('div');
  greet.textContent = "Hi there and greetings!";
  return greet;
};

var Running={
	a:1,b:2,
	findMaxDuplicateChar:function(str){
		  if(str.length == 1) {
    return str;
  }
  let charObj = {};
  for(let i=0;i<str.length;i++) {
    if(!charObj[str.charAt(i)]) {
      charObj[str.charAt(i)] = 1;
    }else{
      charObj[str.charAt(i)] += 1;
    }
  }
  let maxChar = '',
      maxValue = 1;
  for(var k in charObj) {
    if(charObj[k] >= maxValue) {
      maxChar = k;
      maxValue = charObj[k];
    }
  }
  return maxChar;
	}
}
module.exports.tag=1; //给exports.tag属性赋值，注意不能直接给exports赋值
module.exports.Running=Running;  //返回一个对象