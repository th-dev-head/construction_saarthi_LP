/**
 * Captures UTM parameters from the URL and stores them in sessionStorage.
 * This allows the parameters to persist as the user navigates through the site.
 */
export const captureUTMParameters = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const utmParams = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
    'utm_adset',
    'utm_ad',
    'utm_id'
  ];

  const capturedData = {};
  let hasUTM = false;

  utmParams.forEach(param => {
    const value = urlParams.get(param);
    if (value) {
      capturedData[param] = value;
      hasUTM = true;
    }
  });

  if (hasUTM) {
    // Check if we already tracked this visit in the current session to prevent duplicates (especially for React StrictMode)
    const lastTracked = sessionStorage.getItem('utm_last_tracked');
    if (lastTracked === JSON.stringify(capturedData)) {
      console.log('UTM parameters already tracked for this session.');
      return;
    }

    // Store in sessionStorage so it persists during the session
    sessionStorage.setItem('utm_data', JSON.stringify(capturedData));
    sessionStorage.setItem('utm_last_tracked', JSON.stringify(capturedData));
    
    console.log('UTM parameters captured:', capturedData);
    // Automatically track the visit to the backend
    trackVisit(capturedData);
  }
};

/**
 * Sends the captured UTM data to the backend to record a visit.
 * @param {Object} utm_data
 */
export const trackVisit = async (utm_data) => {
  try {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    if (!baseUrl) return;

    await fetch(`${baseUrl}/leads/save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...utm_data,
        source_website: "construction_saarthi_LP_visit",
        firstName: "Visitor", // Placeholder for anonymous visit
      }),
    });
  } catch (error) {
    console.error("Error tracking visit:", error);
  }
};

/**
 * Retrieves captured UTM parameters from sessionStorage.
 * @returns {Object} The stored UTM parameters or an empty object.
 */
export const getStoredUTMParameters = () => {
  const storedData = sessionStorage.getItem('utm_data');
  return storedData ? JSON.parse(storedData) : {};
};
