export default async (request) => {
    const newURL = 'https://api.flickr.com/services/rest/?method='+ request.url.substring(request.url.indexOf('/flikr/api/')+11, request.url.length)
    const apiKeyInjected = newURL.replace("$%7BAPI_KEY%7D", Netlify.env.get("REACT_APP_flickr_url"));

    const response = await fetch(apiKeyInjected);

    const headerCopy = new Headers(response.headers);
    headerCopy.set('cache-control','public, s-maxage=3600');
    
    const newResponse = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: headerCopy
      });

    return newResponse;
  };


export const config = { path: "/flikr/api/*", cache: "manual" };