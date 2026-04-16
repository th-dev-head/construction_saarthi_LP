export const trackEvent = (eventName, data = {}) => {
  if (typeof window.fbq === "function") {
    window.fbq('track', eventName, data);
  } else {
    console.warn(`Meta Pixel (fbq) not found. Could not track event: ${eventName}`);
  }
};
