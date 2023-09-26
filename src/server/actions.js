import HttpError from '@wasp/core/HttpError.js'

export const createVideo = async ({ url }, context) => {
  if (!context.user) { throw new HttpError(401) };

  return context.entities.Video.create({
    data: {
      url,
      userId: context.user.id
    }
  });
}

export const createComment = async ({ text, videoId }, context) => {
  if (!context.user) { throw new HttpError(401) };

  const comment = await context.entities.Comment.create({
    data: {
      text,
      userId: context.user.id,
      videoId
    }
  });

  return comment;
}

export const createReaction = async ({ type, videoId }, context) => {
  if (!context.user) { throw new HttpError(401) };

  return context.entities.Reaction.create({
    data: {
      type,
      userId: context.user.id,
      videoId
    }
  });
}
