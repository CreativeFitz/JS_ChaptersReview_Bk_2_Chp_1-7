// var myName = "Bobby Fitzpatrick";
// console.log(myName);

// let numberofpets= "2";
// console.log(numberofpets);

// const social = "400-40-4000";
// console.log(social);

// const bio = `${myName} has ${numberofpets} pets and his social security number is ${social}. `;
// console.log(bio);

// let favoritefoods = ["steak", "chicken", "spaghetti", "pasta"];
// console.log(favoritefoods);

// favoritefoods = ["pizza", "tacos"];
// console.log(favoritefoods);

// favoritefoods.push("steak", "chicken", "spaghetti", "pasta");
// console.log(favoritefoods);

// for(let i = 0; i < favoritefoods.length; i++){
//     console.log("inside the loop", i);
//     console.log(favoritefoods[i]);
// }


// const namesofpets = ["Oscar", "Oliver", "Barkley", "Ruby"];

// for(let i =0; i< namesofpets.length; i++){
//     if (namesofpets[i] === "Oscar" || namesofpets[i] === "Oliver"){
//         console.log(` ${namesofpets[i]} is my pet!`)}
//     else {
//         console.log(`${namesofpets[i]} is not my pet!`);
//     } 
// }


// const hasPets = false;
// if (hasPets) {
//     alert ("What are your pets names?");
// } else {
//     alert ("Would you like some pets?");
// }

// const age = 22;
// if (age < 21){
//     console.log("You can't drink in this country!");
// }
// else {
//     console.log("You can drink if you want to.");
// }

// const kidsAge = 6;
//     if (age < 11){
//         console.log("You are in elementary school.")
//     }
//     else{
//         console.log("You must be either in middle school or high school.")
//     }



// -------------------------------LIGHTNING EXERCISE ---------------------//
// 1. Create an array of your favorite foods. For the sake of this exercise, please include "noodles" as one of your favorite foods.
// 2. Loop through the array and log each food to the console
// 3. Add a conditional to the loop and check to see if any of your favorite foods are "noodles". If the current food is noodles, you should log "Heck yeah!! Noodles!" to the console.
// Challenge: refactor the conditional so that it checks for variations on the word "noodles". This if statement should check if the current food is "noodles" OR "Noodles" OR "Pasta", etc. 
// Here's a link for reference: https://www.w3schools.com/js/js_comparisons.asp


// const bobbyFavoriteFoods = ["Steak", "Noodles", "Fried Chicken", "Spaghetti"
// ]

// for(i = 0; i < bobbyFavoriteFoods.length; i++){
//     if (bobbyFavoriteFoods[i] === "Noodles"){
//     console.log("Heck yeah!! Noodles!")}
//     else {
//         console.log(bobbyFavoriteFoods[i])
//     }
// }

// const Mom = {
//     name: "Kim",
//     age: 54,
//     hairColor: "brown with blonde highlights"
// }

// const Wife = {
//     name: "Rachael",
//     age: 27,
//     hairColor: "light brown"
// }

// const Grandma = {
//     name: "Wauletta",
//     age: 78,
//     hairColor: "black"
// }

// const cat = {
//     name: "Oliver",
//     age: 3,
//     hairColor: "orange"
// }

// console.log(cat.hairColor);
// console.log(Grandma.age);

// const familyMembers = [Mom, Wife, Grandma, cat];

// console.log(familyMembers[2].hairColor);
// console.log(familyMembers[0].age);


// Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.
// const wardrobe = {
//     height: 80,
//     manufacturer: "Killibrew & Sons",
//     contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
//     depth: 38,
//     width: 50
// }

// console.log(wardrobe.height);
// console.log(wardrobe.manufacturer);
// console.log(wardrobe.contents);
// console.log(wardrobe.depth);
// console.log(wardrobe.width);

// Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.

// Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.

// const empireStateBuilding = {
//     stories: 103,
//     height: 1453,
//     address: "350 Fifth Avenue, Manhattan, New York 10118",
//     squareFeet: 2768591,
//     constructionDate: 1931,
//     cost: 40948900,
//     owner: "Empire State Realty Trust",
//     eastWestLength: 424,
//     northSouthLength: 187,
//     architect: "Shreve, Lamb & Harmon"
// }

// console.log(empireStateBuilding.height);
// console.log(empireStateBuilding.eastWestLength);
// console.log(empireStateBuilding.northSouthLength);

// const keyForStories = "stories";
// console.log(empireStateBuilding[keyForStories]);
// const keyForAddress = "address";
// console.log(empireStateBuilding[keyForAddress]);
// const keyForSquareFeet = "squareFeet";
// console.log(empireStateBuilding[keyForSquareFeet]);
// const keyForConstructionDate = "constructionDate";
// console.log(empireStateBuilding[keyForConstructionDate]);

// LIGHTNING EXERCISE
// Lightning Exercise 1: Output the names of the instructors to the console.
// Lightning Exercise 2: Output the names of the career advisors to the console.
// const newForce = {
//     founded: 2018,
//     instructors: {
//         fullTime: ["Jordan", "Josh", "Kim"],
//     },
//     careerAdvisors: ["Natalie", "Kinsey"],
//     address: "1000 5th Ave, Huntington, WV 25701"
// }

// console.log(newForce.instructors.fullTime);
// console.log(newForce.careerAdvisors);


// 1. Create an array of your favorite foods. For the sake of this exercise, please include "noodles" as one of your favorite foods.
// 2. Loop through the array and log each food to the console
// 3. Add a conditional to the loop and check to see if any of your favorite foods are "noodles". If the current food is noodle, you should log "Heck yeah!! Noodles!" to the console.
// Challenge: refactor the conditional so that it checks for variations on the word "noodles". This if statement should check if the current food is "noodles" OR "Noodles" OR "Pasta", etc. 
// Here's a link for reference: https://www.w3schools.com/js/js_comparisons.asp

// const favoritefoods = ["pizza", "steak", "chicken", "noodles", "Noodles", "noobles"];
// for (let i = 0; i < favoritefoods.length; i++){
// if (favoritefoods[i] === "noodles" || favoritefoods[i] === "Noodles" || favoritefoods[i] === "noobles"){
//     console.log("Heck yeah!! Noodles!");
//     }
// else {
//     console.log(favoritefoods[i]);
// }
// }

// __________________________________________________________________________________________________________
// IDENTIFYING_DOM_COMPONENTS.md exercise

// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
// Obtain a reference the element with a class of dashed and remove it.
// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.

// const articleHeader = document.querySelector(".article__header");
// articleHeader.innerHTML= "Welcome to the Bobby F. blog";

// const allArticleHeaders = document.querySelectorAll(".article__header")
// console.log(allArticleHeaders);

// for (let i = 0; i > allArticleHeaders[i]; i++){
//     allArticleHeaders[i].classList.add("important");
// }

// document.querySelector(".dashed").classList.remove("dashed");
// document.querySelector(".article__footer").classList.add("goldenrod");


// ___________________________________________________________

// JS_OBJECTS.md

// const beatles = {
//     albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
//     history: {
//         formed: 1960,
//         disbanded: 1970
//     },
//     members: [
//         {
//             name: "George Harrison",
//             birth: 1943,
//             death: 2001
//         },
//         {
//             name: "Paul McCartney",
//             birth: 1942,
//             death: null
//         },
//         {
//             name: "John Lennon",
//             birth: 1940,
//             death: 1980
//         },
//         {
//             name: "Ringo Starr",
//             birth: 1940,
//             death: null
//         }
//     ]
// }

// Output the following value to the console.

// Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album

// const McCartney = `${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]}.`
// console.log(McCartney);



// const githubData = [
//     {
//       "id": "8033299496",
//       "type": "PushEvent",
//       "actor": {
//         "id": 218592,
//         "login": "stevebrownlee",
//         "display_login": "stevebrownlee",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stevebrownlee",
//         "avatar_url": "https://avatars.githubusercontent.com/u/218592?"
//       },
//       "repo": {
//         "id": 101137613,
//         "name": "nashville-software-school/client-side-mastery",
//         "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery"
//       },
//       "payload": {
//         "push_id": 2755309252,
//         "size": 1,
//         "distinct_size": 1,
//         "ref": "refs/heads/treehouse-profile",
//         "head": "4f9621b91fabe733bdf85ed571e146248b8d774b",
//         "before": "83181d0ca812ccb8d13590bba3db72c181028298",
//         "commits": [
//           {
//             "sha": "4f9621b91fabe733bdf85ed571e146248b8d774b",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Completed first draft of Grunt intro chapter",
//             "distinct": true,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/4f9621b91fabe733bdf85ed571e146248b8d774b"
//           }
//         ]
//       },
//       "public": true,
//       "created_at": "2018-07-29T03:34:00Z",
//       "org": {
//         "id": 12634274,
//         "login": "nashville-software-school",
//         "gravatar_id": "",
//         "url": "https://api.github.com/orgs/nashville-software-school",
//         "avatar_url": "https://avatars.githubusercontent.com/u/12634274?"
//       }
//     },
//     {
//       "id": "8032498553",
//       "type": "PushEvent",
//       "actor": {
//         "id": 218592,
//         "login": "stevebrownlee",
//         "display_login": "stevebrownlee",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stevebrownlee",
//         "avatar_url": "https://avatars.githubusercontent.com/u/218592?"
//       },
//       "repo": {
//         "id": 101137613,
//         "name": "nashville-software-school/client-side-mastery",
//         "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery"
//       },
//       "payload": {
//         "push_id": 2754785944,
//         "size": 6,
//         "distinct_size": 2,
//         "ref": "refs/heads/treehouse-profile",
//         "head": "83181d0ca812ccb8d13590bba3db72c181028298",
//         "before": "e332c912c053582024a90e4d6e5950898253b92d",
//         "commits": [
//           {
//             "sha": "4005df992d254492566ceea46a096764d622eaa2",
//             "author": {
//               "email": "ducharme.meg@gmail.com",
//               "name": "Meg Ducharme"
//             },
//             "message": "changed the order of the challenges - I think dynamic cards is more important than drag and drop. Also added some clarification to event listener instructions. Students are still confused.",
//             "distinct": false,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/4005df992d254492566ceea46a096764d622eaa2"
//           },
//           {
//             "sha": "5327a88990283fc092fcde7c921760d99e7f5718",
//             "author": {
//               "email": "ducharme.meg@gmail.com",
//               "name": "Meg Ducharme"
//             },
//             "message": "added 'one step further' part to the event listener practic (not quite a challenge)",
//             "distinct": false,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/5327a88990283fc092fcde7c921760d99e7f5718"
//           },
//           {
//             "sha": "227f067aeba15b0ec98c5ff1beba2478d7569195",
//             "author": {
//               "email": "ducharme.meg@gmail.com",
//               "name": "Meg Ducharme"
//             },
//             "message": "removed generator function from browserify chapter",
//             "distinct": false,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/227f067aeba15b0ec98c5ff1beba2478d7569195"
//           },
//           {
//             "sha": "a6dad0c8abee3935094579e8d84292413b346f33",
//             "author": {
//               "email": "stevebrownlee@users.noreply.github.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Merge pull request #32 from nashville-software-school/md-lsandevtlsnr\n\nChanged the order of Challenges for Event Listeners",
//             "distinct": false,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/a6dad0c8abee3935094579e8d84292413b346f33"
//           },
//           {
//             "sha": "f0e8950e3831e1c569c753492ed88034861ba296",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Merge branch 'master' of github.com:nashville-software-school/client-side-mastery into treehouse-profile",
//             "distinct": true,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/f0e8950e3831e1c569c753492ed88034861ba296"
//           },
//           {
//             "sha": "83181d0ca812ccb8d13590bba3db72c181028298",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Added explanations, links, and config for Grunt tasks. More to come",
//             "distinct": true,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/83181d0ca812ccb8d13590bba3db72c181028298"
//           }
//         ]
//       },
//       "public": true,
//       "created_at": "2018-07-28T16:06:49Z",
//       "org": {
//         "id": 12634274,
//         "login": "nashville-software-school",
//         "gravatar_id": "",
//         "url": "https://api.github.com/orgs/nashville-software-school",
//         "avatar_url": "https://avatars.githubusercontent.com/u/12634274?"
//       }
//     },
//     {
//       "id": "8030689116",
//       "type": "PushEvent",
//       "actor": {
//         "id": 218592,
//         "login": "stevebrownlee",
//         "display_login": "stevebrownlee",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stevebrownlee",
//         "avatar_url": "https://avatars.githubusercontent.com/u/218592?"
//       },
//       "repo": {
//         "id": 74918712,
//         "name": "nashville-software-school/bangazon-llc",
//         "url": "https://api.github.com/repos/nashville-software-school/bangazon-llc"
//       },
//       "payload": {
//         "push_id": 2753704303,
//         "size": 2,
//         "distinct_size": 2,
//         "ref": "refs/heads/master",
//         "head": "ef4cb16ed7fb5ee5141a58cfbece67a7fdf8e673",
//         "before": "764473356d805816b7401449fff0b3f8e3136993",
//         "commits": [
//           {
//             "sha": "1450bf8661ca46949808242f428a410b42e1c121",
//             "author": {
//               "email": "38005173+CashewRose@users.noreply.github.com",
//               "name": "CashewRose"
//             },
//             "message": "Update DB_RESET_SEED_SYSTEM.md",
//             "distinct": true,
//             "url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/commits/1450bf8661ca46949808242f428a410b42e1c121"
//           },
//           {
//             "sha": "ef4cb16ed7fb5ee5141a58cfbece67a7fdf8e673",
//             "author": {
//               "email": "stevebrownlee@users.noreply.github.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Merge pull request #23 from CashewRose/patch-1\n\nUpdate DB_RESET_SEED_SYSTEM.md",
//             "distinct": true,
//             "url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/commits/ef4cb16ed7fb5ee5141a58cfbece67a7fdf8e673"
//           }
//         ]
//       },
//       "public": true,
//       "created_at": "2018-07-27T20:39:29Z",
//       "org": {
//         "id": 12634274,
//         "login": "nashville-software-school",
//         "gravatar_id": "",
//         "url": "https://api.github.com/orgs/nashville-software-school",
//         "avatar_url": "https://avatars.githubusercontent.com/u/12634274?"
//       }
//     },
//     {
//       "id": "8030689078",
//       "type": "PullRequestEvent",
//       "actor": {
//         "id": 218592,
//         "login": "stevebrownlee",
//         "display_login": "stevebrownlee",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stevebrownlee",
//         "avatar_url": "https://avatars.githubusercontent.com/u/218592?"
//       },
//       "repo": {
//         "id": 74918712,
//         "name": "nashville-software-school/bangazon-llc",
//         "url": "https://api.github.com/repos/nashville-software-school/bangazon-llc"
//       },
//       "payload": {
//         "action": "closed",
//         "number": 23,
//         "pull_request": {
//           "url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/pulls/23",
//           "id": 204204443,
//           "node_id": "MDExOlB1bGxSZXF1ZXN0MjA0MjA0NDQz",
//           "html_url": "https://github.com/nashville-software-school/bangazon-llc/pull/23",
//           "diff_url": "https://github.com/nashville-software-school/bangazon-llc/pull/23.diff",
//           "patch_url": "https://github.com/nashville-software-school/bangazon-llc/pull/23.patch",
//           "issue_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/issues/23",
//           "number": 23,
//           "state": "closed",
//           "locked": false,
//           "title": "Update DB_RESET_SEED_SYSTEM.md",
//           "user": {
//             "login": "CashewRose",
//             "id": 38005173,
//             "node_id": "MDQ6VXNlcjM4MDA1MTcz",
//             "avatar_url": "https://avatars1.githubusercontent.com/u/38005173?v=4",
//             "gravatar_id": "",
//             "url": "https://api.github.com/users/CashewRose",
//             "html_url": "https://github.com/CashewRose",
//             "followers_url": "https://api.github.com/users/CashewRose/followers",
//             "following_url": "https://api.github.com/users/CashewRose/following{/other_user}",
//             "gists_url": "https://api.github.com/users/CashewRose/gists{/gist_id}",
//             "starred_url": "https://api.github.com/users/CashewRose/starred{/owner}{/repo}",
//             "subscriptions_url": "https://api.github.com/users/CashewRose/subscriptions",
//             "organizations_url": "https://api.github.com/users/CashewRose/orgs",
//             "repos_url": "https://api.github.com/users/CashewRose/repos",
//             "events_url": "https://api.github.com/users/CashewRose/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/CashewRose/received_events",
//             "type": "User",
//             "site_admin": false
//           },
//           "body": "removed .py\r\n\r\nwhen running final command faker_factory.py .py is not needed",
//           "created_at": "2018-07-26T16:52:44Z",
//           "updated_at": "2018-07-27T20:39:28Z",
//           "closed_at": "2018-07-27T20:39:28Z",
//           "merged_at": "2018-07-27T20:39:28Z",
//           "merge_commit_sha": "ef4cb16ed7fb5ee5141a58cfbece67a7fdf8e673",
//           "assignee": null,
//           "assignees": [

//           ],
//           "requested_reviewers": [

//           ],
//           "requested_teams": [

//           ],
//           "labels": [

