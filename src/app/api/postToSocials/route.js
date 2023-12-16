// pages/api/generateShorts.js

import SocialPost from 'social-post-api';

const social = new SocialPost('2GEQCQ1-CSN4GZ4-JHHNE17-QTZYZ76');


export async function POST(req) {
  /** post */
  const post = await social.post({
    "post": "My Best YouTube Description",                  // required: Video description
    "platforms": ["youtube"],                               // required
    "mediaUrls": ["https://dawid-epic-captions.s3.us-east-1.amazonaws.com/without-captions.mp4"], // required: URL of video, 1 allowed               
    "youTubeOptions": {
        "title": "Your Best Title",                         // required: Video Title, max 100 characters. Must be 100 characters or less.
        "visibility": "private",                            // optional: "public", "unlisted", or "private" - default "private".
        
        // Important Thumbnail information below
        "thumbNail": "https://img.ayrshare.com/012/gb.jpg", // optional: URL of a JPEG or PNG and less than 2MB. Extension must end in png, jpg, or jpeg
        
        "tags": ["viral", "shorts"],                        // optional: array of tags, length limit 400 characters combined. E.g. ["abc", "12"] is characters length 5. Must be at least 2 characters long.
        "madeForKids": false,                               // optional: self declared made for kids. Default false.
        "shorts": true,                                     // optional: Post the video as a "Shorts". Video duration must be 60 seconds on less. Will add the #Shorts hashtag to the description.
        "notifySubscribers": true,                          // optional: Default: true. Whether YouTube should send a notification about the new video to users who subscribe to the video's channel.
        
        // optional: You may specify a time to publish on YouTube. The video will be sent to YouTube. Visibility automatically set to "private".
        // Format: Accepts a UTC datetime. For example, use format "YYYY-MM-DDThh:mm:ssZ" and send as "2023-07-08T12:30:00Z". 
        "publishAt": new Date()          
    }
}).catch((e) => {
  console.error('Failed to upload video: ', e.message);

  return Response.json({status: 400, error: e.message})
});

  console.log("post: ", post);
  return Response.json({status: 200, post})

  // /** history */
  // const history = await social.history()
  //    .catch(console.error);
  // console.log(history);

  // /** delete */
  // const deletePost = await social.delete({ id: post.id })
  //    .catch(console.error);
  // console.log(deletePost);
};

// run();



// export async function POST(req) {
//     try {
//       const {url} = await req.json()

//       const {data, status} = await axios.post('http://127.0.0.1:5000/generate-shorts', { url });

//       console.log(data)

//       return Response.json({status: 200, "response": data });
//     } catch (error) {
//       console.error('Error processing request:', error.message);
//       return Response.json({ status: 500, error: 'Internal Server Error' });
//     }
//   }
  