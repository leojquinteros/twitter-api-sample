# twitter-api-sample
Sample API for retrieving stored tweets from a stream. Streaming API reference: https://www.npmjs.com/package/twitter#streaming-api

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

* **URL:** http://localhost:3000/api/tweets

* **Method:** `GET`
  
*  **Query Params**

    `user=[string]` [Filter] The user name of the tweet. <br />
    `hashtag=[string]` [Filter] A hashtag in the tweet. <br />
    `mention=[string]` [Filter] A user mention in the tweet. <br />
    `size=[integer]` The page size. Possible values are: 30, 50, 100, or blank for retrieving all.
   
* **Success response:**

  * **Code:** 200 <br />
    **Content:** 

    ```json
    [
        {
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit @userMention1",
            "username": "username1",
            "userMentions": [
                "userMention1"
            ],
            "hashtags": []
        },
        {
            "text": "Lorem ipsum dolor sit amet #hashtag1 #hashtag2",
            "username": "username2",
            "userMentions": [],
            "hashtags": [
                "hashtag1",
                "hashtag2"
            ]
        }
    ]
    ```
 
* **Other responses:**

  * **Code:** 404 Not Found <br />
    **Content:** 
    ```json
    {
        "successful": false,
        "error": "Tweet not found."
    }
    ```

  * **Code:** 400 Bad Request <br />
    **Content:** 
    ```json
    {
        "successful": false,
        "error": "Invalid page size. Possible values are 30, 50, 100 or leave it blank to retrieve all tweets."
    }
    ```