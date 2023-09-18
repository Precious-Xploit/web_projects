const dev = process.env.NODE_ENV !== "production";
export const server = dev ? "http://localhost:3000" : "https://iskysoftic.tech";
import React from 'react'

function config() {
  return (
    <div>config</div>
  )
}

export default config