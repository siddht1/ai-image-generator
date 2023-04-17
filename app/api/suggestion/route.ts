export async function GET(request: Request) {

    // Connect to Ms Azure Function endpoint
    const response = await fetch("https://ai-image-generator2.azurewebsites.net/api/getchatgptsuggestion", {
        cache: 'no-store'
    });

    const textData = await response.text();

    return new Response(JSON.stringify(textData.trim()), {
        status: 200,
    });
  }