//           ],
//           "milestone": null,
//           "commits_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/pulls/23/commits",
//           "review_comments_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/pulls/23/comments",
//           "review_comment_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/pulls/comments{/number}",
//           "comments_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/issues/23/comments",
//           "statuses_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/statuses/1450bf8661ca46949808242f428a410b42e1c121",
//           "head": {
//             "label": "CashewRose:patch-1",
//             "ref": "patch-1",
//             "sha": "1450bf8661ca46949808242f428a410b42e1c121",
//             "user": {
//               "login": "CashewRose",
//               "id": 38005173,
//               "node_id": "MDQ6VXNlcjM4MDA1MTcz",
//               "avatar_url": "https://avatars1.githubusercontent.com/u/38005173?v=4",
//               "gravatar_id": "",
//               "url": "https://api.github.com/users/CashewRose",
//               "html_url": "https://github.com/CashewRose",
//               "followers_url": "https://api.github.com/users/CashewRose/followers",
//               "following_url": "https://api.github.com/users/CashewRose/following{/other_user}",
//               "gists_url": "https://api.github.com/users/CashewRose/gists{/gist_id}",
//               "starred_url": "https://api.github.com/users/CashewRose/starred{/owner}{/repo}",
//               "subscriptions_url": "https://api.github.com/users/CashewRose/subscriptions",
//               "organizations_url": "https://api.github.com/users/CashewRose/orgs",
//               "repos_url": "https://api.github.com/users/CashewRose/repos",
//               "events_url": "https://api.github.com/users/CashewRose/events{/privacy}",
//               "received_events_url": "https://api.github.com/users/CashewRose/received_events",
//               "type": "User",
//               "site_admin": false
//             },
//             "repo": {
//               "id": 142468926,
//               "node_id": "MDEwOlJlcG9zaXRvcnkxNDI0Njg5MjY=",
//               "name": "bangazon-llc",
//               "full_name": "CashewRose/bangazon-llc",
//               "owner": {
//                 "login": "CashewRose",
//                 "id": 38005173,
//                 "node_id": "MDQ6VXNlcjM4MDA1MTcz",
//                 "avatar_url": "https://avatars1.githubusercontent.com/u/38005173?v=4",
//                 "gravatar_id": "",
//                 "url": "https://api.github.com/users/CashewRose",
//                 "html_url": "https://github.com/CashewRose",
//                 "followers_url": "https://api.github.com/users/CashewRose/followers",
//                 "following_url": "https://api.github.com/users/CashewRose/following{/other_user}",
//                 "gists_url": "https://api.github.com/users/CashewRose/gists{/gist_id}",
//                 "starred_url": "https://api.github.com/users/CashewRose/starred{/owner}{/repo}",
//                 "subscriptions_url": "https://api.github.com/users/CashewRose/subscriptions",
//                 "organizations_url": "https://api.github.com/users/CashewRose/orgs",
//                 "repos_url": "https://api.github.com/users/CashewRose/repos",
//                 "events_url": "https://api.github.com/users/CashewRose/events{/privacy}",
//                 "received_events_url": "https://api.github.com/users/CashewRose/received_events",
//                 "type": "User",
//                 "site_admin": false
//               },
//               "private": false,
//               "html_url": "https://github.com/CashewRose/bangazon-llc",
//               "description": "Bangazon, LLC is an NSS subsidiary company that employs students for Python project work",
//               "fork": true,
//               "url": "https://api.github.com/repos/CashewRose/bangazon-llc",
//               "forks_url": "https://api.github.com/repos/CashewRose/bangazon-llc/forks",
//               "keys_url": "https://api.github.com/repos/CashewRose/bangazon-llc/keys{/key_id}",
//               "collaborators_url": "https://api.github.com/repos/CashewRose/bangazon-llc/collaborators{/collaborator}",
//               "teams_url": "https://api.github.com/repos/CashewRose/bangazon-llc/teams",
//               "hooks_url": "https://api.github.com/repos/CashewRose/bangazon-llc/hooks",
//               "issue_events_url": "https://api.github.com/repos/CashewRose/bangazon-llc/issues/events{/number}",
//               "events_url": "https://api.github.com/repos/CashewRose/bangazon-llc/events",
//               "assignees_url": "https://api.github.com/repos/CashewRose/bangazon-llc/assignees{/user}",
//               "branches_url": "https://api.github.com/repos/CashewRose/bangazon-llc/branches{/branch}",
//               "tags_url": "https://api.github.com/repos/CashewRose/bangazon-llc/tags",
//               "blobs_url": "https://api.github.com/repos/CashewRose/bangazon-llc/git/blobs{/sha}",
//               "git_tags_url": "https://api.github.com/repos/CashewRose/bangazon-llc/git/tags{/sha}",
//               "git_refs_url": "https://api.github.com/repos/CashewRose/bangazon-llc/git/refs{/sha}",
//               "trees_url": "https://api.github.com/repos/CashewRose/bangazon-llc/git/trees{/sha}",
//               "statuses_url": "https://api.github.com/repos/CashewRose/bangazon-llc/statuses/{sha}",
//               "languages_url": "https://api.github.com/repos/CashewRose/bangazon-llc/languages",
//               "stargazers_url": "https://api.github.com/repos/CashewRose/bangazon-llc/stargazers",
//               "contributors_url": "https://api.github.com/repos/CashewRose/bangazon-llc/contributors",
//               "subscribers_url": "https://api.github.com/repos/CashewRose/bangazon-llc/subscribers",
//               "subscription_url": "https://api.github.com/repos/CashewRose/bangazon-llc/subscription",
//               "commits_url": "https://api.github.com/repos/CashewRose/bangazon-llc/commits{/sha}",
//               "git_commits_url": "https://api.github.com/repos/CashewRose/bangazon-llc/git/commits{/sha}",
//               "comments_url": "https://api.github.com/repos/CashewRose/bangazon-llc/comments{/number}",
//               "issue_comment_url": "https://api.github.com/repos/CashewRose/bangazon-llc/issues/comments{/number}",
//               "contents_url": "https://api.github.com/repos/CashewRose/bangazon-llc/contents/{+path}",
//               "compare_url": "https://api.github.com/repos/CashewRose/bangazon-llc/compare/{base}...{head}",
//               "merges_url": "https://api.github.com/repos/CashewRose/bangazon-llc/merges",
//               "archive_url": "https://api.github.com/repos/CashewRose/bangazon-llc/{archive_format}{/ref}",
//               "downloads_url": "https://api.github.com/repos/CashewRose/bangazon-llc/downloads",
//               "issues_url": "https://api.github.com/repos/CashewRose/bangazon-llc/issues{/number}",
//               "pulls_url": "https://api.github.com/repos/CashewRose/bangazon-llc/pulls{/number}",
//               "milestones_url": "https://api.github.com/repos/CashewRose/bangazon-llc/milestones{/number}",
//               "notifications_url": "https://api.github.com/repos/CashewRose/bangazon-llc/notifications{?since,all,participating}",
//               "labels_url": "https://api.github.com/repos/CashewRose/bangazon-llc/labels{/name}",
//               "releases_url": "https://api.github.com/repos/CashewRose/bangazon-llc/releases{/id}",
//               "deployments_url": "https://api.github.com/repos/CashewRose/bangazon-llc/deployments",
//               "created_at": "2018-07-26T16:50:49Z",
//               "updated_at": "2018-07-26T16:50:51Z",
//               "pushed_at": "2018-07-26T16:51:10Z",
//               "git_url": "git://github.com/CashewRose/bangazon-llc.git",
//               "ssh_url": "git@github.com:CashewRose/bangazon-llc.git",
//               "clone_url": "https://github.com/CashewRose/bangazon-llc.git",
//               "svn_url": "https://github.com/CashewRose/bangazon-llc",
//               "homepage": "",
//               "size": 651,
//               "stargazers_count": 0,
//               "watchers_count": 0,
//               "language": "Python",
//               "has_issues": false,
//               "has_projects": true,
//               "has_downloads": true,
//               "has_wiki": true,
//               "has_pages": false,
//               "forks_count": 0,
//               "mirror_url": null,
//               "archived": false,
//               "open_issues_count": 0,
//               "license": null,
//               "forks": 0,
//               "open_issues": 0,
//               "watchers": 0,
//               "default_branch": "master"
//             }
//           },
//           "base": {
//             "label": "nashville-software-school:master",
//             "ref": "master",
//             "sha": "8e4d369543f6f2be33c8fbad0e17f154ff947633",
//             "user": {
//               "login": "nashville-software-school",
//               "id": 12634274,
//               "node_id": "MDEyOk9yZ2FuaXphdGlvbjEyNjM0Mjc0",
//               "avatar_url": "https://avatars3.githubusercontent.com/u/12634274?v=4",
//               "gravatar_id": "",
//               "url": "https://api.github.com/users/nashville-software-school",
//               "html_url": "https://github.com/nashville-software-school",
//               "followers_url": "https://api.github.com/users/nashville-software-school/followers",
//               "following_url": "https://api.github.com/users/nashville-software-school/following{/other_user}",
//               "gists_url": "https://api.github.com/users/nashville-software-school/gists{/gist_id}",
//               "starred_url": "https://api.github.com/users/nashville-software-school/starred{/owner}{/repo}",
//               "subscriptions_url": "https://api.github.com/users/nashville-software-school/subscriptions",
//               "organizations_url": "https://api.github.com/users/nashville-software-school/orgs",
//               "repos_url": "https://api.github.com/users/nashville-software-school/repos",
//               "events_url": "https://api.github.com/users/nashville-software-school/events{/privacy}",
//               "received_events_url": "https://api.github.com/users/nashville-software-school/received_events",
//               "type": "Organization",
//               "site_admin": false
//             },
//             "repo": {
//               "id": 74918712,
//               "node_id": "MDEwOlJlcG9zaXRvcnk3NDkxODcxMg==",
//               "name": "bangazon-llc",
//               "full_name": "nashville-software-school/bangazon-llc",
//               "owner": {
//                 "login": "nashville-software-school",
//                 "id": 12634274,
//                 "node_id": "MDEyOk9yZ2FuaXphdGlvbjEyNjM0Mjc0",
//                 "avatar_url": "https://avatars3.githubusercontent.com/u/12634274?v=4",
//                 "gravatar_id": "",
//                 "url": "https://api.github.com/users/nashville-software-school",
//                 "html_url": "https://github.com/nashville-software-school",
//                 "followers_url": "https://api.github.com/users/nashville-software-school/followers",
//                 "following_url": "https://api.github.com/users/nashville-software-school/following{/other_user}",
//                 "gists_url": "https://api.github.com/users/nashville-software-school/gists{/gist_id}",
//                 "starred_url": "https://api.github.com/users/nashville-software-school/starred{/owner}{/repo}",
//                 "subscriptions_url": "https://api.github.com/users/nashville-software-school/subscriptions",
//                 "organizations_url": "https://api.github.com/users/nashville-software-school/orgs",
//                 "repos_url": "https://api.github.com/users/nashville-software-school/repos",
//                 "events_url": "https://api.github.com/users/nashville-software-school/events{/privacy}",
//                 "received_events_url": "https://api.github.com/users/nashville-software-school/received_events",
//                 "type": "Organization",
//                 "site_admin": false
//               },
//               "private": false,
//               "html_url": "https://github.com/nashville-software-school/bangazon-llc",
//               "description": "Bangazon, LLC is an NSS subsidiary company that employs students for Python project work",
//               "fork": false,
//               "url": "https://api.github.com/repos/nashville-software-school/bangazon-llc",
//               "forks_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/forks",
//               "keys_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/keys{/key_id}",
//               "collaborators_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/collaborators{/collaborator}",
//               "teams_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/teams",
//               "hooks_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/hooks",
//               "issue_events_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/issues/events{/number}",
//               "events_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/events",
//               "assignees_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/assignees{/user}",
//               "branches_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/branches{/branch}",
//               "tags_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/tags",
//               "blobs_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/git/blobs{/sha}",
//               "git_tags_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/git/tags{/sha}",
//               "git_refs_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/git/refs{/sha}",
//               "trees_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/git/trees{/sha}",
//               "statuses_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/statuses/{sha}",
//               "languages_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/languages",
//               "stargazers_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/stargazers",
//               "contributors_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/contributors",
//               "subscribers_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/subscribers",
//               "subscription_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/subscription",
//               "commits_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/commits{/sha}",
//               "git_commits_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/git/commits{/sha}",
//               "comments_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/comments{/number}",
//               "issue_comment_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/issues/comments{/number}",
//               "contents_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/contents/{+path}",
//               "compare_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/compare/{base}...{head}",
//               "merges_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/merges",
//               "archive_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/{archive_format}{/ref}",
//               "downloads_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/downloads",
//               "issues_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/issues{/number}",
//               "pulls_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/pulls{/number}",
//               "milestones_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/milestones{/number}",
//               "notifications_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/notifications{?since,all,participating}",
//               "labels_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/labels{/name}",
//               "releases_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/releases{/id}",
//               "deployments_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/deployments",
//               "created_at": "2016-11-27T22:38:38Z",
//               "updated_at": "2018-07-27T20:39:01Z",
//               "pushed_at": "2018-07-27T20:39:28Z",
//               "git_url": "git://github.com/nashville-software-school/bangazon-llc.git",
//               "ssh_url": "git@github.com:nashville-software-school/bangazon-llc.git",
//               "clone_url": "https://github.com/nashville-software-school/bangazon-llc.git",
//               "svn_url": "https://github.com/nashville-software-school/bangazon-llc",
//               "homepage": "",
//               "size": 648,
//               "stargazers_count": 28,
//               "watchers_count": 28,
//               "language": "Python",
//               "has_issues": true,
//               "has_projects": true,
//               "has_downloads": true,
//               "has_wiki": true,
//               "has_pages": false,
//               "forks_count": 33,
//               "mirror_url": null,
//               "archived": false,
//               "open_issues_count": 2,
//               "license": null,
//               "forks": 33,
//               "open_issues": 2,
//               "watchers": 28,
//               "default_branch": "master"
//             }
//           },
//           "_links": {
//             "self": {
//               "href": "https://api.github.com/repos/nashville-software-school/bangazon-llc/pulls/23"
//             },
//             "html": {
//               "href": "https://github.com/nashville-software-school/bangazon-llc/pull/23"
//             },
//             "issue": {
//               "href": "https://api.github.com/repos/nashville-software-school/bangazon-llc/issues/23"
//             },
//             "comments": {
//               "href": "https://api.github.com/repos/nashville-software-school/bangazon-llc/issues/23/comments"
//             },
//             "review_comments": {
//               "href": "https://api.github.com/repos/nashville-software-school/bangazon-llc/pulls/23/comments"
//             },
//             "review_comment": {
//               "href": "https://api.github.com/repos/nashville-software-school/bangazon-llc/pulls/comments{/number}"
//             },
//             "commits": {
//               "href": "https://api.github.com/repos/nashville-software-school/bangazon-llc/pulls/23/commits"
//             },
//             "statuses": {
//               "href": "https://api.github.com/repos/nashville-software-school/bangazon-llc/statuses/1450bf8661ca46949808242f428a410b42e1c121"
//             }
//           },
//           "author_association": "NONE",
//           "merged": true,
//           "mergeable": null,
//           "rebaseable": null,
//           "mergeable_state": "unknown",
//           "merged_by": {
//             "login": "stevebrownlee",
//             "id": 218592,
//             "node_id": "MDQ6VXNlcjIxODU5Mg==",
//             "avatar_url": "https://avatars3.githubusercontent.com/u/218592?v=4",
//             "gravatar_id": "",
//             "url": "https://api.github.com/users/stevebrownlee",
//             "html_url": "https://github.com/stevebrownlee",
//             "followers_url": "https://api.github.com/users/stevebrownlee/followers",
//             "following_url": "https://api.github.com/users/stevebrownlee/following{/other_user}",
//             "gists_url": "https://api.github.com/users/stevebrownlee/gists{/gist_id}",
//             "starred_url": "https://api.github.com/users/stevebrownlee/starred{/owner}{/repo}",
//             "subscriptions_url": "https://api.github.com/users/stevebrownlee/subscriptions",
//             "organizations_url": "https://api.github.com/users/stevebrownlee/orgs",
//             "repos_url": "https://api.github.com/users/stevebrownlee/repos",
//             "events_url": "https://api.github.com/users/stevebrownlee/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/stevebrownlee/received_events",
//             "type": "User",
//             "site_admin": false
//           },
//           "comments": 0,
//           "review_comments": 0,
//           "maintainer_can_modify": false,
//           "commits": 1,
//           "additions": 1,
//           "deletions": 1,
//           "changed_files": 1
//         }
//       },
//       "public": true,
//       "created_at": "2018-07-27T20:39:28Z",
//       "org": {
//         "id": 12634274,
//         "login": "nashville-software-school",
//         "gravatar_id": "",
//         "url": "https://api.github.com/orgs/nashville-software-school",
//         "avatar_url": "https://avatars.githubusercontent.com/u/12634274?"
//       }
//     },
//     {
//       "id": "8030687246",
//       "type": "PushEvent",
//       "actor": {
//         "id": 218592,
//         "login": "stevebrownlee",
//         "display_login": "stevebrownlee",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stevebrownlee",
//         "avatar_url": "https://avatars.githubusercontent.com/u/218592?"
//       },
//       "repo": {
//         "id": 74918712,
//         "name": "nashville-software-school/bangazon-llc",
//         "url": "https://api.github.com/repos/nashville-software-school/bangazon-llc"
//       },
//       "payload": {
//         "push_id": 2753703307,
//         "size": 2,
//         "distinct_size": 2,
//         "ref": "refs/heads/master",
//         "head": "764473356d805816b7401449fff0b3f8e3136993",
//         "before": "8e4d369543f6f2be33c8fbad0e17f154ff947633",
//         "commits": [
//           {
//             "sha": "df77cd3f0e13f851872b64758778ffffe5cc2119",
//             "author": {
//               "email": "erinmeaker@gmail.com",
//               "name": "Erin Meaker"
//             },
//             "message": "Need to add __init__.py files\n\nNeed to add __init__.py files to management and commands directories to make Django recognize them as packages.\r\n\r\nhttp://janetriley.net/2014/11/quick-how-to-custom-django-management-commands.html",
//             "distinct": true,
//             "url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/commits/df77cd3f0e13f851872b64758778ffffe5cc2119"
//           },
//           {
//             "sha": "764473356d805816b7401449fff0b3f8e3136993",
//             "author": {
//               "email": "stevebrownlee@users.noreply.github.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Merge pull request #22 from MrErin/patch-3\n\nNeed to add __init__.py files",
//             "distinct": true,
//             "url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/commits/764473356d805816b7401449fff0b3f8e3136993"
//           }
//         ]
//       },
//       "public": true,
//       "created_at": "2018-07-27T20:39:00Z",
//       "org": {
//         "id": 12634274,
//         "login": "nashville-software-school",
//         "gravatar_id": "",
//         "url": "https://api.github.com/orgs/nashville-software-school",
//         "avatar_url": "https://avatars.githubusercontent.com/u/12634274?"
//       }
//     },
//     {
//       "id": "8030687200",
//       "type": "PullRequestEvent",
//       "actor": {
//         "id": 218592,
//         "login": "stevebrownlee",
//         "display_login": "stevebrownlee",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stevebrownlee",
//         "avatar_url": "https://avatars.githubusercontent.com/u/218592?"
//       },
//       "repo": {
//         "id": 74918712,
//         "name": "nashville-software-school/bangazon-llc",
//         "url": "https://api.github.com/repos/nashville-software-school/bangazon-llc"
//       },
//       "payload": {
//         "action": "closed",
//         "number": 22,
//         "pull_request": {
//           "url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/pulls/22",
//           "id": 204180792,
//           "node_id": "MDExOlB1bGxSZXF1ZXN0MjA0MTgwNzky",
//           "html_url": "https://github.com/nashville-software-school/bangazon-llc/pull/22",
//           "diff_url": "https://github.com/nashville-software-school/bangazon-llc/pull/22.diff",
//           "patch_url": "https://github.com/nashville-software-school/bangazon-llc/pull/22.patch",
//           "issue_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/issues/22",
//           "number": 22,
//           "state": "closed",
//           "locked": false,
//           "title": "Need to add __init__.py files",
//           "user": {
//             "login": "MrErin",
//             "id": 24968936,
//             "node_id": "MDQ6VXNlcjI0OTY4OTM2",
//             "avatar_url": "https://avatars1.githubusercontent.com/u/24968936?v=4",
//             "gravatar_id": "",
//             "url": "https://api.github.com/users/MrErin",
//             "html_url": "https://github.com/MrErin",
//             "followers_url": "https://api.github.com/users/MrErin/followers",
//             "following_url": "https://api.github.com/users/MrErin/following{/other_user}",
//             "gists_url": "https://api.github.com/users/MrErin/gists{/gist_id}",
//             "starred_url": "https://api.github.com/users/MrErin/starred{/owner}{/repo}",
//             "subscriptions_url": "https://api.github.com/users/MrErin/subscriptions",
//             "organizations_url": "https://api.github.com/users/MrErin/orgs",
//             "repos_url": "https://api.github.com/users/MrErin/repos",
//             "events_url": "https://api.github.com/users/MrErin/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/MrErin/received_events",
//             "type": "User",
//             "site_admin": false
//           },
//           "body": "Need to add __init__.py files to management and commands directories to make Django recognize them as packages.\r\n\r\nhttp://janetriley.net/2014/11/quick-how-to-custom-django-management-commands.html",
//           "created_at": "2018-07-26T15:28:08Z",
//           "updated_at": "2018-07-27T20:38:59Z",
//           "closed_at": "2018-07-27T20:38:59Z",
//           "merged_at": "2018-07-27T20:38:59Z",
//           "merge_commit_sha": "764473356d805816b7401449fff0b3f8e3136993",
//           "assignee": null,
//           "assignees": [

//           ],
//           "requested_reviewers": [

//           ],
//           "requested_teams": [

//           ],
//           "labels": [

