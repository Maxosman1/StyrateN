import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getVideo from '@wasp/queries/getVideo';
import createComment from '@wasp/actions/createComment';
import createReaction from '@wasp/actions/createReaction';

export function Video() {
  const { videoId } = useParams();
  const { data: video, isLoading, error } = useQuery(getVideo, { id: videoId });
  const createCommentFn = useAction(createComment);
  const createReactionFn = useAction(createReaction);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleCreateComment = (text) => {
    createCommentFn({ text, videoId });
  };

  const handleCreateReaction = (type) => {
    createReactionFn({ type, videoId });
  };

  return (
    <div className="">
      {/* Video display goes here */}
      <div>
        {/* Comments display goes here */}
        {video.comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.text}</p>
            <p>{comment.user.username}</p>
          </div>
        ))}
        {/* Comment creation form goes here */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCreateComment(e.target.elements.comment.value);
            e.target.elements.comment.value = '';
          }}
        >
          <input type="text" name="comment" />
          <button type="submit">Add Comment</button>
        </form>
      </div>
      <div>
        {/* Reactions display goes here */}
        {video.reactions.map((reaction) => (
          <div key={reaction.id}>
            <p>{reaction.type}</p>
            <p>{reaction.user.username}</p>
          </div>
        ))}
        {/* Reaction creation form goes here */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCreateReaction(e.target.elements.reaction.value);
            e.target.elements.reaction.value = '';
          }}
        >
          <input type="text" name="reaction" />
          <button type="submit">Add Reaction</button>
        </form>
      </div>
    </div>
  );
}