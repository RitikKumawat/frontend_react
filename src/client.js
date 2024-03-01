import  sanityClient, { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
// const dt = require("dotenv");
// dt.configDotenv();

export const client = createClient({
    projectId : 'wdj5v0o4',
    dataset:'production',
    apiVersion:'2022-02-01',
    useCdn:true,
    token:'sk27E1Yh0WMfMFDMsYHyk2pIfo2LU3arXAh5kjTCceuufRO6u9WHxzCuGFiaY1jfdXlFRMIUvX2RLVEjATLkVOfAV2MNkoJoHEk28LKqgfjqNsKGMVk1Zyu9MyTOknyE1XP20W6mD0zQxI78gp1VyfcheVG1eu6UcZ5D4jGwPfZFTMxmhmpp',
    ignoreBrowserTokenWarning:true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source)=> builder.image(source);