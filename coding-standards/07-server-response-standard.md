# Server Response Standard

- Use Nexus-Req
- Response format:
{
  ok: boolean,
  status: number,
  message: string,
  data: T | null
}
- Error responses: <ErrorCodes>
- Success responses: <StatusCodes, T>
- Services do not format HTTP responses