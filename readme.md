Next JS
Next jS is a javascript framework created by Zeit

It lets you build server-side rendering and static web applications using react.
SSH
SSG
SEO

## Routing

/home -
make a page home.js inside pages folder with small 'h' for normal route/path

/aricle/policy -
make a folder called article inside pages folders , inside article make a file called policy.js
policy.js will be render in article/policy path

article/ -
If you want to make a route with article/ only then make an index.js file
index.js file will be running for '/' path only

/article/id - id will be dynamic
if you want to give dynamic value in route then make file with square bracket like below
[articleId].js

id will attached to productId key and you can get this id through router.query.articleId

/article/categoryid/subactegory/subcategoryid -

here categoryid will dynamic,subcategory will be static and again subcategoryid will be dynamic

If you want make like this route multiple static and dynamic path
make folder with [categoryid]

inside [categoryid] make another folder for static value called - subcategory

inside subcategory make a dynamic file route like [subcategoryid]

/info/artice/news
/info/article/foods
/info/books

-> If you want this type of route means whatever comes after info just render a single page value should be different with conditional logic, but page should be one for all path after info,
then make a folder called info.

inside info folder make file like below
[...infoTypes].js

[...infoTypes].js will be rendered for anypath after info/

And it will attached to router.query.infoTypes[]

->to use next router - import {useRouter} from 'next/router'

and create a instance if it like const router = useRouter()
and all the dynamic paths will be attached to respective file name

import Link from 'next/link'

->Link is used to give link to any path

<Link href="/aricle/id">products</Link>

1-Link replace
2-Route Push
3-Shallow Routing
4-404

Shallow routing allows to change the URL without running data fetching methods again, that includes
1-getServerSideProps
2-getStaticProps
3-getInitialiProps

and state remains same.

404- If you want to create your own 404 not found page then create a file called 404.js insdie pages folder
and design and write according to your choice.
It will render whenever any 404 path will be called

router.push('/login) -- redirect  to any page
