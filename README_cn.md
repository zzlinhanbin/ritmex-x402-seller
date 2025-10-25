# Ritmex X402 销售平台

一个基于 Next.js 的应用程序，演示了 X402 微支付在内容货币化中的应用。本项目展示了如何使用 X402 协议实现按访问付费的内容，让创作者能够对小额优质内容收费，而无需传统支付系统的摩擦。

## 项目概述

Ritmex X402 销售平台是 X402 协议在内容货币化方面能力的演示。它具有以下特点：

- **微支付集成**：使用 X402 协议实现即时、低成本的支付
- **受保护的内容访问**：基于区块链的访问控制验证
- **现代化界面**：基于 Next.js 16、React 19 和 Tailwind CSS 构建
- **测试网支持**：配置支持 Base Sepolia 测试网

## 功能特性

### 🔒 受保护的内容访问
- 按观看付费的内容模式，微支付 $0.01
- 基于区块链的访问控制验证
- 即时支付验证
- 无订阅疲劳

### ⚡ 即时支付
- 由 X402 协议驱动的闪电般快速微支付
- 最低交易费用
- 无需传统银行即可全球访问

### 📊 分析就绪
- 实时支付验证
- 交易跟踪功能
- 内容货币化性能指标

## 快速开始

### 前置要求

- Node.js 18+ 或 Bun
- 加密货币钱包（推荐 MetaMask）
- Base Sepolia 测试网 ETH 用于测试

### 安装步骤

1. 克隆仓库：
```bash
git clone <repository-url>
cd ritmex-x402-seller
```

2. 安装依赖：
```bash
npm install
# 或
bun install
```

3. 设置环境变量：
```bash
cp env.example .env.local
```

编辑 `.env.local` 文件，填入您的配置：
```env
X402_RECEIVING_WALLET_ADDRESS=0x您的接收钱包地址
CDP_API_KEY_ID=您的API密钥ID
CDP_API_KEY_SECRET=您的API密钥密码
```

### 运行应用程序

启动开发服务器：

```bash
npm run dev
# 或
bun dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

## 使用指南

### 对于内容创作者

1. **配置支付设置**
   - 更新 `proxy.ts` 文件设置您的接收钱包地址
   - 为不同内容层级调整定价
   - 配置网络设置（测试网/主网）

2. **保护内容路由**
   - 在 `proxy.ts` 中添加新的受保护路由
   - 设置定价和访问要求
   - 配置路由特定设置

3. **自定义内容**
   - 修改 `app/protected/page.tsx` 以定制您的优质内容
   - 更新品牌和消息
   - 添加您自己的功能和特性

### 对于用户

1. **访问免费内容**
   - 访问首页 `/`
   - 浏览可用内容和功能

2. **购买高级访问权限**
   - 导航到 `/protected` 路由
   - 使用 X402 完成 $0.01 微支付
   - 获得优质内容的即时访问权限

3. **支付流程**
   - 连接您的加密货币钱包
   - 批准微支付交易
   - 接收即时访问验证

## 配置说明

### 支付中间件设置

应用程序使用 `x402-next` 中间件进行支付处理。`proxy.ts` 中的关键配置：

```typescript
export const proxy = paymentMiddleware(
  process.env.X402_RECEIVING_WALLET_ADDRESS as `0x${string}`,
  {
    '/protected': {
      price: '$0.01',
      network: "base-sepolia",
      config: {
        description: '访问受保护的内容',
      }
    },
  },
  {
    url: "https://x402.org/facilitator",
  }
);
```

### 环境变量

| 变量名 | 描述 | 必需 |
|--------|------|------|
| `X402_RECEIVING_WALLET_ADDRESS` | 用于接收付款的钱包地址 | 是 |
| `CDP_API_KEY_ID` | Coinbase 开发者平台 API 密钥 ID | 是 |
| `CDP_API_KEY_SECRET` | Coinbase 开发者平台 API 密钥密码 | 是 |

### 网络配置

**测试网（当前）**
- 网络：Base Sepolia
- 协调器：https://x402.org/facilitator
- 成本：最少的测试网 ETH

**主网（生产环境）**
- 网络：Base 主网
- 协调器：Coinbase 的主网协调器
- 成本：真实的 ETH 支付

## 项目结构

```
ritmex-x402-seller/
├── app/
│   ├── page.tsx              # 首页（免费内容）
│   ├── protected/
│   │   └── page.tsx          # 优质内容（付费访问）
│   ├── layout.tsx            # 根布局
│   └── globals.css           # 全局样式
├── proxy.ts                  # X402 支付中间件配置
├── env.example              # 环境变量模板
└── package.json             # 依赖和脚本
```

## 开发指南

### 添加新的受保护路由

1. 在 `app/` 目录中创建新路由
2. 在 `proxy.ts` 中添加路由配置：

```typescript
{
  '/your-new-route': {
    price: '$0.05',
    network: "base-sepolia",
    config: {
      description: '您的内容描述',
    }
  },
}
```

3. 更新中间件匹配器：

```typescript
export const config = {
  matcher: [
    '/protected/:path*',
    '/your-new-route/:path*',
  ]
};
```

### 自定义支付流程

支付中间件处理整个流程：
1. 用户访问受保护路由
2. 出现支付提示
3. 用户完成微支付
4. 立即授予访问权限
5. 用户可以查看优质内容

### 样式和界面

应用程序使用 Tailwind CSS 进行样式设计：
- 响应式设计
- 深色模式支持
- 现代渐变效果
- 无障碍组件

## 测试

### 测试网测试

1. 从水龙头获取 Base Sepolia 测试网 ETH
2. 将钱包连接到 Base Sepolia 网络
3. 使用小额金额测试支付流程
4. 验证访问控制正常工作

### 生产环境部署

1. 将网络配置更新为主网
2. 设置生产环境变量
3. 部署到您首选的平台（Vercel、Netlify 等）
4. 使用真实支付进行测试

## 故障排除

### 常见问题

**支付未处理**
- 检查钱包连接
- 验证网络（测试网使用 Base Sepolia）
- 确保有足够的 ETH 余额
- 检查协调器 URL 配置

**未授予访问权限**
- 验证支付交易
- 检查中间件配置
- 确保路由正确受保护

**环境变量**
- 仔细检查钱包地址格式
- 验证 API 密钥是否正确
- 确保 `.env.local` 在项目根目录

## 贡献

1. Fork 仓库
2. 创建功能分支
3. 进行更改
4. 彻底测试
5. 提交拉取请求

## 资源

- [X402 协议文档](https://x402.org)
- [Coinbase 开发者平台](https://portal.cdp.coinbase.com)
- [Next.js 文档](https://nextjs.org/docs)
- [Base 网络文档](https://docs.base.org)

## 许可证

本项目采用 MIT 许可证 - 查看 LICENSE 文件了解详情。

## 支持

如有问题和需要支持：
- 查看 X402 文档
- 查看 Coinbase 开发者平台资源
- 在此仓库中开启问题
