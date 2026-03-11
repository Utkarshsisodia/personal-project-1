export const blogPosts = [
  {
    id: 1,
    title: "Understanding Server Actions in Next.js 14",
    summary: "Dive deep into the new server actions paradigm and learn how to mutate data without writing traditional API routes.",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop",
    date: "Oct 24, 2025",
    readTime: "5 min read",
    author: {
      name: "Sarah Jenkins",
      initials: "SJ",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=256&h=256&auto=format&fit=crop"
    },
    content: [
      "For years, building data mutations in React applications meant setting up a dedicated API route, writing fetch calls on the client, managing loading states, and handling CORS issues. With Next.js 14, that paradigm is fundamentally changing.",
      "Traditionally, if you wanted to submit a form to update a user's profile, you had to jump through several hoops. You would intercept the form submission, prevent the default behavior, serialize the data, and send it via an HTTP POST request.",
      "Server Actions eliminate this boilerplate. By simply adding the 'use server' directive at the top of an async function, you can pass that function directly to the action attribute of a standard HTML form. The framework handles the network boundary automatically."
    ]
  },
  {
    id: 2,
    title: "Designing Accessible UI Components",
    summary: "Accessibility isn't a feature, it's a requirement. Learn the core principles of building inclusive interfaces with modern CSS.",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&auto=format&fit=crop",
    date: "Nov 02, 2025",
    readTime: "8 min read",
    author: {
      name: "David Chen",
      initials: "DC",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=256&h=256&auto=format&fit=crop"
    },
    content: [
      "When we talk about modern web design, the conversation often heavily revolves around aesthetics—gradients, shadows, and animations. However, a truly exceptional user interface is one that can be navigated by anyone, regardless of their physical abilities.",
      "Building accessible components starts with semantic HTML. A button should be a <button>, not a <div> with an onClick handler. This ensures screen readers and keyboard navigators can interact with your application out of the box.",
      "Beyond semantics, color contrast and focus states are your best tools. Never rely entirely on color to convey state changes, and ensure your focus rings are highly visible for users navigating via the Tab key."
    ]
  },
  {
    id: 3,
    title: "The Future of Web Typography",
    summary: "How variable fonts and modern CSS viewport units are revolutionizing responsive typography on the web.",
    category: "Design",
    image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=1200&auto=format&fit=crop",
    date: "Nov 15, 2025",
    readTime: "4 min read",
    author: {
      name: "Emily Rodriguez",
      initials: "ER",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=256&h=256&auto=format&fit=crop"
    },
    content: [
      "Typography is the backbone of web design. For decades, we were restricted to a handful of 'web-safe' fonts. Even when custom web fonts arrived, loading multiple weights (regular, bold, italic) severely impacted page performance.",
      "Variable fonts solve this by packing an entire typeface's variations into a single, highly optimized file. Using CSS properties like font-variation-settings, designers can interpolate weight, width, and slant dynamically.",
      "Combine variable fonts with modern CSS clamp() and dynamic viewport units (dvh, dvw), and you can create typography that scales perfectly fluidly from a massive 4K monitor down to the smallest mobile device, without writing a single media query."
    ]
  },
  {
    id: 4,
    title: "The SIP Revolution: How Retail Investors are Reshaping Dalal Street",
    summary: "Systematic Investment Plans (SIPs) have democratized wealth creation in India. We explore the psychological and mathematical advantages of this approach.",
    category: "Personal Finance",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&auto=format&fit=crop",
    date: "Dec 10, 2025",
    readTime: "6 min read",
    author: {
      name: "Priya Sharma",
      initials: "PS",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=256&h=256&auto=format&fit=crop"
    },
    content: [
      "For decades, the Indian stock market was perceived as a playground only for the wealthy or the incredibly daring. However, the rapid adoption of Systematic Investment Plans (SIPs) in mutual funds has entirely rewritten the rules of wealth creation for the Indian middle class.",
      "The beauty of an SIP lies in its discipline and the power of Rupee Cost Averaging. By investing a fixed amount every month, retail investors automatically buy more units when the markets are down and fewer units when the markets are high. This completely removes the stressful, often impossible task of trying to time the market.",
      "Today, domestic institutional investors, fueled by monthly SIP inflows running into thousands of crores, act as a massive structural cushion for the Indian markets, reducing the historic volatility caused by foreign institutional outflows."
    ]
  },
  {
    id: 5,
    title: "Decoding the Nifty 50: Beyond the Benchmark",
    summary: "Understanding the composition, sector weightages, and historical performance of India's flagship stock market index.",
    category: "Markets",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&auto=format&fit=crop",
    date: "Jan 05, 2026",
    readTime: "7 min read",
    author: {
      name: "Rohan Desai",
      initials: "RD",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=256&h=256&auto=format&fit=crop"
    },
    content: [
      "When financial news anchors talk about 'the market going up,' they are usually referring to the Nifty 50 or the BSE Sensex. But what exactly is the Nifty 50? It represents the weighted average of 50 of the largest and most liquid Indian companies listed on the National Stock Exchange.",
      "A common mistake beginners make is assuming the index is static. In reality, the Nifty 50 is a self-cleansing mechanism. Companies that lose market capitalization or fail to meet liquidity criteria are routinely booted out and replaced by emerging market leaders. This ensures the index always represents the current driving forces of the Indian economy.",
      "Historically dominated by the Financial Services and IT sectors, the composition of the index is slowly shifting to reflect the rise of domestic manufacturing, FMCG, and renewable energy sectors."
    ]
  },
  {
    id: 6,
    title: "Value Investing in Emerging Markets: Finding the Moats",
    summary: "How traditional Warren Buffett-style value investing principles can be adapted to navigate the high-growth Indian equity landscape.",
    category: "Investing",
    image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=1200&auto=format&fit=crop",
    date: "Feb 18, 2026",
    readTime: "9 min read",
    author: {
      name: "Vikram Malhotra",
      initials: "VM",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=256&h=256&auto=format&fit=crop"
    },
    content: [
      "Value investing—the art of buying securities for less than their intrinsic value—is often deemed difficult in a fast-growing emerging market like India, where high-quality companies routinely command steep price-to-earnings (P/E) multiples.",
      "However, value doesn't strictly mean 'cheap'. In the Indian context, value investing is about identifying companies with durable economic moats—such as a massive distribution network in rural areas, low-cost manufacturing advantages, or high switching costs for B2B software—before the broader market fully prices in their decades of growth potential.",
      "Investors looking for value must dig deeper into mid-cap and small-cap spaces, looking for strong corporate governance, low debt-to-equity ratios, and management teams with a proven track record of efficient capital allocation across market cycles."
    ]
  },
];