//           ],
//           "milestone": null,
//           "commits_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/pulls/22/commits",
//           "review_comments_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/pulls/22/comments",
//           "review_comment_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/pulls/comments{/number}",
//           "comments_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/issues/22/comments",
//           "statuses_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/statuses/df77cd3f0e13f851872b64758778ffffe5cc2119",
//           "head": {
//             "label": "MrErin:patch-3",
//             "ref": "patch-3",
//             "sha": "df77cd3f0e13f851872b64758778ffffe5cc2119",
//             "user": {
//               "login": "MrErin",
//               "id": 24968936,
//               "node_id": "MDQ6VXNlcjI0OTY4OTM2",
//               "avatar_url": "https://avatars1.githubusercontent.com/u/24968936?v=4",
//               "gravatar_id": "",
//               "url": "https://api.github.com/users/MrErin",
//               "html_url": "https://github.com/MrErin",
//               "followers_url": "https://api.github.com/users/MrErin/followers",
//               "following_url": "https://api.github.com/users/MrErin/following{/other_user}",
//               "gists_url": "https://api.github.com/users/MrErin/gists{/gist_id}",
//               "starred_url": "https://api.github.com/users/MrErin/starred{/owner}{/repo}",
//               "subscriptions_url": "https://api.github.com/users/MrErin/subscriptions",
//               "organizations_url": "https://api.github.com/users/MrErin/orgs",
//               "repos_url": "https://api.github.com/users/MrErin/repos",
//               "events_url": "https://api.github.com/users/MrErin/events{/privacy}",
//               "received_events_url": "https://api.github.com/users/MrErin/received_events",
//               "type": "User",
//               "site_admin": false
//             },
//             "repo": {
//               "id": 142340995,
//               "node_id": "MDEwOlJlcG9zaXRvcnkxNDIzNDA5OTU=",
//               "name": "bangazon-llc",
//               "full_name": "MrErin/bangazon-llc",
//               "owner": {
//                 "login": "MrErin",
//                 "id": 24968936,
//                 "node_id": "MDQ6VXNlcjI0OTY4OTM2",
//                 "avatar_url": "https://avatars1.githubusercontent.com/u/24968936?v=4",
//                 "gravatar_id": "",
//                 "url": "https://api.github.com/users/MrErin",
//                 "html_url": "https://github.com/MrErin",
//                 "followers_url": "https://api.github.com/users/MrErin/followers",
//                 "following_url": "https://api.github.com/users/MrErin/following{/other_user}",
//                 "gists_url": "https://api.github.com/users/MrErin/gists{/gist_id}",
//                 "starred_url": "https://api.github.com/users/MrErin/starred{/owner}{/repo}",
//                 "subscriptions_url": "https://api.github.com/users/MrErin/subscriptions",
//                 "organizations_url": "https://api.github.com/users/MrErin/orgs",
//                 "repos_url": "https://api.github.com/users/MrErin/repos",
//                 "events_url": "https://api.github.com/users/MrErin/events{/privacy}",
//                 "received_events_url": "https://api.github.com/users/MrErin/received_events",
//                 "type": "User",
//                 "site_admin": false
//               },
//               "private": false,
//               "html_url": "https://github.com/MrErin/bangazon-llc",
//               "description": "Bangazon, LLC is an NSS subsidiary company that employs students for Python project work",
//               "fork": true,
//               "url": "https://api.github.com/repos/MrErin/bangazon-llc",
//               "forks_url": "https://api.github.com/repos/MrErin/bangazon-llc/forks",
//               "keys_url": "https://api.github.com/repos/MrErin/bangazon-llc/keys{/key_id}",
//               "collaborators_url": "https://api.github.com/repos/MrErin/bangazon-llc/collaborators{/collaborator}",
//               "teams_url": "https://api.github.com/repos/MrErin/bangazon-llc/teams",
//               "hooks_url": "https://api.github.com/repos/MrErin/bangazon-llc/hooks",
//               "issue_events_url": "https://api.github.com/repos/MrErin/bangazon-llc/issues/events{/number}",
//               "events_url": "https://api.github.com/repos/MrErin/bangazon-llc/events",
//               "assignees_url": "https://api.github.com/repos/MrErin/bangazon-llc/assignees{/user}",
//               "branches_url": "https://api.github.com/repos/MrErin/bangazon-llc/branches{/branch}",
//               "tags_url": "https://api.github.com/repos/MrErin/bangazon-llc/tags",
//               "blobs_url": "https://api.github.com/repos/MrErin/bangazon-llc/git/blobs{/sha}",
//               "git_tags_url": "https://api.github.com/repos/MrErin/bangazon-llc/git/tags{/sha}",
//               "git_refs_url": "https://api.github.com/repos/MrErin/bangazon-llc/git/refs{/sha}",
//               "trees_url": "https://api.github.com/repos/MrErin/bangazon-llc/git/trees{/sha}",
//               "statuses_url": "https://api.github.com/repos/MrErin/bangazon-llc/statuses/{sha}",
//               "languages_url": "https://api.github.com/repos/MrErin/bangazon-llc/languages",
//               "stargazers_url": "https://api.github.com/repos/MrErin/bangazon-llc/stargazers",
//               "contributors_url": "https://api.github.com/repos/MrErin/bangazon-llc/contributors",
//               "subscribers_url": "https://api.github.com/repos/MrErin/bangazon-llc/subscribers",
//               "subscription_url": "https://api.github.com/repos/MrErin/bangazon-llc/subscription",
//               "commits_url": "https://api.github.com/repos/MrErin/bangazon-llc/commits{/sha}",
//               "git_commits_url": "https://api.github.com/repos/MrErin/bangazon-llc/git/commits{/sha}",
//               "comments_url": "https://api.github.com/repos/MrErin/bangazon-llc/comments{/number}",
//               "issue_comment_url": "https://api.github.com/repos/MrErin/bangazon-llc/issues/comments{/number}",
//               "contents_url": "https://api.github.com/repos/MrErin/bangazon-llc/contents/{+path}",
//               "compare_url": "https://api.github.com/repos/MrErin/bangazon-llc/compare/{base}...{head}",
//               "merges_url": "https://api.github.com/repos/MrErin/bangazon-llc/merges",
//               "archive_url": "https://api.github.com/repos/MrErin/bangazon-llc/{archive_format}{/ref}",
//               "downloads_url": "https://api.github.com/repos/MrErin/bangazon-llc/downloads",
//               "issues_url": "https://api.github.com/repos/MrErin/bangazon-llc/issues{/number}",
//               "pulls_url": "https://api.github.com/repos/MrErin/bangazon-llc/pulls{/number}",
//               "milestones_url": "https://api.github.com/repos/MrErin/bangazon-llc/milestones{/number}",
//               "notifications_url": "https://api.github.com/repos/MrErin/bangazon-llc/notifications{?since,all,participating}",
//               "labels_url": "https://api.github.com/repos/MrErin/bangazon-llc/labels{/name}",
//               "releases_url": "https://api.github.com/repos/MrErin/bangazon-llc/releases{/id}",
//               "deployments_url": "https://api.github.com/repos/MrErin/bangazon-llc/deployments",
//               "created_at": "2018-07-25T18:51:50Z",
//               "updated_at": "2018-07-25T18:51:52Z",
//               "pushed_at": "2018-07-26T15:27:52Z",
//               "git_url": "git://github.com/MrErin/bangazon-llc.git",
//               "ssh_url": "git@github.com:MrErin/bangazon-llc.git",
//               "clone_url": "https://github.com/MrErin/bangazon-llc.git",
//               "svn_url": "https://github.com/MrErin/bangazon-llc",
//               "homepage": "",
//               "size": 658,
//               "stargazers_count": 0,
//               "watchers_count": 0,
//               "language": "Python",
//               "has_issues": false,
//               "has_projects": true,
//               "has_downloads": true,
//               "has_wiki": true,
//               "has_pages": false,
//               "forks_count": 0,
//               "mirror_url": null,
//               "archived": false,
//               "open_issues_count": 0,
//               "license": null,
//               "forks": 0,
//               "open_issues": 0,
//               "watchers": 0,
//               "default_branch": "master"
//             }
//           },
//           "base": {
//             "label": "nashville-software-school:master",
//             "ref": "master",
//             "sha": "8e4d369543f6f2be33c8fbad0e17f154ff947633",
//             "user": {
//               "login": "nashville-software-school",
//               "id": 12634274,
//               "node_id": "MDEyOk9yZ2FuaXphdGlvbjEyNjM0Mjc0",
//               "avatar_url": "https://avatars3.githubusercontent.com/u/12634274?v=4",
//               "gravatar_id": "",
//               "url": "https://api.github.com/users/nashville-software-school",
//               "html_url": "https://github.com/nashville-software-school",
//               "followers_url": "https://api.github.com/users/nashville-software-school/followers",
//               "following_url": "https://api.github.com/users/nashville-software-school/following{/other_user}",
//               "gists_url": "https://api.github.com/users/nashville-software-school/gists{/gist_id}",
//               "starred_url": "https://api.github.com/users/nashville-software-school/starred{/owner}{/repo}",
//               "subscriptions_url": "https://api.github.com/users/nashville-software-school/subscriptions",
//               "organizations_url": "https://api.github.com/users/nashville-software-school/orgs",
//               "repos_url": "https://api.github.com/users/nashville-software-school/repos",
//               "events_url": "https://api.github.com/users/nashville-software-school/events{/privacy}",
//               "received_events_url": "https://api.github.com/users/nashville-software-school/received_events",
//               "type": "Organization",
//               "site_admin": false
//             },
//             "repo": {
//               "id": 74918712,
//               "node_id": "MDEwOlJlcG9zaXRvcnk3NDkxODcxMg==",
//               "name": "bangazon-llc",
//               "full_name": "nashville-software-school/bangazon-llc",
//               "owner": {
//                 "login": "nashville-software-school",
//                 "id": 12634274,
//                 "node_id": "MDEyOk9yZ2FuaXphdGlvbjEyNjM0Mjc0",
//                 "avatar_url": "https://avatars3.githubusercontent.com/u/12634274?v=4",
//                 "gravatar_id": "",
//                 "url": "https://api.github.com/users/nashville-software-school",
//                 "html_url": "https://github.com/nashville-software-school",
//                 "followers_url": "https://api.github.com/users/nashville-software-school/followers",
//                 "following_url": "https://api.github.com/users/nashville-software-school/following{/other_user}",
//                 "gists_url": "https://api.github.com/users/nashville-software-school/gists{/gist_id}",
//                 "starred_url": "https://api.github.com/users/nashville-software-school/starred{/owner}{/repo}",
//                 "subscriptions_url": "https://api.github.com/users/nashville-software-school/subscriptions",
//                 "organizations_url": "https://api.github.com/users/nashville-software-school/orgs",
//                 "repos_url": "https://api.github.com/users/nashville-software-school/repos",
//                 "events_url": "https://api.github.com/users/nashville-software-school/events{/privacy}",
//                 "received_events_url": "https://api.github.com/users/nashville-software-school/received_events",
//                 "type": "Organization",
//                 "site_admin": false
//               },
//               "private": false,
//               "html_url": "https://github.com/nashville-software-school/bangazon-llc",
//               "description": "Bangazon, LLC is an NSS subsidiary company that employs students for Python project work",
//               "fork": false,
//               "url": "https://api.github.com/repos/nashville-software-school/bangazon-llc",
//               "forks_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/forks",
//               "keys_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/keys{/key_id}",
//               "collaborators_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/collaborators{/collaborator}",
//               "teams_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/teams",
//               "hooks_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/hooks",
//               "issue_events_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/issues/events{/number}",
//               "events_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/events",
//               "assignees_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/assignees{/user}",
//               "branches_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/branches{/branch}",
//               "tags_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/tags",
//               "blobs_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/git/blobs{/sha}",
//               "git_tags_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/git/tags{/sha}",
//               "git_refs_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/git/refs{/sha}",
//               "trees_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/git/trees{/sha}",
//               "statuses_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/statuses/{sha}",
//               "languages_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/languages",
//               "stargazers_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/stargazers",
//               "contributors_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/contributors",
//               "subscribers_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/subscribers",
//               "subscription_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/subscription",
//               "commits_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/commits{/sha}",
//               "git_commits_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/git/commits{/sha}",
//               "comments_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/comments{/number}",
//               "issue_comment_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/issues/comments{/number}",
//               "contents_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/contents/{+path}",
//               "compare_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/compare/{base}...{head}",
//               "merges_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/merges",
//               "archive_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/{archive_format}{/ref}",
//               "downloads_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/downloads",
//               "issues_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/issues{/number}",
//               "pulls_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/pulls{/number}",
//               "milestones_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/milestones{/number}",
//               "notifications_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/notifications{?since,all,participating}",
//               "labels_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/labels{/name}",
//               "releases_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/releases{/id}",
//               "deployments_url": "https://api.github.com/repos/nashville-software-school/bangazon-llc/deployments",
//               "created_at": "2016-11-27T22:38:38Z",
//               "updated_at": "2018-07-23T21:09:05Z",
//               "pushed_at": "2018-07-27T20:38:59Z",
//               "git_url": "git://github.com/nashville-software-school/bangazon-llc.git",
//               "ssh_url": "git@github.com:nashville-software-school/bangazon-llc.git",
//               "clone_url": "https://github.com/nashville-software-school/bangazon-llc.git",
//               "svn_url": "https://github.com/nashville-software-school/bangazon-llc",
//               "homepage": "",
//               "size": 648,
//               "stargazers_count": 28,
//               "watchers_count": 28,
//               "language": "Python",
//               "has_issues": true,
//               "has_projects": true,
//               "has_downloads": true,
//               "has_wiki": true,
//               "has_pages": false,
//               "forks_count": 33,
//               "mirror_url": null,
//               "archived": false,
//               "open_issues_count": 3,
//               "license": null,
//               "forks": 33,
//               "open_issues": 3,
//               "watchers": 28,
//               "default_branch": "master"
//             }
//           },
//           "_links": {
//             "self": {
//               "href": "https://api.github.com/repos/nashville-software-school/bangazon-llc/pulls/22"
//             },
//             "html": {
//               "href": "https://github.com/nashville-software-school/bangazon-llc/pull/22"
//             },
//             "issue": {
//               "href": "https://api.github.com/repos/nashville-software-school/bangazon-llc/issues/22"
//             },
//             "comments": {
//               "href": "https://api.github.com/repos/nashville-software-school/bangazon-llc/issues/22/comments"
//             },
//             "review_comments": {
//               "href": "https://api.github.com/repos/nashville-software-school/bangazon-llc/pulls/22/comments"
//             },
//             "review_comment": {
//               "href": "https://api.github.com/repos/nashville-software-school/bangazon-llc/pulls/comments{/number}"
//             },
//             "commits": {
//               "href": "https://api.github.com/repos/nashville-software-school/bangazon-llc/pulls/22/commits"
//             },
//             "statuses": {
//               "href": "https://api.github.com/repos/nashville-software-school/bangazon-llc/statuses/df77cd3f0e13f851872b64758778ffffe5cc2119"
//             }
//           },
//           "author_association": "CONTRIBUTOR",
//           "merged": true,
//           "mergeable": null,
//           "rebaseable": null,
//           "mergeable_state": "unknown",
//           "merged_by": {
//             "login": "stevebrownlee",
//             "id": 218592,
//             "node_id": "MDQ6VXNlcjIxODU5Mg==",
//             "avatar_url": "https://avatars3.githubusercontent.com/u/218592?v=4",
//             "gravatar_id": "",
//             "url": "https://api.github.com/users/stevebrownlee",
//             "html_url": "https://github.com/stevebrownlee",
//             "followers_url": "https://api.github.com/users/stevebrownlee/followers",
//             "following_url": "https://api.github.com/users/stevebrownlee/following{/other_user}",
//             "gists_url": "https://api.github.com/users/stevebrownlee/gists{/gist_id}",
//             "starred_url": "https://api.github.com/users/stevebrownlee/starred{/owner}{/repo}",
//             "subscriptions_url": "https://api.github.com/users/stevebrownlee/subscriptions",
//             "organizations_url": "https://api.github.com/users/stevebrownlee/orgs",
//             "repos_url": "https://api.github.com/users/stevebrownlee/repos",
//             "events_url": "https://api.github.com/users/stevebrownlee/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/stevebrownlee/received_events",
//             "type": "User",
//             "site_admin": false
//           },
//           "comments": 0,
//           "review_comments": 0,
//           "maintainer_can_modify": false,
//           "commits": 1,
//           "additions": 1,
//           "deletions": 1,
//           "changed_files": 1
//         }
//       },
//       "public": true,
//       "created_at": "2018-07-27T20:38:59Z",
//       "org": {
//         "id": 12634274,
//         "login": "nashville-software-school",
//         "gravatar_id": "",
//         "url": "https://api.github.com/orgs/nashville-software-school",
//         "avatar_url": "https://avatars.githubusercontent.com/u/12634274?"
//       }
//     },
//     {
//       "id": "8030403992",
//       "type": "PushEvent",
//       "actor": {
//         "id": 218592,
//         "login": "stevebrownlee",
//         "display_login": "stevebrownlee",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stevebrownlee",
//         "avatar_url": "https://avatars.githubusercontent.com/u/218592?"
//       },
//       "repo": {
//         "id": 46649815,
//         "name": "stevebrownlee/vps-setup",
//         "url": "https://api.github.com/repos/stevebrownlee/vps-setup"
//       },
//       "payload": {
//         "push_id": 2753553675,
//         "size": 1,
//         "distinct_size": 1,
//         "ref": "refs/heads/master",
//         "head": "e15cd75fcba0a77ee6fc8afc7376b226f4dc4645",
//         "before": "9635e8e362802c3022b815bbeca90b75f5c328a3",
//         "commits": [
//           {
//             "sha": "e15cd75fcba0a77ee6fc8afc7376b226f4dc4645",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Added clarification for where to clone static site",
//             "distinct": true,
//             "url": "https://api.github.com/repos/stevebrownlee/vps-setup/commits/e15cd75fcba0a77ee6fc8afc7376b226f4dc4645"
//           }
//         ]
//       },
//       "public": true,
//       "created_at": "2018-07-27T19:29:57Z"
//     },
//     {
//       "id": "8029291367",
//       "type": "DeleteEvent",
//       "actor": {
//         "id": 218592,
//         "login": "stevebrownlee",
//         "display_login": "stevebrownlee",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stevebrownlee",
//         "avatar_url": "https://avatars.githubusercontent.com/u/218592?"
//       },
//       "repo": {
//         "id": 101137613,
//         "name": "nashville-software-school/client-side-mastery",
//         "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery"
//       },
//       "payload": {
//         "ref": "md-lsandevtlsnr",
//         "ref_type": "branch",
//         "pusher_type": "user"
//       },
//       "public": true,
//       "created_at": "2018-07-27T15:31:57Z",
//       "org": {
//         "id": 12634274,
//         "login": "nashville-software-school",
//         "gravatar_id": "",
//         "url": "https://api.github.com/orgs/nashville-software-school",
//         "avatar_url": "https://avatars.githubusercontent.com/u/12634274?"
//       }
//     },
//     {
//       "id": "8029291161",
//       "type": "PushEvent",
//       "actor": {
//         "id": 218592,
//         "login": "stevebrownlee",
//         "display_login": "stevebrownlee",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stevebrownlee",
//         "avatar_url": "https://avatars.githubusercontent.com/u/218592?"
//       },
//       "repo": {
//         "id": 101137613,
//         "name": "nashville-software-school/client-side-mastery",
//         "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery"
//       },
//       "payload": {
//         "push_id": 2752970347,
//         "size": 4,
//         "distinct_size": 1,
//         "ref": "refs/heads/master",
//         "head": "a6dad0c8abee3935094579e8d84292413b346f33",
//         "before": "f073ec5248b822db1246eebbb4d414bee539003f",
//         "commits": [
//           {
//             "sha": "4005df992d254492566ceea46a096764d622eaa2",
//             "author": {
//               "email": "ducharme.meg@gmail.com",
//               "name": "Meg Ducharme"
//             },
//             "message": "changed the order of the challenges - I think dynamic cards is more important than drag and drop. Also added some clarification to event listener instructions. Students are still confused.",
//             "distinct": false,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/4005df992d254492566ceea46a096764d622eaa2"
//           },
//           {
//             "sha": "5327a88990283fc092fcde7c921760d99e7f5718",
//             "author": {
//               "email": "ducharme.meg@gmail.com",
//               "name": "Meg Ducharme"
//             },
//             "message": "added 'one step further' part to the event listener practic (not quite a challenge)",
//             "distinct": false,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/5327a88990283fc092fcde7c921760d99e7f5718"
//           },
//           {
//             "sha": "227f067aeba15b0ec98c5ff1beba2478d7569195",
//             "author": {
//               "email": "ducharme.meg@gmail.com",
//               "name": "Meg Ducharme"
//             },
//             "message": "removed generator function from browserify chapter",
//             "distinct": false,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/227f067aeba15b0ec98c5ff1beba2478d7569195"
//           },
//           {
//             "sha": "a6dad0c8abee3935094579e8d84292413b346f33",
//             "author": {
//               "email": "stevebrownlee@users.noreply.github.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Merge pull request #32 from nashville-software-school/md-lsandevtlsnr\n\nChanged the order of Challenges for Event Listeners",
//             "distinct": true,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/a6dad0c8abee3935094579e8d84292413b346f33"
//           }
//         ]
//       },
//       "public": true,
//       "created_at": "2018-07-27T15:31:55Z",
//       "org": {
//         "id": 12634274,
//         "login": "nashville-software-school",
//         "gravatar_id": "",
//         "url": "https://api.github.com/orgs/nashville-software-school",
//         "avatar_url": "https://avatars.githubusercontent.com/u/12634274?"
//       }
//     },
//     {
//       "id": "8029291123",
//       "type": "PullRequestEvent",
//       "actor": {
//         "id": 218592,
//         "login": "stevebrownlee",
//         "display_login": "stevebrownlee",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stevebrownlee",
//         "avatar_url": "https://avatars.githubusercontent.com/u/218592?"
//       },
//       "repo": {
//         "id": 101137613,
//         "name": "nashville-software-school/client-side-mastery",
//         "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery"
//       },
//       "payload": {
//         "action": "closed",
//         "number": 32,
//         "pull_request": {
//           "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/32",
//           "id": 204417028,
//           "node_id": "MDExOlB1bGxSZXF1ZXN0MjA0NDE3MDI4",
//           "html_url": "https://github.com/nashville-software-school/client-side-mastery/pull/32",
//           "diff_url": "https://github.com/nashville-software-school/client-side-mastery/pull/32.diff",
//           "patch_url": "https://github.com/nashville-software-school/client-side-mastery/pull/32.patch",
//           "issue_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/32",
//           "number": 32,
//           "state": "closed",
//           "locked": false,
//           "title": "Changed the order of Challenges for Event Listeners ",
//           "user": {
//             "login": "megducharme",
//             "id": 20306210,
//             "node_id": "MDQ6VXNlcjIwMzA2MjEw",
//             "avatar_url": "https://avatars3.githubusercontent.com/u/20306210?v=4",
//             "gravatar_id": "",
//             "url": "https://api.github.com/users/megducharme",
//             "html_url": "https://github.com/megducharme",
//             "followers_url": "https://api.github.com/users/megducharme/followers",
//             "following_url": "https://api.github.com/users/megducharme/following{/other_user}",
//             "gists_url": "https://api.github.com/users/megducharme/gists{/gist_id}",
//             "starred_url": "https://api.github.com/users/megducharme/starred{/owner}{/repo}",
//             "subscriptions_url": "https://api.github.com/users/megducharme/subscriptions",
//             "organizations_url": "https://api.github.com/users/megducharme/orgs",
//             "repos_url": "https://api.github.com/users/megducharme/repos",
//             "events_url": "https://api.github.com/users/megducharme/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/megducharme/received_events",
//             "type": "User",
//             "site_admin": false
//           },
//           "body": "I think dynamic cards is something they will see more than drag and drop. The students who have asked me about drag and drop should have an understanding of how event listeners work in dynamic cards first (in my opinion). ",
//           "created_at": "2018-07-27T12:26:20Z",
//           "updated_at": "2018-07-27T15:31:54Z",
//           "closed_at": "2018-07-27T15:31:54Z",
//           "merged_at": "2018-07-27T15:31:54Z",
//           "merge_commit_sha": "a6dad0c8abee3935094579e8d84292413b346f33",
//           "assignee": null,
//           "assignees": [

//           ],
//           "requested_reviewers": [

//           ],
//           "requested_teams": [

//           ],
//           "labels": [

//           ],
//           "milestone": null,
//           "commits_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/32/commits",
//           "review_comments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/32/comments",
//           "review_comment_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/comments{/number}",
//           "comments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/32/comments",
//           "statuses_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/statuses/227f067aeba15b0ec98c5ff1beba2478d7569195",
//           "head": {
//             "label": "nashville-software-school:md-lsandevtlsnr",
//             "ref": "md-lsandevtlsnr",
//             "sha": "227f067aeba15b0ec98c5ff1beba2478d7569195",
//             "user": {
//               "login": "nashville-software-school",
//               "id": 12634274,
//               "node_id": "MDEyOk9yZ2FuaXphdGlvbjEyNjM0Mjc0",
//               "avatar_url": "https://avatars3.githubusercontent.com/u/12634274?v=4",
//               "gravatar_id": "",
//               "url": "https://api.github.com/users/nashville-software-school",
//               "html_url": "https://github.com/nashville-software-school",
//               "followers_url": "https://api.github.com/users/nashville-software-school/followers",
//               "following_url": "https://api.github.com/users/nashville-software-school/following{/other_user}",
//               "gists_url": "https://api.github.com/users/nashville-software-school/gists{/gist_id}",
//               "starred_url": "https://api.github.com/users/nashville-software-school/starred{/owner}{/repo}",
//               "subscriptions_url": "https://api.github.com/users/nashville-software-school/subscriptions",
//               "organizations_url": "https://api.github.com/users/nashville-software-school/orgs",
//               "repos_url": "https://api.github.com/users/nashville-software-school/repos",
//               "events_url": "https://api.github.com/users/nashville-software-school/events{/privacy}",
//               "received_events_url": "https://api.github.com/users/nashville-software-school/received_events",
//               "type": "Organization",
//               "site_admin": false
//             },
//             "repo": {
//               "id": 101137613,
//               "node_id": "MDEwOlJlcG9zaXRvcnkxMDExMzc2MTM=",
//               "name": "client-side-mastery",
//               "full_name": "nashville-software-school/client-side-mastery",
//               "owner": {
//                 "login": "nashville-software-school",
//                 "id": 12634274,
//                 "node_id": "MDEyOk9yZ2FuaXphdGlvbjEyNjM0Mjc0",
//                 "avatar_url": "https://avatars3.githubusercontent.com/u/12634274?v=4",
//                 "gravatar_id": "",
//                 "url": "https://api.github.com/users/nashville-software-school",
//                 "html_url": "https://github.com/nashville-software-school",
//                 "followers_url": "https://api.github.com/users/nashville-software-school/followers",
//                 "following_url": "https://api.github.com/users/nashville-software-school/following{/other_user}",
//                 "gists_url": "https://api.github.com/users/nashville-software-school/gists{/gist_id}",
//                 "starred_url": "https://api.github.com/users/nashville-software-school/starred{/owner}{/repo}",
//                 "subscriptions_url": "https://api.github.com/users/nashville-software-school/subscriptions",
//                 "organizations_url": "https://api.github.com/users/nashville-software-school/orgs",
//                 "repos_url": "https://api.github.com/users/nashville-software-school/repos",
//                 "events_url": "https://api.github.com/users/nashville-software-school/events{/privacy}",
//                 "received_events_url": "https://api.github.com/users/nashville-software-school/received_events",
//                 "type": "Organization",
//                 "site_admin": false
//               },
//               "private": false,
//               "html_url": "https://github.com/nashville-software-school/client-side-mastery",
//               "description": "Client side technology course for Nashville Software School",
//               "fork": false,
//               "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery",
//               "forks_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/forks",
//               "keys_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/keys{/key_id}",
//               "collaborators_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/collaborators{/collaborator}",
//               "teams_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/teams",
//               "hooks_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/hooks",
//               "issue_events_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/events{/number}",
//               "events_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/events",
//               "assignees_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/assignees{/user}",
//               "branches_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/branches{/branch}",
//               "tags_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/tags",
//               "blobs_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/blobs{/sha}",
//               "git_tags_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/tags{/sha}",
//               "git_refs_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/refs{/sha}",
//               "trees_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/trees{/sha}",
//               "statuses_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/statuses/{sha}",
//               "languages_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/languages",
//               "stargazers_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/stargazers",
//               "contributors_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/contributors",
//               "subscribers_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/subscribers",
//               "subscription_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/subscription",
//               "commits_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits{/sha}",
//               "git_commits_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/commits{/sha}",
//               "comments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/comments{/number}",
//               "issue_comment_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/comments{/number}",
//               "contents_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/contents/{+path}",
//               "compare_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/compare/{base}...{head}",
//               "merges_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/merges",
//               "archive_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/{archive_format}{/ref}",
//               "downloads_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/downloads",
//               "issues_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues{/number}",
//               "pulls_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls{/number}",
//               "milestones_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/milestones{/number}",
//               "notifications_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/notifications{?since,all,participating}",
//               "labels_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/labels{/name}",
//               "releases_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/releases{/id}",
//               "deployments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/deployments",
//               "created_at": "2017-08-23T04:27:07Z",
//               "updated_at": "2018-07-26T23:13:55Z",
//               "pushed_at": "2018-07-27T15:31:54Z",
//               "git_url": "git://github.com/nashville-software-school/client-side-mastery.git",
//               "ssh_url": "git@github.com:nashville-software-school/client-side-mastery.git",
//               "clone_url": "https://github.com/nashville-software-school/client-side-mastery.git",
//               "svn_url": "https://github.com/nashville-software-school/client-side-mastery",
//               "homepage": "",
//               "size": 53825,
//               "stargazers_count": 38,
//               "watchers_count": 38,
//               "language": "JavaScript",
//               "has_issues": true,
//               "has_projects": true,
//               "has_downloads": true,
//               "has_wiki": true,
//               "has_pages": false,
//               "forks_count": 29,
//               "mirror_url": null,
//               "archived": false,
//               "open_issues_count": 2,
//               "license": {
//                 "key": "apache-2.0",
//                 "name": "Apache License 2.0",
//                 "spdx_id": "Apache-2.0",
//                 "url": "https://api.github.com/licenses/apache-2.0",
//                 "node_id": "MDc6TGljZW5zZTI="
//               },
//               "forks": 29,
//               "open_issues": 2,
//               "watchers": 38,
//               "default_branch": "master"
//             }
//           },
//           "base": {
//             "label": "nashville-software-school:master",
//             "ref": "master",
//             "sha": "f073ec5248b822db1246eebbb4d414bee539003f",
//             "user": {
//               "login": "nashville-software-school",
//               "id": 12634274,
//               "node_id": "MDEyOk9yZ2FuaXphdGlvbjEyNjM0Mjc0",
//               "avatar_url": "https://avatars3.githubusercontent.com/u/12634274?v=4",
//               "gravatar_id": "",
//               "url": "https://api.github.com/users/nashville-software-school",
//               "html_url": "https://github.com/nashville-software-school",
//               "followers_url": "https://api.github.com/users/nashville-software-school/followers",
//               "following_url": "https://api.github.com/users/nashville-software-school/following{/other_user}",
//               "gists_url": "https://api.github.com/users/nashville-software-school/gists{/gist_id}",
//               "starred_url": "https://api.github.com/users/nashville-software-school/starred{/owner}{/repo}",
//               "subscriptions_url": "https://api.github.com/users/nashville-software-school/subscriptions",
//               "organizations_url": "https://api.github.com/users/nashville-software-school/orgs",
//               "repos_url": "https://api.github.com/users/nashville-software-school/repos",
//               "events_url": "https://api.github.com/users/nashville-software-school/events{/privacy}",
//               "received_events_url": "https://api.github.com/users/nashville-software-school/received_events",
//               "type": "Organization",
//               "site_admin": false
//             },
//             "repo": {
//               "id": 101137613,
//               "node_id": "MDEwOlJlcG9zaXRvcnkxMDExMzc2MTM=",
//               "name": "client-side-mastery",
//               "full_name": "nashville-software-school/client-side-mastery",
//               "owner": {
//                 "login": "nashville-software-school",
//                 "id": 12634274,
//                 "node_id": "MDEyOk9yZ2FuaXphdGlvbjEyNjM0Mjc0",
//                 "avatar_url": "https://avatars3.githubusercontent.com/u/12634274?v=4",
//                 "gravatar_id": "",
//                 "url": "https://api.github.com/users/nashville-software-school",
//                 "html_url": "https://github.com/nashville-software-school",
//                 "followers_url": "https://api.github.com/users/nashville-software-school/followers",
//                 "following_url": "https://api.github.com/users/nashville-software-school/following{/other_user}",
//                 "gists_url": "https://api.github.com/users/nashville-software-school/gists{/gist_id}",
//                 "starred_url": "https://api.github.com/users/nashville-software-school/starred{/owner}{/repo}",
//                 "subscriptions_url": "https://api.github.com/users/nashville-software-school/subscriptions",
//                 "organizations_url": "https://api.github.com/users/nashville-software-school/orgs",
//                 "repos_url": "https://api.github.com/users/nashville-software-school/repos",
//                 "events_url": "https://api.github.com/users/nashville-software-school/events{/privacy}",
//                 "received_events_url": "https://api.github.com/users/nashville-software-school/received_events",
//                 "type": "Organization",
//                 "site_admin": false
//               },
//               "private": false,
//               "html_url": "https://github.com/nashville-software-school/client-side-mastery",
//               "description": "Client side technology course for Nashville Software School",
//               "fork": false,
//               "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery",
//               "forks_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/forks",
//               "keys_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/keys{/key_id}",
//               "collaborators_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/collaborators{/collaborator}",
//               "teams_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/teams",
//               "hooks_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/hooks",
//               "issue_events_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/events{/number}",
//               "events_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/events",
//               "assignees_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/assignees{/user}",
//               "branches_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/branches{/branch}",
//               "tags_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/tags",
//               "blobs_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/blobs{/sha}",
//               "git_tags_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/tags{/sha}",
//               "git_refs_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/refs{/sha}",
//               "trees_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/trees{/sha}",
//               "statuses_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/statuses/{sha}",
//               "languages_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/languages",
//               "stargazers_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/stargazers",
//               "contributors_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/contributors",
//               "subscribers_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/subscribers",
//               "subscription_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/subscription",
//               "commits_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits{/sha}",
//               "git_commits_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/commits{/sha}",
//               "comments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/comments{/number}",
//               "issue_comment_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/comments{/number}",
//               "contents_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/contents/{+path}",
//               "compare_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/compare/{base}...{head}",
//               "merges_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/merges",
//               "archive_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/{archive_format}{/ref}",
//               "downloads_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/downloads",
//               "issues_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues{/number}",
//               "pulls_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls{/number}",
//               "milestones_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/milestones{/number}",
//               "notifications_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/notifications{?since,all,participating}",
//               "labels_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/labels{/name}",
//               "releases_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/releases{/id}",
//               "deployments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/deployments",
//               "created_at": "2017-08-23T04:27:07Z",
//               "updated_at": "2018-07-26T23:13:55Z",
//               "pushed_at": "2018-07-27T15:31:54Z",
//               "git_url": "git://github.com/nashville-software-school/client-side-mastery.git",
//               "ssh_url": "git@github.com:nashville-software-school/client-side-mastery.git",
//               "clone_url": "https://github.com/nashville-software-school/client-side-mastery.git",
//               "svn_url": "https://github.com/nashville-software-school/client-side-mastery",
//               "homepage": "",
//               "size": 53825,
//               "stargazers_count": 38,
//               "watchers_count": 38,
//               "language": "JavaScript",
//               "has_issues": true,
//               "has_projects": true,
//               "has_downloads": true,
//               "has_wiki": true,
//               "has_pages": false,
//               "forks_count": 29,
//               "mirror_url": null,
//               "archived": false,
//               "open_issues_count": 2,
//               "license": {
//                 "key": "apache-2.0",
//                 "name": "Apache License 2.0",
//                 "spdx_id": "Apache-2.0",
//                 "url": "https://api.github.com/licenses/apache-2.0",
//                 "node_id": "MDc6TGljZW5zZTI="
//               },
//               "forks": 29,
//               "open_issues": 2,
//               "watchers": 38,
//               "default_branch": "master"
//             }
//           },
//           "_links": {
//             "self": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/32"
//             },
//             "html": {
//               "href": "https://github.com/nashville-software-school/client-side-mastery/pull/32"
//             },
//             "issue": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/32"
//             },
//             "comments": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/32/comments"
//             },
//             "review_comments": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/32/comments"
//             },
//             "review_comment": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/comments{/number}"
//             },
//             "commits": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/32/commits"
//             },
//             "statuses": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/statuses/227f067aeba15b0ec98c5ff1beba2478d7569195"
//             }
//           },
//           "author_association": "CONTRIBUTOR",
//           "merged": true,
//           "mergeable": null,
//           "rebaseable": null,
//           "mergeable_state": "unknown",
//           "merged_by": {
//             "login": "stevebrownlee",
//             "id": 218592,
//             "node_id": "MDQ6VXNlcjIxODU5Mg==",
//             "avatar_url": "https://avatars3.githubusercontent.com/u/218592?v=4",
//             "gravatar_id": "",
//             "url": "https://api.github.com/users/stevebrownlee",
//             "html_url": "https://github.com/stevebrownlee",
//             "followers_url": "https://api.github.com/users/stevebrownlee/followers",
//             "following_url": "https://api.github.com/users/stevebrownlee/following{/other_user}",
//             "gists_url": "https://api.github.com/users/stevebrownlee/gists{/gist_id}",
//             "starred_url": "https://api.github.com/users/stevebrownlee/starred{/owner}{/repo}",
//             "subscriptions_url": "https://api.github.com/users/stevebrownlee/subscriptions",
//             "organizations_url": "https://api.github.com/users/stevebrownlee/orgs",
//             "repos_url": "https://api.github.com/users/stevebrownlee/repos",
//             "events_url": "https://api.github.com/users/stevebrownlee/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/stevebrownlee/received_events",
//             "type": "User",
//             "site_admin": false
//           },
//           "comments": 2,
//           "review_comments": 0,
//           "maintainer_can_modify": false,
//           "commits": 3,
//           "additions": 19,
//           "deletions": 29,
//           "changed_files": 2
//         }
//       },
//       "public": true,
//       "created_at": "2018-07-27T15:31:54Z",
//       "org": {
//         "id": 12634274,
//         "login": "nashville-software-school",
//         "gravatar_id": "",
//         "url": "https://api.github.com/orgs/nashville-software-school",
//         "avatar_url": "https://avatars.githubusercontent.com/u/12634274?"
//       }
//     },
//     {
//       "id": "8028941716",
//       "type": "IssueCommentEvent",
//       "actor": {
//         "id": 218592,
//         "login": "stevebrownlee",
//         "display_login": "stevebrownlee",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stevebrownlee",
//         "avatar_url": "https://avatars.githubusercontent.com/u/218592?"
//       },
//       "repo": {
//         "id": 101137613,
//         "name": "nashville-software-school/client-side-mastery",
//         "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery"
//       },
//       "payload": {
//         "action": "created",
//         "issue": {
//           "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/32",
//           "repository_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery",
//           "labels_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/32/labels{/name}",
//           "comments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/32/comments",
//           "events_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/32/events",
//           "html_url": "https://github.com/nashville-software-school/client-side-mastery/pull/32",
//           "id": 345207022,
//           "node_id": "MDExOlB1bGxSZXF1ZXN0MjA0NDE3MDI4",
//           "number": 32,
//           "title": "Changed the order of Challenges for Event Listeners ",
//           "user": {
//             "login": "megducharme",
//             "id": 20306210,
//             "node_id": "MDQ6VXNlcjIwMzA2MjEw",
//             "avatar_url": "https://avatars3.githubusercontent.com/u/20306210?v=4",
//             "gravatar_id": "",
//             "url": "https://api.github.com/users/megducharme",
//             "html_url": "https://github.com/megducharme",
//             "followers_url": "https://api.github.com/users/megducharme/followers",
//             "following_url": "https://api.github.com/users/megducharme/following{/other_user}",
//             "gists_url": "https://api.github.com/users/megducharme/gists{/gist_id}",
//             "starred_url": "https://api.github.com/users/megducharme/starred{/owner}{/repo}",
//             "subscriptions_url": "https://api.github.com/users/megducharme/subscriptions",
//             "organizations_url": "https://api.github.com/users/megducharme/orgs",
//             "repos_url": "https://api.github.com/users/megducharme/repos",
//             "events_url": "https://api.github.com/users/megducharme/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/megducharme/received_events",
//             "type": "User",
//             "site_admin": false
//           },
//           "labels": [

