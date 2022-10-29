
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next/types'

import prisma from '../../../lib/prisma';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const role: any = await prisma.role.findMany({});
//   console.log(role);
  // return {
  //   props: { role },
  //   revalidate: 10,
  // };
  res.status(200).json(role)
}