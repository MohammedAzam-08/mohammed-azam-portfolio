# Email Setup Guide for Portfolio Contact Form

## Option 1: EmailJS (Recommended) - FREE

EmailJS allows you to send emails directly from your frontend without a backend server.

### Steps to Setup EmailJS:

1. **Create EmailJS Account**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account (allows 200 emails/month)

2. **Add Email Service**
   - Go to "Email Services" in your dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail recommended)
   - Connect your Gmail account (mdazam2722001@gmail.com)

3. **Create Email Template**
   - Go to "Email Templates" in your dashboard
   - Click "Create New Template"
   - Use this template:

   ```
   Subject: New Contact Form Submission: {{subject}}

   Hello Mohammed,

   You have received a new message from your portfolio website:

   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}

   Message:
   {{message}}

   Best regards,
   Portfolio Contact Form
   ```

4. **Get Your Credentials**
   - Service ID: Found in "Email Services" section
   - Template ID: Found in "Email Templates" section
   - Public Key: Found in "Account" > "General" > "Public Key"

5. **Update Configuration**
   - Open `src/config/emailjs.ts`
   - Replace the placeholder values with your actual credentials:

   ```typescript
   export const emailjsConfig = {
     serviceId: 'service_xxxxxxx', // Your actual service ID
     templateId: 'template_xxxxxxx', // Your actual template ID
     publicKey: 'xxxxxxxxxxxxxxx', // Your actual public key
   };
   ```

6. **Test the Form**
   - Start your development server: `npm run dev`
   - Fill out the contact form and submit
   - Check your email for the message

---

## Option 2: Formspree - FREE Alternative

If you prefer not to use EmailJS, Formspree is another excellent option:

1. Go to [https://formspree.io/](https://formspree.io/)
2. Create a free account (allows 50 submissions/month)
3. Create a new form and get your form endpoint
4. Update the form action in Contact.tsx to use Formspree

---

## Option 3: Netlify Forms (If hosting on Netlify)

If you deploy your portfolio on Netlify, you can use Netlify Forms:

1. Add `data-netlify="true"` to your form element
2. Deploy to Netlify
3. Forms will automatically be processed

---

## Security Notes:

- EmailJS credentials are safe to expose in frontend code
- The public key is meant to be public
- EmailJS has built-in rate limiting and spam protection
- Your actual email credentials are never exposed

---

## Troubleshooting:

1. **Emails not being sent:**
   - Check browser console for errors
   - Verify your EmailJS credentials
   - Check your spam folder

2. **Rate limiting:**
   - Free tier has 200 emails/month limit
   - Upgrade to paid plan if needed

3. **Form validation:**
   - All fields are required
   - Email format is validated automatically

---

Choose EmailJS for the best experience - it's reliable, free, and widely used!
