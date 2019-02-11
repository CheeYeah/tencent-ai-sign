# tencent-ai-sign
微信AI开放平台签名工具。源码来自[微信AI开发平台示例](https://ai.qq.com/doc/auth.shtml)

## 安装
```
npm install tencent-ai-sign
```
## 使用
```
import sign from 'tencent-ai-sign'
sign(params, app_id, app_key)
```
返回
```
// something like this
{
  app_id: '10000',
  time_stamp: '1493449657',
  nonce_str: '20e3408a79',
  key1: '腾讯AI开放平台',
  key2: '示例仅供参考',
  sign: 'BE918C28827E0783D1E5F8E6D7C37A61',
}
```