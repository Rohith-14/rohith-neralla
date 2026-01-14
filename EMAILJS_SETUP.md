# EmailJS Setup Guide

Follow these steps to enable email functionality in your contact form:

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Select **Gmail** (or your preferred email provider)
4. Connect your Gmail account: **rohithneralla99@gmail.com**
5. Copy the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template:

```
Subject: New Contact Form Message - {{subject}}

From: {{user_name}}
Email: {{user_email}}

Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Template variables to include:
   - `{{user_name}}` - Sender's name
   - `{{user_email}}` - Sender's email
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content

5. Set **Email To**: rohithneralla99@gmail.com
6. Copy the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `AbC123XyZ`)

## Step 5: Update Environment Variables

1. Open `.env.local` in your project
2. Replace the placeholder values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=AbC123XyZ
```

## Step 6: Restart Development Server

```bash
npm run dev
```

## Testing

1. Go to the Contact section on your portfolio
2. Fill out the form with test data
3. Click "Send Message"
4. Check your email: rohithneralla99@gmail.com

## Troubleshooting

- **Error: "Service ID not found"** → Double-check your Service ID
- **Error: "Template not found"** → Verify your Template ID
- **Error: "Invalid public key"** → Confirm your Public Key
- **Emails not arriving** → Check your spam folder

## Free Tier Limits

- 200 emails per month (free plan)
- Upgrade for more emails if needed

---

**Need help?** EmailJS documentation: https://www.emailjs.com/docs/
