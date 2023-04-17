const { app } = require('@azure/functions');
const openai = require("../../lib/openai");

app.http('getChatGPTSuggestion', {
    methods: ['GET'],
    authLevel: "anonymous",
    handler: async (request, context) => {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "Write a random prompt for DALL.E to generate an image, this prompt will be shown to the user, include details such as genre, typee of painting,options can include: oil painting, water color, photo-realistic, 4k, abstract, modern, black and white, etc. Do not wrap answers in quotes.",
            max_tokens: 100,
            temperature: 0.8,
        });
        context.log(`:Http function processed request for url "${request.url}"`);

        const responseText = response.data.choices[0].text;

        return { body: responseText };
    }
});
