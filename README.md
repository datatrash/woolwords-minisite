# Woolwords website

The language picker includes English, Spanish, French, Dutch, German, Italian,
Portuguese (Portugal and Brazil), Swedish, Danish and Norwegian Bokmål. Additional
translation data lives in `locales.js`, loaded before `i18n.js` on both pages.
Privacy copy, streak copy, accessibility labels and metadata are localized too.
Language detection preserves Portuguese regional tags and maps Norwegian `no` to
`nb`. Native language names, Nunito, the fabric-style picker and responsive layout
are retained. No new build step or hosting service is needed.

This is a build-free static site configured for Netlify. Import this repository into Netlify, or drag this folder into Netlify Drop. For Git-based deployment, use no build command and the repository root (`.`) as the publish directory; `netlify.toml` supplies the publish directory and app-ads.txt content type. Add `woolwords.datatra.sh` as a custom domain in Netlify and follow Netlify's DNS and HTTPS setup. Preserve `privacy/index.html` and the `assets` directory. No server runtime or dependencies are required.

- Website / Play Console developer website: https://woolwords.datatra.sh/
- Privacy policy / AdMob consent and Play Console: https://woolwords.datatra.sh/privacy/
- Authorized ad sellers: https://woolwords.datatra.sh/app-ads.txt

Before publishing, review the privacy policy against your actual hosting provider, advertising settings, audience, and data practices. The intended audience is currently adults. Confirm the publisher ID line in `app-ads.txt` matches the personalized snippet in AdMob. Google may check the developer website's subdomain or parent domain; check the exact URL AdMob reports and host the file there if needed. After deployment, confirm all three URLs work publicly over HTTPS. Do not use the privacy policy URL until it is deployed and reviewed.

The app's Google Play listing does not yet exist, so the site intentionally says “Coming to Android”. Once published, replace that label with a real Play Store link. Nunito's license is in `assets/NUNITO_LICENSE.txt`; screenshots and icon are from this project.

The streaks section explains daily play credits, permanent cosmetic rewards, and the separate yarn-trail progress screen in all five languages. `assets/streak.png` is a real emulator capture with seeded ten-day test progress. Keep the later mystery milestone out of public copy and screenshots.
