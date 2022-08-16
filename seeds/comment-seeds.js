const { Comment } = require('../models');

const commentInfo = [
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
    user_id: 0001,
    post_id: 10
  },
  {
    comment_text: 'Integer nec odio.',
    user_id: 0004,
    post_id: 1
  },
  {
    comment_text: 'Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    user_id: 0002,
    post_id: 8
  },
  {
    comment_text: 'Duis sagittis ipsum.',
    user_id: 0002,
    post_id: 5
  },
  {
    comment_text: 'Praesent mauris. Fusce nec tellus sed augue semper porta.',
    user_id: 0007,
    post_id: 3
  },
  {
    comment_text: 'Vivamus vestibulum sagittis sapien.',
    user_id: 0005,
    post_id: 18
  },
  {
    comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 0006,
    post_id: 12
  },
  {
    comment_text: 'Mauris massa.',
    user_id: 0009,
    post_id: 20
  },
  {
    comment_text: 'Vestibulum lacinia arcu eget nulla.',
    user_id: 0005,
    post_id: 20
  },
  {
    comment_text: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.',
    user_id: 0008,
    post_id: 18
  },
  {
    comment_text: 'Sed dignissim lacinia nunc.',
    user_id: 0004,
    post_id: 3
  },
  {
    comment_text: 'Donec ut mauris eget massa tempor convallis.',
    user_id: 0007,
    post_id: 2
  },
  {
    comment_text: 'Curabitur tortor. Pellentesque nibh.',
    user_id: 0003,
    post_id: 2
  },
  {
    comment_text: 
      'Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.',
      user_id: 0011,
      post_id: 2
  },
  {
    comment_text: 'Proin ut ligula vel nunc egestas porttitor.',
    user_id: 0008,
    post_id: 14
  },
  {
    comment_text: 'Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.',
    user_id: 0002,
    post_id: 20
  },
  {
    comment_text: 'Fusce ac turpis quis ligula lacinia aliquet.',
    user_id: 0006,
    post_id: 11
  },
  {
    comment_text: 'Mauris ipsum.',
    user_id: 0009,
    post_id: 10
  },
  {
    comment_text: 'Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.',
    user_id: 0009,
    post_id: 10
  },
  {
    comment_text: 'Quisque volutpat condimentum velit.',
    user_id: 0006,
    post_id: 18
  },
  {
    comment_text: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    user_id: 0002,
    post_id: 6
  },
  {
    comment_text: 'Nam nec ante.',
    user_id: 0001,
    post_id: 8
  },
  {
    comment_text: 'Nulla facilisi.',
    user_id: 0005,
    post_id: 4
  },
  {
    comment_text:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    user_id: 0004,
    post_id: 13
  },
  {
    comment_text: 'Ut fringilla.',
    user_id: 0009,
    post_id: 15
  },
  {
    comment_text: 'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    user_id: 0003,
    post_id: 5
  },
  {
    comment_text: 'Vestibulum sapien. Proin quam.',
    user_id: 0003,
    post_id: 17
  },
  {
    comment_text: 'Etiam ultrices.',
    user_id: 0007,
    post_id: 17
  },
  {
    comment_text: 'Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.',
    user_id: 0005,
    post_id: 20
  },
  {
    comment_text: 'Sed lectus. Integer euismod lacus luctus magna.',
    user_id: 0001,
    post_id: 12
  },
  {
    comment_text: 
      'Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.',
    user_id: 0004,
    post_id: 8
  },
  {
    comment_text: 
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui.',
    user_id: 0002,
    post_id: 3
  },
  {
    comment_text: 'Praesent blandit dolor.',
    user_id: 0001,
    post_id: 1
  },
  {
    comment_text: 'Sed non quam.',
    user_id: 0001,
    post_id: 1
  },
  {
    comment_text: 'In vel mi sit amet augue congue elementum.',
    user_id: 0011,
    post_id: 6
  },
  {
    comment_text: 'Morbi in ipsum sit amet pede facilisis laoreet.',
    user_id: 0004,
    post_id: 11
  },
  {
    comment_text: 'Donec lacus nunc, viverra nec.',
    user_id: 0010,
    post_id: 5
  },
  {
    comment_text: 
      'Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede.',
    user_id: 0009,
    post_id: 19
  },
  {
    comment_text: 'Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo.',
    user_id: 0010,
    post_id: 3
  },
  {
    comment_text: 'Sed pretium blandit orci.',
    user_id: 0011,
    post_id: 13
  },
  {
    comment_text:
      'Ut eu diam at pede suscipit sodales. ',
    user_id: 0001,
    post_id: 18
  },
  {
    comment_text: 'Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula.',
    user_id: 0005,
    post_id: 9
  },
  {
    comment_text: 'Maecenas aliquet mollis lectus.',
    user_id: 0003,
    post_id: 9
  },
  {
    comment_text: 'Vivamus consectetuer risus et tortor. ',
    user_id: 0007,
    post_id: 3
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    user_id: 0007,
    post_id: 7
  },
  {
    comment_text: 'Integer nec odio. Praesent libero.',
    user_id: 0009,
    post_id: 20
  },
  {
    comment_text: 'Sed cursus ante dapibus diam. Sed nisi.',
    user_id: 0011,
    post_id: 5
  },
  {
    comment_text: 'Nulla quis sem at nibh elementum imperdiet.',
    user_id: 0001,
    post_id: 15
  },
  {
    comment_text: 'Duis sagittis ipsum. ',
    user_id: 0006,
    post_id: 9
  },
  {
    comment_text: 'Praesent mauris. Fusce nec tellus sed augue semper porta.',
    user_id: 0004,
    post_id: 4
  }
];

const commentSeeds = () => Comment.bulkCreate(commentInfo);

module.exports = commentSeeds;
