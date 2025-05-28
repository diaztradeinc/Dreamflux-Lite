export async function generateImage({ prompt, negativePrompt, modelName, options }) {
  return {
    imageUrl: "https://placekitten.com/512/512",
    modelUsed: modelName,
  };
}