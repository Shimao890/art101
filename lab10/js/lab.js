/*
 * author: Shimao Zhou Cole Keeton
 * created: May 2nd
 * license:
 *
 */
//Events and forms

 document.getElementById("my-button").addEventListener('click',
  sortUserName);
  function sortUserName(){
    var userName = document.getElementById("user-name").value;
    var nameArray = userName.split('');
    var nameArraySort = nameArray.sort();
    var nameSorted = nameArraySort.join('');
    return nameSorted;
  }
  var result = sortUserName();
var ouput = document.getElementById("output").appendChild(result);
