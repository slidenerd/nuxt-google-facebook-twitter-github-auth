# auth

> Nuxt.js authentication using express-session and connect-redis with support for Facebook, Twitter, Google and GitHub Login. No databases have been added to this library so you'll have to add your database to the authentication strategies in order to make it truly work. Use 'demo' as the username and password to do local login, add your client secret and client id to the server/config/.env.* files to perform the actual social login. Redis is using database 1 for sessions and a password on localhost, feel free to change those

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# serve with hot reload in debug mode at localhost:3000
$ npm run deb

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

### Objects
#### Facebook Profile Object

{
    id: '5459754221345688',
    username: undefined,
    displayName: undefined,
    name: {
        familyName: 'XYZ',
        givenName: 'abc',
        middleName: undefined
    },
    gender: undefined,
    profileUrl: undefined,
    emails: [{
        value: 'abc.officialr@gmail.com'
    }],
    provider: 'facebook',
    _raw: '{"last_name":"XYZ","first_name":"abc","email":"abc.officialr\\u0040gmail.com","id":"5459754221345688"}',
    _json: {
        last_name: 'XYZ',
        first_name: 'abc',
        email: 'abc.officialr@gmail.com',
        id: '5459754221345688'
    }
}

#### Twitter Profile Object
{
    id: '466421541215451645',
    username: 'username',
    displayName: 'username',
    emails: [{
        value: 'username@gmail.com'
    }],
    photos: [{
        value: 'https://pbs.twimg.com/profile_images/154854541201858955/HhaZWgHj_normal.jpg'
    }],
    provider: 'twitter',
    _raw: '{"id":466421541215451645,"id_str":"466421541215451645","name":"username","screen_name":"username","location":"","description":"dummy description","url":"https:\\/\\/t.co\\/MDQ6VXNlcj","entities":{"url":{"urls":[{"url":"https:\\/\\/t.co\\/MDQ6VXNlcj","expanded_url":"https:\\/\\/botlist.co\\/bots\\/username","display_url":"botlist.co\\/bots\\/username","indices":[0,23]}]},"description":{"urls":[]}},"protected":false,"followers_count":47,"friends_count":224,"listed_count":0,"created_at":"Thu Jun 22 06:04:19 +0000 2017","favourites_count":23,"utc_offset":null,"time_zone":null,"geo_enabled":false,"verified":false,"statuses_count":122,"lang":null,"status":{"created_at":"Wed May 08 14:16:09 +0000 2019","id":1126128657540403200,"id_str":"1126128657540403200","text":"RT helo world\\nhttps:\\/\\/t.co\\/4aYHFafgaGT","truncated":false,"entities":{"hashtags":[],"symbols":[],"user_mentions":[{"screen_name":"dummy","name":"dummy","id":2207129125,"id_str":"2207129125","indices":[3,17]}],"urls":[{"url":"https:\\/\\/t.co\\/4aYHFafgaGT","expanded_url":"https:\\/\\/dummy.com\\/news\\/dummy-link","display_url":"dummy.com\\/news\\/hackers-w\\u2026","indices":[87,110]}]},"source":"\\u003ca href=\\"http:\\/\\/twitter.com\\" rel=\\"nofollow\\"\\u003eTwitter Web Client\\u003c\\/a\\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"geo":null,"coordinates":null,"place":null,"contributors":null,"retweeted_status":{"created_at":"Wed May 08 00:36:05 +0000 2019","id":1125922284013678592,"id_str":"1125922284013678592","text":"Hackers withdraw 7,000 bitcoins in Binance exchange security breach\\nhttps:\\/\\/t.co\\/4aYHFafgaGT","truncated":false,"entities":{"hashtags":[],"symbols":[],"user_mentions":[],"urls":[{"url":"https:\\/\\/t.co\\/4aYHFafgaGT","expanded_url":"https:\\/\\/dummy.com\\/news\\/dummy-link","display_url":"dummy.com\\/news\\/hackers-w\\u2026","indices":[68,91]}]},"source":"\\u003ca href=\\"https:\\/\\/amplifr.com\\" rel=\\"nofollow\\"\\u003eAmplifr\\u003c\\/a\\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":157,"favorite_count":255,"favorited":false,"retweeted":true,"possibly_sensitive":false,"lang":"en"},"is_quote_status":false,"retweet_count":157,"favorite_count":0,"favorited":false,"retweeted":true,"possibly_sensitive":false,"lang":"en"},"contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"F5F8FA","profile_background_image_url":null,"profile_background_image_url_https":null,"profile_background_tile":false,"profile_image_url":"http:\\/\\/pbs.twimg.com\\/profile_images\\/154854541201858955\\/HhaZWgHj_normal.jpg","profile_image_url_https":"https:\\/\\/pbs.twimg.com\\/profile_images\\/154854541201858955\\/HhaZWgHj_normal.jpg","profile_banner_url":"https:\\/\\/pbs.twimg.com\\/profile_banners\\/466421541215451645\\/1501313804","profile_link_color":"1DA1F2","profile_sidebar_border_color":"C0DEED","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":true,"has_extended_profile":false,"default_profile":true,"default_profile_image":false,"can_media_tag":true,"followed_by":false,"following":false,"follow_request_sent":false,"notifications":false,"translator_type":"none","suspended":false,"needs_phone_verification":false,"email":"username@gmail.com"}',
    _json: {
        id: 877769196762914800,
        id_str: '466421541215451645',
        name: 'username',
        screen_name: 'username',
        location: '',
        description: 'dummy description',
        url: 'https://t.co/MDQ6VXNlcj',
        entities: {
            url: [Object],
            description: [Object]
        },
        protected: false,
        followers_count: 47,
        friends_count: 224,
        listed_count: 0,
        created_at: 'Thu Jun 22 06:04:19 +0000 2017',
        favourites_count: 23,
        utc_offset: null,
        time_zone: null,
        geo_enabled: false,
        verified: false,
        statuses_count: 122,
        lang: null,
        status: {
            created_at: 'Wed May 08 14:16:09 +0000 2019',
            id: 1126128657540403200,
            id_str: '1126128657540403200',
            text: 'RT helo world',
            truncated: false,
            entities: [Object],
            source: '<a href="http://twitter.com" rel="nofollow">Twitter Web Client</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            retweeted_status: [Object],
            is_quote_status: false,
            retweet_count: 157,
            favorite_count: 0,
            favorited: false,
            retweeted: true,
            possibly_sensitive: false,
            lang: 'en'
        },
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: 'F5F8FA',
        profile_background_image_url: null,
        profile_background_image_url_https: null,
        profile_background_tile: false,
        profile_image_url: 'http://pbs.twimg.com/profile_images/154854541201858955/HhaZWgHj_normal.jpg',
        profile_image_url_https: 'https://pbs.twimg.com/profile_images/154854541201858955/HhaZWgHj_normal.jpg',
        profile_banner_url: 'https://pbs.twimg.com/profile_banners/466421541215451645/1501313804',
        profile_link_color: '1DA1F2',
        profile_sidebar_border_color: 'C0DEED',
        profile_sidebar_fill_color: 'DDEEF6',
        profile_text_color: '333333',
        profile_use_background_image: true,
        has_extended_profile: false,
        default_profile: true,
        default_profile_image: false,
        can_media_tag: true,
        followed_by: false,
        following: false,
        follow_request_sent: false,
        notifications: false,
        translator_type: 'none',
        suspended: false,
        needs_phone_verification: false,
        email: 'username@gmail.com'
    },
    _accessLevel: 'read-write'
}

