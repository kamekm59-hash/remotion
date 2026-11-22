# ريموشن — النسخة العربية (Fork خاص)

هذا Fork من [remotion-dev/remotion](https://github.com/remotion-dev/remotion)، معدّل لعملنا العربي، وخاص بـ Km وAura Ai Studio فقط. لا يُنشر ولا يُباع ولا يُشارك بدون إذن Km.

## ما الذي تغيّر عن الأصل؟

- **تكوين عربي جاهز 9:16:** `packages/example/src/ArabicAd/ArabicAd.tsx` — إعلان «مدينتك بين إيديك» (1080×1920، 15 ثانية)، نص عربي RTL وتعليقات كلمة بكلمة.
- **مهارة عربية جديدة:** `packages/skills/skills/remotion-arabic/SKILL.md` — قواعد الإعلانات العربية (RTL، التعليقات JSON، الصوت الخارجي، G-LIVE-01).
- **مجاني فقط:** بلا Lambda، بلا CloudRun، بلا Vercel، وبلا أي مفاتيح مدفوعة. الرندر التجريبي بـ `free-license` و`--is-production=false`.

## قواعد عربية ملخّصة

- الاتجاه RTL خاصية CSS على عناصر النص فقط — ممنوع `dir="rtl"` على `<html>`.
- الخط Tajawal ثم Noto Sans Arabic.
- التعليق الصوتي خارجي (Gemini Sulafat)، بلا تشكيل على الحرف الأخير من أي كلمة.
- لا موسيقى افتراضياً — مؤثرات صوتية + صوت فقط.
- أول 3 ثوانٍ مفهومة بدون صوت (G-LIVE-01).

## المعاينة والرندر

```bash
# معاينة Studio
npm run start

# رندر تجريبي مجاني
npx remotion render ArabicAd --free-license --is-production=false
```

## ملاحظة عن محرك الكود

محرك الكود (HTML + Chromium + FFmpeg) يبقى الضامن لعمل العملاء: نص وأرقام وتوقيت عربي دقيق. هذا الـ Fork للحالات التي تحتاج ريموشن نفسه: معاينة Studio، تصدير OpenTimelineIO، وفيديو شفاف للطبقات.

## الرخصة وحقوق النشر

رخصة المشروع الأصلية وإشعار حقوق النشر كما هي بدون تغيير. هذا الـ Fork مجاني للأفراد والشركات حتى 3 موظفين، ويُمنع بيع مشتق منه أو تأجيره.
