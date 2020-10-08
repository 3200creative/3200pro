import client from 'part:@sanity/base/client'

client
  .delete({query: '*[_type == "review"]'})
  .then(console.log)
  .catch(console.error)