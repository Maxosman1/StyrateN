import HttpError from '@wasp/core/HttpError.js'


export const getContests = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  return context.entities.Contest.findMany({});
}

export const getSubmissions = async ({ contestId }, context) => {
  if (!context.user) { throw new HttpError(401) }

  const submissions = await context.entities.Submission.findMany({
    where: { contest: { id: contestId } },
    include: { contest: true, user: true }
  })

  return submissions;
}

export const getUserProfile = async ({ id }, context) => {
  if (!context.user) { throw new HttpError(401) }

  const user = await context.entities.User.findUnique({
    where: { id },
    include: {
      submissions: true
    }
  });

  if (!user) throw new HttpError(404, 'No user with id ' + id);

  return user;
}