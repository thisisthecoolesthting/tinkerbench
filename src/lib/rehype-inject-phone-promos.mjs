/**
 * Inserts in-article ad slots after selected h2s.
 * Emits [data-ad-slot="in-article-text"] divs that inject.js fills at runtime.
 * The slug is derived from spawn-home.json at build time for the SSR fallback only —
 * inject.js always uses window.__AD_SITE_SLUG__ (never the baked fallback slug).
 */
import homeData from '../data/spawn-home.json' assert { type: 'json' };

// Derive slug for SSR fallback (safe — same logic as BaseLayout)
const rawBrand =
  homeData?.brand?.shortName ||
  homeData?.brand?.fullName ||
  homeData?.siteSlug ||
  'tinkerbench';
const ssrSlug = rawBrand.toLowerCase().replace(/[^a-z0-9-]/g, '');

/** After the 2nd, 4th, and 6th h2 (skip title-area noise). */
const INJECT_ON_H2 = new Set([2, 4, 6]);

function inArticleSlotElement(slotIndex) {
  // SSR fallback: first store (phonecasesforall), correct slug, no hardcoded affiliate tag
  const fallbackHref =
    'https://phonecasesforall.com/?utm_source=' + ssrSlug +
    '&utm_medium=cross_promo_text&utm_campaign=15off&utm_content=in-article-' + slotIndex;

  return {
    type: 'element',
    tagName: 'div',
    properties: {
      'data-ad-slot': 'in-article-text',
      className: ['not-prose'],
      'aria-label': 'Sponsored',
    },
    children: [
      {
        type: 'element',
        tagName: 'p',
        properties: { className: ['adn-eyebrow'] },
        children: [{ type: 'text', value: 'Phone cases · Sponsored' }],
      },
      {
        type: 'element',
        tagName: 'a',
        properties: {
          href: fallbackHref,
          className: ['adn-text-link'],
          rel: ['noopener', 'sponsored'],
          target: '_blank',
        },
        children: [
          {
            type: 'element',
            tagName: 'span',
            properties: { className: ['adn-text-name'] },
            children: [{ type: 'text', value: 'Phone Cases For All' }],
          },
          {
            type: 'element',
            tagName: 'span',
            properties: { className: ['adn-text-tag'] },
            children: [{ type: 'text', value: ' — 50,000+ designs. 15% off code FIRST15ALL' }],
          },
        ],
      },
    ],
  };
}

function walkInsert(node) {
  if (!node?.children || !Array.isArray(node.children)) return;

  let h2Count = 0;
  const next = [];

  for (const child of node.children) {
    next.push(child);
    walkInsert(child);

    if (child?.type === 'element' && child.tagName === 'h2') {
      h2Count += 1;
      if (INJECT_ON_H2.has(h2Count)) {
        next.push(inArticleSlotElement(h2Count));
      }
    }
  }

  node.children = next;
}

export function rehypeInjectPhonePromos() {
  return (tree) => {
    walkInsert(tree);
  };
}
