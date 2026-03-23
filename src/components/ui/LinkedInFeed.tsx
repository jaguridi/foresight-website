"use client";

import Script from "next/script";

export function LinkedInFeed() {
  return (
    <>
      <div
        className="elfsight-app-8665b5ed-51d3-4020-a214-c7c75aafe895"
        data-elfsight-app-lazy
      />
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="lazyOnload"
      />
    </>
  );
}
