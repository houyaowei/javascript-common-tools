export const isPDF = (filePath) => {
    const _index= filePath.lastIndexOf(".")
    if (-1 != _index) {
      const ext = filePath.substring(_index+1,_index+4);
      return ext.toUpperCase() == 'PDF'
    }
    return false
  };
