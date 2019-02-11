"use strict";
const expect = require("chai").expect;
const sign = require("../dist/index").sign;

describe("tencent ai sign test", () => {
  it("should be BE918C28827E0783D1E5F8E6D7C37A61", () => {
    const result = sign(
      {
        time_stamp: 1493449657,
        nonce_str: "20e3408a79",
        key1: "腾讯AI开放平台",
        key2: "示例仅供参考"
      },
      10000,
      "a95eceb1ac8c24ee28b70f7dbba912bf"
    );
    expect(result.sign).to.equal("BE918C28827E0783D1E5F8E6D7C37A61");
  });
});
