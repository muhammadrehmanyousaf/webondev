# Backlink Automation System

This system implements white-hat, semi-automated backlink generation through content syndication, feed distribution, and image sharing.

## 🚀 Quick Start

1. Copy `env.example` to `.env.local` and fill in your API keys
2. Set `NEXT_PUBLIC_SITE_URL` to your production domain
3. Configure platform credentials (Dev.to, Medium, LinkedIn, Pinterest, etc.)
4. Visit `/admin/login` to access admin tools

## 📡 Feed Discovery & WebSub

### Feed Endpoints
- **Main feeds**: `/feed.xml`, `/feeds/atom`, `/feeds/json`
- **Segmented feeds**: 
  - `/feeds/services?format=rss|atom|json&limit=1000`
  - `/feeds/portfolio?format=rss|atom|json&limit=1000`
  - `/feeds/locations?format=rss|atom|json&limit=1000`
  - `/feeds/locations/[country]?format=rss|atom|json&limit=1000`

### WebSub Hub
- **Publish**: `POST /api/websub/publish` - Notifies hub of feed updates
- **Ping**: `GET/POST /api/ping` - Safe aggregator ping stub

## 📝 Content Syndication

### Publishing Orchestrator
- **Syndicate**: `POST /api/publish/syndicate`
  ```json
  {
    "title": "Your Article Title",
    "bodyMarkdown": "# Content...",
    "canonicalPath": "/blog/your-post",
    "tags": ["web-development", "seo"],
    "evergreen": { "feed": "services", "format": "json", "limit": 100 }
  }
  ```

### Platform Endpoints
- **Dev.to**: `POST /api/publish/devto` (requires `DEVTO_API_KEY`)
- **Medium**: `POST /api/publish/medium` (webhook forwarder)
- **LinkedIn**: `POST /api/publish/linkedin` (webhook forwarder)

### CI/CD Integration
- **Auto-publish**: `POST /api/hooks/on-publish` - Triggers syndication from CI/CD

## 🖼️ Image Distribution

### Image Generation
- **OG Images**: `GET /api/images/og?title=Title&subtitle=Subtitle`
- **Watermarks**: `GET /api/images/watermark?text=Brand&w=1200&h=630`

### Upload Endpoints
- **Imgur**: `POST /api/images/upload/imgur` (requires `IMGUR_CLIENT_ID`)
- **Pinterest**: `POST /api/images/upload/pinterest` (requires `PINTEREST_ACCESS_TOKEN`)
- **Flickr**: `POST /api/images/upload/flickr` (webhook forwarder)
- **Tailwind**: `POST /api/images/upload/tailwind` (webhook forwarder)

## 🔗 Link Indexing

### Indexer Endpoints
- **IndexMeNow**: `POST /api/indexer/indexmenow` (requires `INDEXMENOW_API_KEY`)
- **Link Centaur**: `POST /api/indexer/linkcentaur` (webhook forwarder)
- **InstantLinkIndexer**: `POST /api/indexer/instantlinkindexer` (webhook forwarder)

## 📅 Scheduling & Automation

### Evergreen Reshares
- **Schedule**: `POST /api/schedule/evergreen`
  ```json
  {
    "feed": "services|locations|portfolio",
    "format": "rss|atom|json",
    "limit": 100
  }
  ```

### Webhook Forwarders
- **Zapier**: `POST /api/hooks/publish` (forwards to `ZAPIER_HOOK_URL`)
- **Make**: `POST /api/hooks/publish` (forwards to `MAKE_HOOK_URL`)
- **IFTTT**: `POST /api/hooks/publish` (forwards to `IFTTT_HOOK_URL`)

## 🛡️ Admin Interface

### Admin Pages
- **Login**: `/admin/login` (requires `ADMIN_API_TOKEN`)
- **Publish**: `/admin/publish` - Content syndication form
- **Tools**: `/admin/tools` - Manual triggers for uploads/indexers

### Security
- All admin routes protected by `ADMIN_API_TOKEN`
- API endpoints support `x-admin-token` header or `Authorization: Bearer <token>`

## 🔧 Environment Variables

### Required
```bash
NEXT_PUBLIC_SITE_URL=https://www.solutionsindicator.com
ADMIN_API_TOKEN=your-strong-token
```