#### Google Profile Object
{
    provider: 'google',
    sub: '45684644664512633259',
    id: '45684644664512633259',
    displayName: 'Random Name',
    name: {
        givenName: 'Random',
        familyName: 'Name'
    },
    given_name: 'Random',
    family_name: 'Name',
    email_verified: true,
    verified: true,
    language: 'en',
    locale: undefined,
    email: 'abc.9891@gmail.com',
    emails: [{
        value: 'abc.9891@gmail.com',
        type: 'account'
    }],
    photos: [{
        value: 'https://lh3.googleusercontent.com/a-/BoG15864BVcYCNJikZpTTuVX789452314510BHiJKlMnIpQ',
        type: 'default'
    }],
    picture: 'https://lh3.googleusercontent.com/a-/BoG15864BVcYCNJikZpTTuVX789452314510BHiJKlMnIpQ',
    _raw: '{\n  "sub": "45684644664512633259",\n  "name": "Random Name",\n  "given_name": "Random",\n  "family_name": "Name",\n  "picture": "https://lh3.googleusercontent.com/a-/BoG15864BVcYCNJikZpTTuVX789452314510BHiJKlMnIpQ",\n  "email": "abc.9891@gmail.com",\n  "email_verified": true,\n  "locale": "en"\n}',
    _json: {
        sub: '45684644664512633259',
        name: 'Random Name',
        given_name: 'Random',
        family_name: 'Name',
        picture: 'https://lh3.googleusercontent.com/a-/BoG15864BVcYCNJikZpTTuVX789452314510BHiJKlMnIpQ',
        email: 'abc.9891@gmail.com',
        email_verified: true,
        locale: 'en'
    }
}

