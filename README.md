## code test

> 开始时间 2021/11/10 10:00 am

> 结束时间 

- 开发环境：[ABT Node](https://docs.arcblock.io/abtnode/en/)、[create-blocklet](https://github.com/blocklet/create-blocklet)
- 需求
  - 主界面包含输入框，用户输入某个比特币的 Block Hash 后能查询并展示对应 Block 中包含的所有 Transaction
  - 根据 Block Hash 拿到区块数据
  - 可以任意输入 Block Hash 来查看结果
  - 展示区块摘要和分页的交易列表
  - 响应式布局
  - 编写测试

## create-blocklet 工具

### 遇到到问题 ：

1. `npm run dev`报错 `eslint EACCES: permission denied .eslintcache`
   - 权限问题，使用`sudo npm run dev ` 解决

## 第三方依赖

- antd
- mobx
- umi-request
- query-string

## 区块数据来源

> https://blockchain.info/rawblock/$block_hash

| 字段名      | 类型               | 备注                                            |
| ----------- | ------------------ | ----------------------------------------------- |
| ver         | number             | 网络节点版本号                                  |
| prev_block  | string             | 上一个区块头的 hash                             |
| next_block  | Array<string>      |
| mrkl_root   | string             | Merkle tree                                     |
| time        | number             | 区块生成时间                                    |
| bits        | number             | 网络的难度                                      |
| nonce       | number             | 交易下的 nonce 值，是账户发起交易所维护的 nonce |
| --          | --                 | --                                              |
| hash        | string             | 区块的唯一标识                                  |
| fee         | number             | 酬金?                                           |
| size        | number             | 当前区块的字节大小                              |
| block_index | number             | 区块索引                                        |
| main_chain  | boolean            | 是否在主链上                                    |
| height      | number             | 区块高度                                        |
| weight      | number             | 是区块计费的新指标                              |
| n_tx        | number             | 交易数量                                        |
| tx          | Array<Transaction> | 交易数组                                        |

--Transaction 交易数据--
字段名 | 类型 | 备注
---|---|---
hash | string | 交易哈希
ver | number | 版本号
vin_sz | number | 交易输入数量
vou_sz | number | 交易输出数量
size | number | 交易字节数
weight | number |
fee | number |
relayed_by | string | 中继点 IP
lock_time | number | 锁定时间
tx_index | number | 交易索引
inputs | Array<Input> | 交易输入数组，每个成员表示一个交易输入对象
out | Array<Out> | 交易输出数组，每个成员表示一个交易输出对象

--Input 交易输入数据--
字段名 | 类型 | 备注
---|---|---
sequence | number | 支出方 定义的交易版本
script | string | 公钥脚本
witness | string | 交易的证明？

--Out 交易输出数据--
字段名 | 类型 | 备注
---|---|---
value | number | 输出金额
script | string | 目标公钥脚本
addr ｜ string | 钱包地址

## Start

```bash
npm i
npm run dev
```

## Test

```bash
npm run test
```
## Preview
![2021-11-12-HiNklM](https://cdn.jsdelivr.net/gh/frmachao/images@blog/uPic/2021-11-12-HiNklM.png)

![2021-11-12-E9PIqO](https://cdn.jsdelivr.net/gh/frmachao/images@blog/uPic/2021-11-12-E9PIqO.png)