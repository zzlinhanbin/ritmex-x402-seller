# Ritmex X402 Seller

* [中文文档](README_cn.md)

A Next.js application demonstrating X402 micropayments for content monetization. This project showcases how to implement pay-per-access content using the X402 protocol, allowing creators to charge small amounts for premium content without traditional payment friction.

## Overview

The Ritmex X402 Seller is a demonstration of the X402 protocol's capabilities for content monetization. It features:

- **Micropayment Integration**: Uses X402 protocol for instant, low-cost payments
- **Protected Content Access**: Blockchain-verified access control
- **Modern UI**: Built with Next.js 16, React 19, and Tailwind CSS
- **Testnet Support**: Configured for Base Sepolia testnet

## Features

### 🔒 Protected Content Access
- Pay-per-view content model with $0.01 micropayments
- Blockchain-verified access control
- Instant payment verification
- No subscription fatigue

### ⚡ Instant Payments
- Lightning-fast micropayments powered by X402 protocol
- Minimal transaction fees
- Global accessibility without traditional banking

### 📊 Analytics Ready
- Real-time payment verification
- Transaction tracking capabilities
- Performance metrics for content monetization

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A crypto wallet (MetaMask recommended)
- Base Sepolia testnet ETH for testing

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ritmex-x402-seller
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

Edit `.env.local` with your configuration:
```env
X402_RECEIVING_WALLET_ADDRESS=0xyour-receiving-wallet-address
CDP_API_KEY_ID=your-api-key-id
CDP_API_KEY_SECRET=your-api-key-secret
```

### Running the Application

Start the development server:

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage Guide

### For Content Creators

1. **Configure Payment Settings**
   - Update `proxy.ts` to set your receiving wallet address
   - Adjust pricing for different content tiers
   - Configure network settings (testnet/mainnet)

2. **Protect Content Routes**
   - Add new protected routes in `proxy.ts`
   - Set pricing and access requirements
   - Configure route-specific settings

3. **Customize Content**
   - Modify `app/protected/page.tsx` for your premium content
   - Update branding and messaging
   - Add your own features and functionality

### For Users

1. **Accessing Free Content**
   - Visit the homepage at `/`
   - Browse available content and features

2. **Purchasing Premium Access**
   - Navigate to `/protected` route
   - Complete the $0.01 micropayment using X402
   - Gain instant access to premium content

3. **Payment Process**
   - Connect your crypto wallet
   - Approve the micropayment transaction
   - Receive instant access verification

## Configuration

### Payment Middleware Setup

The application uses `x402-next` middleware for payment processing. Key configuration in `proxy.ts`:

```typescript
export const proxy = paymentMiddleware(
  process.env.X402_RECEIVING_WALLET_ADDRESS as `0x${string}`,
  {
    '/protected': {
      price: '$0.01',
      network: "base-sepolia",
      config: {
        description: 'Access to protected content',
      }
    },
  },
  {
    url: "https://x402.org/facilitator",
  }
);
```

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `X402_RECEIVING_WALLET_ADDRESS` | Your wallet address for receiving payments | Yes |
| `CDP_API_KEY_ID` | Coinbase Developer Platform API Key ID | Yes |
| `CDP_API_KEY_SECRET` | Coinbase Developer Platform API Key Secret | Yes |

### Network Configuration

**Testnet (Current)**
- Network: Base Sepolia
- Facilitator: https://x402.org/facilitator
- Cost: Minimal testnet ETH

**Mainnet (Production)**
- Network: Base Mainnet
- Facilitator: Coinbase's mainnet facilitator
- Cost: Real ETH payments

## Project Structure

```
ritmex-x402-seller/
├── app/
│   ├── page.tsx              # Homepage (free content)
│   ├── protected/
│   │   └── page.tsx          # Premium content (paid access)
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── proxy.ts                  # X402 payment middleware configuration
├── env.example              # Environment variables template
└── package.json             # Dependencies and scripts
```

## Development

### Adding New Protected Routes

1. Create a new route in `app/` directory
2. Add route configuration in `proxy.ts`:

```typescript
{
  '/your-new-route': {
    price: '$0.05',
    network: "base-sepolia",
    config: {
      description: 'Your content description',
    }
  },
}
```

3. Update the middleware matcher:

```typescript
export const config = {
  matcher: [
    '/protected/:path*',
    '/your-new-route/:path*',
  ]
};
```

### Customizing Payment Flow

The payment middleware handles the entire flow:
1. User visits protected route
2. Payment prompt appears
3. User completes micropayment
4. Access is granted instantly
5. User can view premium content

### Styling and UI

The application uses Tailwind CSS for styling:
- Responsive design
- Dark mode support
- Modern gradient effects
- Accessible components

## Testing

### Testnet Testing

1. Get Base Sepolia testnet ETH from a faucet
2. Connect your wallet to Base Sepolia network
3. Test the payment flow with small amounts
4. Verify access control works correctly

### Production Deployment

1. Update network configuration to mainnet
2. Set up production environment variables
3. Deploy to your preferred platform (Vercel, Netlify, etc.)
4. Test with real payments

## Troubleshooting

### Common Issues

**Payment Not Processing**
- Check wallet connection
- Verify network (Base Sepolia for testnet)
- Ensure sufficient ETH balance
- Check facilitator URL configuration

**Access Not Granted**
- Verify payment transaction
- Check middleware configuration
- Ensure route is properly protected

**Environment Variables**
- Double-check wallet address format
- Verify API keys are correct
- Ensure `.env.local` is in project root

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Resources

- [X402 Protocol Documentation](https://x402.org)
- [Coinbase Developer Platform](https://portal.cdp.coinbase.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [Base Network Documentation](https://docs.base.org)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For questions and support:
- Check the X402 documentation
- Review Coinbase Developer Platform resources
- Open an issue in this repository
