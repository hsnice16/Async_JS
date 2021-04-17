const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout((msg) => {
            posts.push(post);

            const error = false;

            if(!error) {
                resolve();
                // resolve(msg);
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000, 'Successfully Promised');
    });
}

// Promise
// createPost({title: 'Post Three', body: 'This is post three'})
// .then(getPosts)
// .catch(err => console.log(err));

// Async / Await : way to handle response
// async function init() {
//     await createPost({title: 'Post Three', body: 'This is post three'});
//     // console.log(posts);
//     getPosts(); // before calling this , wait for creatPost to complete
//     // console.log(posts);
// }

// init();


// Async / Await / Fetch
async function fetchUsers() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users');
    const res = await users.json();
    console.log(res);
    // console.log( await users.json());
}    

fetchUsers();

// Promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'Goodbye');
// });

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
//                     .then(res => res.json());

// // const promise5 = createPost({title: 'Post Three', body: 'This is post Three'})
// //                     .then(getPosts).catch(err => err);

// const promise5 = createPost({title: 'Post Three', body: 'This is post Three'})
//                     .then(msg => msg).catch(err => err);

// Promise.all([promise1, promise2, promise3, promise4, promise5])
// .then(values => console.log(values));

