import { Md5 } from "ts-md5/dist/md5";

function createNonceStr() {
  return Math.random()
    .toString(36)
    .substr(2, 15);
}

function createTimestamp(): number {
  return parseInt((new Date().getTime() / 1000).toString(), 0);
}

/**
 * @synopsis ascending sort
 *
 * @param args request parameter
 *
 * @returns
 */
function raw(args: any): string {
  let keys = Object.keys(args);
  keys = keys.sort();
  const newArgs: any = {};
  keys.forEach((key) => {
    newArgs[key] = args[key];
  });

  let str = "";
  for (const k in newArgs) {
    if (k) {
      str += "&" + k + "=" + encodeURI(newArgs[k]);
    }
  }
  str = str.substr(1);
  return str;
}

export function sign(params: any, appId: number, appKey: string) {
  const ret = {
    ...{
      app_id: appId,
      nonce_str: createNonceStr(),
      time_stamp: createTimestamp(),
    },
    ...params,
  };
  let str = raw(ret);
  str += "&" + "app_key=" + appKey;
  const md5Sign = Md5.hashStr(str)
    .toString()
    .toUpperCase();
  ret.sign = md5Sign;
  return ret;
}
