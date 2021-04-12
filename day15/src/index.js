//day-15
// function getCurrentTime(){
//   return setTimeout(function(){
//     return new Date();
//   },2000)
// }
// var currentTime = getCurrentTime();
// console.log('The current time is: '+ currentTime)

// function getCurrentTime(callback){
//   return setTimeout(function(){
//     var currentTime = new Date();
//         callback(currentTime);
//       },2000);
// }
// getCurrentTime(function(currentTime){
//   console.log('The current time is: '+ currentTime);
// });
// function getCurrentTime(onSuccess,onFail){
//   return setTimeout(function(){
//     var didSucceed = Math.random()>=0.5;
//     if(didSucceed){
//       var currentTime = new Date();
//       onSuccess(currentTime);
//     }else{
//       onFail('Unknown error');
//     }
//   },2000);
// }
// getCurrentTime(function(currentTime){
//   getCurrentTime(function(newCurrentTime){
//     console.log('The current time is: '+ currentTime);
//   },function(nestedError){
//     console.log('There was an error fetching the second time');
//   })
// },function(error){
//   console.log('There was an error fetching the time');
// })
function getCurrentTime(){
  return new Promise((resolve,reject)=>{
    setTimeout(function(){
      var didSucceed = Math.random()>=0.5;
      didSucceed?resolve(new Date()):reject('Error----') 
    },2000);
  })
}
getCurrentTime()
  .then(currentTime => getCurrentTime())
  .then(currentTime => {
    console.log('The current time is: '+ currentTime);
    return true;
  })
  .then(currentTimeMessage => console.log('currentMessage:'+currentTimeMessage))
  .catch(err=>console.log('There was an error:' + err));