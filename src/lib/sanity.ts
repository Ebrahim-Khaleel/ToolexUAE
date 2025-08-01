import { createClient } from "@sanity/client";
import config from "./config";

export const client = createClient({
    projectId: config.sanity.projectId,
    dataset: config.sanity.dataset,
    useCdn: true,
    apiVersion: config.sanity.apiVersion,
    token: config.sanity.token,
    ignoreBrowserTokenWarning: true
});