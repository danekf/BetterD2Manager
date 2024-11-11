
const getInfo = (apiKey: string) => {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/", true);
  xhr.setRequestHeader("X-API-Key", apiKey);

  console.log(xhr)
  
  xhr.onreadystatechange = function(){
   if(this.readyState === 4 && this.status === 200){
    var json = JSON.parse(this.responseText);
    console.log(json.Response?.data.inventoryItem.itemName); //Gjallarhorn
    console.log(json)
   }
  }
  
  xhr.send();
};


export default getInfo;