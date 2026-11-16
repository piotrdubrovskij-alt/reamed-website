/**
 * Whether the gift voucher is on public view: the menu and footer links, the sitemap and
 * indexing of /dovanu-kuponas and its terms. The pages themselves exist either way.
 * True since this PR: Paysera activated the clinic system's project on 16.11.2026 and online
 * booking went live the same day, so a voucher bought here is paid with real money. Set false
 * to take the voucher out of view (noindex, no links) without removing it.
 */
export const GIFT_VOUCHER_LIVE = true;
