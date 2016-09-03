import fetch from 'isomorphic-fetch';


const WebAPIUtil = {

  POST: () => fetch(`${url}`, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }),

  GET: (token) => fetch(`${url}`, {
    method: 'get',
  })
  .then(res => res.json()),

};

export default WebAPIUtil;
