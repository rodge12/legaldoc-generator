import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';

export async function POST(req) {
  const body = await req.json();
  const { clientName, freelancerName, project, amount, startDate, endDate } = body;

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const prompt = `
Generate a UAE freelance agreement between ${clientName} and ${freelancerName} for the following project: ${project}.
Start date: ${startDate}, End date: ${endDate}, Payment: AED ${amount}.
Include standard UAE legal clauses and signature lines.
`;

  const completion = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }]
  });

  const contract = completion.data.choices[0].message.content;

  return NextResponse.json({ contract });
}