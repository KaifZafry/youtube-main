import Comment from "./Comment";

const commentsData = [
  {
    name: "zafry kaif",
    value: "lorem ipsum dolor sit amet con laoreet et ullamcorper",
    replies: [
      {
        name: "kaif",
        value: "lorem ipsum dolor sit amet con laoreet et ullamcorper",
        replies: [
          {
            name: "zafry",
            value: "lorem ipsum dolor sit amet con laoreet et ullamcorper",
            replies: [
              {
                name: "afridi",
                value: "this is comment",
                replies: [
                  {
                    name: "user",
                    value:
                      "lorem ipsum dolor sit amet con laoreet et ullamcorper",
                    replies: [
                      {
                        name: "zafry kaif",
                        value:
                          "lorem ipsum dolor sit amet con laoreet et ullamcorper",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "user2",
    value: "this is comment ",
    replies: [
      {
        name: "user",
        value: "this is comment",
        replies: [],
      },
    ],
  },
  {
    name: "user",
    value: "this is comment ",
    replies: [
      {
        name: "user",
        value: "this is comment",
        replies: [
            {
                name: "user",
                value: "this is comment",
                replies: [],
              },
              {
                name: "user",
                value: "this is comment",
                replies: [],
              },
        ],
      },
    ],
  },
  {
    name: "user",
    value: "this is comment ",
    replies: [
      {
        name: "user",
        value: "this is comment",
        replies: [],
      },
    ],
  },
  {
    name: "user",
    value: "this is comment ",
    replies: [
      {
        name: "user",
        value: "this is comment",
        replies: [],
      },
    ],
  },
];
const CommentsList = ({ comments }) => {
  return comments.map((comment, i) => (
    <div key={i}>
      <Comment  data={comment} />
      <div className="pl-5 border border-l-black ml-2">
        <CommentsList comments={comment.replies}/>
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="text-left">
      <h1 className="font-bold text-lg">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