#### GitHub Profile Object

{
    id: '3194523',
    displayName: 'dummyboy',
    username: 'dummyboy',
    profileUrl: 'https://github.com/dummyboy',
    emails: [{
        value: 'dummyboy@gmail.com'
    }],
    photos: [{
        value: 'https://avatars3.githubusercontent.com/u/3194523?v=4'
    }],
    provider: 'github',
    _raw: '{"login":"dummyboy","id":3194523,"node_id":"ADQ541NiCUjKLmaaNgaA=","avatar_url":"https://avatars3.githubusercontent.com/u/3194523?v=4","gravatar_id":"","url":"https://api.github.com/users/dummyboy","html_url":"https://github.com/dummyboy","followers_url":"https://api.github.com/users/dummyboy/followers","following_url":"https://api.github.com/users/dummyboy/following{/other_user}","gists_url":"https://api.github.com/users/dummyboy/gists{/gist_id}","starred_url":"https://api.github.com/users/dummyboy/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/dummyboy/subscriptions","organizations_url":"https://api.github.com/users/dummyboy/orgs","repos_url":"https://api.github.com/users/dummyboy/repos","events_url":"https://api.github.com/users/dummyboy/events{/privacy}","received_events_url":"https://api.github.com/users/dummyboy/received_events","type":"User","site_admin":false,"name":"dummyboy","company":"dummyboy","blog":"http://dummyboy.com","location":"Mars","email":"dummyboy@gmail.com","hireable":true,"bio":"Dummy boi rules","public_repos":74,"public_gists":6,"followers":50000,"following":1,"created_at":"2013-08-01T14:17:19Z","updated_at":"2019-11-08T13:35:04Z"}',
    _json: {
        login: 'dummyboy',
        id: 3194523,
        node_id: 'ADQ541NiCUjKLmaaNgaA=',
        avatar_url: 'https://avatars3.githubusercontent.com/u/3194523?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/dummyboy',
        html_url: 'https://github.com/dummyboy',
        followers_url: 'https://api.github.com/users/dummyboy/followers',
        following_url: 'https://api.github.com/users/dummyboy/following{/other_user}',
        gists_url: 'https://api.github.com/users/dummyboy/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/dummyboy/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/dummyboy/subscriptions',
        organizations_url: 'https://api.github.com/users/dummyboy/orgs',
        repos_url: 'https://api.github.com/users/dummyboy/repos',
        events_url: 'https://api.github.com/users/dummyboy/events{/privacy}',
        received_events_url: 'https://api.github.com/users/dummyboy/received_events',
        type: 'User',
        site_admin: false,
        name: 'dummyboy',
        company: 'dummyboy',
        blog: 'http://dummyboy.com',
        location: 'Mars',
        email: 'dummyboy@gmail.com',
        hireable: true,
        bio: 'Dummy boi rules',
        public_repos: 74,
        public_gists: 6,
        followers: 50000,
        following: 1,
        created_at: '2013-08-01T14:17:19Z',
        updated_at: '2019-11-08T13:35:04Z'
    }
}

## Resources
### Locations
#### OSX
- redis.conf file location 
  - sudo vi /usr/local/etc/redis.conf

### General
- https://devdocs.io/ CSS DOM DOM Events HTML HTTP JS documentation for everything
- https://webgems.io/ Accessibility, CSS, Daily, Design, Frontend, Fullstack, General, HTML, Icons, Javascript, PHP, Podcasts, Python, Ruby, Server, Utility Resources

