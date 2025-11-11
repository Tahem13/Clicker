export async function onRequest(context) {
  const kv = context.env.LIKES;

  if (context.request.method === "POST") {
    let count = await kv.get("count");
    count = count ? parseInt(count) + 1 : 1;
    await kv.put("count", count.toString());
  }

  const count = await kv.get("count") || "0";
  return new Response(count);
}