### Publishing Platforms
```bash
DEVTO_API_KEY=your-devto-key
MEDIUM_WEBHOOK_URL=https://hooks.zapier.com/...
LINKEDIN_WEBHOOK_URL=https://hooks.zapier.com/...
```

### Image Distribution
```bash
IMGUR_CLIENT_ID=your-imgur-id
PINTEREST_ACCESS_TOKEN=your-pinterest-token
PINTEREST_BOARD_ID=your-board-id
FLICKR_WEBHOOK_URL=https://hooks.zapier.com/...
TAILWIND_WEBHOOK_URL=https://hooks.zapier.com/...
```

### Automation
```bash
EVERGREEN_WEBHOOK_URL=https://hooks.zapier.com/...
ZAPIER_HOOK_URL=https://hooks.zapier.com/...
MAKE_HOOK_URL=https://hooks.make.com/...
IFTTT_HOOK_URL=https://hooks.ifttt.com/...
```

### Link Indexers
```bash
INDEXMENOW_API_KEY=your-indexmenow-key
LINKCENTAUR_WEBHOOK_URL=https://hooks.zapier.com/...
INSTANTLINKINDEXER_WEBHOOK_URL=https://hooks.zapier.com/...
```

## 🎯 Usage Examples

### 1. Publish New Content
```bash
curl -X POST https://yoursite.com/api/publish/syndicate \
  -H "Content-Type: application/json" \
  -H "x-admin-token: your-token" \
  -d '{
    "title": "Complete Guide to Web Development",
    "bodyMarkdown": "# Introduction...",
    "canonicalPath": "/blog/web-dev-guide",
    "tags": ["web-development", "tutorial"]
  }'
```

### 2. Upload Branded Image
```bash
curl -X POST https://yoursite.com/api/images/upload/pinterest \
  -H "Content-Type: application/json" \
  -H "x-admin-token: your-token" \
  -d '{
    "imageUrl": "https://yoursite.com/api/images/watermark?text=Solutions%20Indicator",
    "title": "Software Development Services",
    "description": "Professional software solutions"
  }'
```

### 3. Schedule Evergreen Reshares
```bash
curl -X POST https://yoursite.com/api/schedule/evergreen \
  -H "Content-Type: application/json" \
  -H "x-admin-token: your-token" \
  -d '{
    "feed": "services",
    "format": "json",
    "limit": 50
  }'
```

## 🔄 Automation Workflows

### Zapier/Make Scenarios
1. **Medium Import**: Webhook → Medium Import Tool → Canonical link
2. **LinkedIn Articles**: Webhook → LinkedIn API → Canonical link
3. **Pinterest Pins**: Webhook → Pinterest API → Branded images
4. **Flickr Upload**: Webhook → Flickr API → Watermarked images
5. **Indexer Submission**: Webhook → IndexMeNow/LinkCentaur → URL submission

### CI/CD Integration
```yaml
# GitHub Actions example
- name: Publish to All Platforms
  run: |
    curl -X POST ${{ secrets.SITE_URL }}/api/hooks/on-publish \
      -H "Content-Type: application/json" \
      -d '{
        "title": "${{ github.event.head_commit.message }}",
        "canonicalPath": "/blog/${{ github.event.head_commit.id }}",
        "bodyMarkdown": "New content published..."
      }'
```

## ⚠️ Best Practices

1. **Canonical Integrity**: Always set canonical URLs to your domain
2. **UTM Tracking**: Use `?utm_source=platform&utm_medium=syndication&utm_campaign=canonical`
3. **Image Branding**: Watermark all distributed images with your brand
4. **Rate Limiting**: Respect platform API limits
5. **Content Quality**: Ensure syndicated content adds value
6. **Monitoring**: Track backlink acquisition and domain authority

## 🚫 Avoid

- Mass backlink generators (GSA, SENuke, XRumer)
- Fiverr "10,000 backlinks" services
- Spammy footprints or duplicate content
- Over-optimized anchor text
- Low-quality directory submissions

## 📊 Monitoring

- Use Google Search Console to track backlinks
- Monitor domain authority with tools like Ahrefs/Moz
- Track feed subscriber growth
- Analyze syndication platform performance
- Monitor indexer submission success rates
