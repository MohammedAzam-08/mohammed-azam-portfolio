# 📧 EmailJS Setup Guide - Step by Step

## 🎯 **Goal**: Get your Service ID, Template ID, and Public Key

---

## **Step 1: Create Account** 
🔗 **Link**: [https://www.emailjs.com/](https://www.emailjs.com/)

1. Click **"Sign Up"** 
2. Enter your email and create password
3. Verify your email

---

## **Step 2: Get SERVICE_ID** 📧

1. **Navigate**: Dashboard → **"Email Services"** (left sidebar)
2. **Click**: **"Add New Service"**
3. **Choose**: **"Gmail"** 
4. **Click**: **"Connect Account"**
5. **Authorize**: Your Gmail account (mdazam2722001@gmail.com)
6. **Result**: You'll see something like:
   ```
   Gmail
   service_abc123xyz
   ```
7. **📝 COPY**: `service_abc123xyz` ← This is your SERVICE_ID

---

## **Step 3: Get TEMPLATE_ID** 📝

1. **Navigate**: Dashboard → **"Email Templates"** (left sidebar)
2. **Click**: **"Create New Template"**
3. **Template Name**: "Portfolio Contact Form"
4. **Template Content**:

### **Subject Line:**
```
Portfolio Contact: {{subject}}
```

### **Email Body:**
```
Hello Mohammed,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Best regards,
Portfolio Contact Form
```

5. **Click**: **"Save"**
6. **Result**: You'll see something like:
   ```
   Portfolio Contact Form
   template_xyz789abc
   ```
7. **📝 COPY**: `template_xyz789abc` ← This is your TEMPLATE_ID

---

## **Step 4: Get PUBLIC_KEY** 🔑

1. **Navigate**: Dashboard → **"Account"** (left sidebar)
2. **Click**: **"General"** tab
3. **Find**: **"Public Key"** section
4. **Result**: You'll see something like:
   ```
   Public Key: abcdefghijklmnop
   ```
5. **📝 COPY**: `abcdefghijklmnop` ← This is your PUBLIC_KEY

---

## **Step 5: Update Configuration** ⚙️

Replace the values in `src/config/emailjs.ts`:

```typescript
export const emailjsConfig = {
  serviceId: 'service_abc123xyz',    // ← Your actual Service ID
  templateId: 'template_xyz789abc',  // ← Your actual Template ID  
  publicKey: 'abcdefghijklmnop',     // ← Your actual Public Key
};
```

---

## **Step 6: Test Your Form** 🧪

1. **Save** your changes
2. **Refresh** your portfolio website
3. **Fill out** the contact form
4. **Submit** the form
5. **Check** your email (mdazam2722001@gmail.com)

---

## **🎉 Success!** 

Once configured, your contact form will:
- ✅ Send emails directly to your Gmail
- ✅ Include all form data (name, email, subject, message)
- ✅ Work without any backend server
- ✅ Be completely free (200 emails/month)

---

## **💡 Pro Tips:**

- **Test Template**: EmailJS has a "Test" button in templates
- **Monitor Usage**: Check dashboard for email count
- **Customize**: Modify the email template anytime
- **Backup**: Keep your credentials safe

---

## **🆘 Need Help?**

If you get stuck on any step, just let me know which step and I'll help you through it!
