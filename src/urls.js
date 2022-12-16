
export const getQueryParams= (url) => {
  if (!url) {
    return {};
  }
  let addr = new URL(url);
  return addr.searchParams;
}
 
export const isURL = (url)=> {
  return /^(https?:\/\/(([a-zA-Z0-9]+-?)+[a-zA-Z0-9]+\.)+[a-zA-Z]+)(:\d+)?(\/.*)?(\?.*)?(#.*)?$/.test(url)
} 