//           ],
//           "state": "open",
//           "locked": false,
//           "assignee": null,
//           "assignees": [

//           ],
//           "milestone": null,
//           "comments": 1,
//           "created_at": "2018-07-27T12:26:20Z",
//           "updated_at": "2018-07-27T14:30:37Z",
//           "closed_at": null,
//           "author_association": "CONTRIBUTOR",
//           "pull_request": {
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/32",
//             "html_url": "https://github.com/nashville-software-school/client-side-mastery/pull/32",
//             "diff_url": "https://github.com/nashville-software-school/client-side-mastery/pull/32.diff",
//             "patch_url": "https://github.com/nashville-software-school/client-side-mastery/pull/32.patch"
//           },
//           "body": "I think dynamic cards is something they will see more than drag and drop. The students who have asked me about drag and drop should have an understanding of how event listeners work in dynamic cards first (in my opinion). "
//         },
//         "comment": {
//           "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/comments/408436032",
//           "html_url": "https://github.com/nashville-software-school/client-side-mastery/pull/32#issuecomment-408436032",
//           "issue_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/32",
//           "id": 408436032,
//           "node_id": "MDEyOklzc3VlQ29tbWVudDQwODQzNjAzMg==",
//           "user": {
//             "login": "stevebrownlee",
//             "id": 218592,
//             "node_id": "MDQ6VXNlcjIxODU5Mg==",
//             "avatar_url": "https://avatars3.githubusercontent.com/u/218592?v=4",
//             "gravatar_id": "",
//             "url": "https://api.github.com/users/stevebrownlee",
//             "html_url": "https://github.com/stevebrownlee",
//             "followers_url": "https://api.github.com/users/stevebrownlee/followers",
//             "following_url": "https://api.github.com/users/stevebrownlee/following{/other_user}",
//             "gists_url": "https://api.github.com/users/stevebrownlee/gists{/gist_id}",
//             "starred_url": "https://api.github.com/users/stevebrownlee/starred{/owner}{/repo}",
//             "subscriptions_url": "https://api.github.com/users/stevebrownlee/subscriptions",
//             "organizations_url": "https://api.github.com/users/stevebrownlee/orgs",
//             "repos_url": "https://api.github.com/users/stevebrownlee/repos",
//             "events_url": "https://api.github.com/users/stevebrownlee/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/stevebrownlee/received_events",
//             "type": "User",
//             "site_admin": false
//           },
//           "created_at": "2018-07-27T14:30:37Z",
//           "updated_at": "2018-07-27T14:30:37Z",
//           "author_association": "CONTRIBUTOR",
//           "body": "@megducharme 👍 \r\n\r\nAlso, I'm willing to entertain any new challenges in the course. Take a shot at writing one."
//         }
//       },
//       "public": true,
//       "created_at": "2018-07-27T14:30:37Z",
//       "org": {
//         "id": 12634274,
//         "login": "nashville-software-school",
//         "gravatar_id": "",
//         "url": "https://api.github.com/orgs/nashville-software-school",
//         "avatar_url": "https://avatars.githubusercontent.com/u/12634274?"
//       }
//     },
//     {
//       "id": "8028861359",
//       "type": "PushEvent",
//       "actor": {
//         "id": 218592,
//         "login": "stevebrownlee",
//         "display_login": "stevebrownlee",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stevebrownlee",
//         "avatar_url": "https://avatars.githubusercontent.com/u/218592?"
//       },
//       "repo": {
//         "id": 101137613,
//         "name": "nashville-software-school/client-side-mastery",
//         "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery"
//       },
//       "payload": {
//         "push_id": 2752752963,
//         "size": 1,
//         "distinct_size": 1,
//         "ref": "refs/heads/treehouse-profile",
//         "head": "e332c912c053582024a90e4d6e5950898253b92d",
//         "before": "783865dc453f27606906d72d498399a8677b57ed",
//         "commits": [
//           {
//             "sha": "e332c912c053582024a90e4d6e5950898253b92d",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Added add() and remove() examples for .classList property",
//             "distinct": true,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/e332c912c053582024a90e4d6e5950898253b92d"
//           }
//         ]
//       },
//       "public": true,
//       "created_at": "2018-07-27T14:16:21Z",
//       "org": {
//         "id": 12634274,
//         "login": "nashville-software-school",
//         "gravatar_id": "",
//         "url": "https://api.github.com/orgs/nashville-software-school",
//         "avatar_url": "https://avatars.githubusercontent.com/u/12634274?"
//       }
//     },
//     {
//       "id": "8026264881",
//       "type": "CreateEvent",
//       "actor": {
//         "id": 218592,
//         "login": "stevebrownlee",
//         "display_login": "stevebrownlee",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stevebrownlee",
//         "avatar_url": "https://avatars.githubusercontent.com/u/218592?"
//       },
//       "repo": {
//         "id": 101137613,
//         "name": "nashville-software-school/client-side-mastery",
//         "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery"
//       },
//       "payload": {
//         "ref": "treehouse-profile",
//         "ref_type": "branch",
//         "master_branch": "master",
//         "description": "Client side technology course for Nashville Software School",
//         "pusher_type": "user"
//       },
//       "public": true,
//       "created_at": "2018-07-27T02:53:45Z",
//       "org": {
//         "id": 12634274,
//         "login": "nashville-software-school",
//         "gravatar_id": "",
//         "url": "https://api.github.com/orgs/nashville-software-school",
//         "avatar_url": "https://avatars.githubusercontent.com/u/12634274?"
//       }
//     },
//     {
//       "id": "8025509029",
//       "type": "DeleteEvent",
//       "actor": {
//         "id": 218592,
//         "login": "stevebrownlee",
//         "display_login": "stevebrownlee",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stevebrownlee",
//         "avatar_url": "https://avatars.githubusercontent.com/u/218592?"
//       },
//       "repo": {
//         "id": 101137613,
//         "name": "nashville-software-school/client-side-mastery",
//         "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery"
//       },
//       "payload": {
//         "ref": "reorder-react",
//         "ref_type": "branch",
//         "pusher_type": "user"
//       },
//       "public": true,
//       "created_at": "2018-07-26T22:15:47Z",
//       "org": {
//         "id": 12634274,
//         "login": "nashville-software-school",
//         "gravatar_id": "",
//         "url": "https://api.github.com/orgs/nashville-software-school",
//         "avatar_url": "https://avatars.githubusercontent.com/u/12634274?"
//       }
//     },
//     {
//       "id": "8025508848",
//       "type": "PushEvent",
//       "actor": {
//         "id": 218592,
//         "login": "stevebrownlee",
//         "display_login": "stevebrownlee",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stevebrownlee",
//         "avatar_url": "https://avatars.githubusercontent.com/u/218592?"
//       },
//       "repo": {
//         "id": 101137613,
//         "name": "nashville-software-school/client-side-mastery",
//         "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery"
//       },
//       "payload": {
//         "push_id": 2751003543,
//         "size": 18,
//         "distinct_size": 1,
//         "ref": "refs/heads/master",
//         "head": "f073ec5248b822db1246eebbb4d414bee539003f",
//         "before": "da47b43653eef420c7ca1c45c9776952010abe7a",
//         "commits": [
//           {
//             "sha": "99a9651d35e433d7739c4e5283582efd337b3b1c",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Moved functions as props and intro to fetch before dynamic routing",
//             "distinct": false,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/99a9651d35e433d7739c4e5283582efd337b3b1c"
//           },
//           {
//             "sha": "d293eee89a79f60e891626fa952be514eef86d74",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Modified content so that the code followed the flow of the new order",
//             "distinct": false,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/d293eee89a79f60e891626fa952be514eef86d74"
//           },
//           {
//             "sha": "8580a57b2bed2ffd64ad95b390f3b1d12a12fd8f",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Modified the first practice exercise. Added new one.",
//             "distinct": false,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/8580a57b2bed2ffd64ad95b390f3b1d12a12fd8f"
//           },
//           {
//             "sha": "b2e54108ca1e086d6adae97f53a4d4c3907fd58e",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Rewrite",
//             "distinct": false,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/b2e54108ca1e086d6adae97f53a4d4c3907fd58e"
//           },
//           {
//             "sha": "5bdbf7a3c19a06f581025fb550ca878bd4cfa4c9",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Rewrite up to chapter 5",
//             "distinct": false,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/5bdbf7a3c19a06f581025fb550ca878bd4cfa4c9"
//           },
//           {
//             "sha": "9e5354b01889f41f9b6c445b670261643f126193",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Rewrote function reference chapter for DELETE",
//             "distinct": false,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/9e5354b01889f41f9b6c445b670261643f126193"
//           },
//           {
//             "sha": "213720158122dccc09d6f09169ab8fdf00edc005",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Modules for interacting with the API.",
//             "distinct": false,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/213720158122dccc09d6f09169ab8fdf00edc005"
//           },
//           {
//             "sha": "80eadd209df4d6a24c2ec72d389f85c7705d31f9",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Modules for interacting with the API.",
//             "distinct": false,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/80eadd209df4d6a24c2ec72d389f85c7705d31f9"
//           },
//           {
//             "sha": "86fb166ffa26be8fe9e07a94f74f1c7907252995",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Content and animated GIF for dynamic routing for animals",
//             "distinct": false,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/86fb166ffa26be8fe9e07a94f74f1c7907252995"
//           },
//           {
//             "sha": "fe42f6ab110fd96fb3789731d8575b694aa2a35c",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Added content for React Forms chapter to add an animal",
//             "distinct": false,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/fe42f6ab110fd96fb3789731d8575b694aa2a35c"
//           },
//           {
//             "sha": "e55b48670077a4e86fbce24488631e1fb4aa2f7b",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Updated conditional rendering chapter",
//             "distinct": false,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/e55b48670077a4e86fbce24488631e1fb4aa2f7b"
//           },
//           {
//             "sha": "e5b6918e4961b01c05483d049bb638c2987fafd4",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "New reusability chapter. Generic components now supplementary chapter.",
//             "distinct": false,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/e5b6918e4961b01c05483d049bb638c2987fafd4"
//           },
//           {
//             "sha": "a61af337179511857e38734524de79303323e3e9",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Updated contents based on feedback from Kimmy",
//             "distinct": false,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/a61af337179511857e38734524de79303323e3e9"
//           },
//           {
//             "sha": "16d01c3ab4dd34f89709d8f4b4b33bc494e962f8",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "More fixes via Kimmy",
//             "distinct": false,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/16d01c3ab4dd34f89709d8f4b4b33bc494e962f8"
//           },
//           {
//             "sha": "e7a2263cb31dcaa79a03552be95a075171823bca",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Line breaks for greater legibility",
//             "distinct": false,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/e7a2263cb31dcaa79a03552be95a075171823bca"
//           },
//           {
//             "sha": "0b5765d665153c8a8b72861c2e39654d1638c629",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Moved all resources to appendix document. Moved lifecycle graphic to API chapter",
//             "distinct": false,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/0b5765d665153c8a8b72861c2e39654d1638c629"
//           },
//           {
//             "sha": "47cec12e971076a1ec9330abf03600d5d4a08d64",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Definition and export separated intially\nBased on feedback from Brenda, definition and export are split into separate statements for the first few chapters. In the loading from API chapter, I combined the two.",
//             "distinct": false,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/47cec12e971076a1ec9330abf03600d5d4a08d64"
//           },
//           {
//             "sha": "f073ec5248b822db1246eebbb4d414bee539003f",
//             "author": {
//               "email": "stevebrownlee@users.noreply.github.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Merge pull request #24 from nashville-software-school/reorder-react\n\nReorder React",
//             "distinct": true,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/f073ec5248b822db1246eebbb4d414bee539003f"
//           }
//         ]
//       },
//       "public": true,
//       "created_at": "2018-07-26T22:15:44Z",
//       "org": {
//         "id": 12634274,
//         "login": "nashville-software-school",
//         "gravatar_id": "",
//         "url": "https://api.github.com/orgs/nashville-software-school",
//         "avatar_url": "https://avatars.githubusercontent.com/u/12634274?"
//       }
//     },
//     {
//       "id": "8025508712",
//       "type": "PullRequestEvent",
//       "actor": {
//         "id": 218592,
//         "login": "stevebrownlee",
//         "display_login": "stevebrownlee",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stevebrownlee",
//         "avatar_url": "https://avatars.githubusercontent.com/u/218592?"
//       },
//       "repo": {
//         "id": 101137613,
//         "name": "nashville-software-school/client-side-mastery",
//         "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery"
//       },
//       "payload": {
//         "action": "closed",
//         "number": 24,
//         "pull_request": {
//           "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/24",
//           "id": 201482157,
//           "node_id": "MDExOlB1bGxSZXF1ZXN0MjAxNDgyMTU3",
//           "html_url": "https://github.com/nashville-software-school/client-side-mastery/pull/24",
//           "diff_url": "https://github.com/nashville-software-school/client-side-mastery/pull/24.diff",
//           "patch_url": "https://github.com/nashville-software-school/client-side-mastery/pull/24.patch",
//           "issue_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/24",
//           "number": 24,
//           "state": "closed",
//           "locked": false,
//           "title": "Reorder React",
//           "user": {
//             "login": "stevebrownlee",
//             "id": 218592,
//             "node_id": "MDQ6VXNlcjIxODU5Mg==",
//             "avatar_url": "https://avatars3.githubusercontent.com/u/218592?v=4",
//             "gravatar_id": "",
//             "url": "https://api.github.com/users/stevebrownlee",
//             "html_url": "https://github.com/stevebrownlee",
//             "followers_url": "https://api.github.com/users/stevebrownlee/followers",
//             "following_url": "https://api.github.com/users/stevebrownlee/following{/other_user}",
//             "gists_url": "https://api.github.com/users/stevebrownlee/gists{/gist_id}",
//             "starred_url": "https://api.github.com/users/stevebrownlee/starred{/owner}{/repo}",
//             "subscriptions_url": "https://api.github.com/users/stevebrownlee/subscriptions",
//             "organizations_url": "https://api.github.com/users/stevebrownlee/orgs",
//             "repos_url": "https://api.github.com/users/stevebrownlee/repos",
//             "events_url": "https://api.github.com/users/stevebrownlee/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/stevebrownlee/received_events",
//             "type": "User",
//             "site_admin": false
//           },
//           "body": "After discussion with @jisie about her journey through teaching React, the chapters were reordered to delay the teaching of dynamic routing by a day or two.",
//           "created_at": "2018-07-15T05:44:06Z",
//           "updated_at": "2018-07-26T22:15:42Z",
//           "closed_at": "2018-07-26T22:15:42Z",
//           "merged_at": "2018-07-26T22:15:42Z",
//           "merge_commit_sha": "f073ec5248b822db1246eebbb4d414bee539003f",
//           "assignee": null,
//           "assignees": [

//           ],
//           "requested_reviewers": [

//           ],
//           "requested_teams": [

//           ],
//           "labels": [

