const baseUrl = `http://localhost:3000/`

module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      startServerCommand: 'yarn dev',
      url: [baseUrl],
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'offscreen-images': 'off',
        'uses-webp-images': 'off',
        'uses-http2': 'off',
        "categories.pwa": "off",
        "categories.seo": "off",
        "categories.best-practices": "off",
        "categories.accessibility": "off",
        "first-contentful-paint": ["error", { "maxNumericValue": 3000 }],
        "speed-index": ["error", { "maxNumericValue": 4300 }],
        "total-blocking-time": ["error", { "maxNumericValue": 300 }],
        "interactive": ["error", { "maxNumericValue": 3800 }],
        "long-tasks": ["error", { "maxNumericValue": 50 }],
        "network-server-latency": ["error", { "maxNumericValue": 600 }],
        "largest-contentful-paint": ["error", { "maxNumericValue": 3000 }],
        "cumulative-layout-shift": ["error", { "maxNumericValue": 100 }],
        "duplicate-id-active": "off",
        "duplicate-id-aria": "off",
        "duplicated-javascript": "off",
        "form-field-multiple-labels": "off",
        "apple-touch-icon": "off",
        "maskable-icon": "off",
        "aria-hidden-body": "off",
        "aria-hidden-focus": "off",
        "aria-input-field-name": "off",
        "aria-toggle-field-name": "off",
        "charset": "off",
        "crawlable-anchors": "off",
        "heading-order": "off",
        "legacy-javascript": "off",
        "non-composited-animations": "off",
        "timing-budget": "off",
        "unused-javascript": "off",
        "unsized-images": "off",
        "no-unload-listeners": "off",
        "image-size-responsive": "off",
        "critical-request-chains": "off",
        "first-meaningful-paint": "off",
        "estimated-input-latency": "off",
        "color-contrast": "off",
        "uses-http2": "off",
        "viewport": "off",
        "video-description": "off",
        "video-caption": "off",
        "valid-lang": "off",
        "uses-webp-images": "off",
        "uses-text-compression": "off",
        "uses-responsive-images": "off",
        "uses-rel-preload": "off",
        "uses-rel-preconnect": "off",
        "uses-passive-event-listeners": "off",
        "uses-optimized-images": "off",
        "unminified-javascript": "off",
        "unminified-css": "off",
        "total-byte-weight": "off",
        "time-to-first-byte": "off",
        "themed-omnibox": "off",
        "th-has-data-cells": "off",
        "td-headers-attr": "off",
        "tap-targets": "off",
        "tabindex": "off",
        "splash-screen": "off",
        "robots-txt": "off",
        "render-blocking-resources": "off",
        "redirects": "off",
        "plugins": "off",
        "password-inputs-can-be-pasted-into": "off",
        "offscreen-images": "off",
        "object-alt": "off",
        "notification-on-start": "off",
        "no-vulnerable-libraries": "off",
        "no-document-write": "off",
        "meta-viewport": "off",
        "meta-refresh": "off",
        "meta-description": "off",
        "mainthread-work-breakdown": "off",
        "load-fast-enough-for-pwa": "off",
        "listitem": "off",
        "list": "off",
        "link-text": "off",
        "link-name": "off",
        "layout-table": "off",
        "label": "off",
        "is-crawlable": "off",
        "installable-manifest": "off",
        "input-image-alt": "off",
        "image-aspect-ratio": "off",
        "image-alt": "off",
        "http-status-code": "off",
        "html-lang-valid": "off",
        "html-has-lang": "off",
        "hreflang": "off",
        "geolocation-on-start": "off",
        "frame-title": "off",
        "font-size": "off",
        "font-display": "off",
        "external-anchors-use-rel-noopener": "off",
        "errors-in-console": "off",
        "efficient-animated-content": "off",
        "duplicate-id": "off",
        "dom-size": "off",
        "document-title": "off",
        "doctype": "off",
        "dlitem": "off",
        "deprecations": "off",
        "definition-list": "off",
        "content-width": "off",
        "canonical": "off",
        "bypass": "off",
        "button-name": "off",
        "bootup-time": "off",
        "audio-caption": "off",
        "aria-valid-attr-value": "off",
        "aria-valid-attr": "off",
        "aria-roles": "off",
        "aria-required-parent": "off",
        "aria-required-children": "off",
        "aria-required-attr": "off",
        "aria-allowed-attr": "off",
        "appcache-manifest": "off",
        "accesskeys": "off",
        "uses-long-cache-ttl": "off",
        "redirects-http": "off",
        "max-potential-fid": "off",
        "is-on-https": "off",
        "first-cpu-idle": "off",
        "works-offline": "off",
        "without-javascript": "off",
        "unused-css-rules": "off",
        "service-worker": "off",
        "offline-start-url": "off"
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}