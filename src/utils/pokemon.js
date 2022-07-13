export const getAllPokemon = (url) => {
  // resolveは成功, rejectは拒否という意味
  return new Promise((resolve, reject) => {
    // 取得できたらjson形式でdataとして受け取り返す。
    fetch(url).then((res) => res.json()).then((data) => resolve(data));
  })
}

export const getPokemon = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      resolve(data);
    });
  });
}