//           ],
//           "milestone": null,
//           "commits_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/24/commits",
//           "review_comments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/24/comments",
//           "review_comment_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/comments{/number}",
//           "comments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/24/comments",
//           "statuses_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/statuses/47cec12e971076a1ec9330abf03600d5d4a08d64",
//           "head": {
//             "label": "nashville-software-school:reorder-react",
//             "ref": "reorder-react",
//             "sha": "47cec12e971076a1ec9330abf03600d5d4a08d64",
//             "user": {
//               "login": "nashville-software-school",
//               "id": 12634274,
//               "node_id": "MDEyOk9yZ2FuaXphdGlvbjEyNjM0Mjc0",
//               "avatar_url": "https://avatars3.githubusercontent.com/u/12634274?v=4",
//               "gravatar_id": "",
//               "url": "https://api.github.com/users/nashville-software-school",
//               "html_url": "https://github.com/nashville-software-school",
//               "followers_url": "https://api.github.com/users/nashville-software-school/followers",
//               "following_url": "https://api.github.com/users/nashville-software-school/following{/other_user}",
//               "gists_url": "https://api.github.com/users/nashville-software-school/gists{/gist_id}",
//               "starred_url": "https://api.github.com/users/nashville-software-school/starred{/owner}{/repo}",
//               "subscriptions_url": "https://api.github.com/users/nashville-software-school/subscriptions",
//               "organizations_url": "https://api.github.com/users/nashville-software-school/orgs",
//               "repos_url": "https://api.github.com/users/nashville-software-school/repos",
//               "events_url": "https://api.github.com/users/nashville-software-school/events{/privacy}",
//               "received_events_url": "https://api.github.com/users/nashville-software-school/received_events",
//               "type": "Organization",
//               "site_admin": false
//             },
//             "repo": {
//               "id": 101137613,
//               "node_id": "MDEwOlJlcG9zaXRvcnkxMDExMzc2MTM=",
//               "name": "client-side-mastery",
//               "full_name": "nashville-software-school/client-side-mastery",
//               "owner": {
//                 "login": "nashville-software-school",
//                 "id": 12634274,
//                 "node_id": "MDEyOk9yZ2FuaXphdGlvbjEyNjM0Mjc0",
//                 "avatar_url": "https://avatars3.githubusercontent.com/u/12634274?v=4",
//                 "gravatar_id": "",
//                 "url": "https://api.github.com/users/nashville-software-school",
//                 "html_url": "https://github.com/nashville-software-school",
//                 "followers_url": "https://api.github.com/users/nashville-software-school/followers",
//                 "following_url": "https://api.github.com/users/nashville-software-school/following{/other_user}",
//                 "gists_url": "https://api.github.com/users/nashville-software-school/gists{/gist_id}",
//                 "starred_url": "https://api.github.com/users/nashville-software-school/starred{/owner}{/repo}",
//                 "subscriptions_url": "https://api.github.com/users/nashville-software-school/subscriptions",
//                 "organizations_url": "https://api.github.com/users/nashville-software-school/orgs",
//                 "repos_url": "https://api.github.com/users/nashville-software-school/repos",
//                 "events_url": "https://api.github.com/users/nashville-software-school/events{/privacy}",
//                 "received_events_url": "https://api.github.com/users/nashville-software-school/received_events",
//                 "type": "Organization",
//                 "site_admin": false
//               },
//               "private": false,
//               "html_url": "https://github.com/nashville-software-school/client-side-mastery",
//               "description": "Client side technology course for Nashville Software School",
//               "fork": false,
//               "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery",
//               "forks_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/forks",
//               "keys_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/keys{/key_id}",
//               "collaborators_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/collaborators{/collaborator}",
//               "teams_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/teams",
//               "hooks_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/hooks",
//               "issue_events_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/events{/number}",
//               "events_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/events",
//               "assignees_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/assignees{/user}",
//               "branches_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/branches{/branch}",
//               "tags_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/tags",
//               "blobs_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/blobs{/sha}",
//               "git_tags_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/tags{/sha}",
//               "git_refs_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/refs{/sha}",
//               "trees_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/trees{/sha}",
//               "statuses_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/statuses/{sha}",
//               "languages_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/languages",
//               "stargazers_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/stargazers",
//               "contributors_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/contributors",
//               "subscribers_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/subscribers",
//               "subscription_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/subscription",
//               "commits_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits{/sha}",
//               "git_commits_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/commits{/sha}",
//               "comments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/comments{/number}",
//               "issue_comment_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/comments{/number}",
//               "contents_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/contents/{+path}",
//               "compare_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/compare/{base}...{head}",
//               "merges_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/merges",
//               "archive_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/{archive_format}{/ref}",
//               "downloads_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/downloads",
//               "issues_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues{/number}",
//               "pulls_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls{/number}",
//               "milestones_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/milestones{/number}",
//               "notifications_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/notifications{?since,all,participating}",
//               "labels_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/labels{/name}",
//               "releases_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/releases{/id}",
//               "deployments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/deployments",
//               "created_at": "2017-08-23T04:27:07Z",
//               "updated_at": "2018-07-26T16:42:26Z",
//               "pushed_at": "2018-07-26T22:15:42Z",
//               "git_url": "git://github.com/nashville-software-school/client-side-mastery.git",
//               "ssh_url": "git@github.com:nashville-software-school/client-side-mastery.git",
//               "clone_url": "https://github.com/nashville-software-school/client-side-mastery.git",
//               "svn_url": "https://github.com/nashville-software-school/client-side-mastery",
//               "homepage": "",
//               "size": 53818,
//               "stargazers_count": 39,
//               "watchers_count": 39,
//               "language": "JavaScript",
//               "has_issues": true,
//               "has_projects": true,
//               "has_downloads": true,
//               "has_wiki": true,
//               "has_pages": false,
//               "forks_count": 29,
//               "mirror_url": null,
//               "archived": false,
//               "open_issues_count": 2,
//               "license": {
//                 "key": "apache-2.0",
//                 "name": "Apache License 2.0",
//                 "spdx_id": "Apache-2.0",
//                 "url": "https://api.github.com/licenses/apache-2.0",
//                 "node_id": "MDc6TGljZW5zZTI="
//               },
//               "forks": 29,
//               "open_issues": 2,
//               "watchers": 39,
//               "default_branch": "master"
//             }
//           },
//           "base": {
//             "label": "nashville-software-school:master",
//             "ref": "master",
//             "sha": "040b79eb083e14c67300e2b46ce1701fae2f3575",
//             "user": {
//               "login": "nashville-software-school",
//               "id": 12634274,
//               "node_id": "MDEyOk9yZ2FuaXphdGlvbjEyNjM0Mjc0",
//               "avatar_url": "https://avatars3.githubusercontent.com/u/12634274?v=4",
//               "gravatar_id": "",
//               "url": "https://api.github.com/users/nashville-software-school",
//               "html_url": "https://github.com/nashville-software-school",
//               "followers_url": "https://api.github.com/users/nashville-software-school/followers",
//               "following_url": "https://api.github.com/users/nashville-software-school/following{/other_user}",
//               "gists_url": "https://api.github.com/users/nashville-software-school/gists{/gist_id}",
//               "starred_url": "https://api.github.com/users/nashville-software-school/starred{/owner}{/repo}",
//               "subscriptions_url": "https://api.github.com/users/nashville-software-school/subscriptions",
//               "organizations_url": "https://api.github.com/users/nashville-software-school/orgs",
//               "repos_url": "https://api.github.com/users/nashville-software-school/repos",
//               "events_url": "https://api.github.com/users/nashville-software-school/events{/privacy}",
//               "received_events_url": "https://api.github.com/users/nashville-software-school/received_events",
//               "type": "Organization",
//               "site_admin": false
//             },
//             "repo": {
//               "id": 101137613,
//               "node_id": "MDEwOlJlcG9zaXRvcnkxMDExMzc2MTM=",
//               "name": "client-side-mastery",
//               "full_name": "nashville-software-school/client-side-mastery",
//               "owner": {
//                 "login": "nashville-software-school",
//                 "id": 12634274,
//                 "node_id": "MDEyOk9yZ2FuaXphdGlvbjEyNjM0Mjc0",
//                 "avatar_url": "https://avatars3.githubusercontent.com/u/12634274?v=4",
//                 "gravatar_id": "",
//                 "url": "https://api.github.com/users/nashville-software-school",
//                 "html_url": "https://github.com/nashville-software-school",
//                 "followers_url": "https://api.github.com/users/nashville-software-school/followers",
//                 "following_url": "https://api.github.com/users/nashville-software-school/following{/other_user}",
//                 "gists_url": "https://api.github.com/users/nashville-software-school/gists{/gist_id}",
//                 "starred_url": "https://api.github.com/users/nashville-software-school/starred{/owner}{/repo}",
//                 "subscriptions_url": "https://api.github.com/users/nashville-software-school/subscriptions",
//                 "organizations_url": "https://api.github.com/users/nashville-software-school/orgs",
//                 "repos_url": "https://api.github.com/users/nashville-software-school/repos",
//                 "events_url": "https://api.github.com/users/nashville-software-school/events{/privacy}",
//                 "received_events_url": "https://api.github.com/users/nashville-software-school/received_events",
//                 "type": "Organization",
//                 "site_admin": false
//               },
//               "private": false,
//               "html_url": "https://github.com/nashville-software-school/client-side-mastery",
//               "description": "Client side technology course for Nashville Software School",
//               "fork": false,
//               "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery",
//               "forks_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/forks",
//               "keys_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/keys{/key_id}",
//               "collaborators_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/collaborators{/collaborator}",
//               "teams_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/teams",
//               "hooks_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/hooks",
//               "issue_events_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/events{/number}",
//               "events_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/events",
//               "assignees_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/assignees{/user}",
//               "branches_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/branches{/branch}",
//               "tags_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/tags",
//               "blobs_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/blobs{/sha}",
//               "git_tags_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/tags{/sha}",
//               "git_refs_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/refs{/sha}",
//               "trees_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/trees{/sha}",
//               "statuses_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/statuses/{sha}",
//               "languages_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/languages",
//               "stargazers_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/stargazers",
//               "contributors_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/contributors",
//               "subscribers_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/subscribers",
//               "subscription_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/subscription",
//               "commits_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits{/sha}",
//               "git_commits_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/commits{/sha}",
//               "comments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/comments{/number}",
//               "issue_comment_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/comments{/number}",
//               "contents_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/contents/{+path}",
//               "compare_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/compare/{base}...{head}",
//               "merges_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/merges",
//               "archive_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/{archive_format}{/ref}",
//               "downloads_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/downloads",
//               "issues_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues{/number}",
//               "pulls_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls{/number}",
//               "milestones_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/milestones{/number}",
//               "notifications_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/notifications{?since,all,participating}",
//               "labels_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/labels{/name}",
//               "releases_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/releases{/id}",
//               "deployments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/deployments",
//               "created_at": "2017-08-23T04:27:07Z",
//               "updated_at": "2018-07-26T16:42:26Z",
//               "pushed_at": "2018-07-26T22:15:42Z",
//               "git_url": "git://github.com/nashville-software-school/client-side-mastery.git",
//               "ssh_url": "git@github.com:nashville-software-school/client-side-mastery.git",
//               "clone_url": "https://github.com/nashville-software-school/client-side-mastery.git",
//               "svn_url": "https://github.com/nashville-software-school/client-side-mastery",
//               "homepage": "",
//               "size": 53818,
//               "stargazers_count": 39,
//               "watchers_count": 39,
//               "language": "JavaScript",
//               "has_issues": true,
//               "has_projects": true,
//               "has_downloads": true,
//               "has_wiki": true,
//               "has_pages": false,
//               "forks_count": 29,
//               "mirror_url": null,
//               "archived": false,
//               "open_issues_count": 2,
//               "license": {
//                 "key": "apache-2.0",
//                 "name": "Apache License 2.0",
//                 "spdx_id": "Apache-2.0",
//                 "url": "https://api.github.com/licenses/apache-2.0",
//                 "node_id": "MDc6TGljZW5zZTI="
//               },
//               "forks": 29,
//               "open_issues": 2,
//               "watchers": 39,
//               "default_branch": "master"
//             }
//           },
//           "_links": {
//             "self": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/24"
//             },
//             "html": {
//               "href": "https://github.com/nashville-software-school/client-side-mastery/pull/24"
//             },
//             "issue": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/24"
//             },
//             "comments": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/24/comments"
//             },
//             "review_comments": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/24/comments"
//             },
//             "review_comment": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/comments{/number}"
//             },
//             "commits": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/24/commits"
//             },
//             "statuses": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/statuses/47cec12e971076a1ec9330abf03600d5d4a08d64"
//             }
//           },
//           "author_association": "CONTRIBUTOR",
//           "merged": true,
//           "mergeable": null,
//           "rebaseable": null,
//           "mergeable_state": "unknown",
//           "merged_by": {
//             "login": "stevebrownlee",
//             "id": 218592,
//             "node_id": "MDQ6VXNlcjIxODU5Mg==",
//             "avatar_url": "https://avatars3.githubusercontent.com/u/218592?v=4",
//             "gravatar_id": "",
//             "url": "https://api.github.com/users/stevebrownlee",
//             "html_url": "https://github.com/stevebrownlee",
//             "followers_url": "https://api.github.com/users/stevebrownlee/followers",
//             "following_url": "https://api.github.com/users/stevebrownlee/following{/other_user}",
//             "gists_url": "https://api.github.com/users/stevebrownlee/gists{/gist_id}",
//             "starred_url": "https://api.github.com/users/stevebrownlee/starred{/owner}{/repo}",
//             "subscriptions_url": "https://api.github.com/users/stevebrownlee/subscriptions",
//             "organizations_url": "https://api.github.com/users/stevebrownlee/orgs",
//             "repos_url": "https://api.github.com/users/stevebrownlee/repos",
//             "events_url": "https://api.github.com/users/stevebrownlee/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/stevebrownlee/received_events",
//             "type": "User",
//             "site_admin": false
//           },
//           "comments": 3,
//           "review_comments": 2,
//           "maintainer_can_modify": false,
//           "commits": 17,
//           "additions": 1058,
//           "deletions": 839,
//           "changed_files": 25
//         }
//       },
//       "public": true,
//       "created_at": "2018-07-26T22:15:42Z",
//       "org": {
//         "id": 12634274,
//         "login": "nashville-software-school",
//         "gravatar_id": "",
//         "url": "https://api.github.com/orgs/nashville-software-school",
//         "avatar_url": "https://avatars.githubusercontent.com/u/12634274?"
//       }
//     },
//     {
//       "id": "8025508175",
//       "type": "IssueCommentEvent",
//       "actor": {
//         "id": 218592,
//         "login": "stevebrownlee",
//         "display_login": "stevebrownlee",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stevebrownlee",
//         "avatar_url": "https://avatars.githubusercontent.com/u/218592?"
//       },
//       "repo": {
//         "id": 101137613,
//         "name": "nashville-software-school/client-side-mastery",
//         "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery"
//       },
//       "payload": {
//         "action": "created",
//         "issue": {
//           "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/24",
//           "repository_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery",
//           "labels_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/24/labels{/name}",
//           "comments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/24/comments",
//           "events_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/24/events",
//           "html_url": "https://github.com/nashville-software-school/client-side-mastery/pull/24",
//           "id": 341294131,
//           "node_id": "MDExOlB1bGxSZXF1ZXN0MjAxNDgyMTU3",
//           "number": 24,
//           "title": "Reorder React",
//           "user": {
//             "login": "stevebrownlee",
//             "id": 218592,
//             "node_id": "MDQ6VXNlcjIxODU5Mg==",
//             "avatar_url": "https://avatars3.githubusercontent.com/u/218592?v=4",
//             "gravatar_id": "",
//             "url": "https://api.github.com/users/stevebrownlee",
//             "html_url": "https://github.com/stevebrownlee",
//             "followers_url": "https://api.github.com/users/stevebrownlee/followers",
//             "following_url": "https://api.github.com/users/stevebrownlee/following{/other_user}",
//             "gists_url": "https://api.github.com/users/stevebrownlee/gists{/gist_id}",
//             "starred_url": "https://api.github.com/users/stevebrownlee/starred{/owner}{/repo}",
//             "subscriptions_url": "https://api.github.com/users/stevebrownlee/subscriptions",
//             "organizations_url": "https://api.github.com/users/stevebrownlee/orgs",
//             "repos_url": "https://api.github.com/users/stevebrownlee/repos",
//             "events_url": "https://api.github.com/users/stevebrownlee/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/stevebrownlee/received_events",
//             "type": "User",
//             "site_admin": false
//           },
//           "labels": [

//           ],
//           "state": "open",
//           "locked": false,
//           "assignee": null,
//           "assignees": [

//           ],
//           "milestone": null,
//           "comments": 2,
//           "created_at": "2018-07-15T05:44:06Z",
//           "updated_at": "2018-07-26T22:15:34Z",
//           "closed_at": null,
//           "author_association": "CONTRIBUTOR",
//           "pull_request": {
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/24",
//             "html_url": "https://github.com/nashville-software-school/client-side-mastery/pull/24",
//             "diff_url": "https://github.com/nashville-software-school/client-side-mastery/pull/24.diff",
//             "patch_url": "https://github.com/nashville-software-school/client-side-mastery/pull/24.patch"
//           },
//           "body": "After discussion with @jisie about her journey through teaching React, the chapters were reordered to delay the teaching of dynamic routing by a day or two."
//         },
//         "comment": {
//           "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/comments/408251833",
//           "html_url": "https://github.com/nashville-software-school/client-side-mastery/pull/24#issuecomment-408251833",
//           "issue_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/24",
//           "id": 408251833,
//           "node_id": "MDEyOklzc3VlQ29tbWVudDQwODI1MTgzMw==",
//           "user": {
//             "login": "stevebrownlee",
//             "id": 218592,
//             "node_id": "MDQ6VXNlcjIxODU5Mg==",
//             "avatar_url": "https://avatars3.githubusercontent.com/u/218592?v=4",
//             "gravatar_id": "",
//             "url": "https://api.github.com/users/stevebrownlee",
//             "html_url": "https://github.com/stevebrownlee",
//             "followers_url": "https://api.github.com/users/stevebrownlee/followers",
//             "following_url": "https://api.github.com/users/stevebrownlee/following{/other_user}",
//             "gists_url": "https://api.github.com/users/stevebrownlee/gists{/gist_id}",
//             "starred_url": "https://api.github.com/users/stevebrownlee/starred{/owner}{/repo}",
//             "subscriptions_url": "https://api.github.com/users/stevebrownlee/subscriptions",
//             "organizations_url": "https://api.github.com/users/stevebrownlee/orgs",
//             "repos_url": "https://api.github.com/users/stevebrownlee/repos",
//             "events_url": "https://api.github.com/users/stevebrownlee/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/stevebrownlee/received_events",
//             "type": "User",
//             "site_admin": false
//           },
//           "created_at": "2018-07-26T22:15:34Z",
//           "updated_at": "2018-07-26T22:15:34Z",
//           "author_association": "CONTRIBUTOR",
//           "body": "Ok, I've received approval from a quorum of the instruction team. I'm merging this branch now since I'm about to embark upon a new refactor of book 2 based on conversations with @brendalong @megducharme @JoeShep and @jisie "
//         }
//       },
//       "public": true,
//       "created_at": "2018-07-26T22:15:34Z",
//       "org": {
//         "id": 12634274,
//         "login": "nashville-software-school",
//         "gravatar_id": "",
//         "url": "https://api.github.com/orgs/nashville-software-school",
//         "avatar_url": "https://avatars.githubusercontent.com/u/12634274?"
//       }
//     },
//     {
//       "id": "8023647726",
//       "type": "IssueCommentEvent",
//       "actor": {
//         "id": 218592,
//         "login": "stevebrownlee",
//         "display_login": "stevebrownlee",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stevebrownlee",
//         "avatar_url": "https://avatars.githubusercontent.com/u/218592?"
//       },
//       "repo": {
//         "id": 101137613,
//         "name": "nashville-software-school/client-side-mastery",
//         "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery"
//       },
//       "payload": {
//         "action": "created",
//         "issue": {
//           "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/31",
//           "repository_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery",
//           "labels_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/31/labels{/name}",
//           "comments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/31/comments",
//           "events_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/31/events",
//           "html_url": "https://github.com/nashville-software-school/client-side-mastery/pull/31",
//           "id": 344868497,
//           "node_id": "MDExOlB1bGxSZXF1ZXN0MjA0MTYxMzQy",
//           "number": 31,
//           "title": "Tiny change in parameter order",
//           "user": {
//             "login": "megducharme",
//             "id": 20306210,
//             "node_id": "MDQ6VXNlcjIwMzA2MjEw",
//             "avatar_url": "https://avatars3.githubusercontent.com/u/20306210?v=4",
//             "gravatar_id": "",
//             "url": "https://api.github.com/users/megducharme",
//             "html_url": "https://github.com/megducharme",
//             "followers_url": "https://api.github.com/users/megducharme/followers",
//             "following_url": "https://api.github.com/users/megducharme/following{/other_user}",
//             "gists_url": "https://api.github.com/users/megducharme/gists{/gist_id}",
//             "starred_url": "https://api.github.com/users/megducharme/starred{/owner}{/repo}",
//             "subscriptions_url": "https://api.github.com/users/megducharme/subscriptions",
//             "organizations_url": "https://api.github.com/users/megducharme/orgs",
//             "repos_url": "https://api.github.com/users/megducharme/repos",
//             "events_url": "https://api.github.com/users/megducharme/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/megducharme/received_events",
//             "type": "User",
//             "site_admin": false
//           },
//           "labels": [

//           ],
//           "state": "open",
//           "locked": false,
//           "assignee": null,
//           "assignees": [

