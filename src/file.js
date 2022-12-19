export const isPDF = (filePath) => {
    const _index= filePath.lastIndexOf(".")
    if (-1 != _index) {
      const ext = filePath.substring(_index+1,_index+4);
      return ext.toUpperCase() == 'PDF'
    }
    return false
  };

export const sizeConvert = (limit) =>{
  if(!limit){
    return "0B"
  }  
  let size = "";  
  if( limit < 0.1 * 1024 ){ //如果小于0.1KB转化成B  
      size = limit.toFixed(2) + "B";    
  }else if(limit < 0.1 * 1024 * 1024 ){//如果小于0.1MB转化成KB  
      size = (limit / 1024).toFixed(2) + "KB";              
  }else if(limit < 0.1 * 1024 * 1024 * 1024){ //如果小于0.1GB转化成MB  
      size = (limit / (1024 * 1024)).toFixed(2) + "MB";  
  }else{ //其他转化成GB  
      size = (limit / (1024 * 1024 * 1024)).toFixed(2) + "GB";  
  }  

  let sizeStr = size + "";   
  let len = sizeStr.indexOf("\.");  
  let dec = sizeStr.substring(len + 1, 2);  
  if(dec == "00"){ 
      return sizeStr.substring(0,len) + sizeStr.substring(len + 3,2);  
  }  
  return sizeStr;  
}