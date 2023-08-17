import getConfig from "next/config";

export const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.PRODUCTION ? "https://blogweb.com" : "http://localhost:8000";

export const APP_NAME = publicRuntimeConfig.APP_NAME;
