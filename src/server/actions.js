import HttpError from '@wasp/core/HttpError.js'

export const createSubmission = async ({ videoUrl, contestId, userId }, context) => {
  const videoTitle = extractVideoTitle(videoUrl);
  const videoDescription = extractVideoDescription(videoUrl);

  const submission = await context.entities.Submission.create({
    data: {
      videoUrl,
      title: videoTitle,
      description: videoDescription,
      points: 0,
      contest: { connect: { id: contestId } },
      user: { connect: { id: userId } }
    }
  });

  return submission;
}

function extractVideoTitle(videoUrl) {
  // Implementation to extract video title from URL.
}

function extractVideoDescription(videoUrl) {
  // Implementation to extract video description from URL.
}

export const updateProfile = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  return context.entities.User.update({
    where: { id: args.userId },
    data: { profilePicture: args.profilePicture, handle: args.handle }
  });
}