export function getLocalStorageItem(key: string) {
  try {
    if (typeof window !== 'undefined') {
      let item = localStorage.getItem(key);
      return item;
    }
    return null;
  } catch (error) {
    console.log(error);
  }
}
