
export const getQueryParams= (url) => {
    if (!url) {
      return {};
    }
    let addr = new URL(url);
    return addr.searchParams;
  }