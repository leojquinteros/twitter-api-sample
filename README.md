# twitter-api-sample
Sample API for retrieving stored twits from a stream. Streaming API reference: https://www.npmjs.com/package/twitter#streaming-api

## Starting MongoDB service

```sh
$ sudo service mongod start
```

## Running the project

```sh
$ npm install
$ npm start
```

**Get Tweets**
----
  Retrieve tweets stored in the database.

* **URL** /api/tweets

* **Method:** `GET`
  
*  **Query Params**

    `user=[string]` [Filter] The user name of the tweet. <br />
    `hashtag=[string]` [Filter] A hashtag in the tweet. <br />
    `mention=[string]` [Filter] A user mention in the tweet. <br />
    `size=[integer]` The page size. Possible values are: 30, 50, 100, or blank for retrieving all.
   
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 

    ```json
    [
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit @userMention1",
            username: "username1",
            userMentions: [
                "userMention1"
            ],
            hashtags: []
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit #hashtag1 #hashtag2",
            username: "username2",
            userMentions: [],
            hashtags: [
                "hashtag1",
                "hashtag2"
            ]
        }
    ]
    ```
 
* **Error Response:**

  * **Code:** 404 Not Found <br />
    **Content:** 
    ```json
    {
        successful: false,
        error: "Tweet not found."
    }
    ```

  OR

  * **Code:** 400 Bad Request <br />
    **Content:** 
    ```json
    {
        successful: false,
        error: "Invalid page size. Possible values are 30, 50, 100 or leave it blank to retrieve all tweets."
    }
    ```