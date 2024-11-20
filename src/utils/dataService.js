export const getItem = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "PlayStation 5",
        description: "O console de próxima geração da Sony.",
        price: 4999,
        pictureUrl:
          "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$",
      });
    }, 2000);
  });
};
