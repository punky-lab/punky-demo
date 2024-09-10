const baseUrl =
  "https://cyan-acute-python-533.mypinata.cloud/ipfs/QmNeQxytHa5BfSXANUnJ3FWGhKryTe8mxReLFhpyn9HQqE";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  if (params.id < 0 || params.id >= 5) {
    return new Response(`id ${params.id} exceeded limit`, {
      status: 400,
    });
  }
  const url = `${baseUrl}/${params.id}.json`;
  // console.log(url);
  const res = await fetch(url);
  const body = await res.text();
  return new Response(body);
}
