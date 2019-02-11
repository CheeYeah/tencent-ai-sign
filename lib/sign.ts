import { Md5 } from "ts-md5/dist/md5";

function createNonceStr() {
  return Math.random()
    .toString(36)
    .substr(2, 15);
}

function createTimestamp() {
  return parseInt((new Date().getTime() / 1000).toString());
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
  let newArgs: any = {};
  keys.forEach(function(key) {
    newArgs[key] = args[key];
  });

  let string = "";
  for (var k in newArgs) {
    string += "&" + k + "=" + encodeURI(newArgs[k]);
  }
  string = string.substr(1);
  return string;
}

export function sign(params: any, app_id: number, app_key: string) {
  let ret = {
    ...{
      app_id: app_id,
      nonce_str: createNonceStr(),
      time_stamp: createTimestamp()
    },
    ...params
  };
  let string = raw(ret);
  string += "&" + "app_key=" + app_key;
  const sign = Md5.hashStr(string)
    .toString()
    .toUpperCase();
  ret.sign = sign;
  return ret;
}