//           ],
//           "milestone": null,
//           "comments": 0,
//           "created_at": "2018-07-26T14:28:33Z",
//           "updated_at": "2018-07-26T15:55:23Z",
//           "closed_at": null,
//           "author_association": "CONTRIBUTOR",
//           "pull_request": {
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/31",
//             "html_url": "https://github.com/nashville-software-school/client-side-mastery/pull/31",
//             "diff_url": "https://github.com/nashville-software-school/client-side-mastery/pull/31.diff",
//             "patch_url": "https://github.com/nashville-software-school/client-side-mastery/pull/31.patch"
//           },
//           "body": "The order of parameters for `setData()` is confusing students. Since they use `localStorage.setItem()` and it takes a `key` and a `value` argument (in that order), but this function takes a `value` and a `key` argument, it threw them off. Small change, but I think it will help some of them keep things straight.  "
//         },
//         "comment": {
//           "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/comments/408145745",
//           "html_url": "https://github.com/nashville-software-school/client-side-mastery/pull/31#issuecomment-408145745",
//           "issue_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/31",
//           "id": 408145745,
//           "node_id": "MDEyOklzc3VlQ29tbWVudDQwODE0NTc0NQ==",
//           "user": {
//             "login": "stevebrownlee",
//             "id": 218592,
//             "node_id": "MDQ6VXNlcjIxODU5Mg==",
//             "avatar_url": "https://avatars3.githubusercontent.com/u/218592?v=4",
//             "gravatar_id": "",
//             "url": "https://api.github.com/users/stevebrownlee",
//             "html_url": "https://github.com/stevebrownlee",
//             "followers_url": "https://api.github.com/users/stevebrownlee/followers",
//             "following_url": "https://api.github.com/users/stevebrownlee/following{/other_user}",
//             "gists_url": "https://api.github.com/users/stevebrownlee/gists{/gist_id}",
//             "starred_url": "https://api.github.com/users/stevebrownlee/starred{/owner}{/repo}",
//             "subscriptions_url": "https://api.github.com/users/stevebrownlee/subscriptions",
//             "organizations_url": "https://api.github.com/users/stevebrownlee/orgs",
//             "repos_url": "https://api.github.com/users/stevebrownlee/repos",
//             "events_url": "https://api.github.com/users/stevebrownlee/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/stevebrownlee/received_events",
//             "type": "User",
//             "site_admin": false
//           },
//           "created_at": "2018-07-26T15:55:23Z",
//           "updated_at": "2018-07-26T15:55:23Z",
//           "author_association": "CONTRIBUTOR",
//           "body": "@megducharme I approve this PR\r\n\r\n👍 "
//         }
//       },
//       "public": true,
//       "created_at": "2018-07-26T15:55:23Z",
//       "org": {
//         "id": 12634274,
//         "login": "nashville-software-school",
//         "gravatar_id": "",
//         "url": "https://api.github.com/orgs/nashville-software-school",
//         "avatar_url": "https://avatars.githubusercontent.com/u/12634274?"
//       }
//     },
//     {
//       "id": "8023628970",
//       "type": "CreateEvent",
//       "actor": {
//         "id": 218592,
//         "login": "stevebrownlee",
//         "display_login": "stevebrownlee",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stevebrownlee",
//         "avatar_url": "https://avatars.githubusercontent.com/u/218592?"
//       },
//       "repo": {
//         "id": 142462560,
//         "name": "nss-day-cohort-27/brenda-snack-cake-store",
//         "url": "https://api.github.com/repos/nss-day-cohort-27/brenda-snack-cake-store"
//       },
//       "payload": {
//         "ref": "master",
//         "ref_type": "branch",
//         "master_branch": "master",
//         "description": null,
//         "pusher_type": "user"
//       },
//       "public": true,
//       "created_at": "2018-07-26T15:52:13Z",
//       "org": {
//         "id": 40129262,
//         "login": "nss-day-cohort-27",
//         "gravatar_id": "",
//         "url": "https://api.github.com/orgs/nss-day-cohort-27",
//         "avatar_url": "https://avatars.githubusercontent.com/u/40129262?"
//       }
//     },
//     {
//       "id": "8023626522",
//       "type": "CreateEvent",
//       "actor": {
//         "id": 218592,
//         "login": "stevebrownlee",
//         "display_login": "stevebrownlee",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stevebrownlee",
//         "avatar_url": "https://avatars.githubusercontent.com/u/218592?"
//       },
//       "repo": {
//         "id": 142462560,
//         "name": "nss-day-cohort-27/brenda-snack-cake-store",
//         "url": "https://api.github.com/repos/nss-day-cohort-27/brenda-snack-cake-store"
//       },
//       "payload": {
//         "ref": null,
//         "ref_type": "repository",
//         "master_branch": "master",
//         "description": null,
//         "pusher_type": "user"
//       },
//       "public": true,
//       "created_at": "2018-07-26T15:51:49Z",
//       "org": {
//         "id": 40129262,
//         "login": "nss-day-cohort-27",
//         "gravatar_id": "",
//         "url": "https://api.github.com/orgs/nss-day-cohort-27",
//         "avatar_url": "https://avatars.githubusercontent.com/u/40129262?"
//       }
//     },
//     {
//       "id": "8022629534",
//       "type": "PushEvent",
//       "actor": {
//         "id": 218592,
//         "login": "stevebrownlee",
//         "display_login": "stevebrownlee",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stevebrownlee",
//         "avatar_url": "https://avatars.githubusercontent.com/u/218592?"
//       },
//       "repo": {
//         "id": 101137613,
//         "name": "nashville-software-school/client-side-mastery",
//         "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery"
//       },
//       "payload": {
//         "push_id": 2749520453,
//         "size": 21,
//         "distinct_size": 17,
//         "ref": "refs/heads/reorder-react",
//         "head": "47cec12e971076a1ec9330abf03600d5d4a08d64",
//         "before": "08e6591045038743e0cfdd3397da2431ac1bf9bc",
//         "commits": [
//           {
//             "sha": "e387423ec5a65bc1c987264fb908d4cd07ab5a37",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Much clearer requirements for the superpowers exercise for event listeners",
//             "distinct": false,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/e387423ec5a65bc1c987264fb908d4cd07ab5a37"
//           },
//           {
//             "sha": "55f7b314ce657a501493085a4c86c5ff34204934",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Fixes to the new operator chapter",
//             "distinct": false,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/55f7b314ce657a501493085a4c86c5ff34204934"
//           },
//           {
//             "sha": "d6d0adb79fd718a4d5f289511498c730553dfc31",
//             "author": {
//               "email": "stevebrownlee@users.noreply.github.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Merge pull request #30 from nashville-software-school/new-fixes\n\nFixes to the new operator chapter",
//             "distinct": false,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/d6d0adb79fd718a4d5f289511498c730553dfc31"
//           },
//           {
//             "sha": "040b79eb083e14c67300e2b46ce1701fae2f3575",
//             "author": {
//               "email": "stevebrownlee@users.noreply.github.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Merge pull request #29 from nashville-software-school/clearer-superpowers\n\nMuch clearer requirements for the superpowers exercise for event listeners",
//             "distinct": false,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/040b79eb083e14c67300e2b46ce1701fae2f3575"
//           },
//           {
//             "sha": "99a9651d35e433d7739c4e5283582efd337b3b1c",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Moved functions as props and intro to fetch before dynamic routing",
//             "distinct": true,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/99a9651d35e433d7739c4e5283582efd337b3b1c"
//           },
//           {
//             "sha": "d293eee89a79f60e891626fa952be514eef86d74",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Modified content so that the code followed the flow of the new order",
//             "distinct": true,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/d293eee89a79f60e891626fa952be514eef86d74"
//           },
//           {
//             "sha": "8580a57b2bed2ffd64ad95b390f3b1d12a12fd8f",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Modified the first practice exercise. Added new one.",
//             "distinct": true,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/8580a57b2bed2ffd64ad95b390f3b1d12a12fd8f"
//           },
//           {
//             "sha": "b2e54108ca1e086d6adae97f53a4d4c3907fd58e",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Rewrite",
//             "distinct": true,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/b2e54108ca1e086d6adae97f53a4d4c3907fd58e"
//           },
//           {
//             "sha": "5bdbf7a3c19a06f581025fb550ca878bd4cfa4c9",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Rewrite up to chapter 5",
//             "distinct": true,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/5bdbf7a3c19a06f581025fb550ca878bd4cfa4c9"
//           },
//           {
//             "sha": "9e5354b01889f41f9b6c445b670261643f126193",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Rewrote function reference chapter for DELETE",
//             "distinct": true,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/9e5354b01889f41f9b6c445b670261643f126193"
//           },
//           {
//             "sha": "213720158122dccc09d6f09169ab8fdf00edc005",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Modules for interacting with the API.",
//             "distinct": true,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/213720158122dccc09d6f09169ab8fdf00edc005"
//           },
//           {
//             "sha": "80eadd209df4d6a24c2ec72d389f85c7705d31f9",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Modules for interacting with the API.",
//             "distinct": true,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/80eadd209df4d6a24c2ec72d389f85c7705d31f9"
//           },
//           {
//             "sha": "86fb166ffa26be8fe9e07a94f74f1c7907252995",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Content and animated GIF for dynamic routing for animals",
//             "distinct": true,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/86fb166ffa26be8fe9e07a94f74f1c7907252995"
//           },
//           {
//             "sha": "fe42f6ab110fd96fb3789731d8575b694aa2a35c",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Added content for React Forms chapter to add an animal",
//             "distinct": true,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/fe42f6ab110fd96fb3789731d8575b694aa2a35c"
//           },
//           {
//             "sha": "e55b48670077a4e86fbce24488631e1fb4aa2f7b",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Updated conditional rendering chapter",
//             "distinct": true,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/e55b48670077a4e86fbce24488631e1fb4aa2f7b"
//           },
//           {
//             "sha": "e5b6918e4961b01c05483d049bb638c2987fafd4",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "New reusability chapter. Generic components now supplementary chapter.",
//             "distinct": true,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/e5b6918e4961b01c05483d049bb638c2987fafd4"
//           },
//           {
//             "sha": "a61af337179511857e38734524de79303323e3e9",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Updated contents based on feedback from Kimmy",
//             "distinct": true,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/a61af337179511857e38734524de79303323e3e9"
//           },
//           {
//             "sha": "16d01c3ab4dd34f89709d8f4b4b33bc494e962f8",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "More fixes via Kimmy",
//             "distinct": true,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/16d01c3ab4dd34f89709d8f4b4b33bc494e962f8"
//           },
//           {
//             "sha": "e7a2263cb31dcaa79a03552be95a075171823bca",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Line breaks for greater legibility",
//             "distinct": true,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/e7a2263cb31dcaa79a03552be95a075171823bca"
//           },
//           {
//             "sha": "0b5765d665153c8a8b72861c2e39654d1638c629",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Moved all resources to appendix document. Moved lifecycle graphic to API chapter",
//             "distinct": true,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/0b5765d665153c8a8b72861c2e39654d1638c629"
//           }
//         ]
//       },
//       "public": true,
//       "created_at": "2018-07-26T13:14:00Z",
//       "org": {
//         "id": 12634274,
//         "login": "nashville-software-school",
//         "gravatar_id": "",
//         "url": "https://api.github.com/orgs/nashville-software-school",
//         "avatar_url": "https://avatars.githubusercontent.com/u/12634274?"
//       }
//     },
//     {
//       "id": "8022418410",
//       "type": "DeleteEvent",
//       "actor": {
//         "id": 218592,
//         "login": "stevebrownlee",
//         "display_login": "stevebrownlee",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stevebrownlee",
//         "avatar_url": "https://avatars.githubusercontent.com/u/218592?"
//       },
//       "repo": {
//         "id": 101137613,
//         "name": "nashville-software-school/client-side-mastery",
//         "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery"
//       },
//       "payload": {
//         "ref": "clearer-superpowers",
//         "ref_type": "branch",
//         "pusher_type": "user"
//       },
//       "public": true,
//       "created_at": "2018-07-26T12:34:54Z",
//       "org": {
//         "id": 12634274,
//         "login": "nashville-software-school",
//         "gravatar_id": "",
//         "url": "https://api.github.com/orgs/nashville-software-school",
//         "avatar_url": "https://avatars.githubusercontent.com/u/12634274?"
//       }
//     },
//     {
//       "id": "8022418199",
//       "type": "PushEvent",
//       "actor": {
//         "id": 218592,
//         "login": "stevebrownlee",
//         "display_login": "stevebrownlee",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stevebrownlee",
//         "avatar_url": "https://avatars.githubusercontent.com/u/218592?"
//       },
//       "repo": {
//         "id": 101137613,
//         "name": "nashville-software-school/client-side-mastery",
//         "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery"
//       },
//       "payload": {
//         "push_id": 2749411692,
//         "size": 2,
//         "distinct_size": 1,
//         "ref": "refs/heads/master",
//         "head": "040b79eb083e14c67300e2b46ce1701fae2f3575",
//         "before": "d6d0adb79fd718a4d5f289511498c730553dfc31",
//         "commits": [
//           {
//             "sha": "e387423ec5a65bc1c987264fb908d4cd07ab5a37",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Much clearer requirements for the superpowers exercise for event listeners",
//             "distinct": false,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/e387423ec5a65bc1c987264fb908d4cd07ab5a37"
//           },
//           {
//             "sha": "040b79eb083e14c67300e2b46ce1701fae2f3575",
//             "author": {
//               "email": "stevebrownlee@users.noreply.github.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Merge pull request #29 from nashville-software-school/clearer-superpowers\n\nMuch clearer requirements for the superpowers exercise for event listeners",
//             "distinct": true,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/040b79eb083e14c67300e2b46ce1701fae2f3575"
//           }
//         ]
//       },
//       "public": true,
//       "created_at": "2018-07-26T12:34:52Z",
//       "org": {
//         "id": 12634274,
//         "login": "nashville-software-school",
//         "gravatar_id": "",
//         "url": "https://api.github.com/orgs/nashville-software-school",
//         "avatar_url": "https://avatars.githubusercontent.com/u/12634274?"
//       }
//     },
//     {
//       "id": "8022418140",
//       "type": "PullRequestEvent",
//       "actor": {
//         "id": 218592,
//         "login": "stevebrownlee",
//         "display_login": "stevebrownlee",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stevebrownlee",
//         "avatar_url": "https://avatars.githubusercontent.com/u/218592?"
//       },
//       "repo": {
//         "id": 101137613,
//         "name": "nashville-software-school/client-side-mastery",
//         "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery"
//       },
//       "payload": {
//         "action": "closed",
//         "number": 29,
//         "pull_request": {
//           "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/29",
//           "id": 203957197,
//           "node_id": "MDExOlB1bGxSZXF1ZXN0MjAzOTU3MTk3",
//           "html_url": "https://github.com/nashville-software-school/client-side-mastery/pull/29",
//           "diff_url": "https://github.com/nashville-software-school/client-side-mastery/pull/29.diff",
//           "patch_url": "https://github.com/nashville-software-school/client-side-mastery/pull/29.patch",
//           "issue_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/29",
//           "number": 29,
//           "state": "closed",
//           "locked": false,
//           "title": "Much clearer requirements for the superpowers exercise for event listeners",
//           "user": {
//             "login": "stevebrownlee",
//             "id": 218592,
//             "node_id": "MDQ6VXNlcjIxODU5Mg==",
//             "avatar_url": "https://avatars3.githubusercontent.com/u/218592?v=4",
//             "gravatar_id": "",
//             "url": "https://api.github.com/users/stevebrownlee",
//             "html_url": "https://github.com/stevebrownlee",
//             "followers_url": "https://api.github.com/users/stevebrownlee/followers",
//             "following_url": "https://api.github.com/users/stevebrownlee/following{/other_user}",
//             "gists_url": "https://api.github.com/users/stevebrownlee/gists{/gist_id}",
//             "starred_url": "https://api.github.com/users/stevebrownlee/starred{/owner}{/repo}",
//             "subscriptions_url": "https://api.github.com/users/stevebrownlee/subscriptions",
//             "organizations_url": "https://api.github.com/users/stevebrownlee/orgs",
//             "repos_url": "https://api.github.com/users/stevebrownlee/repos",
//             "events_url": "https://api.github.com/users/stevebrownlee/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/stevebrownlee/received_events",
//             "type": "User",
//             "site_admin": false
//           },
//           "body": "Please review the new requirements for that exercise and let me know if it is easier to understand what we want students to do.",
//           "created_at": "2018-07-25T20:41:39Z",
//           "updated_at": "2018-07-26T12:34:51Z",
//           "closed_at": "2018-07-26T12:34:51Z",
//           "merged_at": "2018-07-26T12:34:51Z",
//           "merge_commit_sha": "040b79eb083e14c67300e2b46ce1701fae2f3575",
//           "assignee": null,
//           "assignees": [

//           ],
//           "requested_reviewers": [

//           ],
//           "requested_teams": [

//           ],
//           "labels": [

//           ],
//           "milestone": null,
//           "commits_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/29/commits",
//           "review_comments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/29/comments",
//           "review_comment_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/comments{/number}",
//           "comments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/29/comments",
//           "statuses_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/statuses/e387423ec5a65bc1c987264fb908d4cd07ab5a37",
//           "head": {
//             "label": "nashville-software-school:clearer-superpowers",
//             "ref": "clearer-superpowers",
//             "sha": "e387423ec5a65bc1c987264fb908d4cd07ab5a37",
//             "user": {
//               "login": "nashville-software-school",
//               "id": 12634274,
//               "node_id": "MDEyOk9yZ2FuaXphdGlvbjEyNjM0Mjc0",
//               "avatar_url": "https://avatars3.githubusercontent.com/u/12634274?v=4",
//               "gravatar_id": "",
//               "url": "https://api.github.com/users/nashville-software-school",
//               "html_url": "https://github.com/nashville-software-school",
//               "followers_url": "https://api.github.com/users/nashville-software-school/followers",
//               "following_url": "https://api.github.com/users/nashville-software-school/following{/other_user}",
//               "gists_url": "https://api.github.com/users/nashville-software-school/gists{/gist_id}",
//               "starred_url": "https://api.github.com/users/nashville-software-school/starred{/owner}{/repo}",
//               "subscriptions_url": "https://api.github.com/users/nashville-software-school/subscriptions",
//               "organizations_url": "https://api.github.com/users/nashville-software-school/orgs",
//               "repos_url": "https://api.github.com/users/nashville-software-school/repos",
//               "events_url": "https://api.github.com/users/nashville-software-school/events{/privacy}",
//               "received_events_url": "https://api.github.com/users/nashville-software-school/received_events",
//               "type": "Organization",
//               "site_admin": false
//             },
//             "repo": {
//               "id": 101137613,
//               "node_id": "MDEwOlJlcG9zaXRvcnkxMDExMzc2MTM=",
//               "name": "client-side-mastery",
//               "full_name": "nashville-software-school/client-side-mastery",
//               "owner": {
//                 "login": "nashville-software-school",
//                 "id": 12634274,
//                 "node_id": "MDEyOk9yZ2FuaXphdGlvbjEyNjM0Mjc0",
//                 "avatar_url": "https://avatars3.githubusercontent.com/u/12634274?v=4",
//                 "gravatar_id": "",
//                 "url": "https://api.github.com/users/nashville-software-school",
//                 "html_url": "https://github.com/nashville-software-school",
//                 "followers_url": "https://api.github.com/users/nashville-software-school/followers",
//                 "following_url": "https://api.github.com/users/nashville-software-school/following{/other_user}",
//                 "gists_url": "https://api.github.com/users/nashville-software-school/gists{/gist_id}",
//                 "starred_url": "https://api.github.com/users/nashville-software-school/starred{/owner}{/repo}",
//                 "subscriptions_url": "https://api.github.com/users/nashville-software-school/subscriptions",
//                 "organizations_url": "https://api.github.com/users/nashville-software-school/orgs",
//                 "repos_url": "https://api.github.com/users/nashville-software-school/repos",
//                 "events_url": "https://api.github.com/users/nashville-software-school/events{/privacy}",
//                 "received_events_url": "https://api.github.com/users/nashville-software-school/received_events",
//                 "type": "Organization",
//                 "site_admin": false
//               },
//               "private": false,
//               "html_url": "https://github.com/nashville-software-school/client-side-mastery",
//               "description": "Client side technology course for Nashville Software School",
//               "fork": false,
//               "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery",
//               "forks_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/forks",
//               "keys_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/keys{/key_id}",
//               "collaborators_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/collaborators{/collaborator}",
//               "teams_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/teams",
//               "hooks_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/hooks",
//               "issue_events_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/events{/number}",
//               "events_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/events",
//               "assignees_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/assignees{/user}",
//               "branches_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/branches{/branch}",
//               "tags_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/tags",
//               "blobs_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/blobs{/sha}",
//               "git_tags_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/tags{/sha}",
//               "git_refs_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/refs{/sha}",
//               "trees_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/trees{/sha}",
//               "statuses_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/statuses/{sha}",
//               "languages_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/languages",
//               "stargazers_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/stargazers",
//               "contributors_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/contributors",
//               "subscribers_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/subscribers",
//               "subscription_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/subscription",
//               "commits_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits{/sha}",
//               "git_commits_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/commits{/sha}",
//               "comments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/comments{/number}",
//               "issue_comment_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/comments{/number}",
//               "contents_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/contents/{+path}",
//               "compare_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/compare/{base}...{head}",
//               "merges_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/merges",
//               "archive_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/{archive_format}{/ref}",
//               "downloads_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/downloads",
//               "issues_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues{/number}",
//               "pulls_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls{/number}",
//               "milestones_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/milestones{/number}",
//               "notifications_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/notifications{?since,all,participating}",
//               "labels_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/labels{/name}",
//               "releases_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/releases{/id}",
//               "deployments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/deployments",
//               "created_at": "2017-08-23T04:27:07Z",
//               "updated_at": "2018-07-26T12:33:45Z",
//               "pushed_at": "2018-07-26T12:34:51Z",
//               "git_url": "git://github.com/nashville-software-school/client-side-mastery.git",
//               "ssh_url": "git@github.com:nashville-software-school/client-side-mastery.git",
//               "clone_url": "https://github.com/nashville-software-school/client-side-mastery.git",
//               "svn_url": "https://github.com/nashville-software-school/client-side-mastery",
//               "homepage": "",
//               "size": 53828,
//               "stargazers_count": 39,
//               "watchers_count": 39,
//               "language": "JavaScript",
//               "has_issues": true,
//               "has_projects": true,
//               "has_downloads": true,
//               "has_wiki": true,
//               "has_pages": false,
//               "forks_count": 29,
//               "mirror_url": null,
//               "archived": false,
//               "open_issues_count": 3,
//               "license": {
//                 "key": "apache-2.0",
//                 "name": "Apache License 2.0",
//                 "spdx_id": "Apache-2.0",
//                 "url": "https://api.github.com/licenses/apache-2.0",
//                 "node_id": "MDc6TGljZW5zZTI="
//               },
//               "forks": 29,
//               "open_issues": 3,
//               "watchers": 39,
//               "default_branch": "master"
//             }
//           },
//           "base": {
//             "label": "nashville-software-school:master",
//             "ref": "master",
//             "sha": "f40ea7a3405e061dc3761fdb1fb1a838d6740316",
//             "user": {
//               "login": "nashville-software-school",
//               "id": 12634274,
//               "node_id": "MDEyOk9yZ2FuaXphdGlvbjEyNjM0Mjc0",
//               "avatar_url": "https://avatars3.githubusercontent.com/u/12634274?v=4",
//               "gravatar_id": "",
//               "url": "https://api.github.com/users/nashville-software-school",
//               "html_url": "https://github.com/nashville-software-school",
//               "followers_url": "https://api.github.com/users/nashville-software-school/followers",
//               "following_url": "https://api.github.com/users/nashville-software-school/following{/other_user}",
//               "gists_url": "https://api.github.com/users/nashville-software-school/gists{/gist_id}",
//               "starred_url": "https://api.github.com/users/nashville-software-school/starred{/owner}{/repo}",
//               "subscriptions_url": "https://api.github.com/users/nashville-software-school/subscriptions",
//               "organizations_url": "https://api.github.com/users/nashville-software-school/orgs",
//               "repos_url": "https://api.github.com/users/nashville-software-school/repos",
//               "events_url": "https://api.github.com/users/nashville-software-school/events{/privacy}",
//               "received_events_url": "https://api.github.com/users/nashville-software-school/received_events",
//               "type": "Organization",
//               "site_admin": false
//             },
//             "repo": {
//               "id": 101137613,
//               "node_id": "MDEwOlJlcG9zaXRvcnkxMDExMzc2MTM=",
//               "name": "client-side-mastery",
//               "full_name": "nashville-software-school/client-side-mastery",
//               "owner": {
//                 "login": "nashville-software-school",
//                 "id": 12634274,
//                 "node_id": "MDEyOk9yZ2FuaXphdGlvbjEyNjM0Mjc0",
//                 "avatar_url": "https://avatars3.githubusercontent.com/u/12634274?v=4",
//                 "gravatar_id": "",
//                 "url": "https://api.github.com/users/nashville-software-school",
//                 "html_url": "https://github.com/nashville-software-school",
//                 "followers_url": "https://api.github.com/users/nashville-software-school/followers",
//                 "following_url": "https://api.github.com/users/nashville-software-school/following{/other_user}",
//                 "gists_url": "https://api.github.com/users/nashville-software-school/gists{/gist_id}",
//                 "starred_url": "https://api.github.com/users/nashville-software-school/starred{/owner}{/repo}",
//                 "subscriptions_url": "https://api.github.com/users/nashville-software-school/subscriptions",
//                 "organizations_url": "https://api.github.com/users/nashville-software-school/orgs",
//                 "repos_url": "https://api.github.com/users/nashville-software-school/repos",
//                 "events_url": "https://api.github.com/users/nashville-software-school/events{/privacy}",
//                 "received_events_url": "https://api.github.com/users/nashville-software-school/received_events",
//                 "type": "Organization",
//                 "site_admin": false
//               },
//               "private": false,
//               "html_url": "https://github.com/nashville-software-school/client-side-mastery",
//               "description": "Client side technology course for Nashville Software School",
//               "fork": false,
//               "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery",
//               "forks_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/forks",
//               "keys_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/keys{/key_id}",
//               "collaborators_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/collaborators{/collaborator}",
//               "teams_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/teams",
//               "hooks_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/hooks",
//               "issue_events_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/events{/number}",
//               "events_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/events",
//               "assignees_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/assignees{/user}",
//               "branches_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/branches{/branch}",
//               "tags_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/tags",
//               "blobs_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/blobs{/sha}",
//               "git_tags_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/tags{/sha}",
//               "git_refs_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/refs{/sha}",
//               "trees_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/trees{/sha}",
//               "statuses_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/statuses/{sha}",
//               "languages_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/languages",
//               "stargazers_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/stargazers",
//               "contributors_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/contributors",
//               "subscribers_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/subscribers",
//               "subscription_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/subscription",
//               "commits_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits{/sha}",
//               "git_commits_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/commits{/sha}",
//               "comments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/comments{/number}",
//               "issue_comment_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/comments{/number}",
//               "contents_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/contents/{+path}",
//               "compare_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/compare/{base}...{head}",
//               "merges_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/merges",
//               "archive_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/{archive_format}{/ref}",
//               "downloads_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/downloads",
//               "issues_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues{/number}",
//               "pulls_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls{/number}",
//               "milestones_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/milestones{/number}",
//               "notifications_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/notifications{?since,all,participating}",
//               "labels_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/labels{/name}",
//               "releases_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/releases{/id}",
//               "deployments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/deployments",
//               "created_at": "2017-08-23T04:27:07Z",
//               "updated_at": "2018-07-26T12:33:45Z",
//               "pushed_at": "2018-07-26T12:34:51Z",
//               "git_url": "git://github.com/nashville-software-school/client-side-mastery.git",
//               "ssh_url": "git@github.com:nashville-software-school/client-side-mastery.git",
//               "clone_url": "https://github.com/nashville-software-school/client-side-mastery.git",
//               "svn_url": "https://github.com/nashville-software-school/client-side-mastery",
//               "homepage": "",
//               "size": 53828,
//               "stargazers_count": 39,
//               "watchers_count": 39,
//               "language": "JavaScript",
//               "has_issues": true,
//               "has_projects": true,
//               "has_downloads": true,
//               "has_wiki": true,
//               "has_pages": false,
//               "forks_count": 29,
//               "mirror_url": null,
//               "archived": false,
//               "open_issues_count": 3,
//               "license": {
//                 "key": "apache-2.0",
//                 "name": "Apache License 2.0",
//                 "spdx_id": "Apache-2.0",
//                 "url": "https://api.github.com/licenses/apache-2.0",
//                 "node_id": "MDc6TGljZW5zZTI="
//               },
//               "forks": 29,
//               "open_issues": 3,
//               "watchers": 39,
//               "default_branch": "master"
//             }
//           },
//           "_links": {
//             "self": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/29"
//             },
//             "html": {
//               "href": "https://github.com/nashville-software-school/client-side-mastery/pull/29"
//             },
//             "issue": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/29"
//             },
//             "comments": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/29/comments"
//             },
//             "review_comments": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/29/comments"
//             },
//             "review_comment": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/comments{/number}"
//             },
//             "commits": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/29/commits"
//             },
//             "statuses": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/statuses/e387423ec5a65bc1c987264fb908d4cd07ab5a37"
//             }
//           },
//           "author_association": "CONTRIBUTOR",
//           "merged": true,
//           "mergeable": null,
//           "rebaseable": null,
//           "mergeable_state": "unknown",
//           "merged_by": {
//             "login": "stevebrownlee",
//             "id": 218592,
//             "node_id": "MDQ6VXNlcjIxODU5Mg==",
//             "avatar_url": "https://avatars3.githubusercontent.com/u/218592?v=4",
//             "gravatar_id": "",
//             "url": "https://api.github.com/users/stevebrownlee",
//             "html_url": "https://github.com/stevebrownlee",
//             "followers_url": "https://api.github.com/users/stevebrownlee/followers",
//             "following_url": "https://api.github.com/users/stevebrownlee/following{/other_user}",
//             "gists_url": "https://api.github.com/users/stevebrownlee/gists{/gist_id}",
//             "starred_url": "https://api.github.com/users/stevebrownlee/starred{/owner}{/repo}",
//             "subscriptions_url": "https://api.github.com/users/stevebrownlee/subscriptions",
//             "organizations_url": "https://api.github.com/users/stevebrownlee/orgs",
//             "repos_url": "https://api.github.com/users/stevebrownlee/repos",
//             "events_url": "https://api.github.com/users/stevebrownlee/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/stevebrownlee/received_events",
//             "type": "User",
//             "site_admin": false
//           },
//           "comments": 0,
//           "review_comments": 0,
//           "maintainer_can_modify": false,
//           "commits": 1,
//           "additions": 33,
//           "deletions": 20,
//           "changed_files": 1
//         }
//       },
//       "public": true,
//       "created_at": "2018-07-26T12:34:51Z",
//       "org": {
//         "id": 12634274,
//         "login": "nashville-software-school",
//         "gravatar_id": "",
//         "url": "https://api.github.com/orgs/nashville-software-school",
//         "avatar_url": "https://avatars.githubusercontent.com/u/12634274?"
//       }
//     },
//     {
//       "id": "8022412757",
//       "type": "DeleteEvent",
//       "actor": {
//         "id": 218592,
//         "login": "stevebrownlee",
//         "display_login": "stevebrownlee",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stevebrownlee",
//         "avatar_url": "https://avatars.githubusercontent.com/u/218592?"
//       },
//       "repo": {
//         "id": 101137613,
//         "name": "nashville-software-school/client-side-mastery",
//         "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery"
//       },
//       "payload": {
//         "ref": "new-fixes",
//         "ref_type": "branch",
//         "pusher_type": "user"
//       },
//       "public": true,
//       "created_at": "2018-07-26T12:33:47Z",
//       "org": {
//         "id": 12634274,
//         "login": "nashville-software-school",
//         "gravatar_id": "",
//         "url": "https://api.github.com/orgs/nashville-software-school",
//         "avatar_url": "https://avatars.githubusercontent.com/u/12634274?"
//       }
//     },
//     {
//       "id": "8022412601",
//       "type": "PushEvent",
//       "actor": {
//         "id": 218592,
//         "login": "stevebrownlee",
//         "display_login": "stevebrownlee",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stevebrownlee",
//         "avatar_url": "https://avatars.githubusercontent.com/u/218592?"
//       },
//       "repo": {
//         "id": 101137613,
//         "name": "nashville-software-school/client-side-mastery",
//         "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery"
//       },
//       "payload": {
//         "push_id": 2749408782,
//         "size": 2,
//         "distinct_size": 1,
//         "ref": "refs/heads/master",
//         "head": "d6d0adb79fd718a4d5f289511498c730553dfc31",
//         "before": "eb936b07ea7322a5e73419c35d98f530abaab265",
//         "commits": [
//           {
//             "sha": "55f7b314ce657a501493085a4c86c5ff34204934",
//             "author": {
//               "email": "chortlehoort@gmail.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Fixes to the new operator chapter",
//             "distinct": false,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/55f7b314ce657a501493085a4c86c5ff34204934"
//           },
//           {
//             "sha": "d6d0adb79fd718a4d5f289511498c730553dfc31",
//             "author": {
//               "email": "stevebrownlee@users.noreply.github.com",
//               "name": "Steve Brownlee"
//             },
//             "message": "Merge pull request #30 from nashville-software-school/new-fixes\n\nFixes to the new operator chapter",
//             "distinct": true,
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits/d6d0adb79fd718a4d5f289511498c730553dfc31"
//           }
//         ]
//       },
//       "public": true,
//       "created_at": "2018-07-26T12:33:45Z",
//       "org": {
//         "id": 12634274,
//         "login": "nashville-software-school",
//         "gravatar_id": "",
//         "url": "https://api.github.com/orgs/nashville-software-school",
//         "avatar_url": "https://avatars.githubusercontent.com/u/12634274?"
//       }
//     },
//     {
//       "id": "8022412534",
//       "type": "PullRequestEvent",
//       "actor": {
//         "id": 218592,
//         "login": "stevebrownlee",
//         "display_login": "stevebrownlee",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stevebrownlee",
//         "avatar_url": "https://avatars.githubusercontent.com/u/218592?"
//       },
//       "repo": {
//         "id": 101137613,
//         "name": "nashville-software-school/client-side-mastery",
//         "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery"
//       },
//       "payload": {
//         "action": "closed",
//         "number": 30,
//         "pull_request": {
//           "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/30",
//           "id": 204127154,
//           "node_id": "MDExOlB1bGxSZXF1ZXN0MjA0MTI3MTU0",
//           "html_url": "https://github.com/nashville-software-school/client-side-mastery/pull/30",
//           "diff_url": "https://github.com/nashville-software-school/client-side-mastery/pull/30.diff",
//           "patch_url": "https://github.com/nashville-software-school/client-side-mastery/pull/30.patch",
//           "issue_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/30",
//           "number": 30,
//           "state": "closed",
//           "locked": false,
//           "title": "Fixes to the new operator chapter",
//           "user": {
//             "login": "stevebrownlee",
//             "id": 218592,
//             "node_id": "MDQ6VXNlcjIxODU5Mg==",
//             "avatar_url": "https://avatars3.githubusercontent.com/u/218592?v=4",
//             "gravatar_id": "",
//             "url": "https://api.github.com/users/stevebrownlee",
//             "html_url": "https://github.com/stevebrownlee",
//             "followers_url": "https://api.github.com/users/stevebrownlee/followers",
//             "following_url": "https://api.github.com/users/stevebrownlee/following{/other_user}",
//             "gists_url": "https://api.github.com/users/stevebrownlee/gists{/gist_id}",
//             "starred_url": "https://api.github.com/users/stevebrownlee/starred{/owner}{/repo}",
//             "subscriptions_url": "https://api.github.com/users/stevebrownlee/subscriptions",
//             "organizations_url": "https://api.github.com/users/stevebrownlee/orgs",
//             "repos_url": "https://api.github.com/users/stevebrownlee/repos",
//             "events_url": "https://api.github.com/users/stevebrownlee/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/stevebrownlee/received_events",
//             "type": "User",
//             "site_admin": false
//           },
//           "body": "There were some syntax errors that needed to be fixed",
//           "created_at": "2018-07-26T12:33:37Z",
//           "updated_at": "2018-07-26T12:33:44Z",
//           "closed_at": "2018-07-26T12:33:44Z",
//           "merged_at": "2018-07-26T12:33:44Z",
//           "merge_commit_sha": "d6d0adb79fd718a4d5f289511498c730553dfc31",
//           "assignee": null,
//           "assignees": [

