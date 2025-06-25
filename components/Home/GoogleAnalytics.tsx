'use client';

import { GoogleAnalytics as GA } from 'nextjs-google-analytics';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function GoogleAnalytics() {
  if (!GA_TRACKING_ID) {
    console.warn('GA_TRACKING_ID not found');
    return null;
  }

  return <GA gaMeasurementId={GA_TRACKING_ID} />;
}
