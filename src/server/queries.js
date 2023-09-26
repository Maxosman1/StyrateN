import HttpError from '@wasp/core/HttpError.js'

export const getVideos = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  return context.entities.Video.findMany();
}

export const getVideo = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const { id } = args;

  const video = await context.entities.Video.findUnique({
    where: { id },
    include: { comments: true, reactions: true }
  });

  if (!video) throw new HttpError(404, 'No video with id ' + id);

  return video;
}

export const getUser = async ({ userId }, context) => {
  if (!context.user) { throw new HttpError(401) }

  const user = await context.entities.User.findUnique({
    where: { id: userId },
    include: {
      videos: true,
      comments: true,
      reactions: true
    }
  });

  if (!user) { throw new HttpError(404, `No user with id ${userId}`) }

  return user;
}