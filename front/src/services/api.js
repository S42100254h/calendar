const host = "http://localhost:3001/api/v1";
const url = (path) => `${host}/${path}`;

const header = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const get = async (path) => {
  const resp = await fetch(url(path));
  checkError(resp.status);
  const result = await resp.json();

  return result;
};

export const post = async (path, body) => {
  const options = { ...header, method: "POST", body: JSON.stringify(body) };
  const resp = await fetch(url(path), options);
  checkError(resp.status);
  const result = await resp.json();

  return result;
};

export const deleteRequest = async (path) => {
  const options = { method: "DELETE" };
  const resp = await fetch(url(path), options);
  checkError(resp.status);
};

const checkError = (status) => {
  // 今回は400以上の場合は、全部まとめてエラーとして処理
  if (status >= 400) {
    throw new Error("エラーが発生しました。時間を置いて再度お試しください。");
  }
};