### Design
- https://graphicdesign.stackexchange.com/questions/352/is-there-a-good-resource-or-tool-to-help-build-a-palette-color-scheme-around-col/357#357 Is there a good resource or tool to help build a palette/color scheme around colors I select?
- https://graphicdesign.stackexchange.com/questions/58257/what-is-the-difference-between-layout-and-design/58259#58259 What is the difference between layout and design?
- https://graphicdesign.stackexchange.com/questions/18630/coming-from-a-programming-background-where-should-i-start-to-learn-web-design/18651#18651 Coming from a programming background, where should I start to learn web design?
- https://graphicdesign.stackexchange.com/questions/29710/what-exactly-is-a-pixel/29762#29762 What exactly is a “Pixel”?
- https://graphicdesign.stackexchange.com/questions/37228/how-do-i-make-a-style-guide-template/37246#37246 How do I make a style guide template?
- https://graphicdesign.stackexchange.com/questions/15995/given-a-color-scheme-how-do-i-apply-to-website-design/15996#15996 Given a color scheme, how do I apply to website design?
- https://graphicdesign.stackexchange.com/questions/3245/how-can-i-improve-my-color-selection-skill How can I improve my color selection skill?
- https://graphicdesign.stackexchange.com/questions/41/what-web-graphics-formats-to-use/3156#3156 What web graphics formats to use?
- https://stackoverflow.com/questions/24433640/svg-icons-vs-png-icons-in-modern-web-sites https://stackoverflow.com/questions/24433640/svg-icons-vs-png-icons-in-modern-web-sites
- https://github.com/LisaDziuba/Awesome-Design-Tools The best design tools and plugins for everything

### UX
- https://ux.stackexchange.com/questions/67539/remember-me-login-functionality “Remember me” login functionality
- https://ux.stackexchange.com/questions/117972/where-to-show-session-has-expired Where to show session has expired
- https://ux.stackexchange.com/questions/7195/best-practices-for-warning-of-session-expiration Best Practices for Warning of Session Expiration
- https://ux.stackexchange.com/questions/38885/how-to-show-user-login-password-is-wrong-after-the-first-time-e-g-flash-wrong How to show user login password is wrong after the first time e.g. flash “wrong password” message

### Axios
- https://dev.to/kevinleedrum/axios-tips-for-real-world-apps-3bo4 Axios Tips for Real-World Apps 

### Security
- https://security.stackexchange.com/questions/157133/is-a-secure-cookie-without-the-httponly-flag-a-problem Is a secure cookie without the HttpOnly flag a problem?
- https://stackoverflow.com/questions/38954821/preventing-csrf-with-the-same-site-cookie-attribute/38957177#38957177 Preventing CSRF with the same-site cookie attribute
- https://security.stackexchange.com/questions/26481/web-application-cookie-expiry Web Application - Cookie Expiry
- https://security.stackexchange.com/questions/41/good-session-practices Good session practices
- https://stackoverflow.com/questions/43452896/authentication-jwt-usage-vs-session Authentication: JWT usage vs session
- https://stackoverflow.com/questions/40200413/sessions-vs-token-based-authentication Sessions vs. Token based authentication

### SCSS
- https://medium.com/developing-with-sass/creating-a-dead-simple-sass-mixin-to-handle-responsive-breakpoints-889927b37740 Creating a Dead Simple Sass Mixin to Handle Responsive Breakpoints
- https://varvy.com/pagespeed/ Make your pages faster. Common page speed issues and their solutions are discussed and illustrated by Patrick Sexton.

### CSS
- https://stackoverflow.com/questions/4318471/property-0-or-property-0px-in-css 'property: 0' or 'property: 0px' in CSS?
- https://stackoverflow.com/questions/2189452/when-to-use-margin-vs-padding-in-css When to use margin vs padding in CSS
- https://stackoverflow.com/questions/6887336/what-is-the-difference-between-normalize-css-and-reset-css/8357635#8357635 What is the difference between Normalize.css and Reset CSS
- https://webdesign.tutsplus.com/tutorials/how-to-build-a-responsive-navigation-bar-with-flexbox--cms-33535 How to Build a Responsive Navigation Bar With Flexbox
- https://w3bits.com/animated-menu-icon-css/ Animated Hamburger Menu icon with Pure CSS
- https://css-tricks.com/three-line-menu-navicon/ Three Line Menu Navicon