//           ],
//           "requested_reviewers": [

//           ],
//           "requested_teams": [

//           ],
//           "labels": [

//           ],
//           "milestone": null,
//           "commits_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/30/commits",
//           "review_comments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/30/comments",
//           "review_comment_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/comments{/number}",
//           "comments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/30/comments",
//           "statuses_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/statuses/55f7b314ce657a501493085a4c86c5ff34204934",
//           "head": {
//             "label": "nashville-software-school:new-fixes",
//             "ref": "new-fixes",
//             "sha": "55f7b314ce657a501493085a4c86c5ff34204934",
//             "user": {
//               "login": "nashville-software-school",
//               "id": 12634274,
//               "node_id": "MDEyOk9yZ2FuaXphdGlvbjEyNjM0Mjc0",
//               "avatar_url": "https://avatars3.githubusercontent.com/u/12634274?v=4",
//               "gravatar_id": "",
//               "url": "https://api.github.com/users/nashville-software-school",
//               "html_url": "https://github.com/nashville-software-school",
//               "followers_url": "https://api.github.com/users/nashville-software-school/followers",
//               "following_url": "https://api.github.com/users/nashville-software-school/following{/other_user}",
//               "gists_url": "https://api.github.com/users/nashville-software-school/gists{/gist_id}",
//               "starred_url": "https://api.github.com/users/nashville-software-school/starred{/owner}{/repo}",
//               "subscriptions_url": "https://api.github.com/users/nashville-software-school/subscriptions",
//               "organizations_url": "https://api.github.com/users/nashville-software-school/orgs",
//               "repos_url": "https://api.github.com/users/nashville-software-school/repos",
//               "events_url": "https://api.github.com/users/nashville-software-school/events{/privacy}",
//               "received_events_url": "https://api.github.com/users/nashville-software-school/received_events",
//               "type": "Organization",
//               "site_admin": false
//             },
//             "repo": {
//               "id": 101137613,
//               "node_id": "MDEwOlJlcG9zaXRvcnkxMDExMzc2MTM=",
//               "name": "client-side-mastery",
//               "full_name": "nashville-software-school/client-side-mastery",
//               "owner": {
//                 "login": "nashville-software-school",
//                 "id": 12634274,
//                 "node_id": "MDEyOk9yZ2FuaXphdGlvbjEyNjM0Mjc0",
//                 "avatar_url": "https://avatars3.githubusercontent.com/u/12634274?v=4",
//                 "gravatar_id": "",
//                 "url": "https://api.github.com/users/nashville-software-school",
//                 "html_url": "https://github.com/nashville-software-school",
//                 "followers_url": "https://api.github.com/users/nashville-software-school/followers",
//                 "following_url": "https://api.github.com/users/nashville-software-school/following{/other_user}",
//                 "gists_url": "https://api.github.com/users/nashville-software-school/gists{/gist_id}",
//                 "starred_url": "https://api.github.com/users/nashville-software-school/starred{/owner}{/repo}",
//                 "subscriptions_url": "https://api.github.com/users/nashville-software-school/subscriptions",
//                 "organizations_url": "https://api.github.com/users/nashville-software-school/orgs",
//                 "repos_url": "https://api.github.com/users/nashville-software-school/repos",
//                 "events_url": "https://api.github.com/users/nashville-software-school/events{/privacy}",
//                 "received_events_url": "https://api.github.com/users/nashville-software-school/received_events",
//                 "type": "Organization",
//                 "site_admin": false
//               },
//               "private": false,
//               "html_url": "https://github.com/nashville-software-school/client-side-mastery",
//               "description": "Client side technology course for Nashville Software School",
//               "fork": false,
//               "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery",
//               "forks_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/forks",
//               "keys_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/keys{/key_id}",
//               "collaborators_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/collaborators{/collaborator}",
//               "teams_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/teams",
//               "hooks_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/hooks",
//               "issue_events_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/events{/number}",
//               "events_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/events",
//               "assignees_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/assignees{/user}",
//               "branches_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/branches{/branch}",
//               "tags_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/tags",
//               "blobs_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/blobs{/sha}",
//               "git_tags_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/tags{/sha}",
//               "git_refs_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/refs{/sha}",
//               "trees_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/trees{/sha}",
//               "statuses_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/statuses/{sha}",
//               "languages_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/languages",
//               "stargazers_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/stargazers",
//               "contributors_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/contributors",
//               "subscribers_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/subscribers",
//               "subscription_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/subscription",
//               "commits_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits{/sha}",
//               "git_commits_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/commits{/sha}",
//               "comments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/comments{/number}",
//               "issue_comment_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/comments{/number}",
//               "contents_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/contents/{+path}",
//               "compare_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/compare/{base}...{head}",
//               "merges_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/merges",
//               "archive_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/{archive_format}{/ref}",
//               "downloads_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/downloads",
//               "issues_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues{/number}",
//               "pulls_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls{/number}",
//               "milestones_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/milestones{/number}",
//               "notifications_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/notifications{?since,all,participating}",
//               "labels_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/labels{/name}",
//               "releases_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/releases{/id}",
//               "deployments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/deployments",
//               "created_at": "2017-08-23T04:27:07Z",
//               "updated_at": "2018-07-25T20:46:21Z",
//               "pushed_at": "2018-07-26T12:33:44Z",
//               "git_url": "git://github.com/nashville-software-school/client-side-mastery.git",
//               "ssh_url": "git@github.com:nashville-software-school/client-side-mastery.git",
//               "clone_url": "https://github.com/nashville-software-school/client-side-mastery.git",
//               "svn_url": "https://github.com/nashville-software-school/client-side-mastery",
//               "homepage": "",
//               "size": 53828,
//               "stargazers_count": 39,
//               "watchers_count": 39,
//               "language": "JavaScript",
//               "has_issues": true,
//               "has_projects": true,
//               "has_downloads": true,
//               "has_wiki": true,
//               "has_pages": false,
//               "forks_count": 29,
//               "mirror_url": null,
//               "archived": false,
//               "open_issues_count": 4,
//               "license": {
//                 "key": "apache-2.0",
//                 "name": "Apache License 2.0",
//                 "spdx_id": "Apache-2.0",
//                 "url": "https://api.github.com/licenses/apache-2.0",
//                 "node_id": "MDc6TGljZW5zZTI="
//               },
//               "forks": 29,
//               "open_issues": 4,
//               "watchers": 39,
//               "default_branch": "master"
//             }
//           },
//           "base": {
//             "label": "nashville-software-school:master",
//             "ref": "master",
//             "sha": "eb936b07ea7322a5e73419c35d98f530abaab265",
//             "user": {
//               "login": "nashville-software-school",
//               "id": 12634274,
//               "node_id": "MDEyOk9yZ2FuaXphdGlvbjEyNjM0Mjc0",
//               "avatar_url": "https://avatars3.githubusercontent.com/u/12634274?v=4",
//               "gravatar_id": "",
//               "url": "https://api.github.com/users/nashville-software-school",
//               "html_url": "https://github.com/nashville-software-school",
//               "followers_url": "https://api.github.com/users/nashville-software-school/followers",
//               "following_url": "https://api.github.com/users/nashville-software-school/following{/other_user}",
//               "gists_url": "https://api.github.com/users/nashville-software-school/gists{/gist_id}",
//               "starred_url": "https://api.github.com/users/nashville-software-school/starred{/owner}{/repo}",
//               "subscriptions_url": "https://api.github.com/users/nashville-software-school/subscriptions",
//               "organizations_url": "https://api.github.com/users/nashville-software-school/orgs",
//               "repos_url": "https://api.github.com/users/nashville-software-school/repos",
//               "events_url": "https://api.github.com/users/nashville-software-school/events{/privacy}",
//               "received_events_url": "https://api.github.com/users/nashville-software-school/received_events",
//               "type": "Organization",
//               "site_admin": false
//             },
//             "repo": {
//               "id": 101137613,
//               "node_id": "MDEwOlJlcG9zaXRvcnkxMDExMzc2MTM=",
//               "name": "client-side-mastery",
//               "full_name": "nashville-software-school/client-side-mastery",
//               "owner": {
//                 "login": "nashville-software-school",
//                 "id": 12634274,
//                 "node_id": "MDEyOk9yZ2FuaXphdGlvbjEyNjM0Mjc0",
//                 "avatar_url": "https://avatars3.githubusercontent.com/u/12634274?v=4",
//                 "gravatar_id": "",
//                 "url": "https://api.github.com/users/nashville-software-school",
//                 "html_url": "https://github.com/nashville-software-school",
//                 "followers_url": "https://api.github.com/users/nashville-software-school/followers",
//                 "following_url": "https://api.github.com/users/nashville-software-school/following{/other_user}",
//                 "gists_url": "https://api.github.com/users/nashville-software-school/gists{/gist_id}",
//                 "starred_url": "https://api.github.com/users/nashville-software-school/starred{/owner}{/repo}",
//                 "subscriptions_url": "https://api.github.com/users/nashville-software-school/subscriptions",
//                 "organizations_url": "https://api.github.com/users/nashville-software-school/orgs",
//                 "repos_url": "https://api.github.com/users/nashville-software-school/repos",
//                 "events_url": "https://api.github.com/users/nashville-software-school/events{/privacy}",
//                 "received_events_url": "https://api.github.com/users/nashville-software-school/received_events",
//                 "type": "Organization",
//                 "site_admin": false
//               },
//               "private": false,
//               "html_url": "https://github.com/nashville-software-school/client-side-mastery",
//               "description": "Client side technology course for Nashville Software School",
//               "fork": false,
//               "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery",
//               "forks_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/forks",
//               "keys_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/keys{/key_id}",
//               "collaborators_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/collaborators{/collaborator}",
//               "teams_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/teams",
//               "hooks_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/hooks",
//               "issue_events_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/events{/number}",
//               "events_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/events",
//               "assignees_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/assignees{/user}",
//               "branches_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/branches{/branch}",
//               "tags_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/tags",
//               "blobs_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/blobs{/sha}",
//               "git_tags_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/tags{/sha}",
//               "git_refs_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/refs{/sha}",
//               "trees_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/trees{/sha}",
//               "statuses_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/statuses/{sha}",
//               "languages_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/languages",
//               "stargazers_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/stargazers",
//               "contributors_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/contributors",
//               "subscribers_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/subscribers",
//               "subscription_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/subscription",
//               "commits_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits{/sha}",
//               "git_commits_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/commits{/sha}",
//               "comments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/comments{/number}",
//               "issue_comment_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/comments{/number}",
//               "contents_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/contents/{+path}",
//               "compare_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/compare/{base}...{head}",
//               "merges_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/merges",
//               "archive_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/{archive_format}{/ref}",
//               "downloads_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/downloads",
//               "issues_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues{/number}",
//               "pulls_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls{/number}",
//               "milestones_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/milestones{/number}",
//               "notifications_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/notifications{?since,all,participating}",
//               "labels_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/labels{/name}",
//               "releases_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/releases{/id}",
//               "deployments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/deployments",
//               "created_at": "2017-08-23T04:27:07Z",
//               "updated_at": "2018-07-25T20:46:21Z",
//               "pushed_at": "2018-07-26T12:33:44Z",
//               "git_url": "git://github.com/nashville-software-school/client-side-mastery.git",
//               "ssh_url": "git@github.com:nashville-software-school/client-side-mastery.git",
//               "clone_url": "https://github.com/nashville-software-school/client-side-mastery.git",
//               "svn_url": "https://github.com/nashville-software-school/client-side-mastery",
//               "homepage": "",
//               "size": 53828,
//               "stargazers_count": 39,
//               "watchers_count": 39,
//               "language": "JavaScript",
//               "has_issues": true,
//               "has_projects": true,
//               "has_downloads": true,
//               "has_wiki": true,
//               "has_pages": false,
//               "forks_count": 29,
//               "mirror_url": null,
//               "archived": false,
//               "open_issues_count": 4,
//               "license": {
//                 "key": "apache-2.0",
//                 "name": "Apache License 2.0",
//                 "spdx_id": "Apache-2.0",
//                 "url": "https://api.github.com/licenses/apache-2.0",
//                 "node_id": "MDc6TGljZW5zZTI="
//               },
//               "forks": 29,
//               "open_issues": 4,
//               "watchers": 39,
//               "default_branch": "master"
//             }
//           },
//           "_links": {
//             "self": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/30"
//             },
//             "html": {
//               "href": "https://github.com/nashville-software-school/client-side-mastery/pull/30"
//             },
//             "issue": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/30"
//             },
//             "comments": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/30/comments"
//             },
//             "review_comments": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/30/comments"
//             },
//             "review_comment": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/comments{/number}"
//             },
//             "commits": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/30/commits"
//             },
//             "statuses": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/statuses/55f7b314ce657a501493085a4c86c5ff34204934"
//             }
//           },
//           "author_association": "CONTRIBUTOR",
//           "merged": true,
//           "mergeable": null,
//           "rebaseable": null,
//           "mergeable_state": "unknown",
//           "merged_by": {
//             "login": "stevebrownlee",
//             "id": 218592,
//             "node_id": "MDQ6VXNlcjIxODU5Mg==",
//             "avatar_url": "https://avatars3.githubusercontent.com/u/218592?v=4",
//             "gravatar_id": "",
//             "url": "https://api.github.com/users/stevebrownlee",
//             "html_url": "https://github.com/stevebrownlee",
//             "followers_url": "https://api.github.com/users/stevebrownlee/followers",
//             "following_url": "https://api.github.com/users/stevebrownlee/following{/other_user}",
//             "gists_url": "https://api.github.com/users/stevebrownlee/gists{/gist_id}",
//             "starred_url": "https://api.github.com/users/stevebrownlee/starred{/owner}{/repo}",
//             "subscriptions_url": "https://api.github.com/users/stevebrownlee/subscriptions",
//             "organizations_url": "https://api.github.com/users/stevebrownlee/orgs",
//             "repos_url": "https://api.github.com/users/stevebrownlee/repos",
//             "events_url": "https://api.github.com/users/stevebrownlee/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/stevebrownlee/received_events",
//             "type": "User",
//             "site_admin": false
//           },
//           "comments": 0,
//           "review_comments": 0,
//           "maintainer_can_modify": false,
//           "commits": 1,
//           "additions": 3,
//           "deletions": 3,
//           "changed_files": 1
//         }
//       },
//       "public": true,
//       "created_at": "2018-07-26T12:33:44Z",
//       "org": {
//         "id": 12634274,
//         "login": "nashville-software-school",
//         "gravatar_id": "",
//         "url": "https://api.github.com/orgs/nashville-software-school",
//         "avatar_url": "https://avatars.githubusercontent.com/u/12634274?"
//       }
//     },
//     {
//       "id": "8022411990",
//       "type": "PullRequestEvent",
//       "actor": {
//         "id": 218592,
//         "login": "stevebrownlee",
//         "display_login": "stevebrownlee",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stevebrownlee",
//         "avatar_url": "https://avatars.githubusercontent.com/u/218592?"
//       },
//       "repo": {
//         "id": 101137613,
//         "name": "nashville-software-school/client-side-mastery",
//         "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery"
//       },
//       "payload": {
//         "action": "opened",
//         "number": 30,
//         "pull_request": {
//           "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/30",
//           "id": 204127154,
//           "node_id": "MDExOlB1bGxSZXF1ZXN0MjA0MTI3MTU0",
//           "html_url": "https://github.com/nashville-software-school/client-side-mastery/pull/30",
//           "diff_url": "https://github.com/nashville-software-school/client-side-mastery/pull/30.diff",
//           "patch_url": "https://github.com/nashville-software-school/client-side-mastery/pull/30.patch",
//           "issue_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/30",
//           "number": 30,
//           "state": "open",
//           "locked": false,
//           "title": "Fixes to the new operator chapter",
//           "user": {
//             "login": "stevebrownlee",
//             "id": 218592,
//             "node_id": "MDQ6VXNlcjIxODU5Mg==",
//             "avatar_url": "https://avatars3.githubusercontent.com/u/218592?v=4",
//             "gravatar_id": "",
//             "url": "https://api.github.com/users/stevebrownlee",
//             "html_url": "https://github.com/stevebrownlee",
//             "followers_url": "https://api.github.com/users/stevebrownlee/followers",
//             "following_url": "https://api.github.com/users/stevebrownlee/following{/other_user}",
//             "gists_url": "https://api.github.com/users/stevebrownlee/gists{/gist_id}",
//             "starred_url": "https://api.github.com/users/stevebrownlee/starred{/owner}{/repo}",
//             "subscriptions_url": "https://api.github.com/users/stevebrownlee/subscriptions",
//             "organizations_url": "https://api.github.com/users/stevebrownlee/orgs",
//             "repos_url": "https://api.github.com/users/stevebrownlee/repos",
//             "events_url": "https://api.github.com/users/stevebrownlee/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/stevebrownlee/received_events",
//             "type": "User",
//             "site_admin": false
//           },
//           "body": "There were some syntax errors that needed to be fixed",
//           "created_at": "2018-07-26T12:33:37Z",
//           "updated_at": "2018-07-26T12:33:37Z",
//           "closed_at": null,
//           "merged_at": null,
//           "merge_commit_sha": null,
//           "assignee": null,
//           "assignees": [

//           ],
//           "requested_reviewers": [

//           ],
//           "requested_teams": [

//           ],
//           "labels": [

