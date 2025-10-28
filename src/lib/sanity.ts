import { createClient } from "@sanity/client";
import config from "./config";

export const client = createClient({
    projectId: config.sanity.projectId,
    dataset: config.sanity.dataset,
    useCdn: false, // Disable CDN for metadata to ensure instant updates
    apiVersion: config.sanity.apiVersion,
    token: config.sanity.token,
    ignoreBrowserTokenWarning: true,
    perspective: 'published', // Only fetch published content
    stega: {
        enabled: false, // Disable stega for cleaner output
    }
});