### Vue
- https://stackoverflow.com/questions/33731939/vue-js-toggle-class-on-click Vue.js toggle class on click

### Vuex
- https://stackoverflow.com/questions/43027499/vuex-state-on-page-refresh/43027630#43027630 Vuex state on page refresh

### Express
- https://stackoverflow.com/questions/8539482/node-express-session-expire-event?rq=1 Node/Express: Session Expire Event?
- https://github.com/expressjs/session/issues/204 Callback for cookie expiration
- https://stackoverflow.com/questions/27783881/how-can-i-listen-to-session-destroyed-event How can I listen to session destroyed event?
- https://stackoverflow.com/questions/22925886/node-js-run-function-on-session-expiry-express-passport Node.js run function on session expiry Express & Passport
- https://stackoverflow.com/questions/46630368/how-to-extend-express-session-timeout How to extend express session timeout
- https://github.com/expressjs/session/issues/292 Passing new session value from server to user browser??
- https://github.com/expressjs/session/issues/169 So what exactly saveUninitialized is for?
- https://github.com/expressjs/session/issues/273 Use of resave and saveUninitialized configuration options
- https://stackoverflow.com/questions/40381401/when-to-use-saveuninitialized-and-resave-in-express-session When to use saveUninitialized and resave in express-session
- https://stackoverflow.com/questions/31385726/whats-the-difference-between-saveuninitialized-and-resave What's the difference between saveUninitialized and resave?
- https://github.com/expressjs/session/issues/445 ReplyError: ERR invalid expire time in set - using connect-redis
- https://github.com/expressjs/session/issues/189 cookie.expires goes back to original value on each reques
- https://github.com/tj/connect-redis/issues/178 Feature request: Possibility to have a callback on session expire
- https://stackoverflow.com/questions/23413401/what-does-trust-proxy-actually-do-in-express-js-and-do-i-need-to-use-it What does “trust proxy” actually do in express.js, and do I need to use it?

### Redis
- https://redis.io/topics/rediscli redis-cli, the Redis command line interface
- https://stackoverflow.com/questions/35745481/redis-cli-with-password Redis-cli with password

### Passport
- https://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize Understanding passport serialize deserialize
- https://stackoverflow.com/questions/20387554/how-to-keep-alive-an-nodejs-passport-session/27608523#27608523 How to keep alive an NodeJS Passport session
- https://stackoverflow.com/questions/15388206/sending-back-a-json-response-when-failing-passport-js-authentication/34699181 Sending back a JSON response when failing Passport.js authentication
- https://stackoverflow.com/questions/38820251/what-is-req-isauthenticated-passportjs/38820680 what is req.isAuthenticated() passportJS
- https://github.com/jaredhanson/passport-facebook/issues/189 email is not returned
- https://stackoverflow.com/questions/26859349/can-you-authenticate-with-passport-without-redirecting Can you authenticate with Passport without redirecting?
- https://stackoverflow.com/questions/24595817/how-to-use-passport-facebook-login-without-redirection How to use Passport-Facebook login without redirection?
- https://github.com/jaredhanson/passport-twitter/issues/67 Get user email
- https://auth0.com/docs/connections/social/github Connect your app to GitHub
- https://github.com/tj/connect-redis/issues/251 Session TTL is auto-reset on each request even after session expiry (resave: false)

### PG
- https://github.com/brianc/node-postgres/issues/433 Query logging/debug output
- https://github.com/sheshbabu/freshlytics/blob/master/src/server/migrations/1561030715992_init.sql Node PG Migrate Sample Migration from a real world project
- https://github.com/brianc/node-postgres/issues?utf8=%E2%9C%93&q=bulk+insert List of all questions regarding bulk insert in pg module
- https://stackoverflow.com/questions/2276644/list-all-tables-in-postgresql-information-schema List all tables in postgresql information_schema
- https://github.com/salsita/node-pg-migrate/issues/153 Redo all

### Nuxt
- https://github.com/nuxt/nuxt.js/issues/2796 nuxtServerInit running on every time index page is reload
- https://github.com/nuxt/todomvc Nuxt.js TodoMVC Example
- https://github.com/nuxt/nuxt.js/issues?page=1&q=express-session&utf8=%E2%9C%93 Questions related to express-session in Nuxt