//           ],
//           "milestone": null,
//           "commits_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/30/commits",
//           "review_comments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/30/comments",
//           "review_comment_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/comments{/number}",
//           "comments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/30/comments",
//           "statuses_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/statuses/55f7b314ce657a501493085a4c86c5ff34204934",
//           "head": {
//             "label": "nashville-software-school:new-fixes",
//             "ref": "new-fixes",
//             "sha": "55f7b314ce657a501493085a4c86c5ff34204934",
//             "user": {
//               "login": "nashville-software-school",
//               "id": 12634274,
//               "node_id": "MDEyOk9yZ2FuaXphdGlvbjEyNjM0Mjc0",
//               "avatar_url": "https://avatars3.githubusercontent.com/u/12634274?v=4",
//               "gravatar_id": "",
//               "url": "https://api.github.com/users/nashville-software-school",
//               "html_url": "https://github.com/nashville-software-school",
//               "followers_url": "https://api.github.com/users/nashville-software-school/followers",
//               "following_url": "https://api.github.com/users/nashville-software-school/following{/other_user}",
//               "gists_url": "https://api.github.com/users/nashville-software-school/gists{/gist_id}",
//               "starred_url": "https://api.github.com/users/nashville-software-school/starred{/owner}{/repo}",
//               "subscriptions_url": "https://api.github.com/users/nashville-software-school/subscriptions",
//               "organizations_url": "https://api.github.com/users/nashville-software-school/orgs",
//               "repos_url": "https://api.github.com/users/nashville-software-school/repos",
//               "events_url": "https://api.github.com/users/nashville-software-school/events{/privacy}",
//               "received_events_url": "https://api.github.com/users/nashville-software-school/received_events",
//               "type": "Organization",
//               "site_admin": false
//             },
//             "repo": {
//               "id": 101137613,
//               "node_id": "MDEwOlJlcG9zaXRvcnkxMDExMzc2MTM=",
//               "name": "client-side-mastery",
//               "full_name": "nashville-software-school/client-side-mastery",
//               "owner": {
//                 "login": "nashville-software-school",
//                 "id": 12634274,
//                 "node_id": "MDEyOk9yZ2FuaXphdGlvbjEyNjM0Mjc0",
//                 "avatar_url": "https://avatars3.githubusercontent.com/u/12634274?v=4",
//                 "gravatar_id": "",
//                 "url": "https://api.github.com/users/nashville-software-school",
//                 "html_url": "https://github.com/nashville-software-school",
//                 "followers_url": "https://api.github.com/users/nashville-software-school/followers",
//                 "following_url": "https://api.github.com/users/nashville-software-school/following{/other_user}",
//                 "gists_url": "https://api.github.com/users/nashville-software-school/gists{/gist_id}",
//                 "starred_url": "https://api.github.com/users/nashville-software-school/starred{/owner}{/repo}",
//                 "subscriptions_url": "https://api.github.com/users/nashville-software-school/subscriptions",
//                 "organizations_url": "https://api.github.com/users/nashville-software-school/orgs",
//                 "repos_url": "https://api.github.com/users/nashville-software-school/repos",
//                 "events_url": "https://api.github.com/users/nashville-software-school/events{/privacy}",
//                 "received_events_url": "https://api.github.com/users/nashville-software-school/received_events",
//                 "type": "Organization",
//                 "site_admin": false
//               },
//               "private": false,
//               "html_url": "https://github.com/nashville-software-school/client-side-mastery",
//               "description": "Client side technology course for Nashville Software School",
//               "fork": false,
//               "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery",
//               "forks_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/forks",
//               "keys_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/keys{/key_id}",
//               "collaborators_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/collaborators{/collaborator}",
//               "teams_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/teams",
//               "hooks_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/hooks",
//               "issue_events_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/events{/number}",
//               "events_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/events",
//               "assignees_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/assignees{/user}",
//               "branches_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/branches{/branch}",
//               "tags_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/tags",
//               "blobs_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/blobs{/sha}",
//               "git_tags_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/tags{/sha}",
//               "git_refs_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/refs{/sha}",
//               "trees_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/trees{/sha}",
//               "statuses_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/statuses/{sha}",
//               "languages_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/languages",
//               "stargazers_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/stargazers",
//               "contributors_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/contributors",
//               "subscribers_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/subscribers",
//               "subscription_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/subscription",
//               "commits_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits{/sha}",
//               "git_commits_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/commits{/sha}",
//               "comments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/comments{/number}",
//               "issue_comment_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/comments{/number}",
//               "contents_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/contents/{+path}",
//               "compare_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/compare/{base}...{head}",
//               "merges_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/merges",
//               "archive_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/{archive_format}{/ref}",
//               "downloads_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/downloads",
//               "issues_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues{/number}",
//               "pulls_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls{/number}",
//               "milestones_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/milestones{/number}",
//               "notifications_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/notifications{?since,all,participating}",
//               "labels_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/labels{/name}",
//               "releases_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/releases{/id}",
//               "deployments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/deployments",
//               "created_at": "2017-08-23T04:27:07Z",
//               "updated_at": "2018-07-25T20:46:21Z",
//               "pushed_at": "2018-07-26T12:33:12Z",
//               "git_url": "git://github.com/nashville-software-school/client-side-mastery.git",
//               "ssh_url": "git@github.com:nashville-software-school/client-side-mastery.git",
//               "clone_url": "https://github.com/nashville-software-school/client-side-mastery.git",
//               "svn_url": "https://github.com/nashville-software-school/client-side-mastery",
//               "homepage": "",
//               "size": 53828,
//               "stargazers_count": 39,
//               "watchers_count": 39,
//               "language": "JavaScript",
//               "has_issues": true,
//               "has_projects": true,
//               "has_downloads": true,
//               "has_wiki": true,
//               "has_pages": false,
//               "forks_count": 29,
//               "mirror_url": null,
//               "archived": false,
//               "open_issues_count": 5,
//               "license": {
//                 "key": "apache-2.0",
//                 "name": "Apache License 2.0",
//                 "spdx_id": "Apache-2.0",
//                 "url": "https://api.github.com/licenses/apache-2.0",
//                 "node_id": "MDc6TGljZW5zZTI="
//               },
//               "forks": 29,
//               "open_issues": 5,
//               "watchers": 39,
//               "default_branch": "master"
//             }
//           },
//           "base": {
//             "label": "nashville-software-school:master",
//             "ref": "master",
//             "sha": "eb936b07ea7322a5e73419c35d98f530abaab265",
//             "user": {
//               "login": "nashville-software-school",
//               "id": 12634274,
//               "node_id": "MDEyOk9yZ2FuaXphdGlvbjEyNjM0Mjc0",
//               "avatar_url": "https://avatars3.githubusercontent.com/u/12634274?v=4",
//               "gravatar_id": "",
//               "url": "https://api.github.com/users/nashville-software-school",
//               "html_url": "https://github.com/nashville-software-school",
//               "followers_url": "https://api.github.com/users/nashville-software-school/followers",
//               "following_url": "https://api.github.com/users/nashville-software-school/following{/other_user}",
//               "gists_url": "https://api.github.com/users/nashville-software-school/gists{/gist_id}",
//               "starred_url": "https://api.github.com/users/nashville-software-school/starred{/owner}{/repo}",
//               "subscriptions_url": "https://api.github.com/users/nashville-software-school/subscriptions",
//               "organizations_url": "https://api.github.com/users/nashville-software-school/orgs",
//               "repos_url": "https://api.github.com/users/nashville-software-school/repos",
//               "events_url": "https://api.github.com/users/nashville-software-school/events{/privacy}",
//               "received_events_url": "https://api.github.com/users/nashville-software-school/received_events",
//               "type": "Organization",
//               "site_admin": false
//             },
//             "repo": {
//               "id": 101137613,
//               "node_id": "MDEwOlJlcG9zaXRvcnkxMDExMzc2MTM=",
//               "name": "client-side-mastery",
//               "full_name": "nashville-software-school/client-side-mastery",
//               "owner": {
//                 "login": "nashville-software-school",
//                 "id": 12634274,
//                 "node_id": "MDEyOk9yZ2FuaXphdGlvbjEyNjM0Mjc0",
//                 "avatar_url": "https://avatars3.githubusercontent.com/u/12634274?v=4",
//                 "gravatar_id": "",
//                 "url": "https://api.github.com/users/nashville-software-school",
//                 "html_url": "https://github.com/nashville-software-school",
//                 "followers_url": "https://api.github.com/users/nashville-software-school/followers",
//                 "following_url": "https://api.github.com/users/nashville-software-school/following{/other_user}",
//                 "gists_url": "https://api.github.com/users/nashville-software-school/gists{/gist_id}",
//                 "starred_url": "https://api.github.com/users/nashville-software-school/starred{/owner}{/repo}",
//                 "subscriptions_url": "https://api.github.com/users/nashville-software-school/subscriptions",
//                 "organizations_url": "https://api.github.com/users/nashville-software-school/orgs",
//                 "repos_url": "https://api.github.com/users/nashville-software-school/repos",
//                 "events_url": "https://api.github.com/users/nashville-software-school/events{/privacy}",
//                 "received_events_url": "https://api.github.com/users/nashville-software-school/received_events",
//                 "type": "Organization",
//                 "site_admin": false
//               },
//               "private": false,
//               "html_url": "https://github.com/nashville-software-school/client-side-mastery",
//               "description": "Client side technology course for Nashville Software School",
//               "fork": false,
//               "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery",
//               "forks_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/forks",
//               "keys_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/keys{/key_id}",
//               "collaborators_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/collaborators{/collaborator}",
//               "teams_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/teams",
//               "hooks_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/hooks",
//               "issue_events_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/events{/number}",
//               "events_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/events",
//               "assignees_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/assignees{/user}",
//               "branches_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/branches{/branch}",
//               "tags_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/tags",
//               "blobs_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/blobs{/sha}",
//               "git_tags_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/tags{/sha}",
//               "git_refs_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/refs{/sha}",
//               "trees_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/trees{/sha}",
//               "statuses_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/statuses/{sha}",
//               "languages_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/languages",
//               "stargazers_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/stargazers",
//               "contributors_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/contributors",
//               "subscribers_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/subscribers",
//               "subscription_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/subscription",
//               "commits_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/commits{/sha}",
//               "git_commits_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/git/commits{/sha}",
//               "comments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/comments{/number}",
//               "issue_comment_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/comments{/number}",
//               "contents_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/contents/{+path}",
//               "compare_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/compare/{base}...{head}",
//               "merges_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/merges",
//               "archive_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/{archive_format}{/ref}",
//               "downloads_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/downloads",
//               "issues_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues{/number}",
//               "pulls_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls{/number}",
//               "milestones_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/milestones{/number}",
//               "notifications_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/notifications{?since,all,participating}",
//               "labels_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/labels{/name}",
//               "releases_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/releases{/id}",
//               "deployments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/deployments",
//               "created_at": "2017-08-23T04:27:07Z",
//               "updated_at": "2018-07-25T20:46:21Z",
//               "pushed_at": "2018-07-26T12:33:12Z",
//               "git_url": "git://github.com/nashville-software-school/client-side-mastery.git",
//               "ssh_url": "git@github.com:nashville-software-school/client-side-mastery.git",
//               "clone_url": "https://github.com/nashville-software-school/client-side-mastery.git",
//               "svn_url": "https://github.com/nashville-software-school/client-side-mastery",
//               "homepage": "",
//               "size": 53828,
//               "stargazers_count": 39,
//               "watchers_count": 39,
//               "language": "JavaScript",
//               "has_issues": true,
//               "has_projects": true,
//               "has_downloads": true,
//               "has_wiki": true,
//               "has_pages": false,
//               "forks_count": 29,
//               "mirror_url": null,
//               "archived": false,
//               "open_issues_count": 5,
//               "license": {
//                 "key": "apache-2.0",
//                 "name": "Apache License 2.0",
//                 "spdx_id": "Apache-2.0",
//                 "url": "https://api.github.com/licenses/apache-2.0",
//                 "node_id": "MDc6TGljZW5zZTI="
//               },
//               "forks": 29,
//               "open_issues": 5,
//               "watchers": 39,
//               "default_branch": "master"
//             }
//           },
//           "_links": {
//             "self": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/30"
//             },
//             "html": {
//               "href": "https://github.com/nashville-software-school/client-side-mastery/pull/30"
//             },
//             "issue": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/30"
//             },
//             "comments": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/30/comments"
//             },
//             "review_comments": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/30/comments"
//             },
//             "review_comment": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/comments{/number}"
//             },
//             "commits": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/30/commits"
//             },
//             "statuses": {
//               "href": "https://api.github.com/repos/nashville-software-school/client-side-mastery/statuses/55f7b314ce657a501493085a4c86c5ff34204934"
//             }
//           },
//           "author_association": "CONTRIBUTOR",
//           "merged": false,
//           "mergeable": null,
//           "rebaseable": null,
//           "mergeable_state": "unknown",
//           "merged_by": null,
//           "comments": 0,
//           "review_comments": 0,
//           "maintainer_can_modify": false,
//           "commits": 1,
//           "additions": 3,
//           "deletions": 3,
//           "changed_files": 1
//         }
//       },
//       "public": true,
//       "created_at": "2018-07-26T12:33:37Z",
//       "org": {
//         "id": 12634274,
//         "login": "nashville-software-school",
//         "gravatar_id": "",
//         "url": "https://api.github.com/orgs/nashville-software-school",
//         "avatar_url": "https://avatars.githubusercontent.com/u/12634274?"
//       }
//     },
//     {
//       "id": "8022409956",
//       "type": "CreateEvent",
//       "actor": {
//         "id": 218592,
//         "login": "stevebrownlee",
//         "display_login": "stevebrownlee",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stevebrownlee",
//         "avatar_url": "https://avatars.githubusercontent.com/u/218592?"
//       },
//       "repo": {
//         "id": 101137613,
//         "name": "nashville-software-school/client-side-mastery",
//         "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery"
//       },
//       "payload": {
//         "ref": "new-fixes",
//         "ref_type": "branch",
//         "master_branch": "master",
//         "description": "Client side technology course for Nashville Software School",
//         "pusher_type": "user"
//       },
//       "public": true,
//       "created_at": "2018-07-26T12:33:12Z",
//       "org": {
//         "id": 12634274,
//         "login": "nashville-software-school",
//         "gravatar_id": "",
//         "url": "https://api.github.com/orgs/nashville-software-school",
//         "avatar_url": "https://avatars.githubusercontent.com/u/12634274?"
//       }
//     },
//     {
//       "id": "8019034429",
//       "type": "IssueCommentEvent",
//       "actor": {
//         "id": 218592,
//         "login": "stevebrownlee",
//         "display_login": "stevebrownlee",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/stevebrownlee",
//         "avatar_url": "https://avatars.githubusercontent.com/u/218592?"
//       },
//       "repo": {
//         "id": 101137613,
//         "name": "nashville-software-school/client-side-mastery",
//         "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery"
//       },
//       "payload": {
//         "action": "created",
//         "issue": {
//           "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/24",
//           "repository_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery",
//           "labels_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/24/labels{/name}",
//           "comments_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/24/comments",
//           "events_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/24/events",
//           "html_url": "https://github.com/nashville-software-school/client-side-mastery/pull/24",
//           "id": 341294131,
//           "node_id": "MDExOlB1bGxSZXF1ZXN0MjAxNDgyMTU3",
//           "number": 24,
//           "title": "Reorder React",
//           "user": {
//             "login": "stevebrownlee",
//             "id": 218592,
//             "node_id": "MDQ6VXNlcjIxODU5Mg==",
//             "avatar_url": "https://avatars3.githubusercontent.com/u/218592?v=4",
//             "gravatar_id": "",
//             "url": "https://api.github.com/users/stevebrownlee",
//             "html_url": "https://github.com/stevebrownlee",
//             "followers_url": "https://api.github.com/users/stevebrownlee/followers",
//             "following_url": "https://api.github.com/users/stevebrownlee/following{/other_user}",
//             "gists_url": "https://api.github.com/users/stevebrownlee/gists{/gist_id}",
//             "starred_url": "https://api.github.com/users/stevebrownlee/starred{/owner}{/repo}",
//             "subscriptions_url": "https://api.github.com/users/stevebrownlee/subscriptions",
//             "organizations_url": "https://api.github.com/users/stevebrownlee/orgs",
//             "repos_url": "https://api.github.com/users/stevebrownlee/repos",
//             "events_url": "https://api.github.com/users/stevebrownlee/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/stevebrownlee/received_events",
//             "type": "User",
//             "site_admin": false
//           },
//           "labels": [

//           ],
//           "state": "open",
//           "locked": false,
//           "assignee": null,
//           "assignees": [

//           ],
//           "milestone": null,
//           "comments": 0,
//           "created_at": "2018-07-15T05:44:06Z",
//           "updated_at": "2018-07-25T21:06:38Z",
//           "closed_at": null,
//           "author_association": "CONTRIBUTOR",
//           "pull_request": {
//             "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/pulls/24",
//             "html_url": "https://github.com/nashville-software-school/client-side-mastery/pull/24",
//             "diff_url": "https://github.com/nashville-software-school/client-side-mastery/pull/24.diff",
//             "patch_url": "https://github.com/nashville-software-school/client-side-mastery/pull/24.patch"
//           },
//           "body": "After discussion with @jisie about her journey through teaching React, the chapters were reordered to delay the teaching of dynamic routing by a day or two."
//         },
//         "comment": {
//           "url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/comments/407895753",
//           "html_url": "https://github.com/nashville-software-school/client-side-mastery/pull/24#issuecomment-407895753",
//           "issue_url": "https://api.github.com/repos/nashville-software-school/client-side-mastery/issues/24",
//           "id": 407895753,
//           "node_id": "MDEyOklzc3VlQ29tbWVudDQwNzg5NTc1Mw==",
//           "user": {
//             "login": "stevebrownlee",
//             "id": 218592,
//             "node_id": "MDQ6VXNlcjIxODU5Mg==",
//             "avatar_url": "https://avatars3.githubusercontent.com/u/218592?v=4",
//             "gravatar_id": "",
//             "url": "https://api.github.com/users/stevebrownlee",
//             "html_url": "https://github.com/stevebrownlee",
//             "followers_url": "https://api.github.com/users/stevebrownlee/followers",
//             "following_url": "https://api.github.com/users/stevebrownlee/following{/other_user}",
//             "gists_url": "https://api.github.com/users/stevebrownlee/gists{/gist_id}",
//             "starred_url": "https://api.github.com/users/stevebrownlee/starred{/owner}{/repo}",
//             "subscriptions_url": "https://api.github.com/users/stevebrownlee/subscriptions",
//             "organizations_url": "https://api.github.com/users/stevebrownlee/orgs",
//             "repos_url": "https://api.github.com/users/stevebrownlee/repos",
//             "events_url": "https://api.github.com/users/stevebrownlee/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/stevebrownlee/received_events",
//             "type": "User",
//             "site_admin": false
//           },
//           "created_at": "2018-07-25T21:06:38Z",
//           "updated_at": "2018-07-25T21:06:38Z",
//           "author_association": "CONTRIBUTOR",
//           "body": "@brendalong I made the first few chapters have the definition of the class and the export statement on separate lines. Then I show them combined and explain it. From that point on, they will see them combined."
//         }
//       },
//       "public": true,
//       "created_at": "2018-07-25T21:06:38Z",
//       "org": {
//         "id": 12634274,
//         "login": "nashville-software-school",
//         "gravatar_id": "",
//         "url": "https://api.github.com/orgs/nashville-software-school",
//         "avatar_url": "https://avatars.githubusercontent.com/u/12634274?"
//       }
//     }
//   ]

//   const exerciseNumber = githubData[6].payload.commits[0].message;
//   console.log(exerciseNumber);


// ---------------------------------------------------------------------------------------------------------------------------------------------

// JS_FUNCTION_BASICS.md


// Practice: ChickenMonkey
// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

// To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.

// You can start with this simpler version that outputs even numbers to the console and ignores odd numbers. You need to refactor this code to meet the requirements above.

// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     // Divide the current number by 2, and check if the remainder is 0
//     if (currentNumber % 5 && currentNumber % 7 === 0){
//       console.log("ChickenMonkey")
//     }
//     else if (currentNumber % 5 === 0) {
//         console.log("Chicken") // Only 2, 4, 6 will appear
//     }
//     else if (currentNumber% 7 === 0) {
//       console.log("Monkey")
//     }
//     else {
//       console.log(currentNumber)
//     }
//   }

// Practice: Take a Number - Battle of the Bands
// A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

// let bandNumber = 1

// const takeNumber = function (bandName) {
//     /*
//         Write your awesome code here. See comments
//         below for what should be returned.
//     */
//       bandNumber++;
//     return `${bandNumber} ${bandName}
//     `
// }

// const scum = takeNumber("Galactic Scum")
// console.log(scum)  // This should print "1. Galactic Scum" in the console

// const under = takeNumber("Underdogs")
// console.log(under)  // This should print "2. Underdogs" in the console

// const tcia = takeNumber("This City In Ashes")
// console.log(tcia);

// Practice Cookout

// const hamburger = {
// 	name: 'Hamburger',
// 	type: 'beef',
// 	cooked: false,
// }
// const zucchini = {
// 	name: 'Zucchini',
// 	type: 'vegetable',
// 	cooked: false,
// }
// const chickenBreast = {
// 	name: 'Chicken Breast',
// 	type: 'chicken',
// 	cooked: false,
// }
// const corn = {
// 	name: 'Corn',
// 	type: 'vegetable',
// 	cooked: false,
// }
// const steak = {
// 	name: 'Steak',
// 	type: 'beef',
// 	cooked: false,
// }

// // An array that is grouping the objects together.
// const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// // An empty array that will store the objects after the `grill()` function cooks the food.
// const cookedFood = [];
// // This exercise does not require you to alter this function. But read it. See if you can follow what it takes in, executes, and returns.

// // The grill() function. Copy this into your JavaScript as well.

// function grill (currentObject) {
//     // Modify the food so that it is cooked
//     currentObject.cooked = true;

//     // Put the cooked food into the appropriate array
//     cookedFood.push(currentObject);
//     console.log(cookedFood)
// };

// grill(hamburger);
// grill(zucchini);
// grill(chickenBreast);
// grill(corn);
// grill(steak);
// // Your task is to iterate over the array of foods and invoke the function for each item so that the cookedFood array contains all of the items after they are cooked.





// Practice: OVERLY EXCITED

// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
// function addExcitement (theWordArray) {

// Each time the for loop executes, you're going to add one more word to this string
// let buildMeUp = ""

// for (let i = 0; i < theWordArray.length; i++) {
// Concatenate the new word onto buildMeUp
// if ((i + 1) % 3 === 0){
// buildMeUp = `${buildMeUp} ${theWordArray[i]}!`}
// if (i === 0){
// buildMeUp = `${theWordArray[i]}`
// }
// else {
// buildMeUp = `${buildMeUp} ${theWordArray[i]}`
// Print buildMeUp to the console
//     }
//   }
// console.log(buildMeUp)
// }
// addExcitement(sentence);

// ----------------------------------------------------------------------------------------------------------------------------

// MISC_DEBUGGING.md

// try {
//     const domElement = document.getElementById("dynamicallyAddedElement");
//     domElement.innerHTML = "I was added after the user clicked on a button.";
// } catch (exception) {
//     console.error("The dynamic element has not been added to the DOM yet.");
// }


// ---------------------------------------------------------------------------------------------------

// OBJECTS_AS_THINGS.md


// const rufusTheDog = {
//     age: 4,
//     species: "Dalmatian",
//     contentsOfStomach: [],
//     eat: function (item) {
//         rufusTheDog.contentsOfStomach.push(item)
//         debugger;
//     },
//     puke: function () {
//         rufusTheDog.contentsOfStomach.clear()
//     },
//     bark: function (something) {
//         window.alert(`Rufus barks 'WOOF!' at ${something}`)
//     }
// }

// rufusTheDog.eat("leftovers");
// rufusTheDog.eat("treat");
// rufusTheDog.eat("bunny");




// Practice: Represent your Pet
// Create an object that represents your pet.

// Name property with a string value.
// Species property with a string value.
// Nicknames property with an array value. Array contains strings.
// Age property with an integer value

// const oliver ={
//     name: "Oliver",
//     species: "Cat",
//     nicknames: ["Ralph", "Angel Cat", "Grown Kitten"],
//     age: 4
// }



// Practice: Fast Food Ordering
// You need to write code to represent the process of ordering food at a fast food joint. Your restaurant is Bob's Burgers, and you have some starter code below. The object will have two behaviors that you must define.

// The object should have a property named orders that is an array. You will need to define this.
// Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.
// Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.
// const restaurant = {
//     name: "Bob's Burgers",
//     orders: ["chicken sandwich", "bacon cheeseburger", "chicken salad", "small drink", "large drink", "fries"],
//     placeOrder: function (mealName) {
//         if (mealName === "everything"){
//             console.log(`Fire up dem grills boys, I'm gettin it all. I want a ${this.orders}. Keep that grill hot cause I'mma comin back for seconds! `)
//         }
//         if (mealName.fries === true){
//       console.log(`I want a ${mealName.entree} with an order ${restaurant.orders[5]} and a ${mealName.drinkSize} please!`)}
//         if (mealName.fries === false){
//         console.log(`I want a ${mealName.entree}, no ${restaurant.orders[5]} and a ${mealName.drinkSize} please!`)}
//     }
// }

// const chickenComboMeal = {
//     entree: restaurant.orders[0],
//     fries: true,
//     drinkSize: restaurant.orders[4]

// }

// const baconCheeseMeal = {
//     entree: restaurant.orders[1],
//     fries: true,
//     drinkSize: restaurant.orders[4]
// }

// const chickenSaladMeal = {
//     entree: restaurant.orders[2],
//     fries: false,
//     drinkSize: restaurant.orders[3]
// }

// // Place an order
// restaurant.placeOrder(chickenComboMeal);
// restaurant.placeOrder(baconCheeseMeal);
// restaurant.placeOrder(chickenSaladMeal);
// restaurant.placeOrder("everything");



// // Invoke the function to return the list of all orders

// // Output all orders to the console using console.table()
// console.table(restaurant.orders);

// _________________________________________________________________
// JS_CREATING_COMPONENTS.md

const students = [
    {
        name: "Chris Miller",
        class: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        class: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        class: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        class: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        class: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        class: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        class: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        class: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        class: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        class: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        class: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        class: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]




const h1 = (title, style) => {
    return `<h1 class="${style}">${title}</h1>`
}


const section = (title, style) => {
    return `<section class="bordered dashed ${style}">${title}</section>`
}

const aside = (title, style) => {
    return `<aside class="${style}">${title}</aside>`
}

// Iterate the array of students, and apply the correct style to the h1 depending on the score of the student being below 60, or above it.
htmlString = "";

    for (const student of students) {
        let studentComponent = ""
        if (student.score >= 60) {
            studentComponent = `${h1(student.name,"passing xx-large")}`
        } else {
            studentComponent = `${h1(student.name, "failing xx-large")}`
        }

        studentComponent = `${studentComponent} ${section(student.class, "section--padded")} ${aside(student.info, "pushRight")}`
        // console.log(studentOutput);
       htmlString += studentComponent}

        document.querySelector("#container").innerHTML = htmlString;
